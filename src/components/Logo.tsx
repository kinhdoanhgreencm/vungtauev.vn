import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Logo VEV giữ nguyên, đầu trang và chân trang cùng chỉ dùng hình logo, cùng cỡ (--logo-h).
// Có bản sáng (nền trắng) và bản đảo màu (trên dải Navy); CSS chọn bản hiện theo nền đầu trang.
function Mark({ light = false }: { light?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={light ? "/logo-vev-dao-mau.png" : "/logo-vev.png"} alt="" width={815} height={709} />;
}

export default function Logo({ switchable = false }: { switchable?: boolean }) {
  const label = `${siteConfig.name}, về trang chủ`;
  if (!switchable) {
    return (
      <Link href="/" className="brand" aria-label={label}>
        <Mark />
      </Link>
    );
  }
  return (
    <Link href="/" aria-label={label} className="flex-none">
      <span className="brand brand-dark">
        <Mark />
      </span>
      <span className="brand brand-light">
        <Mark light />
      </span>
    </Link>
  );
}

export function LogoLight() {
  return (
    <span className="brand brand-on-dark">
      <Mark light />
    </span>
  );
}
