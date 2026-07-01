import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で和室をリノベーション・全面整備したい方へ｜畳・ふすま・障子の一括工事",
  description:
    "埼玉県で和室をリノベーションしたい方へ。畳・ふすま・障子の一括整備から縁なし畳でのモダン和室まで対応。複数業者不要でスムーズに進められます。",
  path: "/area/saitama/problems/tatami-renovation",
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
      name: "和室のリノベーションで畳・ふすま・障子をまとめて依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、当社では畳・ふすま・障子・網戸の一括整備に対応しています。複数の業者を手配する手間がなく、工程をまとめてスケジュール管理できるため、スムーズに和室全体を整備できます。",
      },
    },
    {
      "@type": "Question",
      name: "縁なし畳（琉球畳）に変更するとどのような部屋になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁なし畳（半畳サイズ）を市松敷きにすると、すっきりとしたモダンな和室になります。間接照明や木製の家具と組み合わせることで、高級感のある和モダン空間が実現します。従来の和室のイメージを大きく刷新できます。",
      },
    },
    {
      "@type": "Question",
      name: "和室をフローリングに変更することも対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ご要望に応じて現地確認後に提案可能です。畳を撤去してフローリングを敷く場合は、床の高さ調整・下地工事が必要になることがあります。まずは現地確認でご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "畳だけでなくふすまや障子の状態も確認してもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、現地確認の際に畳・ふすま・障子の状態をまとめてご確認します。それぞれの状態に応じた施工内容と費用を一括でお見積もりします。",
      },
    },
    {
      "@type": "Question",
      name: "和室リノベーションの費用はどのくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳6枚の表替えとふすま2枚・障子2枚の張替えをまとめて依頼された場合の目安は、素材・グレードにより大きく異なります。正確な費用は部屋のサイズ・素材選定・現場状況を確認したうえで、内訳明示の見積もりをご提示します。",
      },
    },
    {
      "@type": "Question",
      name: "工事を複数まとめると費用は安くなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳・ふすま・障子を一括で依頼いただくことで、個別依頼より出張費・工程費の効率化が図れる場合があります。詳しくはお見積もり時にご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "和室リノベーションにはどのくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表替え・ふすま・障子の張替えをまとめて行う場合、一般的に数日〜1週間程度が目安です。素材の取り寄せが必要な場合や、フローリング工事が含まれる場合はさらに期間がかかることがあります。",
      },
    },
    {
      "@type": "Question",
      name: "リノベーションの工事中は部屋を使えませんか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "施工中は対象の部屋を使用できません。畳の持ち出し・搬入のスケジュールを事前にお知らせしますので、生活への影響を最小限に抑えた工程調整が可能です。",
      },
    },
    {
      "@type": "Question",
      name: "縁なし畳に使える素材はどのようなものがありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "縁なし畳には和紙畳・樹脂畳・い草（縁なし加工）などの素材があります。和紙畳は色あせに強く長持ちし、樹脂畳は水拭き可能で傷・汚れに強いため子どもやペットがいる家庭に向いています。素材サンプルを現地でご覧いただけます。",
      },
    },
    {
      "@type": "Question",
      name: "ふすまや障子の素材・デザインも選べますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、ふすま紙・障子紙ともに複数の素材・デザインからお選びいただけます。シンプルな白無地から和柄・モダンデザインまで対応しています。現地確認時にサンプルをご覧いただきながらお選びください。",
      },
    },
  ],
};

