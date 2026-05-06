import { execSync } from "node:child_process";
import MapSimulatorClient from "@/components/MapSimulatorClient";
import type { BuildVersionInfo } from "@/components/map-simulator/build-version";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "강남 교통 운영 | 역삼권 수요 proxy",
};

function readGitValue(command: string) {
  try {
    return execSync(command, {
      cwd: process.cwd(),
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();
  } catch {
    return "";
  }
}

function formatBuildTimeKst(date: Date) {
  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const partMap = new globalThis.Map(parts.map((part) => [part.type, part.value]));

  return `${partMap.get("year")}.${partMap.get("month")}.${partMap.get("day")} ${partMap.get("hour")}:${partMap.get("minute")} KST`;
}

function resolveEnvironmentLabel(branch: string) {
  const configuredEnvironment =
    process.env.NEXT_PUBLIC_APP_ENV?.trim() || process.env.APP_ENV?.trim();

  if (configuredEnvironment) {
    return configuredEnvironment;
  }

  if (process.env.NODE_ENV === "development") {
    return "로컬 개발";
  }

  if (process.env.VERCEL_ENV === "preview") {
    return "프리뷰";
  }

  if (process.env.VERCEL_ENV === "production") {
    return "운영";
  }

  if (process.env.CF_PAGES_BRANCH) {
    return process.env.CF_PAGES_BRANCH === "main" ? "운영" : "프리뷰";
  }

  if (process.env.NODE_ENV === "production") {
    return branch === "main" ? "로컬 빌드(main)" : "로컬 빌드(branch)";
  }

  return "로컬";
}

function resolveBuildVersion(): BuildVersionInfo {
  const rawBranch =
    readGitValue("git rev-parse --abbrev-ref HEAD") ||
    process.env.GITHUB_HEAD_REF ||
    process.env.GITHUB_REF_NAME ||
    process.env.CF_PAGES_BRANCH ||
    process.env.BRANCH ||
    "main";
  const branch = rawBranch === "HEAD" ? "main" : rawBranch;
  const commit = readGitValue("git rev-parse --short HEAD") || null;

  return {
    environmentLabel: resolveEnvironmentLabel(branch),
    branch,
    commit,
    builtAtLabel: formatBuildTimeKst(new Date()),
  };
}

export default function Home() {
  const buildVersion = resolveBuildVersion();

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="pointer-events-none absolute top-4 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-4 md:flex">
        <div className="pointer-events-auto flex items-center gap-5 rounded-lg border border-slate-200 bg-white/94 px-4 py-2 text-slate-900 shadow-lg shadow-black/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <div className="absolute -inset-1 animate-ping rounded-full bg-emerald-500/20"></div>
            </div>
            <span className="text-sm font-black text-slate-950">강남 교통 운영</span>
          </div>

          <div className="h-4 w-px bg-slate-200"></div>

          <nav className="flex items-center gap-1">
            <Link
              href="/presentation"
              className="rounded-md px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              발표
            </Link>
            <Link
              href="/data"
              className="rounded-md px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              데이터
            </Link>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-full">
        <MapSimulatorClient buildVersion={buildVersion} />

        <div className="pointer-events-none absolute bottom-8 left-8 z-10 hidden md:block lg:hidden">
          <div className="rounded-lg border border-slate-200 border-l-4 border-l-sky-500 bg-white/94 px-4 py-3 text-slate-900 shadow-lg shadow-black/10 backdrop-blur-xl">
            <div className="mb-1 text-[10px] font-black text-slate-500">관제구역</div>
            <div className="text-lg font-black text-slate-950">역삼동 주변 9개 동</div>
            <div className="mt-1 text-[10px] text-slate-500">공개데이터 기반 수요 proxy · 실시간 스냅샷 반영</div>
          </div>
        </div>
      </div>
    </main>
  );
}
