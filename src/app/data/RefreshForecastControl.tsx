"use client";

import { useMemo, useState } from "react";
import { RefreshCcw } from "lucide-react";

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
    <div className="rounded-2xl border border-white/10 bg-[#101624]">
      <div className="border-b border-white/10 bg-white/5 px-6 py-4">
        <div className="flex items-center gap-2">
          <RefreshCcw className="h-5 w-5 text-sky-400" />
          <h2 className="font-bold text-slate-100">예측 갱신 요청</h2>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-xs text-slate-400 leading-relaxed">
          관리자 토큰을 입력하면 GitHub Actions가 최신 공개 API 데이터를 다시 수집하고,
          1시간 뒤 수요 proxy와 도로 혼잡 요약 JSON을 새로 배포합니다.
        </p>
        <label className="block">
          <input
            suppressHydrationWarning
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20"
            placeholder="ADMIN_REFRESH_TOKEN"
          />
        </label>
        <button
          type="button"
          onClick={requestRefresh}
          disabled={!canSubmit}
          className="w-full rounded-lg bg-sky-600 py-2.5 text-sm font-black text-white transition hover:bg-sky-500 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          {state.status === "loading" ? "갱신 요청 중..." : "최신 예측 갱신"}
        </button>

        {state.status !== "idle" && (
          <div className={`rounded-lg border px-4 py-3 text-xs leading-5 ${
            state.status === "success" ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-400" :
            state.status === "error" ? "border-rose-500/20 bg-rose-500/5 text-rose-400" :
            "border-sky-500/20 bg-sky-500/5 text-sky-400"
          }`}>
            <p>{state.message}</p>
            {state.workflowUrl && (
              <a
                href={state.workflowUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex font-bold underline decoration-white/20 underline-offset-4 hover:decoration-white/50"
              >
                GitHub Actions 실행 상태 보기
              </a>
            )}
          </div>
        )}
      </div>
    </div>

  );
}
