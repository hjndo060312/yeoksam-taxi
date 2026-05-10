# Overnight Model QA Status

Generated: 2026. 05. 11. 05:24 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 11. 05:24
- Raw citydata: `data/raw/citydata/2026-05-11/0524.json`
- Raw weather: `data/raw/weather/2026-05-11/0524.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 12.8 C
- Precipitation 1h: 0 mm
- Humidity: 73%
- Wind: 1 m/s

## Latest Targets

- Demand target: 2026. 05. 11. 06:00
- Traffic target: 2026. 05. 11. 06:00
- Taxi pressure target: 2026. 05. 11. 06:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.5395 | watch |
| 2 | 논현1동 | 0.5198 | watch |
| 3 | 대치4동 | 0.4823 | watch |
| 4 | 역삼1동 | 0.3071 | low |
| 5 | 청담동 | 0.2258 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 삼성1동 | 0.8646 | - |
| 3 | 역삼1동 | 0.6553 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7891 | - |
| 2 | 청담동 | 0.5918 | - |
| 3 | 삼성1동 | 0.4515 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.4753 | 0.5675 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation, recent_rank_volatility |
| 2 | 논현1동 | 0.4435 | 0.5064 | 0.7240 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.3819 | 0.5129 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 4 | 역삼1동 | 0.3773 | 0.4356 | 0.7027 | high | pattern_fallback_used |
| 5 | 청담동 | 0.2070 | 0.2367 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 11. 06:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 11. 06:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 64500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 87
- Completed comparisons: 2
- Waiting comparisons: 85
- Live demand log count: 119
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 11. 05:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 11. 06:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.903
- Estimated positive imbalance after: 0.398
- Estimated relief score: 0.505
- Highest relief dong: 대치4동
