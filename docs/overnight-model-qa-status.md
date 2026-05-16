# Overnight Model QA Status

Generated: 2026. 05. 17. 03:30 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 03:30
- Raw citydata: `data/raw/citydata/2026-05-17/0330.json`
- Raw weather: `data/raw/weather/2026-05-17/0330.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.9 C
- Precipitation 1h: 0 mm
- Humidity: 71%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 04:00
- Traffic target: 2026. 05. 17. 04:00
- Taxi pressure target: 2026. 05. 17. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5483 | watch |
| 2 | 논현1동 | 0.3530 | low |
| 3 | 청담동 | 0.1989 | low |
| 4 | 신사동 | 0.1422 | low |
| 5 | 역삼1동 | 0.1187 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 논현1동 | 0.1714 | - |
| 3 | 역삼1동 | 0.1585 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7975 | - |
| 2 | 청담동 | 0.5124 | - |
| 3 | 신사동 | 0.3987 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4579 | 0.5758 | 0.5451 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3205 | 0.3624 | 0.7428 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 청담동 | 0.2053 | 0.2303 | 0.7589 | high | pattern_fallback_used |
| 4 | 역삼1동 | 0.1843 | 0.2170 | 0.6652 | medium | pattern_fallback_used |
| 5 | 신사동 | 0.1746 | 0.1993 | 0.7246 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 17. 04:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 04:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 61750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 197
- Completed comparisons: 1
- Waiting comparisons: 196
- Live demand log count: 229
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): -0.05
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 04:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.447
- Estimated positive imbalance after: 0.252
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
