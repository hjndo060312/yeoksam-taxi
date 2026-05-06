#!/usr/bin/env python3
"""Collect and process Seoul living population ZIP files (OA-14991).

Python-native replacement for `scripts/collect-seoul-living-population.mjs`.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen


DATASET_VIEW_URL = "https://data.seoul.go.kr/dataList/OA-14991/S/1/datasetView.do?tab=A"
DOWNLOAD_URL = "https://datafile.seoul.go.kr/bigfile/iot/inf/nio_download.do?&useCache=false"
INF_ID = "OA-14991"
INF_SEQ = "3"
FILE_PATTERN = re.compile(
    r'title="(LOCAL_PEOPLE_DONG_(\d{6})\.zip)"\s+onclick="javascript:downloadFile\(\'([^\']+)\'\);?"'
)


@dataclass(frozen=True)
class FileMeta:
    filename: str
    seq: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "range",
        nargs="?",
        default="2023-01:2025-12",
        help="YYYY-MM:YYYY-MM (default: 2023-01:2025-12)",
    )
    parser.add_argument("--keep-raw", action="store_true", help="Keep downloaded ZIPs")
    parser.add_argument(
        "--raw-dir",
        default="data/raw/living_population",
        help="Raw ZIP cache directory",
    )
    parser.add_argument(
        "--out-dir",
        default="data/processed/living_population",
        help="Output directory for processed CSVs/meta/status",
    )
    return parser.parse_args()


def periods_between(start: str, end: str) -> list[str]:
    if not re.fullmatch(r"\d{4}-\d{2}", start) or not re.fullmatch(r"\d{4}-\d{2}", end):
        raise ValueError("Range must be YYYY-MM:YYYY-MM")
    if start > end:
        raise ValueError("Start period must be <= end period")
    start_year = int(start.split("-")[0])
    end_year = int(end.split("-")[0])
    periods: list[str] = []
    for year in range(start_year, end_year + 1):
        for month in range(1, 13):
            period = f"{year}-{month:02d}"
            if start <= period <= end:
                periods.append(period)
    return periods


def http_get_text(url: str) -> str:
    req = Request(url, headers={"User-Agent": "yeoksam-taxi/collector"})
    with urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", errors="replace")


def fetch_file_index() -> dict[str, FileMeta]:
    html = http_get_text(DATASET_VIEW_URL)
    index: dict[str, FileMeta] = {}
    for match in FILE_PATTERN.finditer(html):
        filename, yyyymm, seq = match.group(1), match.group(2), match.group(3)
        period = f"{yyyymm[:4]}-{yyyymm[4:6]}"
        index[period] = FileMeta(filename=filename, seq=seq)
    return index


def download_zip(raw_dir: Path, meta: FileMeta) -> Path:
    raw_dir.mkdir(parents=True, exist_ok=True)
    zip_path = raw_dir / meta.filename
    if zip_path.exists() and zip_path.stat().st_size > 1024:
        print(f"cached: {zip_path.as_posix()}")
        return zip_path

    body = urlencode(
        {
            "infId": INF_ID,
            "seq": meta.seq,
            "seqNo": meta.seq,
            "infSeq": INF_SEQ,
        }
    ).encode("utf-8")
    req = Request(
        DOWNLOAD_URL,
        method="POST",
        data=body,
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "Referer": DATASET_VIEW_URL,
            "User-Agent": "yeoksam-taxi/collector",
        },
    )

    start = time.time()
    with urlopen(req, timeout=300) as resp, zip_path.open("wb") as handle:
        while True:
            chunk = resp.read(1024 * 1024)
            if not chunk:
                break
            handle.write(chunk)

    size_mb = zip_path.stat().st_size / 1024 / 1024
    elapsed = time.time() - start
    with zip_path.open("rb") as handle:
        magic = handle.read(2)
    if magic != b"PK":
        raise RuntimeError(f"download did not return a ZIP (magic={magic!r})")
    print(f"downloaded: {zip_path.name} ({size_mb:.1f} MB) in {elapsed:.1f}s")
    return zip_path


def process_zip(period: str, zip_path: Path, out_dir: Path) -> None:
    processor = Path("scripts/process_seoul_living_population_zip.py")
    cmd = [
        sys.executable,
        str(processor),
        "--period",
        period,
        "--zip",
        str(zip_path),
        "--out-dir",
        str(out_dir),
    ]
    subprocess.run(cmd, check=True)


def main() -> None:
    args = parse_args()
    start_period, end_period = args.range.split(":") if ":" in args.range else (args.range, args.range)
    raw_dir = Path(args.raw_dir)
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    index = fetch_file_index()
    periods = periods_between(start_period, end_period)
    status = {
        "source": "Seoul Open Data Plaza OA-14991 (Seoul living population)",
        "source_url": DATASET_VIEW_URL,
        "download_url": DOWNLOAD_URL,
        "accessed_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "range": {"start": start_period, "end": end_period},
        "keep_raw": bool(args.keep_raw),
        "months": [],
    }

    for period in periods:
        meta = index.get(period)
        if not meta:
            print(f"{period}: not listed on dataset page")
            status["months"].append({"period": period, "ok": False, "error": "not listed"})
            continue

        try:
            zip_path = download_zip(raw_dir, meta)
            process_zip(period, zip_path, out_dir)
            if not args.keep_raw:
                zip_path.unlink(missing_ok=True)
            status["months"].append(
                {"period": period, "ok": True, "filename": meta.filename, "raw_kept": bool(args.keep_raw)}
            )
        except Exception as exc:  # noqa: BLE001
            status["months"].append(
                {"period": period, "ok": False, "filename": meta.filename, "error": str(exc)}
            )
            print(f"{period}: {exc}")

    status_path = out_dir / f"seoul_living_population_collection_{start_period}_{end_period}.status.json"
    status_path.write_text(json.dumps(status, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {status_path.as_posix()}")


if __name__ == "__main__":
    os.environ.pop("HTTP_PROXY", None)
    os.environ.pop("HTTPS_PROXY", None)
    main()
