import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳の縁・へりが傷んでいる方へ｜対処法と表替えの選択肢",
  description:
    "埼玉県で畳の縁（へり）の傷みにお悩みの方へ。縁の役割・縁だけ交換できない理由・縁なし畳への変更など対処法を解説。現地確認・お見積もり無料。",
  path: "/area/saitama/problems/tatami-edge-damage",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "畳の縁（へり）だけ交換することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁のみの単独交換は技術的に難しく、費用対効果の面でも表替えとセットで行う方が合理的です。縁は畳表を固定する役割があるため、縁だけ取り替えると畳表がずれたりシワが生じる場合があります。縁の傷みは表替えのタイミングとして捉えることが最も合理的です。",
      },
    },
    {
      "@type": "Question",
      name: "縁が傷んでいる場合、表替えと新調どちらが適切ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁が傷んでいる場合でも、畳床（芯材）が良好であれば表替えで対応できます。踏んだときに大きな沈みやへたりを感じる場合、畳床の傷みも進んでいる可能性があるため新調を検討してください。現地確認でご判断します。",
      },
    },
    {
      "@type": "Question",
      name: "縁なし畳（琉球畳）にするメリットは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁なし畳はヘリがないため、縁の摩耗・破れという問題が根本的になくなります。デザイン的にもすっきりとしており、和モダンなインテリアに合わせやすいです。半畳サイズを市松模様に敷くと、光の反射で美しいグラデーションが生まれます。",
      },
    },
    {
      "@type": "Question",
      name: "縁の素材・デザインはどのように選べますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁の素材・柄は無地・格子・花柄など数十種類あります。和室の雰囲気や用途に合わせてお選びいただけます。格式を重視する和室には無地の上質な縁、カジュアルな和室にはポップな柄など、現地確認時にサンプルをご覧いただきながら選んでいただけます。",
      },
    },
    {
      "@type": "Question",
      name: "縁なし畳は費用が高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁なし畳（半畳サイズ）は縁あり畳と比べると1枚あたりの単価が高くなる傾向があります。ただし、縁の傷みによるメンテナンスが不要になる点を考えると、長期的にはコストが抑えられる場合もあります。",
      },
    },
    {
      "@type": "Question",
      name: "賃貸退去時に縁が破れていたら費用はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁の破れが通常の使用範囲を超える損傷と判断された場合、原状回復費用が発生することがあります。ただし経年劣化との区別が重要です。退去前に状態を確認し、必要に応じて表替えで整備することでトラブルを防げます。",
      },
    },
    {
      "@type": "Question",
      name: "縁なし畳への変更は既存の畳床を使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "既存の畳床の状態によります。畳床が良好であれば表替え形式で縁なし畳表に変更できる場合があります。ただし縁なし畳は端部の処理が異なるため、畳床の形状・状態によっては新調が必要になることもあります。現地確認でご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "縁の傷みを自分で補修することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "市販の補修テープで一時的に対処することは可能ですが、長持ちせず見た目も不自然になりがちです。根本的な解決には表替えと縁の新調が必要です。応急処置として使用しながら、早めに専門業者へご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "縁の表替えはどのくらいの費用がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁付きの表替えはい草素材で4,500円〜/枚、和紙素材で6,500円〜/枚が目安です。縁なし畳（半畳）は7,000円〜/枚が目安です。素材・枚数・サイズにより変動します。正確な費用は現地確認後にご案内します。",
      },
    },
    {
      "@type": "Question",
      name: "縁の状態を診てもらうだけでも相談できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。縁の状態だけでなく畳全体を確認したうえで、表替え・縁なし畳への変更・新調のどれが適切かをご案内します。お気軽にご相談ください。",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉で畳の縁・へりが傷んでいる方へ", item: `${SITE_URL}/area/saitama/problems/tatami-edge-damage` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/problems/tatami-edge-damage#webpage`,
  name: "埼玉で畳の縁・へりが傷んでいる方へ",
  description:
    "埼玉県で畳の縁（へり）の傷みにお悩みの方へ。縁の役割・縁だけ交換できない理由・縁なし畳への変更など対処法を解説。現地確認・お見積もり無料。",
  url: `${SITE_URL}/area/saitama/problems/tatami-edge-damage`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const faqs: { q: string; a: string; category: "general" | "price" | "timing" | "material" | "btob" }[] = [
  {
    category: "general",
    q: "畳の縁（へり）だけ交換することはできますか？",
    a: "縁のみの単独交換は技術的に難しく、費用対効果の面でも表替えとセットで行う方が合理的です。縁は畳表を固定する役割があるため、縁だけ取り替えると畳表がずれたりシワが生じる場合があります。縁の傷みは表替えのタイミングとして捉えることが最も合理的です。",
  },
  {
    category: "timing",
    q: "縁が傷んでいる場合、表替えと新調どちらが適切ですか？",
    a: "縁が傷んでいる場合でも、畳床（芯材）が良好であれば表替えで対応できます。踏んだときに大きな沈みやへたりを感じる場合、畳床の傷みも進んでいる可能性があるため新調を検討してください。現地確認でご判断します。",
  },
  {
    category: "material",
    q: "縁なし畳（琉球畳）にするメリットは何ですか？",
    a: "縁なし畳はヘリがないため、縁の摩耗・破れという問題が根本的になくなります。デザイン的にもすっきりとしており、和モダンなインテリアに合わせやすいです。半畳サイズを市松模様に敷くと、光の反射で美しいグラデーションが生まれます。",
  },
  {
    category: "material",
    q: "縁の素材・デザインはどのように選べますか？",
    a: "縁の素材・柄は無地・格子・花柄など数十種類あります。和室の雰囲気や用途に合わせてお選びいただけます。格式を重視する和室には無地の上質な縁、カジュアルな和室にはポップな柄など、現地確認時にサンプルをご覧いただきながら選んでいただけます。",
  },
  {
    category: "price",
    q: "縁なし畳は費用が高いですか？",
    a: "縁なし畳（半畳サイズ）は縁あり畳と比べると1枚あたりの単価が高くなる傾向があります。ただし、縁の傷みによるメンテナンスが不要になる点を考えると、長期的にはコストが抑えられる場合もあります。",
  },
  {
    category: "general",
    q: "賃貸退去時に縁が破れていたら費用はかかりますか？",
    a: "縁の破れが通常の使用範囲を超える損傷と判断された場合、原状回復費用が発生することがあります。ただし経年劣化との区別が重要です。退去前に状態を確認し、必要に応じて表替えで整備することでトラブルを防げます。",
  },
  {
    category: "material",
    q: "縁なし畳への変更は既存の畳床を使えますか？",
    a: "既存の畳床の状態によります。畳床が良好であれば表替え形式で縁なし畳表に変更できる場合があります。ただし縁なし畳は端部の処理が異なるため、畳床の形状・状態によっては新調が必要になることもあります。現地確認でご確認ください。",
  },
  {
    category: "general",
    q: "縁の傷みを自分で補修することはできますか？",
    a: "市販の補修テープで一時的に対処することは可能ですが、長持ちせず見た目も不自然になりがちです。根本的な解決には表替えと縁の新調が必要です。応急処置として使用しながら、早めに専門業者へご相談ください。",
  },
  {
    category: "price",
    q: "縁の表替えはどのくらいの費用がかかりますか？",
    a: "縁付きの表替えはい草素材で4,500円〜/枚、和紙素材で6,500円〜/枚が目安です。縁なし畳（半畳）は7,000円〜/枚が目安です。素材・枚数・サイズにより変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general",
    q: "縁の状態を診てもらうだけでも相談できますか？",
    a: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。縁の状態だけでなく畳全体を確認したうえで、表替え・縁なし畳への変更・新調のどれが適切かをご案内します。お気軽にご相談ください。",
  },
];

export default function TatamiEdgeDamagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "エリア", href: "/area" },
              { label: "埼玉県", href: "/area/saitama" },
              { label: "お悩み" },
              { label: "畳の縁の傷み" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳の縁・へりが傷んでいる方へ
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳の縁（へり）のほつれ・破れ・色あせでお困りの方へ。縁の役割・縁だけ交換できない理由・
            表替えのタイミング・縁なし畳への変更など、対処法を専門家が丁寧に解説します。
            埼玉県内の現地確認・お見積もりは無料です。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳の縁（へり）の役割
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳の縁（へり）は、畳の四辺に縫い付けられた布テープのことです。
              単なる装飾ではなく、畳表の端を保護しい草の解れを防ぐ機能的な役割を担っています。
              また、畳同士が接する部分の見た目を整え、部屋全体の印象に大きく影響します。
            </p>
            <p>
              縁が傷む主な原因は、踏みつけ・擦れによる摩耗です。特に部屋の出入口付近・
              廊下と和室の境目・椅子を使う場所は摩耗が早くなります。
              縁の素材は綿・化繊・紋縁など種類があり、グレードによって耐久性も異なります。
            </p>
            <p>
              縁の傷みを放置すると布がほつれてめくれ上がり、転倒リスクや内部への湿気侵入につながります。
              見た目だけでなく安全面からも早めの対処が重要です。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            縁だけの交換は基本できない
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              「縁だけ替えてほしい」というご要望をいただくことがありますが、縁の単独交換は
              技術的・費用的に難しい場合がほとんどです。
            </p>
            <p>
              縁は畳表（ゴザ部分）をしっかりと挟み込んで固定しています。縁だけを外して
              新しい縁を取り付けると、畳表がずれたりシワが生じるリスクがあり、
              仕上がりの品質が保ちにくくなります。
            </p>
            <p>
              縁が傷んでいる場合は表替えと同時に縁も新調するのが一般的です。
              縁の傷みは表替えのタイミングと捉えることが合理的で、
              コスト面でも別々に依頼するより効率的です。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            縁なし畳という選択肢
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              縁の傷みが繰り返し気になる方には、縁なし畳（琉球畳・半畳タイプ）への変更を
              ご提案しています。縁を使わない縁なし畳にすることで、縁の傷みという問題が
              根本的になくなります。
            </p>
            <p>
              デザイン面でもすっきりとしたモダンな印象になり、和モダンのインテリアに
              よく合います。半畳サイズを市松模様に配置すると、光の反射でグラデーションが生まれ、
              視覚的に美しい仕上がりになります。
            </p>
            <div className="bg-kiji/30 border border-border rounded-sm p-4 text-xs text-sumi/70">
              縁なし畳は縁付き畳より1枚あたりの単価が若干高めですが、
              デザイン性・メンテナンス性の高さを考えると長期的にメリットがあります。
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            表替えのタイミングとして捉える
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              縁の傷みは表替えのタイミングを判断する重要なサインです。縁がほつれ始めたら、
              畳表自体も使用年数が経過している可能性が高く、表替えの時期を迎えているケースが多いです。
            </p>
            <p>
              この機会に畳の素材・縁のデザインを見直すことで、和室全体をリフレッシュできます。
              縁が傷んでいるタイミングは、素材変更や縁なし畳への変更を検討する絶好のチャンスでもあります。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>畳表（ゴザ部分）のい草がボロボロしていないか確認</li>
              <li>踏んだときにへたりや沈みを感じないか確認</li>
              <li>カビ・ダニの臭いがしないか確認</li>
              <li>使用開始から何年経過しているか確認</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。畳のサイズ・状態・縁の素材・枚数により異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-sumi/5">
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>施工内容</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>費用目安（1枚あたり）</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-sumi/80">表替え（縁付き）い草</td>
                  <td className="py-3 px-4 text-sumi/80">4,500円〜</td>
                  <td className="py-3 px-4 text-sumi/60">縁の素材・グレードにより異なる</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">表替え（縁付き）和紙</td>
                  <td className="py-3 px-4 text-sumi/80">6,500円〜</td>
                  <td className="py-3 px-4 text-sumi/60">耐久性・耐湿性に優れた素材</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">縁なし（半畳）</td>
                  <td className="py-3 px-4 text-sumi/80">7,000円〜</td>
                  <td className="py-3 px-4 text-sumi/60">和紙・樹脂など。デザイン性が高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 対応可否・正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* Related links */}
        <section>
          <h2
            className="text-xl font-medium text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/area/saitama/tatami-omotegae"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉の畳表替えサービス →
            </Link>
            <Link
              href="/services/tatami-omotegae"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              畳表替えサービス詳細 →
            </Link>
            <Link
              href="/contact"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              お問い合わせ・無料見積もり →
            </Link>
          </div>
        </section>
      </main>

      <CTASection
        title="畳の縁の傷みについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。縁の状態を確認してから表替えか新調かをご案内します。"
      />
    </>
  );
}
