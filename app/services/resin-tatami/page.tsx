import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `樹脂畳 | 水拭き可能・店舗旅館に最適 | ${SITE_NAME}`,
  description: "樹脂畳はポリプロピレン製で水拭きできる機能性畳。カビ・ダニに強く清掃簡単。店舗・旅館・ペット対応。10,000円〜/枚。",
  path: "/services/resin-tatami",
});

export default function ResinTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="樹脂畳"
      subtitle="ポリプロピレン等の樹脂素材を使った畳表。水拭きができ、清掃が簡単。変色・カビ・ダニに強く、店舗・旅館・ペットルームに最適です。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "樹脂畳" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-rental-01.png"
      sections={[
        {
          heading: "樹脂畳とは",
          content: (
            <p>
              樹脂畳とは、ポリプロピレンなどの樹脂素材を使った畳表を用いた畳です。
              水拭きが可能で清掃が簡単なため、飲食店・旅館のエントランス・ペットルームなど
              汚れやすい場所での使用に最適です。
            </p>
          ),
        },
        {
          heading: "樹脂畳の特徴",
          content: (
            <ul className="space-y-2">
              <li>— 水拭き可能（完全防水ではない）</li>
              <li>— カビ・ダニが発生しにくい</li>
              <li>— 耐久性が高く長持ちする</li>
              <li>— 日光による退色がほとんどない</li>
              <li>— 店舗・旅館・ペットルームに適している</li>
            </ul>
          ),
        },
        {
          heading: "使用場面の例",
          content: (
            <ul className="space-y-2">
              <li>— 飲食店の座敷・小上がり</li>
              <li>— 旅館の客室・エントランス</li>
              <li>— ペットがいる家庭の和室</li>
              <li>— 子どもが遊ぶ和室スペース</li>
              <li>— 賃貸物件のペット可対応への転換</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "樹脂畳（表替え）", price: "10,000円〜/枚", note: "水拭き可能タイプ" },
        { service: "樹脂畳（縁なし）半畳", price: "12,000円〜/枚", note: "" },
      ]}
      relatedServices={[
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "カラー畳", href: "/services/color-tatami" },
        { label: "ペット対応", href: "/needs/pet" },
      ]}
      relatedPages={[
        { label: "和紙畳と樹脂畳の比較（コラム）", href: "/column/washi-tatami-vs-resin-tatami" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
