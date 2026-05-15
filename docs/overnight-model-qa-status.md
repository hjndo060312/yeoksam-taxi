# Overnight Model QA Status

Generated: 2026. 05. 15. 14:28 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 14:28
- Raw citydata: `data/raw/citydata/2026-05-15/1428.json`
- Raw weather: `data/raw/weather/2026-05-15/1428.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 31.5 C
- Precipitation 1h: 0 mm
- Humidity: 29%
- Wind: 1.8 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 15:00
- Traffic target: 2026. 05. 15. 15:00
- Taxi pressure target: 2026. 05. 15. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8801 | high |
| 2 | 대치4동 | 0.5497 | watch |
| 3 | 삼성1동 | 0.3360 | low |
| 4 | 논현2동 | 0.2854 | low |
| 5 | 역삼1동 | 0.2727 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.9664 | - |
| 3 | 역삼1동 | 0.4645 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8845 | - |
| 2 | 청담동 | 0.7392 | - |
| 3 | 삼성1동 | 0.5583 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7401 | 0.8450 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4434 | 0.5404 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4270 | 0.5028 | 0.6652 | medium | pattern_fallback_used |
| 4 | 대치4동 | 0.3954 | 0.5311 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3610 | 0.4048 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 15. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 295750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 164
- Completed comparisons: 1
- Waiting comparisons: 163
- Live demand log count: 196
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 13:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 9
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.667
- Estimated positive imbalance after: 0.753
- Estimated relief score: 0.914
- Highest relief dong: 대치4동
