# Overnight Model QA Status

Generated: 2026. 05. 13. 03:55 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 03:50
- Raw citydata: `data/raw/citydata/2026-05-13/0350.json`
- Raw weather: `data/raw/weather/2026-05-13/0355.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.2 C
- Precipitation 1h: 0 mm
- Humidity: 88%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 04:00
- Traffic target: 2026. 05. 13. 04:00
- Taxi pressure target: 2026. 05. 13. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5310 | watch |
| 2 | 논현1동 | 0.4401 | watch |
| 3 | 청담동 | 0.2352 | low |
| 4 | 신사동 | 0.1653 | low |
| 5 | 역삼1동 | 0.1585 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.3858 | - |
| 3 | 대치4동 | 0.2394 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 청담동 | 0.5327 | - |
| 3 | 신사동 | 0.4534 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4118 | 0.5337 | 0.4926 | low | pattern_fallback_used, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |
| 2 | 논현1동 | 0.3209 | 0.3921 | 0.5965 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links, recent_rank_volatility |
| 3 | 청담동 | 0.1886 | 0.2308 | 0.5939 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links |
| 4 | 역삼1동 | 0.1380 | 0.1840 | 0.4440 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, thin_current_traffic_links, recent_rank_volatility |
| 5 | 신사동 | 0.1232 | 0.1569 | 0.5221 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 13. 04:00
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
- Taxi pressure log count: 119
- Completed comparisons: 1
- Waiting comparisons: 118
- Live demand log count: 151
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
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
