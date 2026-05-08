# Overnight Model QA Status

Generated: 2026. 05. 09. 07:29 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 07:29
- Raw citydata: `data/raw/citydata/2026-05-09/0729.json`
- Raw weather: `data/raw/weather/2026-05-09/0729.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.9 C
- Precipitation 1h: 0 mm
- Humidity: 65%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 08:00
- Traffic target: 2026. 05. 09. 08:00
- Taxi pressure target: 2026. 05. 09. 08:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8488 | high |
| 2 | 삼성1동 | 0.5262 | watch |
| 3 | 대치4동 | 0.3223 | low |
| 4 | 논현2동 | 0.3196 | low |
| 5 | 역삼1동 | 0.3180 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 삼성1동 | 0.9232 | - |
| 3 | 논현2동 | 0.6889 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7944 | - |
| 2 | 청담동 | 0.6459 | - |
| 3 | 신사동 | 0.3774 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6359 | 0.7403 | 0.6865 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4641 | 0.5656 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 3 | 역삼1동 | 0.3867 | 0.4508 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.3101 | 0.3741 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 논현2동 | 0.2660 | 0.3643 | 0.4001 | low | pattern_fallback_used, signals_disagree, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 09. 08:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 08:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 78750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 48
- Completed comparisons: 2
- Waiting comparisons: 46
- Live demand log count: 80
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 07:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): -0.1333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 08:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 7
- Max incentive multiplier: 1.1
- Positive imbalance before: 1.197
- Estimated positive imbalance after: 0.514
- Estimated relief score: 0.683
- Highest relief dong: 논현1동
