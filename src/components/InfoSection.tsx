export default function InfoSection({
  title,
  items,
}: {
  title: string;
  items: { heading: string; body: string }[];
}) {
  return (
    <section className="h-sec">
      <div className="wrap">
        <p className="h-eyebrow">Thông tin</p>
        <h2>{title}</h2>
        <ul className="p-tiles mt-6">
          {items.map((item, i) => (
            <li key={item.heading} data-n={String(i + 1).padStart(2, "0")}>
              <strong>{item.heading}</strong>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
