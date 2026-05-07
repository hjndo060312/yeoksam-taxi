# Overnight Model QA Status

Generated: 2026. 05. 08. 02:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 02:42
- Raw citydata: `data/raw/citydata/2026-05-08/0242.json`
- Raw weather: `data/raw/weather/2026-05-08/0242.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 11.6 C
- Precipitation 1h: 0 mm
- Humidity: 88%
- Wind: 0.3 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 03:00
- Traffic target: 2026. 05. 08. 03:00
- Taxi pressure target: 2026. 05. 08. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8444 | high |
| 2 | 역삼2동 | 0.5222 | watch |
| 3 | 대치4동 | 0.4761 | watch |
| 4 | 역삼1동 | 0.3651 | low |
| 5 | 삼성1동 | 0.3637 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 역삼2동 | 1.0000 | - |
| 2 | 논현1동 | 0.9870 | - |
| 3 | 대치4동 | 0.8238 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8123 | - |
| 2 | 청담동 | 0.5652 | - |
| 3 | 대치4동 | 0.3572 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6531 | 0.7386 | 0.7428 | high | pattern_fallback_used |
| 2 | 역삼2동 | 0.4316 | 0.5236 | 0.6095 | medium | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 3 | 역삼1동 | 0.4267 | 0.5024 | 0.6652 | medium | pattern_fallback_used, recent_rank_volatility |
| 4 | 삼성1동 | 0.3807 | 0.4501 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 청담동 | 0.3688 | 0.4176 | 0.7402 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 08. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 70000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 22
- Completed comparisons: 1
- Waiting comparisons: 21
- Live demand log count: 54
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 02:00
- Latest comparison top predicted: 역삼1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 11
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.975
- Estimated positive imbalance after: 0.867
- Estimated relief score: 1.108
- Highest relief dong: 역삼2동
