# Overnight Model QA Status

Generated: 2026. 05. 11. 14:31 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 11. 14:30
- Raw citydata: `data/raw/citydata/2026-05-11/1430.json`
- Raw weather: `data/raw/weather/2026-05-11/1430.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.2 C
- Precipitation 1h: 0 mm
- Humidity: 63%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 11. 15:00
- Traffic target: 2026. 05. 11. 15:00
- Taxi pressure target: 2026. 05. 11. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8282 | high |
| 2 | 대치4동 | 0.5693 | medium |
| 3 | 삼성1동 | 0.3193 | low |
| 4 | 청담동 | 0.2598 | low |
| 5 | 역삼1동 | 0.2470 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8858 | - |
| 3 | 역삼1동 | 0.4101 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8792 | - |
| 2 | 청담동 | 0.7171 | - |
| 3 | 삼성1동 | 0.5552 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7069 | 0.8071 | 0.7240 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4047 | 0.4718 | 0.6840 | high | pattern_fallback_used |
| 3 | 대치4동 | 0.4020 | 0.5399 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 4 | 삼성1동 | 0.3980 | 0.4752 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 삼성2동 | 0.3411 | 0.3861 | 0.7410 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 11. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 11. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 293750

## Validation

- Taxi pressure comparison status: waiting_for_observation
- Taxi pressure log count: 93
- Completed comparisons: 0
- Waiting comparisons: 93
- Live demand log count: 125
- Latest comparison kind: waiting
- Latest comparison target: 2026. 05. 11. 15:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: -
- Latest road-signal Spearman (policy check): -
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 11. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.391
- Estimated positive imbalance after: 0.771
- Estimated relief score: 0.62
- Highest relief dong: 대치4동
