import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "上尾市の畳張替え・表替え・新調｜埼玉県中央対応｜日本畳パートナーズ",
  description:
    "上尾市全域で畳張替え・表替え・新調に対応。埼玉県中央部の拠点都市。戸建て・マンション・団地。現地確認・見積もり無料。",
  path: "/area/saitama/ageo",
});

const FAQ_ITEMS = [
  {
    q: "上尾市内のどのエリアまで対応していますか？",
    a: "上尾市全域に対応しています。上尾駅周辺・北上尾駅周辺・桶川方面など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "上尾駅周辺の商業地での施工は可能ですか？",
    a: "はい。上尾駅周辺のマンション・商業施設・オフィスビルの施工実績があります。駅近くの高層建築物でも対応可能です。",
    category: "general" as const,
  },
  {
    q: "古い団地・集合住宅での施工に対応していますか？",
    a: "はい。上尾市内の団地・集合住宅のメンテナンス・張替え工事に対応した実績があります。複数戸一括施工も可能です。",
    category: "general" as const,
  },
  {
    q: "北上尾駅周辺のマンションでの施工は可能ですか？",
    a: "はい。北上尾駅周辺のマンション・住宅地の施工実績があります。駅周辺の開発地域でも対応可能です。",
    category: "general" as const,
  },
  {
    q: "上尾市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。複数戸・団地は割引相談可能です。",
    category: "price" as const,
  },
  {
    q: "団地全体のメンテナンス計画に対応していますか？",
    a: "はい。団地管理組合様からのご依頼で、計画的なメンテナンス・複数棟一括施工に対応しています。",
    category: "general" as const,
  },
  {
    q: "戸建住宅の施工実績も多いですか？",
    a: "はい。上尾市内の戸建住宅の表替え・新調に多くの施工実績があります。一般家庭から管理物件まで対応可能です。",
    category: "general" as const,
  },
  {
    q: "リノベーション・改修工事での対応はできますか？",
    a: "はい。古い団地・旧家のリノベーション工事において、畳・襖・障子・建具の一括対応が可能です。",
    category: "general" as const,
  },
  {
    q: "複数物件の見積もり・施工に対応していますか？",
    a: "はい。複数物件の見積もり・施工に対応しています。一元管理で工程を調整し、効率的な施工を心がけています。",
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
    { "@type": "ListItem", position: 4, name: "上尾市", item: `${SITE_URL}/area/saitama/ageo` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/ageo`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "上尾市全域対応の畳張替え・表替え・新調・団地対応専門業者。",
  areaServed: { "@type": "City", name: "上尾市" },
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

export default function AgeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "上尾市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Ageo City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            上尾市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県の中央部・上尾市。駅周辺の商業地から団地・戸建て住宅地まで、多様な物件での施工に対応しています。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            団地の計画的メンテナンスから個別住宅のリノベーション、複数物件の一括施工まで、お気軽にご相談ください。
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

          {/* 上尾市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              上尾市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                上尾市は埼玉県の中央部に位置し、人口約23万人の商業・住宅地が混在する都市です。上尾駅周辺は商業地として発展し、一方で市内には昭和期の団地・集合住宅が数多く存在します。
              </p>
              <p>
                上尾市での畳工事の最大の特徴は「団地・集合住宅のメンテナンス」です。古くからの団地の計画的なリノベーション・メンテナンスのご依頼が多く寄せられます。団地管理組合様からのご依頼で、複数棟一括施工・計画的なスケジュール調整を心がけています。
              </p>
              <p>
                一方で、戸建て住宅地も広がっており、個別住宅のリノベーション・新築物件のメンテナンスなど、幅広い施工実績があります。
              </p>
              <p>
                上尾駅周辺の商業地では、マンション・オフィスビルなどの高層建築での施工実績も豊富です。
              </p>
            </div>
          </div>

          {/* 上尾市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              上尾市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "団地・集合住宅", desc: "計画的メンテナンス・複数棟一括施工対応" },
                { feature: "戸建住宅地", desc: "個別リノベーション・メンテナンス工事" },
                { feature: "駅周辺商業地", desc: "高層建築・マンション・オフィス施工実績" },
                { feature: "複数物件対応", desc: "管理組合様・複数オーナー様の一元管理" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 上尾市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              上尾市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "団地全体の計画的メンテナンス", desc: "管理組合様からのご依頼で、複数棟一括施工・長期計画対応。" },
                { title: "戸建住宅のリノベーション", desc: "古い戸建て住宅の全面改修・畳・襖・障子一括対応。" },
                { title: "駅周辺マンション・オフィス", desc: "上尾駅周辺の高層建築・商業施設の大規模工事。" },
                { title: "複数オーナー物件の管理", desc: "複数物件の一括見積もり・効率的な工程管理。" },
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
              上尾市内の施工費用目安
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
                { label: "複数物件オーナー向け", href: "/contact", desc: "複数物件一括見積もり・一元管理" },
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
              上尾市の方向けよくある質問（Q&A）
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
              { label: "桶川市", href: "/area/saitama/okegawa" },
              { label: "北本市", href: "/area/saitama/kitamoto" },
              { label: "戸田市", href: "/area/saitama/toda" },
              { label: "朝霞市", href: "/area/saitama/asaka" },
              { label: "新座市", href: "/area/saitama/niiza" },
              { label: "団地・複数物件向け", href: "/area/saitama/for-property-management" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "表替え", href: "/area/saitama/tatami-omotegae" },
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
        title="上尾市の畳工事はお気軽にご相談ください"
        subtitle="団地・集合住宅・戸建て住宅・マンションなど、あらゆる物件に対応します。複数物件の一括見積もりもお気軽にご相談ください。"
      />
    </>
  );
}
