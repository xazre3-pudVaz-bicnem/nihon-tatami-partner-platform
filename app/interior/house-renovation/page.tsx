import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `住宅内装リフォームの費用・進め方｜クロス・床・和室・バリアフリー対応 | ${SITE_NAME}`,
  description:
    "住宅内装リフォームの費用・進め方を解説。畳を軸にクロス・床・建具をまとめてリフォーム。和室から洋室への変更、バリアフリーリフォームとの連携、部屋別・工事種別の費用目安、よくある組み合わせ、FAQまで。",
  path: "/interior/house-renovation",
});

const faqs: FaqItem[] = [
  { category: "general", q: "住宅内装リフォームはどこから相談すればよいですか？", a: "気になっている箇所（畳の傷み、クロスの汚れ、床のきしみなど）からご相談ください。現地確認のうえ、優先順位や費用対効果を踏まえて、部分的な対応から複数部屋の一括対応までご提案します。" },
  { category: "general", q: "畳と一緒にクロス・床も頼めますか？", a: "はい。畳の表替え・新調を軸に、クロス張替え、フローリング・クッションフロア・フロアタイル、ふすま・障子の張替えまで一括でご依頼いただけます。別々に業者を手配する手間が省け、日程・費用面でも効率的です。" },
  { category: "general", q: "和室から洋室への変更はできますか？", a: "はい。畳を撤去してフローリングに変更し、必要に応じて壁クロスや収納も整えます。ベッドを置きたい、洋室として使いたいといったご要望に対応します。逆に、洋室に畳コーナーを設けることも可能です。" },
  { category: "general", q: "バリアフリーリフォームにも対応できますか？", a: "段差解消、滑りにくい床材への変更、手すり設置箇所の下地補強などに対応します。高齢のご家族が安全に暮らせるよう、内装リフォームと合わせてご提案します。大規模な改修は専門業者と連携します。" },
  { category: "general", q: "部屋ごとに分けて少しずつ進められますか？", a: "はい。一度にまとめてではなく、部屋ごと・箇所ごとに分けて進めることも可能です。ご予算や生活への影響を考慮し、優先順位をつけて計画的に進められます。" },
  { category: "general", q: "住みながらリフォームできますか？", a: "可能な範囲で、部屋を区切って順番に施工するなど、生活への影響を抑える方法をご提案します。畳は工場でお預かりして加工するため、対象の部屋のみ短期間使えない状態になります。" },
  { category: "general", q: "和モダンな空間にもできますか？", a: "はい。縁なし畳・カラー畳、機能性クロス、木目の床材などを組み合わせ、和の落ち着きと現代的なデザインを両立した和モダン空間をご提案します。" },
  { category: "general", q: "工期はどのくらいですか？", a: "1部屋のクロス・畳なら1〜2日、複数部屋や床工事を含む場合は数日〜が目安です。工事範囲によって変動するため、計画段階でスケジュールをご案内します。" },
  { category: "general", q: "家具の移動は必要ですか？", a: "施工箇所に応じて家具の移動が必要です。当日に移動できる範囲は対応し、大型家具は事前にご相談のうえ段取りを決めます。" },
  { category: "price", q: "費用はどのくらいですか？", a: "和室の畳表替え＋クロスで数万円〜、複数部屋の一括リフォームは範囲により変動します。部屋別・工事種別にお見積もりし、ご予算に合わせたプランをご提案します。現地確認後に無料でお見積もりします。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。" },
  { category: "general", q: "賃貸物件のリフォームにも対応できますか？", a: "はい。賃貸オーナー様の物件の内装リフォーム・原状回復・空室対策にも対応します。複数物件の一括対応も可能です。" },
];

