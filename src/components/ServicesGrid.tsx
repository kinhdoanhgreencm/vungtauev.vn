import Link from "next/link";
import Reveal from "./Reveal";

const services = [
  {
    title: "Cấp phù hiệu xe vận tải",
    description: "Xử lý hồ sơ trong 24h - 48h, đúng chuẩn Sở GTVT.",
    href: "/cap-phu-hieu-va-vao-htx",
    icon: "📋",
  },
  {
    title: "Bán & Cho thuê xe VinFast Biển Vàng",
    description: "Hỗ trợ vay 80-85% giá trị xe, thủ tục nhanh gọn.",
    href: "/mua-xe-vinfast-bien-vang-vung-tau",
    icon: "🚗",
  },
  {
    title: "Đối tác Green SM Partner",
    description: "Tối ưu chiết khấu và hỗ trợ tài xế toàn diện.",
    href: "/dang-ky-green-sm",
    icon: "🟢",
  },
  {
    title: "Lắp đặt định vị & Giấy phép vận tải",
    description: "Đúng chuẩn Bộ GTVT, đồng bộ hồ sơ pháp lý.",
    href: "/cap-phu-hieu-va-vao-htx",
    icon: "📡",
  },
];

export default function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-dark sm:text-3xl">
          Dịch vụ trọng tâm
        </h2>
        <p className="mt-2 text-slate-600">
          Đồng hành toàn diện cùng tài xế và chủ xe điện tại Vũng Tàu
        </p>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 100}>
            <Link
              href={service.href}
              className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg"
            >
              <span className="inline-block text-3xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-dark group-hover:text-secondary">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {service.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
