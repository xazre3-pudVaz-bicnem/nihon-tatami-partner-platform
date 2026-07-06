import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "日高市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "日高市全域で畳の張替え・表替え・新調に対応。巾着田の曼珠沙華で知られる自然豊かなエリアの戸建て・古民家・別荘に豊富な実績。日高 畳のご相談はお気軽に。現地確認・見積もり無料。",
  path: "/area/saitama/hidaka",
});

const { pref, city } = getCity("saitama", "hidaka") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "日高市内のどのエリアまで対応していますか？",
    a: "日高市全域に対応しています。高麗川駅・武蔵高萩駅周辺から、高麗・巾着田周辺・横手・女影・高萩など市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "山あいの古民家でも施工に来てもらえますか？",
    a: "はい。日高市には高麗郷をはじめ、広い和室や囲炉裏のある古民家が残っています。現地の状況を確認したうえで、床下の傷みも含めた畳新調・表替えに対応します。",
    category: "general" as const,
  },
  {
    q: "自然が多い地域ですが畳の虫対策はできますか？",
    a: "はい。緑に囲まれた立地では畳への虫の付着やカビが気になるという声を多くいただきます。防虫・防カビ加工の畳表や、害虫が寄り付きにくい和紙畳・樹脂畳をご提案できます。",
    category: "material" as const,
  },
  {
    q: "曼珠沙華のシーズンでも工事を依頼できますか？",
    a: "はい。巾着田曼珠沙華まつりの時期も通常どおり施工に対応しています。周辺は混雑することがあるため、訪問日時は事前に調整させていただきます。",
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
    q: "日高市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "別荘やセカンドハウスの畳も頼めますか？",
    a: "はい。日高市は自然環境の良さから別荘・セカンドハウスも点在しています。普段留守にされているお宅でも、日程を調整して訪問・施工いたします。",
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
    { "@type": "ListItem", position: 4, name: "日高市", item: `${SITE_URL}/area/saitama/hidaka` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/hidaka#webpage`,
  name: "日高市の畳張替え・表替え・新調",
  description: "日高市全域で畳の張替え・表替え・新調に対応。巾着田の曼珠沙華で知られる自然豊かなエリアの戸建て・古民家・別荘に豊富な実績。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/hidaka`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/hidaka`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "日高市全域対応の畳張替え・表替え・新調・原状回復専門業者。古民家・別荘の広い和室にも対応。",
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

export default function HidakaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "日高市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Hidaka City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            日高市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            巾着田の曼珠沙華で知られる埼玉県西部の日高市。自然に囲まれた立地には広い和室を持つ古民家や別荘が多く、日高 畳の張替え・表替え・新調に対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            緑豊かな環境ならではの虫・湿気対策も踏まえ、防虫・防カビに配慮した素材選びをご提案。囲炉裏のある和室や続き間の新調まで丁寧に仕上げます。
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
              日高市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                日高市は埼玉県西部、高麗川が流れる自然豊かなまちです。秋には巾着田に約500万本の曼珠沙華（彼岸花）が咲き誇り、全国から多くの人が訪れる名所として知られています。古代に渡来人が開いた高麗郷の歴史も色濃く残る土地です。
              </p>
              <p>
                住宅は、里山に囲まれた地域に広い和室や囲炉裏を備えた古民家・農家住宅が点在する一方、高麗川駅・武蔵高萩駅周辺には戸建て住宅地も広がっています。自然環境の良さから、別荘・セカンドハウスを構える方も少なくありません。
              </p>
              <p>
                緑に囲まれた立地では、畳への虫の付着や湿気によるカビが気になるという声を多くいただきます。防虫・防カビ加工の畳表や、害虫が寄り付きにくく調湿性に優れた和紙畳・樹脂畳のご提案が好評です。
              </p>
              <p>
                日本畳パートナーズでは、日高市全域を対象に現地確認・お見積もりを無料で承っています。普段留守にされている別荘でも、日程を調整して丁寧に施工します。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              日高市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "古民家・農家住宅の和室", desc: "囲炉裏のある広い和室や続き間の畳新調・表替えに対応。" },
                { title: "虫・湿気対策の素材提案", desc: "緑豊かな立地に配慮した防虫・防カビ・調湿素材。" },
                { title: "別荘・セカンドハウス", desc: "留守宅でも日程調整のうえ訪問・施工に対応。" },
                { title: "駅周辺の戸建て住宅", desc: "高麗川・武蔵高萩エリアの住宅の和室リフレッシュ。" },
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
              日高市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "古民家の畳新調", desc: "床の傷みまで確認し、長く使える畳床から新調します。" },
                { title: "い草畳への表替え", desc: "自然素材の香りと肌ざわりで、里山の暮らしにぴったり。" },
                { title: "和紙畳・樹脂畳への変更", desc: "虫・湿気・色あせに強く、別荘やセカンドハウスにおすすめ。" },
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
              日高市内の施工費用目安
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "虫・色あせに強い" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久で別荘に好適" },
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
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・古民家の畳・襖・障子" },
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
              日高市の方向けよくある質問（Q&A）
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
              { label: "飯能市", href: "/area/saitama/hanno" },
              { label: "坂戸市", href: "/area/saitama/sakado" },
              { label: "鶴ヶ島市", href: "/area/saitama/tsurugashima" },
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
        title="日高市の畳工事はお気軽にご相談ください"
        subtitle="古民家の続き間から別荘の和室まで、日高市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
