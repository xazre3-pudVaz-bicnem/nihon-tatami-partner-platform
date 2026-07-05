import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "越谷市の畳張替え・表替え・新調｜新興住宅地対応｜日本畳パートナーズ",
  description:
    "越谷市全域で畳張替え・表替え・新調に対応。レイクタウン等の新興住宅地・大型マンション密集地での豊富な施工実績。戸建て・集合住宅対応。",
  path: "/area/saitama/koshigaya",
});

const { pref, city } = getCity("saitama", "koshigaya") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "越谷市内のどのエリアまで対応していますか？",
    a: "越谷市全域に対応しています。南越谷駅周辺・越谷駅周辺・レイクタウン・中心部など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "レイクタウンなど新興住宅地での施工実績はありますか？",
    a: "はい。越谷レイクタウンをはじめとした新興住宅地での施工実績が豊富です。新築マンション・新しい戸建て住宅の畳工事に多く対応しています。",
    category: "general" as const,
  },
  {
    q: "大型商業施設周辺での施工は可能ですか？",
    a: "はい。越谷レイクタウン・イオン越谷など大型商業施設周辺のマンション・住宅施工実績があります。駅周辺のマンションも多く対応しています。",
    category: "general" as const,
  },
  {
    q: "南越谷駅周辺の密集マンション地域に対応できますか？",
    a: "はい。南越谷駅周辺には高層マンション・タワーマンションが多く立ち並んでおり、多数の施工実績があります。施工時間制限のある物件にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "越谷市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。新興住宅地のマンション・戸建ての相場となります。",
    category: "price" as const,
  },
  {
    q: "新築マンション・新興団地の施工に対応していますか？",
    a: "はい。レイクタウンをはじめとした新興住宅地の新築物件から既存物件まで対応しています。新規施工・リノベーション工事にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "見積もり・施工のタイミングは柔軟ですか？",
    a: "はい。新築物件の引き渡し直前施工、既存物件の計画的な張替えなど、様々なタイミングに対応しています。事前にご相談ください。",
    category: "general" as const,
  },
  {
    q: "大規模マンション・団地の施工実績はありますか？",
    a: "はい。越谷市内の大規模マンション・団地の複数戸一括施工に対応した実績があります。管理組合様からのご依頼もお受けしています。",
    category: "general" as const,
  },
  {
    q: "ペット可マンションでの対応畳素材は？",
    a: "樹脂畳・和紙畳がペット対応です。越谷市内でもペット可マンションが増えており、これらの素材への変更・新調のご依頼も増加中です。",
    category: "material" as const,
  },
  {
    q: "現地確認・見積もりは無料ですか？",
    a: "はい。現地確認・見積もりは無料です。新築物件のサンプル確認から既存物件のメンテナンス提案まで、幅広くご対応します。",
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
    { "@type": "ListItem", position: 4, name: "越谷市", item: `${SITE_URL}/area/saitama/koshigaya` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/koshigaya#webpage`,
  name: "越谷市の畳張替え・表替え・新調",
  description: "越谷市全域で畳張替え・表替え・新調に対応。レイクタウン等の新興住宅地・大型マンション密集地での豊富な施工実績。戸建て・集合住宅対応。",
  url: `${SITE_URL}/area/saitama/koshigaya`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/koshigaya`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "越谷市全域対応の畳張替え・表替え・新調専門業者。新興住宅地・大型マンション施工実績豊富。",
  areaServed: { "@type": "City", name: "越谷市" },
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

export default function KoshigayaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "越谷市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Koshigaya City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            越谷市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県東部の拠点・越谷市。レイクタウン等の新興住宅地・大型マンション密集地での豊富な施工実績があります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            新築物件の引き渡し前施工から既存物件の計画的リノベーション、大規模マンション管理組合のご依頼まで、幅広く対応しています。
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

          {/* 越谷市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              越谷市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                越谷市は埼玉県の東部に位置し、人口約43万人の拠点都市です。特に近年、越谷レイクタウンをはじめとした大型商業施設の開発に伴い、新興住宅地が急速に拡大しています。新築マンション・新興団地での畳工事のご依頼が急増しており、新しい物件での施工実績が豊富です。
              </p>
              <p>
                南越谷駅周辺には高層マンション・タワーマンションが密集しており、既存物件のメンテナンスから原状回復工事まで、幅広い施工実績があります。また、越谷レイクタウン周辺の戸建住宅地でも施工依頼が増えており、新築・既存物件の両方に対応可能です。
              </p>
              <p>
                越谷市内の気候は夏の多湿・冬の乾燥が顕著で、新しい物件でも早期にメンテナンスが必要になるケースが多くあります。新築時の素材選択から定期的なメンテナンス・リノベーションまで、トータルなご提案をしています。
              </p>
              <p>
                大規模マンション・団地の管理組合様からのご依頼にも対応しており、複数戸一括施工・計画的なリノベーション工事を実施しています。
              </p>
            </div>
          </div>

          {/* 越谷市の地区別情報 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              越谷市の主要エリア別施工実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { area: "南越谷駅周辺", desc: "高層マンション・タワーマンション密集地。施工実績が最も多い" },
                { area: "越谷レイクタウン", desc: "大型新興住宅地。新築物件・既存物件の両方に対応" },
                { area: "越谷駅周辺", desc: "商業地区・住宅混在地。マンション・戸建の施工実績豊富" },
                { area: "中央地区", desc: "従来の中心部。既存物件のメンテナンス・リノベーション多数" },
                { area: "東地区・北地区", desc: "新興団地・新興住宅地が拡大中。新築物件の施工増加中" },
                { area: "西地区・南地区", desc: "戸建住宅地・既存住宅地。古民家・旧家の施工実績あり" },
              ].map((area, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{area.area}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 越谷市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              越谷市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "新築物件の引き渡し前施工", desc: "レイクタウンなど新興住宅地の新築マンション・戸建の初期施工。" },
                { title: "大規模マンション管理組合対応", desc: "高層マンション・団地の複数戸一括施工・計画的リノベーション。" },
                { title: "既存物件のメンテナンス", desc: "南越谷周辺のマンションなど、既存物件の定期的な畳張替え。" },
                { title: "原状回復工事", desc: "退去後の原状回復。畳・襖・障子・クロス一括対応。" },
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
              越谷市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 新築物件・大規模施工は割引対応可能です。</p>
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "既存物件対応" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "標準グレード" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "ペット・アレルギー対応" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・新興住宅地向け" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "新築物件・サイズ別" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "原状回復対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "単品対応も可能" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。大規模施工は割引相談可能です。</p>
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
                { label: "管理会社・管理組合向け", href: "/area/saitama/for-property-management", desc: "複数戸一括施工・計画的リノベーション" },
                { label: "新築物件ご購入者向け", href: "/contact", desc: "新築物件の初期施工・引き渡し前対応" },
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
              越谷市の方向けよくある質問（Q&A）
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
              { label: "さいたま市", href: "/area/saitama/saitama-city" },
              { label: "川口市", href: "/area/saitama/kawaguchi" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "三郷市", href: "/area/saitama/misato" },
              { label: "新築物件向け", href: "/contact" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "畳表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "和紙畳", href: "/area/saitama/washi-tatami" },
              { label: "料金目安", href: "/price" },
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
        title="越谷市の畳工事はお気軽にご相談ください"
        subtitle="新興住宅地・大規模マンション・新築物件に豊富な実績があります。管理会社様からのご相談も歓迎いたします。"
      />
    </>
  );
}
