import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の法人・企業向け畳工事・内装工事｜管理会社・旅館・寺社・施設対応",
  description:
    "埼玉県の法人・企業向け畳工事・内装工事。不動産管理・旅館・寺社・飲食店・福祉施設など各業種に対応。見積書・請求書・施工報告書対応。複数物件も承ります。現地確認・お見積もり無料。",
  path: "/area/saitama/corporate",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉の法人・企業向け畳工事・内装工事", item: `${SITE_URL}/area/saitama/corporate` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/corporate#webpage`,
  name: "埼玉の法人・企業向け畳工事・内装工事｜管理会社・旅館・寺社・施設対応",
  description: "埼玉県の法人・企業向け畳工事・内装工事。不動産管理・旅館・寺社・飲食店・福祉施設など各業種に対応。見積書・請求書・施工報告書対応。複数物件も承ります。現地確認・お見積もり無料。",
  url: `${SITE_URL}/area/saitama/corporate`,
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "法人として畳工事を依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、法人・管理会社・施設運営者様からのご依頼を承っています。見積書・請求書の発行、施工報告書の提出にも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "不動産管理会社として複数物件をまとめて依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、複数物件・複数室の畳工事を継続的にお引き受けします。退去スケジュールに合わせたスピード対応、物件ごとの費用明細、写真付き報告書を提供しています。",
      },
    },
    {
      "@type": "Question",
      name: "施工報告書はどのような形式で提出されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "施工前後の写真と作業内容を記載した報告書をご提出します。管理会社が貸主・借主への説明資料として活用できる形式です。必要な情報があればご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "旅館・ホテルの大量施工に対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、旅館・ホテルの客室畳を大量に施工した実績があります。繁忙期前の集中施工、稼働させながらの段階施工など、施設の運営スケジュールに合わせて計画します。",
      },
    },
    {
      "@type": "Question",
      name: "寺社の本堂・客殿の畳工事に対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、寺社の格式に合わせた素材・縁の選定から、法要・祭礼の日程に合わせた計画施工まで対応します。境内での作業は養生・清掃を徹底して丁寧に行います。",
      },
    },
    {
      "@type": "Question",
      name: "飲食店の座敷・小上がりの畳工事はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、飲食店の座敷・小上がりの畳工事に対応しています。水拭きできる樹脂畳や清掃性の高い和紙畳をご提案することも多いです。営業時間外に施工することも可能です。",
      },
    },
    {
      "@type": "Question",
      name: "福祉施設・介護施設の畳工事に対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、高齢者施設・デイサービス等の畳工事に対応しています。クッション性が高く汚れに強い素材のご提案など、施設の用途に合わせてご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "見積書・請求書の発行に対応していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、法人向けの正式な見積書・請求書を発行します。物件ごと・工事種別ごとに内訳を明示します。支払い条件等は個別にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "継続的な取引は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、継続的なお取引を歓迎しています。退去のたびに毎回業者を探す手間がなくなり、物件の状態を把握した業者が適切なタイミングで提案できるため、長期的なコスト最適化につながります。",
      },
    },
    {
      "@type": "Question",
      name: "対応エリアはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "埼玉県内の各市区を中心に対応しています。対応エリア外の場合もまずはご相談ください。",
      },
    },
  ],
};

