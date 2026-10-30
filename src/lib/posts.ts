export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  category: string;
  /** Tiêu đề và mô tả cho Google, khi khác tiêu đề và đoạn tóm tắt */
  seoTitle?: string;
  seoDescription?: string;
};

export const posts: Post[] = [
  {
    slug: "green-sm-partner-va-green-sm-platform-khac-nhau",
    title: "Green SM Partner và Green SM Platform khác nhau thế nào?",
    seoTitle: "Green SM Partner và Platform khác nhau thế nào?",
    seoDescription: "Green SM Platform là tài xế ký thẳng với Green SM, Green SM Partner là chạy qua một đơn vị đối tác như HTX. So sánh dòng tiền, đối soát, cách chọn.",
    excerpt:
      "Green SM Platform là tài xế ký thẳng với Green SM và tự rút tiền từ ví. Green SM Partner là chạy qua một đơn vị đối tác như HTX, được đối soát theo kỳ. So sánh dòng tiền, phí và cách chọn.",
    date: "2026-10-30",
    category: "Kinh nghiệm chạy dịch vụ",
    content: [
      "Green SM Platform là hình thức tài xế có ô tô điện đăng ký thẳng với Green SM, tự quản lý ví và tự rút tiền. Green SM Partner là chạy qua một đơn vị đối tác của Green SM, như HTX Vận tải Vũng Tàu EV: Green SM chuyển doanh thu về đơn vị, đơn vị đối soát rồi trả tiền cho tài xế.",
      "Hai hình thức cùng nhận cuốc trên ứng dụng Green SM (nhiều người vẫn gọi theo tên cũ là Xanh SM). Chỗ khác nhau nằm ở việc ai ký với tài xế, tiền đi đường nào, và khi có chuyện thì ai đứng ra lo.",
      "## Green SM Platform là gì",
      "Theo trang tuyển tài xế trên greensm.com (đọc ngày 29/10/2026), Green SM Platform kết nối người có xe điện muốn chạy dịch vụ, toàn thời gian hay bán thời gian, với khách đặt xe. Trang này ghi tài xế được chia \"lên tới 87%\" doanh thu chuyến và có hỗ trợ vay mua xe tới 70%.",
      "Tài xế Platform tự đăng ký trên trang của Green SM, tự theo dõi doanh thu trên ứng dụng, tự rút tiền từ ví theo lịch của hệ thống. Bị báo lỗi thì tài xế tự giải trình với Green SM.",
      "## Green SM Partner là gì",
      "Với Green SM Partner, tài xế ký hợp đồng với một đơn vị đã hợp tác với Green SM, thường là hợp tác xã hoặc doanh nghiệp vận tải. Xe đứng tên đơn vị đó, mang biển số vàng và phù hiệu có tên đơn vị.",
      "Tài xế vẫn chạy và nhận cuốc như bình thường. Đến kỳ thanh toán, Green SM chuyển doanh thu về đơn vị đối tác; đơn vị đối chiếu từng cuốc rồi trả cho tài xế phần của họ theo hợp đồng.",
      "## Đừng nhầm với \"Green Partner\" dành cho doanh nghiệp",
      "Trên menu của greensm.com, mục \"Green Partner\" nằm trong nhóm Doanh nghiệp và đang mang nhãn \"Sắp ra mắt\". Đây là một sản phẩm khác, dành cho doanh nghiệp. Vài bài viết và trang hỏi đáp trên mạng thấy mục này rồi viết rằng \"Partner chưa mở cho tài xế\". Câu đó sai với hình thức tài xế chạy qua HTX, vốn đang hoạt động.",
      "## So sánh nhanh",
      "| | Green SM Platform | Green SM Partner |\n|---|---|---|\n| Tài xế ký với | Green SM | Đơn vị đối tác (HTX, doanh nghiệp vận tải) |\n| Xe đứng tên | Theo hồ sơ tài xế đăng ký với Green SM | Đơn vị đối tác |\n| Tiền về đâu | Ví Platform của tài xế | Tài khoản của đơn vị đối tác, rồi đơn vị trả tài xế |\n| Lúc nhận tiền | Tài xế tự rút theo lịch của Green SM | Theo lịch đối soát ghi trong hợp đồng |\n| Tỷ lệ chia sẻ | Green SM công bố \"lên tới 87%\" | Mỗi đơn vị một mức, ghi trong hợp đồng |\n| Khi bị báo lỗi | Tài xế tự giải trình | Đơn vị đối tác làm việc với Green SM |\n| Biển vàng, phù hiệu | Tài xế tự lo | Đơn vị đối tác làm hồ sơ |",
      "## Tiền đi đường nào",
      "Ở Platform, đường đi ngắn: khách trả, doanh thu vào ví, Green SM trừ phần của nền tảng, tài xế rút phần còn lại.",
      "Ở Partner, có thêm một bước đối soát. Với các HTX trong hệ thống EV Green, trong đó có HTX Vận tải Vũng Tàu EV, mỗi kỳ EV Green lấy số liệu các cuốc đã hoàn thành từ nền tảng và tính phần tài xế được hưởng theo tỷ lệ HTX đã thông báo. Bảng tính cộng thêm tiền boa nếu có, trừ phí xử lý giao dịch không dùng tiền mặt, rồi trừ số tiền mặt tài xế đã thu trực tiếp của khách. Kết quả dương thì HTX chuyển thêm cho tài xế. Âm thì tài xế đóng lại cho HTX.",
      "Tài xế xem phiếu đối soát từng kỳ trong ứng dụng tài xế tại co-ev.vn/taixe. Thấy cuốc nào lệch thì gửi yêu cầu kiểm tra ngay trong ứng dụng.",
      "## So tiền thực nhận, đừng so phần trăm",
      "Trên mạng, con số cho hai hình thức lệch nhau khá nhiều. Platform được ghi 80%, 80/20, \"không cố định\" hay 87% tùy bài và tùy thời điểm. Partner được ghi từ 75/25 sau thuế tới \"lên đến 88%\". Cách duy nhất để so là tính tiền về tay:",
      "Tiền thực nhận = doanh thu các cuốc − phần nền tảng hoặc đơn vị giữ lại − các khoản phí khác (nếu có) − tiền mặt đã thu của khách.",
      "Một tỷ lệ cao hơn vài phần trăm chưa chắc cho thu nhập cao hơn, nếu đơn vị đó thu thêm phí quản lý hay trả tiền chậm.",
      "## Năm câu nên hỏi trước khi ký với một đơn vị Partner",
      "1. Tỷ lệ chia sẻ tính trên khoản nào: doanh thu trước hay sau thuế, có tính tiền boa không?\n2. Ngoài tỷ lệ đó còn phí gì nữa: phí quản lý, phí hồ sơ, phí thiết bị định vị?\n3. Đối soát mấy ngày một lần, và mấy ngày sau đối soát thì tiền về tài khoản?\n4. Tài khoản bị báo lỗi hay bị tạm khóa thì ai làm việc với Green SM, trong bao lâu?\n5. Hợp đồng ghi những gì khi tài xế muốn dừng: báo trước bao lâu, chuyển biển số và phù hiệu ra sao?",
      "Đơn vị làm ăn đàng hoàng sẽ trả lời bằng văn bản.",
      "## Cách nhận ra một đơn vị Partner đáng tin",
      "Trong các nhóm tài xế trên Facebook có rất nhiều lời mời \"mở app Partner sau 5 phút\", \"nhận tài khoản bị khóa vĩnh viễn\", \"1 xe 2 tài\". Đó là những lời hứa không đơn vị nào giữ được, vì việc duyệt tài khoản và xe vẫn do Green SM quyết định.",
      "Trước khi ký, hãy xem đơn vị có các điểm sau. Có tên pháp nhân và mã số tra được trên cổng thông tin đăng ký doanh nghiệp. Ký hợp đồng bằng giấy, ghi rõ tỷ lệ và lịch trả tiền. Xe mang biển vàng và phù hiệu đứng tên chính đơn vị đó. Mỗi kỳ có phiếu đối soát chi tiết đến từng cuốc.",
      "## Nên chọn Platform hay Partner",
      "Chọn Platform nếu bạn đã quen chạy dịch vụ, tự lo được biển vàng và phù hiệu, và muốn tiền vào ví của mình ngay sau mỗi cuốc. Platform cũng hợp với người chạy bán thời gian, không muốn ràng buộc hợp đồng với đơn vị nào.",
      "Chọn Partner nếu bạn mới chạy, cần một đơn vị lo hồ sơ xe kinh doanh vận tải và đứng ra làm việc với Green SM khi có chuyện, và chấp nhận nhận tiền theo kỳ đối soát. Với người vừa mua xe trả góp, có đơn vị lo trọn hồ sơ thường đỡ mất thời gian chờ xe được đưa vào chạy.",
      "## Chạy Green SM Partner cùng HTX Vận tải Vũng Tàu EV",
      "HTX Vận tải Vũng Tàu EV, mã số 3502591697, trụ sở 1218 Phạm Hùng, Khu phố Phước Hạnh, Phường Bà Rịa, TP Hồ Chí Minh, là đối tác Green SM Partner cho tài xế ở Vũng Tàu, Bà Rịa và Phú Mỹ. HTX làm hồ sơ biển vàng, phù hiệu xe hợp đồng, đăng ký đối tác Green SM, và đối soát cuốc xe hằng kỳ qua hệ thống của EV Green.",
      "Gọi tổng đài 0969 99 11 77 hoặc để lại số ở trang [đăng ký Green SM Partner](/dang-ky-green-sm). Nhân viên gửi bảng tỷ lệ chia sẻ và lịch đối soát đang áp dụng trước khi bạn ký. Chưa có xe thì xem [mua xe VinFast biển vàng tại Vũng Tàu](/mua-xe-vinfast-bien-vang-vung-tau).",
      "## Câu hỏi thường gặp",
      "### Đang chạy Platform có chuyển sang Partner được không?",
      "Hỏi được, nhưng tùy tình trạng tài khoản và chính sách của Green SM lúc đó. Nhân viên HTX kiểm tra từng trường hợp; không ai hứa chắc được trước khi Green SM duyệt.",
      "### Tài khoản Platform bị khóa thì chạy Partner được không?",
      "Còn tùy lý do khóa. Đơn vị nào hứa mở lại mọi tài khoản bị khóa, không cần biết lý do, là đơn vị nên tránh.",
      "### Chạy Partner thì tiền mặt khách trả xử lý thế nào?",
      "Tài xế giữ tiền mặt đã thu. Khi đối soát, số tiền mặt này được trừ vào phần tài xế được hưởng; nếu tiền mặt đã thu nhiều hơn phần được hưởng thì tài xế đóng lại phần chênh cho HTX.",
      "### Tỷ lệ chia sẻ của HTX Vận tải Vũng Tàu EV là bao nhiêu?",
      "Tỷ lệ ghi trong hợp đồng và có thể thay đổi theo chính sách của Green SM. Gọi 0969 99 11 77 để nhận bảng đang áp dụng.",
      "*Cập nhật ngày 30/10/2026. Số liệu Green SM Platform lấy từ trang greensm.com/vn-vi/driver-platform ngày 29/10/2026.*",
    ],
  },
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

/** Các cặp "### câu hỏi" + đoạn trả lời nằm sau mục "## Câu hỏi thường gặp", để khai báo FAQPage. */
export function faqOf(post: Post) {
  const start = post.content.findIndex((b) => b === "## Câu hỏi thường gặp");
  if (start < 0) return [];
  const faq: { question: string; answer: string }[] = [];
  for (let i = start + 1; i < post.content.length; i++) {
    const b = post.content[i];
    if (b.startsWith("## ")) break;
    const next = post.content[i + 1];
    if (b.startsWith("### ") && next && !next.startsWith("#")) {
      faq.push({ question: b.slice(4), answer: next.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") });
    }
  }
  return faq;
}
