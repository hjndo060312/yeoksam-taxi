# Overnight Model QA Status

Generated: 2026. 05. 18. 10:15 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 10:15
- Raw citydata: `data/raw/citydata/2026-05-18/1015.json`
- Raw weather: `data/raw/weather/2026-05-18/1015.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 27.1 C
- Precipitation 1h: 0 mm
- Humidity: 36%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 11:00
- Traffic target: 2026. 05. 18. 11:00
- Taxi pressure target: 2026. 05. 18. 11:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7699 | high |
| 2 | 대치4동 | 0.5245 | watch |
| 3 | 삼성1동 | 0.2965 | low |
| 4 | 청담동 | 0.2551 | low |
| 5 | 역삼1동 | 0.2341 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8151 | - |
| 3 | 논현2동 | 0.4121 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8594 | - |
| 2 | 청담동 | 0.7003 | - |
| 3 | 신사동 | 0.5285 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6549 | 0.7406 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.3981 | 0.5228 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3927 | 0.4533 | 0.7027 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3548 | 0.4194 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.3444 | 0.3898 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 18. 11:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 11:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 260750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 223
- Completed comparisons: 1
- Waiting comparisons: 222
- Live demand log count: 255
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 09:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.65
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 11:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.034
- Estimated positive imbalance after: 0.529
- Estimated relief score: 0.505
- Highest relief dong: 대치4동
