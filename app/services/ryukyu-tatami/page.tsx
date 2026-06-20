import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `琉球畳（七島藺） | 高品質な縁なし畳 | ${SITE_NAME}`,
  description: "本来の七島藺（しちとうい）を使った琉球畳。独特の風合いと耐久性が特徴。旅館・茶室・高級和室に。18,000円〜/枚。",
  path: "/services/ryukyu-tatami",
});

export default function RyukyuTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="琉球畳"
      subtitle="七島藺（しちとうい）を使った本来の琉球畳。独特のざっくりとした風合いと高い耐久性が特徴。旅館・茶室など上質な空間に。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "琉球畳" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-ryokan-lantern-01.png"
      sections={[
        {
          heading: "琉球畳とは",
          content: (
            <p>
              本来の琉球畳は、七島藺（しちとうい）という植物を使った縁なし畳です。
              通常のい草より硬く丈夫で、独特のざっくりとした質感が特徴。
              旅館・茶室・和室の高級感を高めるのに最適です。
              現在は縁なし畳全般を「琉球畳」と呼ぶこともありますが、
              本来は七島藺を使ったものを指します。
            </p>
          ),
        },
        {
          heading: "七島藺の特徴",
          content: (
            <ul className="space-y-2">
              <li>— い草より丈夫で摩耗に強い</li>
              <li>— 独特のざっくりとした風合い</li>
              <li>— 時間が経つにつれて深い色合いになる</li>
              <li>— 旅館・茶室・高級和室に適した格式</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "琉球畳（七島藺）", price: "18,000円〜/枚", note: "旅館・茶室向け" },
      ]}
      relatedServices={[
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "旅館・施設向け", href: "/business/ryokan" },
      ]}
      relatedPages={[
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
