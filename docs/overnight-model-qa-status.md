# Overnight Model QA Status

Generated: 2026. 05. 15. 19:57 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 19:57
- Raw citydata: `data/raw/citydata/2026-05-15/1957.json`
- Raw weather: `data/raw/weather/2026-05-15/1957.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 25.1 C
- Precipitation 1h: 0 mm
- Humidity: 45%
- Wind: 0.5 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 20:00
- Traffic target: 2026. 05. 15. 20:00
- Taxi pressure target: 2026. 05. 15. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9072 | high |
| 2 | 역삼1동 | 0.3878 | low |
| 3 | 삼성1동 | 0.3477 | low |
| 4 | 대치4동 | 0.3334 | low |
| 5 | 논현2동 | 0.2768 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7189 | - |
| 3 | 대치4동 | 0.6730 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9042 | - |
| 2 | 청담동 | 0.6319 | - |
| 3 | 삼성1동 | 0.4661 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7646 | 0.8730 | 0.7240 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4712 | 0.5718 | 0.6090 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3830 | 0.4573 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3821 | 0.4244 | 0.7785 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2983 | 0.3832 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 15. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 210750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 167
- Completed comparisons: 1
- Waiting comparisons: 166
- Live demand log count: 199
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.8167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.577
- Estimated positive imbalance after: 0.779
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
