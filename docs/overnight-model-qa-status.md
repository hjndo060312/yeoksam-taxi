# Overnight Model QA Status

Generated: 2026. 05. 07. 14:18 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 14:18
- Raw citydata: `data/raw/citydata/2026-05-07/1418.json`
- Raw weather: `data/raw/weather/2026-05-07/1418.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 17.7 C
- Precipitation 1h: 0 mm
- Humidity: 69%
- Wind: 2.9 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 15:00
- Traffic target: 2026. 05. 07. 15:00
- Taxi pressure target: 2026. 05. 07. 15:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8426 | high |
| 2 | 대치4동 | 0.5213 | watch |
| 3 | 삼성1동 | 0.3249 | low |
| 4 | 청담동 | 0.2719 | low |
| 5 | 역삼1동 | 0.2616 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.9154 | - |
| 3 | 역삼1동 | 0.4319 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8754 | - |
| 2 | 청담동 | 0.7427 | - |
| 3 | 삼성1동 | 0.5621 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7175 | 0.8193 | 0.7240 | high | pattern_fallback_used |
| 2 | 삼성1동 | 0.4356 | 0.5309 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 3 | 역삼1동 | 0.4216 | 0.4915 | 0.6840 | high | pattern_fallback_used |
| 4 | 대치4동 | 0.3899 | 0.5236 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage |
| 5 | 삼성2동 | 0.3608 | 0.4046 | 0.7597 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 07. 15:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 15:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 311750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 12
- Completed comparisons: 1
- Waiting comparisons: 11
- Live demand log count: 44
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 13:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): 0.3833
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 15:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.393
- Estimated positive imbalance after: 0.577
- Estimated relief score: 0.816
- Highest relief dong: 대치4동
