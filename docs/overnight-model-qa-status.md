# Overnight Model QA Status

Generated: 2026. 05. 10. 19:35 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 19:35
- Raw citydata: `data/raw/citydata/2026-05-10/1935.json`
- Raw weather: `data/raw/weather/2026-05-10/1935.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.3 C
- Precipitation 1h: 0 mm
- Humidity: 31%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 20:00
- Traffic target: 2026. 05. 10. 20:00
- Taxi pressure target: 2026. 05. 10. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8719 | high |
| 2 | 역삼1동 | 0.4969 | watch |
| 3 | 삼성1동 | 0.3703 | low |
| 4 | 대치4동 | 0.2438 | low |
| 5 | 삼성2동 | 0.2416 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9645 | - |
| 3 | 삼성1동 | 0.5877 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8400 | - |
| 2 | 청담동 | 0.6374 | - |
| 3 | 신사동 | 0.4777 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6412 | 0.7615 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.5137 | 0.5988 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3937 | 0.4654 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3370 | 0.3815 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2334 | 0.2874 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 10. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 128000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 77
- Completed comparisons: 1
- Waiting comparisons: 76
- Live demand log count: 109
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.125
- Estimated positive imbalance after: 0.407
- Estimated relief score: 0.718
- Highest relief dong: 논현1동
