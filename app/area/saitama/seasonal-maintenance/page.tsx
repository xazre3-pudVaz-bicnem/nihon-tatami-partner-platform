import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の畳・ふすま・障子の定期メンテナンス｜推奨サイクルと時期",
  description:
    "埼玉県の畳・ふすま・障子の定期メンテナンスについて。推奨サイクル・最適な整備時期・法人向けの計画整備まで解説。早期発見でコストを抑えられます。",
  path: "/area/saitama/seasonal-maintenance",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉の畳・ふすま・障子の定期メンテナンスをお考えの方へ", item: `${SITE_URL}/area/saitama/seasonal-maintenance` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/seasonal-maintenance#webpage`,
  name: "埼玉の畳・ふすま・障子の定期メンテナンス｜推奨サイクルと時期",
  description: "埼玉県の畳・ふすま・障子の定期メンテナンスについて。推奨サイクル・最適な整備時期・法人向けの計画整備まで解説。早期発見でコストを抑えられます。",
  url: `${SITE_URL}/area/saitama/seasonal-maintenance`,
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
    category: "timing" as const,
    q: "畳の表替えはどのくらいの頻度で行えばよいですか？",
    a: "使用2〜3年後に裏返し、5〜6年後に表替え、10〜15年後に新調が推奨サイクルの目安です。ただし日当たり・使用頻度・素材によって状態の変化は異なります。状態を見て判断することが最も合理的です。",
  },
  {
    category: "timing" as const,
    q: "ふすまの張替えはどのくらいの頻度が適切ですか？",
    a: "使用頻度による差が大きいですが、10〜15年が目安です。ただし破れ・汚れ・色あせが目立つ場合は早めに対応するほうが美観を保てます。下地（骨格）が傷んでいる場合はふすまごと交換が必要なこともあります。",
  },
  {
    category: "timing" as const,
    q: "障子の張替えはいつ行うのがベストですか？",
    a: "障子紙の破れ・変色が目立ってきたら交換が目安で、5〜8年が一般的なサイクルです。乾燥した季節（秋〜冬）は紙が伸びにくく施工が安定しやすいため、年末・春前など気候が穏やかな時期が作業しやすいです。",
  },
  {
    category: "timing" as const,
    q: "メンテナンスに最適な季節はいつですか？",
    a: "梅雨前（4〜5月）は湿気が来る前の整備に最適です。乾燥している冬から春にかけての施工は品質が安定しやすい傾向があります。旅館・施設など繁忙期がある業種は、繁忙期前に整備するのが一般的です。",
  },
  {
    category: "general" as const,
    q: "定期メンテナンスをしないとどうなりますか？",
    a: "放置するほど傷みが深くなり、表替えで済んだところが新調が必要になる場合もあります。また畳は湿気を吸放出する性質があるため、適切なメンテナンスがないとカビ・ダニのリスクが高まります。定期整備はコスト最適化に直結します。",
  },
  {
    category: "general" as const,
    q: "畳・ふすま・障子を一括で依頼できますか？",
    a: "はい、畳・ふすま・障子を同時に依頼することが可能です。一度の現地確認でまとめて確認し、施工日程も調整できます。和室全体を同時に整備することで、統一感のある仕上がりになります。",
  },
  {
    category: "timing" as const,
    q: "賃貸物件は退去ごとに整備すべきですか？それとも計画整備が良いですか？",
    a: "どちらのスタイルにも対応しています。退去ごとに個別対応するケースと、年1回・2年に1回の計画整備をするケースがあります。計画整備は予算化しやすくスケジュール管理がしやすいメリットがあります。ご希望に応じてご提案します。",
  },
  {
    category: "general" as const,
    q: "定期整備のコストを年間で積み立てる考え方はありますか？",
    a: "たとえば6畳の表替え費用が約27,000円で、5年サイクルとすると年間5,400円の積み立てで対応できる計算になります。計画的な整備は急な出費を抑え、予算管理がしやすくなります。あくまで目安であり、実際の費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "全部屋を一括で整備したほうが費用は安くなりますか？",
    a: "一括整備の主なメリットは、仕上がりに統一感が出ることとスケジュール調整が一度で済む点です。費用面については現地確認後に正確にお伝えします。複数室をまとめて依頼いただく場合は効率化できる部分についてご相談ください。",
  },
  {
    category: "general" as const,
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "さいたま市・川越市・川口市・越谷市・熊谷市・所沢市・春日部市など埼玉県内全域に対応しています。詳細なエリアについてはお問い合わせください。",
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

export default function SeasonalMaintenancePage() {
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
            { label: "定期メンテナンス" },
          ]}
        />
      </div>

      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Seasonal Maintenance — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl font-medium leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉の畳・ふすま・障子の定期メンテナンスをお考えの方へ
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            早期発見・早期対処でコストを抑えられます。放置するほど傷みが深く、修繕費用が増える傾向があります。推奨サイクルと最適な整備時期をご案内します。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* 定期整備の重要性 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            定期整備の重要性
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              早期発見・早期対処でコストを抑えられます。放置するほど傷みが深く、表替えで済むところが新調が必要になる場合もあります。定期的な現地確認で状態を把握することが長期的なコスト最適化につながります。
            </p>
            <p>
              埼玉県は夏に高温多湿になりやすい内陸性気候です。梅雨から夏にかけての湿気管理が特に重要で、定期的なメンテナンスがカビ・ダニのリスク低減に役立ちます。畳は湿気を吸放出する性質があるため、状態の把握と早めの整備が和室の長寿命化につながります。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>表替えで済む軽微な段階での対処がコスト最小化につながる</li>
              <li>カビ・ダニのリスクを定期的にリセットできる</li>
              <li>畳床・ふすまの下地の状態確認で大規模修繕を予防できる</li>
              <li>物件の美観を長く保つことで資産価値の維持にもつながる</li>
            </ul>
          </div>
        </section>

        {/* 畳の推奨メンテナンスサイクル */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            畳の推奨メンテナンスサイクル
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              裏返し（使用2〜3年後）→表替え（5〜6年後）→新調（10〜15年後）が推奨サイクルの目安です。これはあくまで目安で、使用頻度・日当たり・素材によって異なります。状態を見て判断することが最も合理的です。
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="p-3 text-left font-normal">施工種別</th>
                    <th className="p-3 text-left font-normal">推奨時期</th>
                    <th className="p-3 text-left font-normal">費用目安（/枚）</th>
                    <th className="p-3 text-left font-normal">備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">裏返し</td>
                    <td className="p-3 text-sumi/70">2〜3年後</td>
                    <td className="p-3 text-kincya font-medium">2,500円〜</td>
                    <td className="p-3 text-sumi/70">初回メンテナンスとして</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え（い草）</td>
                    <td className="p-3 text-sumi/70">5〜6年後</td>
                    <td className="p-3 text-kincya font-medium">4,500円〜</td>
                    <td className="p-3 text-sumi/70">日当たり・使用頻度で変動</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">新調</td>
                    <td className="p-3 text-sumi/70">10〜15年後</td>
                    <td className="p-3 text-kincya font-medium">15,000円〜</td>
                    <td className="p-3 text-sumi/70">床の傷みが著しい場合</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/50">※ サイクルはあくまで目安です。実際の状態は現地確認でご確認ください。</p>
          </div>
        </section>

        {/* ふすま・障子の整備サイクル */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            ふすま・障子の整備サイクル
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              ふすまは日常的な汚れや破れが発生した時が交換タイミングです。10〜15年が目安ですが使用頻度による差が大きいです。障子は紙の破れ・変色が目立ってきたら交換で、5〜8年が目安です。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">ふすまの整備サイクル</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs text-sumi/70">
                  <li>破れ・汚れ・色あせが目立ったら交換の目安</li>
                  <li>使用頻度による差が大きいため状態で判断</li>
                  <li>10〜15年を一つの目安として把握する</li>
                  <li>下地が傷んでいる場合はふすまごと交換も</li>
                </ul>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">障子の整備サイクル</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs text-sumi/70">
                  <li>紙の破れ・変色が目立ってきたら交換</li>
                  <li>5〜8年が一般的な交換サイクルの目安</li>
                  <li>破れた部分を放置すると断熱・採光も低下</li>
                  <li>秋〜冬の乾燥した時期が施工しやすい</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 季節を考えた整備タイミング */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            季節を考えた整備タイミング
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              梅雨前（4〜5月）は湿気が来る前の整備に最適です。乾燥している冬から春にかけての施工は品質が安定しやすいです。旅館・施設は繁忙期前に整備するのが一般的です。
            </p>
            <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5 mt-2">
              <p className="text-sumi/90 text-sm font-medium mb-2">季節別の整備ポイント</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-sumi/70">
                <li>春（4〜5月）：梅雨前の整備で湿気シーズンに備える</li>
                <li>夏（6〜8月）：湿気が多く乾燥に時間がかかる場合がある</li>
                <li>秋（9〜10月）：気候が穏やかで施工しやすいシーズン</li>
                <li>冬（11〜3月）：乾燥しており品質が安定しやすい時期</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 法人・管理会社の定期整備計画 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            法人・管理会社の定期整備計画
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              退去ごとに個別対応するケースと、年1回・2年に1回の計画整備をするケースがあります。計画整備は予算化しやすくスケジュール管理がしやすいです。どちらのスタイルにも対応します。
            </p>
            <p>
              管理会社・オーナー様の場合、複数物件を継続的にご担当することで物件状態の変化を継続把握できます。適切なタイミングでの施工提案が可能になり、長期的なコスト最適化につながります。
            </p>
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
              { href: "/area/saitama", label: "埼玉県の対応エリア一覧" },
              { href: "/area/saitama/bulk-order", label: "複数物件・大量発注の畳工事" },
              { href: "/services/tatami-omotegae", label: "畳の表替えサービス詳細" },
              { href: "/contact", label: "お問い合わせ・無料見積もり" },
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
        title="定期メンテナンスについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。状態を確認してから適切な整備計画をご提案します。"
      />
    </>
  );
}
