import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で入居前・引越し前に畳を整備したい方へ｜スケジュールと費用目安",
  description:
    "埼玉県で入居前・引越し前に畳を整備したい方へ。清潔なスタートのための畳の状態確認ポイント・施工スケジュール・素材選びを解説。現地確認・お見積もり無料。",
  path: "/area/saitama/before-move-in",
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
      name: "入居前の畳整備はどのくらい前に依頼すればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "引越し日の2〜3週間前には相談を開始することを推奨します。問い合わせ→現地確認（1〜3日後）→見積もり提示→素材確定→施工日調整→施工（引き取り翌日〜2日返し）という流れになります。余裕を持って早めにご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "入居後でも畳の整備はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "入居後でも整備は可能ですが、家具や荷物がある状態での作業は手間がかかることがあります。引越し前に施工していただくほうが、仕上がりの品質確保とスムーズな施工の両面でおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "前の住人が使用した畳の臭いは整備で解消されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表替えで表面のい草を新しくすることで、い草由来の臭いは大幅に改善されます。畳床（芯材）に染み込んだ臭いが強い場合は新調をご提案することもあります。状態は現地確認後にご案内します。",
      },
    },
    {
      "@type": "Question",
      name: "子どもやペットがいる家庭向けにおすすめの素材はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "傷・汚れ・水分に強い和紙畳や樹脂畳（ポリプロピレン製）が向いています。水拭きができ、い草に比べてカビや虫が発生しにくいため、お子様がいるご家庭やペットを飼われているご家庭に適しています。",
      },
    },
    {
      "@type": "Question",
      name: "表替えと新調のどちらを選べばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳床（芯材）の状態が良ければ表替えで十分です。床が沈む・ふかふかするといったへたりがある場合や、厚みを変えたい場合は新調をご提案します。現地確認で判断しますのでお気軽にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "入居前整備で素材を変更することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、入居前は素材を変えるチャンスです。子ども・ペットがいる場合は和紙畳・樹脂畳が扱いやすいです。縁なし畳に変えてモダンな和室にすることも可能です。ライフスタイルに合わせてご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "施工にはどのくらいの時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表替えは畳を工場に持ち帰り加工します。引き取り翌日〜2日返しが目安です。新調の場合はサイズ測定・製造・搬入のため数日かかることもあります。スケジュールは現地確認時に詳しくお伝えします。",
      },
    },
    {
      "@type": "Question",
      name: "マンションの和室でも入居前の畳工事はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、マンションの和室にも対応しています。管理規約で作業時間が指定されている場合も、事前にお知らせいただければ対応可能です。薄型建材床など、マンション向けの素材も取り扱っています。",
      },
    },
    {
      "@type": "Question",
      name: "6畳和室1部屋だけの整備も依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、1部屋単位での施工も承っています。枚数に関わらずまずはご相談ください。現地確認後に最適な施工内容とお見積もりをご提示します。",
      },
    },
    {
      "@type": "Question",
      name: "入居前の畳整備の費用目安を教えてください。",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表替えい草4,500円〜/枚、和紙畳6,500円〜/枚が目安です。枚数・サイズにより変動します。引越し日に合わせて施工できるよう早めの相談をお勧めします。正確な費用は現地確認後にご案内します。",
      },
    },
  ],
};

