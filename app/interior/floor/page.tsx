import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `床工事・フローリング張替え | ${SITE_NAME}`,
  description: "フローリング材の張替え・上貼り・部分補修。和室から洋室変更・洋室への畳スペース設置も対応。5,000円〜/m²。",
  path: "/interior/floor",
});

export default function FloorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="床工事・フローリング張替え"
      subtitle="フローリング材の張替え・上貼り・部分補修に対応。和室から洋室への変更や逆に洋室に畳スペースを設ける工事も承ります。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "床工事・フローリング" }]}
      image="/images/nihon-tatami/restoration/restoration-floor-repair-01.png"
      sections={[
        {
          heading: "床工事の種類",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">上貼り工法</strong> — 既存フローリングの上から貼る。工期短縮・コスト削減</li>
              <li><strong className="text-sumi">張替え工法</strong> — 既存床を撤去して新しく貼る。根本的なリニューアル</li>
              <li><strong className="text-sumi">部分補修</strong> — 傷・へこみ・剥がれの部分的な補修</li>
            </ul>
          ),
        },
        {
          heading: "和室↔洋室の変更",
          content: (
            <p>
              和室から洋室への変更（畳をフローリングに変更）や、
              洋室に畳スペース・小上がりを設ける工事も承ります。
              畳工事と床工事を組み合わせた提案が可能です。
            </p>
          ),
        },
      ]}
      price={[
        { service: "フローリング張替え（上貼り）", price: "5,000円〜/m²", note: "" },
        { service: "フローリング張替え（張替え）", price: "8,000円〜/m²", note: "" },
        { service: "部分補修", price: "別途見積もり", note: "範囲により変動" },
      ]}
      relatedServices={[
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "クロス張替え", href: "/interior/cross" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
