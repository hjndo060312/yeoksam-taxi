import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const DEFAULT_INPUT =
  "data/processed/model_live_compatible/dong_demand_proxy_live_predictions_2025.csv";
const DEFAULT_OUT =
  "data/processed/model_live_compatible/demand_pattern_cache_2025.json";

function parseArgs() {
  const args = process.argv.slice(2);
  const options = { input: DEFAULT_INPUT, out: DEFAULT_OUT };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    const next = args[index + 1];
    if (arg === "--input" && next) {
      options.input = next;
      index += 1;
    } else if (arg === "--out" && next) {
      options.out = next;
      index += 1;
    }
  }

  return options;
}

function patternTypeFor(date) {
  const weekday = date.getDay(); // 0=Sun..6=Sat
  return weekday === 0 || weekday === 6 ? "weekend" : "weekday";
}

function parseKstDatetime(value) {
  // Input format: "YYYY-MM-DD HH:mm:ss" (KST, naive).
  const [datePart, timePart] = String(value).trim().split(" ");
  const [year, month, day] = datePart.split("-").map((v) => Number(v));
  const [hour, minute, second] = timePart.split(":").map((v) => Number(v));
  // Store as a Date that represents that KST local time.
  // Using UTC with +09:00 offset so getUTC* yields KST components.
  const utcMs = Date.UTC(year, month - 1, day, hour - 9, minute, second);
  return new Date(utcMs);
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function splitCsvLine(line) {
  // Minimal CSV parsing: handles quoted fields with commas.
  const fields = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === "\"") {
      const next = line[i + 1];
      if (inQuotes && next === "\"") {
        current += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      fields.push(current);
      current = "";
    } else {
      current += char;
    }
  }

  fields.push(current);
  return fields;
}

function meanState() {
  return { sum: 0, count: 0 };
}

function addMean(state, value) {
  if (!Number.isFinite(value)) return;
  state.sum += value;
  state.count += 1;
}

function meanValue(state) {
  return state.count ? state.sum / state.count : null;
}

const options = parseArgs();
const inputPath = path.join(projectRoot, options.input);
const outPath = path.join(projectRoot, options.out);

const text = await readFile(inputPath, "utf8");
const lines = text.split(/\r?\n/).filter(Boolean);
const header = splitCsvLine(lines[0] ?? "");
const headerIndex = Object.fromEntries(header.map((name, idx) => [name, idx]));

const dtIndex = headerIndex.datetime_kst;
const dongIndex = headerIndex.dong_name;
const targetIndex = headerIndex.target_inbound_boardings_per_1k_pop_t_plus_1h;
const predIndex = headerIndex.prediction;

if (
  dtIndex == null
  || dongIndex == null
  || targetIndex == null
  || predIndex == null
) {
  throw new Error(`Missing required columns in ${options.input}: ${header.join(",")}`);
}

const exact = new Map();
const fallback = new Map();
const dongSet = new Set();

for (const line of lines.slice(1)) {
  const fields = splitCsvLine(line);
  const dong = fields[dongIndex];
  const dt = parseKstDatetime(fields[dtIndex]);
  const month = dt.getUTCMonth() + 1;
  const hour = dt.getUTCHours();
  const patternType = patternTypeFor(dt);

  const target = numberOrNull(fields[targetIndex]);
  const prediction = numberOrNull(fields[predIndex]);
  if (!dong) continue;

  dongSet.add(dong);

  const exactKey = `${dong}|${month}|${hour}|${patternType}`;
  const fallbackKey = `${dong}|${hour}|${patternType}`;

  const exactState = exact.get(exactKey) ?? {
    key: { dong_name: dong, month, hour, pattern_type: patternType },
    target_mean: meanState(),
    prediction_mean: meanState(),
  };
  addMean(exactState.target_mean, target);
  addMean(exactState.prediction_mean, prediction);
  exact.set(exactKey, exactState);

  const fallbackState = fallback.get(fallbackKey) ?? {
    key: { dong_name: dong, hour, pattern_type: patternType },
    target_mean: meanState(),
    prediction_mean: meanState(),
  };
  addMean(fallbackState.target_mean, target);
  addMean(fallbackState.prediction_mean, prediction);
  fallback.set(fallbackKey, fallbackState);
}

const patterns = [...exact.values()]
  .map((state) => ({
    ...state.key,
    mean_target_inbound_boardings_per_1k_pop_t_plus_1h: meanValue(state.target_mean),
    mean_model_prediction: meanValue(state.prediction_mean),
    sample_count: state.target_mean.count,
  }))
  .filter((row) => row.sample_count > 0);

const fallbackPatterns = [...fallback.values()]
  .map((state) => ({
    ...state.key,
    mean_target_inbound_boardings_per_1k_pop_t_plus_1h: meanValue(state.target_mean),
    mean_model_prediction: meanValue(state.prediction_mean),
    sample_count: state.target_mean.count,
  }))
  .filter((row) => row.sample_count > 0);

const payload = {
  schema_version: 1,
  created_at: new Date().toISOString(),
  source_predictions_csv: options.input,
  target: "target_inbound_boardings_per_1k_pop_t_plus_1h",
  horizon_hours: 1,
  group_keys: ["dong_name", "month", "hour", "pattern_type"],
  fallback_group_keys: ["dong_name", "hour", "pattern_type"],
  target_dongs: [...dongSet].sort(),
  patterns,
  fallback_patterns: fallbackPatterns,
  note:
    "Pattern cache summarizing the 2025 test-period demand-proxy targets and model predictions. "
    + "Used for a JS-only fallback forecast when Python ML dependencies are unavailable.",
};

await mkdir(path.dirname(outPath), { recursive: true });
await writeFile(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Wrote ${path.relative(projectRoot, outPath)}`);
