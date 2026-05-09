# Overnight Model QA Status

Generated: 2026. 05. 09. 16:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 16:42
- Raw citydata: `data/raw/citydata/2026-05-09/1642.json`
- Raw weather: `data/raw/weather/2026-05-09/1642.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.9 C
- Precipitation 1h: 0 mm
- Humidity: 23%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 17:00
- Traffic target: 2026. 05. 09. 17:00
- Taxi pressure target: 2026. 05. 09. 17:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9394 | high |
| 2 | 역삼1동 | 0.3364 | low |
| 3 | 삼성1동 | 0.3152 | low |
| 4 | 청담동 | 0.2641 | low |
| 5 | 대치4동 | 0.2392 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6086 | - |
| 3 | 대치4동 | 0.4010 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9464 | - |
| 2 | 청담동 | 0.7283 | - |
| 3 | 삼성1동 | 0.5434 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6799 | 0.8239 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 역삼1동 | 0.4403 | 0.5133 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3936 | 0.4797 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.3011 | 0.3476 | 0.7027 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.2912 | 0.3234 | 0.7785 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 09. 17:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 17:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 182250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 54
- Completed comparisons: 1
- Waiting comparisons: 53
- Live demand log count: 86
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 16:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.75
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 17:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.294
- Estimated positive imbalance after: 0.691
- Estimated relief score: 0.603
- Highest relief dong: 논현1동
