"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-sm">
        <p className="text-lg font-semibold text-dark">
          Cảm ơn bạn đã liên hệ!
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Đội ngũ HTX Vũng Tàu EV sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        setError("");

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
          const res = await fetch("/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type: "contact",
              name: data.get("name"),
              phone: data.get("phone"),
              email: data.get("email"),
              message: data.get("message"),
            }),
          });

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.error || "Gửi liên hệ thất bại.");
          }

          trackEvent("generate_lead", { form: "contact" });
          setStatus("done");
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Đã xảy ra lỗi, vui lòng thử lại.",
          );
          setStatus("error");
        }
      }}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-dark">Họ và tên</label>
          <input
            required
            name="name"
            placeholder="Nguyễn Văn A"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-dark">
            Số điện thoại
          </label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="09xx xxx xxx"
            className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-dark">Email</label>
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-dark">Nội dung</label>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Bạn cần hỗ trợ về vấn đề gì?"
          className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="gradient-primary mt-1 rounded-lg px-5 py-3 text-sm font-semibold text-white min-h-11 disabled:opacity-60"
      >
        {status === "loading" ? "Đang gửi..." : "Gửi Liên Hệ"}
      </button>
    </form>
  );
}
