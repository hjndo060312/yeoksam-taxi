# Overnight Model QA Status

Generated: 2026. 05. 18. 04:35 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 04:34
- Raw citydata: `data/raw/citydata/2026-05-18/0434.json`
- Raw weather: `data/raw/weather/2026-05-18/0434.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.5 C
- Precipitation 1h: 0 mm
- Humidity: 69%
- Wind: 1.3 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 05:00
- Traffic target: 2026. 05. 18. 05:00
- Taxi pressure target: 2026. 05. 18. 05:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 0.6515 | medium |
| 2 | 논현1동 | 0.4147 | watch |
| 3 | 대치4동 | 0.2716 | low |
| 4 | 역삼1동 | 0.2309 | low |
| 5 | 청담동 | 0.2269 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 삼성1동 | 1.0000 | - |
| 2 | 대치4동 | 0.5559 | - |
| 3 | 역삼1동 | 0.4735 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7693 | - |
| 2 | 청담동 | 0.6038 | - |
| 3 | 삼성1동 | 0.4680 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 삼성1동 | 0.5144 | 0.6334 | 0.5826 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 2 | 논현1동 | 0.3779 | 0.4357 | 0.7053 | high | pattern_fallback_used |
| 3 | 역삼1동 | 0.3019 | 0.3520 | 0.6840 | high | pattern_fallback_used, recent_rank_volatility |
| 4 | 대치4동 | 0.2548 | 0.3204 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.2168 | 0.2479 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 18. 05:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 05:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 64500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 218
- Completed comparisons: 1
- Waiting comparisons: 217
- Live demand log count: 250
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 18. 04:00
- Latest comparison top predicted: 삼성1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.4
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 05:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 1
- Monitoring units: 3
- Max incentive multiplier: 1.2
- Positive imbalance before: 0.626
- Estimated positive imbalance after: 0.316
- Estimated relief score: 0.31
- Highest relief dong: 삼성1동