const faqs: { q: string; a: string; category: "general" | "price" | "timing" | "material" | "btob" }[] = [
  {
    category: "general",
    q: "和室のリノベーションで畳・ふすま・障子をまとめて依頼できますか？",
    a: "はい、当社では畳・ふすま・障子・網戸の一括整備に対応しています。複数の業者を手配する手間がなく、工程をまとめてスケジュール管理できるため、スムーズに和室全体を整備できます。",
  },
  {
    category: "material",
    q: "縁なし畳（琉球畳）に変更するとどのような部屋になりますか？",
    a: "縁なし畳（半畳サイズ）を市松敷きにすると、すっきりとしたモダンな和室になります。間接照明や木製の家具と組み合わせることで、高級感のある和モダン空間が実現します。従来の和室のイメージを大きく刷新できます。",
  },
  {
    category: "general",
    q: "和室をフローリングに変更することも対応していますか？",
    a: "ご要望に応じて現地確認後に提案可能です。畳を撤去してフローリングを敷く場合は、床の高さ調整・下地工事が必要になることがあります。まずは現地確認でご相談ください。",
  },
  {
    category: "general",
    q: "畳だけでなくふすまや障子の状態も確認してもらえますか？",
    a: "はい、現地確認の際に畳・ふすま・障子の状態をまとめてご確認します。それぞれの状態に応じた施工内容と費用を一括でお見積もりします。",
  },
  {
    category: "price",
    q: "和室リノベーションの費用はどのくらいかかりますか？",
    a: "畳6枚の表替えとふすま2枚・障子2枚の張替えをまとめて依頼された場合の目安は、素材・グレードにより大きく異なります。正確な費用は部屋のサイズ・素材選定・現場状況を確認したうえで、内訳明示の見積もりをご提示します。",
  },
  {
    category: "price",
    q: "工事を複数まとめると費用は安くなりますか？",
    a: "畳・ふすま・障子を一括で依頼いただくことで、個別依頼より出張費・工程費の効率化が図れる場合があります。詳しくはお見積もり時にご確認ください。",
  },
  {
    category: "timing",
    q: "和室リノベーションにはどのくらいの期間がかかりますか？",
    a: "表替え・ふすま・障子の張替えをまとめて行う場合、一般的に数日〜1週間程度が目安です。素材の取り寄せが必要な場合や、フローリング工事が含まれる場合はさらに期間がかかることがあります。",
  },
  {
    category: "timing",
    q: "リノベーションの工事中は部屋を使えませんか？",
    a: "施工中は対象の部屋を使用できません。畳の持ち出し・搬入のスケジュールを事前にお知らせしますので、生活への影響を最小限に抑えた工程調整が可能です。",
  },
  {
    category: "material",
    q: "縁なし畳に使える素材はどのようなものがありますか？",
    a: "縁なし畳には和紙畳・樹脂畳・い草（縁なし加工）などの素材があります。和紙畳は色あせに強く長持ちし、樹脂畳は水拭き可能で傷・汚れに強いため子どもやペットがいる家庭に向いています。素材サンプルを現地でご覧いただけます。",
  },
  {
    category: "material",
    q: "ふすまや障子の素材・デザインも選べますか？",
    a: "はい、ふすま紙・障子紙ともに複数の素材・デザインからお選びいただけます。シンプルな白無地から和柄・モダンデザインまで対応しています。現地確認時にサンプルをご覧いただきながらお選びください。",
  },
];

