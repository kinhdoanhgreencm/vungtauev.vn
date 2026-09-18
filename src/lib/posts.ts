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
    slug: "showroom-vinfast-vung-tau-dia-chi-lich-lam-viec",
    title: "Showroom VinFast Vũng Tàu: Địa Chỉ, Giờ Làm Việc, Lịch Lái Thử",
    excerpt:
      "Thông tin địa chỉ, giờ làm việc và cách đặt lịch lái thử xe điện VinFast tại khu vực Vũng Tàu, hỗ trợ giao xe tận nơi.",
    date: "2026-09-15",
    category: "Mua xe VinFast",
    content: [
      "Nhiều khách hàng tìm kiếm showroom VinFast tại Vũng Tàu để tham khảo trực tiếp các dòng xe điện VF3, VF5, VF6, VF7, VF8, VF9 và Limo Green trước khi quyết định mua. HTX Vận Tải Vũng Tàu EV là đầu mối tư vấn xe điện VinFast tại khu vực này, hỗ trợ khách hàng xem xe, lái thử và làm thủ tục mua xe nhanh gọn.",
      "Khách hàng có thể liên hệ hotline để đặt lịch hẹn xem xe trực tiếp hoặc đăng ký lái thử tận nơi, không cần di chuyển đến showroom nếu ở xa. Đội ngũ tư vấn sẽ mang xe đến tận nhà theo lịch hẹn phù hợp.",
      "Ngoài tư vấn bán xe, HTX còn hỗ trợ trọn gói thủ tục trả góp, đăng ký biển vàng chạy dịch vụ và đăng ký đối tác Green SM ngay sau khi nhận xe. Xem chi tiết bảng giá và các dòng xe tại trang VinFast Vũng Tàu.",
    ],
  },
  {
    slug: "vinfast-phu-my-ba-ria-vung-tau",
    title: "VinFast Phú Mỹ, Bà Rịa Vũng Tàu: Tư Vấn Mua Xe Điện Gần Bạn",
    excerpt:
      "Hướng dẫn mua xe điện VinFast cho khách hàng tại khu vực Phú Mỹ, Bà Rịa - hỗ trợ tư vấn, giao xe và làm thủ tục tận nơi.",
    date: "2026-09-10",
    category: "Mua xe VinFast",
    content: [
      "Không chỉ khu vực trung tâm Vũng Tàu, HTX Vận Tải Vũng Tàu EV còn hỗ trợ khách hàng tại Phú Mỹ, Bà Rịa và các phường lân cận tư vấn mua xe điện VinFast, từ dòng xe đô thị nhỏ gọn như VF3 đến các dòng SUV, MPV như VF7, VF8, VF9, Limo Green.",
      "Sau sáp nhập hành chính từ 1/7/2025, khu vực Phú Mỹ, Bà Rịa và Vũng Tàu cùng thuộc Thành phố Hồ Chí Minh, thuận tiện cho việc thống nhất chính sách giá, chương trình khuyến mãi và hỗ trợ hậu mãi cho khách hàng trong toàn khu vực.",
      "Khách hàng tại Phú Mỹ, Bà Rịa có thể đăng ký tư vấn từ xa, được hỗ trợ giao xe tận nơi và hoàn thiện hồ sơ trả góp mà không cần di chuyển xa đến showroom trung tâm.",
    ],
  },
  {
    slug: "taxi-vinfast-vung-tau-chi-phi-loi-nhuan",
    title: "Chạy Taxi VinFast Tại Vũng Tàu: Chi Phí, Lợi Nhuận, Có Nên Đầu Tư?",
    excerpt:
      "Phân tích chi phí đầu tư, chi phí vận hành và tiềm năng lợi nhuận khi chạy taxi, xe công nghệ bằng xe điện VinFast tại Vũng Tàu.",
    date: "2026-09-05",
    category: "Kinh nghiệm chạy dịch vụ",
    content: [
      "Vũng Tàu là thành phố du lịch với lượng khách di chuyển lớn quanh năm, đặc biệt vào cuối tuần và mùa cao điểm du lịch, tạo dư địa tốt cho tài xế chạy taxi, xe công nghệ bằng xe điện VinFast như VF5, Limo Green.",
      "Chi phí đầu tư ban đầu cho một xe điện VinFast chạy dịch vụ bao gồm giá xe, thủ tục đăng ký biển vàng, phù hiệu xe hợp đồng. HTX Vận Tải Vũng Tàu EV hỗ trợ vay trả góp đến 80-85% giá trị xe, giúp tài xế giảm áp lực vốn ban đầu.",
      "So với xe xăng, chi phí vận hành xe điện thấp hơn nhờ giá sạc rẻ hơn giá xăng và ít chi phí bảo dưỡng định kỳ. Kết hợp với chiết khấu khi đăng ký đối tác Green SM, tài xế có thể tối ưu lợi nhuận trên mỗi cuốc xe.",
      "Trước khi đầu tư, tài xế nên tham khảo bảng giá xe điện VinFast mới nhất và được tư vấn chọn dòng xe phù hợp với nhu cầu chạy dịch vụ tại khu vực Vũng Tàu.",
    ],
  },
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
