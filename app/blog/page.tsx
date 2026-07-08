import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { getAllPosts, getUsedCategories, formatDate } from "@/lib/blog";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `ブログ｜畳・和室リフォームの解説記事 | ${SITE_NAME}`,
  description:
    "畳の表替え・新調・裏返し、和室リフォーム、原状回復、畳のお手入れまで。埼玉・関東エリアの住まいに役立つ畳の情報を毎日更新でお届けします。",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getUsedCategories();

  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "ブログ" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Blog</p>
          <h1
            className="text-3xl sm:text-4xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            畳・和室の解説ブログ
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳の表替え・新調・裏返し、和室リフォーム、原状回復、日々のお手入れまで。
            埼玉・関東エリアの住まいに役立つ情報をお届けします。
          </p>
        </div>
      </section>

      {/* カテゴリナビ */}
      {categories.length > 0 && (
        <section className="bg-kiji/40 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
              >
                {c.name}
                <span className="text-sumi/40 ml-1">({c.count})</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-sm text-sumi/50 text-center py-20">
              記事は準備中です。まもなく公開します。
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col border border-border bg-white hover:border-kincya/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
                >
                  {/* 画像の代わりに和柄ヘッダー（記事ごとの画像を必要としない設計） */}
                  <div className="relative h-32 bg-sumi overflow-hidden flex items-end p-4">
                    <div className="absolute inset-0 tatami-pattern opacity-20" />
                    <span className="relative text-xs text-kincya tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs text-sumi/40 mb-2">{formatDate(post.date)}</span>
                    <h2
                      className="text-base text-sumi mb-2 leading-snug group-hover:text-ai transition-colors duration-200"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-xs text-sumi/60 leading-relaxed flex-1 line-clamp-3">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] text-igusa border border-igusa/30 px-1.5 py-0.5">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 専門コラムへの導線（既存ページを維持） */}
      <div className="py-8 bg-kiji/40 text-center">
        <p className="text-sm text-sumi/60 mb-4">
          畳・内装の知識を体系的にまとめた専門コラムも公開しています。
        </p>
        <Link
          href="/column"
          className="inline-block border border-sumi text-sumi text-sm px-8 py-3 tracking-wider hover:bg-sumi hover:text-white transition-all duration-300"
        >
          専門コラムを読む →
        </Link>
      </div>

      <CTASection />
    </>
  );
}
