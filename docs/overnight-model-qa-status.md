# Overnight Model QA Status

Generated: 2026. 05. 14. 05:43 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 05:43
- Raw citydata: `data/raw/citydata/2026-05-14/0543.json`
- Raw weather: `data/raw/weather/2026-05-14/0543.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.9 C
- Precipitation 1h: 0 mm
- Humidity: 87%
- Wind: 1.1 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 06:00
- Traffic target: 2026. 05. 14. 06:00
- Taxi pressure target: 2026. 05. 14. 06:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5845 | medium |
| 2 | 논현1동 | 0.5243 | watch |
| 3 | 대치4동 | 0.4815 | watch |
| 4 | 역삼1동 | 0.3069 | low |
| 5 | 청담동 | 0.2383 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.8817 | - |
| 3 | 역삼1동 | 0.6420 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8024 | - |
| 2 | 청담동 | 0.6222 | - |
| 3 | 삼성1동 | 0.4916 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4868 | 0.5872 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 2 | 논현1동 | 0.4449 | 0.5180 | 0.6865 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.3925 | 0.5155 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 4 | 역삼1동 | 0.3804 | 0.4391 | 0.7027 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.2208 | 0.2476 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 06:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 06:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 70000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 139
- Completed comparisons: 1
- Waiting comparisons: 138
- Live demand log count: 171
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 05:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.7833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 06:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.083
- Estimated positive imbalance after: 0.48
- Estimated relief score: 0.603
- Highest relief dong: 대치4동
