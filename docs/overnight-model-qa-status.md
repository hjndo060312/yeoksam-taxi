# Overnight Model QA Status

Generated: 2026. 05. 16. 10:05 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 10:05
- Raw citydata: `data/raw/citydata/2026-05-16/1005.json`
- Raw weather: `data/raw/weather/2026-05-16/1005.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 26.1 C
- Precipitation 1h: 0 mm
- Humidity: 48%
- Wind: 1.4 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 11:00
- Traffic target: 2026. 05. 16. 11:00
- Taxi pressure target: 2026. 05. 16. 11:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8789 | high |
| 2 | 삼성1동 | 0.4974 | watch |
| 3 | 논현2동 | 0.3181 | low |
| 4 | 역삼1동 | 0.3157 | low |
| 5 | 대치4동 | 0.2963 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6759 | - |
| 3 | 역삼1동 | 0.6132 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8488 | - |
| 2 | 청담동 | 0.7201 | - |
| 3 | 삼성1동 | 0.5444 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6424 | 0.7629 | 0.6490 | medium | pattern_fallback_used |
| 2 | 삼성1동 | 0.4300 | 0.5240 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 3 | 역삼1동 | 0.3841 | 0.4568 | 0.6465 | medium | pattern_fallback_used |
| 4 | 대치4동 | 0.2773 | 0.3487 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.2727 | 0.3179 | 0.6839 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 16. 11:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 11:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 143000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 181
- Completed comparisons: 1
- Waiting comparisons: 180
- Live demand log count: 213
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 09:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.8167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 11:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.457
- Estimated positive imbalance after: 0.658
- Estimated relief score: 0.799
- Highest relief dong: 논현1동
