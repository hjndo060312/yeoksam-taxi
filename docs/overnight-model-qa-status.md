# Overnight Model QA Status

Generated: 2026. 05. 10. 01:27 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 10. 01:27
- Raw citydata: `data/raw/citydata/2026-05-10/0127.json`
- Raw weather: `data/raw/weather/2026-05-10/0127.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 10.4 C
- Precipitation 1h: 0 mm
- Humidity: 59%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 10. 02:00
- Traffic target: 2026. 05. 10. 02:00
- Taxi pressure target: 2026. 05. 10. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8489 | high |
| 2 | 역삼1동 | 0.4981 | watch |
| 3 | 삼성1동 | 0.4838 | watch |
| 4 | 청담동 | 0.2432 | low |
| 5 | 논현2동 | 0.1989 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9600 | - |
| 3 | 삼성1동 | 0.9321 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8028 | - |
| 2 | 청담동 | 0.4862 | - |
| 3 | 신사동 | 0.3770 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6391 | 0.7441 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5027 | 0.5919 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4517 | 0.5449 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.2599 | 0.2915 | 0.7589 | high | pattern_fallback_used |
| 5 | 신사동 | 0.1856 | 0.2203 | 0.6496 | medium | pattern_fallback_used |

- Guardrail target: 2026. 05. 10. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 10. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 71000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 63
- Completed comparisons: 2
- Waiting comparisons: 61
- Live demand log count: 95
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 10. 01:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.0167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 10. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.261
- Estimated positive imbalance after: 0.561
- Estimated relief score: 0.7
- Highest relief dong: 역삼1동