export default function HouseRenovationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="住宅内装リフォームの費用・進め方"
      subtitle="畳を軸に、クロス・床・建具をまとめてリフォーム。和室から洋室への変更、バリアフリー対応まで、部屋単位から丸ごとリフォームまでご相談ください。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "住宅内装リフォーム" }]}
      image="/images/nihon-tatami/interior/interior-residential-workers-01.png"
      sections={[
        {
          heading: "住宅内装リフォームの種類",
          content: (
            <>
              <p>
                住宅の内装リフォームは、畳・クロス・床・建具など、複数の要素を組み合わせて行います。
                畳の張替えを機に、同時にクロスや床も整えることで、より効率的に空間全体をリフレッシュできます。
                別々に業者を手配する手間がなく、日程・費用の両面でメリットがあります。
              </p>
              <p>
                日本畳パートナーズは、畳工事の専門性を軸に、住宅内装リフォームをトータルでサポートします。
                部屋単位の小さな工事から、複数部屋・丸ごとリフォームまで、ご要望に合わせて対応します。
              </p>
            </>
          ),
        },
        {
          heading: "和室から洋室への変更",
          content: (
            <p>
              畳を撤去してフローリングに変更し、和室を洋室化するリフォームに対応します。
              畳の厚み分の段差を解消する下地工事を行い、必要に応じて壁クロスや収納も整えます。
              「ベッドを置きたい」「洋室として使いたい」というご要望のほか、逆に洋室に畳コーナー・小上がりを設けることも可能です。
              ライフスタイルの変化に合わせた空間づくりをご提案します。
            </p>
          ),
        },
        {
          heading: "和モダン空間の作り方",
          content: (
            <p>
              和の落ち着きと現代的なデザインを両立する和モダン空間も人気です。
              縁なし畳・カラー畳、木目の床材、機能性クロスを組み合わせることで、すっきりとした洗練された和の空間を作れます。
              リビング続きの畳コーナーや、フローリングに置き畳を組み合わせる手法など、ご希望に合わせてご提案します。
            </p>
          ),
        },
        {
          heading: "バリアフリーリフォームとの連携",
          content: (
            <p>
              高齢のご家族が安全に暮らせるよう、段差の解消、滑りにくい床材への変更、つまずきの原因となる畳のへたりの解消などに対応します。
              手すり設置箇所の下地補強など、内装リフォームと合わせた配慮も可能です。
              大規模な改修が必要な場合は専門業者と連携し、安全で快適な住まいづくりをサポートします。
            </p>
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
              <li>— 和室→洋室変更（畳撤去・フローリング・収納）</li>
              <li>— 複数部屋の一括施工</li>
            </ul>
          ),
        },
        {
          heading: "費用目安（部屋別・工事種別）",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-border">
                <thead className="bg-kiji/60">
                  <tr><th className="py-2 px-3 text-left">工事項目</th><th className="py-2 px-3 text-left">費用目安</th><th className="py-2 px-3 text-left">備考</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 px-3">畳 表替え</td><td className="py-2 px-3">5,500円〜/枚</td><td className="py-2 px-3">国産い草</td></tr>
                  <tr><td className="py-2 px-3">クロス張替え</td><td className="py-2 px-3">800円〜/m²</td><td className="py-2 px-3">量産品</td></tr>
                  <tr><td className="py-2 px-3">フローリング（上貼り）</td><td className="py-2 px-3">5,000円〜/m²</td><td className="py-2 px-3"></td></tr>
                  <tr><td className="py-2 px-3">和室→洋室変更</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">畳撤去・下地調整含む</td></tr>
                  <tr><td className="py-2 px-3">複数部屋一括</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">範囲により</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      price={[
        { service: "畳 表替え（国産い草）", price: "5,500円〜/枚", note: "" },
        { service: "クロス張替え", price: "800円〜/m²", note: "量産品" },
        { service: "フローリング（上貼り）", price: "5,000円〜/m²", note: "" },
        { service: "和室→洋室変更・複数部屋一括", price: "別途見積もり", note: "範囲により変動" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
      ]}
      relatedPages={[
        { label: "ご依頼の流れ", href: "/flow" },
        { label: "料金の目安", href: "/price" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
