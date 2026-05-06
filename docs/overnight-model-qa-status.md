# Overnight Model QA Status

Generated: 2026. 05. 06. 10:28 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct KakaoT taxi-call predictions.

## API Collection

- Citydata collected: 2026. 05. 06. 09:06
- Raw citydata: `data\raw\citydata\2026-05-06\0906.json`
- Raw weather: `data\raw\weather\2026-05-06\0906.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 16.6 C
- Precipitation 1h: 0 mm
- Humidity: 47%
- Wind: 1.6 m/s

## Latest Targets

- Demand target: 2026. 05. 06. 11:00
- Traffic target: 2026. 05. 06. 11:00
- Taxi pressure target: 2026. 05. 06. 11:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.7767 | high |
| 2 | 대치4동 | 0.5572 | medium |
| 3 | 삼성1동 | 0.3641 | low |
| 4 | 청담동 | 0.2651 | low |
| 5 | 역삼1동 | 0.2498 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 대치4동 | 1.0000 | - |
| 2 | 논현1동 | 0.8458 | - |
| 3 | 삼성1동 | 0.4765 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.8480 | - |
| 2 | 청담동 | 0.6691 | - |
| 3 | 신사동 | 0.6639 | - |

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 19
- Completed comparisons: 7
- Waiting comparisons: 12
- Live demand log count: 19
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 06. 09:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 삼성1동
- Latest road-signal Spearman (policy check): -0.1333
