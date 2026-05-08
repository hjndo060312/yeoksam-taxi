# Overnight Model QA Status

Generated: 2026. 05. 08. 16:41 KST

This file is updated by the overnight model QA cycle. It tracks public-data
proxy forecasts, not direct call-volume predictions.

## API Collection

- Citydata collected: 2026. 05. 08. 16:41
- Raw citydata: `data/raw/citydata/2026-05-08/1641.json`
- Raw weather: `data/raw/weather/2026-05-08/1641.json`
- KMA status: OK (200)
- Weather note: 강수 없음. 데이터 누락이 아닙니다.
- Temperature: 19.9 C
- Precipitation 1h: 0 mm
- Humidity: 26%
- Wind: 4.2 m/s

## Latest Targets

- Demand target: 2026. 05. 08. 17:00
- Traffic target: 2026. 05. 08. 17:00
- Taxi pressure target: 2026. 05. 08. 17:00

## Taxi Pressure Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9193 | high |
| 2 | 대치4동 | 0.3562 | low |
| 3 | 역삼1동 | 0.3389 | low |
| 4 | 삼성1동 | 0.2960 | low |
| 5 | 청담동 | 0.2838 | low |

## Demand Proxy Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 1.0000 | - |
| 2 | 대치4동 | 0.6558 | - |
| 3 | 역삼1동 | 0.5831 | - |

## Traffic Congestion Top Regions

| Rank | Dong | Score | Level |
| ---: | --- | ---: | --- |
| 1 | 논현1동 | 0.9073 | - |
| 2 | 청담동 | 0.7754 | - |
| 3 | 신사동 | 0.5744 | - |

## Guardrail Monitoring Priority

| Rank | Dong | Priority | Pressure | Confidence | Level | Risk flags |
| ---: | --- | ---: | ---: | ---: | --- | --- |
| 1 | 논현1동 | 0.7311 | 0.8682 | 0.6490 | medium | pattern_fallback_used |
| 2 | 역삼1동 | 0.4818 | 0.5617 | 0.6840 | high | pattern_fallback_used |
| 3 | 삼성1동 | 0.3868 | 0.4763 | 0.5826 | medium | pattern_fallback_used, weak_2026_proxy_validation |
| 4 | 삼성2동 | 0.3580 | 0.3976 | 0.7785 | high | pattern_fallback_used |
| 5 | 청담동 | 0.3104 | 0.3549 | 0.7214 | high | pattern_fallback_used |

- Guardrail target: 2026. 05. 08. 17:00
- Forecast strategy: pattern
- Baseline strength score: 0.6303
- Model vs pattern MAE improvement: 6.5%

## Population Pressure Proxy

- Target: 2026. 05. 08. 17:00
- Live POIs: 7
- Covered dongs: 6
- Forecast population midpoint sum: 285750

## Validation

- Taxi pressure comparison status: has_completed_comparison
- Taxi pressure log count: 33
- Completed comparisons: 1
- Waiting comparisons: 32
- Live demand log count: 65
- Latest comparison kind: completed
- Latest comparison target: 2026. 05. 08. 16:00
- Latest comparison top predicted: 논현1동
- Latest comparison top observed congestion: 대치4동
- Latest road-signal Spearman (policy check): 0.6667
- POI forecast completed/waiting: 0 / 1
- Latest POI forecast target: 2026. 05. 08. 17:00
- Latest POI matched rows: -
- Latest POI population MAE: -
- Latest POI congestion-level hit rate: -%
- Latest POI top predicted/observed: - / -

## Dispatch Effect Proxy

- Method: proxy_counterfactual_v1
- Intervention areas: 3
- Monitoring units: 7
- Max incentive multiplier: 1.2
- Positive imbalance before: 1.516
- Estimated positive imbalance after: 0.816
- Estimated relief score: 0.7
- Highest relief dong: 논현1동
