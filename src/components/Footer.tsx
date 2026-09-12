import Link from "next/link";
import { mainNav, siteConfig, socialLinks } from "@/lib/site-config";
import Logo from "./Logo";
import Reveal from "./Reveal";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <path
      d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.87.24-1.5 1.53-1.5H16.5V4.35C16.19 4.31 15.14 4.2 13.92 4.2c-2.55 0-4.3 1.56-4.3 4.42V10.5H7v3h2.62V21h3.88Z"
      fill="currentColor"
    />
  ),
};

const serviceLinks = [
  { label: "Cấp phù hiệu xe vận tải", href: "/cap-phu-hieu-va-vao-htx" },
  { label: "Mua xe VinFast biển vàng", href: "/mua-xe-vinfast-bien-vang-vung-tau" },
  { label: "Đăng ký Xanh SM Partner", href: "/dang-ky-xanh-sm" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark text-silver">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-lg font-bold text-white">
              Sẵn sàng gia nhập đội xe điện Vũng Tàu EV?
            </p>
            <p className="mt-1 text-sm text-silver">
              Đăng ký ngay để được tư vấn phù hiệu, mua xe và đối tác Xanh SM miễn phí.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="gradient-primary shrink-0 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Đăng Ký Gia Nhập HTX
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo dark size={56} />
          <p className="mt-4 text-sm">{siteConfig.name}</p>
          <p className="mt-1 text-sm">Mã số thuế: {siteConfig.taxId}</p>
          <p className="mt-1 text-sm">{siteConfig.address}</p>

          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
                  {socialIcons[social.label]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Liên kết nhanh</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Dịch vụ</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-secondary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Đối tác</p>
          <p className="mt-4 text-sm">VinFast</p>
          <p className="mt-2 text-sm">Xanh SM</p>
          <p className="mt-2 text-sm">V-GREEN</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-silver/70">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
