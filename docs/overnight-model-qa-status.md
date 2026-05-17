# Overnight Model QA Status

Generated: 2026. 05. 18. 03:33 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 03:33
- Raw citydata: `data/raw/citydata/2026-05-18/0333.json`
- Raw weather: `data/raw/weather/2026-05-18/0333.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 15.4 C
- Precipitation 1h: 0 mm
- Humidity: 63%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 04:00
- Traffic target: 2026. 05. 18. 04:00
- Taxi pressure target: 2026. 05. 18. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5752 | medium |
| 2 | 논현1동 | 0.3689 | low |
| 3 | 청담동 | 0.2466 | low |
| 4 | 역삼1동 | 0.2044 | low |
| 5 | 대치4동 | 0.1758 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.3946 | - |
| 3 | 대치4동 | 0.2516 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7842 | - |
| 2 | 청담동 | 0.5741 | - |
| 3 | 신사동 | 0.4104 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4741 | 0.5899 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3241 | 0.3773 | 0.6865 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 역삼1동 | 0.2576 | 0.3191 | 0.5715 | medium | pattern_fallback_used, signals_disagree, recent_rank_volatility |
| 4 | 청담동 | 0.2310 | 0.2693 | 0.6839 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.1676 | 0.1897 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 18. 04:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 04:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 64000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 217
- Completed comparisons: 1
- Waiting comparisons: 216
- Live demand log count: 249
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): -0.0333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 04:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.392
- Estimated positive imbalance after: 0.197
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
