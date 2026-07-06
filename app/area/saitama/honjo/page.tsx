import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "本庄市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "本庄市全域で畳の張替え・表替え・新調に対応。中山道の宿場町として栄えた歴史ある北部エリアの町家・古民家・戸建てに実績豊富。本庄 畳のご相談はお気軽に。現地確認・見積もり無料。",
  path: "/area/saitama/honjo",
});

const { pref, city } = getCity("saitama", "honjo") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "本庄市内のどのエリアまで対応していますか？",
    a: "本庄市全域に対応しています。本庄駅・本庄早稲田駅周辺から、中央・銀座などの旧市街、児玉・美里方面まで、市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "宿場町の古い町家や古民家でも施工できますか？",
    a: "はい。本庄は中山道最大級の宿場町として栄えた歴史があり、旧市街には趣ある町家や古民家が残っています。広い和室や続き間、床の傷みまで確認したうえで畳新調・表替えに対応します。",
    category: "general" as const,
  },
  {
    q: "本庄早稲田駅周辺の新しい住宅でも対応してもらえますか？",
    a: "はい。上越・北陸新幹線の本庄早稲田駅周辺は区画整理が進み、新しい戸建て住宅が増えています。フローリングに合わせた薄型畳や縁なし畳の施工にも対応しています。",
    category: "general" as const,
  },
  {
    q: "冬の乾燥で畳が傷みやすいのですが対策はありますか？",
    a: "本庄市は冬にからっ風が吹く乾燥した気候です。乾燥に強く色あせしにくい和紙畳や、耐久性の高い樹脂畳のご提案が可能です。い草畳の場合も適切なお手入れ方法をご案内します。",
    category: "material" as const,
  },
  {
    q: "見積もりだけでも来てもらえますか？",
    a: "はい。現地確認・お見積もりは無料です。畳の枚数や傷み具合を拝見したうえで、複数のプランと概算費用をその場でご説明します。",
    category: "price" as const,
  },
  {
    q: "1枚だけの表替えでも対応してもらえますか？",
    a: "はい。1枚からでも承ります。日焼けやささくれが気になる1枚だけの表替え・裏返しにも柔軟に対応しています。",
    category: "general" as const,
  },
  {
    q: "本庄市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "仏間や床の間のある和室も頼めますか？",
    a: "はい。本庄の旧家には仏間・床の間を備えた格式ある和室が多くあります。畳の寸法や縁の格に配慮しながら、伝統的な和室にふさわしい仕上げを行います。",
    category: "general" as const,
  },
  {
    q: "襖や障子もまとめて頼めますか？",
    a: "はい。畳の張替えと同時に襖・障子・網戸の張替えもまとめて承れます。一度の訪問で和室全体をリフレッシュでき、費用も効率的です。",
    category: "general" as const,
  },
  {
    q: "支払い方法を教えてください。",
    a: "現地確認・見積もりは無料で、施工完了後のお支払いが基本です。法人様・管理会社様は請求書払いにも対応しています。",
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
    { "@type": "ListItem", position: 4, name: "本庄市", item: `${SITE_URL}/area/saitama/honjo` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/honjo#webpage`,
  name: "本庄市の畳張替え・表替え・新調",
  description: "本庄市全域で畳の張替え・表替え・新調に対応。中山道の宿場町として栄えた歴史ある北部エリアの町家・古民家・戸建てに実績豊富。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/honjo`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/honjo`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "本庄市全域対応の畳張替え・表替え・新調・原状回復専門業者。宿場町の町家・古民家の和室にも対応。",
  areaServed: { "@type": "AdministrativeArea", name: "埼玉県" },
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

export default function HonjoPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "本庄市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Honjo City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            本庄市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            中山道最大級の宿場町として栄えた埼玉県北部の本庄市。旧市街に残る町家・古民家から、本庄早稲田駅周辺の新しい住宅まで、本庄 畳の張替え・表替え・新調に対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            仏間・床の間のある格式ある和室から、乾燥に強い素材選びまで丁寧にご提案。歴史ある住まいの続き間の畳新調も承ります。
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

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              本庄市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                本庄市は埼玉県の最北部、群馬県との県境に位置するまちです。江戸時代には中山道最大級の宿場町として栄え、商家が軒を連ねた歴史を今に伝える町家や蔵が旧市街に残っています。
              </p>
              <p>
                こうした歴史ある住まいには、仏間・床の間を備えた格式ある和室や、8畳・10畳の続き間が多く見られます。一方、上越・北陸新幹線の本庄早稲田駅周辺は区画整理が進み、新しい戸建て住宅も増えています。伝統的な和室から現代的な住まいまで、幅広い畳工事が求められる地域です。
              </p>
              <p>
                本庄市は冬にからっ風が吹く乾燥した気候で、畳が乾燥で傷みやすい傾向があります。乾燥に強く色あせしにくい和紙畳や、耐久性の高い樹脂畳のご提案が好評です。伝統的な和室にはい草畳の風合いを活かした仕上げも承ります。
              </p>
              <p>
                日本畳パートナーズでは、本庄市全域を対象に現地確認・お見積もりを無料で承っています。畳の寸法や縁の格に配慮し、住まいにふさわしい仕上げをご提案します。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              本庄市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "宿場町の町家・古民家", desc: "商家建築や蔵座敷の広い和室・続き間の畳工事に対応。" },
                { title: "仏間・床の間の和室", desc: "畳の寸法・縁の格に配慮した格式ある仕上げ。" },
                { title: "乾燥対策の素材提案", desc: "からっ風の気候に配慮し、色あせに強い素材をご提案。" },
                { title: "新駅周辺の戸建て住宅", desc: "本庄早稲田エリアの新築・分譲住宅の薄型畳に対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              本庄市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "続き間・仏間の畳新調", desc: "床の傷みまで確認し、長く使える畳床から新調します。" },
                { title: "い草畳への表替え", desc: "伝統的な和室に映える香り豊かな自然素材。" },
                { title: "和紙畳・樹脂畳への変更", desc: "乾燥・色あせ・傷に強く、お手入れも簡単。" },
                { title: "襖・障子・網戸の張替え", desc: "畳工事とあわせて和室全体を一度の訪問で仕上げます。" },
              ].map((service, i) => (
                <div key={i} className="border border-border bg-white p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{service.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              本庄市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 素材・広さにより変動します。</p>
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "新しいうちの早めの対応がおすすめ" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "伝統的な和室に映える自然素材" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "乾燥・色あせに強い" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐久性が高くお手入れ簡単" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "量産品・本襖対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "まとめてのご依頼で効率的" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。枚数・素材により変動します。まずは無料見積もりをご利用ください。</p>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・町家・古民家の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "寺社・伝統建築向け", href: "/area/saitama/for-temple-shrine", desc: "本間サイズ・広間の畳工事" },
                { label: "畳の選び方ガイド", href: "/area/saitama/guide-tatami-buying", desc: "い草・和紙・樹脂の違いを解説" },
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

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              本庄市の方向けよくある質問（Q&A）
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
              { label: "畳張替え・畳工事", href: "/area/saitama/tatami" },
              { label: "畳の選び方ガイド", href: "/area/saitama/guide-tatami-buying" },
              { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner" },
              { label: "深谷市", href: "/area/saitama/fukaya" },
              { label: "熊谷市", href: "/area/saitama/kumagaya" },
              { label: "畳新調", href: "/area/saitama/tatami-shinchou" },
              { label: "畳表替え", href: "/area/saitama/tatami-omotegae" },
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
        title="本庄市の畳工事はお気軽にご相談ください"
        subtitle="宿場町の町家から新駅周辺の戸建てまで、本庄市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
