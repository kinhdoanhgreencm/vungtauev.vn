"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, siteConfig } from "@/lib/site-config";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="hidden bg-dark sm:block">
        <div className="mx-auto flex max-w-7xl items-center px-4 py-2 text-xs text-silver sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-medium text-white hover:text-secondary"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
                  fill="currentColor"
                />
              </svg>
              {siteConfig.hotline}
            </a>
            <span className="hidden items-center gap-1.5 md:flex">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M3 5h18v14H3V5Zm0 0 9 7 9-7"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {siteConfig.email}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Mở menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center justify-self-start rounded-lg border border-slate-200 text-dark lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="justify-self-center lg:justify-self-auto">
          <Logo size={64} />
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary"
                  : "text-dark hover:bg-slate-100 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Link
            href="/lien-he"
            className="gradient-primary shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Đăng Ký Gia Nhập HTX
          </Link>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
            <Logo size={48} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Đóng menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-dark"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
            {mainNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`animate-fade-in-up rounded-xl px-4 py-3.5 text-lg font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary"
                    : "text-dark hover:bg-slate-50"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-slate-200 p-4">
            <a
              href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}
              className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-primary"
            >
              Hotline: {siteConfig.hotline}
            </a>
            <Link
              href="/lien-he"
              onClick={() => setOpen(false)}
              className="gradient-primary block rounded-full px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30"
            >
              Đăng Ký Gia Nhập HTX
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
