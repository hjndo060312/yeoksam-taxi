# Overnight Model QA Status

Generated: 2026. 05. 15. 24:01 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 24:01
- Raw citydata: `data/raw/citydata/2026-05-15/0001.json`
- Raw weather: `data/raw/weather/2026-05-15/0001.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.2 C
- Precipitation 1h: 0 mm
- Humidity: 64%
- Wind: 1.7 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 01:00
- Traffic target: 2026. 05. 15. 01:00
- Taxi pressure target: 2026. 05. 15. 01:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7054 | medium |
| 2 | 역삼2동 | 0.4825 | watch |
| 3 | 대치4동 | 0.3492 | low |
| 4 | 청담동 | 0.3241 | low |
| 5 | 역삼1동 | 0.2923 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼2동 | 1.0000 | - |
| 2 | 논현1동 | 0.8102 | - |
| 3 | 대치4동 | 0.7079 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7511 | - |
| 2 | 청담동 | 0.5416 | - |
| 3 | 신사동 | 0.4089 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5732 | 0.6482 | 0.7428 | high | pattern_fallback_used, recent_rank_volatility |
| 2 | 역삼2동 | 0.4047 | 0.5120 | 0.5345 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3703 | 0.4317 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.3295 | 0.4058 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.3223 | 0.3757 | 0.6839 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 15. 01:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 24:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 100250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 152
- Completed comparisons: 1
- Waiting comparisons: 151
- Live demand log count: 184
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 23:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.3
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 24:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.012
- Estimated positive imbalance after: 0.409
- Estimated relief score: 0.603
- Highest relief dong: 역삼2동
