/**
 * Vite config with a local /api/lead middleware mirroring the Vercel route.
 */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { handleLeadRequest } from "./server/erpnextLead.js";

const SERVER_ENV_KEYS = [
  "ERPNEXT_BASE_URL",
  "ERPNEXT_API_KEY",
  "ERPNEXT_API_SECRET",
  "ERPNEXT_LEAD_SOURCE",
  "ERPNEXT_COMPANY",
  "ERPNEXT_OPPORTUNITY_TYPE",
  "FRAPPE_URL",
  "FRAPPE_API_KEY",
  "FRAPPE_API_SECRET",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
  "SMTP_FROM_NAME",
  "VITE_BOOKING_URL",
];

/**
 * @param {Record<string, string>} env
 */
function applyServerEnv(env) {
  for (const key of SERVER_ENV_KEYS) {
    const value = env[key];
    if (typeof value === "string" && value.trim().length > 0) {
      process.env[key] = value.trim();
    }
  }
}

/**
 * @param {import("node:http").IncomingMessage} req
 * @returns {Promise<string>}
 */
function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    /** @type {Buffer[]} */
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });
    req.on("error", reject);
  });
}

/** Local dev middleware that mirrors the Vercel /api/lead serverless route. */
function leadApiDevPlugin() {
  return {
    name: "lead-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const urlPath = req.url?.split("?")[0];
        if (urlPath !== "/api/lead") {
          next();
          return;
        }

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "method" }));
          return;
        }

        try {
          const rawBody = await readRequestBody(req);
          const parsedBody =
            rawBody.length > 0 ? JSON.parse(rawBody) : {};
          const result = await handleLeadRequest(parsedBody);
          res.statusCode = result.status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(result.body));
        } catch (err) {
          console.error("[api/lead] Dev middleware error", err);
          res.statusCode = 502;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "upstream" }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  applyServerEnv(env);

  return {
    plugins: [react(), leadApiDevPlugin()],
  };
});
