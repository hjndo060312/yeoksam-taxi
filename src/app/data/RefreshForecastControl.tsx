"use client";

import { useMemo, useState } from "react";

type RefreshState =
  | { status: "idle"; message: string; workflowUrl?: string }
  | { status: "loading"; message: string; workflowUrl?: string }
  | { status: "success"; message: string; workflowUrl?: string }
  | { status: "error"; message: string; workflowUrl?: string };

type RefreshResponse = {
  ok?: boolean;
  message?: string;
  workflow_url?: string;
};

function statusClass(status: RefreshState["status"]) {
  if (status === "success") return "border-emerald-300/40 bg-emerald-400/10 text-emerald-100";
  if (status === "error") return "border-rose-400/40 bg-rose-500/10 text-rose-100";
  if (status === "loading") return "border-cyan-300/35 bg-cyan-400/10 text-cyan-100";
  return "border-white/10 bg-black/15 text-slate-300";
}

export default function RefreshForecastControl() {
  const [token, setToken] = useState("");
  const [state, setState] = useState<RefreshState>({
    status: "idle",
    message: "관리자 토큰을 입력하면 최신 예측 배포를 요청할 수 있습니다.",
  });
  const canSubmit = useMemo(
    () => token.trim().length > 0 && state.status !== "loading",
    [state.status, token],
  );

  async function requestRefresh() {
    if (!canSubmit) return;

    setState({
      status: "loading",
      message: "GitHub Actions에 예측 갱신을 요청하는 중입니다.",
    });

    try {
      const response = await fetch("/api/admin/refresh-forecast", {
        method: "POST",
        headers: {
          "x-admin-refresh-token": token.trim(),
        },
      });
      const body = await response.json() as RefreshResponse;

      if (!response.ok || !body.ok) {
        setState({
          status: "error",
          message: body.message ?? `요청 실패 (${response.status})`,
          workflowUrl: body.workflow_url,
        });
        return;
      }

      setState({
        status: "success",
        message: "예측 갱신 workflow가 시작되었습니다. 배포까지 보통 몇 분 걸립니다.",
        workflowUrl: body.workflow_url,
      });
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "요청 중 오류가 발생했습니다.",
      });
    }
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04]">
      <div className="border-b border-white/10 px-5 py-4">
        <h2 className="text-lg font-semibold">예측 갱신 요청</h2>
        <p className="mt-1 text-sm text-slate-400">
          버튼 하나로 예측 생성, 배차 계산, Cloudflare 배포를 이어 실행합니다.
        </p>
      </div>
      <div className="space-y-4 px-5 py-5">
        <label className="block text-sm">
          <span className="text-slate-400">관리자 토큰</span>
          <input
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-cyan-300/45"
            placeholder="ADMIN_REFRESH_TOKEN"
          />
        </label>
        <button
          type="button"
          onClick={requestRefresh}
          disabled={!canSubmit}
          className="w-full rounded-lg border border-cyan-300/35 bg-cyan-400/15 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/[0.04] disabled:text-slate-500"
        >
          최신 예측 갱신
        </button>
        <div className={`rounded-lg border px-3 py-2 text-sm leading-6 ${statusClass(state.status)}`}>
          <p>{state.message}</p>
          {state.workflowUrl ? (
            <a
              href={state.workflowUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex font-semibold underline decoration-white/30 underline-offset-4"
            >
              Actions 실행 상태 보기
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
