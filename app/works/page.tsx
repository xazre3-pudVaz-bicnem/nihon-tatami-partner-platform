import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { WORKS_DETAIL, WORK_CATEGORIES } from "@/data/works-detail";
import WorksFilter from "@/components/ui/WorksFilter";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `施工事例 | 畳・襖・障子・内装・原状回復の実績 | ${SITE_NAME}`,
  description: "住宅・賃貸・旅館・寺社・店舗・オフィスなど多様な施工事例を掲載。畳表替え・新調、襖障子張替え、内装工事、原状回復の実績を課題・提案・施工内容とともにご紹介します。",
  path: "/works",
});

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
            住宅・賃貸・旅館・寺社・店舗・オフィスなど、さまざまな施工実績をご紹介します。
            各事例では、ご相談内容・ご提案・施工内容・施工後の変化を詳しくご覧いただけます。
          </p>
        </div>
      </section>

      <WorksFilter works={WORKS_DETAIL} categories={WORK_CATEGORIES} />

      <CTASection
        title="施工のご相談はお気軽に"
        subtitle="写真や図面をお持ちいただくと、よりスムーズにご提案できます。まずはお問い合わせください。"
      />
    </>
  );
}
