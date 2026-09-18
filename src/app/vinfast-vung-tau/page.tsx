import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import QuickRegisterForm from "@/components/QuickRegisterForm";
import Reveal from "@/components/Reveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "VinFast Vũng Tàu 2026: Bảng Giá Ô Tô Điện Mới Nhất",
  description:
    "Tư vấn xe điện VinFast tại Vũng Tàu: bảng giá VF3–VF9, Limo Green, lái thử tận nơi, giao xe nhanh, hỗ trợ trả góp.",
  alternates: { canonical: "/vinfast-vung-tau" },
};

const models = [
  "VinFast VF3",
  "VinFast VF5",
  "VinFast VF6",
  "VinFast VF7",
  "VinFast VF8",
  "VinFast VF9",
  "Limo Green",
];

const taxiItems = [
  {
    heading: "Chạy taxi, xe công nghệ với xe điện VinFast",
    body: "Xe điện VinFast tại Vũng Tàu giúp tài xế tiết kiệm chi phí nhiên liệu, phù hợp chạy Green SM, xe hợp đồng đường dài lẫn nội thành.",
  },
  {
    heading: "Đăng ký đối tác Green SM Partner",
    body: "HTX Vận Tải Vũng Tàu EV hỗ trợ tài xế đăng ký làm đối tác Green SM ngay sau khi nhận xe, tối ưu chiết khấu và cuốc chạy.",
  },
  {
    heading: "Xe điện VinFast phù hợp chạy dịch vụ",
    body: "VF3, VF5 phù hợp chạy nội thành, taxi công nghệ; Limo Green và VF8, VF9 phù hợp chạy dịch vụ đường dài, đưa đón gia đình.",
  },
  {
    heading: "Hỗ trợ thủ tục phù hiệu xe hợp đồng",
    body: "Đăng ký biển vàng, cấp phù hiệu xe vận tải được HTX hỗ trợ trọn gói, đúng quy định của Sở GTVT.",
  },
];

const testDriveItems = [
  {
    heading: "Đặt lịch lái thử tận nơi",
    body: "Để lại số điện thoại, đội ngũ tư vấn sắp xếp lịch lái thử VinFast tại nhà hoặc showroom theo thời gian bạn thuận tiện.",
  },
  {
    heading: "Giao xe tận nơi tại Vũng Tàu",
    body: "Sau khi hoàn tất hồ sơ, HTX hỗ trợ giao xe tận nhà, hướng dẫn sử dụng và bàn giao giấy tờ đầy đủ.",
  },
];

const faqs = [
  {
    question: "VinFast Vũng Tàu ở đâu?",
    answer: `HTX Vận Tải Vũng Tàu EV - đơn vị tư vấn xe điện VinFast tại khu vực Vũng Tàu - có địa chỉ tại ${siteConfig.address}.`,
  },
  {
    question: "Vũng Tàu còn thuộc tỉnh Bà Rịa - Vũng Tàu không?",
    answer:
      "Từ 1/7/2025, khu vực Vũng Tàu đã sáp nhập vào Thành phố Hồ Chí Minh, tỉnh Bà Rịa - Vũng Tàu không còn là đơn vị hành chính độc lập. Khu vực này vẫn là địa bàn hoạt động trọng điểm của HTX Vận Tải Vũng Tàu EV.",
  },
  {
    question: "Mua xe điện VinFast tại Vũng Tàu có được hỗ trợ trả góp không?",
    answer:
      "Có. HTX hỗ trợ hồ sơ vay trả góp lên đến 80-85% giá trị xe, thủ tục nhanh gọn cho cả khách mua để chạy dịch vụ và mua để sử dụng cá nhân.",
  },
  {
    question: "Có thể đặt lịch lái thử xe VinFast tại Vũng Tàu không?",
    answer:
      "Có, bạn có thể đăng ký lái thử tận nơi hoặc tại showroom thông qua form đăng ký trên trang này hoặc gọi trực tiếp hotline.",
  },
];

