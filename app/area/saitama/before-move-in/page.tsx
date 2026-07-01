import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の入居前・引越し前に畳を交換したい方へ｜施工スケジュールと費用目安",
  description:
    "埼玉県で入居前・引越し前の畳交換・内装整備をご検討の方へ。入居前整備の重要性、素材選びのポイント、施工スケジュールの立て方、費用目安を専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/before-move-in",
});

const faqItems = [
  {
    category: "general" as const,
    q: "入居前の畳交換はどのくらい前に依頼すればよいですか？",
    a: "引越し日の2〜4週間前を目安にご連絡いただくと、現地確認・素材選定・施工・乾燥のスケジュールを余裕を持って組めます。特に人気素材は取り寄せに時間がかかる場合があるため、早めのご相談をおすすめします。",
  },
  {
    category: "general" as const,
    q: "入居後でも畳の交換はできますか？",
    a: "入居後でも交換は可能ですが、家具や荷物がある状態での作業は手間がかかることがあります。引越し前に施工していただくほうが、仕上がりの品質確保とスムーズな施工の両面でおすすめです。",
  },
  {
    category: "general" as const,
    q: "前の住人が使用した畳の臭いは交換で解消されますか？",
    a: "表替えで表面のい草を新しくすることで、い草由来の臭いは大幅に改善されます。ただし畳床（芯材）に染み込んだ臭いが強い場合は、新調（畳床ごと交換）をご提案することもあります。状態は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "子どもやペットがいる家庭向けにおすすめの素材はありますか？",
    a: "傷・汚れ・水分に強い和紙畳や樹脂畳（ポリプロピレン製）が向いています。水拭きができ、い草に比べてカビや虫が発生しにくいため、お子様がいるご家庭やペットを飼われているご家庭に適しています。",
  },
  {
    category: "general" as const,
    q: "表替えと新調のどちらを選べばよいですか？",
    a: "畳床（芯材）の状態が良ければ表替えで十分です。床が沈む・ふかふかするといったへたりがある場合や、床自体の厚みを変えたい場合は新調をご提案します。現地確認で判断しますので、お気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "施工にはどのくらいの時間がかかりますか？",
    a: "表替えは畳を工場に持ち帰り加工します。一般的に6畳程度であれば1〜2日で仕上がるケースが多いです。新調の場合はサイズ測定・製造・搬入のため数日かかることもあります。スケジュールは現地確認時に詳しくお伝えします。",
  },
  {
    category: "general" as const,
    q: "マンションの和室でも入居前の畳工事はできますか？",
    a: "はい、マンションの和室にも対応しています。管理規約で作業時間が指定されている場合も、事前にお知らせいただければ対応可能です。薄型建材床など、マンション向けの素材も取り扱っています。",
  },
  {
    category: "general" as const,
    q: "6畳和室1部屋だけの整備も依頼できますか？",
    a: "はい、1部屋単位での施工も承っています。枚数に関わらずまずはご相談ください。現地確認後に最適な施工内容とお見積もりをご提示します。",
  },
  {
    category: "general" as const,
    q: "費用の目安を教えてください。",
    a: "裏返しは2,500円〜/枚、表替え（一般い草）は4,500円〜/枚、表替え（和紙）は6,500円〜/枚、新調は15,000円〜/枚が目安です。素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "入居前の施工で古い畳の廃棄もお願いできますか？",
    a: "はい、施工に伴う古い畳の廃棄処理も承っています。廃棄費用はお見積もりに含めてお伝えします。事前にご確認ください。",
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

export default function BeforeMoveInPage() {
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

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "入居前の畳工事" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Before Move-In — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で入居前・引越し前に畳を交換したい方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            引越し後に家具を置いてしまうと、畳工事は大変になります。入居前のタイミングが最もスムーズに施工できる機会です。素材選びから施工スケジュールの立て方まで、専門家が丁寧にサポートします。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 入居前整備をおすすめする理由 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            入居前整備をおすすめする理由
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳工事を行うベストタイミングは、家具や荷物のない入居前です。入居後は大きな家具やソファが置かれることが多く、畳を取り出すための移動や養生の手間が増えます。また施工中は作業スペースが必要なため、何もない状態での施工が最も効率よく、仕上がりの品質も安定します。
            </p>
            <p>
              前の住人が長年使用した畳には、臭いや汚れが蓄積している場合があります。新生活を清潔で新鮮な畳からスタートすることは、住まいへの満足度を高めるうえで非常に効果的です。特にお子様がいるご家庭では、清潔な畳で安心して生活をはじめていただけます。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>家具がない状態で施工するため作業がスムーズ</li>
              <li>仕上がりの品質が安定しやすい</li>
              <li>入居日に合わせたスケジュール調整が可能</li>
              <li>前の住人の臭い・汚れをリセットして新生活がスタートできる</li>
              <li>引越し後すぐに和室を快適に使い始められる</li>
            </ul>
          </div>
        </section>

        {/* ─── 素材選びのポイント ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            素材選びのポイント
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳の表面素材は大きく「い草」「和紙」「樹脂（ポリプロピレン）」の3種類があります。ライフスタイルや和室の使い方に合わせて選ぶことが大切です。
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-2">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">い草畳</h3>
                <p className="text-xs text-sumi/70">
                  伝統的な素材。自然な香りと調湿性が魅力。日当たりの良い和室や、クラシックな和の空間に適しています。国産品から中国産まで価格帯が幅広くあります。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  和紙を樹脂加工した素材。色あせに強く長持ちします。い草より吸湿性が低くカビが発生しにくいため、子どもやペットがいる家庭にも適しています。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  ポリプロピレン製で水拭き可能。汚れ・傷・水分に最も強い素材です。ペットの粗相や子どもの食べこぼしが気になるご家庭に向いています。
                </p>
              </div>
            </div>
            <p className="text-xs text-sumi/60 mt-2">
              ※ 素材ごとのサンプルを現地確認時にご覧いただけます。実際に見て触れて選んでいただけます。
            </p>
          </div>
        </section>

        {/* ─── 施工スケジュールの立て方 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            施工スケジュールの立て方
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              引越し日から逆算してスケジュールを組むことが重要です。理想的には引越しの2〜4週間前に初回のご相談をいただくと、余裕を持った対応が可能です。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お問い合わせ・初回相談（引越し3〜4週間前）：</strong>
                お電話またはフォームでご連絡ください。物件の状況や引越し日程をお聞きします。
              </li>
              <li>
                <strong>現地確認・素材決定（引越し2〜3週間前）：</strong>
                実際に畳の状態を確認し、表替え・裏返し・新調のいずれが適切かを判断します。素材サンプルを見ながら選んでいただきます。
              </li>
              <li>
                <strong>施工（引越し1〜2週間前）：</strong>
                表替えは畳を工場に持ち帰り加工します。6畳程度であれば1〜2日で完成するケースが多いです。
              </li>
              <li>
                <strong>乾燥・搬入（施工後数日）：</strong>
                新しいい草は施工後しばらく換気することで状態が安定します。引越し前に十分な乾燥期間を確保するのが理想です。
              </li>
              <li>
                <strong>引越し・新生活スタート：</strong>
                清潔で新しい畳で新生活を気持ちよく始めていただけます。
              </li>
            </ol>
          </div>
        </section>

        {/* ─── 費用目安テーブル ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">施工内容</th>
                  <th className="px-4 py-3 font-normal">費用目安（1枚あたり）</th>
                  <th className="px-4 py-3 font-normal">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">裏返し</td>
                  <td className="px-4 py-3">2,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">い草の裏面を活用。比較的状態が良い場合</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（一般い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">い草の表面を新しく張替え</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（和紙）</td>
                  <td className="px-4 py-3">6,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">耐久性・耐湿性に優れた和紙素材</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと新しく。床の傷みが著しい場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* ─── よくある相談ケース ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある相談ケース
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <h3 className="text-sumi font-medium mb-2">ケース①：前の住人が使用した畳の臭い・汚れが気になる</h3>
              <p>
                中古物件や賃貸退去後の物件では、長年の使用によるい草の劣化臭や汗・皮脂による汚れが蓄積していることがあります。表替えで表面のい草を新しくすることで臭いの改善が期待できます。床（畳床）に臭いが染み込んでいる場合は新調をご提案することもあります。現地確認後にご案内します。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">ケース②：6畳和室1部屋だけ整備したい</h3>
              <p>
                リビングや洋室は問題ないが、和室1部屋だけ整備したいというご相談はよくあります。1部屋・少枚数の施工も承っています。部屋の広さや畳の状態を確認し、最適な施工内容をご提案します。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">ケース③：引越し日程が決まっているが間に合うか不安</h3>
              <p>
                まずはお電話でご連絡ください。引越し日程をお聞きして、スケジュールが組めるかどうかをお伝えします。余裕がない場合でも、素材の在庫状況や施工スタッフの空き状況によって対応できることがあります。
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── 関連ページ ─── */}
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
              <Link href="/area/saitama/for-homeowner" className="text-kincya hover:underline">
                一般住宅向け畳工事 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/for-rental-owner" className="text-kincya hover:underline">
                賃貸オーナー向け畳工事 →
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
        title="入居前の畳交換・内装整備についてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。引越し日程に合わせたスケジュールをご提案します。"
      />
    </>
  );
}
