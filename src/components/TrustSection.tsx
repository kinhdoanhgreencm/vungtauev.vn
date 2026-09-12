import Reveal from "./Reveal";

const stats = [
  { value: "+1,000", label: "Tài xế tin tưởng" },
  { value: "100%", label: "Hồ sơ duyệt thành công" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

const partners = ["VinFast", "Xanh SM", "V-GREEN"];

export default function TrustSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <p className="text-3xl font-extrabold text-gradient-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-lg font-semibold text-slate-400 transition-colors hover:text-primary"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
