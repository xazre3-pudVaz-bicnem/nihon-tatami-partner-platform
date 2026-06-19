import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `高齢者・介護向けの畳選び | 転倒リスク低減・バリアフリー | ${SITE_NAME}`,
  description: "高齢者や介護が必要な方向けの畳選び。転倒時の衝撃吸収・バリアフリー対応・介護向け畳の種類をご紹介。",
  path: "/needs/elderly",
});

export default function NeedsElderlyPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="高齢者・介護向けの畳選び"
      subtitle="転倒時の衝撃を和らげる畳のクッション性は、高齢者の生活に安心をもたらします。素材・厚さのご提案が可能です。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "高齢者・介護と畳" },
      ]}
      image="/images/needs-elderly.jpg"
      sections={[
        {
          heading: "高齢者が畳で生活するメリット",
          content: (
            <ul className="space-y-2">
              <li>— 転倒した際の衝撃吸収（フローリングより安全）</li>
              <li>— 素足で直接触れられる自然素材</li>
              <li>— 寝転んでも体が痛くなりにくい</li>
              <li>— 和の落ち着いた空間が精神的な安らぎを与える</li>
            </ul>
          ),
        },
        {
          heading: "介護環境に配慮した畳",
          content: (
            <p>
              車椅子対応や寝返りの介助をする環境では、畳の高さ（段差）や滑り具合が重要です。
              介護ベッドの脚が当たる部分への補強、車椅子が通りやすい硬めの畳床の選択など、
              状況に合わせてご提案します。
            </p>
          ),
        },
        {
          heading: "清潔に保てる素材選び",
          content: (
            <p>
              おむつ交換や医療用品の使用がある環境では、水拭きができる和紙畳・樹脂畳もご選択いただけます。
              通常のい草畳との違いを実物サンプルでご確認いただけます。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "material" || f.category === "general").slice(0, 4)}
      relatedServices={[
        { label: "畳の新調", href: "/services/tatami-shincho" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
      ]}
      relatedPages={[
        { label: "畳の素材ガイド", href: "/column/tatami-material-guide" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
