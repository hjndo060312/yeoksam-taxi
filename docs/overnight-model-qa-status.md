# Overnight Model QA Status

Generated: 2026. 05. 08. 03:47 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 03:47
- Raw citydata: `data/raw/citydata/2026-05-08/0347.json`
- Raw weather: `data/raw/weather/2026-05-08/0347.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 12.4 C
- Precipitation 1h: 0 mm
- Humidity: 72%
- Wind: 1.6 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 04:00
- Traffic target: 2026. 05. 08. 04:00
- Taxi pressure target: 2026. 05. 08. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5504 | medium |
| 2 | 논현1동 | 0.3543 | low |
| 3 | 청담동 | 0.2252 | low |
| 4 | 역삼1동 | 0.1836 | low |
| 5 | 대치4동 | 0.1667 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.3469 | - |
| 3 | 대치4동 | 0.2055 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7967 | - |
| 2 | 청담동 | 0.5422 | - |
| 3 | 신사동 | 0.3536 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4548 | 0.5780 | 0.5263 | medium | pattern_fallback_used, signals_disagree, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3154 | 0.3672 | 0.6865 | high | pattern_fallback_used |
| 3 | 역삼1동 | 0.2413 | 0.2989 | 0.5715 | medium | pattern_fallback_used, signals_disagree, recent_rank_volatility |
| 4 | 청담동 | 0.2251 | 0.2574 | 0.7214 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.1582 | 0.1908 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 08. 04:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 04:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 70000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 23
- Completed comparisons: 1
- Waiting comparisons: 22
- Live demand log count: 55
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 04:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.362
- Estimated positive imbalance after: 0.167
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
