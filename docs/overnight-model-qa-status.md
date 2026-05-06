# Overnight Model QA Status

Generated: 2026. 05. 07. 01:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 01:41
- Raw citydata: `data/raw/citydata/2026-05-07/0141.json`
- Raw weather: `data/raw/weather/2026-05-07/0141.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.8 C
- Precipitation 1h: 0 mm
- Humidity: 65%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 02:00
- Traffic target: 2026. 05. 07. 02:00
- Taxi pressure target: 2026. 05. 07. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼1동 | 0.5192 | watch |
| 2 | 논현1동 | 0.4358 | watch |
| 3 | 청담동 | 0.2176 | low |
| 4 | 삼성1동 | 0.1882 | low |
| 5 | 대치4동 | 0.1826 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼1동 | 1.0000 | - |
| 2 | 논현1동 | 0.3230 | - |
| 3 | 대치4동 | 0.2846 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8442 | - |
| 2 | 청담동 | 0.4900 | - |
| 3 | 신사동 | 0.3663 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 역삼1동 | 0.5112 | 0.6079 | 0.6465 | medium | pattern_fallback_used |
| 2 | 논현1동 | 0.3984 | 0.4506 | 0.7428 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 청담동 | 0.2217 | 0.2487 | 0.7589 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.2181 | 0.2578 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.1710 | 0.2106 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 07. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 75750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 2
- Completed comparisons: 1
- Waiting comparisons: 1
- Live demand log count: 34
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 01:00
- Latest comparison top predicted: 역삼1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 3
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.502
- Estimated positive imbalance after: 0.192
- Estimated relief score: 0.31
- Highest relief dong: 역삼1동
