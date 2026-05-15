# Overnight Model QA Status

Generated: 2026. 05. 15. 22:43 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 15. 22:43
- Raw citydata: `data/raw/citydata/2026-05-15/2243.json`
- Raw weather: `data/raw/weather/2026-05-15/2243.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 22.4 C
- Precipitation 1h: 0 mm
- Humidity: 52%
- Wind: 0.5 m/s

## Latest Targets

- Demand target: 2026. 05. 15. 23:00
- Traffic target: 2026. 05. 15. 23:00
- Taxi pressure target: 2026. 05. 15. 23:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8731 | high |
| 2 | 대치4동 | 0.4122 | watch |
| 3 | 역삼1동 | 0.3484 | low |
| 4 | 삼성1동 | 0.3352 | low |
| 5 | 청담동 | 0.2421 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7507 | - |
| 3 | 역삼1동 | 0.6752 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8332 | - |
| 2 | 청담동 | 0.5604 | - |
| 3 | 삼성1동 | 0.4255 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6847 | 0.7972 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4346 | 0.5067 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3550 | 0.4197 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 대치4동 | 0.3463 | 0.4355 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3312 | 0.3645 | 0.7972 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 15. 23:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 15. 23:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 138500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 170
- Completed comparisons: 1
- Waiting comparisons: 169
- Live demand log count: 202
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 15. 22:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.4833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 15. 23:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 9
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.474
- Estimated positive imbalance after: 0.561
- Estimated relief score: 0.913
- Highest relief dong: 논현1동
