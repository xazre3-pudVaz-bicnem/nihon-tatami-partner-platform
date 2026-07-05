import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "春日部市の畳張替え・表替え・新調｜全域対応｜日本畳パートナーズ",
  description:
    "春日部市全域で畳張替え・表替え・新調に対応。埼玉県東部の拠点都市。戸建て・マンション・法人施設・庭園建築。現地確認・見積もり無料。",
  path: "/area/saitama/kasukabe",
});

const FAQ_ITEMS = [
  {
    q: "春日部市内のどのエリアまで対応していますか？",
    a: "春日部市全域に対応しています。春日部駅周辺・八木崎・緑町・谷原など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "春日部市での施工実績は多いですか？",
    a: "はい。春日部は埼玉県東部の中心都市で、戸建住宅・マンション・古い民家・庭園建築など、多様な施工実績があります。",
    category: "general" as const,
  },
  {
    q: "春日部駅周辺の大型マンションでの施工は可能ですか？",
    a: "はい。春日部駅周辺のマンション・商業ビルの和室・茶室などの施工実績があります。時間制限のある施工にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "古い民家・庭園建築での施工も対応していますか？",
    a: "はい。春日部市には古くからの民家・日本庭園を持つ建築が多くあり、本格的な畳・襖・障子の施工実績が豊富です。",
    category: "general" as const,
  },
  {
    q: "春日部市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建築の場合、別途相談となる場合があります。",
    category: "price" as const,
  },
  {
    q: "古民家の茅葺き屋根・土間などにも対応できますか？",
    a: "はい。土間の畳・古い部屋の特殊な寸法にも対応できます。古民家の改修・リノベーション工事にもご相談ください。",
    category: "general" as const,
  },
  {
    q: "庭園建築の茶室・数寄屋造りにも対応していますか？",
    a: "はい。数寄屋造りの茶室・別邸などの特殊な畳工事に対応した実績があります。格式ある素材・施工方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "大規模な原状回復工事に対応していますか？",
    a: "はい。マンション・商業施設の大規模な原状回復工事に対応しています。畳・襖・障子・クロス・床を一括対応できます。",
    category: "general" as const,
  },
  {
    q: "季節ごとのメンテナンス提案はありますか？",
    a: "はい。春日部の気候に合わせた季節ごとのメンテナンス・張替えタイミングをご提案しています。定期的なご相談も歓迎です。",
    category: "general" as const,
  },
  {
    q: "見積もり・施工のスケジュール調整は柔軟ですか？",
    a: "はい。庭園建築・古民家など特殊な施工には、事前の綿密な打ち合わせ・スケジュール調整をいたします。",
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
    { "@type": "ListItem", position: 4, name: "春日部市", item: `${SITE_URL}/area/saitama/kasukabe` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kasukabe`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "春日部市全域対応の畳張替え・表替え・新調・古民家・庭園建築対応専門業者。",
  areaServed: { "@type": "City", name: "春日部市" },
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

export default function KasukabePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "春日部市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kasukabe City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            春日部市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県東部の拠点都市・春日部市。古民家・庭園建築から現代的なマンションまで、多様な物件での施工実績が豊富です。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            春日部駅周辺の都市部施工から、市郊外の古民家改修、数寄屋造りの茶室まで、幅広く対応しています。
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

          {/* 春日部市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              春日部市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                春日部市は埼玉県の東部に位置し、人口約70万人の中核市です。春日部駅周辺は商業地区として発展しており、一方で市の郊外には江戸時代から続く古民家や日本庭園を持つ別邸など、歴史ある建築が数多く存在します。
              </p>
              <p>
                この多様性が、春日部での畳工事の特徴です。春日部駅周辺の高層マンション・商業ビルの和室から、市街地周辺の一般住宅、そして市郊外の古民家・庭園建築に至るまで、様々なタイプの施工実績があります。
              </p>
              <p>
                特に、数寄屋造りの茶室・本格的なわら床畳・古い建築の特殊な寸法への対応など、格式ある施工が必要な案件での実績が豊富です。古民家の改修・リノベーション工事でも、畳の新調から襖・障子・建具の対応まで、トータルなご提案をしています。
              </p>
              <p>
                春日部市の気候は夏の多湿・冬の乾燥が顕著で、特に古い建築では湿度管理が重要です。季節ごとのメンテナンス・張替えタイミングをご提案し、建築の長期保全に貢献しています。
              </p>
            </div>
          </div>

          {/* 春日部市での施工タイプ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              春日部市での主な施工タイプ
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { type: "駅周辺マンション", desc: "春日部駅周辺の高層マンション・商業ビル和室" },
                { type: "中心部一般住宅", desc: "駅周辺から市街地の戸建住宅・マンション" },
                { type: "古民家・別邸", desc: "市郊外の江戸時代建築・古民家の改修・リノベーション" },
                { type: "庭園建築・茶室", desc: "数寄屋造り・わら床畳・格式ある施工が必要な物件" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.type}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 春日部市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              春日部市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "古民家改修・リノベーション", desc: "古い建築の畳・襖・障子・建具の一括リノベーション工事。" },
                { title: "庭園建築・茶室の畳工事", desc: "数寄屋造り・格式ある施工が必要な物件への対応。" },
                { title: "駅周辺マンション和室", desc: "春日部駅周辺の高層建築・商業施設の和室メンテナンス。" },
                { title: "大規模原状回復工事", desc: "マンション・商業施設の退去後・改修前の原状回復工事。" },
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
              春日部市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 古民家・特殊な施工は別途相談です。</p>
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
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水対応" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション・新築向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "古民家・庭園建築向け" },
                    { label: "襖 張替え", price: "3,500円〜/枚", note: "古い建築・格式素材別" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。古民家・庭園建築は別途相談ください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "古民家改修予定者向け", href: "/contact", desc: "古民家・リノベーション・建築改修対応" },
                { label: "庭園建築オーナー向け", href: "/contact", desc: "茶室・数寄屋造り・特殊施工対応" },
                { label: "管理会社向け", href: "/area/saitama/for-property-management", desc: "マンション・商業施設の大規模工事" },
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
              春日部市の方向けよくある質問（Q&A）
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
              { label: "越谷市", href: "/area/saitama/koshigaya" },
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "久喜市", href: "/area/saitama/kuki" },
              { label: "幸手市", href: "/area/saitama/satte" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "古民家改修", href: "/contact" },
              { label: "茶室・庭園", href: "/contact" },
              { label: "メンテナンス", href: "/area/saitama/seasonal-maintenance" },
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
        title="春日部市の畳工事はお気軽にご相談ください"
        subtitle="古民家・庭園建築・マンション・戸建て全てに対応。春日部市の多様な建築での施工実績があります。"
      />
    </>
  );
}
