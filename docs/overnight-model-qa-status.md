# Overnight Model QA Status

Generated: 2026. 05. 14. 12:19 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 12:19
- Raw citydata: `data/raw/citydata/2026-05-14/1219.json`
- Raw weather: `data/raw/weather/2026-05-14/1219.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 28.6 C
- Precipitation 1h: 0 mm
- Humidity: 33%
- Wind: 2.3 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 13:00
- Traffic target: 2026. 05. 14. 13:00
- Taxi pressure target: 2026. 05. 14. 13:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7757 | high |
| 2 | 대치4동 | 0.5358 | watch |
| 3 | 삼성1동 | 0.3123 | low |
| 4 | 청담동 | 0.2650 | low |
| 5 | 역삼1동 | 0.2400 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8192 | - |
| 3 | 논현2동 | 0.4053 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8640 | - |
| 2 | 청담동 | 0.7262 | - |
| 3 | 삼성1동 | 0.5128 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6766 | 0.7726 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4223 | 0.5200 | 0.5826 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4021 | 0.4642 | 0.7027 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.3908 | 0.5249 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3535 | 0.3926 | 0.7785 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 13:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 13:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 302750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 144
- Completed comparisons: 1
- Waiting comparisons: 143
- Live demand log count: 176
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 11:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.25
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 13:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.188
- Estimated positive imbalance after: 0.585
- Estimated relief score: 0.603
- Highest relief dong: 대치4동
