import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "蓮田市の畳張替え・表替え・新調｜田園地帯の戸建て対応｜日本畳パートナーズ",
  description:
    "蓮田市全域で畳張替え・表替え・新調に対応。蓮田駅周辺の住宅地から黒浜・元荒川沿いの農家住宅まで、戸建て・和室の畳工事を承ります。現地確認・見積もり無料。",
  path: "/area/saitama/hasuda",
});

const { pref, city } = getCity("saitama", "hasuda") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "蓮田市内のどのエリアまで対応していますか？",
    a: "蓮田市全域に対応しています。蓮田駅周辺の住宅地、黒浜・閏戸・貝塚・根金・馬込など、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "蓮田は農家住宅が多いですが、広い和室でも対応できますか？",
    a: "はい。蓮田市は田園地帯が広がり、続き間や8畳を超える広い和室、床の間付きの座敷を備えた農家住宅が多く見られます。広間や大広間の畳工事にも慣れていますので、枚数が多くてもご相談ください。",
    category: "general" as const,
  },
  {
    q: "田んぼや畑に囲まれた住宅ですが、湿気で畳が傷みやすいです。",
    a: "元荒川や黒浜沼に近い低地・水田地帯では、地面からの湿気で畳の裏面にカビが出やすい傾向があります。防湿シートの併用や、和紙・樹脂といった調湿・耐水性の高い素材への切り替えもご提案できます。",
    category: "material" as const,
  },
  {
    q: "蓮田駅前のマンションやアパートでも施工してもらえますか？",
    a: "はい。蓮田駅はJR宇都宮線で大宮・都内への通勤に便利なため、駅周辺には集合住宅も増えています。マンション和室・賃貸アパートの表替えや原状回復にも対応しています。",
    category: "general" as const,
  },
  {
    q: "古い実家の畳をまとめて新しくしたいのですが。",
    a: "はい。長年使われた農家住宅・実家の畳は、まとめて表替えや新調をご依頼いただくケースが多くあります。傷み具合を現地で確認し、裏返し・表替え・新調のうち最適な方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "梨畑や農作業の合間に来てもらうことはできますか？",
    a: "はい。蓮田は梨や野菜の栽培も盛んな地域です。農作業やご家庭のご都合に合わせ、日程を調整して伺いますので、ご希望の時間帯をお知らせください。",
    category: "general" as const,
  },
  {
    q: "蓮田市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。枚数が多い場合はまとめてのご相談を承ります。",
    category: "price" as const,
  },
  {
    q: "床の間や畳寄せなど、伝統的な和室の造りにも対応できますか？",
    a: "はい。床の間・床框・畳寄せを備えた本格的な和室にも対応しています。縁の柄や畳表のグレードも、お部屋の格式に合わせてお選びいただけます。",
    category: "general" as const,
  },
  {
    q: "ペットを飼っているのですが、傷みにくい畳はありますか？",
    a: "樹脂畳・和紙畳は表面が丈夫で、ペットの爪や汚れに強い素材です。庭のある戸建てで室内犬・猫を飼われるご家庭からのご依頼が増えています。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、内容や枚数に応じて事前にお見積もりをお出しします。",
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
    { "@type": "ListItem", position: 4, name: "蓮田市", item: `${SITE_URL}/area/saitama/hasuda` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/hasuda#webpage`,
  name: "蓮田市の畳張替え・表替え・新調",
  description: "蓮田市全域で畳張替え・表替え・新調に対応。蓮田駅周辺の住宅地から黒浜・元荒川沿いの農家住宅まで、戸建て・和室の畳工事を承ります。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/hasuda`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/hasuda`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県蓮田市全域対応の畳張替え・表替え・新調専門業者。田園地帯の戸建て・農家住宅・和室の畳工事に対応。",
  areaServed: { "@type": "City", name: "蓮田市" },
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

export default function HasudaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "蓮田市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Hasuda City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            蓮田市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県中東部の田園地帯・蓮田市。黒浜沼や元荒川に抱かれた田畑と住宅地が広がるエリアで、蓮田 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            蓮田駅周辺のベッドタウンの住宅から、続き間・床の間を備えた農家住宅まで、和室の畳工事に幅広く対応しています。
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

          {/* 蓮田市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蓮田市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                蓮田市は埼玉県の中東部に位置し、黒浜沼や元荒川の水辺と、一面に広がる田んぼ・畑に囲まれた田園のまちです。JR宇都宮線の蓮田駅を中心に、大宮や都内へ通勤するファミリー層のベッドタウンとして発展してきました。
              </p>
              <p>
                一方で、市内には昔ながらの農家住宅も数多く残っています。続き間の座敷や床の間を備えた広い和室、8畳・10畳を超える大広間など、伝統的な畳の空間が今も日常的に使われているのが蓮田らしさです。蓮田 畳の張替えでは、こうした広間の枚数の多い施工にも慣れています。
              </p>
              <p>
                黒浜沼周辺や元荒川沿いの低地・水田地帯では、地面からの湿気が畳に伝わりやすく、裏面のカビや畳床の傷みが起こりやすい傾向があります。防湿シートの併用や、調湿性のある和紙表・耐水性の高い樹脂表への切り替えなど、土地の特性に合わせたご提案を心がけています。
              </p>
              <p>
                梨や野菜の栽培が盛んな地域でもあり、農作業やご家庭のご都合に合わせて日程を柔軟に調整いたします。実家の畳をまとめて新しくしたい、といったご相談も歓迎いたします。
              </p>
            </div>
          </div>

          {/* 蓮田市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蓮田市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "農家住宅の続き間・座敷", desc: "8畳・10畳の広間や続き間、床の間付き和室の表替え・新調に対応。" },
                { title: "駅前のベッドタウン住宅", desc: "蓮田駅周辺の戸建て・マンション和室の畳工事。" },
                { title: "水田地帯の湿気対策", desc: "元荒川・黒浜沼沿いの湿気に配慮した防湿・素材のご提案。" },
                { title: "実家・空き家のまとめ替え", desc: "長年使った畳を一度に表替え・新調。枚数が多くても対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 蓮田市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              蓮田市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "広間・続き間の表替え", desc: "農家住宅の座敷・大広間の畳を一度に表替え。縁や畳表のグレードも選択可能。" },
                { title: "湿気対策の畳新調", desc: "水田・川沿いの住宅向けに、防湿シート併用や耐水素材での新調をご提案。" },
                { title: "戸建て和室の畳張替え", desc: "蓮田駅周辺のベッドタウン住宅の和室を、い草・和紙・樹脂で張替え。" },
                { title: "床の間・伝統和室の畳工事", desc: "床框・畳寄せのある本格和室に対応。お部屋の格式に合わせた仕上げ。" },
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
              蓮田市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "広間・続き間もまとめて対応" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "湿気の多い立地向け" },
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
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "戸建て・農家住宅の和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "駅前アパートの退去後・原状回復" },
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
              蓮田市の方向けよくある質問（Q&A）
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
              { label: "白岡市", href: "/area/saitama/shiraoka" },
              { label: "上尾市", href: "/area/saitama/ageo" },
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
        title="蓮田市の畳工事はお気軽にご相談ください"
        subtitle="田園地帯の農家住宅から駅前の戸建て・アパートまで、蓮田市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
