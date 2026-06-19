import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `お客様を迎える前の畳替え | 旅館・民泊・ゲストハウス | ${SITE_NAME}`,
  description: "旅館・民泊・ゲストハウスなど、お客様を迎える施設の畳替え。シーズン前・繁忙期前の定期メンテナンスに対応。",
  path: "/needs/before-guest-arrival",
});

export default function NeedsBeforeGuestArrivalPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="お客様を迎える前の畳替え"
      subtitle="旅館・民泊・ゲストハウスのお客様に、いつでも清潔な畳を提供するために。シーズン前の定期メンテナンスに対応します。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "お客様を迎える前の畳替え" },
      ]}
      image="/images/needs-guest.jpg"
      sections={[
        {
          heading: "宿泊施設の畳管理",
          content: (
            <p>
              旅館・民泊・ゲストハウスの畳は一般住宅より使用頻度が高く、
              傷み・ダニ・へたりが早く進行します。
              お客様に快適な滞在を提供するためには、定期的な表替えが不可欠です。
              クチコミ評価「清潔感」への影響を考えると、畳の状態は特に重要です。
            </p>
          ),
        },
        {
          heading: "シーズン前メンテナンスのすすめ",
          content: (
            <ul className="space-y-2">
              <li>— 繁忙期前（GW前・夏前・年末年始前）の畳替え</li>
              <li>— 複数部屋の一括施工でスケジュール効率化</li>
              <li>— 定期メンテナンス契約で都度対応のストレス軽減</li>
            </ul>
          ),
        },
        {
          heading: "宿泊施設向けの畳選び",
          content: (
            <p>
              一般住宅よりも耐久性が求められる宿泊施設には、
              丈夫な国産い草や、メンテナンスしやすい和紙畳もご提案できます。
              素材サンプルをご覧いただきながらご相談ください。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob" || f.category === "general").slice(0, 4)}
      relatedServices={[
        { label: "旅館・ホテル向け畳", href: "/business/ryokan" },
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "国産い草畳", href: "/services/domestic-igusa" },
      ]}
      relatedPages={[
        { label: "施工事例：旅館", href: "/works" },
        { label: "法人向けお問い合わせ", href: "/contact#business" },
      ]}
    />
  );
}
