# Overnight Model QA Status

Generated: 2026. 05. 15. 01:51 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 01:51
- Raw citydata: `data/raw/citydata/2026-05-15/0151.json`
- Raw weather: `data/raw/weather/2026-05-15/0151.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.7 C
- Precipitation 1h: 0 mm
- Humidity: 71%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 02:00
- Traffic target: 2026. 05. 15. 02:00
- Taxi pressure target: 2026. 05. 15. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8463 | high |
| 2 | 역삼2동 | 0.4805 | watch |
| 3 | 대치4동 | 0.4044 | watch |
| 4 | 역삼1동 | 0.3757 | low |
| 5 | 삼성1동 | 0.3539 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼2동 | 1.0000 | - |
| 2 | 논현1동 | 0.9621 | - |
| 3 | 대치4동 | 0.7845 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8377 | - |
| 2 | 청담동 | 0.4376 | - |
| 3 | 신사동 | 0.3518 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6511 | 0.7363 | 0.7428 | high | pattern_fallback_used, recent_rank_volatility |
| 2 | 역삼1동 | 0.4349 | 0.5070 | 0.6840 | high | pattern_fallback_used |
| 3 | 역삼2동 | 0.4059 | 0.5134 | 0.5345 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 4 | 삼성1동 | 0.3748 | 0.4431 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.3590 | 0.4421 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 15. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 77750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 154
- Completed comparisons: 2
- Waiting comparisons: 152
- Live demand log count: 186
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 01:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.9
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 11
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.778
- Estimated positive imbalance after: 0.67
- Estimated relief score: 1.108
- Highest relief dong: 논현1동
