export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "tram-sac-vinfast-vgreen-vung-tau",
    title: "Trạm sạc V-GREEN tại Vũng Tàu: Vị trí và chi phí sạc mới nhất",
    excerpt:
      "Tổng hợp các trạm sạc V-GREEN và trạm sạc VinFast tại Vũng Tàu, chi phí sạc xe điện VF5, VF3 chạy dịch vụ mỗi tháng.",
    date: "2026-08-20",
    category: "Hạ tầng EV",
    content: [
      "Hệ thống trạm sạc V-GREEN đang được phủ rộng khắp thành phố Vũng Tàu, tập trung tại các khu vực đông dân cư, bến bãi và trục đường chính, giúp tài xế xe điện dễ dàng sạc pin trong lúc chờ khách hoặc nghỉ giữa ca.",
      "Chi phí sạc trung bình cho một xe VinFast VF5 chạy dịch vụ dao động theo khung giờ và chính sách của V-GREEN tại từng thời điểm. Tài xế nên chủ động theo dõi ứng dụng V-GREEN để nắm lịch trình khuyến mãi và trạm sạc gần nhất.",
      "HTX Vận Tải Vũng Tàu EV thường xuyên cập nhật thông tin trạm sạc mới cho các tài xế thành viên, đồng thời hỗ trợ tư vấn lộ trình chạy xe tối ưu quãng đường và thời gian sạc.",
    ],
  },
  {
    slug: "kinh-nghiem-chay-taxi-dien-vung-tau",
    title: "Kinh nghiệm chạy taxi điện tại Vũng Tàu cho tài xế mới",
    excerpt:
      "Chia sẻ kinh nghiệm thực tế về khung giờ đông khách, tuyến đường hiệu quả và cách tối ưu doanh thu khi chạy xe điện dịch vụ tại Vũng Tàu.",
    date: "2026-08-10",
    category: "Kinh nghiệm chạy dịch vụ",
    content: [
      "Vũng Tàu là thành phố du lịch với lượng khách di chuyển đông vào cuối tuần và các dịp lễ. Tài xế nên nắm rõ các khung giờ cao điểm tại khu vực Bãi Sau, Bãi Trước và trung tâm thành phố để tối ưu số chuyến.",
      "So với xe xăng, xe điện có chi phí vận hành thấp hơn đáng kể nhờ giá sạc rẻ hơn giá xăng, tuy nhiên tài xế cần chủ động lên kế hoạch sạc pin để tránh gián đoạn giữa ca chạy.",
      "Gia nhập HTX Vận Tải Vũng Tàu EV giúp tài xế được hỗ trợ về thủ tục pháp lý, phù hiệu xe hợp đồng và kết nối trực tiếp với các nền tảng gọi xe như Green SM.",
    ],
  },
  {
    slug: "so-sanh-chi-phi-xe-xang-xe-dien-chay-dich-vu",
    title: "So sánh chi phí vận hành xe xăng và xe điện khi chạy dịch vụ",
    excerpt:
      "Phân tích chi tiết chi phí nhiên liệu, bảo dưỡng và khấu hao giữa xe xăng truyền thống và xe điện VinFast khi chạy taxi, xe công nghệ.",
    date: "2026-07-28",
    category: "Kinh nghiệm chạy dịch vụ",
    content: [
      "Chi phí nhiên liệu là khoản chênh lệch lớn nhất giữa xe xăng và xe điện. Với quãng đường chạy dịch vụ trung bình 150-200km mỗi ngày, chi phí sạc điện thường thấp hơn đáng kể so với đổ xăng.",
      "Xe điện có ít bộ phận chuyển động hơn (không hộp số, không hệ thống xả), giúp giảm chi phí bảo dưỡng định kỳ so với xe xăng cùng phân khúc.",
      "Tài xế cần cân nhắc thêm chi phí đầu tư ban đầu, chính sách vay mua xe và thời gian thu hồi vốn khi quyết định chuyển đổi sang xe điện chạy dịch vụ.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
