import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Liên Hệ HTX Vận Tải Vũng Tàu EV",
  description:
    "Liên hệ HTX Vận Tải Vũng Tàu EV để được tư vấn cấp phù hiệu, mua xe VinFast biển vàng và đăng ký đối tác Xanh SM Partner.",
  alternates: { canonical: "/lien-he" },
};

const contactInfo = [
  {
    label: "Hotline",
    value: siteConfig.hotline,
    href: `tel:${siteConfig.hotline.replace(/\s/g, "")}`,
    icon: (
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <path
        d="M3 5h18v14H3V5Zm0 0 9 7 9-7"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Địa chỉ",
    value: siteConfig.address,
    href: `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}`,
    icon: (
      <path
        d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="Liên Hệ HTX Vận Tải Vũng Tàu EV"
        description="Để lại thông tin hoặc liên hệ trực tiếp, đội ngũ HTX sẽ hỗ trợ bạn nhanh nhất về phù hiệu, mua xe và đối tác Xanh SM."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="grid gap-4">
              {contactInfo.map((item, i) => (
                <Reveal key={item.label} delay={i * 100}>
                  <a
                    href={item.href}
                    target={item.label === "Địa chỉ" ? "_blank" : undefined}
                    rel={
                      item.label === "Địa chỉ"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-dark">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-slate-600">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                <iframe
                  title="Bản đồ HTX Vận Tải Vũng Tàu EV"
                  src="https://www.google.com/maps/embed?pb=!3m2!1svi!2s!4v1789201506100!5m2!1svi!2s!6m8!1m7!1sQ7hpQmz476zFEUZoSfms6w!2m2!1d10.49998663758045!2d107.1919998524289!3f216.11765677923947!4f-3.4481687882588687!5f0.4000000000000002"
                  className="h-64 w-full"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