const faqs: { q: string; a: string; category: "general" | "price" | "timing" | "material" | "btob" }[] = [
  {
    category: "timing",
    q: "入居前の畳整備はどのくらい前に依頼すればよいですか？",
    a: "引越し日の2〜3週間前には相談を開始することを推奨します。問い合わせ→現地確認（1〜3日後）→見積もり提示→素材確定→施工日調整→施工（引き取り翌日〜2日返し）という流れになります。余裕を持って早めにご相談ください。",
  },
  {
    category: "timing",
    q: "入居後でも畳の整備はできますか？",
    a: "入居後でも整備は可能ですが、家具や荷物がある状態での作業は手間がかかることがあります。引越し前に施工していただくほうが、仕上がりの品質確保とスムーズな施工の両面でおすすめです。",
  },
  {
    category: "general",
    q: "前の住人が使用した畳の臭いは整備で解消されますか？",
    a: "表替えで表面のい草を新しくすることで、い草由来の臭いは大幅に改善されます。畳床（芯材）に染み込んだ臭いが強い場合は新調をご提案することもあります。状態は現地確認後にご案内します。",
  },
  {
    category: "material",
    q: "子どもやペットがいる家庭向けにおすすめの素材はありますか？",
    a: "傷・汚れ・水分に強い和紙畳や樹脂畳（ポリプロピレン製）が向いています。水拭きができ、い草に比べてカビや虫が発生しにくいため、お子様がいるご家庭やペットを飼われているご家庭に適しています。",
  },
  {
    category: "general",
    q: "表替えと新調のどちらを選べばよいですか？",
    a: "畳床（芯材）の状態が良ければ表替えで十分です。床が沈む・ふかふかするといったへたりがある場合や、厚みを変えたい場合は新調をご提案します。現地確認で判断しますのでお気軽にご相談ください。",
  },
  {
    category: "material",
    q: "入居前整備で素材を変更することはできますか？",
    a: "はい、入居前は素材を変えるチャンスです。子ども・ペットがいる場合は和紙畳・樹脂畳が扱いやすいです。縁なし畳に変えてモダンな和室にすることも可能です。ライフスタイルに合わせてご相談ください。",
  },
  {
    category: "timing",
    q: "施工にはどのくらいの時間がかかりますか？",
    a: "表替えは畳を工場に持ち帰り加工します。引き取り翌日〜2日返しが目安です。新調の場合はサイズ測定・製造・搬入のため数日かかることもあります。スケジュールは現地確認時に詳しくお伝えします。",
  },
  {
    category: "general",
    q: "マンションの和室でも入居前の畳工事はできますか？",
    a: "はい、マンションの和室にも対応しています。管理規約で作業時間が指定されている場合も、事前にお知らせいただければ対応可能です。薄型建材床など、マンション向けの素材も取り扱っています。",
  },
  {
    category: "general",
    q: "6畳和室1部屋だけの整備も依頼できますか？",
    a: "はい、1部屋単位での施工も承っています。枚数に関わらずまずはご相談ください。現地確認後に最適な施工内容とお見積もりをご提示します。",
  },
  {
    category: "price",
    q: "入居前の畳整備の費用目安を教えてください。",
    a: "表替えい草4,500円〜/枚、和紙畳6,500円〜/枚が目安です。枚数・サイズにより変動します。引越し日に合わせて施工できるよう早めの相談をお勧めします。正確な費用は現地確認後にご案内します。",
  },
];

