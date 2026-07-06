import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "東松山市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "東松山市全域で畳の張替え・表替え・新調に対応。味噌だれやきとりで知られ、比企エリアの拠点として発展する中部のまち。戸建て・古民家・分譲マンションに実績豊富。東松山 畳のご相談はお気軽に。見積もり無料。",
  path: "/area/saitama/higashimatsuyama",
});

const { pref, city } = getCity("saitama", "higashimatsuyama") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "東松山市内のどのエリアまで対応していますか？",
    a: "東松山市全域に対応しています。東松山駅・高坂駅周辺の市街地から、松山・箭弓町・唐子・高坂ニュータウンなど市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "高坂ニュータウンの住宅の和室にも対応できますか？",
    a: "はい。高坂駅周辺のニュータウンには戸建て住宅や集合住宅が広がっています。フローリングに合わせた薄型畳や縁なし畳の表替え・新調にも対応しています。",
    category: "general" as const,
  },
  {
    q: "比企郡の周辺町村にも来てもらえますか？",
    a: "はい。東松山市は比企エリアの中心都市です。市内はもちろん、隣接する滑川町・嵐山町・小川町・吉見町など比企郡の周辺地域からのご相談もお気軽にお問い合わせください。",
    category: "general" as const,
  },
  {
    q: "古い農家住宅の広い和室でも施工できますか？",
    a: "はい。東松山市には広い和室や仏間を備えた農家住宅・古民家が残っています。8畳・10畳の続き間や床の傷みも含めた畳新調・表替えに対応します。",
    category: "general" as const,
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
    q: "東松山市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "仏間や床の間のある和室も頼めますか？",
    a: "はい。東松山の農家住宅・旧家には仏間・床の間を備えた格式ある和室が多くあります。畳の寸法や縁の格に配慮しながら、伝統的な和室にふさわしい仕上げを行います。",
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
    { "@type": "ListItem", position: 4, name: "東松山市", item: `${SITE_URL}/area/saitama/higashimatsuyama` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/higashimatsuyama#webpage`,
  name: "東松山市の畳張替え・表替え・新調",
  description: "東松山市全域で畳の張替え・表替え・新調に対応。味噌だれやきとりで知られ、比企エリアの拠点として発展する中部のまち。戸建て・古民家・分譲マンションに実績豊富。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/higashimatsuyama`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/higashimatsuyama`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "東松山市全域対応の畳張替え・表替え・新調・原状回復専門業者。比企エリアの戸建て・古民家・ニュータウンにも対応。",
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

export default function HigashimatsuyamaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "東松山市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Higashimatsuyama City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            東松山市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            味噌だれやきとりで知られ、比企エリアの拠点として発展する埼玉県中部の東松山市。市街地の戸建てや高坂ニュータウンから、田園地帯の農家住宅・古民家まで、東松山 畳の張替え・表替え・新調に対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            伝統的な続き間の畳新調から、フローリングに合う薄型畳・縁なし畳まで幅広くご提案。比企郡の周辺地域からのご相談も歓迎します。
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
              東松山市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                東松山市は埼玉県のほぼ中央に位置し、比企地域の中心都市として発展してきたまちです。ピリ辛の味噌だれで食べる「東松山やきとり」の名物や、日本スリーデーマーチの開催地として全国に知られています。関越自動車道の東松山インターチェンジを擁し、交通の便にも恵まれています。
              </p>
              <p>
                市街地には戸建て住宅や、高坂駅周辺に広がる高坂ニュータウンの集合住宅・戸建てが集まる一方、郊外には広い和室や仏間を備えた農家住宅・古民家も数多く残っています。伝統的な畳の間から現代的な住まいまで、幅広い畳工事が求められる地域です。
              </p>
              <p>
                比企エリアの拠点である東松山市を中心に、隣接する滑川町・嵐山町・小川町・吉見町など周辺地域からのご相談も多くいただいています。農家住宅の続き間の新調から、ニュータウンの薄型畳・縁なし畳まで、住まいのタイプに合わせた素材と仕上げをご提案します。
              </p>
              <p>
                日本畳パートナーズでは、東松山市全域を対象に現地確認・お見積もりを無料で承っています。畳の状態を丁寧に拝見し、暮らし方とご予算に合わせた最適なプランをご提案します。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              東松山市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "農家住宅の続き間", desc: "8畳・10畳の広い和室や仏間の畳新調・表替えに対応。" },
                { title: "高坂ニュータウンの住宅", desc: "フローリングに合わせた薄型畳・縁なし畳をご提案。" },
                { title: "仏間・床の間の和室", desc: "畳の寸法・縁の格に配慮した格式ある仕上げ。" },
                { title: "比企エリア周辺にも対応", desc: "滑川町・嵐山町・小川町など周辺町村からのご相談も歓迎。" },
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
              東松山市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "続き間・仏間の畳新調", desc: "床の傷みまで確認し、長く使える畳床から新調します。" },
                { title: "い草畳への表替え", desc: "伝統的な和室に映える香り豊かな自然素材。" },
                { title: "縁なし畳・和紙畳への変更", desc: "ニュータウンのモダンな和室に映えるカラー畳もご用意。" },
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
              東松山市内の施工費用目安
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせに強くカラーも豊富" },
                    { label: "縁なし畳（半畳）", price: "8,000円〜/枚", note: "モダンな内装に人気" },
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
              東松山市の方向けよくある質問（Q&A）
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
              { label: "坂戸市", href: "/area/saitama/sakado" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "鴻巣市", href: "/area/saitama/konosu" },
              { label: "畳新調", href: "/area/saitama/tatami-shinchou" },
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
        title="東松山市の畳工事はお気軽にご相談ください"
        subtitle="農家住宅の続き間から高坂ニュータウンの住宅まで、東松山市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
