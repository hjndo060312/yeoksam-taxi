# Overnight Model QA Status

Generated: 2026. 05. 07. 19:52 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 19:52
- Raw citydata: `data/raw/citydata/2026-05-07/1952.json`
- Raw weather: `data/raw/weather/2026-05-07/1952.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.4 C
- Precipitation 1h: 0 mm
- Humidity: 91%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 20:00
- Traffic target: 2026. 05. 07. 20:00
- Taxi pressure target: 2026. 05. 07. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9128 | high |
| 2 | 역삼1동 | 0.4608 | watch |
| 3 | 삼성1동 | 0.4092 | watch |
| 4 | 대치4동 | 0.3604 | low |
| 5 | 삼성2동 | 0.2709 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7901 | - |
| 3 | 대치4동 | 0.7283 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9042 | - |
| 2 | 청담동 | 0.6883 | - |
| 3 | 삼성1동 | 0.5146 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7309 | 0.8510 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5339 | 0.6224 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4249 | 0.5023 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.4126 | 0.4583 | 0.7785 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3252 | 0.4090 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 07. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 208750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 15
- Completed comparisons: 1
- Waiting comparisons: 14
- Live demand log count: 47
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.6333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 10
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.966
- Estimated positive imbalance after: 0.956
- Estimated relief score: 1.01
- Highest relief dong: 논현1동
