export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="gradient-primary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <span className="animate-fade-in-up inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold text-white">
          {eyebrow}
        </span>
        <h1
          className="animate-fade-in-up mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        <p
          className="animate-fade-in-up mt-4 max-w-2xl text-base text-white/90"
          style={{ animationDelay: "200ms" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
