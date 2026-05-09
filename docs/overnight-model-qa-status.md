# Overnight Model QA Status

Generated: 2026. 05. 09. 17:43 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 17:43
- Raw citydata: `data/raw/citydata/2026-05-09/1743.json`
- Raw weather: `data/raw/weather/2026-05-09/1743.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21 C
- Precipitation 1h: 0 mm
- Humidity: 22%
- Wind: 1.7 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 18:00
- Traffic target: 2026. 05. 09. 18:00
- Taxi pressure target: 2026. 05. 09. 18:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9335 | high |
| 2 | 역삼1동 | 0.3622 | low |
| 3 | 삼성1동 | 0.2993 | low |
| 4 | 청담동 | 0.2553 | low |
| 5 | 논현2동 | 0.2455 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6653 | - |
| 3 | 대치4동 | 0.4232 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9278 | - |
| 2 | 청담동 | 0.7086 | - |
| 3 | 삼성1동 | 0.5252 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6752 | 0.8183 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 역삼1동 | 0.4373 | 0.5307 | 0.6090 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3649 | 0.4402 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3072 | 0.3412 | 0.7785 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2991 | 0.3453 | 0.7027 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 09. 18:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 18:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 175750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 55
- Completed comparisons: 1
- Waiting comparisons: 54
- Live demand log count: 87
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.7833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 18:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.345
- Estimated positive imbalance after: 0.742
- Estimated relief score: 0.603
- Highest relief dong: 논현1동
