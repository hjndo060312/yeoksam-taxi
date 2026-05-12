# Overnight Model QA Status

Generated: 2026. 05. 12. 14:24 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 12. 14:23
- Raw citydata: `data/raw/citydata/2026-05-12/1423.json`
- Raw weather: `data/raw/weather/2026-05-12/1423.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 23.7 C
- Precipitation 1h: 0 mm
- Humidity: 55%
- Wind: 1.7 m/s

## Latest Targets

- Demand target: 2026. 05. 12. 15:00
- Traffic target: 2026. 05. 12. 15:00
- Taxi pressure target: 2026. 05. 12. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8422 | high |
| 2 | 대치4동 | 0.5465 | watch |
| 3 | 삼성1동 | 0.3193 | low |
| 4 | 청담동 | 0.2710 | low |
| 5 | 논현2동 | 0.2665 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8999 | - |
| 3 | 역삼1동 | 0.4175 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8947 | - |
| 2 | 청담동 | 0.7449 | - |
| 3 | 삼성1동 | 0.5586 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7165 | 0.8181 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4289 | 0.5227 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4132 | 0.4865 | 0.6652 | medium | pattern_fallback_used |
| 4 | 대치4동 | 0.3965 | 0.5325 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3435 | 0.3851 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 12. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 12. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 307250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 109
- Completed comparisons: 1
- Waiting comparisons: 108
- Live demand log count: 141
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 12. 13:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.6667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 12. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.49
- Estimated positive imbalance after: 0.772
- Estimated relief score: 0.718
- Highest relief dong: 대치4동
