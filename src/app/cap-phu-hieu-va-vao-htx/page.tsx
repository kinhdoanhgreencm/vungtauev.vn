import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import QuickRegisterForm from "@/components/QuickRegisterForm";

export const metadata: Metadata = {
  title: "Cấp Phù Hiệu Xe Vận Tải & Gia Nhập HTX Tại Vũng Tàu",
  description:
    "Thủ tục cấp phù hiệu xe hợp đồng, xin vào hợp tác xã vận tải tại Vũng Tàu. HTX Vận Tải Vũng Tàu EV xử lý hồ sơ nhanh, đúng chuẩn Bộ GTVT.",
  alternates: { canonical: "/cap-phu-hieu-va-vao-htx" },
};

const items = [
  {
    heading: "Thủ tục cấp phù hiệu xe hợp đồng tại Vũng Tàu",
    body: "Hướng dẫn đầy đủ hồ sơ, giấy tờ cần thiết để được cấp phù hiệu xe hợp đồng, xử lý trong vòng 24-48h.",
  },
  {
    heading: "Chi phí vào hợp tác xã vận tải",
    body: "Thông tin minh bạch về chi phí, quyền lợi khi gia nhập HTX Vận Tải Vũng Tàu EV cho chủ xe và tài xế.",
  },
  {
    heading: "Làm phù hiệu xe công nghệ Vũng Tàu",
    body: "Hỗ trợ tài xế chạy xe công nghệ (Xanh SM, Grab, Be...) hoàn thiện phù hiệu đúng quy định pháp luật.",
  },
  {
    heading: "Định vị xe tải, xe hợp đồng Vũng Tàu",
    body: "Lắp đặt thiết bị giám sát hành trình đạt chuẩn Bộ GTVT, đồng bộ dữ liệu phục vụ cấp phù hiệu và quản lý vận tải.",
  },
];

export default function PhuHieuPage() {
  return (
    <>
      <PageHero
        eyebrow="Dịch vụ pháp lý vận tải"
        title="Cấp Phù Hiệu Xe Vận Tải & Gia Nhập HTX"
        description="Xử lý hồ sơ phù hiệu xe hợp đồng nhanh chóng, hỗ trợ thủ tục gia nhập hợp tác xã vận tải tại Bà Rịa - Vũng Tàu."
      />
      <InfoSection title="Thông tin thủ tục" items={items} />
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <QuickRegisterForm />
      </section>
    </>
  );
}
