import { siteConfig } from "@/lib/site-config";

// Bóng mềm duy nhất của trang: tách nút nổi khỏi nội dung phía dưới
const lift = "shadow-[0_12px_24px_-16px_rgba(11,23,48,0.45)]";

export default function FloatingContact() {
  const phoneDigits = siteConfig.hotline.replace(/\s/g, "");

  return (
    <div className="floating-contact fixed right-4 bottom-5 z-40 flex flex-col items-center gap-2.5 sm:right-6">
      <a
        href="/lien-he"
        aria-label="Đăng ký tư vấn"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-white text-ocean transition-colors hover:border-ocean hover:bg-tint-strong ${lift}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
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
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#0068FF] text-sm font-semibold text-white ${lift}`}
      >
        Zalo
      </a>

      <a
        href={`tel:${phoneDigits}`}
        aria-label="Gọi điện thoại"
        className={`gradient-primary flex h-14 w-14 items-center justify-center rounded-full text-white ${lift}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
