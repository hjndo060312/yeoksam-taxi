# Overnight Model QA Status

Generated: 2026. 05. 18. 06:26 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 06:25
- Raw citydata: `data/raw/citydata/2026-05-18/0625.json`
- Raw weather: `data/raw/weather/2026-05-18/0625.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 15.8 C
- Precipitation 1h: 0 mm
- Humidity: 68%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 07:00
- Traffic target: 2026. 05. 18. 07:00
- Taxi pressure target: 2026. 05. 18. 07:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.5313 | watch |
| 2 | 대치4동 | 0.5049 | watch |
| 3 | 삼성1동 | 0.3911 | low |
| 4 | 역삼1동 | 0.2901 | low |
| 5 | 논현2동 | 0.2688 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6425 | - |
| 3 | 논현2동 | 0.6233 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7800 | - |
| 2 | 청담동 | 0.6647 | - |
| 3 | 신사동 | 0.4475 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.4333 | 0.5146 | 0.6490 | medium | pattern_fallback_used |
| 2 | 대치4동 | 0.3968 | 0.5211 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 삼성1동 | 0.3810 | 0.4596 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 4 | 역삼1동 | 0.3606 | 0.4163 | 0.7027 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.2414 | 0.2733 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 18. 07:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 07:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 76750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 220
- Completed comparisons: 2
- Waiting comparisons: 218
- Live demand log count: 252
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 06:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.4333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 07:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 4
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.688
- Estimated positive imbalance after: 0.28
- Estimated relief score: 0.408
- Highest relief dong: 대치4동
