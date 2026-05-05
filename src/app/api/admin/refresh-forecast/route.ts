type DispatchResponse = {
  ok: boolean;
  message: string;
  workflow_url?: string;
  triggered_at?: string;
};

function jsonResponse(body: DispatchResponse, status: number) {
  return Response.json(body, { status });
}

function trimEnv(value: string | undefined) {
  return value?.trim() || "";
}

export async function POST(request: Request) {
  const adminToken = trimEnv(process.env.ADMIN_REFRESH_TOKEN);
  const githubToken = trimEnv(process.env.GITHUB_ACTIONS_TOKEN);
  const repository = trimEnv(process.env.GITHUB_REPOSITORY) || "kimcanal/yeoksam-taxi";
  const workflow = trimEnv(process.env.GITHUB_FORECAST_WORKFLOW) || "forecast-cron.yml";
  const ref = trimEnv(process.env.GITHUB_FORECAST_REF) || "main";

  if (!adminToken) {
    return jsonResponse(
      {
        ok: false,
        message: "ADMIN_REFRESH_TOKEN is not configured.",
      },
      503,
    );
  }

  const providedToken =
    request.headers.get("x-admin-refresh-token") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";

  if (providedToken !== adminToken) {
    return jsonResponse(
      {
        ok: false,
        message: "Invalid refresh token.",
      },
      401,
    );
  }

  if (!githubToken) {
    return jsonResponse(
      {
        ok: false,
        message: "GITHUB_ACTIONS_TOKEN is not configured.",
      },
      503,
    );
  }

  const dispatchUrl = `https://api.github.com/repos/${repository}/actions/workflows/${workflow}/dispatches`;
  const workflowUrl = `https://github.com/${repository}/actions/workflows/${workflow}`;
  const response = await fetch(dispatchUrl, {
    method: "POST",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${githubToken}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    body: JSON.stringify({ ref }),
  });

  if (!response.ok) {
    return jsonResponse(
      {
        ok: false,
        message: `GitHub workflow dispatch failed with ${response.status}.`,
        workflow_url: workflowUrl,
      },
      502,
    );
  }

  return jsonResponse(
    {
      ok: true,
      message: "Forecast refresh workflow requested.",
      workflow_url: workflowUrl,
      triggered_at: new Date().toISOString(),
    },
    202,
  );
}
