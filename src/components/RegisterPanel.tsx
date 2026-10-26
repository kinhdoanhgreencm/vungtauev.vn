import { siteConfig } from "@/lib/site-config";
import { LineIcon } from "./Icons";
import QuickRegisterForm from "./QuickRegisterForm";

// Khung Navy (như khung liên hệ trang con EV Green) chứa số tổng đài và biểu mẫu đăng ký nhanh
export default function RegisterPanel({
  title = "Cần tư vấn ngay?",
  text = "Để lại số điện thoại, nhân viên HTX gọi lại trong giờ làm việc.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <aside className="p-aside">
      <p className="h-eyebrow">Tổng đài tư vấn</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <a className="p-aside-phone" href={`tel:${siteConfig.hotline.replace(/\s/g, "")}`}>
        <LineIcon name="phone" />
        {siteConfig.hotline}
      </a>
      <QuickRegisterForm />
    </aside>
  );
}
