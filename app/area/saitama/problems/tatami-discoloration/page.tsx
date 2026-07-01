import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳の変色・日焼けが気になる方へ｜対処法と表替えの判断基準",
  description:
    "埼玉県で畳の変色・日焼けが気になる方へ。い草の黄変・褐変のメカニズム、変色と劣化の違い、表替えのタイミング、UV対策・カーテンによる防止策、素材別の費用目安を専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-discoloration",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳が黄色くなるのはなぜですか？",
    a: "い草に含まれるクロロフィル（葉緑素）が紫外線・空気中の酸素・熱によって分解されるためです。新しい畳の青々とした色は数か月で薄れ、黄金色から黄色、さらに使い込むと茶褐色へと変化していきます。これはい草本来の自然な経年変化です。",
  },
  {
    category: "general" as const,
    q: "南側の部屋だと変色が早いですか？",
    a: "はい、日光が直接当たる南向きの部屋では紫外線量が多く、変色が早く進む傾向があります。特に窓際の畳は他の箇所と比べて明らかに色が異なることも珍しくありません。遮光カーテンやUVカットフィルムの活用が有効です。",
  },
  {
    category: "general" as const,
    q: "変色した畳はもう使えないのですか？",
    a: "変色だけであれば畳の機能はまだ残っている場合が多いです。クッション性・吸湿性・断熱性は畳床の状態に左右されるため、踏んだときの感触や臭いに問題がなければ引き続き使用できます。見た目が気になる場合は表替えをご検討ください。",
  },
  {
    category: "general" as const,
    q: "変色と劣化はどう見分ければよいですか？",
    a: "変色は色が変わるだけで、表面のい草のハリや弾力が保たれている状態です。劣化はい草がボロボロとほぐれる、踏むとへたりを感じる、カビ臭や湿った臭いがするといった症状を伴います。変色のみなら表替えで対応できますが、劣化が進んでいれば新調が必要になる場合があります。",
  },
  {
    category: "general" as const,
    q: "遮光カーテンを使えば変色を防げますか？",
    a: "完全に防ぐことはできませんが、紫外線量を大幅に減らすことで変色の進行を遅らせる効果があります。遮光カーテンに加え、UVカットフィルムを窓ガラスに貼るとさらに効果的です。ただし、換気不足による湿気には注意が必要です。",
  },
  {
    category: "general" as const,
    q: "ラグやカーペットを敷いて畳を保護するのは良いですか？",
    a: "ラグの下は湿気がこもりやすく、カビやダニの温床になるリスクがあります。変色を防ぐ目的でラグを敷く場合は、定期的にラグをめくって換気することが重要です。長期間ラグを敷きっぱなしにすることはお勧めしません。",
  },
  {
    category: "general" as const,
    q: "和紙畳は変色しにくいですか？",
    a: "はい、和紙畳は特殊加工が施されており、い草に比べて色あせしにくい特徴があります。カラーバリエーションも豊富で、好みの色を長期間維持しやすいです。ただし、い草特有の香りや自然素材の風合いは異なります。",
  },
  {
    category: "general" as const,
    q: "表替えは何年ごとに行うのが目安ですか？",
    a: "一般的には使用開始から5〜10年が表替えの目安です。南向きの部屋や日当たりが強い部屋では5〜7年ほどで変色が進む場合があります。変色だけでなく、ささくれやへたりが出てきたタイミングで検討するのが適切です。",
  },
  {
    category: "general" as const,
    q: "裏返しで変色した面を隠すことはできますか？",
    a: "裏返しは使用済みの畳表の裏面を表に出す施工ですが、裏面はすでに変色している場合がほとんどです。変色を改善するには、新しい畳表に交換する表替えが必要です。裏返しは主に2〜3年程度使用した畳のメンテナンスとして有効です。",
  },
  {
    category: "general" as const,
    q: "変色の状態を確認してもらうことはできますか？",
    a: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。変色の程度と畳床の状態を確認したうえで、裏返し・表替え・新調のどれが適切かをご案内します。まずはお気軽にご連絡ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: { "@type": "State", name: "埼玉県" },
  url: SITE_URL,
};

