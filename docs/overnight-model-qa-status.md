# Overnight Model QA Status

Generated: 2026. 05. 08. 17:44 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 17:44
- Raw citydata: `data/raw/citydata/2026-05-08/1744.json`
- Raw weather: `data/raw/weather/2026-05-08/1744.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.9 C
- Precipitation 1h: 0 mm
- Humidity: 27%
- Wind: 2.7 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 18:00
- Traffic target: 2026. 05. 08. 18:00
- Taxi pressure target: 2026. 05. 08. 18:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9340 | high |
| 2 | 역삼1동 | 0.3735 | low |
| 3 | 대치4동 | 0.3072 | low |
| 4 | 삼성1동 | 0.2994 | low |
| 5 | 청담동 | 0.2819 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6216 | - |
| 3 | 대치4동 | 0.5415 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9308 | - |
| 2 | 청담동 | 0.7765 | - |
| 3 | 신사동 | 0.5968 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7560 | 0.8802 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4829 | 0.5742 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3702 | 0.4420 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3484 | 0.3870 | 0.7785 | high | pattern_fallback_used |
| 5 | 청담동 | 0.3184 | 0.3640 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 08. 18:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 18:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 254250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 34
- Completed comparisons: 1
- Waiting comparisons: 33
- Live demand log count: 66
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.8
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 18:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.644
- Estimated positive imbalance after: 0.944
- Estimated relief score: 0.7
- Highest relief dong: 논현1동
