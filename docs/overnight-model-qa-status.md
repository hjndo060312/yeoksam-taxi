# Overnight Model QA Status

Generated: 2026. 05. 13. 20:50 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 20:50
- Raw citydata: `data/raw/citydata/2026-05-13/2050.json`
- Raw weather: `data/raw/weather/2026-05-13/2050.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 21.4 C
- Precipitation 1h: 0 mm
- Humidity: 52%
- Wind: 2 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 21:00
- Traffic target: 2026. 05. 13. 21:00
- Taxi pressure target: 2026. 05. 13. 21:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8767 | high |
| 2 | 역삼1동 | 0.4472 | watch |
| 3 | 대치4동 | 0.3873 | low |
| 4 | 삼성1동 | 0.3805 | low |
| 5 | 삼성2동 | 0.2851 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8510 | - |
| 3 | 대치4동 | 0.7890 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8431 | - |
| 2 | 청담동 | 0.5914 | - |
| 3 | 삼성1동 | 0.4063 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7034 | 0.8189 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5041 | 0.5995 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성2동 | 0.4172 | 0.4768 | 0.7222 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.3950 | 0.4669 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.3438 | 0.4324 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 13. 21:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 13. 21:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 176750

## Validation

- Taxi pressure comparison status: waiting_for_observation
- Taxi pressure log count: 131
- Completed comparisons: 0
- Waiting comparisons: 131
- Live demand log count: 163
- Latest comparison kind: waiting
- Latest comparison target: 2026. 05. 13. 21:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: -
- Latest road-signal Spearman (policy check): -
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 13. 21:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.623
- Estimated positive imbalance after: 0.825
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
