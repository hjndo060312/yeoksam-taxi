import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const LOG_PATH = "data/processed/live_validation/live_forecast_log.jsonl";
const PROCESSED_OUTPUT = "data/processed/live_validation/live_forecast_comparison.json";
const PUBLIC_OUTPUT = "public/live-forecast-comparison.json";
const MATCH_WINDOW_MINUTES = 90;

async function readJsonIfExists(filePath) {
  try {
    return JSON.parse(await readFile(path.join(projectRoot, filePath), "utf8"));
  } catch {
    return null;
  }
}

async function readJsonlIfExists(filePath) {
  try {
    const text = await readFile(path.join(projectRoot, filePath), "utf8");
    return text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .flatMap((line) => {
        try {
          return [JSON.parse(line)];
        } catch {
          return [];
        }
      });
  } catch {
    return [];
  }
}

async function walkJsonFiles(relativeDir) {
  const root = path.join(projectRoot, relativeDir);
  const files = [];

  async function walk(dir) {
    let entries = [];
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(entryPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        const info = await stat(entryPath);
        files.push({
          absolute_path: entryPath,
          relative_path: path.relative(projectRoot, entryPath),
          mtime_ms: info.mtimeMs,
        });
      }
    }
  }

  await walk(root);
  return files.sort((left, right) => left.mtime_ms - right.mtime_ms);
}

