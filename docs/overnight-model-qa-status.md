# Overnight Model QA Status

Generated: 2026. 05. 13. 02:49 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 13. 02:49
- Raw citydata: `data/raw/citydata/2026-05-13/0249.json`
- Raw weather: `data/raw/weather/2026-05-13/0249.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 13.9 C
- Precipitation 1h: 0 mm
- Humidity: 84%
- Wind: 0.9 m/s

## Latest Targets

- Demand target: 2026. 05. 13. 03:00
- Traffic target: 2026. 05. 13. 03:00
- Taxi pressure target: 2026. 05. 13. 03:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8381 | high |
| 2 | 대치4동 | 0.4681 | watch |
| 3 | 삼성1동 | 0.4016 | watch |
| 4 | 역삼1동 | 0.3929 | low |
| 5 | 청담동 | 0.3707 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.8509 | - |
| 3 | 역삼1동 | 0.8193 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7834 | - |
| 2 | 청담동 | 0.5305 | - |
| 3 | 신사동 | 0.3633 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.6126 | 0.7275 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4448 | 0.5185 | 0.6840 | high | pattern_fallback_used, recent_rank_volatility |
| 3 | 삼성1동 | 0.4062 | 0.4802 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 대치4동 | 0.3866 | 0.4761 | 0.5824 | medium | pattern_fallback_used, no_live_population_poi_coverage |
| 5 | 청담동 | 0.3799 | 0.4261 | 0.7589 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 13. 03:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 13. 03:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 74500

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 118
- Completed comparisons: 1
- Waiting comparisons: 117
- Live demand log count: 150
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 13. 02:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.2167
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 13. 03:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 4
- Monitoring units: 8
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.363
- Estimated positive imbalance after: 0.565
- Estimated relief score: 0.798
- Highest relief dong: 대치4동
