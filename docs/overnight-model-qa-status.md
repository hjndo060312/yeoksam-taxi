# Overnight Model QA Status

Generated: 2026. 05. 16. 12:19 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 12:19
- Raw citydata: `data/raw/citydata/2026-05-16/1219.json`
- Raw weather: `data/raw/weather/2026-05-16/1219.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 29.6 C
- Precipitation 1h: 0 mm
- Humidity: 32%
- Wind: 1.7 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 13:00
- Traffic target: 2026. 05. 16. 13:00
- Taxi pressure target: 2026. 05. 16. 13:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8890 | high |
| 2 | 삼성1동 | 0.4443 | watch |
| 3 | 역삼1동 | 0.3111 | low |
| 4 | 대치4동 | 0.3064 | low |
| 5 | 논현2동 | 0.3034 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6033 | - |
| 3 | 삼성1동 | 0.5988 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8670 | - |
| 2 | 청담동 | 0.7384 | - |
| 3 | 삼성1동 | 0.5387 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6550 | 0.7938 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 삼성1동 | 0.4560 | 0.5391 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4057 | 0.4825 | 0.6465 | medium | pattern_fallback_used |
| 4 | 청담동 | 0.3029 | 0.3497 | 0.7027 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.2807 | 0.3177 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 16. 13:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 13:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 178750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 183
- Completed comparisons: 2
- Waiting comparisons: 181
- Live demand log count: 215
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 11:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.3333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 13:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.558
- Estimated positive imbalance after: 0.759
- Estimated relief score: 0.799
- Highest relief dong: 논현1동
