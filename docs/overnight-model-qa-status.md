# Overnight Model QA Status

Generated: 2026. 05. 12. 02:49 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 12. 02:49
- Raw citydata: `data/raw/citydata/2026-05-12/0249.json`
- Raw weather: `data/raw/weather/2026-05-12/0249.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 15.7 C
- Precipitation 1h: 0 mm
- Humidity: 90%
- Wind: 1.1 m/s

## Latest Targets

- Demand target: 2026. 05. 12. 03:00
- Traffic target: 2026. 05. 12. 03:00
- Taxi pressure target: 2026. 05. 12. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8421 | high |
| 2 | 대치4동 | 0.4331 | watch |
| 3 | 역삼1동 | 0.3962 | low |
| 4 | 삼성1동 | 0.3717 | low |
| 5 | 청담동 | 0.3640 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.8379 | - |
| 3 | 역삼1동 | 0.8184 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7975 | - |
| 2 | 청담동 | 0.5089 | - |
| 3 | 논현2동 | 0.3890 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6356 | 0.7400 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4380 | 0.5157 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3818 | 0.4605 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.3744 | 0.4281 | 0.7214 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3654 | 0.4595 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 12. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 12. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 70000

## Validation

- Taxi pressure comparison status: waiting_for_observation
- Taxi pressure log count: 100
- Completed comparisons: 0
- Waiting comparisons: 100
- Live demand log count: 132
- Latest comparison kind: waiting
- Latest comparison target: 2026. 05. 12. 03:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: -
- Latest road-signal Spearman (policy check): -
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 12. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 7
- Max incentive multiplier: 1.1
- Positive imbalance before: 1.231
- Estimated positive imbalance after: 0.548
- Estimated relief score: 0.683
- Highest relief dong: 논현1동
