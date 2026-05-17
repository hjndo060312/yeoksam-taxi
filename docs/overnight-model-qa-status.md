# Overnight Model QA Status

Generated: 2026. 05. 17. 23:39 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 23:38
- Raw citydata: `data/raw/citydata/2026-05-17/2338.json`
- Raw weather: `data/raw/weather/2026-05-17/2338.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 18.2 C
- Precipitation 1h: 0 mm
- Humidity: 54%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 24:00
- Traffic target: 2026. 05. 18. 24:00
- Taxi pressure target: 2026. 05. 18. 24:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8467 | high |
| 2 | 역삼1동 | 0.3500 | low |
| 3 | 삼성1동 | 0.2827 | low |
| 4 | 대치4동 | 0.2552 | low |
| 5 | 청담동 | 0.1951 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7454 | - |
| 3 | 대치4동 | 0.5173 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7876 | - |
| 2 | 청담동 | 0.4199 | - |
| 3 | 신사동 | 0.3938 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6363 | 0.7408 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4216 | 0.4915 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3056 | 0.3613 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 대치4동 | 0.2407 | 0.3027 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.2064 | 0.2315 | 0.7589 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 18. 24:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 24:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 79250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 213
- Completed comparisons: 1
- Waiting comparisons: 212
- Live demand log count: 245
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 23:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.25
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 24:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 3
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.657
- Estimated positive imbalance after: 0.364
- Estimated relief score: 0.293
- Highest relief dong: 논현1동
