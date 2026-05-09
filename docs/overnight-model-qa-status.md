# Overnight Model QA Status

Generated: 2026. 05. 10. 02:27 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 02:27
- Raw citydata: `data/raw/citydata/2026-05-10/0227.json`
- Raw weather: `data/raw/weather/2026-05-10/0227.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 9.9 C
- Precipitation 1h: 0 mm
- Humidity: 62%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 03:00
- Traffic target: 2026. 05. 10. 03:00
- Taxi pressure target: 2026. 05. 10. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8617 | high |
| 2 | 역삼1동 | 0.4657 | watch |
| 3 | 삼성1동 | 0.4105 | watch |
| 4 | 청담동 | 0.2380 | low |
| 5 | 논현2동 | 0.1746 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9303 | - |
| 3 | 삼성1동 | 0.8595 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8161 | - |
| 2 | 청담동 | 0.4339 | - |
| 3 | 신사동 | 0.3646 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6414 | 0.7468 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4915 | 0.5730 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4059 | 0.4947 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.2541 | 0.2850 | 0.7589 | high | pattern_fallback_used |
| 5 | 신사동 | 0.1968 | 0.2336 | 0.6496 | medium | pattern_fallback_used |

- Guardrail target: 2026. 05. 10. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 68250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 64
- Completed comparisons: 2
- Waiting comparisons: 62
- Live demand log count: 96
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 02:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): -0.05
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.148
- Estimated positive imbalance after: 0.545
- Estimated relief score: 0.603
- Highest relief dong: 논현1동
