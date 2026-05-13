# Overnight Model QA Status

Generated: 2026. 05. 14. 06:40 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 06:39
- Raw citydata: `data/raw/citydata/2026-05-14/0639.json`
- Raw weather: `data/raw/weather/2026-05-14/0640.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.2 C
- Precipitation 1h: 0 mm
- Humidity: 83%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 07:00
- Traffic target: 2026. 05. 14. 07:00
- Taxi pressure target: 2026. 05. 14. 07:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.5364 | watch |
| 2 | 대치4동 | 0.5030 | watch |
| 3 | 삼성1동 | 0.4099 | watch |
| 4 | 역삼1동 | 0.2995 | low |
| 5 | 논현2동 | 0.2755 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6570 | - |
| 3 | 논현2동 | 0.6224 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7811 | - |
| 2 | 청담동 | 0.7061 | - |
| 3 | 신사동 | 0.4448 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.4347 | 0.5162 | 0.6490 | medium | pattern_fallback_used |
| 2 | 대치4동 | 0.3949 | 0.5186 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 삼성1동 | 0.3905 | 0.4710 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 4 | 역삼1동 | 0.3687 | 0.4257 | 0.7027 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2466 | 0.2819 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 07:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 07:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 81750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 140
- Completed comparisons: 1
- Waiting comparisons: 139
- Live demand log count: 172
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 06:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.55
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 07:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 4
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.746
- Estimated positive imbalance after: 0.338
- Estimated relief score: 0.408
- Highest relief dong: 대치4동
