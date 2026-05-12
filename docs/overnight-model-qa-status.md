# Overnight Model QA Status

Generated: 2026. 05. 13. 04:47 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 04:42
- Raw citydata: `data/raw/citydata/2026-05-13/0442.json`
- Raw weather: `data/raw/weather/2026-05-13/0447.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.2 C
- Precipitation 1h: 0 mm
- Humidity: 87%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 05:00
- Traffic target: 2026. 05. 13. 05:00
- Taxi pressure target: 2026. 05. 13. 05:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5607 | medium |
| 2 | 논현1동 | 0.5255 | watch |
| 3 | 청담동 | 0.2148 | low |
| 4 | 대치4동 | 0.2117 | low |
| 5 | 논현2동 | 0.1810 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 대치4동 | 0.5440 | - |
| 3 | 역삼1동 | 0.4479 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 청담동 | 0.5921 | - |
| 3 | 신사동 | 0.4637 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4236 | 0.5490 | 0.4926 | low | pattern_fallback_used, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |
| 2 | 논현1동 | 0.3620 | 0.4516 | 0.5590 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links |
| 3 | 대치4동 | 0.1883 | 0.2473 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, thin_current_traffic_links |
| 4 | 논현2동 | 0.1701 | 0.2089 | 0.5876 | medium | pattern_fallback_used, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |
| 5 | 역삼1동 | 0.1650 | 0.2062 | 0.5565 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links, recent_rank_volatility |

- Guardrail target: 2026. 05. 13. 05:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: -
- Live POIs: 0
- Covered dongs: 0
- Forecast population midpoint sum: -

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 120
- Completed comparisons: 1
- Waiting comparisons: 119
- Live demand log count: 152
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 04:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 1
- POI forecast completed/waiting: 0 / 0
- Latest POI forecast target: -
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.3
- Estimated positive imbalance after: 0.105
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
