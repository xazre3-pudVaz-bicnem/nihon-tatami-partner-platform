import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { WORKS } from "@/data/works";
import WorksCard from "@/components/ui/WorksCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `施工事例 | 畳・内装・原状回復の施工実績 | ${SITE_NAME}`,
  description: "住宅・旅館・寺社・店舗・賃貸物件など多様な施工事例を紹介。畳表替え・新調・内装工事・原状回復の実績をご確認いただけます。",
  path: "/works",
});

const CATEGORIES = [
  { label: "すべて", value: "all" },
  { label: "住宅", value: "house" },
  { label: "旅館", value: "ryokan" },
  { label: "寺社", value: "temple" },
  { label: "店舗", value: "store" },
  { label: "賃貸", value: "rental" },
  { label: "不動産", value: "realestate" },
];

export default function WorksPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "施工事例" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Works</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            施工事例
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            住宅・旅館・寺社・店舗・賃貸物件など、さまざまな施工実績をご紹介します。
            将来的にはWordPressからの投稿と連携します。
          </p>
        </div>
      </section>

      <section className="py-8 bg-cloud/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                className="text-xs border border-border text-sumi/60 px-4 py-1.5 hover:border-ai hover:text-ai transition-colors duration-200 first:border-sumi first:text-sumi"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKS.map((work, i) => (
              <WorksCard key={work.id} work={work} index={i} />
            ))}
          </div>
          <p className="text-xs text-sumi/40 text-center mt-10">
            ※ 施工事例は順次更新予定です。WordPressブログとの連携後、より多くの事例を掲載します。
          </p>
        </div>
      </section>

      <CTASection
        title="施工のご相談はお気軽に"
        subtitle="写真や図面をお持ちいただくと、よりスムーズにご提案できます。まずはお問い合わせください。"
      />
    </>
  );
}
