import Link from "next/link";
import Hero from "@/components/Hero";
import QuickRegisterForm from "@/components/QuickRegisterForm";
import { Icon, LineIcon, type IconName, type LineIconName } from "@/components/Icons";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

const PLATE_ITEMS: { t: string; d: string; icon: IconName }[] = [
  { t: "Biển số vàng", d: "Đăng ký xe kinh doanh vận tải", icon: "plate" },
  { t: "Phù hiệu vận tải", d: "Xe hợp đồng, taxi, xe công nghệ", icon: "badge" },
  { t: "Thiết bị định vị", d: "Giám sát hành trình theo quy định", icon: "pin" },
  { t: "Đăng ký Green SM", d: "Kết nối nền tảng sau khi nhận xe", icon: "app" },
];

const SERVICES = [
  {
    t: "VinFast Vũng Tàu - Bảng giá 2026",
    d: "Bảng giá VF3-VF9, Limo Green, đặt lịch lái thử, giao xe tận nơi.",
    href: "/vinfast-vung-tau",
    img: "/images/dich-vu/tu-van-chon-o-to-dien.webp",
  },
  {
    t: "Cấp phù hiệu và vào HTX",
    d: "Hồ sơ phù hiệu xe hợp đồng, xe công nghệ, định vị đúng quy định.",
    href: "/cap-phu-hieu-va-vao-htx",
    img: "/images/dich-vu/phu-hieu-van-tai.webp",
  },
  {
    t: "Mua xe VinFast biển vàng",
    d: "Hỗ trợ hồ sơ vay 80-85% giá trị xe, thủ tục lăn bánh biển vàng.",
    href: "/mua-xe-vinfast-bien-vang-vung-tau",
    img: "/images/dich-vu/ho-so-bien-so-vang.webp",
  },
  {
    t: "Đối tác Green SM Partner",
    d: "Đăng ký tài xế, chủ xe làm đối tác Green SM cùng HTX.",
    href: "/dang-ky-green-sm",
    img: "/images/dich-vu/dang-ky-nen-tang-van-tai.webp",
  },
];

