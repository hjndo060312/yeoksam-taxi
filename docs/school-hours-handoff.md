# School-Hours Handoff

## 2026-05-06 10:31 KST pressure validation reframed

- Reframed taxi-pressure comparison as a policy check instead of accuracy scoring:
  - `comparison_type` is now `taxi_pressure_policy_check_vs_observed_road_signal`
  - `overall.check_type` is `policy_check`
  - `priority_vs_congestion_rank_spearman` was renamed to `priority_vs_road_congestion_spearman`
  - the JSON note now states that road congestion alone is not a valid ground-truth label for composite taxi pressure
- Added `scripts/build-public-pressure-baseline.mjs`.
  - Input: `data/processed/live_validation/taxi_pressure_log.jsonl`, `data/raw/traffic`, `data/raw/citydata`
  - Output: `data/processed/live_validation/public_pressure_baseline_comparison.json` and `public/public-pressure-baseline-comparison.json`
  - Observed public pressure formula: living-population score `45%` + road-congestion score `35%` + low-speed score `20%`
  - Current completed comparisons: `7`; latest row count is `2` because current citydata collection overlaps only `POI001` and `POI042` with the requested hardcoded area-code mapping, so latest Spearman is `null` until more mapped POIs are collected.
- Updated `/data`:
  - old `배차 압박도 참고` wording is removed
  - new cards: `배차 pressure 정책 점검` and `공개 pressure 기준값 비교`
  - added explanatory notes so negative road-signal Spearman is read as a supplementary policy signal, not model accuracy failure
- Verification:
  - `node scripts/build-taxi-pressure-comparison.mjs` OK
  - `node scripts/build-public-pressure-baseline.mjs` OK
  - `node scripts/build-data-summary.mjs` OK
  - `node scripts/build-overnight-status.mjs` OK
  - `npm.cmd run lint` OK
  - `npm.cmd run build` OK
  - Playwright `/data` desktop/mobile render checks OK, no console errors, no horizontal overflow

## 2026-05-06 10:09 KST /data Korean copy pass

- User feedback: `/data` wording still felt slightly awkward/translated.
- Polished visible copy on `/data`:
  - replaced leftover English dashboard labels such as `Proxy quality check`, `Model method`, `Dispatch pressure formula`, `target`, `rank gap`, and `source link`
  - changed first-viewport wording to explain data → model input → 1-hour proxy forecast in more natural Korean
  - introduced “이동수요 대리 지표(proxy)” near the top so `proxy` reads as a defined term rather than random jargon
  - translated raw forecast metadata where it surfaces in the UI (`proxy_source`, `raw_prediction_unit`, `feature_set`, action levels)
  - softened validation wording so road congestion remains a 참고 지표, not a taxi-call truth label
- Verification:
  - `npm.cmd run lint` OK
  - `npm.cmd run build` OK
  - Playwright desktop/mobile `/data` render checks OK, no console errors, no horizontal overflow
  - Screenshots: `data-copy-desktop.png`, `data-copy-mobile.png`

## 2026-05-06 09:44 KST /data reframed as data catalog

- User review correctly flagged that `/data` had become a validation page rather than a data page.
- Reworked `/data` to follow the spec/module flow:
  - first viewport now leads with data catalog + feature pipeline, not prediction scoring
  - added 3-year public-data summary: `236,736` dong-hour rows, `77MB`, `2023-01~2025-12`, 9 administrative dongs
  - added source inventory from `public/data-catalog.json`: public-transit OD, TOPIS, realtime citydata, living population, KMA weather, holidays, OSM/spatial features
  - added artifact table that separates public JSON/CSV outputs from local large/model artifacts
  - moved `Say / Do not say` guardrails up near the top so the page does not imply direct KakaoT call prediction
- Reworded validation:
  - removed `Top 일치/Top 불일치` status language
  - reduced the three-card validation board to two concepts: demand-proxy directionality and road-model MAE
  - labels now describe road congestion as a reference/public signal, not a taxi-demand truth label
  - taxi pressure remains as a later formula/decision section, separated from demand validation
- Verification:
  - `npm.cmd run lint` OK
  - `npm.cmd run build` OK
  - Playwright desktop/mobile `/data` render checks OK, no console errors, no horizontal overflow
  - Screenshots: `data-page-catalog-desktop.png`, `data-page-catalog-mobile.png`

## 2026-05-06 09:15 KST /data validation-board redesign

