import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `和紙畳 | 耐久性・撥水性に優れたペット対応畳 | ${SITE_NAME}`,
  description: "和紙畳は特殊加工の和紙素材。耐久性・撥水性が高くカラーバリエーションも豊富。ペット・子育て家庭にも最適。8,000円〜/枚。",
  path: "/services/washi-tatami",
});

export default function WashiTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="和紙畳"
      subtitle="特殊加工した和紙素材の畳表。耐久性・撥水性に優れ、カラーバリエーションも豊富。ペット・子育て家庭にも最適な機能性畳です。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "和紙畳" },
      ]}
      image="/images/service-washi.jpg"
      sections={[
        {
          heading: "和紙畳とは",
          content: (
            <p>
              和紙畳とは、特殊加工した和紙を紙縒り（こより）にして織った畳表を使った畳です。
              い草に比べて耐久性・撥水性が高く、退色しにくいのが特徴。
              豊富なカラーバリエーションから選べるため、インテリアに合わせた空間づくりが可能です。
            </p>
          ),
        },
        {
          heading: "和紙畳の特徴・メリット",
          content: (
            <ul className="space-y-2">
              <li>— い草より耐久性が高い（2〜3倍長持ち）</li>
              <li>— 撥水性があり水拭きに強い</li>
              <li>— 退色しにくく長くきれいな状態を保てる</li>
              <li>— 豊富なカラーから選択可能（グリーン・ベージュ・グレーなど）</li>
              <li>— アレルギー対策に（い草のダニが気になる方へ）</li>
              <li>— ペット・子どものいる家庭に最適</li>
            </ul>
          ),
        },
        {
          heading: "和紙畳と樹脂畳の違い",
          content: (
            <p>
              和紙畳は和紙素材、樹脂畳はポリプロピレン等の樹脂素材で作られています。
              和紙畳は見た目の風合いがい草に近く、自然素材の温かみがあります。
              樹脂畳は水拭きが可能で、さらに汚れに強い点が特徴です。
              ライフスタイルに合わせてご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "和紙畳（表替え）", price: "8,000円〜/枚", note: "カラー・グレードにより変動" },
        { service: "和紙畳（縁なし）半畳", price: "10,000円〜/枚", note: "" },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.q.includes("和紙") || f.q.includes("ペット") || f.q.includes("素材")).slice(0, 3)}
      relatedServices={[
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "カラー畳", href: "/services/color-tatami" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "ペット対応", href: "/needs/pet" },
      ]}
      relatedPages={[
        { label: "和紙畳と樹脂畳の比較（コラム）", href: "/column/washi-tatami-vs-resin-tatami" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
