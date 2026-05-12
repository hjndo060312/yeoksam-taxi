# Overnight Model QA Status

Generated: 2026. 05. 13. 05:47 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 05:42
- Raw citydata: `data/raw/citydata/2026-05-13/0542.json`
- Raw weather: `data/raw/weather/2026-05-13/0547.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.1 C
- Precipitation 1h: 0 mm
- Humidity: 88%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 06:00
- Traffic target: 2026. 05. 13. 06:00
- Taxi pressure target: 2026. 05. 13. 06:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.6342 | medium |
| 2 | 삼성1동 | 0.4914 | watch |
| 3 | 대치4동 | 0.3848 | low |
| 4 | 역삼1동 | 0.2572 | low |
| 5 | 청담동 | 0.2517 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.8845 | - |
| 3 | 역삼1동 | 0.6413 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 청담동 | 0.6873 | - |
| 3 | 신사동 | 0.5119 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.4317 | 0.5275 | 0.5965 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links |
| 2 | 삼성1동 | 0.3939 | 0.4995 | 0.5301 | medium | pattern_fallback_used, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links, recent_rank_volatility |
| 3 | 대치4동 | 0.3275 | 0.4500 | 0.3949 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, thin_current_traffic_links |
| 4 | 역삼1동 | 0.2396 | 0.2994 | 0.5565 | medium | pattern_fallback_used, no_live_population_poi_coverage, thin_current_traffic_links |
| 5 | 청담동 | 0.1878 | 0.2346 | 0.5564 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 13. 06:00
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
- Taxi pressure log count: 121
- Completed comparisons: 1
- Waiting comparisons: 120
- Live demand log count: 153
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 05:00
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
- Intervention areas: 2
- Monitoring units: 3
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.484
- Estimated positive imbalance after: 0.191
- Estimated relief score: 0.293
- Highest relief dong: 대치4동
