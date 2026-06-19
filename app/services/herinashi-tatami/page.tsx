import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `縁なし畳 | 和モダンの空間づくり | ${SITE_NAME}`,
  description: "縁なし畳は縁（ヘリ）のないスッキリした和モダンの畳。半畳の正方形タイプが人気。和紙畳・樹脂畳での縁なし施工も対応。12,000円〜/枚。",
  path: "/services/herinashi-tatami",
});

export default function HerinashiTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="縁なし畳"
      subtitle="縁（ヘリ）のないすっきりとした和モダンスタイルの畳。半畳の正方形タイプが多く、現代的な和室やリノベーション物件に人気です。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "縁なし畳" },
      ]}
      image="/images/service-herinashi.jpg"
      sections={[
        {
          heading: "縁なし畳とは",
          content: (
            <p>
              縁なし畳とは、畳の縁（ヘリ）がないスッキリとした見た目の畳です。
              正方形の半畳タイプが多く、市松模様に配置することで
              和モダンな空間を演出できます。
              従来の縁ありの畳とは異なる洗練された印象を与えます。
            </p>
          ),
        },
        {
          heading: "縁なし畳の素材",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">い草（縁なし）</strong> — 自然な風合い。香りもある</li>
              <li><strong className="text-sumi">和紙畳（縁なし）</strong> — 耐久性・撥水性が高い。豊富な色</li>
              <li><strong className="text-sumi">樹脂畳（縁なし）</strong> — 水拭き可能。店舗・旅館向け</li>
            </ul>
          ),
        },
        {
          heading: "こんなシーンに",
          content: (
            <ul className="space-y-2">
              <li>— 和モダンなリノベーション物件</li>
              <li>— 洋室に和のスペースを作りたい</li>
              <li>— 飲食店の座敷・小上がり</li>
              <li>— ペット・子育て家庭（和紙畳・樹脂畳選択で）</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "縁なし畳（い草）半畳", price: "12,000円〜/枚", note: "" },
        { service: "縁なし畳（和紙）半畳", price: "10,000円〜/枚", note: "豊富なカラー" },
        { service: "縁なし畳（樹脂）半畳", price: "12,000円〜/枚", note: "水拭き可能" },
      ]}
      relatedServices={[
        { label: "琉球畳", href: "/services/ryukyu-tatami" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "カラー畳", href: "/services/color-tatami" },
      ]}
      relatedPages={[
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
