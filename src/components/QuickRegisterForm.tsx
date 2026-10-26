"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

const vehicleOptions = ["VF3", "VF5", "Herio Green", "Limo Green"];

export default function QuickRegisterForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
        <p className="font-semibold text-dark">
          Cảm ơn bạn đã đăng ký!
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Đội ngũ HTX Vũng Tàu EV sẽ liên hệ lại trong thời gian sớm nhất.
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
              type: "register",
              name: data.get("name"),
              phone: data.get("phone"),
              vehicle: data.get("vehicle"),
              source: pathname,
            }),
          });

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.error || "Gửi đăng ký thất bại.");
          }

          trackEvent("generate_lead", {
            form: "register",
            vehicle: data.get("vehicle"),
            source: pathname,
          });
          setStatus("done");
        } catch (err) {
          setError(
            err instanceof Error ? err.message : "Đã xảy ra lỗi, vui lòng thử lại.",
          );
          setStatus("error");
        }
      }}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <p className="text-sm font-semibold text-dark">
        Đăng ký tư vấn miễn phí
      </p>
      <input
        required
        name="name"
        placeholder="Họ và tên"
        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
      />
      <input
        required
        name="phone"
        type="tel"
        placeholder="Số điện thoại"
        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] placeholder:text-slate-400 outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
      />
      <select
        name="vehicle"
        defaultValue=""
        className="rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base text-ink sm:text-[15px] outline-none focus:border-ocean focus:ring-3 focus:ring-sky/25"
      >
        <option value="" disabled>
          Loại xe quan tâm
        </option>
        {vehicleOptions.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="gradient-primary mt-1 rounded-lg px-5 py-3 text-sm font-semibold text-white min-h-11 disabled:opacity-60"
      >
        {status === "loading" ? "Đang gửi..." : "Gửi Đăng Ký"}
      </button>
    </form>
  );
}
