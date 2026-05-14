# Overnight Model QA Status

Generated: 2026. 05. 15. 03:48 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 03:48
- Raw citydata: `data/raw/citydata/2026-05-15/0348.json`
- Raw weather: `data/raw/weather/2026-05-15/0348.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 18.9 C
- Precipitation 1h: 0 mm
- Humidity: 74%
- Wind: 0.6 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 04:00
- Traffic target: 2026. 05. 15. 04:00
- Taxi pressure target: 2026. 05. 15. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5574 | medium |
| 2 | 논현1동 | 0.3487 | low |
| 3 | 청담동 | 0.2145 | low |
| 4 | 역삼1동 | 0.1839 | low |
| 5 | 논현2동 | 0.1548 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.3473 | - |
| 3 | 대치4동 | 0.2046 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7845 | - |
| 2 | 청담동 | 0.5093 | - |
| 3 | 신사동 | 0.4022 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4778 | 0.5945 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3112 | 0.3553 | 0.7240 | high | pattern_fallback_used |
| 3 | 역삼1동 | 0.2351 | 0.2975 | 0.5340 | medium | pattern_fallback_used, signals_disagree |
| 4 | 청담동 | 0.2131 | 0.2390 | 0.7589 | high | pattern_fallback_used |
| 5 | 신사동 | 0.1409 | 0.1742 | 0.5746 | medium | pattern_fallback_used, signals_disagree |

- Guardrail target: 2026. 05. 15. 04:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 04:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 70000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 156
- Completed comparisons: 1
- Waiting comparisons: 155
- Live demand log count: 188
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.1333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 04:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.38
- Estimated positive imbalance after: 0.185
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
