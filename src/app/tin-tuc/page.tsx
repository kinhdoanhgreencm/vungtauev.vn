import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tin Tức Xe Điện & Kinh Nghiệm Chạy Dịch Vụ Tại Vũng Tàu",
  description:
    "Cập nhật tin tức trạm sạc, kinh nghiệm chạy taxi điện, so sánh chi phí xe xăng và xe điện chạy dịch vụ tại Vũng Tàu.",
  alternates: { canonical: "/tin-tuc" },
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tin tức & kinh nghiệm"
        title="Tin Tức Xe Điện & Kinh Nghiệm Chạy Dịch Vụ"
        description="Cập nhật hạ tầng trạm sạc, kinh nghiệm chạy xe và so sánh chi phí vận hành xe điện tại Bà Rịa - Vũng Tàu."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                href={`/tin-tuc/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-lg"
              >
                <span className="inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {post.category}
                </span>
                <h2 className="mt-4 text-lg font-bold text-dark group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-slate-400">
                  {formatDate(post.date)}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
