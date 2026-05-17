# Overnight Model QA Status

Generated: 2026. 05. 17. 19:38 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 17. 19:38
- Raw citydata: `data/raw/citydata/2026-05-17/1938.json`
- Raw weather: `data/raw/weather/2026-05-17/1938.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 25 C
- Precipitation 1h: 0 mm
- Humidity: 33%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 17. 20:00
- Traffic target: 2026. 05. 17. 20:00
- Taxi pressure target: 2026. 05. 17. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8610 | high |
| 2 | 역삼1동 | 0.5108 | watch |
| 3 | 삼성1동 | 0.3859 | low |
| 4 | 대치4동 | 0.2729 | low |
| 5 | 청담동 | 0.2460 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.9771 | - |
| 3 | 삼성1동 | 0.5905 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8206 | - |
| 2 | 청담동 | 0.6506 | - |
| 3 | 신사동 | 0.4630 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6363 | 0.7557 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.5152 | 0.6066 | 0.6652 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4080 | 0.4823 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3396 | 0.3844 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.2461 | 0.3190 | 0.4924 | low | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 17. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 17. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 128000

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 209
- Completed comparisons: 1
- Waiting comparisons: 208
- Live demand log count: 241
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 17. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.35
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 17. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.344
- Estimated positive imbalance after: 0.528
- Estimated relief score: 0.816
- Highest relief dong: 역삼1동