export default function VinfastVungTauPage() {
  const mapAddressQuery = encodeURIComponent(siteConfig.address);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "VinFast Vũng Tàu", path: "/vinfast-vung-tau" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        eyebrow="VinFast Vũng Tàu"
        title="VinFast Vũng Tàu - Bảng Giá Xe Điện & Tư Vấn Mua Xe 2026"
        description="Tư vấn ô tô điện VinFast tại khu vực Vũng Tàu (TP.HCM): bảng giá VF3-VF9, Limo Green, đặt lịch lái thử, giao xe tận nơi, hỗ trợ trả góp."
      />

      <section id="bang-gia" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">
            Bảng giá VinFast VF3 - VF9 tại Vũng Tàu
          </h2>
          <p className="mt-2 text-slate-600">
            Giá bán thay đổi theo chương trình khuyến mãi từng thời điểm. Để
            lại thông tin để nhận báo giá chính xác và ưu đãi mới nhất.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-dark">
                <tr>
                  <th className="px-5 py-3 font-semibold">Dòng xe</th>
                  <th className="px-5 py-3 font-semibold">Giá tham khảo</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, i) => (
                  <tr
                    key={model}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="border-t border-slate-200 px-5 py-3 font-medium text-dark">
                      {model}
                    </td>
                    <td className="border-t border-slate-200 px-5 py-3 text-slate-600">
                      Liên hệ nhận báo giá mới nhất
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <div id="taxi-green-sm">
        <InfoSection
          title="Xe điện VinFast chạy taxi & Green SM tại Vũng Tàu"
          items={taxiItems}
        />
      </div>

      <section id="showroom" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">
            Showroom / Đại lý VinFast tại Vũng Tàu
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={100}>
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-dark">Địa chỉ: </span>
                {siteConfig.address}
              </p>
              <p>
                <span className="font-semibold text-dark">Hotline: </span>
                <a href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`} className="text-primary font-semibold">
                  {siteConfig.hotline}
                </a>
              </p>
              <p>
                <span className="font-semibold text-dark">Khu vực phục vụ: </span>
                Vũng Tàu, Bà Rịa, Phú Mỹ và các khu vực lân cận.
              </p>
              <a
                href={`https://www.google.com/maps?q=${mapAddressQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-secondary hover:underline"
              >
                Xem đường đi trên Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Bản đồ VinFast Vũng Tàu - HTX Vận Tải Vũng Tàu EV"
                src="https://www.google.com/maps/embed?pb=!3m2!1svi!2s!4v1789201506100!5m2!1svi!2s!6m8!1m7!1sQ7hpQmz476zFEUZoSfms6w!2m2!1d10.49998663758045!2d107.1919998524289!3f216.11765677923947!4f-3.4481687882588687!5f0.4000000000000002"
                className="h-64 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <div id="lai-thu-giao-xe">
        <InfoSection
          title="Đặt lịch lái thử & Giao xe tận nơi"
          items={testDriveItems}
        />
      </div>

      <section id="tra-gop" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">
            Hỗ trợ trả góp mua xe điện VinFast
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            HTX Vận Tải Vũng Tàu EV hỗ trợ hồ sơ vay ngân hàng lên đến 80-85%
            giá trị xe, lãi suất ưu đãi, giải ngân nhanh - áp dụng cho cả xe
            mua sử dụng cá nhân và xe đăng ký biển vàng chạy dịch vụ.
          </p>
          <Link
            href="/mua-xe-vinfast-bien-vang-vung-tau"
            className="mt-4 inline-block font-semibold text-secondary hover:underline"
          >
            Xem chi tiết trả góp xe biển vàng chạy dịch vụ →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-dark">
              VinFast Phú Mỹ, Bà Rịa Vũng Tàu
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Ngoài khu vực trung tâm Vũng Tàu, HTX Vận Tải Vũng Tàu EV còn hỗ
              trợ tư vấn, giao xe và làm thủ tục cho khách hàng tại khu vực
              Phú Mỹ, Bà Rịa và các phường lân cận - cùng thuộc địa bàn Thành
              phố Hồ Chí Minh sau sáp nhập hành chính.
            </p>
          </div>
        </Reveal>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">
            Câu hỏi thường gặp
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 80}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-semibold text-dark">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="lien-he-dia-chi" className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <QuickRegisterForm />
      </section>
    </>
  );
}
