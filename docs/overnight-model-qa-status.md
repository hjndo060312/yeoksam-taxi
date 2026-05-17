# Overnight Model QA Status

Generated: 2026. 05. 17. 21:34 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 21:34
- Raw citydata: `data/raw/citydata/2026-05-17/2134.json`
- Raw weather: `data/raw/weather/2026-05-17/2134.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 22.9 C
- Precipitation 1h: 0 mm
- Humidity: 38%
- Wind: 1.7 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 22:00
- Traffic target: 2026. 05. 17. 22:00
- Taxi pressure target: 2026. 05. 17. 22:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8608 | high |
| 2 | 역삼1동 | 0.5072 | watch |
| 3 | 삼성1동 | 0.3775 | low |
| 4 | 대치4동 | 0.3102 | low |
| 5 | 삼성2동 | 0.2448 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9820 | - |
| 3 | 삼성1동 | 0.6520 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8172 | - |
| 2 | 청담동 | 0.5345 | - |
| 3 | 신사동 | 0.3965 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6471 | 0.7534 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5146 | 0.6059 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.3881 | 0.4634 | 0.6388 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3498 | 0.3885 | 0.7785 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2989 | 0.3606 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 17. 22:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 22:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 103750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 211
- Completed comparisons: 1
- Waiting comparisons: 210
- Live demand log count: 243
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 21:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.8
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 22:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.337
- Estimated positive imbalance after: 0.521
- Estimated relief score: 0.816
- Highest relief dong: 역삼1동
