"use client";

import { useEffect, useRef } from "react";

// Hero "Studio sáng": bố cục poster xe (ba ô cận cảnh phía trên, xe lớn góc 3/4 ở giữa, tên xe giãn chữ bên dưới)
// trên nền studio sáng, nét xiên và màu của VEV. Ảnh tạo bằng Higgsfield từ ảnh thật Limo Green
// (scripts/build-hero-assets.py). Xe lướt vào từ phải rồi đỗ; rê chuột thì cảnh nghiêng theo chiều sâu.
const DETAILS = [
  { src: "/hero/detail-den-truoc.webp", label: "Dải đèn chữ V" },
  { src: "/hero/detail-mam.webp", label: "Mâm hợp kim" },
  { src: "/hero/detail-den-hau.webp", label: "Đèn hậu LED" },
];

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);

  // Nghiêng 3D theo vị trí chuột (bỏ qua khi người dùng tắt chuyển động)
  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--nx", Math.max(-1, Math.min(1, nx)).toFixed(3));
        el.style.setProperty("--ny", Math.max(-1, Math.min(1, ny)).toFixed(3));
      });
    };
    const reset = () => {
      el.style.setProperty("--nx", "0");
      el.style.setProperty("--ny", "0");
    };
    const host = el.closest("section") ?? el;
    host.addEventListener("pointermove", onMove as EventListener);
    host.addEventListener("pointerleave", reset);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", onMove as EventListener);
      host.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section className="hero-studio" aria-labelledby="hero-title">
      <div className="hs-bg" aria-hidden="true">
        <i className="hs-beam" />
        <i className="hs-rail" />
      </div>

      <div className="wrap hs-inner">
        <h1 id="hero-title" className="hs-brand">
          Hợp tác xã vận tải Vũng Tàu EV
        </h1>
        <p className="hs-tag">Đồng hành cùng tài xế xanh</p>

        <div className="hs-stage" ref={stage}>
          <ul className="hs-panels">
            {DETAILS.map((d, i) => (
              <li key={d.src} style={{ "--i": i } as React.CSSProperties}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.src} alt="" width={900} height={1117} />
                <span>{d.label}</span>
              </li>
            ))}
          </ul>

          <div className="hs-car">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero/limo-studio.webp"
              alt="VinFast Limo Green màu Jet Black trong studio"
              width={2000}
              height={893}
              fetchPriority="high"
            />
            <span className="hs-gloss" aria-hidden="true" />
          </div>
        </div>

        <p className="hs-model">
          <small>VinFast</small>
          Limo Green
        </p>
        <span className="hs-rule" aria-hidden="true" />
        <p className="hs-desc">
          MPV điện 7 chỗ cho tài xế dịch vụ. Mua xe biển vàng, hỗ trợ trả góp và làm đủ hồ sơ phù hiệu cùng HTX
          Vũng Tàu EV.
        </p>
      </div>
    </section>
  );
}
