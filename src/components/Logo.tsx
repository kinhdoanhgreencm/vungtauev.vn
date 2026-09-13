import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Logo({
  dark = false,
  size = 48,
}: {
  dark?: boolean;
  size?: number;
}) {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center">
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-xl ${
          dark ? "bg-white px-2 shadow-md" : ""
        }`}
        style={{ height: size }}
      >
        <Image
          src="/logo-website.png"
          alt={siteConfig.name}
          width={1200}
          height={630}
          className="h-full w-auto object-contain"
          priority
        />
      </span>
    </Link>
  );
}
