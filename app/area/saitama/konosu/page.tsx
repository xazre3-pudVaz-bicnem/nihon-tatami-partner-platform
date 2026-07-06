import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "鴻巣市の畳張替え・表替え・新調｜花のまちの戸建て対応｜日本畳パートナーズ",
  description:
    "鴻巣市全域で畳張替え・表替え・新調に対応。鴻巣駅・北鴻巣駅周辺の住宅地から、花き産地の農家住宅、田園地帯の和室まで、鴻巣の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/konosu",
});

const { pref, city } = getCity("saitama", "konosu") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "鴻巣市内のどのエリアまで対応していますか？",
    a: "鴻巣市全域に対応しています。鴻巣駅・北鴻巣駅周辺の市街地、吹上・川里地区、田園地帯の集落まで、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "鴻巣は花のまちと聞きますが、農家住宅の和室も対応できますか？",
    a: "はい。鴻巣はプリムラやパンジーなど花きの生産が全国有数で、花農家をはじめ農家住宅が多く残っています。続き間や床の間を備えた広い和室の表替え・新調にも慣れています。",
    category: "general" as const,
  },
  {
    q: "鴻巣びっくりひな祭りに合わせて客間をきれいにしたいのですが。",
    a: "はい。鴻巣は巨大なひな壇でも知られるひな人形のまちです。ひな飾りやお客様を迎える客間・座敷の畳を、行事の前にきれいに表替えするご依頼も承っています。ご希望の時期に合わせて日程を調整します。",
    category: "general" as const,
  },
  {
    q: "ひな人形を飾る和室に映える畳表はありますか？",
    a: "はい。青みの残る新しい国産い草表は、ひな人形や掛け軸を飾る和室によく映えます。縁の柄も、格式ある雰囲気に合わせてお選びいただけます。",
    category: "material" as const,
  },
  {
    q: "北鴻巣駅周辺のマンションや戸建てでも施工してもらえますか？",
    a: "はい。鴻巣駅・北鴻巣駅はJR高崎線で都心・大宮方面へ通勤に便利なため、駅周辺には戸建てや集合住宅が増えています。マンション和室・戸建ての畳工事にも対応しています。",
    category: "general" as const,
  },
  {
    q: "田園地帯で湿気が気になります。傷みにくい畳はありますか？",
    a: "田んぼや荒川に近い低地では、地面からの湿気で畳の裏面が傷みやすい傾向があります。調湿性のある和紙表や、耐水性の高い樹脂表への切り替え、防湿シートの併用などをご提案できます。",
    category: "material" as const,
  },
  {
    q: "鴻巣市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。枚数や素材によって変わりますので、無料見積もりでご確認ください。",
    category: "price" as const,
  },
  {
    q: "客間だけ良い畳表にして、他は普及品にすることはできますか？",
    a: "はい。お客様を迎える客間・座敷は上質な国産い草表、日常使いの部屋は手頃な素材、といったメリハリのあるご提案が可能です。ご予算に合わせて組み合わせられます。",
    category: "price" as const,
  },
  {
    q: "広い座敷を一度にまとめて表替えできますか？",
    a: "はい。花農家や旧家の広い座敷・続き間もまとめて表替え・新調に対応します。枚数が多い場合は事前に数量をお知らせいただければ、スムーズに施工いたします。",
    category: "general" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、事前にお見積もりをお出ししてからの施工となります。",
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
    { "@type": "ListItem", position: 4, name: "鴻巣市", item: `${SITE_URL}/area/saitama/konosu` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/konosu#webpage`,
  name: "鴻巣市の畳張替え・表替え・新調",
  description: "鴻巣市全域で畳張替え・表替え・新調に対応。鴻巣駅・北鴻巣駅周辺の住宅地から、花き産地の農家住宅、田園地帯の和室まで、鴻巣の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/konosu`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/konosu`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県鴻巣市全域対応の畳張替え・表替え・新調専門業者。花きの産地の農家住宅・田園地帯の和室・駅周辺の戸建ての畳工事に対応。",
  areaServed: { "@type": "City", name: "鴻巣市" },
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

export default function KonosuPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "鴻巣市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Konosu City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            鴻巣市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県中央部・鴻巣市。花き生産が全国有数の「花のまち」で、ひな人形やこうのとり伝説でも知られるまちで、鴻巣 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            花農家の広い座敷から、鴻巣駅・北鴻巣駅周辺の戸建て・マンション和室まで、幅広い畳工事に対応しています。
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

          {/* 鴻巣市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              鴻巣市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                鴻巣市は埼玉県のほぼ中央に位置し、プリムラやパンジーなど花きの生産が全国有数の「花のまち」として知られています。ひな人形の産地でもあり、春には巨大なひな壇を組む「鴻巣びっくりひな祭り」で多くの人が訪れます。こうのとり伝説が伝わる、歴史と自然が豊かなまちです。
              </p>
              <p>
                花農家をはじめ、市内には続き間や床の間を備えた広い和室を持つ農家住宅・旧家が多く残ります。鴻巣 畳の張替えでは、お客様を迎える客間・座敷の格式に合わせ、上質な国産い草表や縁の柄までご相談いただけます。ひな飾りや年中行事の前に和室を整えたい、というご依頼も多く承っています。
              </p>
              <p>
                一方、鴻巣駅・北鴻巣駅はJR高崎線で大宮・都心方面へ通じる利便性から、駅周辺には戸建てや集合住宅が増えています。田園地帯の農家住宅から新しい住宅地まで、幅広い暮らしの和室に対応してきました。
              </p>
              <p>
                荒川や田んぼに近い低地では、地面からの湿気で畳の裏面が傷みやすい傾向があります。調湿性のある和紙表や耐水性の高い樹脂表、防湿シートの併用など、土地の特性に合わせたご提案を心がけています。
              </p>
            </div>
          </div>

          {/* 鴻巣市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              鴻巣市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "客間・座敷の格式ある表替え", desc: "ひな飾りやお客様を迎える和室を、上質な国産い草表で格調高く。" },
                { title: "花農家・旧家の続き間", desc: "広い座敷・続き間をまとめて表替え・新調。枚数が多くても対応。" },
                { title: "田園地帯の湿気対策", desc: "荒川・田んぼ沿いの湿気に配慮した防湿・素材のご提案。" },
                { title: "駅周辺の戸建て・マンション", desc: "鴻巣駅・北鴻巣駅周辺の住宅の和室の畳張替え。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 鴻巣市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              鴻巣市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "行事前の客間の表替え", desc: "ひな祭りや来客の前に、客間・座敷を新しいい草表できれいに。" },
                { title: "広間・続き間の畳工事", desc: "花農家・旧家の座敷や大広間を一度に表替え・新調。" },
                { title: "湿気対策の畳新調", desc: "低地・川沿いの住宅向けに、防湿・耐水素材での新調をご提案。" },
                { title: "予算に合わせた素材の使い分け", desc: "客間は上質な国産表、日常の部屋は手頃な素材と、メリハリのある提案。" },
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
              鴻巣市内の施工費用目安
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "傷みが少ない畳向け" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "客間向け国産上質表あり" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせしにくい" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "座敷の襖にも対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "枚数まとめ対応可能" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。枚数が多い場合は事前に数量をお知らせください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "農家住宅・戸建ての客間・和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後・原状回復の畳工事" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "施設・福利厚生の和室対応" },
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
              鴻巣市の方向けよくある質問（Q&A）
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
              { label: "埼玉の畳工事", href: "/area/saitama/tatami" },
              { label: "畳購入ガイド", href: "/area/saitama/guide-tatami-buying" },
              { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner" },
              { label: "桶川市", href: "/area/saitama/okegawa" },
              { label: "北本市", href: "/area/saitama/kitamoto" },
              { label: "行田市", href: "/area/saitama/gyoda" },
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
        title="鴻巣市の畳工事はお気軽にご相談ください"
        subtitle="花のまち・鴻巣の花農家の座敷から駅前の戸建てまで、鴻巣市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
