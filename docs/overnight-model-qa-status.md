# Overnight Model QA Status

Generated: 2026. 05. 17. 20:33 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 20:33
- Raw citydata: `data/raw/citydata/2026-05-17/2033.json`
- Raw weather: `data/raw/weather/2026-05-17/2033.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 23.6 C
- Precipitation 1h: 0 mm
- Humidity: 37%
- Wind: 0.4 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 21:00
- Traffic target: 2026. 05. 17. 21:00
- Taxi pressure target: 2026. 05. 17. 21:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8142 | high |
| 2 | 역삼1동 | 0.5261 | watch |
| 3 | 삼성1동 | 0.3818 | low |
| 4 | 대치4동 | 0.2517 | low |
| 5 | 삼성2동 | 0.2396 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼1동 | 1.0000 | - |
| 2 | 논현1동 | 0.9022 | - |
| 3 | 삼성1동 | 0.6106 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8450 | - |
| 2 | 청담동 | 0.5699 | - |
| 3 | 삼성1동 | 0.4305 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6297 | 0.7190 | 0.7240 | high | pattern_fallback_used, recent_rank_volatility |
| 2 | 역삼1동 | 0.5243 | 0.6173 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3962 | 0.4684 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3380 | 0.3826 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2409 | 0.3029 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 17. 21:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 21:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 119500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 210
- Completed comparisons: 1
- Waiting comparisons: 209
- Live demand log count: 242
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 20:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.4833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 21:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.203
- Estimated positive imbalance after: 0.485
- Estimated relief score: 0.718
- Highest relief dong: 역삼1동
