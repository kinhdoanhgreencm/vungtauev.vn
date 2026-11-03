// /llms.txt: bản tóm tắt website dạng Markdown cho trợ lý AI (ChatGPT, Claude, Perplexity, Gemini) đọc nhanh,
// theo đề xuất tại llmstxt.org. Lấy từ site-config và danh sách bài trong posts.ts.
import { posts } from "@/lib/posts";
import { siteConfig, socialLinks } from "@/lib/site-config";

const abs = (path: string) => `${siteConfig.url}${path}`;

const PAGES = [
  ["/vinfast-vung-tau", "VinFast Vũng Tàu", "Bảng giá ô tô điện VinFast, tư vấn chọn xe và trả góp tại Vũng Tàu, Bà Rịa, Phú Mỹ."],
  ["/mua-xe-vinfast-bien-vang-vung-tau", "Mua xe VinFast biển vàng", "Mua xe điện chạy dịch vụ, vay đến 80–85% giá trị xe, làm biển vàng kinh doanh vận tải."],
  ["/dang-ky-green-sm", "Đăng ký Green SM Partner", "Chạy Green SM qua HTX: HTX làm hồ sơ xe, đăng ký đối tác và đối soát cuốc xe theo kỳ."],
  ["/cap-phu-hieu-va-vao-htx", "Cấp phù hiệu và vào HTX", "Hồ sơ phù hiệu xe hợp đồng, biển số vàng và thủ tục gia nhập hợp tác xã."],
  ["/tu-van-ban-hang", "Tư vấn mua xe trả góp", "Đăng ký để được gọi lại tư vấn mua xe VinFast trả góp."],
  ["/lien-he", "Liên hệ", "Địa chỉ, tổng đài và mẫu đăng ký tư vấn."],
] as const;

export function GET() {
  const lines = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.name} (mã số ${siteConfig.taxId}) là hợp tác xã vận tải dùng ô tô điện tại ${siteConfig.areaServed.join(", ")}, thành viên hệ thống EV Green (https://co-ev.vn). HTX tư vấn mua xe VinFast chạy dịch vụ, làm biển số vàng, phù hiệu xe hợp đồng và là đối tác Green SM Partner cho tài xế trong khu vực.`,
    "",
    `- Tổng đài: ${siteConfig.hotline}`,
    `- Email: ${siteConfig.email}`,
    `- Trụ sở: ${siteConfig.address}`,
    ...socialLinks.map((s) => `- ${s.label}: ${s.href}`),
    "- Website cũ vungtaugf.vn là của cùng HTX; thông tin mới nhất ở vungtauev.vn.",
    "- HTX không đại diện cho VinFast hay Green SM; việc duyệt tài xế và xe do Green SM quyết định.",
    "",
    "## Trang chính",
    ...PAGES.map(([path, title, desc]) => `- [${title}](${abs(path)}): ${desc}`),
    "",
    "## Bài viết",
    ...posts.map((p) => `- [${p.title}](${abs(`/tin-tuc/${p.slug}`)}): ${p.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
