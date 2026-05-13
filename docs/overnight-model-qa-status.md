# Overnight Model QA Status

Generated: 2026. 05. 14. 08:32 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 08:32
- Raw citydata: `data/raw/citydata/2026-05-14/0832.json`
- Raw weather: `data/raw/weather/2026-05-14/0832.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.3 C
- Precipitation 1h: 0 mm
- Humidity: 59%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 09:00
- Traffic target: 2026. 05. 14. 09:00
- Taxi pressure target: 2026. 05. 14. 09:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.6974 | medium |
| 2 | 대치4동 | 0.5325 | watch |
| 3 | 삼성1동 | 0.3128 | low |
| 4 | 역삼1동 | 0.2695 | low |
| 5 | 논현2동 | 0.2612 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.7130 | - |
| 3 | 논현2동 | 0.5949 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8666 | - |
| 2 | 청담동 | 0.6456 | - |
| 3 | 삼성1동 | 0.5005 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5837 | 0.6601 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.4021 | 0.5281 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3780 | 0.4364 | 0.7027 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3261 | 0.3894 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.3158 | 0.3575 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 09:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 09:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 181250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 142
- Completed comparisons: 1
- Waiting comparisons: 141
- Live demand log count: 174
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 08:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 09:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.071
- Estimated positive imbalance after: 0.566
- Estimated relief score: 0.505
- Highest relief dong: 대치4동
