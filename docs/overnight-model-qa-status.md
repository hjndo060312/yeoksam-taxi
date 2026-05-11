# Overnight Model QA Status

Generated: 2026. 05. 11. 12:23 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 11. 12:23
- Raw citydata: `data/raw/citydata/2026-05-11/1223.json`
- Raw weather: `data/raw/weather/2026-05-11/1223.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.8 C
- Precipitation 1h: 0 mm
- Humidity: 63%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 11. 13:00
- Traffic target: 2026. 05. 11. 13:00
- Taxi pressure target: 2026. 05. 11. 13:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7792 | high |
| 2 | 대치4동 | 0.5431 | watch |
| 3 | 삼성1동 | 0.2772 | low |
| 4 | 청담동 | 0.2491 | low |
| 5 | 역삼1동 | 0.2464 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8136 | - |
| 3 | 역삼1동 | 0.3981 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8784 | - |
| 2 | 청담동 | 0.6884 | - |
| 3 | 신사동 | 0.4601 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6848 | 0.7744 | 0.7428 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4072 | 0.4747 | 0.6840 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.4059 | 0.5330 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 4 | 삼성1동 | 0.3611 | 0.4269 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.3354 | 0.3797 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 11. 13:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 11. 13:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 289750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 92
- Completed comparisons: 1
- Waiting comparisons: 91
- Live demand log count: 124
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 11. 11:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.4667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 11. 13:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.18
- Estimated positive imbalance after: 0.56
- Estimated relief score: 0.62
- Highest relief dong: 대치4동
