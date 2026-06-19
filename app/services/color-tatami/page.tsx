import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `カラー畳 | 豊富な色で空間をコーディネート | ${SITE_NAME}`,
  description: "ブルー・グリーン・ブラウン・グレーなど豊富なカラー畳。店舗和スペース・リノベーション物件・子ども部屋に。8,000円〜/枚。",
  path: "/services/color-tatami",
});

export default function ColorTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="カラー畳"
      subtitle="ブルー・グリーン・ブラウン・グレーなど豊富なカラーで空間をコーディネート。店舗の和スペース、リノベーション物件、子ども部屋など個性的な空間づくりに。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "カラー畳" },
      ]}
      image="/images/service-color.jpg"
      sections={[
        {
          heading: "カラー畳とは",
          content: (
            <p>
              カラー畳とは、和紙畳・樹脂畳の技術を応用して豊富なカラーバリエーションを実現した畳です。
              従来のい草の緑色だけでなく、ブルー・ブラウン・グレー・ピンクなど様々な色から選べます。
            </p>
          ),
        },
        {
          heading: "カラー畳が向いているシーン",
          content: (
            <ul className="space-y-2">
              <li>— 店舗の和スペース・小上がり</li>
              <li>— カフェ・雑貨店のディスプレイスペース</li>
              <li>— リノベーション物件のデザイン和室</li>
              <li>— 子ども部屋・プレイルーム</li>
              <li>— 賃貸物件の差別化</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "カラー畳（和紙・縁あり）", price: "8,000円〜/枚", note: "カラーにより変動" },
        { service: "カラー畳（縁なし）半畳", price: "10,000円〜/枚", note: "" },
      ]}
      relatedServices={[
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
      ]}
      relatedPages={[
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
