import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-background px-4 py-20">
      <div className="animate-blob pointer-events-none absolute -top-32 right-10 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="animate-fade-in-up relative flex flex-col items-center text-center">
        <Logo size={64} />
        <p className="text-gradient-primary mt-8 text-7xl font-extrabold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-dark sm:text-3xl">
          Không tìm thấy trang bạn cần
        </h1>
        <p className="mt-3 max-w-md text-sm text-slate-600 sm:text-base">
          Trang bạn truy cập có thể đã bị xóa, đổi địa chỉ hoặc chưa từng tồn
          tại. Hãy quay lại trang chủ để tiếp tục khám phá HTX Vận Tải Vũng
          Tàu EV.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="gradient-primary rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Về trang chủ
          </Link>
          <Link
            href="/lien-he"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-dark transition-colors hover:border-primary hover:text-primary"
          >
            Liên hệ hỗ trợ
          </Link>
        </div>
      </div>
    </section>
  );
}
