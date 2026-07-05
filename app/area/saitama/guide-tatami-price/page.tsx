import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title:
    "埼玉の畳工事 料金ガイド｜費用相場・見積もり方法・賢い値段交渉｜日本畳パートナーズ",
  description:
    "埼玉での畳張替え・表替え・新調の料金相場。費用を左右する要因、見積もり前の注意点、複数物件割引、埼玉内の費用差を解説。",
  path: "/area/saitama/guide-tatami-price",
});

const faqItems = [
  {
    q: "埼玉での畳工事 標準的な料金相場はいくらですか？",
    a: "表替え（一般い草）は4,500円〜/枚、裏返しは2,500円〜/枚、新調は15,000円〜/枚が目安です。ただし素材・枚数・現場条件により大きく変動します。最も一般的な6畳間の表替えで27,000円〜程度が目安です。",
    category: "price" as const,
  },
  {
    q: "埼玉内で料金に地域差はありますか？",
    a: "埼玉県内でも出張範囲・現地への移動時間により、多少の料金差が出ることがあります。さいたま市中心部から遠い地域（秩父・越知・日高方面）では交通費が加算される場合があります。事前の見積もり時にご確認ください。",
    category: "price" as const,
  },
  {
    q: "複数部屋の畳工事で割引はありますか？",
    a: "はい。複数部屋同時施工の場合、1部屋あたりの料金を割引させていただいております。また複数物件・継続案件の場合もご相談ください。見積もり時に詳しい割引内容をご説明します。",
    category: "price" as const,
  },
  {
    q: "見積もりはなぜ無料なのですか？",
    a: "現場の条件（畳の大きさ・材料の種類・搬入搬出の状況など）により、正確な料金が大きく変わるためです。実際の現地を確認してから正確な見積もりをお出しすることで、後々のトラブルを防ぎ、お客様に信頼いただけるサービスを実現しています。",
    category: "price" as const,
  },
  {
    q: "見積もり後に料金が上がることはありますか？",
    a: "基本的には見積もり提出時の金額がそのまま請求額となります。ただし、見積もり後に施工方法の変更をご希望された場合や、想定外の下地補修が必要になった場合は、別途ご相談させていただきます。",
    category: "price" as const,
  },
  {
    q: "法人向けの複数物件割引の仕組みは？",
    a: "不動産管理会社・賃貸オーナー様の継続案件の場合、規模・頻度に応じた割引料金を設定させていただきます。年間予定数量をお知らせいただくことで、より優遇した料金をご提示できます。ご相談ください。",
    category: "price" as const,
  },
  {
    q: "見積もり時に気をつけるべきポイントは何ですか？",
    a: "①部屋の広さと正確な畳の枚数 ②現在の畳の状態（カビ・ダニの有無など） ③希望する素材と予算 ④既存畳の処分方法についての確認 ⑤施工日程の希望日時の確認が重要です。",
    category: "general" as const,
  },
  {
    q: "畳処分費は別途請求されますか？",
    a: "古い畳の処分費については、見積もりに含めるか、別途請求するかを事前にお知らせします。当社では処分費込みの見積もりを提示することが多いため、最初に確認されることをおすすめします。",
    category: "price" as const,
  },
  {
    q: "支払い方法は何がありますか？",
    a: "施工完了後のお支払いが基本です。一般住宅の場合は現金・銀行振込・クレジットカード対応が可能です。法人様・管理会社様は請求書払い（月末締め翌月払い）にも対応しておりますので、お気軽にご相談ください。",
    category: "price" as const,
  },
  {
    q: "見積もり有効期限はどのくらいですか？",
    a: "通常、見積もり提出から30日間有効とさせていただいています。大幅な材料費変動がない限りは、その期間内であれば金額は変わりません。詳細は見積もり書にご記載いたします。",
    category: "general" as const,
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

export default function TatamiGuidePricePage() {
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
            { label: "ガイド" },
            { label: "料金ガイド" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Saitama Guide
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
            }}
          >
            埼玉での畳工事 料金相場ガイド
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            見積もり前に知っておくべきこと。埼玉 畳工事の費用相場、素材別の価格差、見積もりのポイント、複数物件割引まで、料金に関する完全ガイドです。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 埼玉での畳工事 平均費用 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉での畳工事 平均費用の目安
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              埼玉県での畳工事の料金は、施工方法・素材・枚数によって大きく異なります。以下は標準的な相場です。
            </p>

            <div className="bg-sumi/5 p-4 rounded space-y-2">
              <p>
                <span className="font-medium text-sumi">裏返し（3～5年使用の畳）：</span>
                2,500円〜/枚（6畳で約15,000円〜）
              </p>
              <p>
                <span className="font-medium text-sumi">表替え（一般い草）：</span>
                4,500円〜/枚（6畳で約27,000円〜）
              </p>
              <p>
                <span className="font-medium text-sumi">表替え（国産上級い草）：</span>
                7,000円〜/枚（6畳で約42,000円〜）
              </p>
              <p>
                <span className="font-medium text-sumi">新調（建材床）：</span>
                15,000円〜/枚（6畳で約90,000円〜）
              </p>
              <p>
                <span className="font-medium text-sumi">新調（わら床）：</span>
                20,000円〜/枚（6畳で約120,000円〜）
              </p>
            </div>

            <p className="text-xs text-sumi/60 pt-2">
              注：現地の状態・素材グレード・オプション工事により、実際の見積もり額は上下します。無料で現地確認・見積もりいたします。
            </p>
          </div>
        </section>

        {/* ─── サービス別料金 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉 畳工事のサービス別料金詳解
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ 裏返し（最も安価）</h3>
              <p className="text-sm text-sumi/80 mb-3">
                使用2〜3年の畳表を裏返す方法。費用が最も安く、短期間で完成します。ただし元の畳の状態が良好であることが前提となります。
              </p>
              <p className="text-xs text-sumi/60">
                <span className="font-medium">料金：</span>2,500円〜/枚 |{" "}
                <span className="font-medium">工期：</span>1〜2日
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ 表替え（最一般的）</h3>
              <p className="text-sm text-sumi/80 mb-3">
                畳床は使用継続し、表面のい草のみを新しく張替える最も一般的な方法です。5〜8年で交換が目安です。
              </p>
              <p className="text-xs text-sumi/60">
                <span className="font-medium">料金：</span>4,500円〜/枚 |{" "}
                <span className="font-medium">工期：</span>1〜2日
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ 新調（全刷新）</h3>
              <p className="text-sm text-sumi/80 mb-3">
                畳床ごと全て新しくする方法。踏み込むと沈む、カビが深部に至ったなどの場合に選択します。長期的には表替えより経済的です。
              </p>
              <p className="text-xs text-sumi/60">
                <span className="font-medium">料金：</span>15,000円〜/枚（建材床）、20,000円〜/枚（わら床） |{" "}
                <span className="font-medium">工期：</span>2〜7日
              </p>
            </div>
          </div>
        </section>

        {/* ─── 素材別価格差 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉 素材別の価格比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sumi/5">
                  <th className="border border-border p-3 text-left font-medium">
                    素材種別
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    表替え価格
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    特徴・向き
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    中国産い草（一般）
                  </td>
                  <td className="border border-border p-3">4,500円〜/枚</td>
                  <td className="border border-border p-3 text-xs">
                    最も一般的。予算重視向け
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    熊本産い草（国産上級）
                  </td>
                  <td className="border border-border p-3">7,000円〜/枚</td>
                  <td className="border border-border p-3 text-xs">
                    品質重視。香り・色合いが優れた選択
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    和紙畳
                  </td>
                  <td className="border border-border p-3">6,500円〜/枚</td>
                  <td className="border border-border p-3 text-xs">
                    アレルギー・ペット対応向け
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    樹脂畳
                  </td>
                  <td className="border border-border p-3">8,000円〜/枚</td>
                  <td className="border border-border p-3 text-xs">
                    完全防水。飲食店・ペット向け
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── 広さ別費用目安 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉 広さ別の畳工事費用目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sumi/5">
                  <th className="border border-border p-3 text-left font-medium">
                    広さ
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    枚数
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    裏返し
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    表替え（一般）
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    新調
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    4.5畳
                  </td>
                  <td className="border border-border p-3">3枚</td>
                  <td className="border border-border p-3">7,500円〜</td>
                  <td className="border border-border p-3">13,500円〜</td>
                  <td className="border border-border p-3">45,000円〜</td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    6畳
                  </td>
                  <td className="border border-border p-3">6枚</td>
                  <td className="border border-border p-3">15,000円〜</td>
                  <td className="border border-border p-3">27,000円〜</td>
                  <td className="border border-border p-3">90,000円〜</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">
                    8畳
                  </td>
                  <td className="border border-border p-3">8枚</td>
                  <td className="border border-border p-3">20,000円〜</td>
                  <td className="border border-border p-3">36,000円〜</td>
                  <td className="border border-border p-3">120,000円〜</td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    10畳
                  </td>
                  <td className="border border-border p-3">10枚</td>
                  <td className="border border-border p-3">25,000円〜</td>
                  <td className="border border-border p-3">45,000円〜</td>
                  <td className="border border-border p-3">150,000円〜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/60 mt-4">
            注：江戸間（埼玉標準）を基準としています。古い住宅のサイズが異なる場合は別途調整費用が発生することがあります。
          </p>
        </section>

        {/* ─── 費用が変動する要因 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉 畳工事の費用が変動する主な要因
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-2">
                ①土台（畳床）の状態
              </h3>
              <p className="text-sm text-sumi/80">
                わら床を使用している古い畳の場合、下地補修が必要になり費用が増加することがあります。建材床（合板）の場合は追加費用がかからないことが多いです。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-2">
                ②カビ・ダニなどの深部汚染
              </h3>
              <p className="text-sm text-sumi/80">
                カビがい草だけに留まっていれば表替えで対応できますが、畳床まで浸透している場合は新調が必要になり大幅に費用が増加します。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-2">
                ③搬入搬出の作業性
              </h3>
              <p className="text-sm text-sumi/80">
                狭い通路・階段・搬入口が狭い物件は搬入搬出に手間がかかり、追加費用が発生することがあります。事前に状況をお知らせいただくと正確な見積もりができます。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-2">
                ④複数部屋・複数物件の割引
              </h3>
              <p className="text-sm text-sumi/80">
                複数部屋同時施工、複数物件、継続案件の場合は1部屋あたりの料金が割引されます。事前にお知らせいただくことで、より優遇された見積もりが可能です。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-2">
                ⑤埼玉県内の地域
              </h3>
              <p className="text-sm text-sumi/80">
                さいたま市中心部から遠い地域（秩父・越知・日高方面など）は出張交通費が加算される場合があります。事前にご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 見積もりのチェックリスト ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            見積もり前にチェックすべきポイント
          </h2>
          <div className="bg-white border border-border rounded-sm p-6">
            <ul className="space-y-3 text-sm text-sumi/80">
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>
                  現在の畳のサイズと枚数を正確に把握している（サイズ選びガイド参照）
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>
                  畳の劣化状態を確認している（カビ・ダニ・色褪せなど）
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>
                  希望する素材とグレードが決まっている（い草・和紙・樹脂など）
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>予算の目安が決まっている</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>
                  複数部屋がある場合は全部屋対応してもらえるか確認している
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>古い畳の処分方法が明確である</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>戸建かマンションか、階段の有無など搬入条件を伝えている</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-kincya shrink-0">☑</span>
                <span>理想的な施工予定日を伝えている</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ─── 複数物件割引 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            複数物件・法人向けの割引対応
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80">
            <p>
              不動産管理会社・賃貸オーナー様の複数物件・継続案件については、別途優遇料金を設定いたします。
            </p>

            <div className="bg-sumi/5 p-4 rounded space-y-2">
              <p className="font-medium text-sumi">複数部屋同時施工</p>
              <p>
                1部屋あたり5〜10%の割引が可能です。搬入搬出・材料発注・職人配置がまとまることで、コスト削減が実現します。
              </p>
            </div>

            <div className="bg-sumi/5 p-4 rounded space-y-2">
              <p className="font-medium text-sumi">複数物件・継続案件</p>
              <p>
                年間数棟の案件がある場合、規模に応じた特別割引を設定させていただきます。請求書払い（月末締め翌月払い）にも対応可能です。
              </p>
            </div>

            <div className="bg-sumi/5 p-4 rounded space-y-2">
              <p className="font-medium text-sumi">法人向け原状回復工事</p>
              <p>
                退去後の畳・襖・障子の一括対応で、施工の効率化と費用削減が可能です。写真付き報告書の提出もいたします。
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉 畳工事の料金に関するよくあるご質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── Related Pages ─── */}
        <section className="pt-8 border-t border-border">
          <h3 className="text-lg text-sumi mb-6 font-medium">関連ページ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/area/saitama/guide-tatami-buying"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉で畳を選ぶ時の完全ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                素材・サイズ・予算の選び方
              </p>
            </Link>
            <Link
              href="/area/saitama/guide-tatami-maintenance"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉での畳メンテナンス完全ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                定期保全・お手入れ方法
              </p>
            </Link>
            <Link
              href="/area/saitama"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉の畳工事 TOP
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                対応エリア・サービス一覧
              </p>
            </Link>
            <Link
              href="/area/saitama/for-homeowner"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                一般住宅向け畳工事
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                戸建・マンション対応
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* ─── CTA ─── */}
      <CTASection
        title="埼玉の畳工事 見積もりのご依頼"
        subtitle="正確な費用をお知りになりたい方は、無料でお見積もりいたします。埼玉県全域対応。"
        variant="dark"
      />
    </>
  );
}
