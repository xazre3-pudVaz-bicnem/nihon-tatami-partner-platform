import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `フロアタイル張替え | 店舗・オフィス・賃貸対応 | ${SITE_NAME}`,
  description: "石目・木目調のフロアタイル施工。耐久性・デザイン性が高く店舗・オフィス・賃貸物件のグレードアップに。4,000円〜/m²。",
  path: "/interior/floor-tile",
});

export default function FloorTilePage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="フロアタイル張替え"
      subtitle="耐久性が高くデザイン性に優れたフロアタイルの施工に対応。石目・木目調など豊富な種類から空間に合わせて選択できます。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "フロアタイル" }]}
      image="/images/interior-tile.jpg"
      sections={[
        {
          heading: "フロアタイルとは",
          content: (
            <p>
              フロアタイルは塩化ビニール製のタイル状床材です。
              石目調・木目調・大理石調など豊富なデザインがあり、
              高級感のある床面を低コストで実現できます。
              耐久性が高く、店舗・オフィス・賃貸物件のグレードアップに活用されます。
            </p>
          ),
        },
      ]}
      price={[
        { service: "フロアタイル施工", price: "4,000円〜/m²", note: "素材・デザインにより変動" },
      ]}
      relatedServices={[
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "床工事・フローリング", href: "/interior/floor" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
