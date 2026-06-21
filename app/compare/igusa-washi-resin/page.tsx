import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `い草・和紙・樹脂畳の比較 | 耐久性・費用・質感 | ${SITE_NAME}`,
  description:
    "い草・和紙・樹脂畳を耐久性・費用・メンテナンス・質感の観点から比較表で解説。用途別のおすすめ、それぞれのメリット・デメリット、FAQまで。畳の素材選びで迷っている方へ。",
  path: "/compare/igusa-washi-resin",
});

const compareFaqs: FaqItem[] = [
  {
    category: "material",
    q: "い草・和紙・樹脂、結局どれがいいですか？",
    a: "香り・自然な風合いを最優先するならい草、色あせ・ささくれに強く清掃しやすさとのバランスを求めるなら和紙、水拭きなど高い耐水性・防汚性を求めるなら樹脂が向いています。ライフスタイルと用途で選ぶのが正解です。",
  },
  {
    category: "material",
    q: "和紙畳と樹脂畳はどう違いますか？",
    a: "和紙畳は和紙をこより状にして樹脂コーティングした素材で、い草に近い見た目と適度な調湿性があります。樹脂畳はポリプロピレン製で、より高い耐水性・防汚性がありますが、調湿性は低めです。質感は和紙、防水性は樹脂が優れます。",
  },
  {
    category: "material",
    q: "ペットがいる家にはどれがよいですか？",
    a: "和紙畳・樹脂畳がおすすめです。爪傷・水分に強く、粗相をすぐ拭けば染み込みにくく、においも残りにくいためです。い草は染み込みやすく傷みやすいので、ペットがいる場合は避けるのが無難です。",
  },
  {
    category: "material",
    q: "い草のメリットは何ですか？",
    a: "自然な香りによるリラックス効果、調湿性（湿気を吸ったり放出したりする）、足触りのよさ、伝統的な風合いがメリットです。日本の和室らしさを楽しみたい方に最適です。",
  },
  {
    category: "material",
    q: "い草のデメリットは何ですか？",
    a: "経年で色あせ・ささくれが出やすい、水分に弱くカビ・ダニが発生しやすい、水拭きができない点です。定期的なお手入れと張り替えが前提となります。",
  },
  {
    category: "material",
    q: "和紙・樹脂畳に香りはありますか？",
    a: "い草のような自然な香りはありません。香りを重視する場合はい草が適しています。ただし、和紙・樹脂は色あせ・カビダニに強いため、清潔さ・耐久性を優先する場合に向いています。",
  },
  {
    category: "price",
    q: "費用はどれが安いですか？",
    a: "一般的に、国産い草（機械すき）の表替えが5,500円〜/枚と手頃で、和紙畳・樹脂畳は8,000円〜/枚とやや高めです。ただし和紙・樹脂は長持ちするため、長期的なコストパフォーマンスは高いと言えます。",
  },
  {
    category: "material",
    q: "色や柄のバリエーションはどれが豊富ですか？",
    a: "和紙畳・樹脂畳は色・柄のバリエーションが豊富で、インテリアに合わせやすいです。い草は自然な緑〜飴色が中心ですが、染色したカラー畳もあります。",
  },
];

export default function CompareIgusaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Compare"
      title="い草・和紙・樹脂畳の比較"
      subtitle="3つの畳素材を耐久性・費用・メンテナンス・質感で比較。用途別のおすすめから、あなたに合った素材が分かります。"
      breadcrumbs={[
        { label: "比較ガイド", href: "/compare/omotegae-uragaeshi-shinchou" },
        { label: "い草・和紙・樹脂畳の比較" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-herinashi-01.png"
      sections={[
        {
          heading: "3つの素材の概要",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">い草</strong> — 天然のい草を織った伝統的な畳表。
                自然な香り・調湿性・足触りのよさが魅力。
              </li>
              <li>
                <strong className="text-sumi">和紙畳</strong> — 和紙をこより状にして樹脂コーティングした畳表。
                い草に近い見た目で、色あせ・ささくれに強い。
              </li>
              <li>
                <strong className="text-sumi">樹脂畳</strong> — ポリプロピレン製の畳表。
                水拭きでき、高い耐水性・防汚性を持つ。
              </li>
            </ul>
          ),
        },
        {
          heading: "比較表（耐久性・費用・メンテ・質感）",
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
                  <tr><td className="py-3 px-4 text-sumi">耐久性</td><td className="py-3 px-4">△ 経年で劣化</td><td className="py-3 px-4">◎ 高い</td><td className="py-3 px-4">◎ 高い</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">費用（表替え）</td><td className="py-3 px-4 text-kincya">5,500円〜</td><td className="py-3 px-4 text-kincya">8,000円〜</td><td className="py-3 px-4 text-kincya">9,000円〜</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">メンテナンス</td><td className="py-3 px-4">△ 水拭き不可</td><td className="py-3 px-4">○ 拭ける</td><td className="py-3 px-4">◎ 水拭き可</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">質感・香り</td><td className="py-3 px-4">◎ 自然な香り</td><td className="py-3 px-4">○ い草に近い</td><td className="py-3 px-4">△ 人工的</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">色あせ</td><td className="py-3 px-4">△ しやすい</td><td className="py-3 px-4">◎ しにくい</td><td className="py-3 px-4">◎ しにくい</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">カビ・ダニ</td><td className="py-3 px-4">△ 出やすい</td><td className="py-3 px-4">◎ 出にくい</td><td className="py-3 px-4">◎ 出にくい</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">調湿性</td><td className="py-3 px-4">◎ 高い</td><td className="py-3 px-4">○ ある</td><td className="py-3 px-4">△ 低め</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">色・柄</td><td className="py-3 px-4">○ 限定的</td><td className="py-3 px-4">◎ 豊富</td><td className="py-3 px-4">◎ 豊富</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "それぞれのメリット・デメリット",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">い草</strong> — ◎香り・調湿性・伝統的な風合い／△色あせ・カビダニ・水拭き不可
              </li>
              <li>
                <strong className="text-sumi">和紙畳</strong> — ◎耐久・色あせに強い・色柄豊富・適度な調湿／△い草の香りはない・やや高価
              </li>
              <li>
                <strong className="text-sumi">樹脂畳</strong> — ◎高耐水・水拭き可・防汚・色柄豊富／△調湿性が低い・人工的な質感・やや高価
              </li>
            </ul>
          ),
        },
        {
          heading: "用途別おすすめ",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">和室らしさ・香りを楽しみたい住宅</strong>：い草</li>
              <li>— <strong className="text-sumi">ペット・小さなお子様のいる家庭</strong>：和紙・樹脂</li>
              <li>— <strong className="text-sumi">湿気の多い部屋・カビが心配</strong>：和紙・樹脂</li>
              <li>— <strong className="text-sumi">水回り近く・汚れやすい空間・店舗</strong>：樹脂</li>
              <li>— <strong className="text-sumi">賃貸の空室対策・ペット可転換</strong>：和紙・樹脂</li>
              <li>— <strong className="text-sumi">旅館・寺社の格式ある空間</strong>：上質ない草（耐久重視の客室は和紙）</li>
            </ul>
          ),
        },
      ]}
      faqs={compareFaqs}
      relatedServices={[
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
      ]}
      relatedPages={[
        { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "表替え・裏返し・新調の違い", href: "/compare/omotegae-uragaeshi-shinchou" },
        { label: "コラム：和紙畳と樹脂畳の比較", href: "/column/washi-tatami-vs-resin-tatami" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
