import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の畳張替え・表替えの料金目安と見積もり方法",
  description:
    "埼玉県の畳張替え・表替えの料金目安。素材別料金一覧、枚数別（4.5畳/6畳/8畳）の見積もり例、見積もりの流れ、よくある料金トラブルと注意点を専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/price-estimate",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳の費用はどのように決まりますか？",
    a: "主に①素材の種類・グレード、②施工内容（裏返し・表替え・新調）、③枚数、④現場の状況（搬入のしやすさ・床の状態など）によって決まります。正確な費用は現地確認後にお伝えします。",
  },
  {
    category: "general" as const,
    q: "電話やメールだけで見積もりはもらえますか？",
    a: "おおよその目安はお伝えできますが、正確な見積もりには現地確認が必要です。畳の実際の状態・枚数・素材の選定は現場を見ないと確定できません。現地確認・見積もりは無料ですので、お気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "裏返しと表替えの費用の違いを教えてください。",
    a: "裏返しは畳表（い草）の裏面を使うため費用を抑えられます（目安2,500円〜/枚）。表替えは新しいい草に交換するため費用は高くなりますが（目安4,500円〜/枚）、より長期間使用できます。畳の使用年数と状態によって適切な施工方法が変わります。",
  },
  {
    category: "general" as const,
    q: "国産い草と中国産い草の価格差はどのくらいですか？",
    a: "中国産い草の表替えが4,500円〜/枚に対し、熊本産などの国産上位グレードは8,000円〜/枚が目安です。国産い草は品質・肌触り・耐久性に優れますが費用は上がります。ライフスタイルや和室の使い方に合わせてお選びください。",
  },
  {
    category: "general" as const,
    q: "和紙畳・樹脂畳の費用はい草と比べてどうですか？",
    a: "和紙畳・樹脂畳の表替えは6,500円〜/枚が目安です。い草の一般品より高くなりますが、耐久性・耐汚性が高く長期間使用できるため、長い目で見るとコスト差が縮まる場合があります。",
  },
  {
    category: "general" as const,
    q: "廃棄処分費用は別途かかりますか？",
    a: "古い畳の廃棄処分費用はお見積もりに含めてお伝えします。廃棄方法や処分業者によって費用が異なりますが、事前に明確にお伝えしますので見積もり後にご確認ください。",
  },
  {
    category: "general" as const,
    q: "見積もりより実際の費用が高くなることはありますか？",
    a: "現地確認なしの電話見積もりは、実際の状態と異なる場合があります。現地確認後に提示した見積もりから大幅に変わることは基本的にありませんが、施工中に予期せぬ下地の傷みが判明した場合などは追加費用が発生することがあります。その場合は事前にご説明してから作業を進めます。",
  },
  {
    category: "general" as const,
    q: "4.5畳・6畳・8畳での費用の目安を教えてください。",
    a: "表替え（一般い草・4,500円〜/枚）の場合、4.5畳は約20,250円〜、6畳は約27,000円〜、8畳は約36,000円〜が目安です。枚数と素材によって変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "見積もりをお願いしてから断ることはできますか？",
    a: "はい、見積もりを確認していただき、ご納得いただけなければご断りいただいて構いません。現地確認・見積もりは無料です。見積もり後に断られることに対するキャンセル料等は発生しません。",
  },
  {
    category: "general" as const,
    q: "複数の業者から見積もりを取ることは問題ありませんか？",
    a: "複数社から見積もりを取ることは全く問題ありません。比較検討のうえでご判断ください。ただし、見積もりの比較の際は費用だけでなく、廃棄処分費用の有無・施工内容の詳細・素材のグレードなど内容全体を確認することをおすすめします。",
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

export default function PriceEstimatePage() {
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
            { label: "料金目安・見積もり" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Price Guide — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉の畳張替え・表替えの料金目安
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳工事の費用は素材・枚数・施工内容・現場状況によって変わります。このページでは素材別の料金目安、枚数別の見積もり例、見積もりの流れ、料金トラブルの注意点をまとめました。正確な費用は現地確認後にご案内します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 料金が決まる主な要素 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            料金が決まる主な要素
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              畳工事の料金は「いくらですか？」と聞かれても一概に答えにくいのは、複数の要素が組み合わさって決まるためです。以下が主な要素です。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">① 素材の種類・グレード</h3>
                <p className="text-xs text-sumi/70">
                  中国産い草・国産い草・和紙・樹脂など素材によって費用が異なります。同じい草でも産地・品質によって価格帯が幅広くあります。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">② 枚数</h3>
                <p className="text-xs text-sumi/70">
                  枚数が多いほど合計費用が増えます。6畳＝6枚、4.5畳＝4.5枚が基本ですが、物件によって異なる場合があります。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">③ 施工内容</h3>
                <p className="text-xs text-sumi/70">
                  裏返し・表替え・新調の3種類で費用が大きく異なります。現在の畳の状態によって適切な施工方法が決まります。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">④ 現場の状況</h3>
                <p className="text-xs text-sumi/70">
                  搬入のしやすさ・床の状態・特殊サイズの有無なども費用に影響します。特殊なサイズや特殊な状況は別途確認が必要です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 素材別料金一覧テーブル ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            素材別料金一覧
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">施工内容・素材</th>
                  <th className="px-4 py-3 font-normal">費用目安（1枚あたり）</th>
                  <th className="px-4 py-3 font-normal">特徴・備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">裏返し</td>
                  <td className="px-4 py-3">2,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">既存い草の裏面を利用。使用3〜5年以内が目安</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（中国産い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">最もスタンダードな選択肢</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（国産い草）</td>
                  <td className="px-4 py-3">8,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">熊本産など。品質・肌触り・耐久性が高い</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（和紙畳）</td>
                  <td className="px-4 py-3">6,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">色あせに強く長持ち。汚れにも強い</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（樹脂畳）</td>
                  <td className="px-4 py-3">6,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">水拭き可。ペット・子ども向け</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調（建材床）</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと新しく。マンション向け薄型も対応</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">新調（わら床）</td>
                  <td className="px-4 py-3">20,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">伝統的なわら床。断熱・調湿性が高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* ─── 枚数別の見積もり例テーブル ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            枚数別の見積もり例
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">部屋の広さ</th>
                  <th className="px-4 py-3 font-normal">表替え（一般）目安</th>
                  <th className="px-4 py-3 font-normal">表替え（和紙）目安</th>
                  <th className="px-4 py-3 font-normal">新調（建材床）目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">4.5畳（約4.5枚）</td>
                  <td className="px-4 py-3">約20,250円〜</td>
                  <td className="px-4 py-3">約29,250円〜</td>
                  <td className="px-4 py-3">約67,500円〜</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">6畳（約6枚）</td>
                  <td className="px-4 py-3">約27,000円〜</td>
                  <td className="px-4 py-3">約39,000円〜</td>
                  <td className="px-4 py-3">約90,000円〜</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">8畳（約8枚）</td>
                  <td className="px-4 py-3">約36,000円〜</td>
                  <td className="px-4 py-3">約52,000円〜</td>
                  <td className="px-4 py-3">約120,000円〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 上記はあくまで参考の目安です。費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* ─── 見積もりの流れ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            見積もりの流れ
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お問い合わせ：</strong>
                お電話またはお問い合わせフォームでご連絡ください。畳の状態・ご希望の施工内容・ご都合の良い日程をお聞きします。
              </li>
              <li>
                <strong>現地確認（無料）：</strong>
                実際に伺い、畳の状態・枚数・素材を確認します。現地確認は無料です。所要時間は30分〜1時間程度が目安です。
              </li>
              <li>
                <strong>素材・枚数の確認と選定：</strong>
                素材サンプルをお見せしながら、ご希望に合った素材をご選択いただきます。
              </li>
              <li>
                <strong>お見積もり提示：</strong>
                確認した内容をもとにお見積もりをご提示します。不明な点はその場でご質問ください。
              </li>
              <li>
                <strong>ご承認・施工日調整：</strong>
                お見積もりにご納得いただけたら、施工日を調整して作業に入ります。見積もり後のキャンセルも可能です。
              </li>
              <li>
                <strong>施工・完了：</strong>
                施工完了後に仕上がりをご確認いただきます。
              </li>
            </ol>
          </div>
        </section>

        {/* ─── よくある料金トラブルと注意点 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある料金トラブルと注意点
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <h3 className="text-sumi font-medium mb-2">① 現場確認なしの見積もりには注意</h3>
              <p>
                電話やメールだけで提示された金額が、実際の施工後に大きく変わるケースがあります。畳の実際の状態・特殊サイズの有無・床の傷み具合は、現場を見ないと正確に判断できません。現地確認を経た見積もりと比較することが重要です。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">② 廃棄処分費用の確認</h3>
              <p>
                古い畳の廃棄処分費用が見積もりに含まれているかどうかを事前に確認してください。含まれていない場合、後から追加費用として請求されることがあります。当社ではお見積もりに廃棄処分費用を明記します。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">③ 追加作業が発生するケース</h3>
              <p>
                施工中に畳床の傷みや床板の問題が判明した場合、追加費用が発生することがあります。当社では追加作業が必要になった場合は事前にご説明し、ご承認いただいてから作業を進めます。判明した問題を黙って処理することはありません。
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
              <Link href="/price" className="text-kincya hover:underline">
                料金・費用目安（全国版） →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/for-homeowner" className="text-kincya hover:underline">
                一般住宅向け畳工事 →
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
        title="料金・見積もりについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。素材・枚数をお聞きして丁寧にご説明します。"
      />
    </>
  );
}
