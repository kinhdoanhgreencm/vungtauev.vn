"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const BARE_ROUTES = ["/tu-van-ban-hang"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (BARE_ROUTES.includes(pathname)) {
    return (
      <div className="site flex flex-1 flex-col">
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="site flex flex-1 flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
