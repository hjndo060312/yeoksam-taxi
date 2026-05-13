# Overnight Model QA Status

Generated: 2026. 05. 13. 16:20 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 16:20
- Raw citydata: `data/raw/citydata/2026-05-13/1620.json`
- Raw weather: `data/raw/weather/2026-05-13/1620.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 23.9 C
- Precipitation 1h: 0 mm
- Humidity: 49%
- Wind: 2.8 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 17:00
- Traffic target: 2026. 05. 13. 17:00
- Taxi pressure target: 2026. 05. 13. 17:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9286 | high |
| 2 | 대치4동 | 0.4152 | watch |
| 3 | 역삼1동 | 0.3488 | low |
| 4 | 삼성1동 | 0.3156 | low |
| 5 | 논현2동 | 0.3099 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.8088 | - |
| 3 | 역삼1동 | 0.5997 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9217 | - |
| 2 | 청담동 | 0.7951 | - |
| 3 | 신사동 | 0.5829 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7389 | 0.8775 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4897 | 0.5766 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4205 | 0.5177 | 0.5826 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3693 | 0.4141 | 0.7597 | high | pattern_fallback_used |
| 5 | 청담동 | 0.3374 | 0.3858 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 13. 17:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 13. 17:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 295250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 128
- Completed comparisons: 1
- Waiting comparisons: 127
- Live demand log count: 160
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 15:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현2동
- Latest road-signal Spearman (policy check): 0.55
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 13. 17:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 9
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.858
- Estimated positive imbalance after: 0.963
- Estimated relief score: 0.895
- Highest relief dong: 논현1동
