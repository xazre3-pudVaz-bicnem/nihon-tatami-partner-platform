import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "川口市の畳張替え・表替え・新調｜密集地対応｜日本畳パートナーズ",
  description:
    "川口市全域で畳張替え・表替え・新調に対応。工業都市・賃貸マンション密集地での豊富な施工実績。戸建て・集合住宅・法人施設。現地確認・見積もり無料。",
  path: "/area/saitama/kawaguchi",
});

const { pref, city } = getCity("saitama", "kawaguchi") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "川口市内のどのエリアまで対応していますか？",
    a: "川口市全域に対応しています。南鳩ヶ谷・北鳩ヶ谷・青木・領家・朝日・西川口など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "川口市は工業都市で工場が多いですが、施工できますか？",
    a: "はい。川口は鋳物・機械・金属加工業が盛んで、工場の従業員寮・福利厚生施設の畳工事にも対応しています。また、工場跡地の再開発によるマンション・集合住宅も増えており、施工実績が豊富です。",
    category: "general" as const,
  },
  {
    q: "賃貸マンション・アパートの件数が多いですが対応できますか？",
    a: "はい。川口市は賃貸住宅が非常に多い地域で、賃貸オーナー様・不動産管理会社様からのご依頼が大多数です。複数物件の一括対応・継続案件に対応しており、施工実績が豊富です。",
    category: "general" as const,
  },
  {
    q: "西川口・南鳩ヶ谷など駅周辺での施工は可能ですか？",
    a: "はい。西川口駅周辺・南鳩ヶ谷駅周辺など主要駅周辺のマンション・アパートの施工実績が多くあります。駅近くの高層建築物でも対応可能です。",
    category: "general" as const,
  },
  {
    q: "原状回復工事の実績は多いですか？",
    a: "はい。川口市は賃貸物件が多いため、退去後の原状回復工事のご依頼が多く寄せられます。畳・襖・障子・クロスを一括対応し、スムーズな工程管理を実現します。",
    category: "general" as const,
  },
  {
    q: "複数物件の見積もり・施工に対応していますか？",
    a: "はい。不動産管理会社様からの複数物件の見積もり・施工に対応しています。一元管理で工程を調整し、効率的な施工を心がけています。",
    category: "general" as const,
  },
  {
    q: "川口市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。複数枚・複数物件の場合は割引をご相談できることもあります。",
    category: "price" as const,
  },
  {
    q: "施工時間に制限がある集合住宅でも大丈夫ですか？",
    a: "はい。共用部の使用時間制限・騒音に配慮が必要な物件にも対応しています。事前に管理規約をご確認いただき、に合わせた施工スケジュールを提案します。",
    category: "general" as const,
  },
  {
    q: "ペット対応の畳素材を教えてください。",
    a: "樹脂畳・和紙畳がペット対応です。川口市内でもペットを飼われている賃貸物件が増えており、これらの素材への変更・新調のご依頼も増加しています。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、法人様・管理会社様は請求書払いに対応しています。",
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
    { "@type": "ListItem", position: 4, name: "川口市", item: `${SITE_URL}/area/saitama/kawaguchi` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/kawaguchi#webpage`,
  name: "川口市の畳張替え・表替え・新調",
  description: "川口市全域で畳張替え・表替え・新調に対応。工業都市・賃貸マンション密集地での豊富な施工実績。戸建て・集合住宅・法人施設。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/kawaguchi`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kawaguchi`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "川口市全域対応の畳張替え・表替え・新調・原状回復専門業者。工場・賃貸物件実績豊富。",
  areaServed: { "@type": "City", name: "川口市" },
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

export default function KawaguchiPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "川口市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kawaguchi City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            川口市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県南東部の工業都市・川口市。賃貸マンション・アパートが密集したエリアでの施工実績が豊富です。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            工場従業員寮から一般住宅、不動産管理会社との継続案件まで、幅広い対応実績があります。複数物件の原状回復工事も一括対応可能です。
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

          {/* 川口市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川口市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                川口市は埼玉県の南東部に位置し、人口170万人の鋳物・金属加工業の中心地です。工業地帯と住宅地が密接に隣在し、工場従業員寮から一般住宅、高層マンション・アパートまで、多様な建築が混在しています。
              </p>
              <p>
                特徴的なのは賃貸住宅の密集度の高さです。西川口駅周辺・南鳩ヶ谷駅周辺など主要駅の周囲には、多層建築の賃貸マンション・アパートが立ち並んでいます。このため、不動産管理会社様からの継続案件・複数物件の原状回復工事のご依頼が大多数を占めています。
              </p>
              <p>
                川口市内での気候特性は、夏の多湿・冬の乾燥が埼玉県内でも特に厳しいエリアです。高密集地のため換気が不十分になりやすく、畳のカビ・ダニ発生リスクが高い傾向にあります。また、古い工場地帯から新興マンション地帯への変化が著しく、施工する物件のタイプが多様化しています。
              </p>
              <p>
                賃貸オーナー様・管理会社様からの継続案件対応として、複数物件の一元管理・効率的な工程調整・写真付き報告書の提出を心がけています。
              </p>
            </div>
          </div>

          {/* 川口市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川口市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "賃貸マンション・アパート", desc: "複数物件の継続案件に対応。一元管理で工程調整が可能。" },
                { title: "原状回復工事", desc: "退去後のクリーニング・畳・襖・クロス・床一括対応。" },
                { title: "工場従業員寮", desc: "工業地帯の寮施設の畳・襖工事。法人様向け継続案件。" },
                { title: "新興マンション・RC造建築", desc: "高層建築・フローリング床への薄型畳対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 川口市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川口市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "複数物件の見積もり・施工", desc: "不動産管理会社様向け。複数物件の一括見積もり・一元管理対応。" },
                { title: "賃貸物件の原状回復工事", desc: "畳・襖・障子・クロス・床一括対応。管理会社のご要望に応じた品質管理。" },
                { title: "マンション和室の張替え", desc: "高層建築・薄型畳対応。集合住宅の施工時間制限に対応。" },
                { title: "ペット対応畳への変更", desc: "樹脂畳・和紙畳へのグレードアップ。川口市内のペット可マンションが増加中。" },
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
              川口市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 複数物件の場合、割引相談可能です。</p>
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "最小単位での対応可能" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "複数物件割引あり" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "ペット対応物件向け" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "完全防水・高耐久性" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "原状回復用量産品対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "一括対応可能" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。複数物件は事前に数量をお知らせください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "工場寮・福利厚生施設対応" },
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
              川口市の方向けよくある質問（Q&A）
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
              { label: "越谷市", href: "/area/saitama/koshigaya" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "八潮市", href: "/area/saitama/yashio" },
              { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner" },
              { label: "管理会社向け", href: "/area/saitama/for-property-management" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "ペット対応畳", href: "/area/saitama/pet-urine" },
              { label: "価格目安", href: "/price" },
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
        title="川口市の畳工事はお気軽にご相談ください"
        subtitle="複数物件・継続案件・原状回復工事に対応。賃貸管理会社様からのご相談も歓迎いたします。"
      />
    </>
  );
}
