import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COLUMN_ARTICLES } from "@/data/column";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FAQ_ITEMS } from "@/data/faq";
import FaqSection from "@/components/ui/FaqSection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COLUMN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = COLUMN_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: `記事が見つかりません | ${SITE_NAME}` };

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    alternates: { canonical: `${SITE_URL}/column/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/column/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: article.image, width: 1200, height: 630 }],
    },
  };
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default async function ColumnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = COLUMN_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = COLUMN_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);
  const relatedFaqs = FAQ_ITEMS.slice(0, 4);

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    image: article.image,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "専門コラム", href: "/column" },
            { label: article.title },
          ]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs border border-igusa/40 text-igusa px-2 py-0.5">{article.category}</span>
            <span className="text-xs text-white/40">{formatDate(article.publishedAt)}</span>
            <span className="text-xs text-white/30">読了約{article.readTime}分</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl text-white leading-snug"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
              <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>

            <div className="bg-kiji/40 border-l-2 border-kincya p-5 mb-8">
              <p className="text-sm text-sumi/80 leading-relaxed">{article.excerpt}</p>
            </div>

            <div className="prose-tatami space-y-6 text-sm text-sumi/80 leading-relaxed">
              <p>
                このコラムは畳・内装のプロフェッショナルが監修した専門コンテンツです。
                実際の施工経験をもとに、正確でわかりやすい情報をお届けします。
              </p>
              <h2>はじめに</h2>
              <p>
                {article.excerpt}
                詳細な内容は随時追記・更新しています。ご不明な点はお気軽にお問い合わせください。
              </p>
              <h2>専門家のポイント</h2>
              <p>
                畳の施工には素材・工法・現場状況により最適な方法が異なります。
                日本畳パートナーズでは、現地確認を通じて最適な提案をいたします。
              </p>
              <p>
                一般住宅から旅館・寺社・店舗・賃貸物件まで、幅広い施工実績から得た知見を
                このコラムで発信しています。参考にしていただければ幸いです。
              </p>
              <h2>まとめ</h2>
              <p>
                詳しくご相談いただきたい場合は、無料で現地確認・お見積もりを承ります。
                お電話・フォーム・LINEからお気軽にご連絡ください。
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs border border-border text-sumi/50 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>

            {/* 関連FAQ */}
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>関連するよくある質問</h2>
              <div className="bg-white border border-border px-5 py-1">
                <FaqSection items={relatedFaqs} />
              </div>
              <div className="mt-4 text-right">
                <Link href="/faq" className="text-xs text-ai hover:underline">すべてのFAQを見る →</Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>無料見積もり</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                畳の張替え・内装工事・原状回復のご相談はお気軽に。現地確認無料。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                無料見積もりを依頼する
              </Link>
            </div>

            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
              <ul className="space-y-2">
                {[
                  { label: "畳表替え", href: "/services/tatami-omotegae" },
                  { label: "畳新調", href: "/services/tatami-shinchou" },
                  { label: "和紙畳", href: "/services/washi-tatami" },
                  { label: "内装工事", href: "/interior" },
                  { label: "原状回復", href: "/restoration" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-ai hover:underline">— {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連コラム</h3>
              <ul className="space-y-3">
                {related.map((rel) => (
                  <li key={rel.slug}>
                    <Link href={`/column/${rel.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-snug block">
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/column" className="text-sm text-sumi/60 hover:text-sumi transition-colors">
            ← コラム一覧に戻る
          </Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}
