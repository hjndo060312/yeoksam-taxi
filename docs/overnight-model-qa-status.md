# Overnight Model QA Status

Generated: 2026. 05. 10. 04:33 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 04:33
- Raw citydata: `data/raw/citydata/2026-05-10/0433.json`
- Raw weather: `data/raw/weather/2026-05-10/0433.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 8.9 C
- Precipitation 1h: 0 mm
- Humidity: 67%
- Wind: 1.1 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 05:00
- Traffic target: 2026. 05. 10. 05:00
- Taxi pressure target: 2026. 05. 10. 05:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5297 | watch |
| 2 | 논현1동 | 0.4183 | watch |
| 3 | 대치4동 | 0.2053 | low |
| 4 | 논현2동 | 0.2040 | low |
| 5 | 청담동 | 0.1849 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 논현2동 | 0.4588 | - |
| 3 | 대치4동 | 0.3830 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8313 | - |
| 2 | 청담동 | 0.4534 | - |
| 3 | 신사동 | 0.3173 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4573 | 0.5690 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3817 | 0.4444 | 0.6865 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 역삼1동 | 0.2357 | 0.2775 | 0.6652 | medium | pattern_fallback_used |
| 4 | 청담동 | 0.1902 | 0.2217 | 0.6839 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.1886 | 0.2372 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 10. 05:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 05:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 58250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 66
- Completed comparisons: 1
- Waiting comparisons: 65
- Live demand log count: 98
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 04:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 역삼2동
- Latest road-signal Spearman (policy check): -0.0333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 05:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.417
- Estimated positive imbalance after: 0.222
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
