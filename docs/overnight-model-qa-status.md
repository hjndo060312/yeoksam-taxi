# Overnight Model QA Status

Generated: 2026. 05. 12. 03:49 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 12. 03:49
- Raw citydata: `data/raw/citydata/2026-05-12/0349.json`
- Raw weather: `data/raw/weather/2026-05-12/0349.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.1 C
- Precipitation 1h: 0 mm
- Humidity: 89%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 12. 04:00
- Traffic target: 2026. 05. 12. 04:00
- Taxi pressure target: 2026. 05. 12. 04:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5294 | watch |
| 2 | 논현1동 | 0.3691 | low |
| 3 | 청담동 | 0.2286 | low |
| 4 | 역삼1동 | 0.2037 | low |
| 5 | 대치4동 | 0.1665 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.3929 | - |
| 3 | 대치4동 | 0.2482 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7918 | - |
| 2 | 청담동 | 0.5174 | - |
| 3 | 신사동 | 0.3718 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4556 | 0.5669 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3231 | 0.3762 | 0.6865 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 역삼1동 | 0.2631 | 0.3193 | 0.6090 | medium | pattern_fallback_used |
| 4 | 청담동 | 0.2214 | 0.2581 | 0.6839 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.1559 | 0.1853 | 0.6472 | medium | pattern_fallback_used, signals_disagree |

- Guardrail target: 2026. 05. 12. 04:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 12. 04:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 68500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 101
- Completed comparisons: 2
- Waiting comparisons: 99
- Live demand log count: 133
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 12. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.3167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 12. 04:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 2
- Max incentive multiplier: 1.1
- Positive imbalance before: 0.296
- Estimated positive imbalance after: 0.101
- Estimated relief score: 0.195
- Highest relief dong: 삼성1동