const STEPS: { t: string; d: string; icon: LineIconName }[] = [
  { t: "Để lại số điện thoại", d: "Điền biểu mẫu hoặc gọi thẳng tổng đài.", icon: "phone" },
  { t: "HTX gọi lại", d: "Hỏi bạn chạy dịch vụ gì, xe đã có hay cần mua.", icon: "callback" },
  { t: "Chọn xe, lập danh sách hồ sơ", d: "Xe hợp cách chạy, kèm giấy tờ cần chuẩn bị.", icon: "car" },
  { t: "Làm hồ sơ vận doanh", d: "Biển vàng, phù hiệu, định vị, đăng ký Green SM.", icon: "docs" },
];

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function HomePage() {
  const latest = posts.slice(0, 3);
  return (
    <>
      <Hero />

      {/* Mở đầu: tiêu đề hai cột và bốn thẻ hồ sơ vận doanh */}
      <section className="h-sec" aria-labelledby="ho-so">
        <div className="wrap">
          <div className="h-head">
            <div>
              <p className="h-eyebrow">Việc Vũng Tàu EV hỗ trợ</p>
              <h2 id="ho-so">
                Đủ hồ sơ vận doanh
                <br />
                là xe chạy được
              </h2>
            </div>
            <p className="h-lead">
              Vũng Tàu EV là hợp tác xã vận tải đứng tên xe cho tài xế ô tô điện ở Bà Rịa - Vũng Tàu. Chúng tôi tư vấn
              mua xe VinFast biển vàng, rồi cùng bạn làm đủ giấy tờ để xe chạy dịch vụ.
            </p>
          </div>
          <ul className="h-cards4">
            {PLATE_ITEMS.map((i) => (
              <li key={i.t}>
                <span className="h-badge">
                  <Icon name={i.icon} />
                </span>
                <strong>{i.t}</strong>
                <span>{i.d}</span>
              </li>
            ))}
          </ul>
          <p className="h-note">
            HTX hỗ trợ chuẩn bị hồ sơ. Việc cấp biển, phù hiệu hay chấp thuận tham gia nền tảng do cơ quan có thẩm quyền
            và từng nền tảng quyết định.
          </p>
        </div>
      </section>

      {/* Dải Navy cắt xiên: VEV trong hệ thống EV Green, trình bày như hai con dấu */}
      <section className="h-navy h-coop" aria-labelledby="he-thong">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="h-bg" src="/images/nen/doi-xe-bai-sac.webp" alt="" loading="lazy" decoding="async" />
        <div className="wrap">
          <div>
            <p className="h-eyebrow">Hệ thống hợp tác xã</p>
            <h2 id="he-thong">
              HTX tại Vũng Tàu,
              <br />
              một trụ sở điều hành chung
            </h2>
            <p>
              Vũng Tàu EV là đơn vị kinh doanh vận tải đứng tên xe. Công ty Cổ phần EV Green là trụ sở điều hành chung
              của hệ thống: tư vấn, hồ sơ, đối soát và hỗ trợ tài xế.
            </p>
            <Link className="h-pill" href="/lien-he">
              Liên hệ HTX <LineIcon name="arrow" />
            </Link>
          </div>
          <div className="h-org">
            <div className="h-seal h-seal--ho">
              <span className="h-seal-ring">
                <b>EV Green</b>
                <small>Trụ sở</small>
              </span>
              <strong>Trụ sở điều hành</strong>
              <span>Công ty Cổ phần EV Green</span>
            </div>
            <div className="h-seal">
              <span className="h-seal-ring h-seal-ring--logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-vev.png" alt="" width={76} height={66} />
              </span>
              <strong>{siteConfig.name}</strong>
              <span>MST {siteConfig.taxId}</span>
              <span className="h-seal-addr">{siteConfig.address}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Con số: chỉ dữ kiện có thật */}
      <section className="h-sec h-stats" aria-label="Vũng Tàu EV trong vài con số">
        <div className="wrap">
          <div>
            <p className="h-eyebrow">Vũng Tàu EV</p>
            <h2>
              Một đầu mối
              <br />
              cho cả hồ sơ xe
            </h2>
          </div>
          <dl>
            <div>
              <LineIcon name="pinMap" />
              <dt>Khu vực phục vụ</dt>
              <dd>{String(siteConfig.areaServed.length).padStart(2, "0")}</dd>
            </div>
            <div>
              <LineIcon name="docs" />
              <dt>Loại hồ sơ vận doanh</dt>
              <dd>{String(PLATE_ITEMS.length).padStart(2, "0")}</dd>
            </div>
            <div>
              <LineIcon name="steps" />
              <dt>Bước đến lúc xe chạy</dt>
              <dd>{String(STEPS.length).padStart(2, "0")}</dd>
            </div>
            <div>
              <LineIcon name="headset" />
              <dt>Tổng đài tư vấn</dt>
              <dd className="num">{siteConfig.hotline}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="h-sec" aria-labelledby="dich-vu">
        <div className="wrap">
          <div className="h-row">
            <div>
              <p className="h-eyebrow">Dịch vụ</p>
              <h2 id="dich-vu">Dịch vụ cho tài xế và chủ xe điện</h2>
            </div>
            <Link className="h-more" href="/lien-he">
              Hỏi về dịch vụ khác <LineIcon name="arrow" />
            </Link>
          </div>
          <ul className="h-svc">
            {SERVICES.map((s, n) => (
              <li key={s.href}>
                <Link href={s.href}>
                  <span className="h-svc-art" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt="" loading="lazy" decoding="async" width={960} height={640} />
                    <i />
                    <i />
                    <b>{String(n + 1).padStart(2, "0")}</b>
                  </span>
                  <span className="h-tag">Dịch vụ</span>
                  <strong>{s.t}</strong>
                  <span className="h-svc-desc">{s.d}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quy trình: khối Navy cắt xiên bên trái, dòng thời gian bốn bước bên phải */}
      <section className="h-sec h-process" aria-labelledby="quy-trinh">
        <div className="h-process-panel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="h-bg" src="/images/nen/tai-xe-cam-sac.webp" alt="" loading="lazy" decoding="async" />
          <div>
            <p className="h-eyebrow">Quy trình</p>
            <h2 id="quy-trinh">Từ cuộc gọi đầu tiên đến lúc xe chạy</h2>
            <p>Mỗi người chạy một kiểu, nên danh sách hồ sơ được lập sau khi HTX nghe bạn mô tả cách làm việc.</p>
            <Link className="h-pill" href="/cap-phu-hieu-va-vao-htx">
              Xem thủ tục phù hiệu <LineIcon name="arrow" />
            </Link>
          </div>
        </div>
        <ol className="h-timeline">
          {STEPS.map((st, n) => (
            <li key={st.t}>
              <span className="h-dot">
                <LineIcon name={st.icon} />
              </span>
              <span className="h-step-n">{String(n + 1).padStart(2, "0")}</span>
              <strong>{st.t}</strong>
              <span>{st.d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="h-sec" aria-labelledby="tin-moi">
        <div className="wrap">
          <div className="h-row">
            <div>
              <p className="h-eyebrow">Tin tức</p>
              <h2 id="tin-moi">Kinh nghiệm chạy xe điện tại Vũng Tàu</h2>
            </div>
            <Link className="h-more" href="/tin-tuc">
              Tất cả tin tức <LineIcon name="arrow" />
            </Link>
          </div>
          <ul className="h-news">
            {latest.map((p) => (
              <li key={p.slug}>
                <Link href={`/tin-tuc/${p.slug}`}>
                  <span className="h-news-art" aria-hidden="true">
                    <i />
                    <i />
                  </span>
                  <span className="h-news-meta">
                    <span>{p.category}</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </span>
                  <h3>{p.title}</h3>
                  <span className="h-news-desc">{p.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="h-sec" aria-labelledby="dang-ky">
        <div className="wrap">
          <div className="h-cta">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-bg" src="/images/nen/tai-xe-dien-thoai.webp" alt="" loading="lazy" decoding="async" />
            <div>
              <p className="h-eyebrow">Dành cho tài xế</p>
              <h2 id="dang-ky">Muốn chạy xe điện biển vàng?</h2>
              <p>
                Để lại số điện thoại, HTX gọi lại tư vấn chọn xe, trả góp và hồ sơ phù hiệu. Hoặc gọi thẳng tổng đài{" "}
                {siteConfig.hotline}.
              </p>
            </div>
            <QuickRegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