export default function TatamiDiscolorationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "お悩み別" },
            { label: "畳の変色・日焼け" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Tatami Discoloration — Saitama
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳の変色・色あせが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            い草の畳は経年で色が変化します。日焼けによる黄変・褐変は自然な現象ですが、
            変色の程度と劣化のサインを正しく見分けることで、適切なメンテナンス時期を判断できます。
            埼玉県内の現地確認・見積もりは無料で承っています。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            変色・日焼けのメカニズム
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳表（ゴザ）に使われるい草には、葉緑素（クロロフィル）が豊富に含まれています。
              新しい畳が青々としているのはこのためですが、紫外線・酸素・熱の影響を受けることで
              クロロフィルは分解され、色が抜けていきます。これが「黄変」と呼ばれる最初の変色段階です。
            </p>
            <p>
              さらに使用が進むと、い草内部のタンニンやその他の成分が酸化し、黄色から茶褐色へと変化する
              「褐変」が起こります。この段階になると元の色には戻りません。
            </p>
            <p>
              南側の部屋や窓際は日照量が多く、変色の進行が早い傾向があります。
              同じ部屋でも窓から離れた箇所と窓際で色が大きく異なるケースもよく見られます。
              また、エアコンの風が直接当たる部分も乾燥による変色が進みやすいです。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            変色と劣化の違い——機能はまだ残っているか
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              変色（色あせ）だけであれば、畳の機能はまだ十分に残っている場合が多いです。
              い草のクッション性・吸湿性・断熱性は畳床（内部の芯材）と畳表のい草の状態に依存するため、
              見た目の色が変わっていても踏み心地や機能に問題がなければ使い続けられます。
            </p>
            <p>
              一方で、以下の症状が加わっている場合は劣化のサインです。表替えや新調を検討してください。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>踏んだときにふかふかと沈む感触がある（畳床のへたり）</li>
              <li>表面のい草がボロボロとほぐれてくる（ささくれ・毛羽立ち）</li>
              <li>カビ臭・湿った臭いがする</li>
              <li>畳の端が浮いてめくれてきている</li>
              <li>黒ずみやカビの斑点が見える</li>
            </ul>
            <p>
              これらの症状が複数重なっている場合は、単純な表替えでは対応できず、
              畳床ごとの新調が必要になる場合もあります。まずは現地確認でご確認ください。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            表替えのタイミング——変色が進んだらどうすべきか
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              一般的な表替えの目安は使用開始から5〜10年です。変色が気になり始めたらまず裏返し
              （表面を裏返して再利用する施工）を検討できますが、裏返しに適しているのは
              使用開始から2〜3年程度の比較的新しい畳表の場合のみです。
            </p>
            <p>
              すでに5年以上経過していたり、劣化の症状が出ている場合は表替えが適切です。
              「まだ使えるからもったいない」という気持ちはわかりますが、表面のい草が劣化すると
              ほこりやカビが発生しやすくなり、長期放置はかえってコストがかかる場合があります。
            </p>
            <p>
              変色の進んでいる畳でも、新しいい草に表替えするだけで見た目・香り・踏み心地が
              大きく改善します。部屋の印象も一新されるため、来客前や模様替えのタイミングに
              合わせて検討される方も多くいらっしゃいます。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            変色を遅らせるための防止策
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              い草の変色を完全に止めることはできませんが、適切な対策で進行を遅らせることが可能です。
            </p>
            <p>
              <strong>遮光カーテン・UVカットフィルム</strong><br />
              紫外線が畳に直接当たることを防ぐのが最も効果的な対策です。
              遮光カーテンやUVカットフィルムを窓に取り付けることで、紫外線量を大幅に削減できます。
              特に南向き・西向きの部屋では重要です。
            </p>
            <p>
              <strong>ラグ・カーペットの注意点</strong><br />
              変色防止目的でラグを敷く方もいますが、ラグの下は湿気がこもりやすく
              カビ・ダニのリスクが高まります。敷く場合は週に一度以上ラグをめくって換気し、
              完全に覆い続けることは避けてください。
              特に梅雨・夏場は湿気対策を優先してください。
            </p>
            <p>
              <strong>定期的な換気・掃除</strong><br />
              室内の空気を定期的に入れ替えることで、畳の湿気を逃がし劣化を遅らせます。
              掃除機がけは畳目に沿って行うことで、ほこりをしっかり除去できます。
            </p>
          </div>
        </section>

        {/* Section 5 — Price Table */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。実際の費用は畳のサイズ・状態・素材により異なります。
            対応可否は現地確認後にご案内します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>施工内容</th>
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>費用目安（1枚あたり）</th>
                  <th className="text-left py-3 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">裏返し</td>
                  <td className="py-3 pr-6 text-sumi/80">2,500円〜</td>
                  <td className="py-3 text-sumi/60">使用2〜3年程度の畳表に有効</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">表替え（い草）</td>
                  <td className="py-3 pr-6 text-sumi/80">4,500円〜</td>
                  <td className="py-3 text-sumi/60">標準的なメンテナンス</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">表替え（和紙畳表）</td>
                  <td className="py-3 pr-6 text-sumi/80">6,500円〜</td>
                  <td className="py-3 text-sumi/60">変色しにくく耐久性が高い</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">畳新調</td>
                  <td className="py-3 pr-6 text-sumi/80">15,000円〜</td>
                  <td className="py-3 text-sumi/60">畳床ごと作り替え</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 対応可否は現地確認後にご案内します。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* Related links */}
        <section>
          <h2
            className="text-xl text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/area/saitama" className="text-kincya hover:underline">
                埼玉県の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/tatami" className="text-kincya hover:underline">
                埼玉県の畳工事サービス →
              </Link>
            </li>
            <li>
              <Link href="/services/washi-tatami" className="text-kincya hover:underline">
                和紙畳・変色しにくい素材について →
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-kincya hover:underline">
                お問い合わせ・無料見積もり →
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <CTASection
        title="畳の変色・色あせについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。変色の程度を確認してから適切な対処法をご案内します。"
      />
    </>
  );
}
