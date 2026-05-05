from __future__ import annotations

import argparse
import json
import math
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import joblib
import numpy as np
import pandas as pd


MODEL_PATH = Path("data/processed/model_traffic_forecast/traffic_forecast_model.joblib")
PATTERN_CACHE_PATH = Path("data/processed/model_traffic_forecast/traffic_pattern_cache.json")
CURRENT_TRAFFIC_PATH = Path("data/processed/traffic/citydata_dong_traffic_latest.json")
OUT_PATH = Path("public/traffic-forecast/latest.json")
LOG_PATH = Path("data/processed/live_validation/traffic_forecast_log.jsonl")
KST = timezone(timedelta(hours=9))


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Predict 1-hour-ahead dong-level road traffic.")
    parser.add_argument("target_datetime", nargs="?", help="Target KST hour: YYYY-MM-DD HH:00")
    parser.add_argument("--model", type=Path, default=MODEL_PATH)
    parser.add_argument("--pattern-cache", type=Path, default=PATTERN_CACHE_PATH)
    parser.add_argument("--current-traffic", type=Path, default=CURRENT_TRAFFIC_PATH)
    parser.add_argument("--out", type=Path, default=OUT_PATH)
    parser.add_argument("--log", type=Path, default=LOG_PATH)
    return parser.parse_args()


def parse_target(value: str | None) -> datetime:
    if value:
      return datetime.strptime(value, "%Y-%m-%d %H:%M").replace(tzinfo=KST)
    now = datetime.now(KST).replace(minute=0, second=0, microsecond=0)
    return now + timedelta(hours=1)


def pattern_type_for(dt: datetime) -> str:
    return "weekend" if dt.weekday() >= 5 else "weekday"


def load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def make_pattern_lookup(cache: dict, key_fields: list[str]) -> dict[tuple, dict]:
    return {
        tuple(row.get(field) for field in key_fields): row
        for row in cache.get("patterns" if len(key_fields) == 4 else "fallback_patterns", [])
    }


def lookup_pattern(
    exact_lookup: dict[tuple, dict],
    fallback_lookup: dict[tuple, dict],
    dong_name: str,
    dt: datetime,
) -> dict:
    pattern_type = pattern_type_for(dt)
    exact_key = (dong_name, dt.month, dt.hour, pattern_type)
    fallback_key = (dong_name, dt.hour, pattern_type)
    weekday_fallback_key = (dong_name, dt.hour, "weekday")
    return (
        exact_lookup.get(exact_key)
        or fallback_lookup.get(fallback_key)
        or fallback_lookup.get(weekday_fallback_key)
        or {}
    )


def clamp(value: float, lower: float, upper: float) -> float:
    return max(lower, min(upper, value))


def minmax(values: list[float]) -> list[float]:
    finite = [value for value in values if math.isfinite(value)]
    if not finite:
        return [0.5 for _ in values]
    lo, hi = min(finite), max(finite)
    if math.isclose(lo, hi):
        return [0.5 for _ in values]
    return [(value - lo) / (hi - lo) if math.isfinite(value) else 0.5 for value in values]


def current_traffic_by_dong(path: Path) -> tuple[dict[str, dict], dict | None]:
    if not path.exists():
        return {}, None
    payload = load_json(path)
    rows = payload.get("dong_summary", [])
    return {row.get("dong_name"): row for row in rows if row.get("dong_name")}, payload.get("meta")


def live_multiplier(current: dict | None) -> float:
    if not current:
        return 1.0
    congestion = float(current.get("congestion_score") or 0.45)
    speed = float(current.get("avg_speed_kmh") or 22)
    congestion_component = 0.75 + 0.5 * congestion
    speed_component = clamp((24 - speed) / 80, -0.12, 0.12)
    return clamp(congestion_component + speed_component, 0.75, 1.35)


def feature_value(pattern: dict, field: str, default: float = 0) -> float:
    value = pattern.get(field, default)
    try:
        number = float(value)
        return number if math.isfinite(number) else default
    except (TypeError, ValueError):
        return default


