import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "久喜市の畳張替え・表替え・新調｜提灯祭りと鷲宮神社のまち対応｜日本畳パートナーズ",
  description:
    "久喜市全域で畳張替え・表替え・新調に対応。久喜駅周辺の住宅地から、菖蒲・栗橋・鷲宮地区の戸建て・アパート、田園の和室まで、久喜の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/kuki",
});

const { pref, city } = getCity("saitama", "kuki") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "久喜市内のどのエリアまで対応していますか？",
    a: "久喜市全域に対応しています。久喜駅周辺の市街地に加え、2010年に合併した菖蒲・栗橋・鷲宮の各地区まで、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "久喜は4つの市町が合併したまちですが、旧町域も対応地域ですか？",
    a: "はい。久喜市は2010年に旧久喜市・菖蒲町・栗橋町・鷲宮町が合併して誕生しました。旧町域を含む久喜全域を対応エリアとしていますので、どの地区でもお気軽にご相談ください。",
    category: "general" as const,
  },
  {
    q: "久喜提灯祭りに合わせて客間をきれいにしたいのですが。",
    a: "はい。久喜提灯祭り「天王様」は久喜を代表する夏の行事です。お盆やお祭りでお客様を迎える前に、客間・座敷の畳を新しいい草表で表替えするご依頼も多く承っています。ご希望の時期に合わせて日程を調整します。",
    category: "general" as const,
  },
  {
    q: "鷲宮神社の近くの古い家ですが、和室を整えたいです。",
    a: "はい。鷲宮神社は関東最古級ともいわれる由緒ある神社で、周辺には歴史ある日本家屋も残ります。床の間や続き間を備えた和室の表替え・新調にも対応しています。",
    category: "general" as const,
  },
  {
    q: "郊外の戸建てやアパートが多いですが、賃貸物件も対応できますか？",
    a: "はい。久喜は田園と住宅地が広がり、郊外型の戸建てやアパートが多い地域です。賃貸オーナー様・管理会社様からの退去後の原状回復・複数物件のご依頼にも対応しています。",
    category: "general" as const,
  },
  {
    q: "久喜市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。枚数や素材によって変わりますので、無料見積もりでご確認ください。",
    category: "price" as const,
  },
  {
    q: "賃貸アパートの畳を安く抑えたいのですが。",
    a: "はい。退去後の原状回復では、コストを抑えた普及品のい草表や、汚れに強く長持ちする和紙・樹脂表など、物件の運用方針に合わせてご提案します。複数物件はまとめてのご相談も承ります。",
    category: "price" as const,
  },
  {
    q: "田園地帯で湿気が気になります。傷みにくい畳はありますか？",
    a: "田んぼや川に近い低地では、地面からの湿気で畳の裏面が傷みやすい傾向があります。調湿性のある和紙表や耐水性の高い樹脂表、防湿シートの併用などをご提案できます。",
    category: "material" as const,
  },
  {
    q: "ペットを飼っているのですが、傷みにくい畳はありますか？",
    a: "樹脂畳・和紙畳は表面が丈夫で、ペットの爪や汚れに強い素材です。庭のある郊外の戸建てで室内犬・猫を飼われるご家庭からのご依頼が増えています。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、法人様・管理会社様は請求書払いにも対応しています。",
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
    { "@type": "ListItem", position: 4, name: "久喜市", item: `${SITE_URL}/area/saitama/kuki` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/kuki#webpage`,
  name: "久喜市の畳張替え・表替え・新調",
  description: "久喜市全域で畳張替え・表替え・新調に対応。久喜駅周辺の住宅地から、菖蒲・栗橋・鷲宮地区の戸建て・アパート、田園の和室まで、久喜の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/kuki`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kuki`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県久喜市全域対応の畳張替え・表替え・新調専門業者。久喜・菖蒲・栗橋・鷲宮地区の戸建て・アパート・田園の和室の畳工事に対応。",
  areaServed: { "@type": "City", name: "久喜市" },
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

export default function KukiPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "久喜市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kuki City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            久喜市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県東部・久喜市。夏の「久喜提灯祭り 天王様」や由緒ある鷲宮神社で知られ、田園と住宅地が広がるまちで、久喜 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            久喜駅周辺の住宅から、菖蒲・栗橋・鷲宮地区の戸建て・アパート、田園の農家住宅まで、幅広い畳工事に対応しています。
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

          {/* 久喜市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              久喜市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                久喜市は埼玉県の東部に位置し、2010年に旧久喜市・菖蒲町・栗橋町・鷲宮町が合併して誕生しました。夏の夜を彩る「久喜提灯祭り 天王様」や、関東最古級ともいわれる鷲宮神社で知られ、田園と住宅地が調和した暮らしやすいまちです。JR宇都宮線・東武伊勢崎線の久喜駅は交通の要衝として発展してきました。
              </p>
              <p>
                久喜 畳の張替えでは、久喜駅周辺の住宅地から、菖蒲・栗橋・鷲宮の各地区に広がる郊外型の戸建てやアパート、田園地帯の農家住宅まで、幅広い暮らしの和室を手がけてきました。合併で広くなった市域のどの地区でも対応いたします。
              </p>
              <p>
                お盆や久喜提灯祭りの前に、お客様を迎える客間・座敷を新しいい草表できれいに整えたい、というご依頼を毎年多く承っています。ご希望の時期に合わせて日程を調整いたします。鷲宮神社周辺など歴史ある日本家屋の床の間・続き間にも対応しています。
              </p>
              <p>
                郊外型の賃貸物件が多い地域でもあり、賃貸オーナー様・管理会社様からの退去後の原状回復・複数物件のご依頼にも対応します。田んぼや川に近い低地では、湿気で畳の裏面が傷みやすいため、調湿・耐水性の高い和紙・樹脂表もご提案できます。
              </p>
            </div>
          </div>

          {/* 久喜市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              久喜市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "行事前の客間の表替え", desc: "久喜提灯祭りやお盆の前に、客間・座敷を新しいい草表できれいに。" },
                { title: "郊外型の戸建て・アパート", desc: "菖蒲・栗橋・鷲宮地区の住宅の畳張替え・原状回復。" },
                { title: "田園地帯の湿気対策", desc: "田んぼ・川沿いの低地の湿気に配慮した防湿・素材のご提案。" },
                { title: "鷲宮周辺の日本家屋", desc: "床の間・続き間を備えた歴史ある和室の畳工事にも対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 久喜市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              久喜市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "客間・座敷の表替え", desc: "お祭りや来客の前に、客間・座敷を新しいい草表できれいに仕上げ。" },
                { title: "賃貸物件の原状回復", desc: "退去後の畳・襖・障子の張替え。複数物件はまとめて対応可能。" },
                { title: "戸建て和室の畳張替え", desc: "郊外の戸建ての和室を、い草・和紙・樹脂で一新。" },
                { title: "ペット対応畳への変更", desc: "樹脂畳・和紙畳へのグレードアップ。郊外の戸建てで人気。" },
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
              久喜市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "客間・賃貸物件に対応" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせしにくい" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久・ペット対応" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "原状回復用量産品対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。複数物件は事前に数量をお知らせください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "郊外の戸建て・日本家屋の和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
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
              久喜市の方向けよくある質問（Q&A）
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
              { label: "蓮田市", href: "/area/saitama/hasuda" },
              { label: "白岡市", href: "/area/saitama/shiraoka" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
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
        title="久喜市の畳工事はお気軽にご相談ください"
        subtitle="提灯祭りと鷲宮神社のまち・久喜の戸建てから賃貸物件まで、久喜市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
