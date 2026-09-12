import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Hợp Tác Xã Vận Tải Vũng Tàu EV | Cấp Phù Hiệu - Xanh SM Partner",
    template: `%s | ${siteConfig.shortName}`,
  },
  description:
    "HTX Vận Tải Vũng Tàu EV chuyên cấp phù hiệu xe hợp đồng, hỗ trợ mua xe VinFast biển vàng và đăng ký đối tác Xanh SM Partner tại Bà Rịa Vũng Tàu.",
  keywords: [
    "vũng tàu ev",
    "htx vận tải vũng tàu ev",
    "hợp tác xã vũng tàu ev",
    "đăng ký xanh sm",
    "cấp phù hiệu xe vận tải",
  ],
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Hợp Tác Xã Vận Tải Vũng Tàu EV",
    description:
      "Cấp phù hiệu xe hợp đồng, mua xe VinFast biển vàng trả góp và đăng ký đối tác Xanh SM Partner tại Bà Rịa - Vũng Tàu.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  legalName: siteConfig.name,
  taxID: siteConfig.taxId,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.hotline,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1218, Đường Phạm Hùng, Khu phố Phước Hạnh, Phường Bà Rịa",
    addressLocality: "Thành phố Hồ Chí Minh",
    addressCountry: "VN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
