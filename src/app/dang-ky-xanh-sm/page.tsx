import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import QuickRegisterForm from "@/components/QuickRegisterForm";

export const metadata: Metadata = {
  title: "Đăng Ký Xanh SM Partner Tại Vũng Tàu",
  description:
    "Hướng dẫn đăng ký tài xế và gia nhập Xanh SM Partner tại Vũng Tàu cùng HTX Vận Tải Vũng Tàu EV. Chiết khấu tốt, hỗ trợ tài xế 24/7.",
  alternates: { canonical: "/dang-ky-xanh-sm" },
};

const items = [
  {
    heading: "Đăng ký tài xế Xanh SM Partner tại Vũng Tàu",
    body: "Hướng dẫn chi tiết quy trình đăng ký tài khoản, hồ sơ cần chuẩn bị và các bước xét duyệt tài xế Xanh SM Partner.",
  },
  {
    heading: "Gia nhập Xanh SM Partner",
    body: "Hỗ trợ chủ xe đăng ký trở thành đối tác Xanh SM Partner, quản lý đội xe và tối ưu vận hành cùng HTX.",
  },
  {
    heading: "Chiết khấu Xanh SM Partner qua HTX",
    body: "Tài xế gia nhập qua HTX Vận Tải Vũng Tàu EV được hỗ trợ mức chiết khấu cạnh tranh và tư vấn tối ưu doanh thu.",
  },
  {
    heading: "Hướng dẫn đăng ký đối tác Xanh SM",
    body: "Giải đáp các thắc mắc thường gặp về điều kiện xe, giấy tờ pháp lý và thời gian xét duyệt hồ sơ đối tác.",
  },
];

export default function XanhSmPage() {
  return (
    <>
      <PageHero
        eyebrow="Đối tác Xanh SM Partner"
        title="Đăng Ký Xanh SM Partner Tại Vũng Tàu"
        description="Gia nhập đội ngũ tài xế xe điện Xanh SM cùng HTX Vận Tải Vũng Tàu EV - hỗ trợ hồ sơ, chiết khấu và vận hành."
      />
      <InfoSection title="Quy trình đăng ký" items={items} />
      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <QuickRegisterForm />
      </section>
    </>
  );
}
