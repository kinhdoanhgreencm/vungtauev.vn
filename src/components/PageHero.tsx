import Link from "next/link";
import BreadcrumbJsonLd from "./BreadcrumbJsonLd";

// Đầu trang con như website EV Green: dải Navy cắt xiên cạnh dưới, đường dẫn có dấu xiên Sky, ảnh thật hoà vào nền.
// Có `crumb` thì đường dẫn hiện tên đó và khai báo BreadcrumbList cho Google; không có thì hiện `eyebrow`.
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  crumb?: { name: string; path: string };
}) {
  return (
    <header className={`p-hero${image ? " p-hero--img" : ""}`}>
      {crumb && (
        <BreadcrumbJsonLd
          items={[
            { name: "Trang chủ", path: "/" },
            { name: crumb.name, path: crumb.path },
          ]}
        />
      )}
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="p-hero-bg" src={image} alt="" fetchPriority="high" />
      )}
      <div className="wrap">
        <nav className="p-crumbs" aria-label="Đường dẫn">
          <Link href="/">Trang chủ</Link>
          <span>
            <i aria-hidden="true" />
            {crumb?.name ?? eyebrow}
          </span>
        </nav>
        <p className="h-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="p-summary">{description}</p>
      </div>
    </header>
  );
}
