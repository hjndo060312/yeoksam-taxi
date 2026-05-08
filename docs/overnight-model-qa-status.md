# Overnight Model QA Status

Generated: 2026. 05. 08. 19:42 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 19:42
- Raw citydata: `data/raw/citydata/2026-05-08/1942.json`
- Raw weather: `data/raw/weather/2026-05-08/1942.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 17.8 C
- Precipitation 1h: 0 mm
- Humidity: 33%
- Wind: 2.3 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 20:00
- Traffic target: 2026. 05. 08. 20:00
- Taxi pressure target: 2026. 05. 08. 20:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9244 | high |
| 2 | 역삼1동 | 0.4214 | watch |
| 3 | 삼성1동 | 0.3753 | low |
| 4 | 대치4동 | 0.3541 | low |
| 5 | 삼성2동 | 0.2584 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 역삼1동 | 0.7219 | - |
| 3 | 대치4동 | 0.6752 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9099 | - |
| 2 | 청담동 | 0.6305 | - |
| 3 | 삼성1동 | 0.4923 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7716 | 0.8810 | 0.7240 | high | pattern_fallback_used |
| 2 | 역삼1동 | 0.5005 | 0.5952 | 0.6465 | medium | pattern_fallback_used |
| 3 | 삼성1동 | 0.4259 | 0.5035 | 0.6576 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.4016 | 0.4419 | 0.7972 | high | pattern_fallback_used |
| 5 | 대치4동 | 0.3119 | 0.3922 | 0.5449 | medium | pattern_fallback_used, no_live_population_poi_coverage |

- Guardrail target: 2026. 05. 08. 20:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 20:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 210750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 36
- Completed comparisons: 1
- Waiting comparisons: 35
- Live demand log count: 68
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 19:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 역삼1동
- Latest road-signal Spearman (policy check): 0.8333
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 20:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 5
- Monitoring units: 10
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.933
- Estimated positive imbalance after: 0.94
- Estimated relief score: 0.993
- Highest relief dong: 논현1동