- User feedback: `/data` still felt too much like a generic report/AI demo and did not foreground prediction-vs-observation gaps.
- Added a top-level `Prediction vs Observation` board inspired by mature traffic/public-agency dashboards:
  - demand proxy forecast vs observed road-congestion top region, Spearman, mean score gap
  - traffic forecast vs observed congestion/speed, congestion MAE, speed MAE
  - taxi-pressure priority vs observed congestion, priority Spearman
  - two visible gap tables for dong-level demand proxy gap and road forecast error
- Current latest completed comparison shown on `/data`:
  - target `2026-05-06T09:00:00+09:00`, observed at `2026-05-06 09:06`
  - demand proxy top forecast `대치4동`, observed congestion top `삼성1동`, Spearman `-0.300`
  - traffic forecast top `논현1동`, observed congestion top `삼성1동`, congestion MAE `0.283`, speed MAE `6.3km/h`
- Verification: `npm.cmd run lint`, `npm.cmd run build`, headless `/data` render check. Screenshot: `data-validation-board.png`.

## 2026-05-06 08:56 KST 09:00 refresh + baseline sanity check

- Refreshed public artifacts for target `2026-05-06T09:00:00+09:00` (sandbox network blocked → last-known-good snapshots used):
  - Command: `node scripts/run-live-demand-cycle.mjs "2026-05-06 09:00" --offline --node-models`
  - Demand proxy top 3: `대치4동` `1.0000`, `논현1동` `0.7218`, `논현2동` `0.5925`
  - Taxi-pressure top 3: `논현1동` priority `0.6688` / pressure `0.7644` / `medium`, `대치4동` priority `0.5247` / pressure `0.6064` / `watch`, `청담동` priority `0.2781` / pressure `0.3759` / `low`
  - Dispatch top action: `대치4동` `수요 집중 매우 높음` (multiplier `1.2`), next: `논현1동` `주의 관찰` (multiplier `1.05`)
- Data honesty: newest *attempt* snapshots (`06:54`) are `ok=false` (fetch failed); the pipeline automatically falls back to last `ok=true` citydata/weather snapshots (`02:05`), and the /data page surfaces both “latest attempt” and “last OK”.
- Pattern-baseline sanity check (JS-only fallback mode): refreshed `public/demand-pattern-summary.json`
  - Command: `npm run model:evaluate:demand-pattern-baseline`
  - 2025 supervised test rows (74,259): pattern-mean LOO MAPE `21.16%` vs model-pred MAPE `34.57%`
- Verification: `npm.cmd run lint` OK, `node node_modules/typescript/bin/tsc -p tsconfig.json --noEmit` OK.

## 2026-05-06 07:57 KST /map route fix + 08:00 refresh

- Refreshed public artifacts for target `2026-05-06T08:00:00+09:00` (sandbox network blocked → cached snapshots used):
  - Command: `node scripts/run-live-demand-cycle.mjs "2026-05-06 08:00" --offline --node-models`
  - Demand proxy top 3: 대치4동 `1.0000`, 논현2동 `0.6910`, 논현1동 `0.6865`
  - Taxi-pressure top 3: 논현1동 priority `0.6461` / pressure `0.7460` / `medium`, 대치4동 priority `0.5236` / pressure `0.6053` / `watch`, 논현2동 priority `0.3031` / pressure `0.4096` / `low`
  - Dispatch top action: 대치4동 `수요 집중 매우 높음` (multiplier `1.2`), 다음: 논현1동 `주의 관찰` (multiplier `1.05`)
- QA: `/map` was returning 404 (only `/` existed). Added an alias App Router route so `/map` loads the same 3D scene as `/`:
  - Added: `src/app/map/page.tsx`
- QA: `/data` now includes an explicit note that “강수 없음” is PTY=0 (not missing weather data); outages are shown via KMA OK/FAIL + recent attempt logs.
- Verification: `npm.cmd run lint` OK, `node node_modules/typescript/bin/tsc -p tsconfig.json --noEmit` OK.
- Sandbox note: `next build` still fails here with `spawn EPERM`, so production build / Playwright screenshot QA can’t be executed in this environment.

## 2026-05-06 07:01 KST UI + fresh artifacts

- Refreshed public artifacts for target `2026-05-06T07:00:00+09:00` (sandbox network blocked → cached snapshots used):
  - Command: `node scripts/run-live-demand-cycle.mjs`
  - Demand proxy top 3: 대치4동 `1.0000`, 삼성1동 `0.6568`, 논현2동 `0.6174`
  - Taxi-pressure top 3: 논현1동 priority `0.5399` / pressure `0.6604` / `watch`, 대치4동 priority `0.5213` / pressure `0.6032` / `watch`, 삼성1동 priority `0.3586` / pressure `0.4846` / `low`
  - Dispatch top action: 대치4동 `수요 집중 매우 높음` (multiplier `1.2`)
