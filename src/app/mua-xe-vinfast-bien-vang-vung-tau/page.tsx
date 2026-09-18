import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import QuickRegisterForm from "@/components/QuickRegisterForm";

export const metadata: Metadata = {
  title: "Mua Xe VinFast Biển Vàng Tại Vũng Tàu | Trả Góp 80-85%",
  description:
    "Báo giá xe VinFast VF3, VF5, VF e34 biển vàng chạy dịch vụ tại Vũng Tàu. Hỗ trợ vay trả góp, thủ tục lăn bánh nhanh gọn cùng HTX Vận Tải Vũng Tàu EV.",
  alternates: { canonical: "/mua-xe-vinfast-bien-vang-vung-tau" },
};

const items = [
  {
    heading: "Giá xe VinFast VF5 biển vàng tại Vũng Tàu",
    body: "Cập nhật bảng giá lăn bánh VF5 biển vàng mới nhất, kèm ưu đãi dành riêng cho tài xế chạy dịch vụ, taxi công nghệ.",
  },
  {
    heading: "Vay mua xe VF3 chạy dịch vụ",
    body: "Hỗ trợ hồ sơ vay ngân hàng lên đến 80-85% giá trị xe, lãi suất ưu đãi, giải ngân nhanh cho tài xế chạy Green SM, Grab.",
  },
  {
    heading: "Thủ tục lăn bánh xe điện biển vàng",
    body: "HTX hỗ trợ trọn gói thủ tục đăng ký biển vàng, phù hiệu xe hợp đồng, đảm bảo đúng quy định vận tải hiện hành.",
  },
  {
    heading: "Xe điện VF e34 chạy taxi Vũng Tàu",
    body: "Tư vấn dòng xe phù hợp với nhu cầu chạy taxi, dịch vụ đường dài tại khu vực Bà Rịa - Vũng Tàu và lân cận.",
  },
];

export default function VinfastPage() {
  return (
    <>
      <PageHero
        eyebrow="Đại lý ủy quyền VinFast"
        title="Mua Xe VinFast Biển Vàng Tại Vũng Tàu"
        description="Trả góp linh hoạt, thủ tục nhanh gọn - đồng hành cùng tài xế chuyển đổi sang xe điện chạy dịch vụ."
        />
      <InfoSection title="Thông tin cần biết" items={items} />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Link
          href="/vinfast-vung-tau"
          className="text-sm font-semibold text-secondary hover:underline"
        >
          Xem đầy đủ bảng giá VinFast VF3-VF9 tại Vũng Tàu →
        </Link>
      </div>
      <section className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <QuickRegisterForm />
      </section>
    </>
  );
}
