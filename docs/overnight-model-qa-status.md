# Overnight Model QA Status

Generated: 2026. 05. 17. 18:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 18:42
- Raw citydata: `data/raw/citydata/2026-05-17/1842.json`
- Raw weather: `data/raw/weather/2026-05-17/1842.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 26.4 C
- Precipitation 1h: 0 mm
- Humidity: 31%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 19:00
- Traffic target: 2026. 05. 17. 19:00
- Taxi pressure target: 2026. 05. 17. 19:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8928 | high |
| 2 | 역삼1동 | 0.3812 | low |
| 3 | 삼성1동 | 0.3326 | low |
| 4 | 논현2동 | 0.2195 | low |
| 5 | 청담동 | 0.2186 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7863 | - |
| 3 | 삼성1동 | 0.4765 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8818 | - |
| 2 | 청담동 | 0.5983 | - |
| 3 | 신사동 | 0.4647 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6526 | 0.7750 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4396 | 0.5228 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3840 | 0.4540 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3060 | 0.3399 | 0.7785 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2229 | 0.2549 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 17. 19:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 19:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 138500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 208
- Completed comparisons: 1
- Waiting comparisons: 207
- Live demand log count: 240
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 18:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.7333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 19:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.979
- Estimated positive imbalance after: 0.474
- Estimated relief score: 0.505
- Highest relief dong: 논현1동
