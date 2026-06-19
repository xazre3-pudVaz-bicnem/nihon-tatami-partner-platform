import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `旅館・宿泊施設の畳工事 | 大量施工・高品質素材対応 | ${SITE_NAME}`,
  description: "旅館・ホテル客室の畳表替え・新調。大量施工・繁忙期前の集中スケジューリング・高品質国産い草・特注縁対応。稼働中の段階施工も可能。",
  path: "/business/ryokan",
});

export default function RyokanPage() {
  return (
    <ServicePageTemplate
      eyebrow="For Ryokan / Hotel"
      title="旅館・宿泊施設向け畳工事"
      subtitle="客室の定期メンテナンス、繁忙期前の集中施工、高品質素材での格式維持。旅館のスケジュールに合わせた施工計画を立てます。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "旅館・宿泊施設向け" },
      ]}
      image="/images/works-03.jpg"
      sections={[
        {
          heading: "旅館・宿泊施設の畳工事の重要性",
          content: (
            <p>
              旅館・宿泊施設の客室畳は、宿泊客の満足度に直結します。
              ささくれや色あせ、へたりのある畳は、施設全体の印象を損なう要因になります。
              定期的なメンテナンスで、清潔感・品質・格式を保ちましょう。
            </p>
          ),
        },
        {
          heading: "旅館向けの対応内容",
          content: (
            <ul className="space-y-2">
              <li>— 客室畳の大量表替え・新調（複数室同時施工）</li>
              <li>— 繁忙期前・大型連休前の集中スケジューリング</li>
              <li>— 高品質国産い草・手刈り天日干しへの変更</li>
              <li>— 格式に合わせた縁（紋縁・麻縁など）の選定</li>
              <li>— 施設稼働中の段階施工（客室を順番に施工）</li>
              <li>— 廊下・共用スペースの畳整備</li>
            </ul>
          ),
        },
        {
          heading: "施工の目安・タイミング",
          content: (
            <p>
              旅館客室の畳表替えは3〜5年に一度が目安です。
              繁忙期前（お盆・年末年始・大型連休前）に施工するオーナー様が多くいらっしゃいます。
              施工計画は早めにご相談ください。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.q.includes("旅館") || f.q.includes("施設") || f.q.includes("大量")).slice(0, 3)}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "琉球畳", href: "/services/ryukyu-tatami" },
      ]}
      relatedPages={[
        { label: "施工事例（旅館）", href: "/works" },
        { label: "コラム：旅館の畳張替えメリット", href: "/column/ryokan-tatami-merit" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
