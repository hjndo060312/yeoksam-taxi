# Overnight Model QA Status

Generated: 2026. 05. 13. 14:27 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 14:27
- Raw citydata: `data/raw/citydata/2026-05-13/1427.json`
- Raw weather: `data/raw/weather/2026-05-13/1427.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 26.1 C
- Precipitation 1h: 0 mm
- Humidity: 41%
- Wind: 2.3 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 15:00
- Traffic target: 2026. 05. 13. 15:00
- Taxi pressure target: 2026. 05. 13. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8481 | high |
| 2 | 대치4동 | 0.5592 | medium |
| 3 | 삼성1동 | 0.3231 | low |
| 4 | 청담동 | 0.2770 | low |
| 5 | 역삼1동 | 0.2629 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.9042 | - |
| 3 | 역삼1동 | 0.4183 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9020 | - |
| 2 | 청담동 | 0.7609 | - |
| 3 | 삼성1동 | 0.5648 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7256 | 0.8285 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4314 | 0.5257 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4190 | 0.4885 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.4104 | 0.5390 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3500 | 0.3924 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 13. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 13. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 298750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 127
- Completed comparisons: 1
- Waiting comparisons: 126
- Live demand log count: 159
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 13:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.6667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 13. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.542
- Estimated positive imbalance after: 0.726
- Estimated relief score: 0.816
- Highest relief dong: 대치4동
