"use client";

import { useEffect, useMemo, useState } from "react";

function formatRelative(msDelta: number) {
  const absMs = Math.abs(msDelta);
  const minute = 60_000;
  const hour = 3_600_000;
  const day = 86_400_000;

  if (absMs < 30_000) return "방금";

  const suffix = msDelta >= 0 ? "전" : "후";

  if (absMs < hour) {
    const minutes = Math.round(absMs / minute);
    return `${minutes}분 ${suffix}`;
  }

  if (absMs < day) {
    const hours = Math.floor(absMs / hour);
    const minutes = Math.round((absMs - hours * hour) / minute);
    return minutes > 0 ? `${hours}시간 ${minutes}분 ${suffix}` : `${hours}시간 ${suffix}`;
  }

  const days = Math.round(absMs / day);
  return `${days}일 ${suffix}`;
}

export default function RelativeTime({
  iso,
  className,
}: {
  iso?: string | null;
  className?: string;
}) {
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNowMs(Date.now()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const label = useMemo(() => {
    if (!iso) return "-";
    const parsed = new Date(iso).getTime();
    if (!Number.isFinite(parsed)) return "-";
    return formatRelative(nowMs - parsed);
  }, [iso, nowMs]);

  return <span className={className}>{label}</span>;
}
