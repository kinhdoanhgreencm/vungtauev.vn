import Reveal from "./Reveal";

export default function InfoSection({
  title,
  items,
}: {
  title: string;
  items: { heading: string; body: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="text-2xl font-bold text-dark sm:text-3xl">{title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.heading} delay={i * 100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-base font-semibold text-secondary">
                {item.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
