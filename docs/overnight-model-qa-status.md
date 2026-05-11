# Overnight Model QA Status

Generated: 2026. 05. 11. 18:25 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 11. 18:25
- Raw citydata: `data/raw/citydata/2026-05-11/1825.json`
- Raw weather: `data/raw/weather/2026-05-11/1825.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 18.3 C
- Precipitation 1h: 0 mm
- Humidity: 83%
- Wind: 0.8 m/s

## Latest Targets

- Demand target: 2026. 05. 11. 19:00
- Traffic target: 2026. 05. 11. 19:00
- Taxi pressure target: 2026. 05. 11. 19:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9170 | high |
| 2 | 역삼1동 | 0.4117 | watch |
| 3 | 대치4동 | 0.3859 | low |
| 4 | 삼성1동 | 0.3596 | low |
| 5 | 논현2동 | 0.2866 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.7349 | - |
| 3 | 역삼1동 | 0.6790 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9080 | - |
| 2 | 청담동 | 0.6828 | - |
| 3 | 신사동 | 0.4963 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7502 | 0.8734 | 0.6865 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5132 | 0.5983 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.4147 | 0.4902 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.4008 | 0.4537 | 0.7410 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3091 | 0.4152 | 0.4324 | low | pattern_fallback_used, signals_disagree, no_live_population_poi_coverage, recent_rank_volatility |

- Guardrail target: 2026. 05. 11. 19:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 11. 19:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 237250

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 95
- Completed comparisons: 1
- Waiting comparisons: 94
- Live demand log count: 127
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 11. 17:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.7333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 11. 19:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.907
- Estimated positive imbalance after: 1.109
- Estimated relief score: 0.798
- Highest relief dong: 논현1동
