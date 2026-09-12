import nodemailer from "nodemailer";
import { siteConfig } from "./site-config";

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendLeadEmail({
  subject,
  fields,
}: {
  subject: string;
  fields: { label: string; value: string }[];
}) {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error(
      "Thiếu cấu hình SMTP (SMTP_HOST/SMTP_USER/SMTP_PASS) trong biến môi trường.",
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  const html = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a">
      <h2 style="color:#0b4f9a">${subject}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${fields
          .map(
            (f) => `
          <tr>
            <td style="font-weight:bold;vertical-align:top">${f.label}:</td>
            <td>${f.value}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: `"Website ${siteConfig.shortName}" <${process.env.SMTP_USER}>`,
    to,
    replyTo: fields.find((f) => f.label === "Email")?.value || undefined,
    subject,
    html,
  });
}
