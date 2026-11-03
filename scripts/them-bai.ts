// Thêm một bài viết từ file Markdown vào đầu mảng posts trong src/lib/posts.ts.
//   npx tsx scripts/them-bai.ts bai-nhap/<file>.md
//
// Phần đầu file (giữa hai dòng ---), mỗi dòng "khóa: giá trị", giá trị có thể để trong ngoặc kép:
//   slug         bắt buộc, chữ thường không dấu nối bằng "-"
//   tieu-de      bắt buộc, tiêu đề hiện trên trang (h1)
//   tom-tat      bắt buộc, đoạn tóm tắt (excerpt)
//   chuyen-muc   bắt buộc, ví dụ "Kinh nghiệm chạy dịch vụ"
//   tieu-de-seo  tùy chọn, tiêu đề cho Google khi khác tiêu đề
//   mo-ta-seo    tùy chọn, mô tả cho Google khi khác đoạn tóm tắt
//   ngay         tùy chọn, YYYY-MM-DD, mặc định hôm nay theo giờ Việt Nam
//
// Thân bài viết theo cú pháp PostBody hiểu: "## " mục, "### " mục nhỏ, dòng "- " danh sách,
// "1. " danh sách số, dòng "|" bảng, "*...*" ghi chú; trong dòng có [chữ](/link) và **đậm**.
// Các khối cách nhau bằng dòng trống.

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(process.argv[1]), "..");
const POSTS_FILE = path.join(ROOT, "src", "lib", "posts.ts");
const SITE = "https://vungtauev.vn";

function fail(msg: string): never {
  console.error(`Lỗi: ${msg}`);
  process.exit(1);
}

