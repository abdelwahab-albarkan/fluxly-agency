import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_EMAIL || "abdelwahabalbarkan2018@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM || "Fluxly Agency <onboarding@resend.dev>";

export async function GET() {
  return NextResponse.json({ status: "ok", message: "Booking API operational." });
}

interface BookingPayload {
  name?: string;
  email?: string;
  date?: string;
  time?: string;
}

const esc = (s = "") =>
  s.replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" })[c] || c);

export async function POST(request: Request) {
  let data: BookingPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (!data.name?.trim() || !data.email?.trim() || !data.date || !data.time) {
    return NextResponse.json({ ok: false, error: "Name, email, date, and time are required." }, { status: 422 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const html = `
    <h2>New call booking</h2>
    <p><strong>Name:</strong> ${esc(data.name)}</p>
    <p><strong>Email:</strong> ${esc(data.email)}</p>
    <p><strong>Requested date:</strong> ${esc(data.date)}</p>
    <p><strong>Requested time:</strong> ${esc(data.time)}</p>
  `;

  if (key) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: `New call booking — ${data.name} (${data.date} ${data.time})`,
          html,
        }),
      });
      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json({ ok: false, error: "Email service error." }, { status: 502 });
      }
    } catch (e) {
      console.error("Booking send failed:", e);
      return NextResponse.json({ ok: false, error: "Failed to send." }, { status: 500 });
    }
  } else {
    console.warn("[booking] RESEND_API_KEY not set — booking received but no email sent:", data.email);
  }

  return NextResponse.json({ ok: true });
}
