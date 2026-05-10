# Overnight Model QA Status

Generated: 2026. 05. 11. 06:24 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 11. 06:24
- Raw citydata: `data/raw/citydata/2026-05-11/0624.json`
- Raw weather: `data/raw/weather/2026-05-11/0624.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.2 C
- Precipitation 1h: 0 mm
- Humidity: 70%
- Wind: 0.6 m/s

## Latest Targets

- Demand target: 2026. 05. 11. 07:00
- Traffic target: 2026. 05. 11. 07:00
- Taxi pressure target: 2026. 05. 11. 07:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.5504 | medium |
| 2 | 대치4동 | 0.5468 | watch |
| 3 | 삼성1동 | 0.3688 | low |
| 4 | 역삼1동 | 0.2919 | low |
| 5 | 논현2동 | 0.2692 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6433 | - |
| 3 | 논현2동 | 0.6241 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8142 | - |
| 2 | 청담동 | 0.6668 | - |
| 3 | 신사동 | 0.4334 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.4621 | 0.5327 | 0.7053 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.4132 | 0.5309 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 3 | 삼성1동 | 0.3687 | 0.4493 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 4 | 역삼1동 | 0.3555 | 0.4144 | 0.6840 | high | pattern_fallback_used |
| 5 | 논현2동 | 0.2322 | 0.3181 | 0.4001 | low | pattern_fallback_used, signals_disagree, weak_2026_proxy_validation, no_live_population_poi_coverage, thin_current_traffic_links |

- Guardrail target: 2026. 05. 11. 07:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 11. 07:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 78750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 88
- Completed comparisons: 2
- Waiting comparisons: 86
- Live demand log count: 120
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 11. 06:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 11. 07:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 3
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.737
- Estimated positive imbalance after: 0.427
- Estimated relief score: 0.31
- Highest relief dong: 대치4동
