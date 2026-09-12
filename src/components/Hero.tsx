import QuickRegisterForm from "./QuickRegisterForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="animate-blob pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-secondary/15 blur-3xl" />
      <div
        className="animate-blob pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24 lg:px-8">
        <div>
          <h1
            className="animate-fade-in-up text-3xl font-extrabold leading-tight text-dark sm:text-4xl lg:text-5xl"
          >
            Hợp Tác Xã Vận Tải Vũng Tàu EV{" "}
            <span className="text-gradient-primary">
              Đồng Hành Cùng Tài Xế Xanh
            </span>
          </h1>
          <p
            className="animate-fade-in-up mt-5 max-w-xl text-base text-slate-600 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Hỗ trợ thủ tục cấp phù hiệu, mua xe VinFast biển vàng trả góp và
            kết nối Xanh SM Partner uy tín tại Bà Rịa - Vũng Tàu.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <QuickRegisterForm />
        </div>
      </div>
    </section>
  );
}
