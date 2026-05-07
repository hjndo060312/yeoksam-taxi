# Overnight Model QA Status

Generated: 2026. 05. 07. 20:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 20:42
- Raw citydata: `data/raw/citydata/2026-05-07/2042.json`
- Raw weather: `data/raw/weather/2026-05-07/2042.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.4 C
- Precipitation 1h: 0 mm
- Humidity: 90%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 21:00
- Traffic target: 2026. 05. 07. 21:00
- Taxi pressure target: 2026. 05. 07. 21:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8871 | high |
| 2 | 역삼1동 | 0.4649 | watch |
| 3 | 대치4동 | 0.4075 | watch |
| 4 | 삼성1동 | 0.4027 | watch |
| 5 | 삼성2동 | 0.2914 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8449 | - |
| 3 | 대치4동 | 0.8028 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8503 | - |
| 2 | 청담동 | 0.6035 | - |
| 3 | 삼성1동 | 0.4477 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7053 | 0.8211 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5099 | 0.6064 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성2동 | 0.4224 | 0.4827 | 0.7222 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.4017 | 0.4797 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.3515 | 0.4420 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 07. 21:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 21:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 179250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 16
- Completed comparisons: 1
- Waiting comparisons: 15
- Live demand log count: 48
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 20:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.55
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 21:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 10
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.894
- Estimated positive imbalance after: 0.883
- Estimated relief score: 1.011
- Highest relief dong: 논현1동
