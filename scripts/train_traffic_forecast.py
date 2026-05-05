from __future__ import annotations

import argparse
import json
import math
from datetime import datetime
from pathlib import Path

import joblib
import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.impute import SimpleImputer
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler


DEFAULT_INPUT = Path("data/processed/topis/topis_dong_hourly_2023-01_2026-03.csv")
DEFAULT_OUT_DIR = Path("data/processed/model_traffic_forecast")
TARGET = "target_traffic_volume_proxy_t_plus_1h"
HORIZON_HOURS = 1


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Train a 1-hour-ahead dong-level road traffic-volume proxy model."
    )
    parser.add_argument("--input", type=Path, default=DEFAULT_INPUT)
    parser.add_argument("--out-dir", type=Path, default=DEFAULT_OUT_DIR)
    return parser.parse_args()


def metric_bundle(y_true: pd.Series, y_pred: np.ndarray) -> dict[str, float]:
    y_true_arr = np.asarray(y_true, dtype=float)
    y_pred_arr = np.asarray(y_pred, dtype=float)
    nonzero = np.abs(y_true_arr) > 1e-9
    return {
        "r2": float(r2_score(y_true_arr, y_pred_arr)),
        "mae": float(mean_absolute_error(y_true_arr, y_pred_arr)),
        "rmse": float(math.sqrt(mean_squared_error(y_true_arr, y_pred_arr))),
        "mape_pct": float(
            np.mean(np.abs((y_true_arr[nonzero] - y_pred_arr[nonzero]) / y_true_arr[nonzero]))
            * 100
        ),
    }


def add_calendar_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()
    df["datetime_kst"] = pd.to_datetime(df["datetime_kst"])
    df["month"] = df["datetime_kst"].dt.month
    df["hour"] = df["datetime_kst"].dt.hour
    df["weekday"] = df["datetime_kst"].dt.weekday
    df["is_weekend"] = (df["weekday"] >= 5).astype(int)
    df["pattern_type"] = np.where(df["is_weekend"] == 1, "weekend", "weekday")
    return df


def add_supervised_features(df: pd.DataFrame) -> pd.DataFrame:
    df = df.sort_values(["dong_name", "datetime_kst"]).copy()
    group = df.groupby("dong_name", group_keys=False)
    df["traffic_lag_1h"] = group["traffic_volume_proxy"].shift(1)
    df["traffic_lag_24h"] = group["traffic_volume_proxy"].shift(24)
    df["traffic_lag_168h"] = group["traffic_volume_proxy"].shift(168)
    df["traffic_rolling_24h_mean"] = group["traffic_volume_proxy"].transform(
        lambda series: series.shift(1).rolling(24, min_periods=6).mean()
    )
    df["traffic_rolling_168h_mean"] = group["traffic_volume_proxy"].transform(
        lambda series: series.shift(1).rolling(168, min_periods=24).mean()
    )
    df[TARGET] = group["traffic_volume_proxy"].shift(-HORIZON_HOURS)
    return df


def build_pattern_cache(train_df: pd.DataFrame, feature_cols: list[str]) -> dict:
    pattern_cols = [
        "traffic_volume_proxy",
        "source_spot_count",
        "source_rows",
        "traffic_lag_1h",
        "traffic_lag_24h",
        "traffic_lag_168h",
        "traffic_rolling_24h_mean",
        "traffic_rolling_168h_mean",
    ]
    available_pattern_cols = [column for column in pattern_cols if column in train_df.columns]

    patterns = (
        train_df.groupby(["dong_name", "month", "hour", "pattern_type"], as_index=False)[
            available_pattern_cols
        ]
        .mean(numeric_only=True)
        .round(6)
    )
    fallback_patterns = (
        train_df.groupby(["dong_name", "hour", "pattern_type"], as_index=False)[available_pattern_cols]
        .mean(numeric_only=True)
        .round(6)
    )
    latest_by_dong = (
        train_df.sort_values("datetime_kst")
        .groupby("dong_name")
        .tail(1)[["dong_name", "source_spot_count", "source_rows"]]
        .set_index("dong_name")
        .to_dict(orient="index")
    )

    return {
        "schema_version": 1,
        "created_at": datetime.now().astimezone().isoformat(),
        "model_target": TARGET,
        "horizon_hours": HORIZON_HOURS,
        "feature_columns": feature_cols,
        "group_keys": ["dong_name", "month", "hour", "pattern_type"],
        "fallback_group_keys": ["dong_name", "hour", "pattern_type"],
        "target_dongs": sorted(train_df["dong_name"].dropna().unique().tolist()),
        "latest_by_dong": latest_by_dong,
        "patterns": patterns.to_dict(orient="records"),
        "fallback_patterns": fallback_patterns.to_dict(orient="records"),
    }


