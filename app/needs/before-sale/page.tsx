import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `不動産売却前の畳交換・内装整備 | 売却価格アップ | ${SITE_NAME}`,
  description: "不動産売却・査定前の畳交換・クロス張替えで物件の印象を改善。内覧時の第一印象が売却価格に影響します。",
  path: "/needs/before-sale",
});

export default function NeedsBeforeSalePage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="売却前の内装整備で印象を上げる"
      subtitle="内覧時の第一印象が売却価格に直結します。畳・クロスを新しくするだけで物件の印象は大きく変わります。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "売却前の内装整備" },
      ]}
      image="/images/needs-before-sale.jpg"
      sections={[
        {
          heading: "売却前の内装整備が重要な理由",
          content: (
            <p>
              内覧者は最初の数秒で物件の印象を決めると言われています。
              古い畳・黄ばんだクロスは「管理が悪い」「補修費がかかりそう」という印象を与え、
              値下げ交渉につながることがあります。
              費用対効果の高いポイントを絞って整備することで、売却時の交渉を有利に進められます。
            </p>
          ),
        },
        {
          heading: "売却前に行う工事の優先順位",
          content: (
            <ul className="space-y-2">
              <li>— 畳の表替え（玄関・和室の印象改善）</li>
              <li>— クロスの張替え（壁の汚れ・タバコ臭の除去）</li>
              <li>— 床の補修（傷・変色の目立つ箇所）</li>
              <li>— ふすま・障子の張替え（和室の印象UP）</li>
            </ul>
          ),
        },
        {
          heading: "費用対効果の高いご提案",
          content: (
            <p>
              全部屋を丸ごとリフォームする必要はありません。
              内覧者の目に入りやすい箇所に絞って施工することで、
              最小限の費用で最大の印象改善が図れます。
              不動産会社のご担当者様との連携にも対応しています。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "price" || f.category === "timing").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "クロス・内装工事", href: "/interior/wallpaper" },
        { label: "不動産会社向け対応", href: "/business/real-estate" },
      ]}
      relatedPages={[
        { label: "内装工事について", href: "/interior" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