function parseTime(value) {
  if (!value) return null;
  if (typeof value !== "string") return null;
  const normalized = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(value)
    ? `${value.replace(" ", "T")}:00+09:00`
    : value;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? null : date;
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function round(value, digits = 4) {
  if (!Number.isFinite(value)) return null;
  return Number(value.toFixed(digits));
}

function rankRows(rows, field) {
  const sorted = [...rows]
    .filter((row) => Number.isFinite(row[field]))
    .sort((left, right) => right[field] - left[field]);
  return new Map(sorted.map((row, index) => [row.dong_name, index + 1]));
}

function pearson(leftValues, rightValues) {
  const pairs = leftValues
    .map((left, index) => [left, rightValues[index]])
    .filter(([left, right]) => Number.isFinite(left) && Number.isFinite(right));
  if (pairs.length < 3) return null;

  const leftMean = pairs.reduce((sum, [left]) => sum + left, 0) / pairs.length;
  const rightMean = pairs.reduce((sum, [, right]) => sum + right, 0) / pairs.length;
  let numerator = 0;
  let leftDenominator = 0;
  let rightDenominator = 0;

  for (const [left, right] of pairs) {
    const leftDelta = left - leftMean;
    const rightDelta = right - rightMean;
    numerator += leftDelta * rightDelta;
    leftDenominator += leftDelta ** 2;
    rightDenominator += rightDelta ** 2;
  }

  const denominator = Math.sqrt(leftDenominator * rightDenominator);
  return denominator > 0 ? numerator / denominator : null;
}

function spearmanFromRanks(rows) {
  const forecastRanks = rows.map((row) => row.forecast_rank);
  const observedRanks = rows.map((row) => row.observed_congestion_rank);
  return pearson(forecastRanks, observedRanks);
}

function trafficObservedAt(snapshot) {
  return parseTime(snapshot?.meta?.collected_at ?? snapshot?.meta?.extracted_at ?? null);
}

async function loadTrafficSnapshots() {
  const files = await walkJsonFiles("data/raw/traffic");
  const snapshots = [];

  for (const file of files) {
    const snapshot = await readJsonIfExists(file.relative_path);
    const observedAt = trafficObservedAt(snapshot);
    if (!observedAt || !Array.isArray(snapshot?.dong_summary)) continue;
    snapshots.push({
      ...file,
      observed_at: observedAt,
      snapshot,
    });
  }

  return snapshots.sort((left, right) => left.observed_at - right.observed_at);
}

function findTrafficSnapshot(targetAt, snapshots) {
  const maxTime = targetAt.getTime() + MATCH_WINDOW_MINUTES * 60 * 1000;
  return snapshots.find((snapshot) => {
    const observedTime = snapshot.observed_at.getTime();
    return observedTime >= targetAt.getTime() && observedTime <= maxTime;
  }) ?? null;
}

function compareForecastToTraffic(logEntry, trafficSnapshot) {
  const forecastRegions = Array.isArray(logEntry.forecast_top_regions)
    ? logEntry.forecast_top_regions
    : [];
  const trafficRows = trafficSnapshot.snapshot.dong_summary ?? [];
  const trafficByDong = new Map(trafficRows.map((row) => [row.dong_name, row]));

  const baseRows = forecastRegions
    .map((region) => {
      const observed = trafficByDong.get(region.dong_name);
      return {
        dong_name: region.dong_name,
        forecast_score: numberOrNull(region.score),
        forecast_raw_prediction: numberOrNull(region.raw_prediction),
        forecast_confidence: numberOrNull(region.confidence),
        observed_congestion_score: numberOrNull(observed?.congestion_score),
        observed_avg_speed_kmh: numberOrNull(observed?.avg_speed_kmh),
        observed_link_count: numberOrNull(observed?.link_count),
      };
    })
    .filter((row) => row.observed_congestion_score != null);

  const forecastRanks = rankRows(baseRows, "forecast_score");
  const observedRanks = rankRows(baseRows, "observed_congestion_score");

  const rows = baseRows
    .map((row) => {
      const forecastRank = forecastRanks.get(row.dong_name) ?? null;
      const observedRank = observedRanks.get(row.dong_name) ?? null;
      const scoreGap =
        row.forecast_score == null || row.observed_congestion_score == null
          ? null
          : row.forecast_score - row.observed_congestion_score;

      return {
        ...row,
        forecast_rank: forecastRank,
        observed_congestion_rank: observedRank,
        score_gap: scoreGap == null ? null : round(scoreGap, 4),
        abs_score_gap: scoreGap == null ? null : round(Math.abs(scoreGap), 4),
        rank_gap:
          forecastRank == null || observedRank == null ? null : forecastRank - observedRank,
      };
    })
    .sort((left, right) => (left.forecast_rank ?? 999) - (right.forecast_rank ?? 999));

  const absGaps = rows
    .map((row) => row.abs_score_gap)
    .filter((value) => Number.isFinite(value));
  const meanAbsScoreGap = absGaps.length
    ? absGaps.reduce((sum, value) => sum + value, 0) / absGaps.length
    : null;
  const topForecast = rows.find((row) => row.forecast_rank === 1) ?? null;
  const topObserved = rows.find((row) => row.observed_congestion_rank === 1) ?? null;

  return {
    generated_at: logEntry.generated_at ?? null,
    target_datetime: logEntry.target_datetime ?? null,
    feature_datetime: logEntry.feature_datetime ?? null,
    strategy: logEntry.strategy ?? null,
    actual_observed_at: trafficSnapshot.observed_at.toISOString(),
    actual_snapshot_path: trafficSnapshot.relative_path,
    comparison_type: "forecast_demand_score_vs_observed_road_congestion",
    note:
      "Forecast is a movement-demand proxy score. Observed value is Seoul citydata road congestion at/after the target time. This is a live signal check, not taxi-call accuracy.",
    overall: {
      row_count: rows.length,
      spearman_r: round(spearmanFromRanks(rows), 4),
      mean_abs_score_gap: round(meanAbsScoreGap, 4),
      top_forecast_dong: topForecast?.dong_name ?? null,
      top_observed_congestion_dong: topObserved?.dong_name ?? null,
      same_top_dong:
        topForecast?.dong_name != null && topForecast?.dong_name === topObserved?.dong_name,
    },
    rows,
  };
}

const logs = await readJsonlIfExists(LOG_PATH);
const trafficSnapshots = await loadTrafficSnapshots();
const completed = [];
const waiting = [];
const now = new Date();

for (const entry of logs) {
  const targetAt = parseTime(entry.target_datetime);
  if (!targetAt) continue;

  const matchedSnapshot = findTrafficSnapshot(targetAt, trafficSnapshots);
  if (matchedSnapshot) {
    completed.push(compareForecastToTraffic(entry, matchedSnapshot));
  } else {
    waiting.push({
      generated_at: entry.generated_at ?? null,
      target_datetime: entry.target_datetime ?? null,
      feature_datetime: entry.feature_datetime ?? null,
      strategy: entry.strategy ?? null,
      top_forecast_dong: entry.forecast_top_regions?.[0]?.dong_name ?? null,
      top_forecast_score: entry.forecast_top_regions?.[0]?.score ?? null,
      status: now < targetAt ? "waiting_for_target_time" : "waiting_for_observed_snapshot",
    });
  }
}

const latestCompleted = completed.at(-1) ?? null;
const latestWaiting = waiting.at(-1) ?? null;
const output = {
  generated_at: new Date().toISOString(),
  source_log_path: LOG_PATH,
  traffic_source_dir: "data/raw/traffic",
  status: latestCompleted ? "has_completed_comparison" : "waiting_for_observation",
  note:
    "Live comparison pairs saved demand-proxy forecasts with road congestion observed by Seoul citydata after the forecast target time. Public transit/taxi-call demand labels are separate and may arrive later.",
  match_window_minutes: MATCH_WINDOW_MINUTES,
  log_count: logs.length,
  completed_count: completed.length,
  waiting_count: waiting.length,
  latest: latestCompleted
    ? { kind: "completed", ...latestCompleted }
    : latestWaiting
      ? { kind: "waiting", ...latestWaiting }
      : null,
  completed: completed.slice(-20),
  waiting: waiting.slice(-20),
};

for (const relativePath of [PROCESSED_OUTPUT, PUBLIC_OUTPUT]) {
  const absolutePath = path.join(projectRoot, relativePath);
  await mkdir(path.dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, `${JSON.stringify(output, null, 2)}\n`);
  console.log(`Wrote ${relativePath}`);
}
