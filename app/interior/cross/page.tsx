import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `クロス張替え | 壁紙・天井の張替え | ${SITE_NAME}`,
  description: "壁紙・天井クロスの張替えで室内の印象を一新。住宅・賃貸・店舗・旅館対応。畳工事と一括依頼可能。800円〜/m²。現地確認無料。",
  path: "/interior/cross",
});

export default function CrossPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="クロス張替え（壁紙・天井）"
      subtitle="劣化・剥がれ・変色したクロスを新しく張り替えます。畳工事と合わせて依頼いただくことで空間全体が一新されます。"
      breadcrumbs={[
        { label: "内装工事", href: "/interior" },
        { label: "クロス張替え" },
      ]}
      image="/images/interior-cross.jpg"
      sections={[
        {
          heading: "クロス張替えで変わること",
          content: (
            <p>
              日焼け・染み・カビ・剥がれなど劣化したクロスを張り替えることで、
              部屋全体の清潔感・明るさが大幅に改善します。
              畳の張替えと合わせることで、和室全体のリフレッシュが効率よく行えます。
            </p>
          ),
        },
        {
          heading: "対応場所・用途",
          content: (
            <ul className="space-y-2">
              <li>— 一般住宅の和室・洋室・廊下・キッチン</li>
              <li>— 賃貸物件の退去後原状回復</li>
              <li>— 旅館客室の壁・天井リフレッシュ</li>
              <li>— 店舗内装の改修</li>
              <li>— 不動産売買前の内装整備</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "クロス張替え（壁）", price: "800円〜/m²", note: "素材により変動" },
        { service: "クロス張替え（天井）", price: "900円〜/m²", note: "" },
      ]}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
