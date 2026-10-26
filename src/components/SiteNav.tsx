"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";

const tel = `tel:${siteConfig.hotline.replace(/\s/g, "")}`;

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
}

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="nav" aria-label="Menu chính">
      {mainNav.map((i) => (
        <Link key={i.href} href={i.href} aria-current={isCurrent(pathname, i.href) ? "page" : undefined}>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}

// Biểu tượng menu điện thoại: nét Navy 1.8, một chi tiết Sky (class "acc"), cùng kiểu menu website EV Green
const MENU_ICONS: Record<string, React.ReactNode> = {
  "/": (
    <>
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M9 20v-6h6v6" />
      <path className="acc" d="M3 20h18" />
    </>
  ),
  "/vinfast-vung-tau": (
    <>
      <path d="M3 15.5V12l2.2-4.6A2 2 0 0 1 7 6.2h10a2 2 0 0 1 1.8 1.2L21 12v3.5a1 1 0 0 1-1 1h-1.2M5.2 16.5H4a1 1 0 0 1-1-1" />
      <circle cx="7.5" cy="16.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
      <path className="acc" d="M12.6 8.6l-2 3h2.8l-2 3" />
    </>
  ),
  "/dang-ky-green-sm": (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
      <path className="acc" d="M9.5 12l2 2 3.5-4" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  "/cap-phu-hieu-va-vao-htx": (
    <>
      <path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z" />
      <path d="M14 3.5V8h4" />
      <path className="acc" d="M9 13l2 2 4-4.5" />
    </>
  ),
  "/tin-tuc": (
    <>
      <path d="M5 4h11v16H6a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1z" />
      <path d="M16 9h3a1 1 0 0 1 1 1v8a2 2 0 0 1-4 0" />
      <path className="acc" d="M7.5 8h5" />
      <path d="M7.5 12h5M7.5 15.5h3.5" />
    </>
  ),
  "/lien-he": (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path className="acc" d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h3l1.5 4-2 1.3a10.5 10.5 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.1 2A16.4 16.4 0 0 1 4.5 5.6a2 2 0 0 1 2.1-2.1z" />
  ),
  form: (
    <>
      <path d="M9 3h6a1 1 0 0 1 1 1v1h1.5A1.5 1.5 0 0 1 19 6.5v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5v-13A1.5 1.5 0 0 1 6.5 5H8V4a1 1 0 0 1 1-1Z" />
      <path className="acc" d="M9 12.5l2 2 4-4.5" />
    </>
  ),
};

function MenuIcon({ name }: { name: string }) {
  return (
    <svg className="md-icon" viewBox="0 0 24 24" aria-hidden="true">
      {MENU_ICONS[name]}
    </svg>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);
  function onToggle() {
    document.documentElement.classList.toggle("menu-open", !!ref.current?.open);
  }
  useEffect(() => () => document.documentElement.classList.remove("menu-open"), []);
  return (
    <details className="nav-toggle" ref={ref} onToggle={onToggle}>
      <summary aria-label="Menu">
        {/* Ba nét xiên theo cánh chữ V: Navy, Bạc, Sky như ba mảng của logo; mở menu thì thành dấu X */}
        <svg className="menu-icon" viewBox="0 0 28 28" aria-hidden="true">
          <rect className="mi mi-1" x="4" y="6.5" width="20" height="3" />
          <rect className="mi mi-2" x="4" y="12.5" width="13" height="3" />
          <rect className="mi mi-3" x="4" y="18.5" width="20" height="3" />
        </svg>
      </summary>
      <nav className="nav-drop" aria-label="Menu chính trên điện thoại">
        <ol className="md-list">
          {mainNav.map((i, n) => (
            <li key={i.href} style={{ "--i": n } as React.CSSProperties}>
              <Link href={i.href} aria-current={isCurrent(pathname, i.href) ? "page" : undefined}>
                <span className="md-tile">
                  <MenuIcon name={i.href} />
                </span>
                <span className="md-label">{i.label}</span>
                <span className="md-num" aria-hidden="true">
                  {String(n + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <div className="md-actions" style={{ "--i": mainNav.length } as React.CSSProperties}>
          <a className="md-call" href={tel}>
            <MenuIcon name="phone" />
            <span>
              <small>Tổng đài tư vấn</small>
              {siteConfig.hotline}
            </span>
          </a>
          <Link className="md-sub" href="/lien-he">
            <MenuIcon name="form" />
            <span>Đăng ký gia nhập HTX</span>
          </Link>
        </div>
      </nav>
    </details>
  );
}

// Đánh dấu đầu trang khi đã cuộn, để đầu trang trong suốt trên hero hiện lại nền trắng
export function HeadScrollState() {
  useEffect(() => {
    const head = document.querySelector<HTMLElement>(".site-head");
    if (!head) return;
    const update = () => head.toggleAttribute("data-scrolled", window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return null;
}
