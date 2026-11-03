import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { PostBody } from "@/components/PostBody";
import { faqOf, getPostBySlug, posts, relatedPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.seoTitle ?? post.title,
    description: post.seoDescription ?? post.excerpt,
    alternates: { canonical: `/tin-tuc/${post.slug}` },
  };
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Người viết bài: biên tập viên chung của hệ thống EV Green, trang tác giả nằm bên co-ev.vn
const author = { name: "BTV HO", url: "https://co-ev.vn/tac-gia/btv-ho" };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faq = faqOf(post);
  const related = relatedPosts(post);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: author.name, url: author.url },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/tin-tuc/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "Tin tức", path: "/tin-tuc" },
          { name: post.title, path: `/tin-tuc/${post.slug}` },
        ]}
      />
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            }).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <nav aria-label="Đường dẫn" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-ocean hover:underline">
          Trang chủ
        </Link>
        <span aria-hidden="true" className="mx-2 text-slate-400">
          /
        </span>
        <Link href="/tin-tuc" className="font-semibold text-ocean hover:underline">
          Tin tức
        </Link>
        <span aria-hidden="true" className="mx-2 text-slate-400">
          /
        </span>
        <span aria-current="page" className="text-slate-600">
          {post.title}
        </span>
      </nav>

      <span className="mt-6 inline-block w-fit rounded-full bg-tint-strong px-2.5 py-0.5 text-xs font-semibold text-ocean-deep">
        {post.category}
      </span>
      <h1 className="mt-4 text-[clamp(1.75rem,3.6vw,2.25rem)] font-semibold leading-[1.15] text-navy">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true" className="mx-2">
          ·
        </span>
        Người viết:{" "}
        <a href={author.url} rel="author" className="font-semibold text-slate-500 hover:text-ocean hover:underline">
          {author.name}
        </a>
      </p>

      <PostBody content={post.content} />

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="font-semibold text-dark">
          Cần tư vấn thêm về xe điện chạy dịch vụ?
        </p>
        <Link
          href="/lien-he"
          className="gradient-primary mt-4 inline-flex h-11 items-center rounded-lg px-5 text-sm font-semibold text-white"
        >
          Liên Hệ HTX Vũng Tàu EV
        </Link>
      </div>

      {related.length > 0 && (
        <section className="mt-12 border-t border-slate-200 pt-8" aria-labelledby="bai-lien-quan">
          <h2 id="bai-lien-quan" className="text-[1.4rem] font-semibold leading-snug text-navy">
            Bài liên quan
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/tin-tuc/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-sky"
                >
                  <span className="text-xs font-semibold text-ocean-deep">{p.category}</span>
                  <span className="mt-2 flex-1 font-semibold leading-snug text-dark group-hover:text-primary">
                    {p.title}
                  </span>
                  <span className="mt-3 text-xs text-slate-400">{formatDate(p.date)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
