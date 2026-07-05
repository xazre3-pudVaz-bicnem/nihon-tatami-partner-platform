import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "新座市の畳張替え・表替え・新調｜南部拠点対応｜日本畳パートナーズ",
  description:
    "新座市全域で畳張替え・表替え・新調に対応。埼玉県南部の住宅地。戸建て・マンション・団地。東京都内への対応も相談可能。現地確認・見積もり無料。",
  path: "/area/saitama/niiza",
});

const FAQ_ITEMS = [
  {
    q: "新座市内のどのエリアまで対応していますか？",
    a: "新座市全域に対応しています。新座駅周辺・志木駅周辺・朝霞駅周辺など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "新座市は団地が多いですが、施工できますか？",
    a: "はい。新座市は団地・集合住宅が多い地域で、団地全体のメンテナンス計画に対応した実績が豊富です。管理組合様からのご依頼も多くあります。",
    category: "general" as const,
  },
  {
    q: "新座駅周辺・志木駅周辺のマンションでの施工は可能ですか？",
    a: "はい。駅周辺のマンション・商業施設の施工実績があります。駅近くの高層建築物でも対応可能です。",
    category: "general" as const,
  },
  {
    q: "戸建住宅の施工実績も多いですか？",
    a: "はい。新座市内の戸建住宅の表替え・新調に多くの施工実績があります。一般家庭から管理物件まで対応可能です。",
    category: "general" as const,
  },
  {
    q: "東京都内との境界に近いですが、東京側の施工も対応していますか？",
    a: "はい。新座市内から東京都内への出張施工も可能です。市境を越えた施工ご相談もお受けしています。事前にご連絡ください。",
    category: "general" as const,
  },
  {
    q: "新座市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。団地・複数物件は割引相談可能です。",
    category: "price" as const,
  },
  {
    q: "複数物件の見積もり・施工に対応していますか？",
    a: "はい。複数物件の見積もり・施工に対応しています。一元管理で工程を調整し、効率的な施工を心がけています。",
    category: "general" as const,
  },
  {
    q: "リノベーション・改修工事での対応はできますか？",
    a: "はい。古い団地・旧家のリノベーション工事において、畳・襖・障子・建具の一括対応が可能です。",
    category: "general" as const,
  },
  {
    q: "原状回復工事に対応していますか？",
    a: "はい。賃貸物件の退去後の原状回復工事に対応しています。畳・襖・障子・クロスを一括対応できます。",
    category: "general" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、法人様・管理組合様は請求書払いに対応しています。",
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
    { "@type": "ListItem", position: 4, name: "新座市", item: `${SITE_URL}/area/saitama/niiza` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/niiza`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "新座市全域対応の畳張替え・表替え・新調・団地対応専門業者。東京都内対応も相談可能。",
  areaServed: { "@type": "City", name: "新座市" },
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

export default function NiizaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "新座市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Niiza City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            新座市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県南部の住宅地・新座市。東京都との境界に位置し、団地・マンション・戸建て住宅での多様な施工に対応しています。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            団地の計画的メンテナンスから個別住宅のリノベーション、東京都内への対応も相談可能です。
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

          {/* 新座市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              新座市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                新座市は埼玉県の南部に位置し、人口約18万人の住宅都市です。東京都との境界に近く、高度経済成長期に造成された団地が数多く存在します。同時に、新座駅周辺は商業地として発展し、マンション・オフィスビルなど現代的な建築も増えています。
              </p>
              <p>
                新座市での畳工事の最大の特徴は「団地・集合住宅のメンテナンス」です。老朽化した団地の計画的なリノベーション・メンテナンスのご依頼が多く寄せられます。団地管理組合様からのご依頼で、複数棟一括施工・長期的なメンテナンス計画の提案をしています。
              </p>
              <p>
                また、新座市は東京都との境界に近いため、市内から東京都内への出張施工にも対応可能です。埼玉県と東京都の両方をカバーできる利点を活かし、柔軟な対応をしています。
              </p>
              <p>
                戸建て住宅地も広がっており、個別住宅のリノベーション・新築物件のメンテナンスなど、幅広い施工実績があります。
              </p>
            </div>
          </div>

          {/* 新座市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              新座市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "団地・集合住宅", desc: "計画的メンテナンス・複数棟一括施工対応" },
                { feature: "戸建住宅地", desc: "個別リノベーション・メンテナンス工事" },
                { feature: "駅周辺マンション", desc: "新座駅周辺・高層建築施工実績" },
                { feature: "東京都対応", desc: "市境を越えた東京都内への出張施工も可能" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 新座市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              新座市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "団地全体の計画的メンテナンス", desc: "管理組合様からのご依頼で、複数棟一括施工・長期計画対応。" },
                { title: "戸建住宅のリノベーション", desc: "古い戸建て住宅の全面改修・畳・襖・障子一括対応。" },
                { title: "駅周辺マンション・商業施設", desc: "新座駅周辺の高層建築・商業施設の大規模工事。" },
                { title: "原状回復工事", desc: "退去後の畳・襖・障子・クロス一括対応。" },
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
              新座市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 団地・複数物件は割引対応可能です。</p>
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "団地・複数物件割引あり" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "標準グレード" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "耐久性重視" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・集合住宅向け" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション・団地向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "戸建住宅向け" },
                    { label: "襖 張替え", price: "3,500円〜/枚", note: "複数棟対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。団地・複数物件は割引相談可能です。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "管理組合・団地向け", href: "/area/saitama/for-property-management", desc: "複数棟一括施工・計画的メンテナンス" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "東京都内対応向け", href: "/contact", desc: "埼玉県・東京都の両方に対応可能" },
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
              新座市の方向けよくある質問（Q&A）
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
              { label: "朝霞市", href: "/area/saitama/asaka" },
              { label: "上尾市", href: "/area/saitama/ageo" },
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "戸田市", href: "/area/saitama/toda" },
              { label: "東京都対応", href: "/contact" },
              { label: "団地・複数物件向け", href: "/area/saitama/for-property-management" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
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
        title="新座市の畳工事はお気軽にご相談ください"
        subtitle="団地・集合住宅・戸建て住宅・マンションなど、あらゆる物件に対応します。東京都内対応についても事前にご相談ください。"
      />
    </>
  );
}
