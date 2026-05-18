# Overnight Model QA Status

Generated: 2026. 05. 19. 24:15 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 19. 24:15
- Raw citydata: `data/raw/citydata/2026-05-19/0015.json`
- Raw weather: `data/raw/weather/2026-05-19/0015.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.9 C
- Precipitation 1h: 0 mm
- Humidity: 52%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 19. 01:00
- Traffic target: 2026. 05. 19. 01:00
- Taxi pressure target: 2026. 05. 19. 01:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8452 | high |
| 2 | 대치4동 | 0.5082 | watch |
| 3 | 역삼1동 | 0.3752 | low |
| 4 | 청담동 | 0.3491 | low |
| 5 | 삼성1동 | 0.3409 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.9474 | - |
| 3 | 역삼1동 | 0.7726 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7952 | - |
| 2 | 청담동 | 0.4743 | - |
| 3 | 신사동 | 0.3525 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6393 | 0.7443 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4415 | 0.5147 | 0.6840 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.4063 | 0.5109 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 4 | 청담동 | 0.3609 | 0.4048 | 0.7589 | high | pattern_fallback_used |
| 5 | 삼성1동 | 0.3603 | 0.4259 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |

- Guardrail target: 2026. 05. 19. 01:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 19. 01:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 78250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 230
- Completed comparisons: 1
- Waiting comparisons: 229
- Live demand log count: 262
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 23:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 19. 01:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.371
- Estimated positive imbalance after: 0.573
- Estimated relief score: 0.798
- Highest relief dong: 대치4동
