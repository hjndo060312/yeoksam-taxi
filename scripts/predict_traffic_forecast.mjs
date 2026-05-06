import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const DEFAULT_PATTERN_CACHE = "data/processed/model_traffic_forecast/traffic_pattern_cache.json";
const DEFAULT_CURRENT_TRAFFIC = "data/processed/traffic/citydata_dong_traffic_latest.json";
const DEFAULT_OUT = "public/traffic-forecast/latest.json";
const DEFAULT_LOG = "data/processed/live_validation/traffic_forecast_log.jsonl";

function pad(value) {
  return String(value).padStart(2, "0");
}

function kstDate(date) {
  return new Date(date.getTime() + 9 * 60 * 60 * 1000);
}

function formatKstHour(date) {
  const kst = kstDate(date);
  return [
    kst.getUTCFullYear(),
    pad(kst.getUTCMonth() + 1),
    pad(kst.getUTCDate()),
  ].join("-") + ` ${pad(kst.getUTCHours())}:00`;
}

function defaultTargetHour() {
  const now = new Date();
  const kst = kstDate(now);
  kst.setUTCMinutes(0, 0, 0);
  const targetKstAsUtc = new Date(kst.getTime() + 60 * 60 * 1000);
  const targetUtc = new Date(targetKstAsUtc.getTime() - 9 * 60 * 60 * 1000);
  return formatKstHour(targetUtc);
}

function parseTarget(value) {
  if (!value) return parseTarget(defaultTargetHour());
  const text = String(value).trim();
  if (text.includes("T")) {
    const date = new Date(text);
    if (Number.isNaN(date.getTime())) throw new Error(`Invalid datetime: ${value}`);
    const kst = kstDate(date);
    kst.setUTCMinutes(0, 0, 0);
    const utcMs = kst.getTime() - 9 * 60 * 60 * 1000;
    return new Date(utcMs);
  }
  const [datePart, timePart] = text.split(" ");
  const [year, month, day] = datePart.split("-").map((v) => Number(v));
  const [hour, minute] = timePart.split(":").map((v) => Number(v));
  const utcMs = Date.UTC(year, month - 1, day, hour - 9, minute || 0, 0);
  return new Date(utcMs);
}

function patternTypeFor(date) {
  const weekday = kstDate(date).getUTCDay();
  return weekday === 0 || weekday === 6 ? "weekend" : "weekday";
}

function clamp(value, lower, upper) {
  return Math.max(lower, Math.min(upper, value));
}

function minmax(values) {
  const finite = values.filter((value) => Number.isFinite(value));
  if (finite.length === 0) return values.map(() => 0.5);
  const lo = Math.min(...finite);
  const hi = Math.max(...finite);
  if (Object.is(lo, hi)) return values.map(() => 0.5);
  return values.map((value) => (Number.isFinite(value) ? (value - lo) / (hi - lo) : 0.5));
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function liveMultiplier(current) {
  if (!current) return 1.0;
  const congestion = numberOrNull(current.congestion_score) ?? 0.45;
  const speed = numberOrNull(current.avg_speed_kmh) ?? 22;
  const congestionComponent = 0.75 + 0.5 * congestion;
  const speedComponent = clamp((24 - speed) / 80, -0.12, 0.12);
  return clamp(congestionComponent + speedComponent, 0.75, 1.35);
}

function predictedCongestionScore(volumeScore, currentCongestion) {
  if (!Number.isFinite(currentCongestion)) return clamp(volumeScore, 0, 1);
  return clamp(0.62 * volumeScore + 0.38 * currentCongestion, 0, 1);
}

function predictedSpeed(predictedCongestion, currentSpeed, currentCongestion) {
  if (!Number.isFinite(currentSpeed)) return clamp(39 - 28 * predictedCongestion, 6, 45);
  const baselineCongestion = Number.isFinite(currentCongestion) ? currentCongestion : 0.5;
  const speed = currentSpeed * (1 - 0.38 * (predictedCongestion - baselineCongestion));
  return clamp(speed, 6, 45);
}

function nowKstIso() {
  const kst = kstDate(new Date());
  return [
    kst.getUTCFullYear(),
    pad(kst.getUTCMonth() + 1),
    pad(kst.getUTCDate()),
  ].join("-") + `T${pad(kst.getUTCHours())}:${pad(kst.getUTCMinutes())}:${pad(kst.getUTCSeconds())}+09:00`;
}

function makeLookup(cache, keyFields, listField) {
  const lookup = new Map();
  for (const row of cache?.[listField] ?? []) {
    const key = keyFields.map((field) => row[field]).join("|");
    lookup.set(key, row);
  }
  return lookup;
}

function lookupPattern(exactLookup, fallbackLookup, dongName, dt) {
  const patternType = patternTypeFor(dt);
  const month = kstDate(dt).getUTCMonth() + 1;
  const hour = kstDate(dt).getUTCHours();
  const exactKey = `${dongName}|${month}|${hour}|${patternType}`;
  const fallbackKey = `${dongName}|${hour}|${patternType}`;
  const weekdayFallbackKey = `${dongName}|${hour}|weekday`;
  return (
    exactLookup.get(exactKey)
    || fallbackLookup.get(fallbackKey)
    || fallbackLookup.get(weekdayFallbackKey)
    || null
  );
}

function weightedVolume(patternNow, currentMultiplier) {
  const base = numberOrNull(patternNow?.traffic_volume_proxy) ?? 0;
  const lag1 = numberOrNull(patternNow?.traffic_lag_1h) ?? base;
  const lag24 = numberOrNull(patternNow?.traffic_lag_24h) ?? base;
  const roll24 = numberOrNull(patternNow?.traffic_rolling_24h_mean) ?? base;
  const blended = base * 0.62 + lag1 * 0.18 + lag24 * 0.12 + roll24 * 0.08;
  return blended * currentMultiplier;
}

function parseArgs() {
  const args = process.argv.slice(2);
  const targetArg = args.find((arg) => !arg.startsWith("--"));
  const options = {
    targetDatetime: targetArg ?? null,
    patternCache: DEFAULT_PATTERN_CACHE,
    currentTraffic: DEFAULT_CURRENT_TRAFFIC,
    out: DEFAULT_OUT,
    log: DEFAULT_LOG,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];
    if (arg === "--pattern-cache" && next) {
      options.patternCache = next;
      index += 1;
    } else if (arg === "--current-traffic" && next) {
      options.currentTraffic = next;
      index += 1;
    } else if (arg === "--out" && next) {
      options.out = next;
      index += 1;
    } else if (arg === "--log" && next) {
      options.log = next;
      index += 1;
    }
  }

  return options;
}

