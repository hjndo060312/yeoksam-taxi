# Overnight Model QA Status

Generated: 2026. 05. 14. 01:59 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 01:58
- Raw citydata: `data/raw/citydata/2026-05-14/0158.json`
- Raw weather: `data/raw/weather/2026-05-14/0158.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16 C
- Precipitation 1h: 0 mm
- Humidity: 81%
- Wind: 0.7 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 02:00
- Traffic target: 2026. 05. 14. 02:00
- Taxi pressure target: 2026. 05. 14. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼1동 | 0.5368 | watch |
| 2 | 논현1동 | 0.4335 | watch |
| 3 | 청담동 | 0.2240 | low |
| 4 | 삼성1동 | 0.2077 | low |
| 5 | 대치4동 | 0.1965 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼1동 | 1.0000 | - |
| 2 | 논현1동 | 0.3353 | - |
| 3 | 대치4동 | 0.3015 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8347 | - |
| 2 | 청담동 | 0.4786 | - |
| 3 | 신사동 | 0.3650 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 역삼1동 | 0.5113 | 0.6142 | 0.6277 | medium | pattern_fallback_used |
| 2 | 논현1동 | 0.3997 | 0.4520 | 0.7428 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 청담동 | 0.2363 | 0.2651 | 0.7589 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.2322 | 0.2745 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.1794 | 0.2031 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 77750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 135
- Completed comparisons: 1
- Waiting comparisons: 134
- Live demand log count: 167
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 01:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.8
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 3
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.543
- Estimated positive imbalance after: 0.233
- Estimated relief score: 0.31
- Highest relief dong: 역삼1동
