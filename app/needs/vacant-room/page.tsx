import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `空室対策・入居促進のための畳交換 | 賃貸物件の畳 | ${SITE_NAME}`,
  description: "空室が続く賃貸物件の畳交換・内装整備で入居率改善。和紙畳・樹脂畳へ変更して入居者に選ばれる物件に。",
  path: "/needs/vacant-room",
});

export default function NeedsVacantRoomPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="空室対策として畳を活用する"
      subtitle="築年数が経った物件でも、畳の新調・素材変更・内装整備で入居者に選ばれる物件に生まれ変わります。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "空室対策と畳" },
      ]}
      image="/images/needs-vacant.jpg"
      sections={[
        {
          heading: "空室対策に畳交換が効果的な理由",
          content: (
            <ul className="space-y-2">
              <li>— 古い畳表は入居希望者に「古さ・不衛生感」を与える</li>
              <li>— 新しい畳はい草の香りで部屋を清潔に見せる効果がある</li>
              <li>— 和紙畳・カラー畳でデザイン性を高め差別化できる</li>
              <li>— フローリングへの変更より低コストでリフォーム感を出せる</li>
            </ul>
          ),
        },
        {
          heading: "おすすめの対策",
          content: (
            <ul className="space-y-2">
              <li>— 畳の表替え（費用を抑えて清潔感を演出）</li>
              <li>— 和紙畳・樹脂畳への変更（モダンな見た目・耐久性向上）</li>
              <li>— クロス・クッションフロアとの組み合わせリフォーム</li>
              <li>— 写真映えする内装で入居者の印象を改善</li>
            </ul>
          ),
        },
        {
          heading: "管理会社・オーナー様へ",
          content: (
            <p>
              複数物件の空室対策にも対応します。物件状況を確認した上で、
              費用対効果の高いご提案をします。継続取引歓迎。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob" || f.category === "price").slice(0, 4)}
      relatedServices={[
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
        { label: "空室対策ページ", href: "/business/vacancy-measures" },
      ]}
      relatedPages={[
        { label: "コラム：空室対策と畳交換", href: "/column/rental-tatami-vacancy" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
