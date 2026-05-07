# Overnight Model QA Status

Generated: 2026. 05. 07. 21:53 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 21:53
- Raw citydata: `data/raw/citydata/2026-05-07/2153.json`
- Raw weather: `data/raw/weather/2026-05-07/2153.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.3 C
- Precipitation 1h: 0 mm
- Humidity: 87%
- Wind: 0.5 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 22:00
- Traffic target: 2026. 05. 07. 22:00
- Taxi pressure target: 2026. 05. 07. 22:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8737 | high |
| 2 | 대치4동 | 0.4483 | watch |
| 3 | 역삼1동 | 0.4368 | watch |
| 4 | 삼성1동 | 0.4033 | watch |
| 5 | 삼성2동 | 0.2742 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.8356 | - |
| 3 | 역삼1동 | 0.7945 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8472 | - |
| 2 | 청담동 | 0.5669 | - |
| 3 | 삼성1동 | 0.4621 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6767 | 0.7879 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4845 | 0.5705 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3982 | 0.4707 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3930 | 0.4365 | 0.7785 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3533 | 0.4640 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 07. 22:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 22:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 150500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 17
- Completed comparisons: 1
- Waiting comparisons: 16
- Live demand log count: 49
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 21:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼2동
- Latest road-signal Spearman (policy check): 0.2333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 22:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 11
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.86
- Estimated positive imbalance after: 0.735
- Estimated relief score: 1.125
- Highest relief dong: 논현1동
