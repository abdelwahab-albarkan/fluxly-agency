import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_EMAIL || "abdelwahabalbarkan2018@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM || "Fluxly Agency <onboarding@resend.dev>";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Contact API operational." });
}

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
}

const esc = (s = "") =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] || c);

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  // Basic validation
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return NextResponse.json({ ok: false, error: "Name, email, and message are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${esc(data.name)}</p>
    <p><strong>Email:</strong> ${esc(data.email)}</p>
    <p><strong>Company:</strong> ${esc(data.company) || "—"}</p>
    <p><strong>Phone:</strong> ${esc(data.phone) || "—"}</p>
    <p><strong>Service:</strong> ${esc(data.service) || "—"}</p>
    <p><strong>Budget:</strong> ${esc(data.budget) || "—"}</p>
    <p><strong>Message:</strong><br>${esc(data.message).replace(/\n/g, "<br>")}</p>
  `;

  // Send via Resend REST API (no SDK needed). Requires RESEND_API_KEY env var.
  if (key) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: `New inquiry from ${data.name}`,
          html,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        console.error("Resend error:", err);
        return NextResponse.json({ ok: false, error: "Email service error." }, { status: 502 });
      }
    } catch (e) {
      console.error("Contact send failed:", e);
      return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 500 });
    }
  } else {
    // No key configured yet — accept the lead but warn in logs so nothing breaks.
    console.warn("[contact] RESEND_API_KEY not set — submission received but no email sent:", data.email);
  }

  return NextResponse.json({ ok: true });
}
