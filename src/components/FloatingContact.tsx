import { siteConfig } from "@/lib/site-config";

export default function FloatingContact() {
  const phoneDigits = siteConfig.hotline.replace(/\s/g, "");

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-center gap-3 sm:right-6">
      <a
        href="/lien-he"
        aria-label="Đăng ký tư vấn"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-lg shadow-black/10 ring-1 ring-slate-200 transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M9 3h6a1 1 0 0 1 1 1v1h1.5A1.5 1.5 0 0 1 19 6.5v13A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-13A1.5 1.5 0 0 1 6.5 5H8V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path
            d="M9 12.5l2 2 4-4.5"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      <a
        href={`https://zalo.me/${phoneDigits}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-sm font-bold text-white shadow-lg shadow-[#0068FF]/40 transition-transform hover:scale-110"
      >
        Zalo
      </a>

      <a
        href={`tel:${phoneDigits}`}
        aria-label="Gọi điện thoại"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-lg shadow-[#22c55e]/40 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22c55e]/60" />
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
