import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "所沢市の畳張替え・表替え・新調｜狭山茶の産地対応｜日本畳パートナーズ",
  description:
    "所沢市全域で畳張替え・表替え・新調に対応。狭山茶の産地・多摩地区に隣接。戸建て・マンション・旧家・農家住宅。現地確認・見積もり無料。",
  path: "/area/saitama/tokorozawa",
});

const FAQ_ITEMS = [
  {
    q: "所沢市内のどのエリアまで対応していますか？",
    a: "所沢市全域に対応しています。所沢駅周辺・東所沢駅周辺・新所沢駅周辺など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "所沢市は狭山茶の産地ですが、農家住宅での施工経験はありますか？",
    a: "はい。所沢市内の農家住宅・古い建築での施工実績が豊富です。狭山茶農家の作業場・納屋の畳工事にも対応しています。",
    category: "general" as const,
  },
  {
    q: "古い農家住宅・旧家での施工も対応できますか？",
    a: "はい。所沢市内の古い農家住宅・旧家の畳・襖・障子工事に対応した実績があります。古い建築の特殊な寸法にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "所沢駅周辺の商業地での施工は可能ですか？",
    a: "はい。所沢駅周辺のマンション・オフィス・商業施設の施工実績があります。駅近くの高層建築物でも対応可能です。",
    category: "general" as const,
  },
  {
    q: "所沢市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建築は別途相談となる場合があります。",
    category: "price" as const,
  },
  {
    q: "多摩地区との境界近くの施工にも対応していますか？",
    a: "はい。所沢市内から多摩地区に隣接したエリアの施工にも対応可能です。市境の物件についてはご相談ください。",
    category: "general" as const,
  },
  {
    q: "狭山茶農家の作業場の畳工事に対応していますか？",
    a: "はい。狭山茶の乾燥・製茶施設の床畳工事にも対応しています。農業用建築の特殊な要件にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "リノベーション・改修工事での対応はできますか？",
    a: "はい。古い農家住宅・旧家のリノベーション工事において、畳・襖・障子・建具の一括対応が可能です。",
    category: "general" as const,
  },
  {
    q: "マンション・一般住宅の施工実績も多いですか？",
    a: "はい。所沢駅周辺のマンションから郊外の新興住宅地まで、幅広い施工実績があります。",
    category: "general" as const,
  },
  {
    q: "見積もり・施工のスケジュール調整は柔軟ですか？",
    a: "はい。農業の繁忙期・営農スケジュールに配慮した施工スケジュール調整も可能です。事前にご相談ください。",
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
    { "@type": "ListItem", position: 4, name: "所沢市", item: `${SITE_URL}/area/saitama/tokorozawa` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/tokorozawa`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "所沢市全域対応の畳張替え・表替え・新調・農家住宅対応専門業者。",
  areaServed: { "@type": "City", name: "所沢市" },
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

export default function TokorozawaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "所沢市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Tokorozawa City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            所沢市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県西部・狭山茶の産地である所沢市。農家住宅から都市型マンションまで、多様な建築での施工に対応しています。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            古い農家住宅・旧家のリノベーション、現代的なマンション・戸建住宅まで、お気軽にご相談ください。
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

          {/* 所沢市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              所沢市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                所沢市は埼玉県の西部に位置し、狭山茶の産地として全国的に知られています。市内には狭山茶農家が多く存在し、古い農家住宅・製茶施設・納屋などの特殊な建築が数多くあります。
              </p>
              <p>
                一方で、所沢駅周辺は商業地として発展しており、高層マンション・オフィスビルなど現代的な建築も増えています。このため、所沢での畳工事は「古い農家住宅とモダンなマンション」という両極端なタイプの物件に対応することが特徴です。
              </p>
              <p>
                農家住宅のリノベーション工事では、古い建築の特殊な寸法・構造に対応し、現代的な快適さを備えた和室への改修を提案しています。狭山茶農家の製茶作業場や乾燥施設の床材工事にも対応した実績があります。
              </p>
              <p>
                また、多摩地区に隣接しているため、埼玉県内から東京都内への出張施工も可能です。市境を越えた施工ご相談もお受けしています。
              </p>
            </div>
          </div>

          {/* 所沢市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              所沢市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "農家住宅・旧家", desc: "古い建築の特殊な寸法・構造に対応" },
                { feature: "リノベーション工事", desc: "農家住宅の現代化改修・全面改装" },
                { feature: "製茶施設・納屋", desc: "狭山茶農家の作業場床材工事対応" },
                { feature: "駅周辺マンション", desc: "所沢駅周辺の商業地・高層建築施工" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 所沢市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              所沢市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "農家住宅のリノベーション", desc: "古い農家住宅の全面改修・現代化工事。畳・襖・障子一括対応。" },
                { title: "狭山茶農家の製茶施設", desc: "乾燥・製茶施設の床材工事。農業用建築の特殊要件対応。" },
                { title: "駅周辺マンション・戸建", desc: "所沢駅周辺の新しい物件のメンテナンス・張替え。" },
                { title: "多世代同居の改修", desc: "古い家を子世代向けにリノベーション。和室から洋室への改造も対応。" },
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
              所沢市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 古い建築は別途相談となる場合があります。</p>
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "耐久性重視" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・商業向け" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "農家住宅向け" },
                    { label: "襖 張替え", price: "3,500円〜/枚", note: "古い建築対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。古い建築は別途見積もりです。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "農家・古民家所有者向け", href: "/contact", desc: "古い建築のリノベーション・改修工事" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "製茶施設・納屋・作業場対応" },
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
              所沢市の方向けよくある質問（Q&A）
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
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "狭山市", href: "/area/saitama/sayama" },
              { label: "入間市", href: "/area/saitama/iruma" },
              { label: "リノベーション向け", href: "/contact" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "内装工事", href: "/area/saitama/interior" },
              { label: "古民家対応", href: "/contact" },
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
        title="所沢市の畳工事はお気軽にご相談ください"
        subtitle="農家住宅・古民家・現代的なマンションまで、多様な建築での施工に対応します。狭山茶農家の施設工事もご相談ください。"
      />
    </>
  );
}
