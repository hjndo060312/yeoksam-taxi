# Overnight Model QA Status

Generated: 2026. 05. 07. 18:07 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 18:07
- Raw citydata: `data/raw/citydata/2026-05-07/1807.json`
- Raw weather: `data/raw/weather/2026-05-07/1807.json`
- KMA status: OK (200)
- Weather note: 강수 관측 또는 API 값을 확인하세요.
- Temperature: 15 C
- Precipitation 1h: 1 mm
- Humidity: 92%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 19:00
- Traffic target: 2026. 05. 07. 19:00
- Taxi pressure target: 2026. 05. 07. 19:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9355 | high |
| 2 | 대치4동 | 0.4366 | watch |
| 3 | 역삼1동 | 0.4128 | watch |
| 4 | 삼성1동 | 0.3843 | low |
| 5 | 논현2동 | 0.2725 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7310 | - |
| 3 | 역삼1동 | 0.6768 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9274 | - |
| 2 | 청담동 | 0.7016 | - |
| 3 | 삼성1동 | 0.5468 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7606 | 0.8855 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5205 | 0.6068 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4488 | 0.5306 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.4201 | 0.4755 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3352 | 0.4307 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 07. 19:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 19:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 246250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 14
- Completed comparisons: 1
- Waiting comparisons: 13
- Live demand log count: 46
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.7333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 19:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 11
- Max incentive multiplier: 1.2
- Positive imbalance before: 2.325
- Estimated positive imbalance after: 1.217
- Estimated relief score: 1.108
- Highest relief dong: 논현1동
