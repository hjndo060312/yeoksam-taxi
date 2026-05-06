# Overnight Model QA Status

Generated: 2026. 05. 07. 08:26 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 08:26
- Raw citydata: `data/raw/citydata/2026-05-07/0826.json`
- Raw weather: `data/raw/weather/2026-05-07/0826.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 17.1 C
- Precipitation 1h: 0 mm
- Humidity: 53%
- Wind: 1.8 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 09:00
- Traffic target: 2026. 05. 07. 09:00
- Taxi pressure target: 2026. 05. 07. 09:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.6893 | medium |
| 2 | 대치4동 | 0.5697 | medium |
| 3 | 삼성1동 | 0.3384 | low |
| 4 | 논현2동 | 0.2842 | low |
| 5 | 역삼1동 | 0.2688 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.7128 | - |
| 3 | 논현2동 | 0.5952 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8469 | - |
| 2 | 청담동 | 0.6657 | - |
| 3 | 삼성1동 | 0.5746 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5784 | 0.6541 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.4250 | 0.5460 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3683 | 0.4294 | 0.6840 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3501 | 0.4180 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.3086 | 0.3527 | 0.7222 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 07. 09:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 09:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 183250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 9
- Completed comparisons: 2
- Waiting comparisons: 7
- Live demand log count: 41
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 08:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 09:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.204
- Estimated positive imbalance after: 0.601
- Estimated relief score: 0.603
- Highest relief dong: 대치4동
