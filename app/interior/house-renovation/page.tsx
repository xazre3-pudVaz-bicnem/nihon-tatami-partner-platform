import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `住宅内装リフォーム | 畳・床・壁・建具の一括対応 | ${SITE_NAME}`,
  description:
    "畳を軸に床・壁・建具をまとめてリフォーム。よくある組み合わせ、素材選び、対応シーン、費用目安・工期・FAQまで解説。部屋ごとの個別対応から複数部屋・丸ごとリフォームまで一括相談可能。",
  path: "/interior/house-renovation",
});

const renovationFaqs: FaqItem[] = [
  {
    category: "general",
    q: "畳・床・壁・建具をまとめて頼めますか？",
    a: "はい。畳の表替え・新調、フローリング・クッションフロアの張替え、クロスの張替え、ふすま・障子・網戸の張替えまで、一つの窓口で一括対応します。業者を別々に手配する手間がなく、工期・費用面でも効率的です。",
  },
  {
    category: "general",
    q: "一部屋だけのリフォームでも対応できますか？",
    a: "はい。一部屋だけ・一工種だけのご依頼から、複数部屋・住戸まるごとのリフォームまで、規模に応じて対応します。まずはお気軽にご相談ください。",
  },
  {
    category: "general",
    q: "まとめて頼むメリットは何ですか？",
    a: "窓口が一本化されるため、見積もり取得・日程調整・現場立会いの手間が減ります。工種間の連携がスムーズで、仕上がりに統一感が出ます。同時施工により全体の工期短縮・費用最適化も期待できます。",
  },
  {
    category: "general",
    q: "和室を和モダンな空間にしたいのですが可能ですか？",
    a: "はい。縁なし畳（琉球畳）・カラー畳への変更、アクセントクロス、建具の刷新などを組み合わせて、和モダンな空間を演出できます。ご要望のイメージを伺い、素材・色のコーディネートをご提案します。",
  },
  {
    category: "general",
    q: "住みながらリフォームできますか？",
    a: "部屋ごとに順番に施工することで、住みながらのリフォームも可能です。畳は工場で加工するため、対象の部屋のみ短期間使えない状態になります。生活への影響を抑えた段取りをご相談ください。",
  },
  {
    category: "general",
    q: "素材選びの相談に乗ってもらえますか？",
    a: "はい。畳（い草・和紙・樹脂）、床材、クロス、建具の素材を、ご予算・ライフスタイル・お部屋の用途に合わせてご提案します。ペット・子育て・高齢者への配慮など、ご家庭の状況も踏まえて選びます。",
  },
  {
    category: "timing",
    q: "工期はどのくらいかかりますか？",
    a: "一部屋（畳＋クロス程度）で1〜2日、複数部屋・住戸まるごとの場合は数日〜が目安です。工種・面積・部屋数により変動します。同時施工により段取りを最適化し、全体の工期を短縮します。",
  },
  {
    category: "price",
    q: "費用はどのくらいかかりますか？",
    a: "畳の表替えは5,500円〜/枚、クロスは800円〜/m²、フローリング上貼りは5,000円〜/m²が目安です。組み合わせ・範囲により総額は変わります。ご予算をお伝えいただければ、その範囲で優先順位をつけたプランをご提案します。現地確認後に無料でお見積もりします。",
  },
  {
    category: "general",
    q: "実家・空き家のリフォームも頼めますか？",
    a: "はい。実家の片付け後の整備、空き家の活用・売却・賃貸前のリフォームにも対応します。立会いが難しい場合の進め方もご相談いただけます。",
  },
  {
    category: "general",
    q: "見積もりは無料ですか？",
    a: "はい、現地確認・お見積もりは無料です。複数工種を含む場合も、工種別に内訳を明記したお見積書をご提出します。お見積もり後のキャンセルも費用は発生しません。",
  },
];

export default function HouseRenovationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="住宅内装リフォーム"
      subtitle="畳を軸に、床・壁・建具をまとめてリフォームできます。部屋ごとの個別対応から、複数部屋・丸ごとリフォームまで一括でご相談ください。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "住宅内装リフォーム" }]}
      image="/images/nihon-tatami/interior/interior-residential-workers-01.png"
      sections={[
        {
          heading: "住宅内装リフォームの進め方",
          content: (
            <>
              <p>
                畳の張替えを機に、同時にクロス・床・建具も整えることで、
                より効率的に空間全体をリフレッシュできます。
                別々に業者を手配する必要がなく、一つの窓口で一括対応するため、
                見積もり・日程調整・現場立会いの手間が大きく減ります。
              </p>
              <p>
                部屋単位・複数部屋・丸ごとリフォームまで、ご要望と予算に合わせて対応します。
                住みながらの施工、空き家・実家の整備にも対応します。
              </p>
            </>
          ),
        },
        {
          heading: "よくある組み合わせ",
          content: (
            <ul className="space-y-2">
              <li>— 和室の畳表替え ＋ 壁クロス張替え</li>
              <li>— 和室の畳新調 ＋ ふすま・障子張替え ＋ クロス</li>
              <li>— 洋室のフローリング張替え ＋ クロス張替え</li>
              <li>— 水回りのクッションフロア ＋ クロス</li>
              <li>— 縁なし畳 ＋ アクセントクロスで和モダン化</li>
              <li>— 複数部屋の一括施工</li>
            </ul>
          ),
        },
        {
          heading: "素材選びガイド",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">畳</strong> — 香り・風合いの国産い草、耐久・清掃性の和紙/樹脂畳、
                和モダンの縁なし畳から選択。
              </li>
              <li>
                <strong className="text-sumi">床</strong> — 複合フローリング・シートフローリング・
                クッションフロア・フロアタイルを用途に応じて。
              </li>
              <li>
                <strong className="text-sumi">壁・天井</strong> — 量産クロス・機能性クロス・アクセントクロス。
              </li>
              <li>
                <strong className="text-sumi">建具</strong> — ふすま・障子・網戸の張替えで空間を引き締める。
              </li>
            </ul>
          ),
        },
        {
          heading: "対応シーン",
          content: (
            <ul className="space-y-2">
              <li>— 経年劣化した住まいのリフレッシュ</li>
              <li>— 和室の和モダン化・洋室化</li>
              <li>— ペット・子育て・高齢者に配慮した内装への変更</li>
              <li>— 実家・空き家の活用・売却・賃貸前の整備</li>
              <li>— 中古物件購入後の入居前リフォーム</li>
            </ul>
          ),
        },
        {
          heading: "工期と費用の考え方",
          content: (
            <p>
              工期は一部屋（畳＋クロス程度）で1〜2日、複数部屋・住戸まるごとで数日〜が目安です。
              費用は組み合わせ・範囲により変わりますが、同時施工により段取りを最適化し、
              工期短縮・費用最適化を図ります。ご予算をお伝えいただければ、その範囲で
              優先順位をつけたプランをご提案します。工種別に内訳を明記したお見積書をご提出します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "畳 表替え", price: "5,500円〜/枚", note: "国産い草" },
        { service: "クロス張替え", price: "800円〜/m²", note: "壁・量産" },
        { service: "フローリング張替え（上貼り）", price: "5,000円〜/m²", note: "" },
        { service: "ふすま・障子・網戸 張替え", price: "2,000円〜/枚", note: "種類により" },
        { service: "複数部屋・一括リフォーム", price: "別途見積もり", note: "範囲により最適化" },
      ]}
      faqs={renovationFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
      ]}
      relatedPages={[
        { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "ご依頼の流れ", href: "/flow" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
