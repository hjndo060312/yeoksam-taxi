# Overnight Model QA Status

Generated: 2026. 05. 15. 02:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 02:42
- Raw citydata: `data/raw/citydata/2026-05-15/0242.json`
- Raw weather: `data/raw/weather/2026-05-15/0242.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.8 C
- Precipitation 1h: 0 mm
- Humidity: 67%
- Wind: 0.4 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 03:00
- Traffic target: 2026. 05. 15. 03:00
- Taxi pressure target: 2026. 05. 15. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7294 | high |
| 2 | 역삼2동 | 0.5067 | watch |
| 3 | 대치4동 | 0.4111 | watch |
| 4 | 청담동 | 0.2854 | low |
| 5 | 삼성1동 | 0.2798 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼2동 | 1.0000 | - |
| 2 | 논현1동 | 0.8064 | - |
| 3 | 대치4동 | 0.7727 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8142 | - |
| 2 | 청담동 | 0.4472 | - |
| 3 | 신사동 | 0.3403 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5828 | 0.6591 | 0.7428 | high | pattern_fallback_used |
| 2 | 역삼2동 | 0.4295 | 0.5211 | 0.6095 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 대치4동 | 0.3559 | 0.4382 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 4 | 역삼1동 | 0.3338 | 0.3970 | 0.6465 | medium | pattern_fallback_used |
| 5 | 삼성1동 | 0.3110 | 0.3676 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |

- Guardrail target: 2026. 05. 15. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 73250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 155
- Completed comparisons: 1
- Waiting comparisons: 154
- Live demand log count: 187
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 02:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.7167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.241
- Estimated positive imbalance after: 0.541
- Estimated relief score: 0.7
- Highest relief dong: 역삼2동
