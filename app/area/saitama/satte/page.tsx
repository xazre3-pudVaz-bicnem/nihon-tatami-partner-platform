import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "幸手市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "幸手市全域で畳の張替え・表替え・新調に対応。権現堂桜堤など桜の名所で知られる東部エリアの戸建て・農家住宅・賃貸物件に豊富な実績。現地確認・見積もり無料。幸手 畳のご相談はお気軽に。",
  path: "/area/saitama/satte",
});

const { pref, city } = getCity("saitama", "satte") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "幸手市内のどのエリアまで対応していますか？",
    a: "幸手市全域に対応しています。中心部の幸手駅周辺から、権現堂・上高野・吉羽・惣新田・上宇和田など市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "権現堂周辺の古い農家住宅でも施工できますか？",
    a: "はい。幸手市には広い和室を持つ農家住宅・古民家が多く残っています。8畳・10畳の続き間や仏間の畳新調・表替えの実績が豊富で、床下の状態を確認したうえで最適な施工をご提案します。",
    category: "general" as const,
  },
  {
    q: "桜のシーズンでも工事を依頼できますか？",
    a: "はい。権現堂桜堤の桜まつり期間中も通常どおり施工に対応しています。ご希望の日時をお知らせいただければ、周辺の交通状況にも配慮して訪問日を調整します。",
    category: "general" as const,
  },
  {
    q: "湿気で畳が傷みやすいのですが対策はありますか？",
    a: "幸手市は中川・権現堂川に近い低地が多く、湿気がこもりやすいエリアです。防カビ・防ダニ加工の畳表や、調湿性に優れた和紙畳・樹脂畳へのご提案が可能です。",
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
    q: "幸手市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "賃貸物件の原状回復にも対応していますか？",
    a: "はい。幸手駅周辺のアパート・賃貸戸建ての退去後原状回復に対応しています。畳・襖・障子・網戸を一括で承り、次の入居募集に間に合わせるスケジュールを心がけています。",
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
    { "@type": "ListItem", position: 4, name: "幸手市", item: `${SITE_URL}/area/saitama/satte` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/satte#webpage`,
  name: "幸手市の畳張替え・表替え・新調",
  description: "幸手市全域で畳の張替え・表替え・新調に対応。権現堂桜堤で知られる東部エリアの戸建て・農家住宅・賃貸物件に豊富な実績。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/satte`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/satte`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "幸手市全域対応の畳張替え・表替え・新調・原状回復専門業者。農家住宅・古民家の広い和室にも対応。",
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

export default function SattePage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "幸手市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Satte City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            幸手市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            権現堂桜堤で知られる埼玉県東部の幸手市。広い和室を持つ農家住宅・古民家から市街地の戸建て・賃貸まで、幸手 畳の張替え・表替え・新調に幅広く対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            低地で湿気がこもりやすい地域特性を踏まえ、防カビ・調湿性に配慮した素材選びをご提案。1枚の表替えから続き間の新調まで、丁寧に仕上げます。
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
              幸手市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                幸手市は埼玉県の東部、中川・権現堂川に沿って広がる田園と住宅が調和したまちです。春には権現堂桜堤の桜と菜の花が一面を彩り、県内外から多くの人が訪れる桜の名所として知られています。
              </p>
              <p>
                住宅は、8畳・10畳の続き間や仏間を備えた農家住宅・古民家が多く残る一方で、幸手駅周辺には戸建て住宅やアパートも増えています。広い和室の畳新調から、賃貸物件の原状回復まで、住まいのタイプに応じた施工が求められる地域です。
              </p>
              <p>
                河川に近い低地が多いため、床下や畳に湿気がこもりやすいのも特徴です。カビ・ダニの発生を抑えるため、防カビ・防ダニ加工の畳表や、調湿性・耐水性に優れた和紙畳・樹脂畳をおすすめするケースが増えています。
              </p>
              <p>
                日本畳パートナーズでは、幸手市全域を対象に現地確認・お見積もりを無料で承っています。畳の状態を丁寧に拝見し、暮らし方とご予算に合わせた最適なプランをご提案します。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              幸手市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "農家住宅・古民家の続き間", desc: "8畳・10畳の広い和室や仏間の畳新調・表替えに対応。" },
                { title: "湿気対策の素材提案", desc: "低地特有の湿気に配慮し、防カビ・調湿素材をご提案。" },
                { title: "賃貸・アパートの原状回復", desc: "幸手駅周辺の退去後クリーニングと畳・襖の一括対応。" },
                { title: "和室まるごとリフレッシュ", desc: "畳・襖・障子・網戸を同時施工し費用も効率的に。" },
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
              幸手市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "い草畳への表替え", desc: "日焼け・ささくれが気になる和室を、香り豊かない草でリフレッシュ。" },
                { title: "和紙畳・樹脂畳への新調", desc: "湿気・色あせに強く、農家住宅の広い和室にもおすすめ。" },
                { title: "仏間・続き間の畳新調", desc: "床の傷みまで確認し、長く使える畳床から新調します。" },
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
              幸手市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "香りと肌ざわりを重視する方に" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせ・湿気に強い" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久" },
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
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・農家住宅の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
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
              幸手市の方向けよくある質問（Q&A）
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
              { label: "久喜市", href: "/area/saitama/kuki" },
              { label: "加須市", href: "/area/saitama/kazo" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
              { label: "白岡市", href: "/area/saitama/shiraoka" },
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
        title="幸手市の畳工事はお気軽にご相談ください"
        subtitle="農家住宅の続き間から賃貸の原状回復まで、幸手市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
