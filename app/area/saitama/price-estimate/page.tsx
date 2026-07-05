import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の畳張替え・表替えの料金目安｜素材別・部屋別の費用例",
  description:
    "埼玉県の畳裏返し・表替え・新調の料金目安。素材別・部屋の広さ別の費用例と見積もりの流れを解説。現地確認・お見積もり無料。追加費用は事前に説明します。",
  path: "/area/saitama/price-estimate",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉の畳張替え・表替えの料金目安と見積もり方法", item: `${SITE_URL}/area/saitama/price-estimate` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/price-estimate#webpage`,
  name: "埼玉の畳張替え・表替えの料金目安｜素材別・部屋別の費用例",
  description: "埼玉県の畳裏返し・表替え・新調の料金目安。素材別・部屋の広さ別の費用例と見積もりの流れを解説。現地確認・お見積もり無料。追加費用は事前に説明します。",
  url: `${SITE_URL}/area/saitama/price-estimate`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  "@id": `${SITE_URL}/#local-business`,
};

const faqs = [
  {
    category: "price" as const,
    q: "畳の表替えの費用の目安を教えてください。",
    a: "裏返し2,500円〜/枚、表替え（い草）4,500円〜/枚、表替え（和紙）6,500円〜/枚、新調15,000円〜/枚が目安です。実際の費用は現地確認後にお見積もりで確定します。",
  },
  {
    category: "price" as const,
    q: "6畳の表替えはいくらかかりますか？",
    a: "い草（一般）で6枚×4,500円＝約27,000円〜が目安です。和紙畳なら約39,000円〜、新調なら約90,000円〜が参考値です。枚数・素材・現場状況によって変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "price" as const,
    q: "国産い草と中国産い草の価格差はどのくらいですか？",
    a: "中国産（機械刈り）が4,500円〜/枚に対し、国産機械すきが5,500円〜/枚、国産手刈りは8,000円〜/枚が目安です。国産高品質い草は香り・肌触り・耐久性に優れますが費用は上がります。",
  },
  {
    category: "price" as const,
    q: "和紙畳・樹脂畳の費用はい草と比べてどうですか？",
    a: "和紙畳・樹脂畳の表替えは6,500円〜/枚が目安です。一般い草より高くなりますが、耐久性・耐汚性が高く長期間使用できるため、長い目で見るとコスト差が縮まる場合があります。",
  },
  {
    category: "price" as const,
    q: "廃棄処分費用は別途かかりますか？",
    a: "古い畳の廃棄処分費用はお見積もりに含めてお伝えします。廃棄方法や処分業者によって費用が異なりますが、事前に明確にお伝えしますのでご確認ください。",
  },
  {
    category: "price" as const,
    q: "見積もりより実際の費用が高くなることはありますか？",
    a: "現地確認後に提示した見積もりから大幅に変わることは基本的にありません。施工中に予期せぬ下地の傷みが判明した場合などは追加費用が発生することがありますが、その場合は事前にご説明してから作業を進めます。",
  },
  {
    category: "price" as const,
    q: "1枚だけ表替えを依頼すると割高になりますか？",
    a: "枚数が少ない場合は1枚あたりの費用が変動する場合があります。現地確認時にご状況をお伝えいただければ、正確な費用をご案内します。まずはご相談ください。",
  },
  {
    category: "price" as const,
    q: "見積もりをお願いしてから断ることはできますか？",
    a: "はい、見積もりを確認していただき、ご納得いただけなければご断りいただいて構いません。現地確認・見積もりは無料です。見積もり後のキャンセル料等は発生しません。",
  },
  {
    category: "price" as const,
    q: "規格外サイズの畳の場合、費用は変わりますか？",
    a: "規格外サイズ（特殊寸法）の畳は別途費用が発生する場合があります。現地確認で採寸し、正確な費用をお伝えします。既存の畳サイズが規格品かどうかは現地で確認します。",
  },
  {
    category: "price" as const,
    q: "複数の業者から見積もりを取ることは問題ありませんか？",
    a: "複数社から見積もりを取ることは全く問題ありません。比較検討のうえでご判断ください。見積もりの比較の際は費用だけでなく、廃棄処分費用の有無・施工内容の詳細・素材のグレードなど内容全体を確認することをおすすめします。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function PriceEstimatePage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          items={[
            { label: "エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "料金目安" },
          ]}
        />
      </div>

      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Price Guide — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl font-medium leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉の畳張替え・表替えの料金目安と見積もり方法
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳工事の費用は素材・枚数・施工内容・現場状況によって変わります。素材別の料金目安、部屋の広さ別の費用例、見積もりの流れ、よくある費用トラブルをまとめました。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* 施工種別ごとの費用目安 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            施工種別ごとの費用目安
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              裏返し2,500円〜/枚、表替え（い草）4,500円〜/枚、表替え（和紙）6,500円〜/枚、新調15,000円〜/枚が目安です。これらはあくまで目安で、実際の費用は現地確認後にお見積もりで確定します。
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="p-3 text-left font-normal">施工種別</th>
                    <th className="p-3 text-left font-normal">費用目安（/枚）</th>
                    <th className="p-3 text-left font-normal">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">裏返し</td>
                    <td className="p-3 text-kincya font-medium">2,500円〜</td>
                    <td className="p-3 text-sumi/70">使用2〜3年後の初回メンテナンス</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え（い草）</td>
                    <td className="p-3 text-kincya font-medium">4,500円〜</td>
                    <td className="p-3 text-sumi/70">コスト重視のリフレッシュ</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え（和紙）</td>
                    <td className="p-3 text-kincya font-medium">6,500円〜</td>
                    <td className="p-3 text-sumi/70">耐光性・撥水性重視</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">新調</td>
                    <td className="p-3 text-kincya font-medium">15,000円〜</td>
                    <td className="p-3 text-sumi/70">畳床ごと新しく</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 素材別の価格差 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            素材別の価格差
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              い草（中国産）4,500円〜：コスト重視。い草（国産機械すき）5,500円〜：標準グレード。い草（国産手刈り）8,000円〜：高品質。和紙畳6,500円〜：耐光性・撥水性。樹脂畳8,000円〜：水拭き可能。
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="p-3 text-left font-normal">素材</th>
                    <th className="p-3 text-left font-normal">費用目安（/枚）</th>
                    <th className="p-3 text-left font-normal">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">い草（中国産）</td>
                    <td className="p-3 text-kincya font-medium">4,500円〜</td>
                    <td className="p-3 text-sumi/70">コスト重視・スタンダードな選択</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">い草（国産機械すき）</td>
                    <td className="p-3 text-kincya font-medium">5,500円〜</td>
                    <td className="p-3 text-sumi/70">標準グレード・品質と価格のバランス</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">い草（国産手刈り）</td>
                    <td className="p-3 text-kincya font-medium">8,000円〜</td>
                    <td className="p-3 text-sumi/70">高品質・肌触り・香り・耐久性に優れる</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">和紙畳</td>
                    <td className="p-3 text-kincya font-medium">6,500円〜</td>
                    <td className="p-3 text-sumi/70">耐光性・撥水性・色あせに強い</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">樹脂畳</td>
                    <td className="p-3 text-kincya font-medium">8,000円〜</td>
                    <td className="p-3 text-sumi/70">水拭き可能・ペット・子ども向け</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 部屋の広さ別見積もり例 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            部屋の広さ別見積もり例（目安）
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              4.5畳：表替えい草20,250円〜。6畳：27,000円〜。8畳：36,000円〜。10畳：45,000円〜。※畳1枚あたり4,500円×枚数での計算。実際は畳サイズ・搬入条件等で変動します。
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="p-3 text-left font-normal">施工種別</th>
                    <th className="p-3 text-left font-normal">素材</th>
                    <th className="p-3 text-left font-normal">4.5畳（目安）</th>
                    <th className="p-3 text-left font-normal">6畳（目安）</th>
                    <th className="p-3 text-left font-normal">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">裏返し</td>
                    <td className="p-3 text-sumi/70">既存い草</td>
                    <td className="p-3 text-kincya font-medium">約11,250円〜</td>
                    <td className="p-3 text-kincya font-medium">約15,000円〜</td>
                    <td className="p-3 text-sumi/70">最もコストを抑えた整備</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え</td>
                    <td className="p-3 text-sumi/70">い草（一般）</td>
                    <td className="p-3 text-kincya font-medium">約20,250円〜</td>
                    <td className="p-3 text-kincya font-medium">約27,000円〜</td>
                    <td className="p-3 text-sumi/70">スタンダードなリフレッシュ</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え</td>
                    <td className="p-3 text-sumi/70">和紙畳</td>
                    <td className="p-3 text-kincya font-medium">約29,250円〜</td>
                    <td className="p-3 text-kincya font-medium">約39,000円〜</td>
                    <td className="p-3 text-sumi/70">耐久性・耐汚性重視</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">新調</td>
                    <td className="p-3 text-sumi/70">建材床</td>
                    <td className="p-3 text-kincya font-medium">約67,500円〜</td>
                    <td className="p-3 text-kincya font-medium">約90,000円〜</td>
                    <td className="p-3 text-sumi/70">畳床ごと全面リニューアル</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/50">※ 上記はあくまで参考の目安です。正確な費用は現地確認後にご案内します。</p>
          </div>
        </section>

        {/* 費用が変動する要因 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            費用が変動する要因
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              ①素材・グレードの選択、②枚数（1枚のみは割高になる場合も）、③畳のサイズ（規格外サイズは別途）、④畳床の状態（新調が必要な場合）、⑤搬入経路（狭い階段等）。現地確認で正確な費用を把握できます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: "素材・グレード", desc: "い草の産地・品質、和紙・樹脂など素材の選択によって1枚あたりの費用が変わります。" },
                { title: "枚数・規模", desc: "枚数が多いほど合計費用が増えます。1枚のみの依頼の場合は費用感が変動する場合があります。" },
                { title: "畳のサイズ", desc: "規格外サイズの畳は採寸・加工が必要なため別途費用が発生する場合があります。" },
                { title: "搬入・作業環境", desc: "狭い階段・エレベーターなしの高層階など、搬入に時間がかかる場合は費用に影響することがあります。" },
              ].map((item) => (
                <div key={item.title} className="bg-kiji/30 p-5 rounded-sm">
                  <h3 className="text-sumi font-medium mb-2">{item.title}</h3>
                  <p className="text-xs text-sumi/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 見積もりの流れ */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            見積もりの流れ
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              問い合わせ→現地確認（無料・採寸・状態確認）→見積もり書提示（内訳明示）→素材・縁の確認→施工日調整→施工。見積もり後のキャンセルも費用は発生しません。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お問い合わせ：</strong>
                お電話またはフォームでご連絡ください。畳の状態・ご希望施工内容・ご都合の良い日程をお聞きします。
              </li>
              <li>
                <strong>現地確認（無料）：</strong>
                実際に伺い、畳の状態・枚数・素材を確認します。採寸・状態チェックを実施します。
              </li>
              <li>
                <strong>見積もり書の提示：</strong>
                素材ごと・工事種別ごとの内訳を明示した見積もり書をご提出します。
              </li>
              <li>
                <strong>素材・縁の確認：</strong>
                素材サンプルをご覧いただきながら、縁の色・デザインをご確認いただきます。
              </li>
              <li>
                <strong>施工日調整・施工：</strong>
                ご承認後に施工日を調整して作業を開始します。見積もり後のキャンセルは費用不要です。
              </li>
            </ol>
          </div>
        </section>

        {/* よくある費用トラブルと対策 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            よくある費用トラブルと対策
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              ①当初見積もりと最終費用が違う（原因：追加工事の事前未説明）→対策：見積もり時に全項目を確認する。②処分費が別途発生（古畳の廃棄費用）→対策：見積もり段階で含まれているか確認する。
            </p>
            <div className="space-y-3 mt-2">
              <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5">
                <p className="text-sumi/90 text-sm font-medium mb-1">トラブル①：見積もりと最終費用が違う</p>
                <p className="text-sumi/70 text-xs">原因：追加工事・特殊サイズ対応が見積もりに含まれていなかった。</p>
                <p className="text-sumi/70 text-xs mt-1">対策：見積もり時に全ての作業内容・廃棄処分費用が含まれているかを確認する。</p>
              </div>
              <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5">
                <p className="text-sumi/90 text-sm font-medium mb-1">トラブル②：古畳の廃棄費用が後から発生</p>
                <p className="text-sumi/70 text-xs">原因：廃棄処分費用が見積もりに含まれていなかった。</p>
                <p className="text-sumi/70 text-xs mt-1">対策：見積もり段階で廃棄処分費用が含まれているかを必ず確認する。</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* 関連ページ */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-3">
            {[
              { href: "/price", label: "料金・費用目安（全サービス）" },
              { href: "/contact", label: "お問い合わせ・無料見積もり" },
              { href: "/flow", label: "ご依頼の流れ" },
              { href: "/area/saitama", label: "埼玉県の対応エリア一覧" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center justify-between p-4 border border-border hover:border-kincya/50 hover:bg-kiji/10 transition-all duration-200 group"
                >
                  <span className="text-sm text-sumi group-hover:text-kincya transition-colors">{label}</span>
                  <span className="text-kincya text-xs">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <CTASection
        title="料金・見積もりについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。素材・枚数をお聞きして丁寧にご説明します。"
      />
    </>
  );
}
