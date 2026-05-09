# Overnight Model QA Status

Generated: 2026. 05. 10. 24:28 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 24:27
- Raw citydata: `data/raw/citydata/2026-05-10/0027.json`
- Raw weather: `data/raw/weather/2026-05-10/0028.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 12.1 C
- Precipitation 1h: 0 mm
- Humidity: 51%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 01:00
- Traffic target: 2026. 05. 10. 01:00
- Taxi pressure target: 2026. 05. 10. 01:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8572 | high |
| 2 | 역삼1동 | 0.5148 | watch |
| 3 | 삼성1동 | 0.5022 | watch |
| 4 | 청담동 | 0.2422 | low |
| 5 | 논현2동 | 0.1920 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9840 | - |
| 3 | 삼성1동 | 0.9042 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8222 | - |
| 2 | 청담동 | 0.4721 | - |
| 3 | 신사동 | 0.3929 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6463 | 0.7524 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5160 | 0.6075 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4551 | 0.5490 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.2592 | 0.2908 | 0.7589 | high | pattern_fallback_used |
| 5 | 신사동 | 0.1989 | 0.2361 | 0.6496 | medium | pattern_fallback_used |

- Guardrail target: 2026. 05. 10. 01:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 01:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 77750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 62
- Completed comparisons: 2
- Waiting comparisons: 60
- Live demand log count: 94
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 24:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.45
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 01:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.406
- Estimated positive imbalance after: 0.591
- Estimated relief score: 0.815
- Highest relief dong: 역삼1동
