import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳のカビ対処・交換 | カビが生えた畳はどうする？ | ${SITE_NAME}`,
  description: "畳にカビが生えてしまった場合の対処法と交換のタイミングを解説。カビの原因・予防・交換費用まで専門家が説明。埼玉対応。",
  path: "/needs/mold",
});

export default function NeedsMoldPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="畳のカビでお困りの方へ"
      subtitle="梅雨・夏場に多い畳のカビ。原因・対処法・交換のタイミングを専門家が解説します。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "畳のカビ" },
      ]}
      image="/images/needs-mold.jpg"
      sections={[
        {
          heading: "畳にカビが生える主な原因",
          content: (
            <ul className="space-y-2">
              <li>— 湿度70%以上が続く梅雨・夏季</li>
              <li>— 部屋の換気不足・結露</li>
              <li>— 床下からの湿気</li>
              <li>— 家具を長期間同じ場所に置いている</li>
              <li>— 新しい畳の水分（新畳は1〜2年でカビが出やすい）</li>
            </ul>
          ),
        },
        {
          heading: "カビへの対処法",
          content: (
            <p>
              軽度のカビであれば、乾いた布で拭き取り、消毒用エタノールで除菌後に乾燥させます。
              ただし黒カビ・広範囲のカビは表面処置では根絶できません。
              表替え（畳表の張替え）または新調（畳丸ごと交換）をお勧めします。
              カビの状態・範囲により最適な対応を無料でご提案します。
            </p>
          ),
        },
        {
          heading: "カビの再発を防ぐには",
          content: (
            <ul className="space-y-2">
              <li>— 定期的な換気・除湿</li>
              <li>— 家具の配置を変えて風通しを確保</li>
              <li>— 防カビ処理された畳表への変更</li>
              <li>— 和紙畳・樹脂畳（湿気に強い素材）への変更</li>
            </ul>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "material" || f.category === "timing").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "畳の新調", href: "/services/tatami-shincho" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
      ]}
      relatedPages={[
        { label: "畳替えのタイミング", href: "/needs/timing" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
