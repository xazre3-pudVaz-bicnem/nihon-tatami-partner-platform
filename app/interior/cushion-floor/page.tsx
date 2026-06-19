import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `クッションフロア張替え | 水回り・賃貸物件対応 | ${SITE_NAME}`,
  description: "水や汚れに強いクッションフロアの張替え。キッチン・トイレ・洗面所・賃貸物件の原状回復に最適。2,500円〜/m²。",
  path: "/interior/cushion-floor",
});

export default function CushionFloorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="クッションフロア張替え"
      subtitle="水や汚れに強いクッションフロアの張替えに対応。賃貸物件の原状回復や水回りのリフォームに多く使われます。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "クッションフロア" }]}
      image="/images/interior-cf.jpg"
      sections={[
        {
          heading: "クッションフロアとは",
          content: (
            <p>
              クッションフロア（CF）とは、塩化ビニール製のシート状床材です。
              防水性が高く、汚れを拭き取りやすいため、キッチン・トイレ・洗面所など水回りに多く使われます。
              賃貸物件の原状回復でも多く採用されています。
            </p>
          ),
        },
        {
          heading: "使用場面",
          content: (
            <ul className="space-y-2">
              <li>— キッチン・ダイニングの床</li>
              <li>— トイレ・洗面所・脱衣所</li>
              <li>— 賃貸物件の退去後原状回復</li>
              <li>— 店舗のバックヤード</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "クッションフロア張替え", price: "2,500円〜/m²", note: "素材により変動" },
      ]}
      relatedServices={[
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
