import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-tint px-4 py-20">
      <div className="ray" aria-hidden="true" />

      <div className="animate-fade-in-up relative flex flex-col items-center text-center">
        <Logo />
        <p className="mt-8 text-6xl font-semibold text-ocean tabular-nums sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-navy sm:text-[1.75rem]">
          Không tìm thấy trang bạn cần
        </h1>
        <p className="mt-3 max-w-md text-base text-steel">
          Trang bạn truy cập có thể đã bị xóa, đổi địa chỉ hoặc chưa từng tồn
          tại. Hãy quay lại trang chủ để tiếp tục khám phá HTX Vận Tải Vũng
          Tàu EV.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="gradient-primary inline-flex h-11 items-center rounded-lg px-5 text-sm font-semibold text-white"
          >
            Về trang chủ
          </Link>
          <Link
            href="/lien-he"
            className="inline-flex h-11 items-center rounded-lg border border-line-strong bg-white px-5 text-sm font-semibold text-ocean transition-colors hover:border-ocean hover:bg-tint-strong"
          >
            Liên hệ hỗ trợ
          </Link>
        </div>
      </div>
    </section>
  );
}
