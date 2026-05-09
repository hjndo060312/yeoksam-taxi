# Overnight Model QA Status

Generated: 2026. 05. 09. 23:32 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 23:32
- Raw citydata: `data/raw/citydata/2026-05-09/2332.json`
- Raw weather: `data/raw/weather/2026-05-09/2332.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13 C
- Precipitation 1h: 0 mm
- Humidity: 46%
- Wind: 0.7 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 24:00
- Traffic target: 2026. 05. 10. 24:00
- Taxi pressure target: 2026. 05. 10. 24:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8625 | high |
| 2 | 역삼1동 | 0.4180 | watch |
| 3 | 대치4동 | 0.2682 | low |
| 4 | 삼성1동 | 0.2655 | low |
| 5 | 청담동 | 0.2503 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8185 | - |
| 3 | 대치4동 | 0.5516 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8241 | - |
| 2 | 청담동 | 0.4456 | - |
| 3 | 신사동 | 0.3472 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6499 | 0.7567 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4527 | 0.5383 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.2958 | 0.3497 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.2704 | 0.3033 | 0.7589 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2548 | 0.3204 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 10. 24:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 24:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 89750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 61
- Completed comparisons: 1
- Waiting comparisons: 60
- Live demand log count: 93
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 23:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.4833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 24:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.939
- Estimated positive imbalance after: 0.434
- Estimated relief score: 0.505
- Highest relief dong: 논현1동
