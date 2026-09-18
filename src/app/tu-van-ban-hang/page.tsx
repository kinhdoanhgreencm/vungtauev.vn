import type { Metadata } from "next";
import Link from "next/link";
import LandingHeader from "@/components/LandingHeader";
import InfoSection from "@/components/InfoSection";
import QuickRegisterForm from "@/components/QuickRegisterForm";
import { siteConfig, socialLinks } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tư Vấn Mua Xe Điện VinFast Trả Góp Tại Vũng Tàu",
  description:
    "Đăng ký nhận tư vấn miễn phí mua xe điện VinFast VF3, VF5, Herio Green, Limo Green tại Vũng Tàu. Hỗ trợ trả góp đến 80-85%, đăng ký biển vàng, giao xe tận nơi.",
  alternates: { canonical: "/tu-van-ban-hang" },
};

const benefits = [
  {
    heading: "Trả góp đến 80-85%",
    body: "Hỗ trợ vay trả góp linh hoạt, thủ tục nhanh gọn, tỷ lệ vay cao.",
  },
  {
    heading: "Đăng ký biển vàng",
    body: "Hỗ trợ trọn gói thủ tục đăng ký xe kinh doanh vận tải biển vàng.",
  },
  {
    heading: "Tư vấn chọn xe phù hợp",
    body: "Đội ngũ tư vấn giúp bạn chọn mẫu xe phù hợp nhu cầu và ngân sách.",
  },
  {
    heading: "Đồng hành hậu mãi",
    body: "Hỗ trợ vận hành, bảo dưỡng và các vấn đề phát sinh sau khi giao xe.",
  },
];

const models = [
  { heading: "VinFast VF3", body: "Xe điện mini đô thị, nhỏ gọn, dễ di chuyển trong nội thành." },
  { heading: "VinFast VF5", body: "SUV điện cỡ nhỏ, phù hợp chạy dịch vụ và gia đình." },
  { heading: "Herio Green", body: "Sedan điện phục vụ dịch vụ Xanh SM." },
  { heading: "Limo Green", body: "MPV điện 7 chỗ, phù hợp chạy dịch vụ Xanh SM đường dài." },
];

const testimonials = [
  {
    name: "Anh Minh Tuấn",
    role: "Tài xế Green SM · VF5",
    quote:
      "Nhờ HTX Vũng Tàu EV hỗ trợ hồ sơ trả góp, tôi nhận xe VF5 nhanh hơn dự kiến, thủ tục biển vàng cũng được lo trọn gói.",
  },
  {
    name: "Chị Thu Hà",
    role: "Chủ hộ kinh doanh · VF3",
    quote:
      "Tư vấn nhiệt tình, giải thích rõ ràng các gói vay nên tôi yên tâm chọn VF3 chạy dịch vụ trong khu vực.",
  },
  {
    name: "Anh Quốc Bảo",
    role: "Tài xế dịch vụ · Herio Green",
    quote:
      "Đội ngũ hỗ trợ nhanh, giao xe đúng hẹn, hậu mãi cũng chu đáo.",
  },
];

export default function TuVanBanHangPage() {
  const phoneDigits = siteConfig.hotline.replace(/\s/g, "");

  return (
    <>
      <LandingHeader />

      {/* HERO */}
      <section className="gradient-primary">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              HTX Vũng Tàu EV &bull; Đại lý xe điện VinFast
            </span>
            <h1 className="mt-4 max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
              Sở Hữu Xe Điện VinFast Dễ Dàng Hơn Bao Giờ Hết
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/90">
              Tư vấn miễn phí, hỗ trợ trả góp đến 80&ndash;85% giá trị xe và đăng ký biển vàng kinh doanh vận tải &mdash; nhanh gọn, minh bạch.
            </p>
            <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-white/60 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
              Ưu đãi tháng này: [CẬP NHẬT ƯU ĐÃI]
            </div>
            <div className="mt-6">
              <a
                href={`tel:${phoneDigits}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-white/80"
              >
                Hoặc gọi ngay: {siteConfig.hotline}
              </a>
            </div>
          </div>

          <div id="dang-ky">
            <QuickRegisterForm />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            "Đại lý chính thức tại Vũng Tàu",
            "Hỗ trợ trả góp đến 80-85%",
            "Tư vấn tận tâm - Giao xe tận nơi",
          ].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm font-semibold text-dark">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-primary">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </section>

      <InfoSection title="Lợi Ích Khi Mua Xe Qua HTX Vũng Tàu EV" items={benefits} />
      <InfoSection title="Các Mẫu Xe Điện VinFast Nổi Bật" items={models} />

      <div className="mx-auto max-w-7xl px-4 pb-4 text-center sm:px-6 lg:px-8">
        <a
          href="#dang-ky"
          className="gradient-primary inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
        >
          Đăng Ký Tư Vấn Ngay
        </a>
        <div className="mt-4">
          <Link
            href="/vinfast-vung-tau"
            className="text-sm font-semibold text-secondary hover:underline"
          >
            Xem bảng giá VinFast Vũng Tàu chi tiết →
          </Link>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-dark sm:text-3xl">
          Khách Hàng Nói Gì Về HTX Vũng Tàu EV
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-dark">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Liên Hệ / Showroom</h2>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <span>{siteConfig.address}</span>
            <a href={`tel:${phoneDigits}`} className="font-semibold text-primary">
              Hotline: {siteConfig.hotline}
            </a>
            <a href={`https://zalo.me/${phoneDigits}`} className="font-semibold text-[#0068FF]">
              Nhắn Zalo
            </a>
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {siteConfig.name} &ndash; MST {siteConfig.taxId}
        </div>
      </section>
    </>
  );
}