export default function TatamiRenovationPage() {
  return (
    <>
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
              { label: "和室リノベーション" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で和室をリノベーション・全面整備したい方へ
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳の張替えだけでなく、ふすま・障子・網戸の一括整備に対応しています。
            縁なし畳でモダンな和室にする、フローリングへ変更するなど、ご要望に合わせた
            リノベーションプランを現地確認後にご提案します。埼玉県内の現地確認・見積もりは無料です。
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
            和室リノベーションの選択肢
          </h2>
          <div className="space-y-6 text-sm text-sumi/80 leading-relaxed">
            <p>
              和室のリノベーションには大きく3つの方向性があります。目的・ライフスタイル・予算に
              合わせて最適なプランを選ぶことが重要です。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                  ① 畳→畳（素材・縁のアップグレード）
                </h3>
                <p className="text-xs text-sumi/70">
                  素材を和紙・樹脂に変更したり、縁なし畳に変えることで同じ和室をリフレッシュ。
                  コストを抑えながら大きくイメージチェンジできます。
                </p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                  ② 畳＋壁紙＋ふすま＋障子の一括整備
                </h3>
                <p className="text-xs text-sumi/70">
                  和室全体をまとめて整備。統一感のある仕上がりになり、
                  業者がひとつにまとまるためスケジュール管理が簡単です。
                </p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                  ③ 畳→フローリング（洋室への転換）
                </h3>
                <p className="text-xs text-sumi/70">
                  畳を撤去してフローリングを敷き、和室を洋室に転換。
                  ライフスタイルの変化に合わせた大規模リノベーション。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳・ふすま・障子の一括整備メリット
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              業者をまとめることで工程調整がスムーズになり、以下のメリットがあります。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>工程調整がスムーズ — 施工の順序・日程を当社内で調整</li>
              <li>スケジュール管理が簡単 — お客様の立ち合いが一度で済む</li>
              <li>費用の透明性が高い — 一括でお見積もりするため総費用が把握しやすい</li>
              <li>複数業者への連絡が不要 — 窓口がひとつにまとまる</li>
            </ul>
            <p>
              和室全体を統一感のある仕上がりにできるのも、一括依頼の大きなメリットです。
              畳の素材・縁のデザイン・ふすま紙・障子紙を合わせてコーディネートできます。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            縁なし畳でモダン和室に
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              縁なし畳（半畳の市松敷き）＋間接照明＋シンプルな家具で、
              現代的な和モダン空間に変わります。従来の和室のイメージを払拭しつつ、
              畳の気持ちよさは残せます。
            </p>
            <p>
              半畳サイズの畳を向きを交互にして敷く「市松敷き」は、光の当たり方によって
              畳の目の方向が変わり、美しいグラデーションを生み出します。
            </p>
            <div className="bg-kiji/30 border border-border rounded-sm p-4 text-xs text-sumi/70">
              縁なし畳の素材は和紙畳・樹脂畳・い草（縁なし加工）から選べます。
              子ども・ペットがいるご家庭には耐久性・耐湿性の高い和紙畳・樹脂畳がおすすめです。
              現地確認時にサンプルをご覧いただきながら選んでいただけます。
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            フローリングへの変更も対応
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              和室から洋室への転換ご希望の場合も、現地確認後に提案可能です。
              畳を撤去してフローリングを敷く場合の費用・工期は状況次第です。
              まずはご相談ください。
            </p>
            <div className="bg-kiji/30 border border-border rounded-sm p-4 text-xs text-sumi/70">
              ※ フローリング工事の対応範囲は現地確認後にご案内します。場合によっては提携業者との
              連携が必要になることもあります。
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用の考え方
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳6枚+ふすま2枚+障子2枚の場合は複数工事の組み合わせになります。
              実際の費用は部屋のサイズ・素材・現場条件によって大きく異なります。
              現地確認後に内訳明示の見積もりをご提示します。
            </p>
          </div>
          <p className="text-xs text-sumi/50 mb-4 mt-4">
            ※ 価格はあくまで目安です。現地確認後に内訳明示の見積もりをご提示します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-sumi/5">
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>施工内容</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>費用目安</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-sumi/80">畳表替え（い草）</td>
                  <td className="py-3 px-4 text-sumi/80">4,500円〜/枚</td>
                  <td className="py-3 px-4 text-sumi/60">畳床が良好な場合</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">縁なし畳（半畳）</td>
                  <td className="py-3 px-4 text-sumi/80">7,000円〜/枚</td>
                  <td className="py-3 px-4 text-sumi/60">素材により異なる。デザイン性が高い</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">ふすまの張替え</td>
                  <td className="py-3 px-4 text-sumi/80">別途お見積もり</td>
                  <td className="py-3 px-4 text-sumi/60">ふすま紙の種類・枚数による</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">障子の張替え</td>
                  <td className="py-3 px-4 text-sumi/80">別途お見積もり</td>
                  <td className="py-3 px-4 text-sumi/60">障子紙の種類・枚数による</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 複数工事の組み合わせ費用は現地確認後に一括でご提示します。
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
              href="/area/saitama"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉県の対応エリア一覧 →
            </Link>
            <Link
              href="/services/fusuma-shoji-amido"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              ふすま・障子・網戸の施工サービス →
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
        title="和室リノベーションのご相談はお気軽にどうぞ"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。畳・ふすま・障子の一括整備から縁なし畳へのリノベーションまで対応します。"
      />
    </>
  );
}