export default function BeforeMoveInPage() {
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
              { label: "入居前の畳整備" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で入居前・引越し前に畳を整備したい方へ
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
            引越し後に家具を置いてしまうと、畳工事は大変になります。入居前のタイミングが
            最もスムーズに施工できる機会です。素材選びから施工スケジュールの立て方まで、
            専門家が丁寧にサポートします。埼玉県内の現地確認・お見積もりは無料です。
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
            入居前に畳を整備する理由
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              前の入居者の使用痕・臭い・色あせをリセットできる入居前が、畳整備の最も効率的なタイミングです。
              家具を入れる前に施工できるため作業もスムーズで、仕上がりの品質も安定します。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>家具がない状態で施工するため作業がスムーズ</li>
              <li>仕上がりの品質が安定しやすい</li>
              <li>入居日に合わせたスケジュール調整が可能</li>
              <li>前の住人の臭い・汚れをリセットして新生活がスタートできる</li>
              <li>引越し後すぐに和室を快適に使い始められる</li>
            </ul>
            <p>
              新居での清潔なスタートを切るために、入居前が最も効率的なタイミングです。
              特にお子様がいるご家庭では、清潔な畳で安心して生活をはじめていただけます。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            新居の畳の状態確認ポイント
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>施工種別を判断するために以下のポイントを確認してください。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-2 text-sm">① 色あせ・変色の程度</p>
                <p className="text-xs text-sumi/70">い草の緑色が失われ茶色・黄色に変色している場合は表替えを検討。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-2 text-sm">② ささくれや毛羽立ち</p>
                <p className="text-xs text-sumi/70">表面がざらつく・い草がほつれている場合は表替えのタイミング。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-2 text-sm">③ 踏んだときの沈みやふかつき</p>
                <p className="text-xs text-sumi/70">大きな沈みは畳床（芯材）の傷みサイン。新調が必要な場合も。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-2 text-sm">④ 臭いやカビの有無</p>
                <p className="text-xs text-sumi/70">異臭・カビが見られる場合は表替えまたは新調が必要。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            表替えで清潔な状態に
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              表替えは費用を抑えながら清潔感を確保できる最も一般的な方法です。
              新品のい草の香りが心地よく、引越し後の生活に心地よいスタートを提供します。
              畳床が健全であれば表替えで十分です。
            </p>
            <p>
              い草の芳香成分には気持ちを落ち着かせる効果があるとされています。
              新生活のはじまりを清潔で香り豊かな畳でスタートすることは、
              住まいへの満足度を高めるうえで非常に効果的です。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            素材変更のタイミング
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              入居前は素材を変えるチャンスです。子ども・ペットがいる場合は
              和紙畳・樹脂畳が扱いやすいです。縁なし畳に変えてモダンな和室にすることも可能です。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm">い草畳</h3>
                <p className="text-xs text-sumi/70">伝統的な素材。自然な香りと調湿性が魅力。4,500円〜/枚。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm">和紙畳</h3>
                <p className="text-xs text-sumi/70">色あせに強く長持ち。子ども・ペットがいる家庭に適。6,500円〜/枚。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2 text-sm">樹脂畳</h3>
                <p className="text-xs text-sumi/70">水拭き可能。傷・汚れ・水分に最も強い。ペット向け。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            引越し日から逆算したスケジュール
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>余裕を持って2〜3週間前には相談を開始することを推奨します。</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お問い合わせ・初回相談（引越し3〜4週間前）：</strong>
                お電話またはフォームでご連絡ください。
              </li>
              <li>
                <strong>現地確認（1〜3日後）：</strong>
                実際に畳の状態を確認し、施工種別を判断します。
              </li>
              <li>
                <strong>見積もり提示・素材確定：</strong>
                素材サンプルを見ながら選んでいただきます。
              </li>
              <li>
                <strong>施工日調整→施工（引き取り翌日〜2日返し）：</strong>
                表替えは工場持ち帰りで加工。
              </li>
              <li>
                <strong>引越し・新生活スタート：</strong>
                清潔な畳で新生活を気持ちよく始めていただけます。
              </li>
            </ol>
          </div>
        </section>

        {/* Section 6 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。枚数・サイズ・素材により変動します。
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
                  <td className="py-3 px-4 text-sumi/80">表替えい草</td>
                  <td className="py-3 px-4 text-sumi/80">4,500円〜</td>
                  <td className="py-3 px-4 text-sumi/60">畳床が良好な場合</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">和紙畳</td>
                  <td className="py-3 px-4 text-sumi/80">6,500円〜</td>
                  <td className="py-3 px-4 text-sumi/60">耐久性・耐湿性が高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 引越し日に合わせて施工できるよう早めの相談をお勧めします。
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
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/area/saitama/tatami-omotegae"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉の畳表替えサービス →
            </Link>
            <Link
              href="/area/saitama"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉県の対応エリア一覧 →
            </Link>
            <Link
              href="/contact"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              お問い合わせ・無料見積もり →
            </Link>
            <Link
              href="/flow"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              施工の流れ →
            </Link>
          </div>
        </section>
      </main>

      <CTASection
        title="入居前の畳整備についてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。引越し日程に合わせたスケジュールをご提案します。"
      />
    </>
  );
}
