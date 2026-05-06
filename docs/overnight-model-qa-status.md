# Overnight Model QA Status

Generated: 2026. 05. 06. 13:00 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct KakaoT taxi-call predictions.

## API Collection

- Citydata collected: 2026. 05. 06. 13:00
- Raw citydata: `data\raw\citydata\2026-05-06\1300.json`
- Raw weather: `data\raw\weather\2026-05-06\1300.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 24.1 C
- Precipitation 1h: 0 mm
- Humidity: 36%
- Wind: 1.2 m/s

## Latest Targets

- Demand target: 2026. 05. 06. 14:00
- Traffic target: 2026. 05. 06. 14:00
- Taxi pressure target: 2026. 05. 06. 14:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8384 | high |
| 2 | 대치4동 | 0.5335 | watch |
| 3 | 삼성1동 | 0.2738 | low |
| 4 | 청담동 | 0.2568 | low |
| 5 | 역삼1동 | 0.2468 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8962 | - |
| 3 | 역삼1동 | 0.4200 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8970 | - |
| 2 | 청담동 | 0.7056 | - |
| 3 | 신사동 | 0.5214 | - |

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 23
- Completed comparisons: 12
- Waiting comparisons: 11
- Live demand log count: 23
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 06. 12:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 논현1동
- Latest road-signal Spearman (policy check): 0.2667
- POI forecast completed/waiting: 5 / 12
- Latest POI forecast target: 2026. 05. 06. 12:00
- Latest POI matched rows: 10
- Latest POI population MAE: 1900
- Latest POI congestion-level hit rate: 60%
- Latest POI top predicted/observed: 강남역 / 강남역

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 2
- Monitoring units: 6
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.253
- Estimated positive imbalance after: 0.633
- Estimated relief score: 0.62
- Highest relief dong: 대치4동
