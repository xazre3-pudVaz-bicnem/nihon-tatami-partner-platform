import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import LongFormPage from "@/components/templates/LongFormPage";

export const metadata: Metadata = buildMetadata({
  title: `クロス（壁紙）張替え｜費用・機能性クロスの選び方 | ${SITE_NAME}`,
  description: "クロス張替えの費用の決まり方、防汚・消臭・防カビなどの機能性クロスの選び方を解説。賃貸の原状回復・和室・店舗の壁紙にも対応。現地確認・お見積もり無料。",
  path: "/wallpaper",
});

export default function WallpaperPage() {
  return (
    <LongFormPage
      eyebrow="Wallpaper"
      title="クロス（壁紙）張替え"
      subtitle="壁の汚れ・剥がれ・ヤニ汚れを一新。防汚・消臭・防カビなどの機能性クロスで、住まいや物件の印象を明るく整えます。畳・床と合わせた一括施工も可能です。"
      breadcrumbs={[{ label: "クロス張替え" }]}
      image="/images/nihon-tatami/restoration/restoration-wallpaper-01.png"
      path="/wallpaper"
      intro={[
        "壁は部屋の中で最も面積が広く、クロスの状態が空間の印象を大きく左右します。汚れ・剥がれ・ヤニ汚れがあると部屋全体が古びて見えますが、張替えるだけで明るく清潔な印象に生まれ変わります。",
        "日本畳パートナーズでは、畳工事に加えてクロス張替えにも対応。和室の畳替えや床工事と合わせて、空間全体をまとめて整えられます。",
      ]}
      sections={[
        {
          heading: "クロス張替え費用の決まり方",
          body: [
            "クロス張替えの費用は、施工する面積（平米数）×単価が基本です。これに、既存クロスの剥がし作業、下地の補修、家具移動などの条件が加わります。グレードの高い機能性クロスを選ぶと単価が上がります。",
            "正確な費用は、現地確認後のお見積もりで内訳を明確にしてご案内します。",
          ],
        },
        {
          heading: "機能性クロスの選び方",
          body: ["クロスには、見た目だけでなくさまざまな機能を持つものがあります。部屋の用途に合わせて選べます。"],
          list: [
            "防汚・表面強化：汚れに強く拭きやすい。子ども部屋・廊下に",
            "消臭・抗菌：ペット・トイレ・玄関に",
            "防カビ：湿気の多い部屋・水回りに",
            "デザインクロス：アクセントウォールに",
          ],
        },
        {
          heading: "賃貸・原状回復での活用",
          body: [
            "賃貸の原状回復では、クロスの張替えが定番です。ヤニ汚れや手垢で黒ずんだクロスを一新することで、次の入居者に好印象を与えられます。",
            "畳・床と合わせてクロスを張り替えることで、空室期間の短縮にもつながります。喫煙物件には消臭効果のあるクロスがおすすめです。",
          ],
        },
        {
          heading: "畳・床とまとめて一新",
          body: [
            "和室の畳替えと同時にクロスを張り替えると、空間全体がリフレッシュされ統一感が出ます。畳・クロス・床を一社にまとめて依頼すれば、工程が効率化され、コストと工期を抑えられます。",
          ],
        },
        {
          heading: "対応シーン",
          list: [
            "住宅：汚れ・劣化したクロスの張替え",
            "賃貸：退去後の原状回復・喫煙物件の臭い対策",
            "和室：畳替えと合わせた一新",
            "店舗：和空間の演出に合わせて",
          ],
        },
      ]}
      faqs={[
        { category: "general", q: "一部屋だけ・一面だけの張替えもできますか？", a: "はい。一部屋・一面のみのご依頼も承ります。畳・床工事と合わせてのご依頼も可能です。" },
        { category: "general", q: "タバコのヤニ汚れも対応できますか？", a: "はい。ヤニ汚れのクロスを張り替え、消臭効果のあるクロスを選ぶことで臭い対策もできます。" },
        { category: "general", q: "壁紙の上から塗ることもできますか？", a: "状態によります。剥がして張り替える方法が一般的です。現地で最適な方法をご提案します。" },
        { category: "price", q: "費用はどのくらいですか？", a: "面積・クロスのグレード・下地の状態により変動します。現地確認後のお見積もりでご案内します。" },
      ]}
      relatedServices={[
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "内装工事", href: "/interior" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "クロス張替えの費用と選び方", href: "/column/wallpaper-replacement-price" },
        { label: "床工事・フローリング補修", href: "/flooring" },
        { label: "原状回復費用の相場と内訳", href: "/column/restoration-cost-guide" },
      ]}
    />
  );
}
