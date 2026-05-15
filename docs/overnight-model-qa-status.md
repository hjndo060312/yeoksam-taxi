# Overnight Model QA Status

Generated: 2026. 05. 16. 01:46 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 16. 01:46
- Raw citydata: `data/raw/citydata/2026-05-16/0146.json`
- Raw weather: `data/raw/weather/2026-05-16/0146.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19 C
- Precipitation 1h: 0 mm
- Humidity: 69%
- Wind: 0.6 m/s

## Latest Targets

- Demand target: 2026. 05. 16. 02:00
- Traffic target: 2026. 05. 16. 02:00
- Taxi pressure target: 2026. 05. 16. 02:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8879 | high |
| 2 | 역삼1동 | 0.3387 | low |
| 3 | 청담동 | 0.3260 | low |
| 4 | 삼성1동 | 0.3200 | low |
| 5 | 대치4동 | 0.2989 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7147 | - |
| 3 | 삼성1동 | 0.6526 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8757 | - |
| 2 | 청담동 | 0.4534 | - |
| 3 | 신사동 | 0.3302 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6590 | 0.7672 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4054 | 0.4821 | 0.6465 | medium | pattern_fallback_used |
| 3 | 청담동 | 0.3447 | 0.3866 | 0.7589 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3411 | 0.4157 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.2905 | 0.3505 | 0.6199 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 16. 02:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 16. 02:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 77750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 173
- Completed comparisons: 1
- Waiting comparisons: 172
- Live demand log count: 205
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 16. 01:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.6333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 16. 02:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 5
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.054
- Estimated positive imbalance after: 0.548
- Estimated relief score: 0.506
- Highest relief dong: 논현1동