- UI credibility: `/data` now shows relative ages for collection timestamps, KMA weather status, and cached raw snapshot paths.
- Fix: `src/components/MapSimulator.tsx` now handles `confidence: null` safely (TS + runtime robustness).
- Verification: `npm.cmd run lint` OK, `node node_modules/typescript/bin/tsc -p tsconfig.json --noEmit` OK.

## 2026-05-06 05:06 KST pattern-cache upgrade + live refresh

- Built a larger JS fallback pattern cache directly from the historical feature table (2023-01..2025-12), so the sandbox can generate demand-proxy forecasts without Python ML deps:
  - Input: `data/processed/features/dong_hour_features_v2_2023-01_2025-12.csv` (236,736 rows)
  - Output: `data/processed/model_live_compatible/demand_pattern_cache_2023_2025.json`
  - Command: `npm.cmd run model:build:demand-pattern-cache:features`
- Updated the Node forecast payload to surface provenance fields (`pattern_cache_source`, `raw_prediction_unit`, `proxy_source`) and to prefer the 2023-2025 cache with fallback to the older 2025 cache.
- UI credibility: updated `/data` “1시간 뒤 수요 예측” panel to show proxy source + cache filename + unit/feature-set (no behavior change to the score bars).
- Refreshed offline live artifacts for a consistent target hour:
  - Command: `node scripts/run-live-demand-cycle.mjs "2026-05-06 06:00" --offline --node-models`
  - Target: `2026-05-06T06:00:00+09:00`
  - Demand proxy top 3: 대치4동 `1.0000`, 삼성1동 `0.8678`, 역삼1동 `0.6289`
  - Taxi-pressure top 3: 논현1동 pressure `0.6454` / priority `0.5213` / `watch`, 대치4동 pressure `0.6030` / priority `0.5211` / `watch`, 삼성1동 pressure `0.5897` / priority `0.4752` / `watch`
  - Dispatch top 2: 대치4동 `수요 집중 매우 높음` (multiplier `1.2`), 삼성1동 `주의 관찰` (multiplier `1.05`)
- Verification: `npm.cmd run lint` OK, `node node_modules/typescript/bin/tsc -p tsconfig.json --noEmit` OK.

## 2026-05-06 03:06 KST QA + sandbox notes

- Found and mitigated a map-page crash risk where `new Map(...)` could be resolved to the Lucide `Map` icon export under Turbopack module binding collisions.
  - Fix: switched all `new Map(...)` usages to `new globalThis.Map(...)` across `src/`.
  - This keeps the UI logic stable even if a future import introduces a `Map` binding in module scope.
- Validation run (sandbox-safe):
  - `npm.cmd run lint`: OK
  - `node node_modules/typescript/bin/tsc -p tsconfig.json --noEmit`: OK
- Sandbox limitation observed in this environment:
  - Node `child_process.spawn/execFile/execSync` fails with `spawn EPERM`, so `next build` cannot be executed here.
  - Outbound network sockets are blocked for Python and Node `fetch`, so historical ZIP ingestion cannot be extended during this run.
  - Attempting `python -m ensurepip` created a locked temp dir under `data/tmp/` (permission denied); manual cleanup may be required outside the sandbox.
- Added offline-ready Python collectors for later runs on a normal machine (network enabled):
  - `scripts/collect_seoul_transit_od_months.py` + `npm run data:collect:transit:od:py`
  - `scripts/collect_seoul_living_population_months.py` + `npm run data:collect:living-pop:py`

## 2026-05-06 02:06 KST heartbeat

- Ran `npm run model:live:demand-cycle` because the previous `02:00` forecast target had elapsed.
- New raw snapshots:
  - Citydata: `data/raw/citydata/2026-05-06/0205.json`
  - Weather: `data/raw/weather/2026-05-06/0205.json`
  - Traffic: `data/raw/traffic/2026-05-06/0205.json`
- New model targets:
  - Demand: `2026-05-06T03:00:00+09:00`
  - Traffic: `2026-05-06T03:00:00+09:00`
  - Taxi pressure: `2026-05-06T03:00:00+09:00`
- Current top demand proxy: 논현1동 `1.0000`, 대치4동 `0.8039`, 역삼1동 `0.7439`.
- Current top taxi-pressure priority: 논현1동 priority `0.8482` / pressure `0.9090` / `high`, 대치4동 priority `0.4200` / pressure `0.5240` / `watch`, 청담동 priority `0.3574` / pressure `0.4830` / `low`.
- Current dispatch plan: 논현1동 and 대치4동 are medium action areas; 역삼1동 is watch.

