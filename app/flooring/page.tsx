import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import LongFormPage from "@/components/templates/LongFormPage";

export const metadata: Metadata = buildMetadata({
  title: `床工事・フローリング補修｜キズ・へこみ・張替え | ${SITE_NAME}`,
  description: "フローリングのキズ・へこみ・きしみの補修から、クッションフロア・フロアタイルへの張替えまで対応。部分補修と張替えの判断、床材の選び方を解説。現地確認・お見積もり無料。",
  path: "/flooring",
});

export default function FlooringPage() {
  return (
    <LongFormPage
      eyebrow="Flooring"
      title="床工事・フローリング補修"
      subtitle="床のキズ・へこみ・きしみの補修から、クッションフロア・フロアタイルへの張替えまで。住宅・賃貸・店舗の床トラブルをワンストップで解決します。"
      breadcrumbs={[{ label: "床工事" }]}
      image="/images/nihon-tatami/restoration/restoration-floor-repair-01.png"
      path="/flooring"
      intro={[
        "床は毎日歩く場所だからこそ、キズ・へこみ・きしみ・色あせなどのトラブルが起きやすい場所です。状態に応じて部分補修と張替えを使い分けることで、無駄なく最適な対応ができます。",
        "日本畳パートナーズでは、畳工事に加えて床工事にも対応。和室の畳替えと合わせて床全体を整えることもできます。",
      ]}
      sections={[
        {
          heading: "床トラブルの種類",
          body: ["床のトラブルにはさまざまな種類があり、それぞれ対処法が異なります。原因を見極めることが大切です。"],
          list: [
            "キズ・へこみ：家具の移動や落下物による",
            "きしみ・浮き：下地の傷みのサインのことも",
            "色あせ・劣化：経年や日焼けによる",
            "水濡れによる傷み：下地補修が必要なことも",
          ],
        },
        {
          heading: "部分補修か張替えかの判断",
          body: [
            "小さなキズ・へこみは部分補修で目立たなくできます。一方、広範囲の劣化や色あせ、下地まで及ぶ傷みは張替えが有効です。きしみや浮きがある場合は、床下地そのものの点検が必要です。",
            "状態を現地で確認し、補修で済むか張替えが必要かを正直にご案内します。",
          ],
        },
        {
          heading: "床材の選択肢",
          body: ["張替える場合、用途やご予算に応じて床材を選べます。それぞれに特長があります。"],
          list: [
            "フローリング：木の質感で住宅に人気",
            "クッションフロア：水に強くコスト◎。水回り・賃貸向け",
            "フロアタイル：耐久性が高く土足にも対応。店舗向け",
          ],
        },
        {
          heading: "畳との組み合わせ",
          body: [
            "和室の畳替えとリビングの床工事を同時に行うと、住まい全体に統一感が出ます。和室を洋室化してフローリングにする、リビングの一角に畳コーナーを設けるなど、畳と床を組み合わせた提案も可能です。",
          ],
        },
        {
          heading: "対応シーン",
          list: [
            "住宅：キズ・へこみの補修、張替え、洋室化",
            "賃貸：退去後の床補修・張替え",
            "店舗：耐久性のあるフロアタイルで",
            "水回り：クッションフロアで防水性を",
          ],
        },
      ]}
      faqs={[
        { category: "general", q: "床のへこみは部分補修できますか？", a: "小さなキズ・へこみは部分補修で対応できることが多いです。広範囲や下地に及ぶ場合は張替えをおすすめします。" },
        { category: "general", q: "きしみは直せますか？", a: "きしみは下地の傷みが原因のことがあります。現地で下地を点検し、原因に応じた対処をご提案します。" },
        { category: "general", q: "和室を洋室にできますか？", a: "はい。畳を撤去してフローリングを施工し、襖・壁を洋風に整えることで洋室化できます。" },
        { category: "price", q: "費用はどのくらいですか？", a: "補修か張替えか、面積や床材により変動します。現地確認後のお見積もりでご案内します。" },
      ]}
      relatedServices={[
        { label: "床工事", href: "/interior/floor" },
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "和室リフォーム", href: "/interior/house-renovation" },
      ]}
      relatedPages={[
        { label: "床のキズ・へこみ補修ガイド", href: "/column/flooring-repair-guide" },
        { label: "畳が沈む・へこむ原因と対処法", href: "/column/tatami-sunken-guide" },
        { label: "クロス張替え", href: "/wallpaper" },
      ]}
    />
  );
}
