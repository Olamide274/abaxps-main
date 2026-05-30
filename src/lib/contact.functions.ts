import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  organisation: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(5, "Message is too short").max(4000),
});

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const subject = `New enquiry from ${data.name}${data.organisation ? ` (${data.organisation})` : ""}`;
    const transporter = createTransport();

    if (!transporter) {
      console.warn("[ContactForm] SMTP env vars not set. Message:", { ...data });
      return { ok: true as const };
    }

    try {
      await transporter.sendMail({
        from: `"Abax Website" <${process.env.SMTP_USER}>`,
        to: "info@abaxps.com",
        replyTo: `"${data.name}" <${data.email}>`,
        subject,
        text: [
          `Name: ${data.name}`,
          `Email: ${data.email}`,
          `Organisation: ${data.organisation || "—"}`,
          "",
          "Message:",
          data.message,
        ].join("\n"),
        html: `
          <table style="font-family:sans-serif;font-size:15px;color:#1a1a1a;width:100%;max-width:600px;">
            <tr><td style="padding:24px 0 8px;border-bottom:2px solid #1B3FA0;">
              <strong style="font-size:18px;color:#1B3FA0;">New website enquiry</strong>
            </td></tr>
            <tr><td style="padding:16px 0 4px;"><strong>Name:</strong> ${data.name}</td></tr>
            <tr><td style="padding:4px 0;"><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:4px 0 16px;"><strong>Organisation:</strong> ${data.organisation || "—"}</td></tr>
            <tr><td style="padding:16px 0;border-top:1px solid #C8D4F5;white-space:pre-wrap;">${data.message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td></tr>
            <tr><td style="padding:16px 0 0;font-size:12px;color:#888;">Sent from the Abax Professional Services website contact form.</td></tr>
          </table>
        `,
      });
      return { ok: true as const };
    } catch (err) {
      console.error("[ContactForm] SMTP send error:", err);
      return { ok: false as const, error: "We couldn't send your message right now. Please try again shortly." };
    }
  });
