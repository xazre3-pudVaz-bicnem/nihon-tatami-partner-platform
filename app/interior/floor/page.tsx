import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `床工事・フローリング張替え | 上貼り・張替え・補修 | ${SITE_NAME}`,
  description:
    "フローリングの張替え・上貼り・部分補修に対応。上貼りと張替えの違い、床材の選び方、和室↔洋室の変更、費用目安・工期・FAQまで解説。畳工事と組み合わせた提案も可能です。",
  path: "/interior/floor",
});

const floorFaqs: FaqItem[] = [
  {
    category: "general",
    q: "上貼りと張替え、どちらがよいですか？",
    a: "上貼りは既存の床の上から新しい床材を貼る工法で、工期が短くコストを抑えられます。下地が傷んでいない場合に適します。張替えは既存床を撤去して貼り直す工法で、下地の傷み・きしみ・段差を根本から直せます。床の状態に応じてご提案します。",
  },
  {
    category: "general",
    q: "床がきしむ・沈むのですが直せますか？",
    a: "きしみ・沈みは下地（根太・合板）の傷みや経年が原因のことが多いです。上貼りでは改善しないため、張替えで下地から補修するのが適切です。現地確認で原因を見極めてご提案します。",
  },
  {
    category: "material",
    q: "床材にはどんな種類がありますか？",
    a: "天然木の風合いを持つ複合フローリング、傷・水に強いシートタイプ、デザイン豊富で部分張替えしやすいフロアタイル、水回りに適したクッションフロアなどがあります。部屋の用途・予算・メンテナンス性に合わせて選びます。",
  },
  {
    category: "material",
    q: "ペットや子どもがいる家に向いた床材は？",
    a: "表面が強化された傷・汚れに強いフローリングや、滑りにくい加工のされた床材がおすすめです。ペットの足腰に配慮した滑りにくいタイプ、水拭きしやすいタイプなどもあります。ご家庭の状況に合わせてご提案します。",
  },
  {
    category: "general",
    q: "和室を洋室（フローリング）に変更できますか？",
    a: "はい。畳を撤去し、下地を調整した上でフローリングを張る工事に対応します。畳と床の高さ調整も行い、隣室との段差が出ないよう仕上げます。畳工事と床工事を一括でご依頼いただけます。",
  },
  {
    category: "general",
    q: "逆に、洋室に畳スペースを作れますか？",
    a: "はい。洋室の一角に置き畳・小上がりを設けたり、フローリングを畳に変更したりする工事も承ります。和モダンな空間づくり、くつろぎスペースの追加にご活用ください。",
  },
  {
    category: "general",
    q: "部分的な補修だけでも頼めますか？",
    a: "はい。傷・へこみ・剥がれ・色あせの目立つ箇所の部分補修に対応します。範囲・状態によっては、見た目を揃えるため広めの施工をご提案する場合があります。",
  },
  {
    category: "timing",
    q: "工期はどのくらいですか？",
    a: "6畳の上貼りで半日〜1日、張替え（下地補修含む）で1〜2日が目安です。面積・下地の状態・床材により変動します。複数部屋の場合は数日かかることもあります。事前にスケジュールをご案内します。",
  },
  {
    category: "price",
    q: "費用はどのくらいですか？",
    a: "上貼りは5,000円〜/m²、張替えは8,000円〜/m²が目安です。床材の種類、下地補修の有無、面積により変動します。クッションフロアは2,500円〜/m²、フロアタイルは4,000円〜/m²が目安です。現地確認後に無料でお見積もりします。",
  },
  {
    category: "general",
    q: "畳と床、まとめて相談できますか？",
    a: "はい。畳・床・クロス・建具を組み合わせた提案・一括施工が可能です。和室↔洋室の変更を含め、空間全体のリフォームを一つの窓口でご相談いただけます。",
  },
];

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
          heading: "床工事で空間が変わる",
          content: (
            <p>
              床は室内で最も広い面積を占め、空間の印象と快適さを大きく左右します。
              傷・色あせ・きしみ・剥がれが気になる床を整えることで、清潔感が増し、
              歩き心地も改善します。畳をフローリングに、フローリングを畳にといった
              空間用途の変更にも対応します。
            </p>
          ),
        },
        {
          heading: "床工事の種類",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">上貼り工法</strong> — 既存フローリングの上から貼る。
                工期短縮・コスト削減。下地が健全な場合に適します。
              </li>
              <li>
                <strong className="text-sumi">張替え工法</strong> — 既存床を撤去して新しく貼る。
                下地の傷み・きしみ・段差を根本から直す根本的なリニューアル。
              </li>
              <li>
                <strong className="text-sumi">部分補修</strong> — 傷・へこみ・剥がれの部分的な補修。
              </li>
            </ul>
          ),
        },
        {
          heading: "床材の選び方ガイド",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">複合フローリング</strong> — 天然木の風合いと安定性。
                居室・リビングの定番。
              </li>
              <li>
                <strong className="text-sumi">シートフローリング</strong> — 傷・水に強く手入れが楽。
                ペット・子育て世帯に。
              </li>
              <li>
                <strong className="text-sumi">フロアタイル</strong> — デザイン豊富で部分張替えしやすい。
                店舗・玄関・水回りに。
              </li>
              <li>
                <strong className="text-sumi">クッションフロア</strong> — 撥水性が高く安価。
                トイレ・洗面・キッチンなどの水回りに。
              </li>
            </ul>
          ),
        },
        {
          heading: "対応シーン",
          content: (
            <ul className="space-y-2">
              <li>— 経年劣化した居室・廊下の床リニューアル</li>
              <li>— 和室から洋室（フローリング）への変更</li>
              <li>— 洋室への畳スペース・小上がりの新設</li>
              <li>— 賃貸退去後の原状回復・空室対策</li>
              <li>— 店舗・旅館の床リニューアル</li>
              <li>— ペット・子育てに配慮した床への変更</li>
            </ul>
          ),
        },
        {
          heading: "和室↔洋室の変更",
          content: (
            <p>
              和室から洋室への変更（畳をフローリングに変更）や、洋室に畳スペース・小上がりを
              設ける工事も承ります。畳と床の高さ調整を行い、隣室との段差が出ないよう仕上げます。
              畳工事と床工事を組み合わせた一括の提案が可能で、ライフスタイルの変化に合わせた
              空間づくりをお手伝いします。
            </p>
          ),
        },
        {
          heading: "工期の目安",
          content: (
            <p>
              6畳の上貼りで半日〜1日、張替え（下地補修含む）で1〜2日が目安です。
              面積・下地の状態・床材により変動し、複数部屋の場合は数日かかることもあります。
              畳・クロス・建具と合わせて施工する場合は、段取りを最適化して全体の工期を短縮します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "フローリング張替え（上貼り）", price: "5,000円〜/m²", note: "下地が健全な場合" },
        { service: "フローリング張替え（張替え）", price: "8,000円〜/m²", note: "下地補修含む" },
        { service: "クッションフロア張替え", price: "2,500円〜/m²", note: "水回りに" },
        { service: "フロアタイル張替え", price: "4,000円〜/m²", note: "" },
        { service: "部分補修", price: "別途見積もり", note: "範囲により変動" },
      ]}
      faqs={floorFaqs}
      relatedServices={[
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "住宅内装リフォーム", href: "/interior/house-renovation" },
      ]}
      relatedPages={[
        { label: "住宅内装リフォーム", href: "/interior/house-renovation" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