### Historical model validation

- Re-ran `python scripts/evaluate_demand_feature_sets.py` against `data/processed/features/dong_hour_features_v2_2023-01_2025-12.csv`.
- Refreshed `data/processed/model_feature_set_eval/demand_proxy_feature_set_eval.json` and `.csv`.
- Copied the refreshed CSV to `public/downloads/demand_proxy_feature_set_eval.csv`.
- Backtest split: 154,206 train rows and 74,259 test rows.
- Key results:
  - Full observed upper-bound model: R2 `0.9888`, MAPE `21.5%`.
  - Live-compatible proxy model: R2 `0.9509`, MAPE `36.9%`.
  - Strict calendar/weather/static model: R2 `0.9585`, MAPE `34.6%`.
  - Same target hour last week baseline: R2 `0.8643`, MAPE `19.7%`.
- Interpretation: historical transit/living-population ZIP-derived data is already represented in the 2023-2025 feature table, so the immediate priority is not a blind new ZIP download. The next useful data task is to document source coverage and identify whether newer 2026 ZIP releases can extend the table.

## 2026-05-06 02:29 KST heartbeat

- Forecast artifacts are still fresh for the `03:00` target; no duplicate data collection was needed.
- Made a small map UI wording pass to reduce generic AI/demo feel:
  - `데모 예측` -> `대체 시나리오`
  - `샘플 예측` -> `기준 시나리오`
  - `데모 데이터` -> `기준 시나리오`
  - `모델 예측` -> `공개데이터 예측`
- Rationale: benchmark direction is an operations dashboard, so fallback states should read like analyst scenarios rather than AI demo labels.
- Verification: `npm.cmd run lint` passed; `npm.cmd run build` passed after allowing the Next.js build worker spawn that the sandbox initially blocked.

## 2026-05-06 01:47 KST kickoff

Codex automation is active for the school-hours run. This file is the running handoff for data ingestion, training/validation, UI QA, and blockers while the user is away.

### Fresh collection

- Citydata snapshot: `data/raw/citydata/2026-05-06/0146.json`
- Weather snapshot: `data/raw/weather/2026-05-06/0147.json`
- Traffic snapshot: `data/raw/traffic/2026-05-06/0146.json`
- KMA status: OK, HTTP 200
- Weather meaning: precipitation type `없음` means no precipitation, not missing data.

### Latest model targets

- Demand target: `2026-05-06T02:00:00+09:00`
- Traffic target: `2026-05-06T02:00:00+09:00`
- Taxi-pressure target: `2026-05-06T02:00:00+09:00`

### Current top outputs

- Demand proxy top 3: 역삼1동 `1.0000`, 논현1동 `0.3222`, 대치4동 `0.2884`
- Taxi pressure top 3: 역삼1동 pressure `0.6116` / priority `0.5231`, 논현1동 pressure `0.5468` / priority `0.4046`, 청담동 pressure `0.3277` / priority `0.2425`
- Dispatch plan top action: 역삼1동, `수요 집중 매우 높음`, coverage units `3`, incentive multiplier `1.2`

### Kickoff result

- Ran `npm run model:live:demand-cycle`.
- Updated forecast, traffic forecast, taxi-pressure, dispatch plan, data summary, live comparison, model observability, overnight status, and live validation artifacts.
- No code changes were made during this kickoff beyond creating this handoff note.

### School-hours focus

- Look for official/public historical datasets, including ZIP archives, that can improve Module 2 feature engineering or Module 3 training/validation.
- If a ZIP dataset is useful and reasonably scoped, download/extract/cache locally, document source and coverage, then build ingestion/training or validation around it.
- Keep the app honest: this is a public-data proxy model, not direct KakaoT call-volume prediction.
- QA `/data` and `/` map page after any data/model/UI changes.

## 2026-05-06 01:50 KST data-page weather wording

- Confirmed KMA weather collection is healthy: latest weather snapshot returned HTTP 200 with temperature `9.2°C`, humidity `66%`, precipitation `0mm`, and precipitation type code `0`.
- The `/data` table was showing citydata `precipitation_type` directly as `없음`, which meant "no precipitation" but looked like "weather missing".
- Updated `/data` wording so the column reads `강수/기온` and values render as `강수 없음 · 9.5°C`.
- Verification: `npm run lint`, `npm run build`.
