# Overnight Model QA Status

Generated: 2026. 05. 07. 02:41 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 07. 02:41
- Raw citydata: `data/raw/citydata/2026-05-07/0241.json`
- Raw weather: `data/raw/weather/2026-05-07/0241.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 14.2 C
- Precipitation 1h: 0 mm
- Humidity: 58%
- Wind: 0.6 m/s

## Latest Targets

- Demand target: 2026. 05. 07. 03:00
- Traffic target: 2026. 05. 07. 03:00
- Taxi pressure target: 2026. 05. 07. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8505 | high |
| 2 | 대치4동 | 0.4567 | watch |
| 3 | 역삼1동 | 0.3944 | low |
| 4 | 삼성1동 | 0.3852 | low |
| 5 | 청담동 | 0.3432 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8244 | - |
| 3 | 삼성1동 | 0.8239 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8024 | - |
| 2 | 청담동 | 0.5218 | - |
| 3 | 신사동 | 0.3588 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6369 | 0.7415 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.4285 | 0.5200 | 0.6090 | medium | pattern_fallback_used, recent_rank_volatility |
| 3 | 삼성1동 | 0.3949 | 0.4813 | 0.6013 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 대치4동 | 0.3596 | 0.4661 | 0.4924 | low | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.3485 | 0.3984 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 07. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 07. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 72500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 3
- Completed comparisons: 1
- Waiting comparisons: 2
- Live demand log count: 35
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 07. 02:00
- Latest comparison top predicted: 역삼1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.3667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 07. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.408
- Estimated positive imbalance after: 0.61
- Estimated relief score: 0.798
- Highest relief dong: 대치4동
