# Overnight Model QA Status

Generated: 2026. 05. 14. 22:45 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 22:44
- Raw citydata: `data/raw/citydata/2026-05-14/2244.json`
- Raw weather: `data/raw/weather/2026-05-14/2245.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 22.9 C
- Precipitation 1h: 0 mm
- Humidity: 58%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 23:00
- Traffic target: 2026. 05. 14. 23:00
- Taxi pressure target: 2026. 05. 14. 23:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8821 | high |
| 2 | 대치4동 | 0.3895 | low |
| 3 | 역삼1동 | 0.3624 | low |
| 4 | 삼성1동 | 0.3314 | low |
| 5 | 청담동 | 0.2347 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7848 | - |
| 3 | 역삼1동 | 0.7006 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8655 | - |
| 2 | 청담동 | 0.5115 | - |
| 3 | 신사동 | 0.4242 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6815 | 0.7934 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4346 | 0.5017 | 0.7027 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3542 | 0.4187 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 대치4동 | 0.3341 | 0.4292 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3286 | 0.3684 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 23:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 23:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 126750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 151
- Completed comparisons: 1
- Waiting comparisons: 150
- Live demand log count: 183
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 22:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.7833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 23:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.401
- Estimated positive imbalance after: 0.603
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
