/**
 * SMTP thank-you email after the year-end landing form is submitted.
 */
import { escapeHtml } from "./serializeAnswers.js";

/**
 * @typedef {{
 *   host: string,
 *   port: number,
 *   user: string,
 *   pass: string,
 *   from: string,
 *   fromName: string
 * }} SmtpConfig
 */

/**
 * Loads SMTP settings from environment variables.
 * @returns {SmtpConfig | null}
 */
export function getSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const portRaw = process.env.SMTP_PORT?.trim() ?? "587";
  const port = Number.isFinite(parseInt(portRaw, 10))
    ? parseInt(portRaw, 10)
    : 587;
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const from = process.env.SMTP_FROM?.trim();
  const fromName = process.env.SMTP_FROM_NAME?.trim() ?? "Holdco";

  if (!host || !user || !pass || !from) return null;

  return { host, port, user, pass, from, fromName };
}

/**
 * @returns {string}
 */
function getBookingUrl() {
  return (
    process.env.VITE_BOOKING_URL?.trim() ||
    process.env.BOOKING_URL?.trim() ||
    "https://holdco.co"
  );
}

/**
 * @param {{
 *   to: string,
 *   name: string,
 *   firm: string,
 *   checklistOnly: boolean,
 *   qualified: boolean,
 *   answers: { question: string, answers: string[] }[]
 * }} payload
 * @returns {string}
 */
function buildThankYouHtml(payload) {
  const name = payload.name.trim();
  const firm = payload.firm.trim();
  const bookingUrl = getBookingUrl();
  const ff = "'Plus Jakarta Sans', Arial, Helvetica, sans-serif";

  const greeting =
    name.length > 0
      ? `Thanks, ${escapeHtml(name)}`
      : "Thanks for getting in touch";

  const bodyCopy = payload.checklistOnly
    ? "We've received your request for the year-end checklist. We'll send it shortly — no call, no follow-up."
    : payload.qualified
      ? "We've received your answers. Use the link below to pick a 15-minute slot that works for you."
      : "We've received your details. If a short call would still be useful, you can book a time below — otherwise we'll leave it there.";

  const answerRows = payload.answers
    .map(
      (a, i) => `
      <tr>
        <td style="padding:0 0 14px 0;">
          <p style="margin:0;font-family:${ff};font-size:13px;font-weight:700;color:#0E1B2C;line-height:1.6;">
            ${String(i + 1)}. ${escapeHtml(a.question)}
          </p>
          <p style="margin:4px 0 0;font-family:${ff};font-size:13px;color:#64748B;line-height:1.6;">
            ${a.answers.map(escapeHtml).join(", ")}
          </p>
        </td>
      </tr>`,
    )
    .join("");

  const ctaBlock = payload.checklistOnly
    ? ""
    : `
          <tr>
            <td style="padding:28px 32px;text-align:center;background:#FFFFFF;border-radius:0 0 16px 16px;">
              <p style="margin:0 0 10px;font-family:${ff};font-size:20px;font-weight:800;color:#0E1B2C;">
                Book your 15 minutes
              </p>
              <p style="margin:0 0 24px;font-family:${ff};font-size:14px;color:#64748B;line-height:1.7;">
                A stated agenda, fifteen minutes, and the year-end checklist either way.
              </p>
              <a href="${escapeHtml(bookingUrl)}" target="_blank" rel="noopener noreferrer"
                 style="display:inline-block;padding:14px 36px;font-family:${ff};font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none;background:#0B4881;border-radius:3px;">
                Pick a time
              </a>
            </td>
          </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Thank you — AXIOM</title>
</head>
<body style="margin:0;padding:0;background:#F3F6F9;font-family:${ff};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F6F9;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">
          <tr>
            <td style="background:#0B4881;border-radius:16px 16px 0 0;padding:36px 32px;text-align:left;">
              <p style="margin:0 0 8px;font-family:${ff};font-size:11px;color:rgba(255,255,255,0.65);letter-spacing:0.14em;text-transform:uppercase;font-weight:700;">
                AXIOM · Year-end
              </p>
              <h1 style="margin:0;font-family:${ff};font-size:28px;font-weight:800;color:#FFFFFF;line-height:1.2;">
                ${greeting}
              </h1>
              ${
                firm.length > 0
                  ? `<p style="margin:8px 0 0;font-family:${ff};font-size:14px;color:rgba(255,255,255,0.7);">${escapeHtml(firm)}</p>`
                  : ""
              }
            </td>
          </tr>
          <tr>
            <td style="background:#FFFFFF;padding:28px 32px;">
              <p style="margin:0 0 20px;font-family:${ff};font-size:15px;color:#3D4B5C;line-height:1.7;">
                ${bodyCopy}
              </p>
            </td>
          </tr>
          ${ctaBlock}
          <tr>
            <td style="padding:24px 32px;text-align:center;">
              <p style="margin:0;font-family:${ff};font-size:12px;color:#9AABBD;line-height:1.6;">
                AXIOM · a HoldCo Corp product · Beirut, Lebanon
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Sends the thank-you email via SMTP. Never throws.
 * @param {{
 *   to: string,
 *   name: string,
 *   firm: string,
 *   checklistOnly: boolean,
 *   qualified: boolean,
 *   answers: { question: string, answers: string[] }[]
 * }} payload
 * @returns {Promise<boolean>}
 */
export async function sendThankYouEmail(payload) {
  const smtp = getSmtpConfig();
  if (smtp === null) {
    console.log("[email] SMTP not configured — skipping thank-you email");
    return false;
  }

  const subject = payload.checklistOnly
    ? "Your AXIOM year-end checklist request"
    : "Thanks — your AXIOM year-end request";

  try {
    const { default: nodemailer } = await import("nodemailer");
    const transport = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: { user: smtp.user, pass: smtp.pass },
    });

    await transport.sendMail({
      from: `"${smtp.fromName}" <${smtp.from}>`,
      to: payload.to,
      subject,
      html: buildThankYouHtml(payload),
    });

    console.log(`[email] Thank-you sent to ${payload.to}`);
    return true;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown SMTP error";
    console.error(`[email] Failed to send to ${payload.to}:`, message);
    return false;
  }
}
