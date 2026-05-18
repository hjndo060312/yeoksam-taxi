# Overnight Model QA Status

Generated: 2026. 05. 18. 20:31 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 18. 20:30
- Raw citydata: `data/raw/citydata/2026-05-18/2030.json`
- Raw weather: `data/raw/weather/2026-05-18/2030.json`
- KMA status: CHECK (-)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 0 C
- Precipitation 1h: 0 mm
- Humidity: 0%
- Wind: 0 m/s

## Latest Targets

- Demand target: 2026. 05. 18. 21:00
- Traffic target: 2026. 05. 18. 21:00
- Taxi pressure target: 2026. 05. 18. 21:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8819 | high |
| 2 | 역삼1동 | 0.4527 | watch |
| 3 | 대치4동 | 0.4001 | watch |
| 4 | 삼성1동 | 0.3855 | low |
| 5 | 삼성2동 | 0.2809 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.8448 | - |
| 3 | 대치4동 | 0.7952 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8529 | - |
| 2 | 청담동 | 0.6249 | - |
| 3 | 신사동 | 0.4195 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6898 | 0.8031 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5060 | 0.5899 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성2동 | 0.4041 | 0.4531 | 0.7597 | high | pattern_fallback_used |
| 4 | 삼성1동 | 0.4005 | 0.4734 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 5 | 대치4동 | 0.3440 | 0.4326 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 18. 21:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 18. 21:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 168750

## Validation

- Taxi pressure comparison status: waiting_for_observation
- Taxi pressure log count: 228
- Completed comparisons: 0
- Waiting comparisons: 228
- Live demand log count: 260
- Latest comparison kind: waiting
- Latest comparison target: 2026. 05. 18. 21:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: -
- Latest road-signal Spearman (policy check): -
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 18. 21:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.676
- Estimated positive imbalance after: 0.878
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
