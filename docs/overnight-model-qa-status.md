# Overnight Model QA Status

Generated: 2026. 05. 09. 21:33 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 21:33
- Raw citydata: `data/raw/citydata/2026-05-09/2133.json`
- Raw weather: `data/raw/weather/2026-05-09/2133.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16 C
- Precipitation 1h: 0 mm
- Humidity: 37%
- Wind: 0.5 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 22:00
- Traffic target: 2026. 05. 09. 22:00
- Taxi pressure target: 2026. 05. 09. 22:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8689 | high |
| 2 | 역삼1동 | 0.4807 | watch |
| 3 | 삼성1동 | 0.3444 | low |
| 4 | 대치4동 | 0.3040 | low |
| 5 | 삼성2동 | 0.2504 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8998 | - |
| 3 | 대치4동 | 0.6551 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8320 | - |
| 2 | 청담동 | 0.5988 | - |
| 3 | 신사동 | 0.4213 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6728 | 0.7833 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5013 | 0.5844 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3682 | 0.4353 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3536 | 0.3965 | 0.7597 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2900 | 0.3647 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 09. 22:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 22:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 128250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 59
- Completed comparisons: 1
- Waiting comparisons: 58
- Live demand log count: 91
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 21:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.7
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 22:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.27
- Estimated positive imbalance after: 0.552
- Estimated relief score: 0.718
- Highest relief dong: 논현1동
