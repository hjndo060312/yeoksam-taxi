# Overnight Model QA Status

Generated: 2026. 05. 17. 01:28 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 01:28
- Raw citydata: `data/raw/citydata/2026-05-17/0128.json`
- Raw weather: `data/raw/weather/2026-05-17/0128.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.6 C
- Precipitation 1h: 0 mm
- Humidity: 67%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 02:00
- Traffic target: 2026. 05. 17. 02:00
- Taxi pressure target: 2026. 05. 17. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8486 | high |
| 2 | 역삼1동 | 0.5050 | watch |
| 3 | 삼성1동 | 0.4780 | watch |
| 4 | 청담동 | 0.2495 | low |
| 5 | 논현2동 | 0.1866 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9833 | - |
| 3 | 삼성1동 | 0.9222 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7990 | - |
| 2 | 청담동 | 0.4817 | - |
| 3 | 신사동 | 0.3552 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6392 | 0.7442 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5118 | 0.6026 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4430 | 0.5343 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.2585 | 0.2900 | 0.7589 | high | pattern_fallback_used |
| 5 | 신사동 | 0.1872 | 0.2223 | 0.6496 | medium | pattern_fallback_used |

- Guardrail target: 2026. 05. 17. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 74750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 195
- Completed comparisons: 2
- Waiting comparisons: 193
- Live demand log count: 227
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 01:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.1333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.252
- Estimated positive imbalance after: 0.552
- Estimated relief score: 0.7
- Highest relief dong: 역삼1동