const faqItems = [
  {
    category: "btob" as const,
    q: "法人として畳工事を依頼できますか？",
    a: "はい、法人・管理会社・施設運営者様からのご依頼を承っています。見積書・請求書の発行、施工報告書の提出にも対応しています。",
  },
  {
    category: "btob" as const,
    q: "不動産管理会社として複数物件をまとめて依頼できますか？",
    a: "はい、複数物件・複数室の畳工事を継続的にお引き受けします。退去スケジュールに合わせたスピード対応、物件ごとの費用明細、写真付き報告書を提供しています。",
  },
  {
    category: "btob" as const,
    q: "施工報告書はどのような形式で提出されますか？",
    a: "施工前後の写真と作業内容を記載した報告書をご提出します。管理会社が貸主・借主への説明資料として活用できる形式です。必要な情報があればご相談ください。",
  },
  {
    category: "btob" as const,
    q: "旅館・ホテルの大量施工に対応できますか？",
    a: "はい、旅館・ホテルの客室畳を大量に施工した実績があります。繁忙期前の集中施工、稼働させながらの段階施工など、施設の運営スケジュールに合わせて計画します。",
  },
  {
    category: "btob" as const,
    q: "寺社の本堂・客殿の畳工事に対応できますか？",
    a: "はい、寺社の格式に合わせた素材・縁の選定から、法要・祭礼の日程に合わせた計画施工まで対応します。境内での作業は養生・清掃を徹底して丁寧に行います。",
  },
  {
    category: "btob" as const,
    q: "飲食店の座敷・小上がりの畳工事はできますか？",
    a: "はい、飲食店の座敷・小上がりの畳工事に対応しています。水拭きできる樹脂畳や清掃性の高い和紙畳をご提案することも多いです。営業時間外に施工することも可能です。",
  },
  {
    category: "btob" as const,
    q: "福祉施設・介護施設の畳工事に対応できますか？",
    a: "はい、高齢者施設・デイサービス等の畳工事に対応しています。クッション性が高く汚れに強い素材のご提案など、施設の用途に合わせてご相談ください。",
  },
  {
    category: "btob" as const,
    q: "見積書・請求書の発行に対応していますか？",
    a: "はい、法人向けの正式な見積書・請求書を発行します。物件ごと・工事種別ごとに内訳を明示します。支払い条件等は個別にご相談ください。",
  },
  {
    category: "btob" as const,
    q: "継続的な取引は可能ですか？",
    a: "はい、継続的なお取引を歓迎しています。退去のたびに毎回業者を探す手間がなくなり、物件の状態を把握した業者が適切なタイミングで提案できるため、長期的なコスト最適化につながります。",
  },
  {
    category: "btob" as const,
    q: "対応エリアはどこですか？",
    a: "埼玉県内の各市区を中心に対応しています。対応エリア外の場合もまずはご相談ください。",
  },
];

const industries = [
  {
    title: "不動産管理会社",
    desc: "複数物件の原状回復・空室対策の畳工事。退去スケジュールに合わせたスピード対応。写真付き報告書付き。",
  },
  {
    title: "旅館・宿泊施設",
    desc: "客室の大量施工・繁忙期前整備。稼働させながらの段階施工にも対応。客室の格と用途に合わせた素材選定。",
  },
  {
    title: "寺社（寺院・神社）",
    desc: "本堂・客殿・控室の格式整備。法要・祭礼の日程に合わせた計画施工。伝統的な縁・高品質い草の選定。",
  },
  {
    title: "飲食店・店舗",
    desc: "座敷・小上がりの清掃性向上。水拭き可能な樹脂畳や和紙畳をご提案。営業時間外の施工にも対応。",
  },
  {
    title: "福祉施設・介護施設",
    desc: "高齢者施設・デイサービス等の畳整備。クッション性が高く清潔を保ちやすい素材を提案。",
  },
];

