import { execSync } from "node:child_process";
import MapSimulatorClient from "@/components/MapSimulatorClient";
import type { BuildVersionInfo } from "@/components/map-simulator/build-version";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A-Eye 역삼 택시 디지털 트윈",
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
  const partMap = new Map(parts.map((part) => [part.type, part.value]));

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
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 pointer-events-none">
        <div className="glass-panel px-6 py-2 rounded-full flex items-center gap-6 pointer-events-auto bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></div>
              <div className="absolute -inset-1 animate-ping rounded-full bg-cyan-500/20"></div>
            </div>
            <span className="text-xs font-black tracking-widest text-slate-100 uppercase">A-EYE LIVE</span>
          </div>

          <div className="h-4 w-px bg-white/10"></div>

          <nav className="flex items-center gap-1">
            <Link
              href="/presentation"
              className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 transition hover:text-slate-100 hover:bg-white/5"
            >
              PRESENTATION
            </Link>
            <Link
              href="/data"
              className="px-4 py-1.5 rounded-full text-xs font-bold text-slate-400 transition hover:text-slate-100 hover:bg-white/5"
            >
              DATA CENTER
            </Link>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-full">
        <MapSimulatorClient buildVersion={buildVersion} />

        <div className="absolute bottom-8 left-8 z-10 pointer-events-none">
          <div className="glass-panel px-4 py-3 rounded-xl border-l-4 border-l-cyan-500 bg-slate-900/50 backdrop-blur-xl border border-white/10">
            <div className="text-[10px] font-black text-cyan-500 uppercase tracking-wider mb-1">Area Focus</div>
            <div className="text-lg font-black text-slate-100">Gangnam-gu Yeoksam-dong</div>
            <div className="text-[10px] text-slate-500 mt-1">Digital Twin v1.0.4 · Real-time Sync Active</div>
          </div>
        </div>
      </div>
    </main>
  );
}
