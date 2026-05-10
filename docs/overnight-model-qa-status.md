# Overnight Model QA Status

Generated: 2026. 05. 10. 12:20 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 12:20
- Raw citydata: `data/raw/citydata/2026-05-10/1220.json`
- Raw weather: `data/raw/weather/2026-05-10/1220.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 23.4 C
- Precipitation 1h: 0 mm
- Humidity: 28%
- Wind: 2.5 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 13:00
- Traffic target: 2026. 05. 10. 13:00
- Taxi pressure target: 2026. 05. 10. 13:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8789 | high |
| 2 | 삼성1동 | 0.4773 | watch |
| 3 | 역삼1동 | 0.3554 | low |
| 4 | 논현2동 | 0.3131 | low |
| 5 | 청담동 | 0.2544 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 삼성1동 | 0.7302 | - |
| 3 | 역삼1동 | 0.7142 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8461 | - |
| 2 | 청담동 | 0.6710 | - |
| 3 | 삼성1동 | 0.4514 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6268 | 0.7596 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 삼성1동 | 0.4625 | 0.5523 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 3 | 역삼1동 | 0.4329 | 0.5047 | 0.6840 | high | pattern_fallback_used |
| 4 | 논현2동 | 0.2853 | 0.3503 | 0.5876 | medium | pattern_fallback_used, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |
| 5 | 삼성2동 | 0.2680 | 0.3063 | 0.7222 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 10. 13:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 13:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 134500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 72
- Completed comparisons: 1
- Waiting comparisons: 71
- Live demand log count: 104
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 11:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.6333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 13:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.339
- Estimated positive imbalance after: 0.541
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
