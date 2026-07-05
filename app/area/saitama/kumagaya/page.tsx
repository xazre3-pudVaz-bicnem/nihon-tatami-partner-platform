import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "熊谷市の畳張替え・表替え・新調｜北部拠点対応｜日本畳パートナーズ",
  description:
    "熊谷市全域で畳張替え・表替え・新調に対応。埼玉県北部の拠点都市。戸建て・マンション・農業施設・工場。現地確認・見積もり無料。",
  path: "/area/saitama/kumagaya",
});

const FAQ_ITEMS = [
  {
    q: "熊谷市内のどのエリアまで対応していますか？",
    a: "熊谷市全域に対応しています。熊谷駅周辺・籠原駅周辺・妻沼など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "熊谷市は工業都市ですが、施工できますか？",
    a: "はい。熊谷は埼玉県北部の工業中心地で、工場・倉庫・従業員施設の畳工事に対応しています。農業施設の施工実績も豊富です。",
    category: "general" as const,
  },
  {
    q: "熊谷駅周辺の大型施設での施工は可能ですか？",
    a: "はい。熊谷駅周辺のマンション・商業施設・スポーツ施設など、大型建築の施工実績があります。",
    category: "general" as const,
  },
  {
    q: "熊谷市は農業地帯ですが、農家住宅での施工に対応していますか？",
    a: "はい。熊谷市の農家住宅・農業用建築の畳工事に対応した実績があります。農業用施設の特殊な床材にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "気温が高い地域ですが、畳の管理について提案はありますか？",
    a: "はい。熊谷市は埼玉県内でも気温が高く、夏の多湿による畳の劣化が速いエリアです。季節ごとのメンテナンス・早期張替えをご提案しています。",
    category: "general" as const,
  },
  {
    q: "熊谷市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。複数枚・農業施設は割引相談可能です。",
    category: "price" as const,
  },
  {
    q: "工場・倉庫の床材工事に対応していますか？",
    a: "はい。工業施設の床材・転用可能な床工事に対応しています。事前にご相談ください。",
    category: "general" as const,
  },
  {
    q: "妻沼・籠原など郊外地域での施工も対応できますか？",
    a: "はい。熊谷市内全域、郊外の農業地帯・農家住宅の施工にも対応しています。",
    category: "general" as const,
  },
  {
    q: "大規模な法人施設での施工実績はありますか？",
    a: "はい。スポーツ施設・公共施設・大型商業施設などの大規模施工に対応した実績があります。",
    category: "general" as const,
  },
  {
    q: "見積もり・施工のスケジュール調整は柔軟ですか？",
    a: "はい。営農時期・営業時間に配慮したスケジュール調整が可能です。事前にご相談ください。",
    category: "general" as const,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "埼玉県", item: `${SITE_URL}/area/saitama` },
    { "@type": "ListItem", position: 4, name: "熊谷市", item: `${SITE_URL}/area/saitama/kumagaya` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kumagaya`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "熊谷市全域対応の畳張替え・表替え・新調・工業施設・農業施設対応専門業者。",
  areaServed: { "@type": "City", name: "熊谷市" },
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

export default function KumayaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "熊谷市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kumagaya City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            熊谷市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県北部の拠点都市・熊谷市。工業・農業が盛んな地域で、多様な施設での施工実績があります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            一般住宅・工場・農業施設・大型商業施設まで、幅広い対応が可能です。高温対応・季節ごとのメンテナンス提案も行っています。
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

          {/* 熊谷市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              熊谷市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                熊谷市は埼玉県の北部に位置し、人口約20万人の拠点都市です。工業・農業が盛んで、工場・農家住宅・農業施設が多く存在するのが特徴です。また、熊谷駅周辺の商業地として発展し、マンション・スポーツ施設などの大型建築も増えています。
              </p>
              <p>
                熊谷市の最大の特徴は気温の高さです。埼玉県内でも最高気温が高いエリアで、夏場の高温多湿は畳にとって非常に厳しい環境です。このため、早期の張替え・こまめなメンテナンスが必要になることが多くあります。
              </p>
              <p>
                工業施設や農業用建築での施工経験も豊富で、特殊な環境・用途に対応した床材選択をご提案しています。また、農業が盛んな地域のため、営農時期に配慮した施工スケジュール調整も心がけています。
              </p>
              <p>
                熊谷駅周辺の商業施設・スポーツ施設での大規模施工にも対応した実績があります。
              </p>
            </div>
          </div>

          {/* 熊谷市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              熊谷市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "高温対応", desc: "埼玉県で最も気温が高いエリア。早期メンテナンス提案" },
                { feature: "工業施設", desc: "工場・倉庫・従業員施設の床材工事対応" },
                { feature: "農業施設", desc: "農家住宅・作業場・農業用建築の特殊工事対応" },
                { feature: "大型商業施設", desc: "熊谷駅周辺のマンション・スポーツ施設施工実績" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 熊谷市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              熊谷市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "季節ごとのメンテナンス", desc: "高温対応・夏前の早期張替え・予防的メンテナンス提案。" },
                { title: "工業施設の床材工事", desc: "工場・倉庫・従業員寮などの畳工事。" },
                { title: "農家住宅のリフォーム", desc: "農家住宅の畳・襖・障子のリフォーム工事。" },
                { title: "大型施設の一括施工", desc: "マンション・商業施設・スポーツ施設の大規模工事。" },
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
              熊谷市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 複数物件・大規模施工は割引対応可能です。</p>
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "高温対応・耐久性" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・工業向け" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "農家住宅向け" },
                    { label: "襖 張替え", price: "3,500円〜/枚", note: "工業施設対応" },
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
                { label: "農家・農業施設向け", href: "/contact", desc: "農家住宅・農業用建築の特殊工事対応" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "工場・倉庫・商業施設大規模工事" },
                { label: "季節メンテナンス向け", href: "/area/saitama/seasonal-maintenance", desc: "高温対応・定期的なメンテナンス" },
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
              熊谷市の方向けよくある質問（Q&A）
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
              { label: "行田市", href: "/area/saitama/gyoda" },
              { label: "鴻巣市", href: "/area/saitama/konosu" },
              { label: "深谷市", href: "/area/saitama/fukaya" },
              { label: "季節メンテナンス", href: "/area/saitama/seasonal-maintenance" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "和紙畳", href: "/area/saitama/washi-tatami" },
              { label: "樹脂畳", href: "/area/saitama/resin-tatami" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "内装工事", href: "/area/saitama/interior" },
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
        title="熊谷市の畳工事はお気軽にご相談ください"
        subtitle="高温対応・工業施設・農業施設まで、多様な建築での施工に対応します。季節ごとのメンテナンス提案も行っています。"
      />
    </>
  );
}