def main() -> None:
    args = parse_args()
    args.out_dir.mkdir(parents=True, exist_ok=True)

    df = pd.read_csv(args.input)
    df = add_calendar_features(df)
    df = add_supervised_features(df)

    supervised = df.dropna(
        subset=[
            TARGET,
            "traffic_volume_proxy",
            "traffic_lag_1h",
            "traffic_lag_24h",
            "traffic_lag_168h",
        ]
    ).copy()

    train_df = supervised[supervised["datetime_kst"] <= pd.Timestamp("2025-12-31 23:59:59")].copy()
    test_df = supervised[supervised["datetime_kst"] >= pd.Timestamp("2026-01-01 00:00:00")].copy()

    numeric_features = [
        "month",
        "hour",
        "weekday",
        "is_weekend",
        "traffic_volume_proxy",
        "source_spot_count",
        "source_rows",
        "traffic_lag_1h",
        "traffic_lag_24h",
        "traffic_lag_168h",
        "traffic_rolling_24h_mean",
        "traffic_rolling_168h_mean",
    ]
    categorical_features = ["dong_name", "pattern_type"]
    feature_cols = numeric_features + categorical_features

    if train_df.empty or test_df.empty:
        raise ValueError("Train or test split is empty. Check TOPIS traffic input period.")

    try:
        onehot = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
    except TypeError:
        onehot = OneHotEncoder(handle_unknown="ignore", sparse=False)

    preprocess = ColumnTransformer(
        transformers=[
            (
                "num",
                Pipeline(
                    steps=[
                        ("imputer", SimpleImputer(strategy="median")),
                        ("scaler", StandardScaler()),
                    ]
                ),
                numeric_features,
            ),
            (
                "cat",
                Pipeline(
                    steps=[
                        ("imputer", SimpleImputer(strategy="most_frequent")),
                        ("onehot", onehot),
                    ]
                ),
                categorical_features,
            ),
        ],
        remainder="drop",
    )
    pipeline = Pipeline(
        steps=[
            ("preprocess", preprocess),
            (
                "model",
                HistGradientBoostingRegressor(
                    max_iter=260,
                    learning_rate=0.055,
                    max_leaf_nodes=31,
                    random_state=42,
                ),
            ),
        ]
    )

    x_train = train_df[feature_cols]
    y_train = train_df[TARGET]
    x_test = test_df[feature_cols]
    y_test = test_df[TARGET]
    pipeline.fit(x_train, y_train)
    pred = pipeline.predict(x_test)

    baseline_persistence = test_df["traffic_volume_proxy"].to_numpy()
    baseline_24h = test_df["traffic_lag_24h"].fillna(test_df["traffic_volume_proxy"]).to_numpy()

    metrics = {
        "generated_at": datetime.now().astimezone().isoformat(),
        "training_dataset": str(args.input),
        "model": "HistGradientBoostingRegressor",
        "target": TARGET,
        "horizon_hours": HORIZON_HOURS,
        "feature_columns": feature_cols,
        "train": {
            "row_count": int(len(train_df)),
            "start": str(train_df["datetime_kst"].min()),
            "end": str(train_df["datetime_kst"].max()),
        },
        "test": {
            "row_count": int(len(test_df)),
            "start": str(test_df["datetime_kst"].min()),
            "end": str(test_df["datetime_kst"].max()),
        },
        "overall": metric_bundle(y_test, pred),
        "baselines": {
            "current_hour_persistence": metric_bundle(y_test, baseline_persistence),
            "same_hour_previous_day": metric_bundle(y_test, baseline_24h),
        },
        "note": (
            "Predicts 1-hour-ahead TOPIS dong-level traffic_volume_proxy. "
            "Live citydata speed/congestion is used later for current-state calibration and validation."
        ),
    }

    pred_df = test_df[["datetime_kst", "dong_name", "traffic_volume_proxy", TARGET]].copy()
    pred_df["prediction"] = pred
    pred_df["baseline_persistence"] = baseline_persistence
    pred_df["baseline_24h"] = baseline_24h
    pred_df["absolute_error"] = (pred_df[TARGET] - pred_df["prediction"]).abs()

    artifact = {
        "pipeline": pipeline,
        "numeric_features": numeric_features,
        "categorical_features": categorical_features,
        "feature_columns": feature_cols,
        "target": TARGET,
        "horizon_hours": HORIZON_HOURS,
        "trained_at": metrics["generated_at"],
    }
    joblib.dump(artifact, args.out_dir / "traffic_forecast_model.joblib")
    (args.out_dir / "traffic_forecast_metrics.json").write_text(
        json.dumps(metrics, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    pred_df.to_csv(args.out_dir / "traffic_forecast_predictions_2026_q1.csv", index=False)

    pattern_cache = build_pattern_cache(train_df, feature_cols)
    (args.out_dir / "traffic_pattern_cache.json").write_text(
        json.dumps(pattern_cache, ensure_ascii=False, separators=(",", ":")) + "\n",
        encoding="utf-8",
    )

    public_summary = {
        "generated_at": metrics["generated_at"],
        "target": TARGET,
        "model": metrics["model"],
        "horizon_hours": HORIZON_HOURS,
        "test": metrics["test"],
        "overall": metrics["overall"],
        "baselines": metrics["baselines"],
    }
    public_path = Path("public/traffic-forecast-summary.json")
    public_path.write_text(json.dumps(public_summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    print("Traffic forecast model trained")
    print(json.dumps(public_summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
