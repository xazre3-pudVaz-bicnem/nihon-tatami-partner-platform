import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";
import ColumnFilter from "@/components/ui/ColumnFilter";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `専門コラム | 畳・内装・原状回復の専門知識 | ${SITE_NAME}`,
  description: "畳の表替え・裏返し・新調の違い、素材選び、賃貸物件の空室対策、旅館・寺院の畳整備など。畳・内装のプロが書く専門コラム。",
  path: "/column",
});

const COLUMN_LIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "畳・内装・原状回復 専門コラム一覧",
  description: "畳工事・内装・原状回復に関する専門コラム記事一覧",
  url: `${SITE_URL}/column`,
  numberOfItems: COLUMN_ARTICLES.length,
  itemListElement: COLUMN_ARTICLES.map((article, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Article",
      name: article.title,
      url: `${SITE_URL}/column/${article.slug}`,
      description: article.excerpt,
      datePublished: article.publishedAt,
    },
  })),
};

export default function ColumnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COLUMN_LIST_SCHEMA) }} />
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "専門コラム" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Knowledge Column</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            専門コラム
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳・内装・原状回復のプロが書く、信頼性の高い専門コンテンツ。
            素材選び・施工タイミング・法人向け活用まで、役立つ情報をまとめています。
          </p>
        </div>
      </section>

      {/* Interactive category filter + article grid (client component) */}
      <ColumnFilter articles={COLUMN_ARTICLES} />

      <div className="py-8 bg-kiji/40 text-center">
        <p className="text-sm text-sumi/60 mb-3">日々の施工レポートはブログで公開しています。</p>
        <a href="/blog" className="text-sm text-ai hover:underline">ブログ・施工レポートを見る →</a>
      </div>

      <CTASection />
    </>
  );
}
