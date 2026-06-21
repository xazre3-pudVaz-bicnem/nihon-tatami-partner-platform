import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳の選び方ガイド | 素材・縁・用途別の選定方法 | ${SITE_NAME}`,
  description:
    "畳の選び方を素材（い草/和紙/樹脂）・縁あり/縁なし・用途別に徹底解説。比較表、選択フローチャート、予算別の選択肢、旅館・寺社・住宅別おすすめ、よくある選択ミス、FAQまで。後悔しない畳選びの決定版。",
  path: "/guide/how-to-choose-tatami",
});

const chooseFaqs: FaqItem[] = [
  {
    category: "material",
    q: "い草・和紙・樹脂、どれを選べばよいですか？",
    a: "香り・自然な風合いを重視するならい草、色あせ・ささくれに強く清掃しやすさを求めるなら和紙、水拭きできる高耐久を求めるなら樹脂が向いています。ペット・小さなお子様のいるご家庭は和紙・樹脂がおすすめです。",
  },
  {
    category: "material",
    q: "縁あり畳と縁なし畳はどう違いますか？",
    a: "縁あり畳は伝統的で落ち着いた印象、縁なし畳（琉球畳）はすっきりした和モダンな印象です。縁なしは半畳を市松に敷くデザインが人気ですが、縁ありよりやや高価になる傾向があります。空間の雰囲気で選びます。",
  },
  {
    category: "material",
    q: "賃貸物件にはどの畳がよいですか？",
    a: "退去後の原状回復はコストを抑えられる国産い草の表替えが基本です。空室対策・ペット可転換を狙うなら和紙畳・樹脂畳への変更が有効です。物件のターゲット層に合わせて選びます。",
  },
  {
    category: "material",
    q: "旅館・寺社にはどの畳がよいですか？",
    a: "格式を重んじる本堂・特別室・茶室には手刈り天日干しの上質な国産い草と格の高い縁を、稼働率の高い客室・大広間には耐久性の高い和紙畳をおすすめします。用途と格に応じて使い分けます。",
  },
  {
    category: "material",
    q: "和紙畳と樹脂畳の違いは何ですか？",
    a: "和紙畳は和紙をこより状にして樹脂コーティングした素材で、い草に近い見た目と適度な調湿性があります。樹脂畳はポリプロピレン製で水拭きに強く、より高い耐水性があります。質感は和紙、防水性は樹脂が優れます。",
  },
  {
    category: "material",
    q: "色や柄は自由に選べますか？",
    a: "和紙畳・樹脂畳は色・柄のバリエーションが豊富で、インテリアに合わせて選べます。い草は自然な緑〜飴色が中心ですが、染色したカラー畳もあります。サンプルをご覧いただきながら選定できます。",
  },
  {
    category: "price",
    q: "予算が限られている場合のおすすめは？",
    a: "費用を抑えるなら、まず裏返し（使用2〜3年の畳表が対象）、次に国産い草・機械すきの表替えが選択肢です。床がしっかりしていれば新調までは不要なことも多いです。状態を見て無駄のない方法をご提案します。",
  },
  {
    category: "general",
    q: "畳選びでよくある失敗は何ですか？",
    a: "「価格だけで選んで風合いに後悔」「ペットがいるのにい草を選んで早く傷んだ」「縁なしにしたら割高だった」などがあります。ライフスタイル・用途・予算のバランスで選ぶことが大切です。本ページの選び方を参考にしてください。",
  },
  {
    category: "material",
    q: "畳のサイズは選べますか？",
    a: "畳のサイズは部屋の規格（京間・江戸間・中京間など）や寸法に合わせて製作します。新調・縁なし畳では半畳サイズも選べます。現地で正確に採寸し、隙間なく敷き込みます。",
  },
  {
    category: "general",
    q: "実物のサンプルを見てから決められますか？",
    a: "はい。現地確認の際に、畳表・縁の実物見本をご覧いただきながら選定できます。色味・質感・縁のデザインを実際に確かめてお選びいただけます。",
  },
];

export default function HowToChooseTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Guide"
      title="畳の選び方ガイド"
      subtitle="素材・縁・用途・予算から、後悔しない畳の選び方を解説します。比較表とフローチャートで、あなたに合った畳が見つかります。"
      breadcrumbs={[
        { label: "ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "畳の選び方ガイド" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-herinashi-01.png"
      sections={[
        {
          heading: "畳選びの3つのポイント",
          content: (
            <>
              <p>
                畳選びは「素材」「縁（へり）」「用途・予算」の3つの視点で考えると失敗しません。
                それぞれの特徴を理解し、ライフスタイルや空間の目的に合わせて選びましょう。
              </p>
              <ul className="space-y-2">
                <li>— <strong className="text-sumi">素材</strong>：い草・和紙・樹脂のどれを選ぶか</li>
                <li>— <strong className="text-sumi">縁</strong>：縁あり・縁なし（琉球畳）のどちらにするか</li>
                <li>— <strong className="text-sumi">用途・予算</strong>：住宅・賃貸・旅館・寺社など、目的と予算に合うか</li>
              </ul>
            </>
          ),
        },
        {
          heading: "素材比較表（い草・和紙・樹脂）",
          content: (
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-4 font-normal">項目</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">い草</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">和紙</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">樹脂</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs text-sumi/80">
                  <tr><td className="py-3 px-4 text-sumi">香り・風合い</td><td className="py-3 px-4">◎ 自然な香り</td><td className="py-3 px-4">○ い草に近い</td><td className="py-3 px-4">△ 人工的</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">耐久性</td><td className="py-3 px-4">△ 経年で劣化</td><td className="py-3 px-4">◎ 高い</td><td className="py-3 px-4">◎ 高い</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">色あせ</td><td className="py-3 px-4">△ しやすい</td><td className="py-3 px-4">◎ しにくい</td><td className="py-3 px-4">◎ しにくい</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">清掃性</td><td className="py-3 px-4">△ 水拭き不可</td><td className="py-3 px-4">○ 拭ける</td><td className="py-3 px-4">◎ 水拭き可</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">カビ・ダニ</td><td className="py-3 px-4">△ 出やすい</td><td className="py-3 px-4">◎ 出にくい</td><td className="py-3 px-4">◎ 出にくい</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">費用</td><td className="py-3 px-4">◎ 手頃〜</td><td className="py-3 px-4">○ やや高め</td><td className="py-3 px-4">○ やや高め</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "縁あり・縁なしの選び方",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">縁あり畳</strong> — 伝統的で落ち着いた印象。縁の柄・格で空間の品格を演出できます。
                和室らしさを重視する空間・寺社・旅館に。
              </li>
              <li>
                <strong className="text-sumi">縁なし畳（琉球畳）</strong> — すっきりした和モダンな印象。半畳を市松に敷くデザインが人気。
                リビングの一角・和モダン空間・店舗に。縁ありよりやや高価になる傾向があります。
              </li>
            </ul>
          ),
        },
        {
          heading: "用途別選択フローチャート",
          content: (
            <div className="bg-kiji/40 border border-border p-5 space-y-3 text-sm text-sumi/80">
              <p><strong className="text-sumi">Q1. ペット・小さなお子様がいる？</strong></p>
              <p className="pl-4">→ はい：和紙畳・樹脂畳（傷・汚れに強い）</p>
              <p className="pl-4">→ いいえ：Q2へ</p>
              <p><strong className="text-sumi">Q2. い草の香り・自然な風合いを楽しみたい？</strong></p>
              <p className="pl-4">→ はい：国産い草（住宅は機械すき、格式重視なら手刈り）</p>
              <p className="pl-4">→ いいえ：Q3へ</p>
              <p><strong className="text-sumi">Q3. 水拭きなど手入れのしやすさを最優先？</strong></p>
              <p className="pl-4">→ はい：樹脂畳</p>
              <p className="pl-4">→ いいえ：和紙畳（バランス型）</p>
              <p><strong className="text-sumi">Q4. 和モダンな見た目にしたい？</strong></p>
              <p className="pl-4">→ はい：縁なし畳（琉球畳）を検討</p>
            </div>
          ),
        },
        {
          heading: "予算別の選択肢",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">費用最優先</strong>：裏返し（使用2〜3年が対象）→ 国産い草・機械すきの表替え</li>
              <li>— <strong className="text-sumi">バランス重視</strong>：和紙畳の表替え（耐久・清掃性と費用の両立）</li>
              <li>— <strong className="text-sumi">長く快適に</strong>：樹脂畳・和紙畳への変更、または新調</li>
              <li>— <strong className="text-sumi">格式・上質さ重視</strong>：手刈り天日干しの国産い草＋上質な縁、わら床の新調</li>
            </ul>
          ),
        },
        {
          heading: "用途別のおすすめ（旅館・寺社・住宅）",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">住宅（一般）</strong>：国産い草の表替え。ペット・子育て世帯は和紙・樹脂</li>
              <li>— <strong className="text-sumi">住宅（和モダン）</strong>：縁なし畳・カラー畳</li>
              <li>— <strong className="text-sumi">賃貸</strong>：原状回復は国産い草、空室対策・ペット可は和紙・樹脂</li>
              <li>— <strong className="text-sumi">旅館</strong>：一般客室は国産い草/和紙、特別室・茶室は手刈りい草＋上質縁</li>
              <li>— <strong className="text-sumi">寺社</strong>：本堂は上質い草＋格の高い縁、実務スペースは実用素材</li>
              <li>— <strong className="text-sumi">店舗</strong>：人の出入りに強い和紙・樹脂畳、小上がりは縁なしも人気</li>
            </ul>
          ),
        },
        {
          heading: "よくある選択ミス",
          content: (
            <ul className="space-y-2">
              <li>— 価格だけで選び、風合い・耐久性に後悔する</li>
              <li>— ペットがいるのにい草を選び、早く傷んでしまう</li>
              <li>— 縁なしにしたら想定より割高だった</li>
              <li>— 床がへたっているのに表替えだけして、すぐ沈みが再発する</li>
              <li>— 湿気の多い部屋にい草を選び、カビが出てしまう</li>
            </ul>
          ),
        },
      ]}
      faqs={chooseFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
      ]}
      relatedPages={[
        { label: "い草・和紙・樹脂畳の比較", href: "/compare/igusa-washi-resin" },
        { label: "表替え・裏返し・新調の違い", href: "/compare/omotegae-uragaeshi-shinchou" },
        { label: "畳の料金ガイド", href: "/guide/tatami-price-guide" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
