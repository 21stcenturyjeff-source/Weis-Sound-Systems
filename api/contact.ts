import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!resend) {
      console.error("RESEND_API_KEY not configured");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const timestamp = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/New_York",
    });

    await resend.emails.send({
      from: "Weis Audio Systems <contact@weisaudio.systems>",
      to: "21stcentury.jeff@gmail.com",
      replyTo: email,
      subject: `Weis Audio Contact: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; color: #00ffff; }
    .section { margin: 0; padding: 20px; background: #f3f4f6; }
    .field { margin: 10px 0; }
    .label { font-weight: bold; color: #555; }
    .value { color: #000; }
    .message-box { margin: 20px 0; padding: 15px; background: white; border-left: 4px solid #ff00ff; border-radius: 4px; }
    .footer { text-align: center; padding: 15px; background: #1a1a2e; color: #999; font-size: 12px; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Form Submission</h1>
    </div>
    <div class="section">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${email}">${email}</a></span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value">${phone ? `<a href="tel:${phone.replace(/\D/g, '')}">${phone}</a>` : "Not provided"}</span>
      </div>
      <div class="field">
        <span class="label">Subject:</span>
        <span class="value">${subject}</span>
      </div>
      <div class="message-box">
        <strong>Message:</strong>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    </div>
    <div class="footer">
      <p>Submitted on ${timestamp}</p>
      <p>Weis Audio Systems Contact Form</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
