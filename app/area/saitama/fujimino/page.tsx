import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "ふじみ野市の畳張替え・表替え・新調｜子育て世代の新興住宅対応｜日本畳パートナーズ",
  description:
    "ふじみ野市全域で畳張替え・表替え・新調に対応。ふじみ野駅・上福岡駅周辺、新河岸川エリアの区画整理された新興住宅地・マンションのファミリー世帯を丁寧に施工。見積もり無料。",
  path: "/area/saitama/fujimino",
});

const { pref, city } = getCity("saitama", "fujimino") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "ふじみ野市内のどのエリアまで対応していますか？",
    a: "ふじみ野市全域に対応しています。ふじみ野駅・上福岡駅周辺の市街地から、区画整理された新興住宅地、新河岸川沿いの地区まで、市内全域からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "新しい戸建てに設けた和室コーナーでも対応してもらえますか？",
    a: "はい。ふじみ野市は区画整理された新しい住宅地が多く、フローリング中心の間取りに和室を一室、あるいは畳コーナーを設けたお住まいが目立ちます。洋室になじむ縁なし畳・カラー畳も含めて対応します。",
    category: "general" as const,
  },
  {
    q: "子どもが小さいので、汚れや傷に強い畳はありますか？",
    a: "はい。ふじみ野市は子育て世代のファミリーが多い地域です。水拭きでき、傷や色あせに強い和紙畳・樹脂畳は、小さなお子さまのいるご家庭に特に人気があります。お気軽にご相談ください。",
    category: "material" as const,
  },
  {
    q: "ふじみ野駅・上福岡駅周辺のマンションでも来てもらえますか？",
    a: "はい。東武東上線のふじみ野駅・上福岡駅周辺の分譲・賃貸マンションに多く伺っています。搬入経路や共用部のルールにも配慮して施工します。",
    category: "general" as const,
  },
  {
    q: "2005年の合併前からある古い住宅でも対応できますか？",
    a: "はい。ふじみ野市は2005年に上福岡市と大井町が合併して誕生したまちで、上福岡エリアなどには昔ながらの和室を備えたお住まいも残っています。広い座敷や続き間の表替え・新調も丁寧に対応します。",
    category: "general" as const,
  },
  {
    q: "新河岸川に近いエリアで湿気が気になります。畳の対策はありますか？",
    a: "新河岸川沿いなど水辺に近い低地は湿度が上がりやすく、畳のカビ・ダニが気になることがあります。防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。",
    category: "material" as const,
  },
  {
    q: "ふじみ野市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。マンション1室分や畳コーナーの少枚数でもお受けしますので、お見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "共働きで日中は留守がちですが、施工をお願いできますか？",
    a: "はい。子育て世代・共働き世帯の多いふじみ野市では、畳をお預かりして工場で仕上げる持ち帰り施工が好評です。お預かりと納品の日時だけ在宅いただければ、在宅の負担を抑えて進められます。",
    category: "general" as const,
  },
  {
    q: "縁なし畳や琉球畳などモダンな畳にもできますか？",
    a: "はい。ふじみ野市の新しい戸建て・マンションでは、縁なしの半畳琉球畳や和紙のカラー畳のご依頼が特に増えています。リビングになじむおしゃれな畳コーナーづくりもお手伝いします。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、法人様・管理会社様は請求書払いにも対応しています。お気軽にお問い合わせください。",
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
    { "@type": "ListItem", position: 4, name: "ふじみ野市", item: `${SITE_URL}/area/saitama/fujimino` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/fujimino#webpage`,
  name: "ふじみ野市の畳張替え・表替え・新調",
  description: "ふじみ野市全域で畳張替え・表替え・新調に対応。区画整理された新興住宅地・マンションの子育て世代を丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/fujimino`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/fujimino`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県ふじみ野市全域対応の畳張替え・表替え・新調・襖・障子の専門業者。新興住宅地・マンションの子育て世代の施工実績豊富。",
  areaServed: { "@type": "City", name: "ふじみ野市" },
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

export default function FujiminoPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "ふじみ野市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Fujimino City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            ふじみ野市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            区画整理された新しい住宅地が広がる埼玉県南西部の新興住宅都市・ふじみ野市。子育て世代が多く暮らすまちで、ふじみ野市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            ふじみ野駅・上福岡駅周辺の戸建て・マンションから、和室コーナーのある新しいお住まいまで、暮らしに合わせて丁寧に対応します。
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

          {/* ふじみ野市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              ふじみ野市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                ふじみ野市は埼玉県の南西部に位置し、2005年に上福岡市と大井町が合併して誕生した新しいまちです。東武東上線のふじみ野駅・上福岡駅を中心に、区画整理された新興住宅地と分譲マンションが広がり、都心への通勤の便のよさから子育て世代のファミリー層が多く暮らしています。新河岸川が市内を流れ、水と緑に恵まれた住環境も魅力です。
              </p>
              <p>
                住まいの中心は、比較的新しい戸建てとマンションです。フローリングを基調とした間取りに、和室を一室、あるいはリビングの一角に畳コーナーを設けたお住まいが目立ちます。こうしたご家庭からは、洋室になじむ縁なしの琉球畳や、色あせしにくくお手入れが簡単な和紙畳・樹脂畳のご要望を数多くいただきます。小さなお子さまのいるご家庭では、水拭きでき傷に強い素材が特に喜ばれています。
              </p>
              <p>
                一方、合併前からの上福岡エリアなどには、昔ながらの和室を備えたお住まいも残っています。広い座敷や続き間の表替え・新調にも丁寧に対応し、住まいの世代を問わず幅広くお手伝いしています。新河岸川沿いなど水辺に近い低地では湿度が上がりやすいため、防カビ・防湿性に優れた素材のご提案も行っています。
              </p>
              <p>
                共働き世帯の多いふじみ野市では、畳をお預かりして工場で仕上げる持ち帰り施工が好評です。ふじみ野市 畳のことなら、新居の畳コーナーから古い座敷の張替えまで、写真付きの丁寧なご説明とともに承ります。
              </p>
            </div>
          </div>

          {/* ふじみ野市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              ふじみ野市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "新居の和室・畳コーナー", desc: "区画整理地の新しい戸建て・マンションの畳コーナーに対応。" },
                { title: "子育て世代向けの素材提案", desc: "水拭きでき傷に強い和紙畳・樹脂畳をファミリー世帯に提案。" },
                { title: "縁なし畳・琉球畳の施工", desc: "リビングになじむモダンな半畳畳のご依頼が増加中。" },
                { title: "上福岡エリアの古い座敷", desc: "合併前からの住まいの広い座敷・続き間の表替え・新調。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ふじみ野市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              ふじみ野市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "縁なし畳・琉球畳の新調", desc: "リビングの一角に、洋室になじむおしゃれな畳コーナーをつくります。" },
                { title: "和紙畳・樹脂畳への変更", desc: "子育て世代に人気。水拭きでき、傷・色あせに強い素材へ張替え。" },
                { title: "マンション和室の表替え", desc: "分譲・賃貸マンションの和室を、香りのよいい草表で一新。" },
                { title: "座敷・襖・障子の張替え", desc: "上福岡エリアの古い座敷の畳・襖・障子をまとめて対応。" },
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
              ふじみ野市内の施工費用目安
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "い草表の傷みが軽い場合に" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "和室の定番" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "子育て世代に人気" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "水拭き・高耐久" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "縁なし琉球畳も対応" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "和室の襖に" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。縁なし畳・カラー畳は素材により価格が異なります。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "新居の和室・畳コーナーの畳・襖・障子" },
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
              ふじみ野市の方向けよくある質問（Q&A）
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
              { label: "富士見市", href: "/area/saitama/fujimi" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "入間市", href: "/area/saitama/iruma" },
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
        title="ふじみ野市の畳工事はお気軽にご相談ください"
        subtitle="新居の畳コーナーから古い座敷の張替えまで。縁なし畳・和紙畳・樹脂畳のご相談も歓迎いたします。"
      />
    </>
  );
}
