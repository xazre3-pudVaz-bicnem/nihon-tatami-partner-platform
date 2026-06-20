import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `賃貸オーナー向け畳・内装工事 | 空室対策・原状回復 | ${SITE_NAME}`,
  description: "賃貸オーナー向けの畳交換・クロス張替え・原状回復。複数物件対応・和紙畳でペット可転換・空室対策。継続取引歓迎。",
  path: "/business/rental-owner",
});

export default function RentalOwnerPage() {
  return (
    <ServicePageTemplate
      eyebrow="For Rental Owner"
      title="賃貸オーナー向けサービス"
      subtitle="退去後の原状回復、空室対策、ペット可物件への変更対応。複数物件をまとめてご依頼いただけます。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "賃貸オーナー向け" },
      ]}
      image="/images/nihon-tatami/restoration/restoration-vacant-check-02.png"
      sections={[
        {
          heading: "賃貸オーナー様のお悩みを解決",
          content: (
            <p>
              退去のたびに業者を探し、見積もりを取り、日程を調整する手間を省きます。
              日本畳パートナーズは、畳・クロス・床をまとめて対応できる協力業者として、
              賃貸オーナー様の物件維持管理をサポートします。
            </p>
          ),
        },
        {
          heading: "対応サービス",
          content: (
            <ul className="space-y-2">
              <li>— 退去後の畳交換・クロス張替え・床補修</li>
              <li>— 和紙畳・樹脂畳へ変更してペット可対応に</li>
              <li>— 空室対策の内装リフレッシュ（競争力アップ）</li>
              <li>— 複数物件・複数棟の一括対応</li>
              <li>— 入居前のハウスクリーニング連携</li>
            </ul>
          ),
        },
        {
          heading: "空室対策としての畳張替え",
          content: (
            <p>
              新品の畳はい草の香りと清潔感で、入居者候補への印象が大きく変わります。
              また、和紙畳・樹脂畳への変更でペット可物件への転換も可能。
              空室期間を短縮するための内装整備をご提案します。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob").slice(0, 3)}
      relatedServices={[
        { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
        { label: "空室対策", href: "/business/vacancy-measures" },
        { label: "和紙畳", href: "/services/washi-tatami" },
      ]}
      relatedPages={[
        { label: "コラム：空室対策と畳交換", href: "/column/rental-tatami-vacancy" },
        { label: "原状回復工事", href: "/restoration" },
      ]}
    />
  );
}
