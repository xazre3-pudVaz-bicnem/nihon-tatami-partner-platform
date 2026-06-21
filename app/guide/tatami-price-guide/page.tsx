import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳の料金ガイド | 工法・素材別の費用相場 | ${SITE_NAME}`,
  description:
    "畳の料金を工法（裏返し・表替え・新調）・素材（い草/和紙/樹脂）別に詳しく解説。費用が変わる要因、見積もり前に準備すること、相場と品質の関係、FAQまで。納得して依頼するための料金ガイド。",
  path: "/guide/tatami-price-guide",
});

const priceGuideFaqs: FaqItem[] = [
  {
    category: "price",
    q: "畳替えの費用相場はどのくらいですか？",
    a: "裏返しは3,300円〜/枚、表替えは5,500円〜/枚、新調は15,000円〜/枚が目安です。素材のグレード・縁・枚数・現場状況により変動します。和紙畳・樹脂畳は素材により表替え8,000円〜/枚が目安です。",
  },
  {
    category: "price",
    q: "なぜ業者によって料金が違うのですか？",
    a: "使用する畳表・床・縁の素材グレード、廃材処分費の有無、出張費の扱い、施工の丁寧さなどが業者により異なるためです。極端に安い場合は素材グレードが低い・追加費用が後から発生することもあるため、内訳を確認しましょう。",
  },
  {
    category: "price",
    q: "見積もりの前に何を準備すればよいですか？",
    a: "畳の枚数・部屋数、畳のおおよそのサイズ（規格）、気になる症状（へたり・カビ・色あせ等）、希望の素材・予算感を整理しておくとスムーズです。写真があるとより正確にご案内できます。",
  },
  {
    category: "price",
    q: "安ければ安いほどお得ですか？",
    a: "一概にそうとは言えません。価格は素材のグレードに比例する面があり、安価な畳表は色あせ・ささくれが早いこともあります。使用年数・用途を踏まえ、相場と品質のバランスで選ぶことが結果的にお得です。",
  },
  {
    category: "price",
    q: "畳のサイズで料金は変わりますか？",
    a: "はい。地域・規格（京間・江戸間・中京間など）により1枚の大きさが異なり、大きいほど材料が多く必要になるため費用に影響します。お見積もり時に実寸を確認します。",
  },
  {
    category: "price",
    q: "枚数が多いと割引はありますか？",
    a: "多枚数・複数部屋・複数物件は、段取りの効率化により1枚あたりの単価を抑えられる場合があります。旅館・寺社・賃貸物件の大量施工は個別にお見積もりします。",
  },
  {
    category: "price",
    q: "見積もりは無料ですか？",
    a: "はい、現地確認・お見積もりは無料です。お見積もり後のキャンセルも費用は発生しません。",
  },
  {
    category: "price",
    q: "追加費用が発生するのはどんなときですか？",
    a: "下地の傷み補修、特注の縁・高グレード素材へのアップグレード、搬入が難しい立地、廃材処分、遠方の出張などです。いずれもお見積もり時にご説明し、ご了承いただいてから進めます。",
  },
];

export default function TatamiPriceGuidePage() {
  return (
    <ServicePageTemplate
      eyebrow="Guide"
      title="畳の料金ガイド"
      subtitle="工法・素材別の料金相場から、費用が変わる要因、見積もり前の準備、相場と品質の関係まで。納得して依頼するための料金ガイドです。"
      breadcrumbs={[
        { label: "ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "畳の料金ガイド" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-craftsman-01.png"
      sections={[
        {
          heading: "工法別の料金相場",
          content: (
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-4 font-normal">工法</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">料金目安</th>
                    <th className="text-left text-xs py-3 px-4 font-normal hidden sm:table-cell">内容</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs text-sumi/80">
                  <tr><td className="py-3 px-4 text-sumi">裏返し</td><td className="py-3 px-4 text-kincya">3,300円〜/枚</td><td className="py-3 px-4 hidden sm:table-cell">畳表を裏返して再利用</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">表替え</td><td className="py-3 px-4 text-kincya">5,500円〜/枚</td><td className="py-3 px-4 hidden sm:table-cell">畳表と縁を新しく</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">新調</td><td className="py-3 px-4 text-kincya">15,000円〜/枚</td><td className="py-3 px-4 hidden sm:table-cell">床・表・縁をすべて作り直す</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "素材別の料金相場",
          content: (
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-4 font-normal">素材（表替え）</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">料金目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs text-sumi/80">
                  <tr><td className="py-3 px-4 text-sumi">国産い草（機械すき）</td><td className="py-3 px-4 text-kincya">5,500円〜/枚</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">国産い草（手刈り・天日干し）</td><td className="py-3 px-4 text-kincya">8,000円〜/枚</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">和紙畳</td><td className="py-3 px-4 text-kincya">8,000円〜/枚</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">樹脂畳</td><td className="py-3 px-4 text-kincya">9,000円〜/枚</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "費用が変わる要因",
          content: (
            <ul className="space-y-2">
              <li>— 畳のサイズ（地域・規格による違い）</li>
              <li>— 素材のグレード（い草の等級・和紙・樹脂・手刈り/機械すき）</li>
              <li>— 縁（へり）の種類（無地・柄・紋縁・特注縁）</li>
              <li>— 枚数・部屋数（多枚数は単価を抑えられる場合）</li>
              <li>— 現場の状況（搬入経路・階数・下地の状態）</li>
              <li>— 廃材処分の有無</li>
            </ul>
          ),
        },
        {
          heading: "見積もり前に準備すること",
          content: (
            <ol className="space-y-2">
              <li>1. 畳の枚数・部屋数を数える</li>
              <li>2. 畳のおおよそのサイズ・規格を確認する</li>
              <li>3. 気になる症状（へたり・カビ・色あせ・ささくれ等）を整理する</li>
              <li>4. 希望の素材・予算感をまとめる</li>
              <li>5. 可能であれば現状の写真を用意する</li>
            </ol>
          ),
        },
        {
          heading: "相場と品質の関係",
          content: (
            <p>
              畳の価格は素材のグレードに比例する面があります。安価な畳表はコストを抑えられますが、
              色あせ・ささくれが早く出ることもあります。長く使う住宅や格式を重んじる空間では、
              相応の品質を選ぶことが結果的に満足度とコストパフォーマンスにつながります。
              一方、短期の賃貸・退去対応などコスト重視の場面では、必要十分なグレードを選ぶのが賢明です。
              使用年数・用途を踏まえ、相場と品質のバランスでお選びください。
            </p>
          ),
        },
      ]}
      faqs={priceGuideFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
      ]}
      relatedPages={[
        { label: "料金の目安（全サービス）", href: "/price" },
        { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "表替え・裏返し・新調の違い", href: "/compare/omotegae-uragaeshi-shinchou" },
      ]}
    />
  );
}
