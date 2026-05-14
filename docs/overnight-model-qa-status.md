# Overnight Model QA Status

Generated: 2026. 05. 15. 08:27 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 08:27
- Raw citydata: `data/raw/citydata/2026-05-15/0827.json`
- Raw weather: `data/raw/weather/2026-05-15/0827.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 23 C
- Precipitation 1h: 0 mm
- Humidity: 56%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 09:00
- Traffic target: 2026. 05. 15. 09:00
- Taxi pressure target: 2026. 05. 15. 09:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7208 | high |
| 2 | 대치4동 | 0.5482 | watch |
| 3 | 논현2동 | 0.2950 | low |
| 4 | 삼성1동 | 0.2896 | low |
| 5 | 역삼1동 | 0.2698 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.7466 | - |
| 3 | 논현2동 | 0.6107 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8693 | - |
| 2 | 청담동 | 0.6323 | - |
| 3 | 신사동 | 0.5176 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.5969 | 0.6750 | 0.7428 | high | pattern_fallback_used |
| 2 | 대치4동 | 0.3967 | 0.5328 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.3733 | 0.4310 | 0.7027 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3085 | 0.3647 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.2979 | 0.3405 | 0.7222 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 15. 09:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 09:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 173250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 161
- Completed comparisons: 2
- Waiting comparisons: 159
- Live demand log count: 193
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 08:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.35
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 09:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.064
- Estimated positive imbalance after: 0.559
- Estimated relief score: 0.505
- Highest relief dong: 대치4동
