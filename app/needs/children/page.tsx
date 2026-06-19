import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `赤ちゃん・子どものいる家庭の畳選び | 安心素材・清潔 | ${SITE_NAME}`,
  description: "赤ちゃんや小さなお子様がいるご家庭の畳選び。ダニ・カビが少なく清潔な畳素材・管理方法をご提案。国産い草・和紙畳。",
  path: "/needs/children",
});

export default function NeedsChildrenPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="赤ちゃん・お子様がいるご家庭へ"
      subtitle="寝返りする赤ちゃんが接する畳だからこそ、清潔・安心・安全な素材を選んでください。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "赤ちゃん・子どもと畳" },
      ]}
      image="/images/needs-children.jpg"
      sections={[
        {
          heading: "赤ちゃんにとっての畳の良さ",
          content: (
            <ul className="space-y-2">
              <li>— クッション性があり転倒時の衝撃を和らげる</li>
              <li>— い草の香りがリラックス効果をもたらす</li>
              <li>— 適度な硬さで骨格の発達を自然にサポート</li>
              <li>— 素足で直接触れられる自然素材</li>
            </ul>
          ),
        },
        {
          heading: "清潔に保つためのポイント",
          content: (
            <ul className="space-y-2">
              <li>— 定期的な表替え（5〜8年が目安）でダニ・カビを予防</li>
              <li>— 畳の目に沿った掃除機がけ</li>
              <li>— 梅雨・夏場の換気・除湿</li>
              <li>— 食べこぼしは拭き取り後に乾燥</li>
            </ul>
          ),
        },
        {
          heading: "おすすめの畳素材",
          content: (
            <p>
              国産い草は農薬が少なく安心感があります。
              さらに清潔管理を重視する方には和紙畳・樹脂畳もご提案できます。
              水拭きができ、ダニ・カビが発生しにくいため、小さなお子様のいる家庭に向いています。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "material" || f.category === "general").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "国産い草畳", href: "/services/domestic-igusa" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
      ]}
      relatedPages={[
        { label: "畳の素材ガイド", href: "/column/tatami-material-guide" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
