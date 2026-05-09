# Overnight Model QA Status

Generated: 2026. 05. 10. 05:23 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 05:23
- Raw citydata: `data/raw/citydata/2026-05-10/0523.json`
- Raw weather: `data/raw/weather/2026-05-10/0523.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 8.7 C
- Precipitation 1h: 0 mm
- Humidity: 70%
- Wind: 0.2 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 06:00
- Traffic target: 2026. 05. 10. 06:00
- Taxi pressure target: 2026. 05. 10. 06:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5094 | watch |
| 2 | 논현1동 | 0.4496 | watch |
| 3 | 논현2동 | 0.2272 | low |
| 4 | 대치4동 | 0.2148 | low |
| 5 | 청담동 | 0.2110 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 논현2동 | 0.5254 | - |
| 3 | 대치4동 | 0.4409 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8244 | - |
| 2 | 청담동 | 0.5005 | - |
| 3 | 신사동 | 0.3100 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4477 | 0.5570 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.4035 | 0.4698 | 0.6865 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 역삼1동 | 0.2715 | 0.3134 | 0.7027 | high | pattern_fallback_used |
| 4 | 청담동 | 0.2065 | 0.2407 | 0.6839 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2057 | 0.2587 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 10. 06:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 06:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 58750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 67
- Completed comparisons: 2
- Waiting comparisons: 65
- Live demand log count: 99
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 05:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 06:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.264
- Estimated positive imbalance after: 0.069
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
