# Overnight Model QA Status

Generated: 2026. 05. 16. 02:40 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 02:40
- Raw citydata: `data/raw/citydata/2026-05-16/0240.json`
- Raw weather: `data/raw/weather/2026-05-16/0240.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 18.4 C
- Precipitation 1h: 0 mm
- Humidity: 71%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 03:00
- Traffic target: 2026. 05. 16. 03:00
- Taxi pressure target: 2026. 05. 16. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8602 | high |
| 2 | 삼성1동 | 0.3488 | low |
| 3 | 청담동 | 0.3378 | low |
| 4 | 역삼1동 | 0.3370 | low |
| 5 | 대치4동 | 0.3083 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7192 | - |
| 3 | 삼성1동 | 0.6793 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8222 | - |
| 2 | 청담동 | 0.4635 | - |
| 3 | 신사동 | 0.3418 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6463 | 0.7524 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.3999 | 0.4755 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3716 | 0.4437 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.3570 | 0.4005 | 0.7589 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3025 | 0.3649 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 16. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 73250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 174
- Completed comparisons: 1
- Waiting comparisons: 173
- Live demand log count: 206
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 02:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.4667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.077
- Estimated positive imbalance after: 0.473
- Estimated relief score: 0.604
- Highest relief dong: 논현1동
