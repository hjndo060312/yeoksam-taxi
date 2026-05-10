# Overnight Model QA Status

Generated: 2026. 05. 10. 22:39 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 22:39
- Raw citydata: `data/raw/citydata/2026-05-10/2239.json`
- Raw weather: `data/raw/weather/2026-05-10/2239.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.6 C
- Precipitation 1h: 0 mm
- Humidity: 49%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 23:00
- Traffic target: 2026. 05. 10. 23:00
- Taxi pressure target: 2026. 05. 10. 23:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8514 | high |
| 2 | 역삼1동 | 0.4167 | watch |
| 3 | 삼성1동 | 0.2663 | low |
| 4 | 청담동 | 0.1910 | low |
| 5 | 대치4동 | 0.1625 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8388 | - |
| 3 | 삼성1동 | 0.4333 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8051 | - |
| 2 | 청담동 | 0.4588 | - |
| 3 | 신사동 | 0.3861 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6429 | 0.7485 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4529 | 0.5386 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.2873 | 0.3431 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.2370 | 0.2683 | 0.7410 | high | pattern_fallback_used |
| 5 | 청담동 | 0.1918 | 0.2236 | 0.6839 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 10. 23:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 23:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 89750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 80
- Completed comparisons: 1
- Waiting comparisons: 79
- Live demand log count: 112
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 22:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.3333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 23:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 4
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.793
- Estimated positive imbalance after: 0.403
- Estimated relief score: 0.39
- Highest relief dong: 논현1동
