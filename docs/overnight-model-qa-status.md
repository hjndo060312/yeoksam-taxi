# Overnight Model QA Status

Generated: 2026. 05. 07. 07:25 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 07:25
- Raw citydata: `data/raw/citydata/2026-05-07/0725.json`
- Raw weather: `data/raw/weather/2026-05-07/0725.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.7 C
- Precipitation 1h: 0 mm
- Humidity: 65%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 08:00
- Traffic target: 2026. 05. 07. 08:00
- Taxi pressure target: 2026. 05. 07. 08:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.6473 | medium |
| 2 | 대치4동 | 0.5374 | watch |
| 3 | 삼성1동 | 0.3615 | low |
| 4 | 논현2동 | 0.3207 | low |
| 5 | 역삼1동 | 0.2763 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현2동 | 0.6885 | - |
| 3 | 논현1동 | 0.6632 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8290 | - |
| 2 | 청담동 | 0.6418 | - |
| 3 | 삼성1동 | 0.5009 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5309 | 0.6004 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.4138 | 0.5317 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 3 | 삼성1동 | 0.3580 | 0.4318 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 4 | 역삼1동 | 0.3496 | 0.4075 | 0.6840 | high | pattern_fallback_used |
| 5 | 논현2동 | 0.2844 | 0.3807 | 0.4376 | low | pattern_fallback_used, signals_disagree, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 07. 08:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 08:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 120250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 8
- Completed comparisons: 2
- Waiting comparisons: 6
- Live demand log count: 40
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 07:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 08:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.113
- Estimated positive imbalance after: 0.607
- Estimated relief score: 0.506
- Highest relief dong: 대치4동
