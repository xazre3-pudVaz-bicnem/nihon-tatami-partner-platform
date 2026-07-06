import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "行田市の畳張替え・表替え・新調｜足袋と忍城の城下町対応｜日本畳パートナーズ",
  description:
    "行田市全域で畳張替え・表替え・新調に対応。足袋蔵の町並み・忍城下の古い戸建てや蔵造り、古代蓮の里周辺の農村住宅まで、行田の和室の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/gyoda",
});

const { pref, city } = getCity("saitama", "gyoda") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "行田市内のどのエリアまで対応していますか？",
    a: "行田市全域に対応しています。行田駅・東行田駅周辺の市街地、忍城周辺、佐間・持田・埼玉（さきたま）・須加など、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "足袋蔵や蔵造りの古い建物でも施工できますか？",
    a: "はい。行田は足袋のまちとして栄え、足袋蔵をはじめとする蔵造りや歴史ある町家が残っています。柱や敷居の歪みが出ている古い建物でも、畳の寸法を一枚ずつ採寸して合わせ込みますのでご安心ください。",
    category: "general" as const,
  },
  {
    q: "忍城下の古い日本家屋で、畳がかなり傷んでいます。",
    a: "はい。城下町の古い日本家屋は、畳床まで傷んでいることも少なくありません。裏返し・表替えで済むか、畳床から新調した方がよいかを現地で見極めてご提案します。",
    category: "general" as const,
  },
  {
    q: "古代蓮の里や田んぼアート周辺の農村住宅も対応地域ですか？",
    a: "はい。古代蓮の里や田んぼアートで知られる埼玉（さきたま）地区周辺の農村住宅も対応エリアです。続き間・床の間を備えた広い和室の畳工事にも慣れています。",
    category: "general" as const,
  },
  {
    q: "行田は「陸王」の舞台になった歴史あるまちですが、伝統的な和室の格式に合う畳にできますか？",
    a: "はい。行田は小説やドラマ「陸王」の舞台としても知られる、ものづくりと伝統のまちです。上質な国産い草表や、床の間に映える縁の柄まで、お部屋の格式に合わせてお選びいただけます。",
    category: "material" as const,
  },
  {
    q: "冬の底冷えが厳しいのですが、暖かく感じる畳はありますか？",
    a: "行田を含む埼玉北部は冬の冷え込みが厳しい地域です。畳は断熱性が高く足元が暖かく感じられます。畳床の下に断熱材を入れる新調や、厚みのある畳床のご提案も可能です。",
    category: "general" as const,
  },
  {
    q: "行田市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建物で採寸調整が必要な場合も、事前に無料見積もりでご確認いただけます。",
    category: "price" as const,
  },
  {
    q: "寸法が合わない変形した和室でも対応できますか？",
    a: "はい。古い城下町の家屋には、間取りや柱の位置で畳が変形寸法になっている部屋が多くあります。一枚ずつ採寸して製作しますので、変形した和室でもきれいに納まります。",
    category: "general" as const,
  },
  {
    q: "空き家になった実家の畳をまとめて新しくしたいのですが。",
    a: "はい。行田市内でも、相続した古い実家や空き家の畳をまとめて表替え・新調するご相談が増えています。枚数が多くても対応しますので、まずは現地でご相談ください。",
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
    { "@type": "ListItem", position: 4, name: "行田市", item: `${SITE_URL}/area/saitama/gyoda` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/gyoda#webpage`,
  name: "行田市の畳張替え・表替え・新調",
  description: "行田市全域で畳張替え・表替え・新調に対応。足袋蔵の町並み・忍城下の古い戸建てや蔵造り、古代蓮の里周辺の農村住宅まで、行田の和室の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/gyoda`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/gyoda`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県行田市全域対応の畳張替え・表替え・新調専門業者。足袋蔵の町並み・忍城下の古い日本家屋・農村住宅の和室工事に対応。",
  areaServed: { "@type": "City", name: "行田市" },
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

export default function GyodaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "行田市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Gyoda City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            行田市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県北部・行田市。足袋蔵の町並みと忍城（おしじょう）の城下町、古代蓮の里が息づく歴史のまちで、行田 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            蔵造りや古い日本家屋、変形寸法の和室から、農村部の続き間まで、一枚ずつ採寸して丁寧に仕上げます。
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

          {/* 行田市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              行田市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                行田市は埼玉県の北部に位置し、かつて全国有数の生産量を誇った足袋のまちとして知られています。市街地には今も足袋蔵の町並みが残り、小説・ドラマ「陸王」の舞台にもなりました。忍城（おしじょう）の城下町でもあり、歴史と伝統が色濃く息づくまちです。
              </p>
              <p>
                こうした背景から、行田には蔵造りや古い日本家屋が数多く残っています。長い年月のあいだに柱や敷居に歪みが生じ、畳が変形寸法になっている家も珍しくありません。行田 畳の張替えでは、一枚ずつ丁寧に採寸して製作し、古い和室でもきれいに納まるよう仕上げています。
              </p>
              <p>
                古代蓮の里や世界最大級とされる田んぼアートで知られる埼玉（さきたま）地区の周辺には、続き間や床の間を備えた広い農村住宅が広がります。座敷や大広間の枚数の多い表替え・新調にも対応しています。
              </p>
              <p>
                行田を含む埼玉北部は冬の底冷えが厳しい地域ですが、畳は断熱性が高く、足元の冷えをやわらげてくれます。畳床の下に断熱材を入れる新調のご提案も可能です。相続した実家や空き家の畳をまとめて新しくしたい、といったご相談も歓迎いたします。
              </p>
            </div>
          </div>

          {/* 行田市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              行田市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "蔵造り・足袋蔵の畳工事", desc: "歴史ある蔵造りや町家の和室を、一枚ずつ採寸して丁寧に施工。" },
                { title: "忍城下の古い日本家屋", desc: "畳床の傷みまで見極め、表替えか新調かを的確にご提案。" },
                { title: "変形寸法の和室", desc: "柱や敷居の歪みで変形した和室も、採寸製作できれいに納める。" },
                { title: "農村住宅の続き間", desc: "さきたま地区周辺の座敷・大広間の表替え・新調に対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 行田市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              行田市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "古い日本家屋の畳新調", desc: "畳床まで傷んだ城下町の和室を、床から新調して蘇らせる。" },
                { title: "格式ある座敷の表替え", desc: "上質な国産い草表と縁の柄で、床の間のある座敷を格調高く仕上げ。" },
                { title: "変形和室の採寸製作", desc: "変形寸法の和室に合わせ、一枚ずつ製作してすき間なく施工。" },
                { title: "実家・空き家のまとめ替え", desc: "相続した家の畳を一度に表替え・新調。枚数が多くても対応。" },
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
              行田市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "座敷にも映える国産表あり" },
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
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "古い日本家屋・農村住宅の和室の畳・襖・障子" },
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
              行田市の方向けよくある質問（Q&A）
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
              { label: "熊谷市", href: "/area/saitama/kumagaya" },
              { label: "鴻巣市", href: "/area/saitama/konosu" },
              { label: "さいたま市", href: "/area/saitama/saitama-city" },
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
        title="行田市の畳工事はお気軽にご相談ください"
        subtitle="足袋と忍城の城下町・行田の蔵造りや古い日本家屋から農村住宅まで、行田市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
