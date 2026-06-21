import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `クッションフロア張替えの費用・種類・特徴｜賃貸・水回り・子供部屋に | ${SITE_NAME}`,
  description:
    "クッションフロア（CF）張替えの費用・種類・特徴を解説。水回り・トイレ・キッチン・子供部屋・賃貸の原状回復に最適。防水性・クッション性・デザインの豊富さ、費用目安、施工の流れ、FAQまで。2,500円〜/m²。",
  path: "/interior/cushion-floor",
});

const faqs: FaqItem[] = [
  { category: "material", q: "クッションフロアとは何ですか？", a: "クッションフロア（CF）は、塩化ビニール製のシート状床材です。中間層に発泡層を持ち、適度なクッション性と高い防水性が特徴です。表面の汚れを拭き取りやすく、水回りや賃貸物件に広く使われます。" },
  { category: "material", q: "クッションフロアの種類はありますか？", a: "木目調・石目調・タイル調など豊富なデザインがあります。住宅用と、土足対応で耐久性を高めた店舗用（土足用）があり、使用場所に応じて選びます。抗菌・消臭・防カビ機能付きの製品もあります。" },
  { category: "general", q: "どんな場所に向いていますか？", a: "防水性が高いため、キッチン・トイレ・洗面所・脱衣所などの水回りに最適です。クッション性があり足触りがやわらかいため、子供部屋にも向いています。賃貸の原状回復でも多用されます。" },
  { category: "general", q: "フローリングとの違いは？", a: "クッションフロアはシート状で防水性・クッション性が高く、コストも抑えられます。フローリングは木質感・高級感に優れますが、水濡れに弱い面があります。水回りはCF、居室はフローリングという使い分けが一般的です。" },
  { category: "general", q: "子供部屋に向いていますか？", a: "はい。やわらかく転倒時の衝撃を和らげ、飲みこぼし・汚れも拭き取りやすいため、小さなお子様のいるご家庭に向いています。クッション性は防音にも一定の効果があります。" },
  { category: "general", q: "張替え時に下地の補修は必要ですか？", a: "既存のCFを剥がした際に下地の傷み・汚れが見つかった場合は、補修・清掃を行ってから張ります。下地が平滑でないと仕上がりに影響するため、必要に応じて調整します。" },
  { category: "btob", q: "賃貸の原状回復に使えますか？", a: "はい。コストを抑えられ、防水性・清掃性に優れるため、賃貸物件の水回り・居室の原状回復で広く採用されています。退去ごとの張替えにも適しています。" },
  { category: "timing", q: "工期はどのくらいですか？", a: "トイレ・洗面所などの小スペースは半日〜1日、6畳程度の部屋でも1日程度が目安です。下地補修を伴う場合は別途ご案内します。" },
  { category: "general", q: "畳・クロスと一緒に頼めますか？", a: "はい。水回りのCF張替えと合わせて、クロス張替え、畳の表替え、フローリング工事まで一括でご依頼いただけます。空間全体を効率よく整えられます。" },
  { category: "price", q: "費用はどのくらいですか？", a: "クッションフロア張替えは2,500円〜/m²が目安です。素材のグレード、面積、下地補修の有無により変動します。現地確認後に無料でお見積もりします。" },
];

export default function CushionFloorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="クッションフロア張替えの費用・種類・特徴"
      subtitle="水や汚れに強いクッションフロアの張替えに対応。水回り・子供部屋・賃貸の原状回復など、幅広い場面に活用できます。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "クッションフロア" }]}
      image="/images/nihon-tatami/restoration/restoration-kitchen-check-01.png"
      sections={[
        {
          heading: "クッションフロアとは",
          content: (
            <>
              <p>
                クッションフロア（CF）とは、塩化ビニール製のシート状床材です。
                中間に発泡層を持つことで適度なクッション性があり、防水性が高く、汚れを拭き取りやすいのが特徴です。
                キッチン・トイレ・洗面所など水回りに多く使われ、賃貸物件の原状回復でも定番の床材です。
              </p>
              <p>
                木目調・石目調・タイル調などデザインも豊富で、比較的低コストで床の印象を一新できます。
                足触りがやわらかく、転倒時の衝撃を和らげるため、子供部屋や高齢者のいるご家庭にも向いています。
              </p>
            </>
          ),
        },
        {
          heading: "クッションフロアの特徴",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">防水性が高い</strong> — 水をはじき、染み込みにくい。水回りに最適。</li>
              <li><strong className="text-sumi">クッション性がある</strong> — 足触りがやわらかく、転倒時の衝撃を緩和。</li>
              <li><strong className="text-sumi">清掃が簡単</strong> — 表面を拭くだけで汚れが取れる。</li>
              <li><strong className="text-sumi">コストを抑えられる</strong> — フローリングより安価で施工も早い。</li>
              <li><strong className="text-sumi">デザインが豊富</strong> — 木目・石目・タイル調など空間に合わせて選べる。</li>
            </ul>
          ),
        },
        {
          heading: "使用場面",
          content: (
            <ul className="space-y-2">
              <li>— キッチン・ダイニングの床</li>
              <li>— トイレ・洗面所・脱衣所</li>
              <li>— 子供部屋・高齢者の居室</li>
              <li>— 賃貸物件の退去後原状回復</li>
              <li>— 店舗のバックヤード（土足用CF）</li>
            </ul>
          ),
        },
        {
          heading: "施工の流れ",
          content: (
            <ol className="space-y-2">
              <li>1. 現地確認・採寸・素材の選定</li>
              <li>2. 既存床材の撤去または清掃</li>
              <li>3. 下地の補修・調整（必要な場合）</li>
              <li>4. クッションフロアの貼り付け・継ぎ目処理</li>
              <li>5. 清掃・仕上がり確認</li>
            </ol>
          ),
        },
      ]}
      price={[
        { service: "クッションフロア張替え", price: "2,500円〜/m²", note: "素材により変動" },
        { service: "トイレ・洗面所（目安）", price: "別途見積もり", note: "小スペース" },
        { service: "下地補修", price: "別途見積もり", note: "傷みがある場合" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "住宅内装リフォーム", href: "/interior/house-renovation" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
