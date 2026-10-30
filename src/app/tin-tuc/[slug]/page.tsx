import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/PostBody";
import { faqOf, getPostBySlug, posts } from "@/lib/posts";
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faq = faqOf(post);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/tin-tuc/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            }),
          }}
        />
      )}
      <Link
        href="/tin-tuc"
        className="text-sm font-semibold text-ocean hover:underline"
      >
        ← Quay lại Tin tức
      </Link>

      <span className="mt-6 inline-block w-fit rounded-full bg-tint-strong px-2.5 py-0.5 text-xs font-semibold text-ocean-deep">
        {post.category}
      </span>
      <h1 className="mt-4 text-[clamp(1.75rem,3.6vw,2.25rem)] font-semibold leading-[1.15] text-navy">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-400">{formatDate(post.date)}</p>

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
    </article>
  );
}
