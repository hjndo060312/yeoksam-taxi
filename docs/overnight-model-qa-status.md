# Overnight Model QA Status

Generated: 2026. 05. 08. 22:43 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 22:43
- Raw citydata: `data/raw/citydata/2026-05-08/2243.json`
- Raw weather: `data/raw/weather/2026-05-08/2243.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.2 C
- Precipitation 1h: 0 mm
- Humidity: 41%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 23:00
- Traffic target: 2026. 05. 08. 23:00
- Taxi pressure target: 2026. 05. 08. 23:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8856 | high |
| 2 | 대치4동 | 0.3860 | low |
| 3 | 역삼1동 | 0.3692 | low |
| 4 | 삼성1동 | 0.3193 | low |
| 5 | 청담동 | 0.2389 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7580 | - |
| 3 | 역삼1동 | 0.6834 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8643 | - |
| 2 | 청담동 | 0.5473 | - |
| 3 | 신사동 | 0.4370 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6811 | 0.7930 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4351 | 0.5023 | 0.7027 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3465 | 0.4096 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3285 | 0.3683 | 0.7597 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3279 | 0.4213 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 08. 23:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 23:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 130500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 39
- Completed comparisons: 1
- Waiting comparisons: 38
- Live demand log count: 71
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 22:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.7167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 23:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.394
- Estimated positive imbalance after: 0.694
- Estimated relief score: 0.7
- Highest relief dong: 논현1동
