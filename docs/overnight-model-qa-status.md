# Overnight Model QA Status

Generated: 2026. 05. 09. 19:30 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 19:30
- Raw citydata: `data/raw/citydata/2026-05-09/1930.json`
- Raw weather: `data/raw/weather/2026-05-09/1930.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 18.5 C
- Precipitation 1h: 0 mm
- Humidity: 24%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 20:00
- Traffic target: 2026. 05. 09. 20:00
- Taxi pressure target: 2026. 05. 09. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8973 | high |
| 2 | 역삼1동 | 0.4632 | watch |
| 3 | 삼성1동 | 0.3504 | low |
| 4 | 대치4동 | 0.2603 | low |
| 5 | 청담동 | 0.2414 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8741 | - |
| 3 | 대치4동 | 0.4995 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8757 | - |
| 2 | 청담동 | 0.6141 | - |
| 3 | 신사동 | 0.5210 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6707 | 0.7965 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.5030 | 0.5982 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3625 | 0.4597 | 0.5301 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3557 | 0.3988 | 0.7597 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2641 | 0.3019 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 09. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 155750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 57
- Completed comparisons: 1
- Waiting comparisons: 56
- Live demand log count: 89
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.348
- Estimated positive imbalance after: 0.647
- Estimated relief score: 0.701
- Highest relief dong: 논현1동
