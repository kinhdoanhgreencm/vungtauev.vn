import Link from "next/link";
import { mainNav, siteConfig, socialLinks } from "@/lib/site-config";
import { LogoLight } from "./Logo";

const serviceLinks = [
  { label: "VinFast Vũng Tàu - Bảng giá", href: "/vinfast-vung-tau" },
  { label: "Cấp phù hiệu xe vận tải", href: "/cap-phu-hieu-va-vao-htx" },
  { label: "Mua xe VinFast biển vàng", href: "/mua-xe-vinfast-bien-vang-vung-tau" },
  { label: "Đăng ký Green SM Partner", href: "/dang-ky-green-sm" },
];

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-main">
        <div>
          <div className="foot-brand">
            <LogoLight />
          </div>
          <a className="foot-phone" href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}>
            {siteConfig.hotline}
          </a>
          <p>
            {siteConfig.name}
            <br />
            {siteConfig.address}
            <br />
            MST {siteConfig.taxId} · <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <h2>Hệ thống</h2>
          <p>
            Thành viên hệ thống hợp tác xã vận tải do Công ty Cổ phần EV Green điều hành.
          </p>
        </div>
        <div>
          <h2>Trang trên website</h2>
          <ul>
            {mainNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href}>{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Dịch vụ</h2>
          <ul>
            {serviceLinks.map((i) => (
              <li key={i.href}>
                <Link href={i.href}>{i.label}</Link>
              </li>
            ))}
            {socialLinks.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrap foot-legal">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span>Thành viên hệ thống EV Green</span>
      </div>
    </footer>
  );
}
