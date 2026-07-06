import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "桶川市の畳張替え・表替え・新調｜中山道 桶川宿の町並み対応｜日本畳パートナーズ",
  description:
    "桶川市全域で畳張替え・表替え・新調に対応。中山道の宿場町・桶川宿の街道沿いの町家や紅花ゆかりの旧家、桶川駅周辺の戸建て和室まで、桶川の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/okegawa",
});

const { pref, city } = getCity("saitama", "okegawa") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "桶川市内のどのエリアまで対応していますか？",
    a: "桶川市全域に対応しています。桶川駅周辺の市街地、中山道沿いの旧宿場、加納・川田谷など、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "中山道沿いの古い町家や商家でも施工できますか？",
    a: "はい。桶川は中山道の宿場町「桶川宿」として栄え、街道沿いには古い町家や商家が残っています。柱や敷居に歪みのある古い建物でも、一枚ずつ採寸して畳を製作し、きれいに納めます。",
    category: "general" as const,
  },
  {
    q: "紅花で栄えた旧家の座敷を格式ある雰囲気に整えたいのですが。",
    a: "はい。桶川は江戸期に「桶川臙脂（べにばな）」の集散地として栄えた歴史があり、格式ある旧家の座敷も少なくありません。上質な国産い草表や、床の間に映える縁の柄で、伝統的な雰囲気に合わせて仕上げます。",
    category: "material" as const,
  },
  {
    q: "桶川駅周辺の戸建てやマンションでも対応してもらえますか？",
    a: "はい。桶川駅はJR高崎線で大宮・都心方面へ通勤に便利なため、駅周辺には戸建てや集合住宅が広がっています。マンション和室・戸建ての畳張替えにも対応しています。",
    category: "general" as const,
  },
  {
    q: "古い町家は畳が変形寸法になっていますが、対応できますか？",
    a: "はい。街道沿いの古い町家は間口が細長く、畳が変形寸法になっている部屋が多くあります。一枚ずつ採寸して製作しますので、変形した和室でもすき間なくきれいに仕上がります。",
    category: "general" as const,
  },
  {
    q: "桶川市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建物で採寸調整が必要な場合も、無料見積もりで事前にご確認いただけます。",
    category: "price" as const,
  },
  {
    q: "客間だけ上質な畳にして、他は普及品にできますか？",
    a: "はい。お客様を迎える客間・座敷は上質な国産い草表、日常使いの部屋は手頃な素材、といった使い分けが可能です。ご予算に合わせてご提案します。",
    category: "price" as const,
  },
  {
    q: "冬の冷え込みが気になります。畳で暖かくなりますか？",
    a: "桶川を含む埼玉中央部は冬の朝晩の冷え込みがあります。畳は断熱性が高く、フローリングより足元が暖かく感じられます。厚みのある畳床への新調もご相談いただけます。",
    category: "general" as const,
  },
  {
    q: "空き家になった実家の畳をまとめて新しくしたいのですが。",
    a: "はい。桶川市内でも、相続した古い町家や実家の畳をまとめて表替え・新調するご相談が増えています。枚数が多くても対応しますので、まずは現地でご相談ください。",
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
    { "@type": "ListItem", position: 4, name: "桶川市", item: `${SITE_URL}/area/saitama/okegawa` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/okegawa#webpage`,
  name: "桶川市の畳張替え・表替え・新調",
  description: "桶川市全域で畳張替え・表替え・新調に対応。中山道の宿場町・桶川宿の街道沿いの町家や紅花ゆかりの旧家、桶川駅周辺の戸建て和室まで、桶川の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/okegawa`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/okegawa`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県桶川市全域対応の畳張替え・表替え・新調専門業者。中山道 桶川宿の町家・紅花ゆかりの旧家・駅周辺の戸建ての和室工事に対応。",
  areaServed: { "@type": "City", name: "桶川市" },
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

export default function OkegawaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "桶川市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Okegawa City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            桶川市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県中央部・桶川市。中山道の宿場町「桶川宿」として栄え、紅花の集散地でもあった歴史のまちで、桶川 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            街道沿いの古い町家や紅花ゆかりの旧家から、桶川駅周辺の戸建て・マンション和室まで、幅広い畳工事に対応しています。
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

          {/* 桶川市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              桶川市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                桶川市は埼玉県のほぼ中央に位置し、江戸時代には中山道の宿場町「桶川宿」として栄えました。街道沿いには今も古い町家や商家の面影が残り、宿場としての歴史を伝えています。また、桶川は「桶川臙脂（べにばな）」と呼ばれた紅花の集散地としても知られ、紅花で財をなした旧家も少なくありません。
              </p>
              <p>
                こうした街道沿いの古い町家は、間口が細長く、柱や敷居の歪みで畳が変形寸法になっている部屋が多くあります。桶川 畳の張替えでは、一枚ずつ丁寧に採寸して畳を製作し、変形した和室でもすき間なくきれいに納まるよう仕上げています。
              </p>
              <p>
                格式ある旧家の座敷では、上質な国産い草表や床の間に映える縁の柄をお選びいただけます。客間は上質な素材、日常使いの部屋は手頃な素材、といった予算に合わせた使い分けもご提案できます。
              </p>
              <p>
                一方、桶川駅はJR高崎線で大宮・都心方面へ通勤に便利なため、駅周辺には戸建てや集合住宅が広がっています。歴史ある町家から新しい住宅地まで、桶川のさまざまな暮らしの和室に対応してきました。相続した実家や空き家の畳のまとめ替えもお任せください。
              </p>
            </div>
          </div>

          {/* 桶川市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              桶川市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "中山道沿いの町家・商家", desc: "宿場の面影を残す町家の和室を、一枚ずつ採寸して丁寧に施工。" },
                { title: "紅花ゆかりの旧家の座敷", desc: "格式ある座敷・床の間を、上質な国産い草表で格調高く。" },
                { title: "変形寸法の和室", desc: "細長い町家の変形した和室も、採寸製作できれいに納める。" },
                { title: "駅周辺の戸建て・マンション", desc: "桶川駅周辺の住宅の和室の畳張替え・原状回復。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 桶川市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              桶川市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "格式ある座敷の表替え", desc: "旧家の客間・座敷を、上質な国産い草表と縁の柄で格調高く仕上げ。" },
                { title: "変形和室の採寸製作", desc: "細長い町家の変形寸法に合わせ、一枚ずつ製作してすき間なく施工。" },
                { title: "古い町家の畳新調", desc: "畳床まで傷んだ古い町家の和室を、床から新調して蘇らせる。" },
                { title: "戸建て和室の畳張替え", desc: "桶川駅周辺の住宅の和室を、い草・和紙・樹脂で一新。" },
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
              桶川市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "座敷向け国産上質表あり" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせしにくい" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "畳床から新調・変形寸法別途" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。変形寸法・特殊な採寸が必要な場合は事前にご相談ください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "町家・旧家・戸建ての客間・和室の畳・襖・障子" },
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
              桶川市の方向けよくある質問（Q&A）
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
              { label: "北本市", href: "/area/saitama/kitamoto" },
              { label: "上尾市", href: "/area/saitama/ageo" },
              { label: "鴻巣市", href: "/area/saitama/konosu" },
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
        title="桶川市の畳工事はお気軽にご相談ください"
        subtitle="中山道 桶川宿の町家や旧家の座敷から駅前の戸建てまで、桶川市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
