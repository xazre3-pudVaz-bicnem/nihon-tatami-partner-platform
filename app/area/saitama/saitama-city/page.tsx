import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "さいたま市の畳張替え・表替え・新調｜全区対応｜日本畳パートナーズ",
  description:
    "さいたま市（中央区・北区・南区・浦和区・緑区・岩槻区）全域で畳張替え・表替え・新調に対応。戸建て・マンション・賃貸物件・法人施設。現地確認・見積もり無料。",
  path: "/area/saitama/saitama-city",
});

const { pref, city } = getCity("saitama", "saitama-city") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "さいたま市内のどの地区まで対応していますか？",
    a: "さいたま市の6つの行政区（中央区・北区・南区・浦和区・緑区・岩槻区）全域に対応しています。大宮駅周辺・北浦和・浦和・与野など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "さいたま市内での施工実績は多いですか？",
    a: "はい。さいたま市は埼玉県庁所在地として最も依頼が多いエリアです。戸建住宅・マンション・アパート・賃貸物件・法人施設まで、幅広い施工実績があります。",
    category: "general" as const,
  },
  {
    q: "マンション・アパートでも施工できますか？",
    a: "はい。さいたま市内のマンション・アパートの和室にも対応しています。薄型畳や建材畳など、集合住宅の床構造に合わせた素材を提案します。共用部への出入りなど、管理規約に配慮した施工を心がけています。",
    category: "general" as const,
  },
  {
    q: "大宮・浦和・北浦和地区の施工は可能ですか？",
    a: "はい。さいたま市内の主要駅周辺エリア（大宮駅・浦和駅・北浦和駅など）の施工実績が多くあります。駅近くの住宅・マンション・店舗の施工にも対応しています。",
    category: "general" as const,
  },
  {
    q: "さいたま市内での施工費用の相場は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。さいたま市内のマンション・一般住宅を対象とした相場となります。複数枚ご依頼の場合、割引をご相談できる場合もあります。",
    category: "price" as const,
  },
  {
    q: "賃貸物件の原状回復工事に対応していますか？",
    a: "はい。賃貸オーナー様・不動産管理会社様からのご依頼も多く、退去後の原状回復工事に対応しています。畳・襖・障子・クロスを一括対応することで、工程管理をスムーズに進められます。",
    category: "general" as const,
  },
  {
    q: "さいたま市内での訪問見積もりは無料ですか？",
    a: "はい。現地確認・お見積もりは無料です。畳の状態・枚数・ご希望の素材を確認したうえで、その場でお見積もりをお出しします。無理な営業もいたしません。",
    category: "price" as const,
  },
  {
    q: "施工は当日中に完成しますか？",
    a: "表替え・裏返しであれば当日完成することが多いです。新調の場合は採寸後に製作するため数日いただく場合があります。複数部屋・複数物件の場合は日程を調整して計画的に対応します。",
    category: "general" as const,
  },
  {
    q: "ペット対応の畳素材はありますか？",
    a: "はい。樹脂畳（セキスイ畳）や和紙畳は、ペットの爪・尿に強く、水拭きで汚れを落とせます。さいたま市内でペットを飼われているご家庭からの依頼も多くあります。",
    category: "material" as const,
  },
  {
    q: "支払い方法は？",
    a: "施工完了後のお支払いが基本です。法人様・管理会社様は請求書払いにも対応しています。お支払い方法の詳細はお問い合わせ時にご確認ください。",
    category: "price" as const,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "埼玉県", item: `${SITE_URL}/area/saitama` },
    { "@type": "ListItem", position: 4, name: "さいたま市", item: `${SITE_URL}/area/saitama/saitama-city` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/saitama-city#webpage`,
  name: "さいたま市の畳張替え・表替え・新調",
  description: "さいたま市（中央区・北区・南区・浦和区・緑区・岩槻区）全域で畳張替え・表替え・新調に対応。戸建て・マンション・賃貸物件・法人施設。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/saitama-city`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/saitama-city`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "さいたま市全区対応の畳張替え・表替え・新調・原状回復専門業者。",
  areaServed: [
    { "@type": "City", name: "さいたま市" },
    { "@type": "City", name: "中央区" },
    { "@type": "City", name: "北区" },
    { "@type": "City", name: "南区" },
    { "@type": "City", name: "浦和区" },
    { "@type": "City", name: "緑区" },
    { "@type": "City", name: "岩槻区" },
  ],
  priceRange: "¥¥",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SaitamaCityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "さいたま市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Saitama City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            さいたま市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県庁所在地・さいたま市の6つの行政区（中央区・北区・南区・浦和区・緑区・岩槻区）全域で、畳張替え・表替え・新調・原状回復に対応しています。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            大宮駅・浦和駅・北浦和駅周辺など主要地区での施工実績が豊富です。戸建て・マンション・賃貸物件・法人施設まで幅広くご相談ください。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_TEL.replace(/-/g, "")}`}
              className="inline-block bg-kincya text-white text-sm px-5 py-2.5 tracking-wide hover:bg-kincya/90 transition-colors"
            >
              {SITE_TEL} に電話する
            </a>
            <Link href="/contact" className="inline-block border border-white/30 text-white text-sm px-5 py-2.5 tracking-wide hover:bg-white/10 transition-colors">
              フォームで相談する
            </Link>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-14 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* さいたま市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              さいたま市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                さいたま市は埼玉県庁所在地として政治・経済の中心地であり、人口も県内最大です。大宮駅周辺の商業地区、浦和駅周辺の官庁街、北浦和の高級住宅地、そして与野・中央区など、多様な地区から畳工事のご依頼をお受けしています。
              </p>
              <p>
                さいたま市内は高層マンション・アパートの密集地が多く、一般住宅との混在エリアです。夏の高温多湿による湿気の影響でカビ・ダニが発生しやすく、冬の乾燥で表面のひび割れが起きやすい気候条件となっています。このような環境での畳メンテナンスは、タイミング・素材選択が重要です。
              </p>
              <p>
                さいたま市内のマンション・アパートでは、薄型の建材畳が使われることが多い傾向があります。集合住宅のため施工時間や搬出入に制限があることも多く、そうした条件にも対応した柔軟な施工スケジュールを提案しています。
              </p>
              <p>
                賃貸物件の原状回復工事を依頼される不動産管理会社様・賃貸オーナー様も多く、複数物件の継続案件にも対応しています。施工前後の写真付き報告書を提出し、物件管理の記録として活用いただけます。
              </p>
            </div>
          </div>

          {/* さいたま市の地区別ガイド */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              さいたま市の主要地区での対応状況
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "大宮地区", desc: "駅周辺の商業・居住区。マンション・アパート・オフィス施設の畳工事多数" },
                { name: "浦和地区", desc: "官庁街・高級住宅地。文教地区としての特徴。戸建住宅の施工実績豊富" },
                { name: "北浦和", desc: "高級住宅地・文化施設が集中。戸建・高級物件の施工に対応" },
                { name: "与野・中央区", desc: "歴史ある住宅地。古民家・建て替え前の物件の施工実績あり" },
                { name: "南区・緑区", desc: "住宅地・工業地が混在。新興住宅地のマンション施工も多い" },
                { name: "岩槻区", desc: "さいたま市東部。古くからの城下町。旧家・寺社の施工実績あり" },
              ].map((area, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{area.name}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* よくご依頼いただくサービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              さいたま市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "マンション和室の表替え", desc: "浦和・北浦和・大宮などのマンション・高層住宅の薄型畳の張替え。" },
                { title: "賃貸物件の原状回復", desc: "退去後の畳・襖・障子・クロス一括対応。不動産管理会社様からの継続案件。" },
                { title: "戸建住宅のリノベーション", desc: "昭和の古い和室から、モダンな和室・リビング畳への変更工事。" },
                { title: "ペット対応畳への変更", desc: "樹脂畳・和紙畳への素材変更。さいたま市内でのペット対応物件が増加中。" },
              ].map((service, i) => (
                <div key={i} className="border border-border bg-white p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{service.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 料金目安 */}
          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              さいたま市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 素材・枚数・状態により変動します。下記は参考目安です。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">施工内容</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">目安価格</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "使用2〜3年・表面に損傷がない場合" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "素材・グレードにより変動" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "ペット・アレルギー対応" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・水拭き可能・マンション向け" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "床ごと交換。マンション・戸建別" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "素材により変動" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "通常和紙・機能紙別途" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-kiji/20"}>
                      <td className="px-4 py-3 text-sumi/80 text-xs">{row.label}</td>
                      <td className="px-4 py-3 text-ai font-medium text-xs">{row.price}</td>
                      <td className="px-4 py-3 text-sumi/50 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/40 mt-2">税別表示。正確な費用は現地確認後にお見積もりします。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "店舗・飲食店向け", href: "/area/saitama/for-store", desc: "座敷・小上がり・内装工事" },
              ].map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  className="block bg-kiji/30 border border-border p-4 hover:border-ai transition-colors"
                >
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{p.label}</p>
                  <p className="text-xs text-sumi/60">{p.desc}</p>
                  <span className="text-xs text-ai mt-1 block">詳しく見る →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              さいたま市の方向けよくある質問（Q&A）
            </h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-kiji/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-5 uppercase text-center">関連ページ・エリア</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { label: "埼玉県全域対応", href: "/area/saitama" },
              { label: "川口市", href: "/area/saitama/kawaguchi" },
              { label: "越谷市", href: "/area/saitama/koshigaya" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "所沢市", href: "/area/saitama/tokorozawa" },
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "熊谷市", href: "/area/saitama/kumagaya" },
              { label: "畳表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "畳新調", href: "/area/saitama/tatami-shinchou" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-sumi/60 hover:text-ai border border-border py-2 px-3 text-center bg-white hover:border-ai/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="さいたま市の畳工事はお気軽にご相談ください"
        subtitle="中央区・北区・南区・浦和区・緑区・岩槻区全域対応。現地確認・見積もり無料です。マンション・戸建て・法人施設もご相談ください。"
      />
    </>
  );
}
