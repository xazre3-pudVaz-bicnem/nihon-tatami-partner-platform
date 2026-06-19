import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳のささくれ・傷み対策 | 畳が毛羽立つ原因と交換 | ${SITE_NAME}`,
  description: "畳のささくれ・毛羽立ちが気になる方へ。ささくれの原因・補修・表替えのタイミングを専門家が解説。素足で過ごせる畳に。",
  path: "/needs/sasakure",
});

export default function NeedsSasakurePage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="畳のささくれ・傷みでお困りの方へ"
      subtitle="素足で歩いたときのチクチク感・毛羽立ちは、表替えのサインです。原因と対処法を解説します。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "畳のささくれ" },
      ]}
      image="/images/needs-sasakure.jpg"
      sections={[
        {
          heading: "ささくれ・毛羽立ちが起きる原因",
          content: (
            <ul className="space-y-2">
              <li>— 畳表（い草）の経年劣化（目安：5〜8年）</li>
              <li>— 掃除機のかけすぎ・逆目方向のブラッシング</li>
              <li>— 紫外線による繊維の劣化</li>
              <li>— 家具の引きずりによる傷</li>
            </ul>
          ),
        },
        {
          heading: "対処法・交換の目安",
          content: (
            <p>
              軽微なささくれは粘着テープで一時対処できますが、根本的な解決は表替えです。
              畳表を新しくすると素足でも快適に過ごせます。
              表替えの目安は一般家庭で5〜8年。日当たりが強い部屋や使用頻度が高い場合はより早くなります。
            </p>
          ),
        },
        {
          heading: "素材の選び方",
          content: (
            <p>
              ペットや小さなお子様がいるご家庭には、傷みにくい和紙畳や樹脂畳もお勧めです。
              耐久性が高く、ダニ・カビも発生しにくい特徴があります。
              国産い草を使った高品質な表替えもご提案可能です。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "timing" || f.category === "material").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
        { label: "国産い草畳", href: "/services/domestic-igusa" },
      ]}
      relatedPages={[
        { label: "畳替えのタイミング", href: "/needs/timing" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
