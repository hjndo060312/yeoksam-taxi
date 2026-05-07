# Overnight Model QA Status

Generated: 2026. 05. 08. 05:37 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 05:37
- Raw citydata: `data/raw/citydata/2026-05-08/0537.json`
- Raw weather: `data/raw/weather/2026-05-08/0537.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 11.6 C
- Precipitation 1h: 0 mm
- Humidity: 69%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 06:00
- Traffic target: 2026. 05. 08. 06:00
- Taxi pressure target: 2026. 05. 08. 06:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.5322 | watch |
| 2 | 대치4동 | 0.5230 | watch |
| 3 | 삼성1동 | 0.5154 | watch |
| 4 | 역삼1동 | 0.3051 | low |
| 5 | 청담동 | 0.2411 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.8786 | - |
| 3 | 역삼1동 | 0.6515 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7933 | - |
| 2 | 청담동 | 0.6246 | - |
| 3 | 신사동 | 0.3685 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4548 | 0.5486 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 2 | 논현1동 | 0.4477 | 0.5112 | 0.7240 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.4091 | 0.5256 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 4 | 역삼1동 | 0.3694 | 0.4349 | 0.6652 | medium | pattern_fallback_used |
| 5 | 청담동 | 0.2191 | 0.2505 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 08. 06:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 06:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 69500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 25
- Completed comparisons: 1
- Waiting comparisons: 24
- Live demand log count: 57
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 05:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.0833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 06:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.931
- Estimated positive imbalance after: 0.425
- Estimated relief score: 0.506
- Highest relief dong: 대치4동
