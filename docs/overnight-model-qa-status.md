# Overnight Model QA Status

Generated: 2026. 05. 18. 18:28 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 18:28
- Raw citydata: `data/raw/citydata/2026-05-18/1828.json`
- Raw weather: `data/raw/weather/2026-05-18/1828.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 26.3 C
- Precipitation 1h: 0 mm
- Humidity: 30%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 19:00
- Traffic target: 2026. 05. 18. 19:00
- Taxi pressure target: 2026. 05. 18. 19:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9248 | high |
| 2 | 대치4동 | 0.4188 | watch |
| 3 | 역삼1동 | 0.4073 | watch |
| 4 | 삼성1동 | 0.3476 | low |
| 5 | 청담동 | 0.2663 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7300 | - |
| 3 | 역삼1동 | 0.6765 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9221 | - |
| 2 | 청담동 | 0.6994 | - |
| 3 | 신사동 | 0.5287 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7538 | 0.8776 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5118 | 0.5967 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4068 | 0.4809 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3914 | 0.4430 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3331 | 0.4280 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 18. 19:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 19:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 239250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 227
- Completed comparisons: 1
- Waiting comparisons: 226
- Live demand log count: 259
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.7667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 19:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 9
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.877
- Estimated positive imbalance after: 0.964
- Estimated relief score: 0.913
- Highest relief dong: 논현1동
