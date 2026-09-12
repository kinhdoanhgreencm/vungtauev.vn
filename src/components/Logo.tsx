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
          dark ? "bg-white p-1.5 shadow-md" : ""
        }`}
        style={{ height: size, width: size }}
      >
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={size}
          height={size}
          className="h-full w-full object-contain"
          priority
        />
      </span>
    </Link>
  );
}
