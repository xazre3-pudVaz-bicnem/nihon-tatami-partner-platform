import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `管理会社向け原状回復工事 | 複数棟・継続取引 | ${SITE_NAME}`,
  description: "不動産管理会社向けの原状回復業務サポート。複数棟・複数物件の一括対応・写真付き報告書・工種別見積書・継続取引歓迎。",
  path: "/restoration/management-company",
});

export default function RestorationManagementPage() {
  return (
    <ServicePageTemplate
      eyebrow="Restoration"
      title="管理会社向け原状回復"
      subtitle="不動産管理会社様の協力業者として、原状回復・空室対策・物件維持管理の各種工事を承ります。複数物件一括対応。"
      breadcrumbs={[
        { label: "原状回復", href: "/restoration" },
        { label: "管理会社向け対応" },
      ]}
      image="/images/restoration-management.jpg"
      sections={[
        {
          heading: "管理会社様の業務をサポート",
          content: (
            <p>
              退去報告を受けるたびに複数業者へ連絡・調整する手間を省きます。
              畳・クロス・床・建具をまとめてご依頼いただける協力業者として、
              管理業務の効率化をご支援します。
            </p>
          ),
        },
        {
          heading: "具体的なサポート内容",
          content: (
            <ul className="space-y-2">
              <li>— 複数物件・複数棟の一括原状回復</li>
              <li>— スピーディーな現地確認・見積書発行</li>
              <li>— 工種別費用内訳の明記</li>
              <li>— 写真付き施工報告書の発行</li>
              <li>— 請求書払い・振込対応（要ご相談）</li>
              <li>— 継続取引・担当者制でスムーズな連絡</li>
            </ul>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob").slice(0, 4)}
      relatedServices={[
        { label: "不動産管理会社向け", href: "/business/property-management" },
        { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
        { label: "空室対策", href: "/business/vacancy-measures" },
      ]}
      relatedPages={[
        { label: "ご依頼の流れ（法人向け）", href: "/flow" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
