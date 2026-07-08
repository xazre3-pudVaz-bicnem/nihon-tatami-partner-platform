import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import {
  BLOG_CATEGORIES,
  categorySlugToName,
  getPostsByCategory,
  getUsedCategories,
  formatDate,
} from "@/lib/blog";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  // 記事が存在するカテゴリのみ静的生成
  return getUsedCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = categorySlugToName(category);
  if (!name) return { title: `カテゴリが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${name}の記事一覧｜ブログ | ${SITE_NAME}`,
    description: `${name}に関する記事の一覧です。畳・和室リフォーム・原状回復について、埼玉・関東エリアの住まいに役立つ情報をお届けします。`,
    path: `/blog/category/${category}`,
  });
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const name = categorySlugToName(category);
  if (!name) notFound();

  const posts = getPostsByCategory(name);
  const categories = getUsedCategories();

  return (
    <>
      <section className="bg-sumi py-16 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "ブログ", href: "/blog" }, { label: name }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Category</p>
          <h1
            className="text-2xl sm:text-3xl text-white mb-3"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            {name}
          </h1>
          <p className="text-sm text-white/60">{name}に関する記事の一覧です。</p>
        </div>
      </section>

      {/* カテゴリナビ */}
      {categories.length > 0 && (
        <section className="bg-kiji/40 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
            >
              すべて
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className={`text-xs border px-3 py-1.5 transition-colors ${
                  c.slug === category
                    ? "bg-ai text-white border-ai"
                    : "bg-white border-border text-sumi/70 hover:border-ai hover:text-ai"
                }`}
              >
                {c.name}
                <span className={c.slug === category ? "text-white/60 ml-1" : "text-sumi/40 ml-1"}>({c.count})</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-sm text-sumi/50 text-center py-20">このカテゴリの記事は準備中です。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col border border-border bg-white hover:border-kincya/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
                >
                  <div className="relative h-32 bg-sumi overflow-hidden flex items-end p-4">
                    <div className="absolute inset-0 tatami-pattern opacity-20" />
                    <span className="relative text-xs text-kincya tracking-wider">{post.category}</span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-sumi/40 mb-2">{formatDate(post.date)}</span>
                    <h2
                      className="text-base text-sumi mb-2 leading-snug group-hover:text-ai transition-colors duration-200"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-xs text-sumi/60 leading-relaxed flex-1 line-clamp-3">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
