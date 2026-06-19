import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳のダニ対策・交換 | ダニが気になる方へ | ${SITE_NAME}`,
  description: "畳のダニが気になる方へ。ダニが増える原因・対策・表替えのタイミングを専門家が解説。アレルギー・喘息対策にも。",
  path: "/needs/dani",
});

export default function NeedsDaniPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="畳のダニでお困りの方へ"
      subtitle="ダニは湿気の多い古い畳表に潜みます。アレルギー・喘息が気になる方へ、専門家が対策をご提案します。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "畳のダニ" },
      ]}
      image="/images/needs-dani.jpg"
      sections={[
        {
          heading: "畳にダニが増える原因",
          content: (
            <ul className="space-y-2">
              <li>— 高温多湿（湿度60%以上、温度20〜30℃）</li>
              <li>— 古い畳表（経年でい草が劣化し空洞化）</li>
              <li>— 換気不足・じゅうたんやラグを重ねている</li>
              <li>— ペットがいる環境</li>
            </ul>
          ),
        },
        {
          heading: "ダニ対策・対処法",
          content: (
            <p>
              表替えは最も効果的なダニ対策の一つです。新しい畳表はダニの生息密度が大幅に下がります。
              また和紙畳・樹脂畳はダニが発生しにくく、アレルギーが気になるご家庭に向いています。
              日差しを当てて乾燥させる、掃除機をかけるなど日常的な管理も併用することで効果が高まります。
            </p>
          ),
        },
        {
          heading: "アレルギー・喘息が心配な方へ",
          content: (
            <p>
              ダニのフンや死骸がアレルゲンになります。表替えにより畳表を新しくすると
              アレルゲンを大幅に減らせます。さらに和紙畳や樹脂畳への変更も
              衛生管理の面でお勧めです。お気軽にご相談ください。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "material" || f.category === "timing").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
        { label: "お子様・高齢者向け畳", href: "/needs/children" },
      ]}
      relatedPages={[
        { label: "畳の素材について", href: "/column/tatami-material-guide" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
