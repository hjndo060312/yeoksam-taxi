# Overnight Model QA Status

Generated: 2026. 05. 16. 04:40 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 04:40
- Raw citydata: `data/raw/citydata/2026-05-16/0440.json`
- Raw weather: `data/raw/weather/2026-05-16/0440.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.9 C
- Precipitation 1h: 0 mm
- Humidity: 78%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 05:00
- Traffic target: 2026. 05. 16. 05:00
- Taxi pressure target: 2026. 05. 16. 05:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5428 | watch |
| 2 | 논현1동 | 0.4280 | watch |
| 3 | 대치4동 | 0.2295 | low |
| 4 | 청담동 | 0.2048 | low |
| 5 | 논현2동 | 0.1970 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 대치4동 | 0.4836 | - |
| 3 | 논현2동 | 0.4367 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8047 | - |
| 2 | 청담동 | 0.5190 | - |
| 3 | 신사동 | 0.3498 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4660 | 0.5798 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3843 | 0.4474 | 0.6865 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 역삼1동 | 0.2373 | 0.2880 | 0.6090 | medium | pattern_fallback_used |
| 4 | 대치4동 | 0.2213 | 0.2843 | 0.5074 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.1991 | 0.2321 | 0.6839 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 16. 05:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 05:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 64250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 176
- Completed comparisons: 1
- Waiting comparisons: 175
- Live demand log count: 208
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 04:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.15
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 05:00
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
