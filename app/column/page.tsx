import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";
import ColumnCard from "@/components/ui/ColumnCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `専門コラム | 畳・内装・原状回復の専門知識 | ${SITE_NAME}`,
  description: "畳の表替え・裏返し・新調の違い、素材選び、賃貸物件の空室対策、旅館・寺院の畳整備など。畳・内装のプロが書く専門コラム。",
  path: "/column",
});

const CATEGORIES = [...new Set(COLUMN_ARTICLES.map((a) => a.category))];

export default function ColumnPage() {
  return (
    <>
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

      <section className="py-8 bg-cloud/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <a href="#all" className="text-xs border border-sumi text-sumi px-4 py-1.5">すべて</a>
            {CATEGORIES.map((cat) => (
              <a key={cat} href={`#cat-${encodeURIComponent(cat)}`} className="text-xs border border-border text-sumi/60 px-4 py-1.5 hover:border-ai hover:text-ai transition-colors duration-200">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="all" className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {CATEGORIES.map((cat) => {
            const articles = COLUMN_ARTICLES.filter((a) => a.category === cat);
            if (articles.length === 0) return null;
            return (
              <div key={cat} id={`cat-${encodeURIComponent(cat)}`} className="scroll-mt-24">
                <h2 className="text-xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {articles.map((article, i) => (
                    <ColumnCard key={article.slug} article={article} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="py-8 bg-kiji/40 text-center">
        <p className="text-sm text-sumi/60 mb-3">日々の施工レポートはブログで公開しています。</p>
        <a href="/blog" className="text-sm text-ai hover:underline">ブログ・施工レポートを見る →</a>
      </div>

      <CTASection />
    </>
  );
}