const options = parseArgs();
const targetDt = parseTarget(options.targetDatetime ?? defaultTargetHour());
const featureDt = new Date(targetDt.getTime() - 60 * 60 * 1000);

const cache = JSON.parse(await readFile(path.join(projectRoot, options.patternCache), "utf8"));
const currentTrafficPayload = JSON.parse(
  await readFile(path.join(projectRoot, options.currentTraffic), "utf8"),
);
const currentByDong = new Map(
  (currentTrafficPayload?.dong_summary ?? [])
    .filter((row) => row?.dong_name)
    .map((row) => [row.dong_name, row]),
);

const exactLookup = makeLookup(cache, cache.group_keys ?? [], "patterns");
const fallbackLookup = makeLookup(cache, cache.fallback_group_keys ?? [], "fallback_patterns");

const predictedVolumes = [];
const rows = [];

for (const dongName of cache.target_dongs ?? []) {
  const pattern = lookupPattern(exactLookup, fallbackLookup, dongName, featureDt);
  const current = currentByDong.get(dongName) ?? null;
  const multiplier = liveMultiplier(current);
  const predicted = weightedVolume(pattern, multiplier);
  predictedVolumes.push(predicted);
  rows.push({
    dong_name: dongName,
    predicted_traffic_volume_proxy: predicted,
    current_congestion_score: numberOrNull(current?.congestion_score),
    current_avg_speed_kmh: numberOrNull(current?.avg_speed_kmh),
    current_link_count: current?.link_count ?? null,
    live_calibration_multiplier: multiplier,
  });
}

const volumeScores = minmax(predictedVolumes);
const scored = rows.map((row, idx) => {
  const volumeScore = volumeScores[idx];
  const currentCongestion = row.current_congestion_score;
  const currentSpeed = row.current_avg_speed_kmh;
  const congestion = predictedCongestionScore(volumeScore, currentCongestion);
  const speed = predictedSpeed(congestion, currentSpeed, currentCongestion);
  return {
    dong_name: row.dong_name,
    predicted_traffic_volume_proxy: Number(row.predicted_traffic_volume_proxy.toFixed(3)),
    predicted_traffic_volume_score: Number(volumeScore.toFixed(4)),
    predicted_congestion_score: Number(congestion.toFixed(4)),
    predicted_avg_speed_kmh: Number(speed.toFixed(1)),
    current_congestion_score: currentCongestion == null ? null : Number(currentCongestion.toFixed(4)),
    current_avg_speed_kmh: currentSpeed == null ? null : Number(currentSpeed.toFixed(1)),
    current_link_count: row.current_link_count,
    live_calibration_multiplier: Number(row.live_calibration_multiplier.toFixed(4)),
  };
}).sort((left, right) => right.predicted_congestion_score - left.predicted_congestion_score);

const payload = {
  source: "traffic_pattern_proxy",
  generated_at: nowKstIso(),
  feature_datetime: [
    kstDate(featureDt).getUTCFullYear(),
    pad(kstDate(featureDt).getUTCMonth() + 1),
    pad(kstDate(featureDt).getUTCDate()),
  ].join("-") + `T${pad(kstDate(featureDt).getUTCHours())}:00:00+09:00`,
  target_datetime: [
    kstDate(targetDt).getUTCFullYear(),
    pad(kstDate(targetDt).getUTCMonth() + 1),
    pad(kstDate(targetDt).getUTCDate()),
  ].join("-") + `T${pad(kstDate(targetDt).getUTCHours())}:00:00+09:00`,
  horizon_hours: 1,
  model_target: cache.model_target ?? "target_traffic_volume_proxy_t_plus_1h",
  forecast_fields: [
    "predicted_traffic_volume_proxy",
    "predicted_traffic_volume_score",
    "predicted_congestion_score",
    "predicted_avg_speed_kmh",
  ],
  current_traffic_meta: currentTrafficPayload?.meta ?? null,
  note:
    "JS-only fallback: predicts next-hour traffic_volume_proxy using historical TOPIS pattern means with "
    + "live calibration from current Seoul citydata speed/congestion. Not an ML model run (Python deps unavailable).",
  regions: scored,
};

const outAbsolute = path.join(projectRoot, options.out);
await mkdir(path.dirname(outAbsolute), { recursive: true });
await writeFile(outAbsolute, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

if (options.log) {
  const logAbsolute = path.join(projectRoot, options.log);
  await mkdir(path.dirname(logAbsolute), { recursive: true });
  await appendFile(logAbsolute, `${JSON.stringify(payload)}\n`, "utf8");
}

console.log(`Wrote ${options.out}`);
if (options.log) console.log(`Appended ${options.log}`);
