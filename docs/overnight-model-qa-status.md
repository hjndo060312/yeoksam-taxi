# Overnight Model QA Status

Generated: 2026. 05. 16. 10:49 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 10:49
- Raw citydata: `data/raw/citydata/2026-05-16/1049.json`
- Raw weather: `data/raw/weather/2026-05-16/1049.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 27.7 C
- Precipitation 1h: 0 mm
- Humidity: 38%
- Wind: 1 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 11:00
- Traffic target: 2026. 05. 16. 11:00
- Taxi pressure target: 2026. 05. 16. 11:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8953 | high |
| 2 | 삼성1동 | 0.4735 | watch |
| 3 | 역삼1동 | 0.3109 | low |
| 4 | 대치4동 | 0.2896 | low |
| 5 | 논현2동 | 0.2807 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 삼성1동 | 0.6717 | - |
| 3 | 역삼1동 | 0.6106 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8735 | - |
| 2 | 청담동 | 0.6767 | - |
| 3 | 삼성1동 | 0.5050 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6375 | 0.7726 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 삼성1동 | 0.4272 | 0.5153 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.3972 | 0.4630 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.2761 | 0.3400 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.2741 | 0.3103 | 0.7410 | high | pattern_fallback_used |

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

- Taxi pressure comparison status: waiting_for_observation
- Taxi pressure log count: 182
- Completed comparisons: 0
- Waiting comparisons: 182
- Live demand log count: 214
- Latest comparison kind: waiting
- Latest comparison target: 2026. 05. 16. 11:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: -
- Latest road-signal Spearman (policy check): -
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 11:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.296
- Estimated positive imbalance after: 0.595
- Estimated relief score: 0.701
- Highest relief dong: 논현1동
