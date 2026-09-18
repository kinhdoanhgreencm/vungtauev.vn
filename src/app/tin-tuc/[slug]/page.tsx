import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";
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
    title: post.title,
    description: post.excerpt,
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
      <Link
        href="/tin-tuc"
        className="text-sm font-semibold text-secondary hover:underline"
      >
        ← Quay lại Tin tức
      </Link>

      <span className="mt-6 inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
        {post.category}
      </span>
      <h1 className="mt-4 text-3xl font-extrabold text-dark sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 text-sm text-slate-400">{formatDate(post.date)}</p>

      <div className="mt-8 space-y-5">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
        <p className="font-semibold text-dark">
          Cần tư vấn thêm về xe điện chạy dịch vụ?
        </p>
        <Link
          href="/lien-he"
          className="gradient-primary mt-4 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
        >
          Liên Hệ HTX Vũng Tàu EV
        </Link>
      </div>
    </article>
  );
}
