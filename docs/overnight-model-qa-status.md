# Overnight Model QA Status

Generated: 2026. 05. 14. 16:17 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 14. 16:17
- Raw citydata: `data/raw/citydata/2026-05-14/1617.json`
- Raw weather: `data/raw/weather/2026-05-14/1617.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 30.9 C
- Precipitation 1h: 0 mm
- Humidity: 26%
- Wind: 2.2 m/s

## Latest Targets

- Demand target: 2026. 05. 14. 17:00
- Traffic target: 2026. 05. 14. 17:00
- Taxi pressure target: 2026. 05. 14. 17:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9205 | high |
| 2 | 대치4동 | 0.4013 | watch |
| 3 | 역삼1동 | 0.3288 | low |
| 4 | 삼성1동 | 0.3071 | low |
| 5 | 청담동 | 0.2913 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7885 | - |
| 3 | 역삼1동 | 0.5816 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9099 | - |
| 2 | 청담동 | 0.7920 | - |
| 3 | 신사동 | 0.6196 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7360 | 0.8740 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4866 | 0.5617 | 0.7027 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4070 | 0.5064 | 0.5638 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3897 | 0.4249 | 0.8160 | high | pattern_fallback_used |
| 5 | 청담동 | 0.3371 | 0.3854 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 14. 17:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 14. 17:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 291250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 146
- Completed comparisons: 1
- Waiting comparisons: 145
- Live demand log count: 178
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 14. 15:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.4167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 14. 17:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.485
- Estimated positive imbalance after: 0.785
- Estimated relief score: 0.7
- Highest relief dong: 논현1동
