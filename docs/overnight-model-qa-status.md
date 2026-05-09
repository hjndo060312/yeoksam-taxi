# Overnight Model QA Status

Generated: 2026. 05. 09. 10:06 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 10:06
- Raw citydata: `data/raw/citydata/2026-05-09/1006.json`
- Raw weather: `data/raw/weather/2026-05-09/1006.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.3 C
- Precipitation 1h: 0 mm
- Humidity: 31%
- Wind: 1.5 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 11:00
- Traffic target: 2026. 05. 09. 11:00
- Taxi pressure target: 2026. 05. 09. 11:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8834 | high |
| 2 | 삼성1동 | 0.5192 | watch |
| 3 | 역삼1동 | 0.3140 | low |
| 4 | 대치4동 | 0.3096 | low |
| 5 | 논현2동 | 0.2782 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6699 | - |
| 3 | 역삼1동 | 0.6081 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8575 | - |
| 2 | 청담동 | 0.6923 | - |
| 3 | 삼성1동 | 0.5951 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6317 | 0.7655 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 삼성1동 | 0.4510 | 0.5440 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 3 | 역삼1동 | 0.3814 | 0.4536 | 0.6465 | medium | pattern_fallback_used |
| 4 | 대치4동 | 0.2940 | 0.3547 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.2674 | 0.3117 | 0.6839 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 09. 11:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 11:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 139000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 50
- Completed comparisons: 1
- Waiting comparisons: 49
- Live demand log count: 82
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 09:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.7333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 11:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.494
- Estimated positive imbalance after: 0.696
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
