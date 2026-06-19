import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `不動産管理会社向け畳・原状回復工事 | 継続対応 | ${SITE_NAME}`,
  description: "不動産管理会社の原状回復・空室対策・物件維持管理をサポート。複数物件一括対応・写真付き報告書・継続取引歓迎。",
  path: "/business/property-management",
});

export default function PropertyManagementPage() {
  return (
    <ServicePageTemplate
      eyebrow="For Property Management"
      title="不動産管理会社向けサービス"
      subtitle="管理物件の原状回復・空室対策・定期メンテナンスを一括サポート。複数棟・継続案件にも対応します。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "不動産管理会社向け" },
      ]}
      image="/images/restoration-management.jpg"
      sections={[
        {
          heading: "管理会社様の業務効率化をサポート",
          content: (
            <p>
              退去報告を受けるたびに複数業者に連絡し、見積もりを取り、
              日程を調整する──こうした非効率な業務を一本化できます。
              畳・クロス・床材・建具をまとめてご依頼いただける協力業者として、
              管理業務の効率化をご支援します。
            </p>
          ),
        },
        {
          heading: "具体的な対応内容",
          content: (
            <ul className="space-y-2">
              <li>— 退去後の畳・クロス・床の一括原状回復</li>
              <li>— 複数棟・複数部屋の同時施工</li>
              <li>— 写真付き施工報告書の発行（オーナー報告用）</li>
              <li>— スピーディーな現地確認（急ぎ対応も努力）</li>
              <li>— 工種別費用内訳の明記した見積書発行</li>
              <li>— 継続取引・定期メンテナンス契約の相談可</li>
            </ul>
          ),
        },
        {
          heading: "法人向けサポート体制",
          content: (
            <ul className="space-y-2">
              <li>— 請求書払い・振込対応（要ご相談）</li>
              <li>— 年間取引実績のご提供</li>
              <li>— 担当者制でスムーズな連絡体制</li>
            </ul>
          ),
        },
      ]}
      relatedServices={[
        { label: "原状回復（管理会社向け）", href: "/restoration/management-company" },
        { label: "不動産会社向け", href: "/business/real-estate" },
        { label: "空室対策", href: "/business/vacancy-measures" },
      ]}
      relatedPages={[
        { label: "ご依頼の流れ（法人向け）", href: "/flow" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
