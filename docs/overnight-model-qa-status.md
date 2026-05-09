# Overnight Model QA Status

Generated: 2026. 05. 09. 15:56 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 09. 15:56
- Raw citydata: `data/raw/citydata/2026-05-09/1556.json`
- Raw weather: `data/raw/weather/2026-05-09/1556.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.8 C
- Precipitation 1h: 0 mm
- Humidity: 20%
- Wind: 1.8 m/s

## Latest Targets

- Demand target: 2026. 05. 09. 16:00
- Traffic target: 2026. 05. 09. 16:00
- Taxi pressure target: 2026. 05. 09. 16:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8918 | high |
| 2 | 삼성1동 | 0.3402 | low |
| 3 | 역삼1동 | 0.3352 | low |
| 4 | 청담동 | 0.2954 | low |
| 5 | 논현2동 | 0.2562 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.6098 | - |
| 3 | 논현2동 | 0.4696 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8651 | - |
| 2 | 청담동 | 0.7923 | - |
| 3 | 신사동 | 0.6030 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6546 | 0.7933 | 0.6115 | medium | pattern_fallback_used, signals_disagree |
| 2 | 역삼1동 | 0.4391 | 0.5119 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4234 | 0.5213 | 0.5826 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 청담동 | 0.3387 | 0.3949 | 0.6839 | high | pattern_fallback_used |
| 5 | 삼성2동 | 0.3155 | 0.3409 | 0.8347 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 09. 16:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 09. 16:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 190750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 53
- Completed comparisons: 1
- Waiting comparisons: 52
- Live demand log count: 85
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 09. 15:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.3667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 09. 16:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.056
- Estimated positive imbalance after: 0.453
- Estimated relief score: 0.603
- Highest relief dong: 논현1동
