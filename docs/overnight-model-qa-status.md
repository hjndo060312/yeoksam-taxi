# Overnight Model QA Status

Generated: 2026. 05. 16. 19:35 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 19:35
- Raw citydata: `data/raw/citydata/2026-05-16/1935.json`
- Raw weather: `data/raw/weather/2026-05-16/1935.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 25.2 C
- Precipitation 1h: 0 mm
- Humidity: 34%
- Wind: 0.7 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 20:00
- Traffic target: 2026. 05. 16. 20:00
- Taxi pressure target: 2026. 05. 16. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8871 | high |
| 2 | 역삼1동 | 0.4541 | watch |
| 3 | 삼성1동 | 0.3244 | low |
| 4 | 대치4동 | 0.2719 | low |
| 5 | 청담동 | 0.2375 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8545 | - |
| 3 | 대치4동 | 0.5159 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8704 | - |
| 2 | 청담동 | 0.6058 | - |
| 3 | 신사동 | 0.4740 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6902 | 0.8036 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4934 | 0.5867 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3676 | 0.4345 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3445 | 0.3863 | 0.7597 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2623 | 0.2999 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 16. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 156250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 189
- Completed comparisons: 1
- Waiting comparisons: 188
- Live demand log count: 221
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.45
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.237
- Estimated positive imbalance after: 0.634
- Estimated relief score: 0.603
- Highest relief dong: 논현1동
