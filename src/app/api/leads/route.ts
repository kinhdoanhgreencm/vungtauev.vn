import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/mailer";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Dữ liệu không hợp lệ." }, { status: 400 });
  }

  const type = typeof body.type === "string" ? body.type : "register";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Vui lòng nhập đầy đủ họ tên và số điện thoại." },
      { status: 400 },
    );
  }

  const fields = [
    { label: "Họ và tên", value: name },
    { label: "Số điện thoại", value: phone },
  ];

  let subject = "Đăng ký tư vấn từ website";

  if (type === "contact") {
    subject = "Liên hệ mới từ website";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (email) fields.push({ label: "Email", value: email });
    if (message) fields.push({ label: "Nội dung", value: message });
  } else {
    const vehicle = typeof body.vehicle === "string" ? body.vehicle.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "";
    if (vehicle) fields.push({ label: "Loại xe quan tâm", value: vehicle });
    if (source) fields.push({ label: "Nguồn đăng ký", value: source });
  }

  try {
    await sendLeadEmail({ subject, fields });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Gửi email thất bại:", error);
    return NextResponse.json(
      { error: "Không thể gửi email lúc này. Vui lòng thử lại sau." },
      { status: 500 },
    );
  }
}