def build_feature_rows(cache: dict, current_traffic: dict[str, dict], target_dt: datetime) -> pd.DataFrame:
    exact_lookup = make_pattern_lookup(cache, cache.get("group_keys", []))
    fallback_lookup = make_pattern_lookup(cache, cache.get("fallback_group_keys", []))
    feature_dt = target_dt - timedelta(hours=1)
    rows = []

    for dong_name in cache.get("target_dongs", []):
        pattern_now = lookup_pattern(exact_lookup, fallback_lookup, dong_name, feature_dt)
        pattern_lag_1h = lookup_pattern(exact_lookup, fallback_lookup, dong_name, feature_dt - timedelta(hours=1))
        pattern_lag_24h = lookup_pattern(exact_lookup, fallback_lookup, dong_name, feature_dt - timedelta(hours=24))
        pattern_lag_168h = lookup_pattern(exact_lookup, fallback_lookup, dong_name, feature_dt - timedelta(hours=168))
        current = current_traffic.get(dong_name)
        multiplier = live_multiplier(current)

        current_proxy = feature_value(pattern_now, "traffic_volume_proxy") * multiplier
        rows.append(
            {
                "dong_name": dong_name,
                "month": feature_dt.month,
                "hour": feature_dt.hour,
                "weekday": feature_dt.weekday(),
                "is_weekend": int(feature_dt.weekday() >= 5),
                "pattern_type": pattern_type_for(feature_dt),
                "traffic_volume_proxy": current_proxy,
                "source_spot_count": feature_value(pattern_now, "source_spot_count", 1),
                "source_rows": feature_value(pattern_now, "source_rows", 1),
                "traffic_lag_1h": feature_value(pattern_lag_1h, "traffic_volume_proxy", current_proxy),
                "traffic_lag_24h": feature_value(pattern_lag_24h, "traffic_volume_proxy", current_proxy),
                "traffic_lag_168h": feature_value(pattern_lag_168h, "traffic_volume_proxy", current_proxy),
                "traffic_rolling_24h_mean": feature_value(
                    pattern_now, "traffic_rolling_24h_mean", current_proxy
                ),
                "traffic_rolling_168h_mean": feature_value(
                    pattern_now, "traffic_rolling_168h_mean", current_proxy
                ),
                "current_avg_speed_kmh": current.get("avg_speed_kmh") if current else None,
                "current_congestion_score": current.get("congestion_score") if current else None,
                "current_link_count": current.get("link_count") if current else None,
                "live_calibration_multiplier": multiplier,
            }
        )

    return pd.DataFrame(rows)


def predicted_congestion_score(volume_score: float, current_congestion: float | None) -> float:
    if current_congestion is None or not math.isfinite(current_congestion):
        return clamp(volume_score, 0, 1)
    return clamp(0.62 * volume_score + 0.38 * current_congestion, 0, 1)


def predicted_speed(predicted_congestion: float, current_speed: float | None, current_congestion: float | None) -> float:
    if current_speed is None or not math.isfinite(current_speed):
        return clamp(39 - 28 * predicted_congestion, 6, 45)
    baseline_congestion = current_congestion if current_congestion is not None else 0.5
    speed = current_speed * (1 - 0.38 * (predicted_congestion - baseline_congestion))
    return clamp(speed, 6, 45)


def now_kst_iso() -> str:
    return datetime.now(KST).replace(microsecond=0).isoformat()


def main() -> None:
    args = parse_args()
    target_dt = parse_target(args.target_datetime)
    feature_dt = target_dt - timedelta(hours=1)
    artifact = joblib.load(args.model)
    cache = load_json(args.pattern_cache)
    current_traffic, traffic_meta = current_traffic_by_dong(args.current_traffic)

    features = build_feature_rows(cache, current_traffic, target_dt)
    feature_cols = artifact["feature_columns"]
    predictions = artifact["pipeline"].predict(features[feature_cols])
    volume_scores = minmax([float(value) for value in predictions])

    rows = []
    for row, prediction, volume_score in zip(features.to_dict(orient="records"), predictions, volume_scores):
        current_congestion = row.get("current_congestion_score")
        current_speed = row.get("current_avg_speed_kmh")
        current_congestion = None if current_congestion is None else float(current_congestion)
        current_speed = None if current_speed is None else float(current_speed)
        congestion = predicted_congestion_score(float(volume_score), current_congestion)
        speed = predicted_speed(congestion, current_speed, current_congestion)
        rows.append(
            {
                "dong_name": row["dong_name"],
                "predicted_traffic_volume_proxy": round(float(prediction), 3),
                "predicted_traffic_volume_score": round(float(volume_score), 4),
                "predicted_congestion_score": round(float(congestion), 4),
                "predicted_avg_speed_kmh": round(float(speed), 1),
                "current_congestion_score": None if current_congestion is None else round(current_congestion, 4),
                "current_avg_speed_kmh": None if current_speed is None else round(current_speed, 1),
                "current_link_count": row.get("current_link_count"),
                "live_calibration_multiplier": round(float(row["live_calibration_multiplier"]), 4),
            }
        )

    rows = sorted(rows, key=lambda item: item["predicted_congestion_score"], reverse=True)
    payload = {
        "source": "traffic_forecast_model",
        "generated_at": now_kst_iso(),
        "feature_datetime": feature_dt.strftime("%Y-%m-%dT%H:%M:%S+09:00"),
        "target_datetime": target_dt.strftime("%Y-%m-%dT%H:%M:%S+09:00"),
        "horizon_hours": 1,
        "model_target": "target_traffic_volume_proxy_t_plus_1h",
        "forecast_fields": [
            "predicted_traffic_volume_proxy",
            "predicted_traffic_volume_score",
            "predicted_congestion_score",
            "predicted_avg_speed_kmh",
        ],
        "current_traffic_meta": traffic_meta,
        "note": (
            "Traffic volume is predicted by a TOPIS-trained ML model. Congestion and speed are "
            "live-calibrated estimates using current Seoul citydata road observations."
        ),
        "regions": rows,
    }

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    args.log.parent.mkdir(parents=True, exist_ok=True)
    with args.log.open("a", encoding="utf-8") as file:
        file.write(json.dumps(payload, ensure_ascii=False) + "\n")

    print(f"Wrote {args.out}")
    print(f"Appended {args.log}")
    print(json.dumps({"target_datetime": payload["target_datetime"], "top": rows[:3]}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
