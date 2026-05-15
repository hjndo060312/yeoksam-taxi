# Overnight Model QA Status

Generated: 2026. 05. 15. 20:45 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 20:45
- Raw citydata: `data/raw/citydata/2026-05-15/2045.json`
- Raw weather: `data/raw/weather/2026-05-15/2045.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 24.1 C
- Precipitation 1h: 0 mm
- Humidity: 47%
- Wind: 0.4 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 21:00
- Traffic target: 2026. 05. 15. 21:00
- Taxi pressure target: 2026. 05. 15. 21:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8972 | high |
| 2 | 역삼1동 | 0.4141 | watch |
| 3 | 대치4동 | 0.3618 | low |
| 4 | 삼성1동 | 0.3574 | low |
| 5 | 삼성2동 | 0.2687 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8019 | - |
| 3 | 대치4동 | 0.7762 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8849 | - |
| 2 | 청담동 | 0.6076 | - |
| 3 | 신사동 | 0.4009 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7185 | 0.8602 | 0.6340 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4861 | 0.5723 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성2동 | 0.4114 | 0.4569 | 0.7785 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3767 | 0.4544 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.3237 | 0.4159 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 15. 21:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 21:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 185250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 168
- Completed comparisons: 1
- Waiting comparisons: 167
- Live demand log count: 200
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 20:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.7333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 21:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.529
- Estimated positive imbalance after: 0.731
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