function homNay() {
  // en-CA cho dạng YYYY-MM-DD
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Ho_Chi_Minh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function tachPhanDau(text: string) {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(text);
  if (!m) fail("file phải mở đầu bằng phần đầu nằm giữa hai dòng ---");
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const kv = /^([a-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!kv) fail(`không đọc được dòng phần đầu: ${line}`);
    let value = kv[2].trim();
    if (/^".*"$/.test(value)) value = JSON.parse(value) as string;
    else if (/^'.*'$/.test(value)) value = value.slice(1, -1).replace(/''/g, "'");
    meta[kv[1]] = value;
  }
  return { meta, body: m[2] };
}

type Loai = "tieu-de" | "ul" | "ol" | "bang" | "van";

function loaiDong(line: string): Loai {
  if (/^#{2,3} /.test(line)) return "tieu-de";
  if (line.startsWith("- ")) return "ul";
  if (/^\d+\. /.test(line)) return "ol";
  if (line.startsWith("|")) return "bang";
  return "van";
}

/** Tách thân bài thành các khối: dòng trống ngắt khối; danh sách và bảng giữ nguyên từng dòng trong một khối. */
function tachKhoi(body: string) {
  const blocks: string[] = [];
  let cur: string[] = [];
  let loai: Loai | null = null;
  const dong = () => {
    if (cur.length === 0) return;
    blocks.push(loai === "van" ? cur.join(" ") : cur.join("\n"));
    cur = [];
    loai = null;
  };

  for (const raw of body.split("\n")) {
    let line = raw.trimEnd();
    if (!line.trim()) {
      dong();
      continue;
    }
    if (/^# /.test(line)) {
      console.warn(`Bỏ dòng tiêu đề cấp 1 (tiêu đề đã lấy từ tieu-de): ${line}`);
      continue;
    }
    // Danh sách viết bằng "* " hay "+ " đổi thành "- " cho PostBody hiểu
    line = line.replace(/^[*+] (?=\S)/, "- ");
    const l = loaiDong(line);
    // Dòng thụt đầu nối tiếp mục danh sách phía trên
    if ((loai === "ul" || loai === "ol") && l === "van" && /^\s/.test(raw)) {
      cur[cur.length - 1] += ` ${line.trim()}`;
      continue;
    }
    line = line.trim();
    if (l === "tieu-de") {
      dong();
      blocks.push(line);
      continue;
    }
    if (loai !== null && loai !== l) dong();
    loai = l;
    cur.push(line);
  }
  dong();
  return blocks;
}

const chuoi = (s: string) => JSON.stringify(s);

function main() {
  const file = process.argv[2];
  if (!file) fail("thiếu đường dẫn file. Cách dùng: npx tsx scripts/them-bai.ts bai-nhap/<file>.md");
  if (!fs.existsSync(file)) fail(`không thấy file ${file}`);

  const text = fs.readFileSync(file, "utf8").replace(/^﻿/, "").replace(/\r\n?/g, "\n");
  const { meta, body } = tachPhanDau(text);

  const known = ["slug", "tieu-de", "tieu-de-seo", "mo-ta-seo", "tom-tat", "chuyen-muc", "ngay"];
  for (const k of Object.keys(meta)) {
    if (!known.includes(k)) console.warn(`Bỏ qua khóa "${k}" (Post không có trường tương ứng).`);
  }

  for (const k of ["slug", "tieu-de", "tom-tat", "chuyen-muc"]) {
    if (!meta[k]) fail(`thiếu khóa bắt buộc "${k}" trong phần đầu`);
  }
  const slug = meta.slug;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail(`slug "${slug}" chỉ được có chữ thường không dấu, số và dấu "-"`);
  const date = meta.ngay || homNay();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) fail(`ngay "${date}" phải có dạng YYYY-MM-DD`);

  const content = tachKhoi(body);
  if (content.length === 0) fail("thân bài trống");

  const src = fs.readFileSync(POSTS_FILE, "utf8");
  const eol = src.includes("\r\n") ? "\r\n" : "\n";
  const slugs = [...src.matchAll(/^ {4}slug: "([^"]+)",/gm)].map((m) => m[1]);
  if (slugs.includes(slug)) fail(`slug "${slug}" đã có trong src/lib/posts.ts`);

  const categories = [...new Set([...src.matchAll(/^ {4}category: "([^"]+)",/gm)].map((m) => m[1]))];
  if (!categories.includes(meta["chuyen-muc"])) {
    console.warn(`Chú ý: chuyên mục mới "${meta["chuyen-muc"]}". Chuyên mục đang có: ${categories.join(", ")}.`);
  }

  const lines = [
    "  {",
    `    slug: ${chuoi(slug)},`,
    `    title: ${chuoi(meta["tieu-de"])},`,
    ...(meta["tieu-de-seo"] ? [`    seoTitle: ${chuoi(meta["tieu-de-seo"])},`] : []),
    ...(meta["mo-ta-seo"] ? [`    seoDescription: ${chuoi(meta["mo-ta-seo"])},`] : []),
    "    excerpt:",
    `      ${chuoi(meta["tom-tat"])},`,
    `    date: ${chuoi(date)},`,
    `    category: ${chuoi(meta["chuyen-muc"])},`,
    "    content: [",
    ...content.map((b) => `      ${chuoi(b)},`),
    "    ],",
    "  },",
  ];

  const marker = "export const posts: Post[] = [";
  const at = src.indexOf(marker);
  if (at < 0) fail(`không tìm thấy "${marker}" trong src/lib/posts.ts`);
  const insertAt = src.indexOf("\n", at) + 1;
  const out = src.slice(0, insertAt) + lines.join(eol) + eol + src.slice(insertAt);
  fs.writeFileSync(POSTS_FILE, out, "utf8");

  const url = `${SITE}/tin-tuc/${slug}`;
  console.log(`Đã thêm bài "${meta["tieu-de"]}" (${content.length} khối, ngày ${date}) vào đầu src/lib/posts.ts.`);
  if (meta["tieu-de-seo"] && meta["tieu-de-seo"].length > 60) console.warn(`Chú ý: tieu-de-seo dài ${meta["tieu-de-seo"].length} ký tự (nên dưới 60).`);
  if (meta["mo-ta-seo"] && meta["mo-ta-seo"].length > 160) console.warn(`Chú ý: mo-ta-seo dài ${meta["mo-ta-seo"].length} ký tự (nên dưới 160).`);
  console.log("");
  console.log("Tiếp theo: kiểm tra (npx tsc --noEmit, npm run build), commit, push. Đợi Vercel build xong, rồi chạy:");
  console.log(`  npx tsx scripts/indexnow.ts ${url} ${SITE}/tin-tuc`);
}

main();