export default function CorporatePage() {
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
              { label: "法人向け" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl font-medium leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉の法人・企業向け畳工事・内装工事
          </h1>
          <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
            不動産管理・旅館・寺社・飲食店・福祉施設など、法人・施設のお客様の畳工事・内装整備に幅広く対応します。見積書・請求書・施工報告書の発行も承ります。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            法人のお客様の対応業種
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              業種・施設ごとの用途・課題に合わせて最適な施工プランをご提案します。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((item) => (
                <div key={item.title} className="border border-border p-5 rounded-sm">
                  <h3 className="font-medium text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sumi/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            複数物件・継続案件の対応
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              管理会社・オーナー様の複数棟・複数室を継続的に担当します。退去スケジュールに合わせたスピード施工を実現するため、物件情報を把握した上で柔軟に対応します。
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: "一元管理", desc: "1つの窓口でまとめて依頼。複数業者への連絡が不要になり、管理の手間を削減。" },
                { title: "スピード対応", desc: "退去日に合わせた迅速な現地確認・施工。空室期間を最小化します。" },
                { title: "状態の継続把握", desc: "物件状態を継続して把握。適切なタイミングでの整備提案が可能。" },
              ].map((item) => (
                <div key={item.title} className="bg-kiji/30 p-5 rounded-sm">
                  <h3 className="font-medium text-sumi mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sumi/70 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            写真付き施工報告書
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              法人様向けに施工前後の写真と作業内容を記載した報告書を提出します。
            </p>
            <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5 space-y-2">
              <p className="text-sm font-medium text-sumi" style={{ fontFamily: "var(--font-serif)" }}>報告書に含まれる主な内容</p>
              <ul className="space-y-1 text-sumi/70 text-xs">
                <li>・ 施工前の状態写真（畳・ふすま・障子の傷み状況）</li>
                <li>・ 施工後の完成写真</li>
                <li>・ 実施した作業内容の記述</li>
                <li>・ 使用した素材・縁の種別</li>
                <li>・ 施工日・担当者情報</li>
              </ul>
            </div>
            <p>
              管理会社が入居者との費用負担確認・貸主への報告に使用できる形式です。必要な記載内容があれば事前にお知らせください。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            見積書・請求書対応
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              法人向けの正式な見積書・請求書を発行します。物件ごと・工事種別ごとに内訳を明示し、費用の透明性を確保します。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-medium text-sumi mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>見積書</h3>
                <ul className="space-y-1 text-sumi/70 text-xs">
                  <li>・ 物件ごとの工事種別・枚数・単価を明記</li>
                  <li>・ 複数物件の場合は物件別に集計</li>
                  <li>・ 追加費用が発生する場合は事前に説明</li>
                </ul>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="font-medium text-sumi mb-2 text-sm" style={{ fontFamily: "var(--font-serif)" }}>請求書</h3>
                <ul className="space-y-1 text-sumi/70 text-xs">
                  <li>・ 施工完了後に正式請求書を発行</li>
                  <li>・ 支払い条件は個別にご相談</li>
                  <li>・ 振込・口座振替など対応形式を確認</li>
                </ul>
              </div>
            </div>
            <p className="text-sumi/60 text-xs">※支払い条件・書類様式の詳細はご相談の上で対応します。対応可否は案件内容により異なります。</p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            継続取引のメリット
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              初回だけでなく継続的なお取引を歓迎しています。継続することで得られるメリットをご紹介します。
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "物件状態の継続把握",
                  desc: "同じ業者が継続して管理することで、物件の傷みの経緯・特性を把握。適切なタイミングでの整備提案が可能になります。",
                },
                {
                  title: "業者探しの手間がなくなる",
                  desc: "退去のたびに業者を探す手間がなくなり、担当者への連絡一本で動き出せる体制を構築できます。",
                },
                {
                  title: "長期的なコスト最適化",
                  desc: "状態を見極めた上で裏返し・表替え・新調を判断するため、不要な施工を避けたコスト最適化が実現しやすくなります。",
                },
                {
                  title: "トラブル時の迅速な相談対応",
                  desc: "水濡れや急ぎの退去など緊急時に、信頼できる業者にすぐ相談できる安心感があります。",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-kiji/20 rounded-sm">
                  <div className="flex-1">
                    <p className="font-medium text-sumi text-sm mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {item.title}
                    </p>
                    <p className="text-sumi/70 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="text-2xl font-medium mb-8 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* Related Links */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/area/saitama/for-property-management", label: "不動産管理会社の方へ" },
              { href: "/area/saitama/for-ryokan", label: "旅館・宿泊施設の方へ" },
              { href: "/business", label: "法人・施設サービス案内" },
              { href: "/contact", label: "お問い合わせ・無料見積もり" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between p-4 border border-border hover:border-kincya/50 hover:bg-kiji/10 transition-all duration-200 group"
              >
                <span
                  className="text-sm text-sumi group-hover:text-kincya transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {link.label}
                </span>
                <span className="text-sumi/30 group-hover:text-kincya transition-colors text-xs">→</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTASection
        title="法人・施設のご相談はこちら"
        subtitle="複数物件・継続案件のご相談もお気軽にどうぞ。見積書・報告書対応も承ります。"
        secondaryLabel="法人・管理会社のご相談"
        secondaryHref="/contact#business"
      />
    </>
  );
}
