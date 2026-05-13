# Overnight Model QA Status

Generated: 2026. 05. 14. 07:36 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 07:36
- Raw citydata: `data/raw/citydata/2026-05-14/0736.json`
- Raw weather: `data/raw/weather/2026-05-14/0736.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.2 C
- Precipitation 1h: 0 mm
- Humidity: 71%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 08:00
- Traffic target: 2026. 05. 14. 08:00
- Taxi pressure target: 2026. 05. 14. 08:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.6391 | medium |
| 2 | 대치4동 | 0.5382 | watch |
| 3 | 삼성1동 | 0.3289 | low |
| 4 | 논현2동 | 0.3200 | low |
| 5 | 역삼1동 | 0.2754 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현2동 | 0.6876 | - |
| 3 | 논현1동 | 0.6644 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8142 | - |
| 2 | 청담동 | 0.6391 | - |
| 3 | 신사동 | 0.4965 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5307 | 0.6002 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.4116 | 0.5288 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3565 | 0.4156 | 0.6840 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3407 | 0.4028 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 5 | 논현2동 | 0.2846 | 0.3810 | 0.4376 | low | pattern_fallback_used, signals_disagree, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 14. 08:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 08:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 120250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 141
- Completed comparisons: 1
- Waiting comparisons: 140
- Live demand log count: 173
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 07:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.3667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 08:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 4
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.907
- Estimated positive imbalance after: 0.499
- Estimated relief score: 0.408
- Highest relief dong: 대치4동
