import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
<<<<<<< HEAD
import { WORKS_DETAIL, WORK_CATEGORIES } from "@/data/works-detail";
import WorksFilter from "@/components/ui/WorksFilter";
=======
import { WORKS } from "@/data/works";
import type { FaqItem } from "@/data/faq";
import WorksCard from "@/components/ui/WorksCard";
>>>>>>> worktree-agent-a593ef458cd30cc49
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
<<<<<<< HEAD
  title: `施工事例 | 畳・襖・障子・内装・原状回復の実績 | ${SITE_NAME}`,
  description: "住宅・賃貸・旅館・寺社・店舗・オフィスなど多様な施工事例を掲載。畳表替え・新調、襖障子張替え、内装工事、原状回復の実績を課題・提案・施工内容とともにご紹介します。",
  path: "/works",
});

=======
  title: `施工事例 | 畳・内装・原状回復の施工実績 | ${SITE_NAME}`,
  description: "住宅・旅館・寺社・店舗・賃貸物件など多様な施工事例を紹介。畳表替え・新調・内装工事・原状回復の実績をご確認いただけます。課題・施工内容・結果とともにご覧いただけます。",
  path: "/works",
});

const worksFaqs: FaqItem[] = [
  { category: "general", q: "施工事例のような工事を自宅でも頼めますか？", a: "はい。掲載している事例と同様の畳工事・内装工事・原状回復に対応します。現地の状況により最適な工事内容は異なりますので、まずは無料の現地確認・お見積もりをご利用ください。" },
  { category: "general", q: "事例と同じ素材・仕上がりにできますか？", a: "同じ素材・仕様での施工が可能です。ただし、お部屋の状態・サイズ・既存の仕様により仕上がりが変わる場合があります。現地確認のうえ、近い仕上がりになるようご提案します。" },
  { category: "btob", q: "法人・複数物件の事例もありますか？", a: "賃貸物件・旅館・寺社・店舗など、法人・施設の施工にも幅広く対応しています。複数物件・継続案件の実績もございます。法人向けのご相談もお気軽にお問い合わせください。" },
  { category: "price", q: "事例に記載の費用は固定ですか？", a: "事例の費用は参考目安です。実際の費用は素材・枚数・面積・損傷状況・建物の用途により変動します。正式な費用は現地確認後に無料でお見積もりします。" },
  { category: "timing", q: "事例のような工事はどのくらいの期間で終わりますか？", a: "畳の表替えは持ち帰り翌日〜2日、内装・原状回復一式は範囲により数日が目安です。工事内容により変動するため、計画段階でスケジュールをご案内します。" },
  { category: "general", q: "施工前後の写真は残せますか？", a: "はい。ご希望に応じて施工前後の写真をお渡しします。法人のお客様には写真付きの施工報告書も発行しており、記録・報告資料としてご活用いただけます。" },
  { category: "general", q: "畳・クロス・床・建具をまとめて頼めますか？", a: "はい。畳工事を軸に、クロス・床・襖・障子・網戸まで一括でご依頼いただけます。空間全体をまとめて整えることで、日程・費用の両面で効率的です。" },
  { category: "general", q: "相談だけでも大丈夫ですか？", a: "もちろんです。「どんな工事が必要か分からない」という段階でのご相談も歓迎です。現地確認・お見積もりは無料で、お見積もり後のキャンセルでも費用は発生しません。" },
];

const CATEGORIES = [
  { label: "すべて", value: "all" },
  { label: "住宅", value: "house" },
  { label: "旅館", value: "ryokan" },
  { label: "寺社", value: "temple" },
  { label: "店舗", value: "store" },
  { label: "賃貸", value: "rental" },
  { label: "不動産", value: "realestate" },
];

>>>>>>> worktree-agent-a593ef458cd30cc49
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

      <section className="py-16 bg-kiji/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
          <div className="bg-white border border-border px-5 py-1">
            <FaqSection items={worksFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="施工のご相談はお気軽に"
        subtitle="写真や図面をお持ちいただくと、よりスムーズにご提案できます。まずはお問い合わせください。"
      />
    </>
  );
}
