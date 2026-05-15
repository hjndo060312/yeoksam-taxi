# Overnight Model QA Status

Generated: 2026. 05. 15. 18:18 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 18:18
- Raw citydata: `data/raw/citydata/2026-05-15/1818.json`
- Raw weather: `data/raw/weather/2026-05-15/1818.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 27.7 C
- Precipitation 1h: 0 mm
- Humidity: 42%
- Wind: 2.6 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 19:00
- Traffic target: 2026. 05. 15. 19:00
- Taxi pressure target: 2026. 05. 15. 19:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9240 | high |
| 2 | 역삼1동 | 0.3898 | low |
| 3 | 대치4동 | 0.3547 | low |
| 4 | 삼성1동 | 0.3273 | low |
| 5 | 논현2동 | 0.3126 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6466 | - |
| 3 | 대치4동 | 0.6122 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9153 | - |
| 2 | 청담동 | 0.7842 | - |
| 3 | 신사동 | 0.5570 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7521 | 0.8756 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4724 | 0.5733 | 0.6090 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3933 | 0.4649 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3812 | 0.4234 | 0.7785 | high | pattern_fallback_used |
| 5 | 청담동 | 0.3316 | 0.3828 | 0.7027 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 15. 19:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 19:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 244750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 166
- Completed comparisons: 1
- Waiting comparisons: 165
- Live demand log count: 198
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현2동
- Latest road-signal Spearman (policy check): 0.5833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 19:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 10
- Max incentive multiplier: 1.2
- Positive imbalance before: 2.071
- Estimated positive imbalance after: 1.078
- Estimated relief score: 0.993
- Highest relief dong: 논현1동
