# Overnight Model QA Status

Generated: 2026. 05. 08. 14:10 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 14:10
- Raw citydata: `data/raw/citydata/2026-05-08/1410.json`
- Raw weather: `data/raw/weather/2026-05-08/1410.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 20.1 C
- Precipitation 1h: 0 mm
- Humidity: 23%
- Wind: 4.3 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 15:00
- Traffic target: 2026. 05. 08. 15:00
- Taxi pressure target: 2026. 05. 08. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8844 | high |
| 2 | 대치4동 | 0.5375 | watch |
| 3 | 삼성1동 | 0.3488 | low |
| 4 | 역삼1동 | 0.2774 | low |
| 5 | 청담동 | 0.2690 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.9630 | - |
| 3 | 역삼1동 | 0.4670 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8955 | - |
| 2 | 청담동 | 0.7362 | - |
| 3 | 삼성1동 | 0.5665 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7471 | 0.8530 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4549 | 0.5487 | 0.6201 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4359 | 0.5082 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.4019 | 0.5278 | 0.4699 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3733 | 0.4186 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 08. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 303750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 31
- Completed comparisons: 1
- Waiting comparisons: 30
- Live demand log count: 63
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 13:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.5167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.649
- Estimated positive imbalance after: 0.833
- Estimated relief score: 0.816
- Highest relief dong: 논현1동
