import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { getPosts, formatDate, getFeaturedImage, stripHtml } from "@/lib/wp";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `ブログ・施工レポート | ${SITE_NAME}`,
  description: "畳工事・内装工事・原状回復の施工レポート、お知らせ、スタッフブログ。日本畳パートナーズの最新情報をお届けします。",
  path: "/blog",
});

export default async function BlogPage() {
  const { posts } = await getPosts({ per_page: 12 });

  const FALLBACK_POSTS = [
    { slug: "sample-01", date: "2025-08-01", title: "夏の繁忙期前に旅館客室8室の畳表替えを実施", excerpt: "お盆前の旅館からのご依頼で、客室8室・64枚の畳表替えを実施しました。", image: "/images/blog-placeholder.jpg", category: "施工レポート" },
    { slug: "sample-02", date: "2025-07-15", title: "賃貸マンションの退去後原状回復（和紙畳へ変更）", excerpt: "管理会社様からのご依頼で、退去後の原状回復を実施。ペット可物件にするため和紙畳への変更もご提案しました。", image: "/images/blog-placeholder.jpg", category: "施工レポート" },
    { slug: "sample-03", date: "2025-07-01", title: "寺院の本堂・客殿の畳新調工事が完成", excerpt: "築50年の寺院の本堂と客殿の畳を新調。法要前に間に合うよう施工スケジュールを調整しました。", image: "/images/blog-placeholder.jpg", category: "施工レポート" },
    { slug: "sample-04", date: "2025-06-20", title: "お盆前の畳替えのご依頼を承っています", excerpt: "お盆前に畳をきれいにしたい方、旅館・宿泊施設の定期整備をご検討の方、お気軽にご相談ください。", image: "/images/blog-placeholder.jpg", category: "お知らせ" },
  ];

  const displayPosts = posts.length > 0 ? posts.map((p) => ({
    slug: p.slug,
    date: formatDate(p.date),
    title: p.title.rendered,
    excerpt: stripHtml(p.excerpt.rendered).slice(0, 100) + "...",
    image: getFeaturedImage(p),
    category: "ブログ",
  })) : FALLBACK_POSTS.map((p) => ({ ...p, date: new Date(p.date).toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" }) }));

  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "ブログ" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Blog / News</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            ブログ・施工レポート
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            施工レポート・お知らせ・スタッフブログ。日々の業務から役立つ情報までお届けします。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col border border-border bg-white hover:border-kincya/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
              >
                <div className="relative h-44 bg-kiji overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs border border-igusa/30 text-igusa px-2 py-0.5">{post.category}</span>
                    <span className="text-xs text-sumi/40">{post.date}</span>
                  </div>
                  <h2 className="text-sm text-sumi mb-2 leading-snug group-hover:text-ai transition-colors duration-200" style={{ fontFamily: "var(--font-serif)" }}>
                    {post.title}
                  </h2>
                  <p className="text-xs text-sumi/60 leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-xs text-sumi/40 text-center mt-8">
              ※ WordPressブログとの連携後、実際の投稿が表示されます。
            </p>
          )}
        </div>
      </section>

      <div className="py-8 bg-kiji/40 text-center">
        <p className="text-sm text-sumi/60 mb-4">専門的な畳・内装の知識をまとめた解説コラムも公開しています。</p>
        <Link href="/column" className="inline-block border border-sumi text-sumi text-sm px-8 py-3 tracking-wider hover:bg-sumi hover:text-white transition-all duration-300">
          専門コラムを読む →
        </Link>
      </div>

      <CTASection />
    </>
  );
}
