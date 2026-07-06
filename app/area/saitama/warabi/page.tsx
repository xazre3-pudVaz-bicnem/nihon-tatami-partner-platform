import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "蕨市の畳張替え・表替え・新調｜高密度住宅地対応｜日本畳パートナーズ",
  description:
    "面積日本一小さい市・蕨市全域で畳張替え・表替え・新調に対応。蕨駅周辺の密集した戸建て・アパート・マンション、狭小地の住宅も丁寧に施工。原状回復も対応。見積もり無料。",
  path: "/area/saitama/warabi",
});

const { pref, city } = getCity("saitama", "warabi") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "蕨市内のどのエリアまで対応していますか？",
    a: "蕨市全域に対応しています。蕨市は面積が日本一小さい市で市内はコンパクトにまとまっており、蕨駅周辺から市内全域まで、どの地区からのご依頼にもお伺いしています。",
    category: "general" as const,
  },
  {
    q: "接道が狭く、車が入りにくい住宅でも施工できますか？",
    a: "はい。蕨市は接道の狭い密集住宅地が多い地域です。畳をお預かりして工場で仕上げる持ち帰り施工なら、大きな車を横付けできない路地の奥のお宅でも問題なく対応できます。",
    category: "general" as const,
  },
  {
    q: "狭小地の戸建てで階段が急ですが、畳の搬出入は大丈夫ですか？",
    a: "はい。蕨市には狭小地に建つ3階建てなどの戸建ても多く、急な階段や狭い間口にも慣れています。畳一枚ずつ丁寧に搬出入し、建具や壁を傷めないよう養生して作業します。",
    category: "general" as const,
  },
  {
    q: "蕨駅周辺のアパート・マンションの原状回復に対応していますか？",
    a: "はい。蕨市は人口密度が非常に高く、蕨駅周辺にアパート・マンションが密集しています。退去後の畳・襖・障子をまとめて対応し、次の入居に向けてすっきり仕上げます。オーナー様・管理会社様のご依頼も歓迎です。",
    category: "general" as const,
  },
  {
    q: "高密度な住宅地で換気がしにくく、畳の湿気が心配です。対策はありますか？",
    a: "はい。建物が密集し換気がしにくい住宅では、畳のカビ・ダニが発生しやすい傾向があります。防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。狭小住宅の和室にもおすすめです。",
    category: "material" as const,
  },
  {
    q: "コンパクトな和室でも表替えをお願いできますか？",
    a: "はい。蕨市の住宅は限られた敷地を生かしたコンパクトな間取りが多く、4畳半や6畳の和室のご依頼も数多くいただきます。少枚数でも一枚から丁寧に対応いたします。",
    category: "general" as const,
  },
  {
    q: "蕨市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。少枚数のコンパクトな和室でもお受けしますので、お見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "駐車スペースがない家ですが、来てもらえますか？",
    a: "はい。蕨市は狭小地・接道の狭い住宅が多く、駐車スペースのないお宅も少なくありません。近隣の状況に合わせて搬出入の段取りを工夫しますので、駐車場がなくてもご安心ください。",
    category: "general" as const,
  },
  {
    q: "ペットのいる部屋でも安心して使える畳はありますか？",
    a: "はい。密集した住宅地の蕨市でも、ペットと暮らすご家庭が増えています。傷や汚れ、においに強い樹脂畳・和紙畳への張替えのご相談も承っています。原状回復時の入れ替えにもおすすめです。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、賃貸オーナー様・管理会社様は請求書払いにも対応しています。お気軽にお問い合わせください。",
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
    { "@type": "ListItem", position: 4, name: "蕨市", item: `${SITE_URL}/area/saitama/warabi` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/warabi#webpage`,
  name: "蕨市の畳張替え・表替え・新調",
  description: "蕨市全域で畳張替え・表替え・新調に対応。面積日本一小さい市の高密度住宅地・狭小地の戸建て・アパート・マンションを丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/warabi`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/warabi`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県蕨市全域対応の畳張替え・表替え・新調・原状回復の専門業者。高密度住宅地・狭小地の戸建て・アパート・マンション実績豊富。",
  areaServed: { "@type": "City", name: "蕨市" },
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

export default function WarabiPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "蕨市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Warabi City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            蕨市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            面積が日本一小さい市として知られる埼玉県南部の蕨市。コンパクトな市街地に住宅が密集するまちで、蕨市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            蕨駅周辺の戸建て・アパート・マンションから、接道の狭い狭小地の住宅まで、持ち帰り施工を活かして丁寧に対応します。
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

          {/* 蕨市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蕨市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                蕨市は埼玉県の南部に位置し、面積が日本一小さい市として知られています。JR京浜東北線の蕨駅を中心に、限られた市域にコンパクトな市街地が形成され、人口密度は全国でも屈指の高さです。成人式発祥の地としても知られ、歴史と生活感の調和した親しみやすいまちなみが特徴です。
              </p>
              <p>
                住まいの特徴は、戸建て・アパート・マンションが高い密度で密集していることです。特に、限られた敷地を生かした狭小地の3階建て住宅や、接道の狭い路地の奥に建つお宅が多く見られます。こうした立地では大きな車を横付けできないこともありますが、日本畳パートナーズでは畳をお預かりして工場で仕上げる持ち帰り施工を基本としているため、駐車スペースのないお宅や路地の奥の住宅でも問題なく対応できます。
              </p>
              <p>
                建物が密集し換気がしにくい高密度住宅地では、畳のカビ・ダニが発生しやすい傾向があります。日本畳パートナーズでは、伝統的ない草表に加え、防カビ・防湿性に優れた和紙畳・樹脂畳をご用意し、住まいの環境に合わせてご提案しています。4畳半や6畳のコンパクトな和室でも、一枚から丁寧に対応いたします。
              </p>
              <p>
                また、蕨駅周辺のアパート・マンションでは、退去後の原状回復工事のご依頼も数多くいただいています。蕨市 畳のことなら、狭小地の戸建てから賃貸物件の原状回復まで、地域の住宅事情を熟知したうえで幅広く承ります。建具や壁を傷めないよう養生を徹底し、丁寧な作業を心がけています。
              </p>
            </div>
          </div>

          {/* 蕨市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蕨市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "狭小地・3階建ての戸建て", desc: "急な階段・狭い間口にも慣れた職人が一枚ずつ丁寧に搬出入。" },
                { title: "接道の狭い路地の住宅", desc: "持ち帰り施工で、車を横付けできないお宅にも問題なく対応。" },
                { title: "アパート・マンションの原状回復", desc: "蕨駅周辺の賃貸物件の退去後、畳・襖・障子を一括対応。" },
                { title: "換気しにくい住宅の素材変更", desc: "高密度住宅地に防カビ・防湿の和紙畳・樹脂畳を提案。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 蕨市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蕨市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "コンパクトな和室の表替え", desc: "4畳半・6畳の和室を、香りのよいい草表で気持ちよく一新します。" },
                { title: "賃貸物件の原状回復工事", desc: "退去後の畳・襖・障子をまとめて対応。次の募集にすっきり間に合わせます。" },
                { title: "狭小住宅の畳の新調", desc: "傷んだ畳床から交換。狭い間口でも一枚ずつ丁寧に搬出入します。" },
                { title: "ペット対応畳への変更", desc: "傷・汚れ・においに強い樹脂畳・和紙畳へのグレードアップ。" },
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
              蕨市内の施工費用目安
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "一枚から対応可能" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "コンパクト和室の定番" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "防カビ・色あせに強い" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "換気しにくい部屋に" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "原状回復用量産品対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "一括対応可能" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。少枚数のコンパクトな和室でもお受けします。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "狭小地の戸建て和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "社宅・福利厚生施設対応" },
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
              蕨市の方向けよくある質問（Q&A）
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
              { label: "戸田市", href: "/area/saitama/toda" },
              { label: "川口市", href: "/area/saitama/kawaguchi" },
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
        title="蕨市の畳工事はお気軽にご相談ください"
        subtitle="狭小地の戸建てから蕨駅周辺の賃貸物件の原状回復まで。表替え・新調・襖・障子のご相談を承ります。"
      />
    </>
  );
}
