import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `不動産会社・管理会社向け畳・内装工事 | ${SITE_NAME}`,
  description: "不動産管理会社・不動産会社向けの畳張替え・原状回復・空室対策・売買前内装整備。複数物件一括対応。写真付き報告書。継続取引歓迎。",
  path: "/business/real-estate",
});

export default function RealEstatePage() {
  return (
    <ServicePageTemplate
      eyebrow="For Business"
      title="不動産会社・管理会社向け"
      subtitle="管理物件の原状回復・空室対策・売買前内装整備を一括サポート。複数物件・継続案件にも対応。写真付き施工報告書を発行します。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "不動産会社・管理会社向け" },
      ]}
      image="/images/restoration-management.jpg"
      sections={[
        {
          heading: "不動産会社・管理会社様のお悩みを解決",
          content: (
            <>
              <p>
                退去のたびに複数業者に連絡し、見積もりを取り、日程を調整する──
                こうした手間を省くために、日本畳パートナーズは
                不動産会社・管理会社様の協力業者として機能します。
              </p>
              <p>
                畳・クロス・床材・建具の施工をまとめてご依頼いただけるため、
                業者間の連携ミスや二度手間を防ぎます。
              </p>
            </>
          ),
        },
        {
          heading: "対応可能な業務",
          content: (
            <ul className="space-y-2">
              <li>— 賃貸退去後の原状回復（畳・クロス・床一括）</li>
              <li>— 売買前の内装整備（内覧印象の改善）</li>
              <li>— 空室対策の内装リフレッシュ</li>
              <li>— ペット可物件への転換（和紙畳・樹脂畳への変更）</li>
              <li>— 定期メンテナンス・予防的な畳替え</li>
              <li>— 複数物件・複数棟の一括管理</li>
            </ul>
          ),
        },
        {
          heading: "サポート内容",
          content: (
            <ul className="space-y-2">
              <li>— スピーディーな現地確認・見積もり（急ぎ対応も努力）</li>
              <li>— 写真付き施工報告書の発行</li>
              <li>— 工種別費用内訳の明記</li>
              <li>— 継続取引・定期メンテナンスの相談可</li>
              <li>— 請求書払い・振込対応（要ご相談）</li>
            </ul>
          ),
        },
        {
          heading: "ご依頼の流れ（法人向け）",
          content: (
            <ol className="space-y-2">
              <li>1. 物件情報・案件概要のご共有</li>
              <li>2. 現地確認（複数物件一括対応可）</li>
              <li>3. 一括見積もり・工種別内訳提示</li>
              <li>4. 施工スケジュール調整</li>
              <li>5. 施工・写真付き報告書提出</li>
            </ol>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob").slice(0, 4)}
      relatedServices={[
        { label: "原状回復（管理会社向け）", href: "/restoration/management-company" },
        { label: "空室対策", href: "/business/vacancy-measures" },
        { label: "賃貸オーナー向け", href: "/business/rental-owner" },
      ]}
      relatedPages={[
        { label: "原状回復工事", href: "/restoration" },
        { label: "施工事例", href: "/works" },
        { label: "コラム：原状回復と畳交換", href: "/column/restoration-tatami-cases" },
      ]}
    />
  );
}
