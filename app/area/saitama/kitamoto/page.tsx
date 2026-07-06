import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "北本市の畳張替え・表替え・新調｜雑木林に囲まれた住宅地対応｜日本畳パートナーズ",
  description:
    "北本市全域で畳張替え・表替え・新調に対応。北本駅周辺の落ち着いた戸建て住宅地から、自然観察公園・石戸蒲ザクラ周辺の和室まで、北本の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/kitamoto",
});

const { pref, city } = getCity("saitama", "kitamoto") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "北本市内のどのエリアまで対応していますか？",
    a: "北本市全域に対応しています。北本駅周辺の住宅地、石戸・深井・古市場・宮内など、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "北本の落ち着いた戸建て住宅地でも施工してもらえますか？",
    a: "はい。北本市は雑木林や公園が多く、緑豊かで落ち着いた戸建て住宅地が広がるまちです。ファミリー層の住まいの和室の表替え・新調を数多く手がけています。",
    category: "general" as const,
  },
  {
    q: "小さな子どもがいるので、丈夫で安全な畳にしたいのですが。",
    a: "はい。北本は子育て世帯に人気のまちです。和紙畳・樹脂畳は表面が丈夫で、飲みこぼしや汚れを拭き取りやすく、ささくれも出にくいため小さなお子様のいるご家庭に選ばれています。",
    category: "material" as const,
  },
  {
    q: "北本自然観察公園の近くで、湿気や虫が気になります。",
    a: "雑木林や公園に近い住宅では、湿気やダニ・カビが気になるという声をいただきます。防カビ・防ダニ性に配慮した和紙・樹脂の畳表や、防湿シートの併用などをご提案できます。",
    category: "material" as const,
  },
  {
    q: "石戸蒲ザクラの近くの古い家ですが、和室を整えたいです。",
    a: "はい。日本五大桜のひとつ石戸蒲ザクラで知られる石戸地区には、歴史ある日本家屋も残ります。床の間や続き間を備えた和室の表替え・新調にも対応しています。",
    category: "general" as const,
  },
  {
    q: "北本市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。枚数や素材によって変わりますので、無料見積もりでご確認ください。",
    category: "price" as const,
  },
  {
    q: "共働きなので土日や夕方に来てもらえますか？",
    a: "はい。北本駅はJR高崎線で都心・大宮方面へ通勤に便利で、共働きファミリーの多い地域です。ご都合に合わせて日程を調整して伺いますので、ご希望の時間帯をお知らせください。",
    category: "general" as const,
  },
  {
    q: "和室を子ども部屋として使いたいのですが、明るい畳にできますか？",
    a: "はい。和紙畳は色柄が豊富で、ベージュやグレーなど明るくモダンな色をお選びいただけます。フローリングの部屋にも馴染み、子ども部屋やリビング続きの和室に人気です。",
    category: "general" as const,
  },
  {
    q: "畳一枚だけの張替えでも来てもらえますか？",
    a: "はい。日焼けやへたりが気になる一枚からでも対応しています。他の畳との色の違いなども含めて、現地でご相談いただけます。",
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
    { "@type": "ListItem", position: 4, name: "北本市", item: `${SITE_URL}/area/saitama/kitamoto` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/kitamoto#webpage`,
  name: "北本市の畳張替え・表替え・新調",
  description: "北本市全域で畳張替え・表替え・新調に対応。北本駅周辺の落ち着いた戸建て住宅地から、自然観察公園・石戸蒲ザクラ周辺の和室まで、北本の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/kitamoto`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kitamoto`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県北本市全域対応の畳張替え・表替え・新調専門業者。雑木林に囲まれた戸建て住宅地・ファミリー層の和室・石戸地区の日本家屋の畳工事に対応。",
  areaServed: { "@type": "City", name: "北本市" },
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

export default function KitamotoPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "北本市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kitamoto City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            北本市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県中央部・北本市。雑木林や自然観察公園の緑が残り、トマトのまちとしても知られる落ち着いた住宅地で、北本 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            北本駅周辺のファミリー層の戸建てから、石戸地区の歴史ある日本家屋まで、幅広い畳工事に対応しています。
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

          {/* 北本市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              北本市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                北本市は埼玉県のほぼ中央に位置し、北本自然観察公園をはじめとする雑木林や緑地が多く残る、落ち着いた住宅のまちです。北本トマトやトマトカレーが名物として親しまれ、日本五大桜のひとつ石戸蒲ザクラでも知られています。都心へ通勤しながら自然に近い暮らしができる環境から、ファミリー層に人気があります。
              </p>
              <p>
                北本駅周辺には、緑豊かで落ち着いた戸建て住宅地が広がっています。北本 畳の張替えでは、こうしたファミリー層の住まいの和室を数多く手がけてきました。子育て中のご家庭からは、丈夫で汚れを拭き取りやすく、ささくれの出にくい和紙畳・樹脂畳が選ばれています。
              </p>
              <p>
                和紙畳は色柄が豊富で、ベージュやグレーといった明るくモダンな色もお選びいただけます。フローリングのリビングに続く和室や、子ども部屋として使う和室にもよく馴染みます。一枚だけの張替えから、家じゅうのまとめ替えまで対応します。
              </p>
              <p>
                雑木林や公園に近い住宅では、湿気やダニ・カビが気になるという声もいただきます。防カビ・防ダニ性に配慮した畳表や防湿シートの併用など、環境に合わせたご提案を心がけています。石戸地区など歴史ある日本家屋の床の間・続き間にも対応しています。
              </p>
            </div>
          </div>

          {/* 北本市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              北本市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "ファミリー戸建ての和室", desc: "北本駅周辺の落ち着いた住宅地の和室の表替え・新調。" },
                { title: "子育て世帯向けの畳", desc: "丈夫で掃除しやすい和紙・樹脂畳で、子ども部屋の和室を快適に。" },
                { title: "緑地近くの湿気・防ダニ対策", desc: "雑木林・公園に近い住宅向けに、防カビ・防ダニ配慮の素材を提案。" },
                { title: "石戸地区の日本家屋", desc: "床の間・続き間を備えた歴史ある和室の畳工事にも対応。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 北本市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              北本市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "モダン和室へのリフォーム", desc: "ベージュ・グレーの和紙畳や縁なし畳で、リビング続きの和室を今風に。" },
                { title: "子育て世帯向け素材変更", desc: "掃除しやすく丈夫な和紙・樹脂畳へのグレードアップ。" },
                { title: "戸建て和室の表替え", desc: "新築から年数の経った和室を、い草・和紙・樹脂で一新。" },
                { title: "日本家屋の畳新調", desc: "石戸地区などの歴史ある家屋の床の間・続き間を床から新調。" },
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
              北本市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "定番の張替え" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色柄豊富・子育て世帯に人気" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "耐水・高耐久" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "縁なし畳は別途お見積もり" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "和室の襖にも対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。縁なし畳など特殊仕様は事前にご相談ください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "ファミリー戸建て・日本家屋の和室の畳・襖・障子" },
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
              北本市の方向けよくある質問（Q&A）
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
              { label: "鴻巣市", href: "/area/saitama/konosu" },
              { label: "桶川市", href: "/area/saitama/okegawa" },
              { label: "上尾市", href: "/area/saitama/ageo" },
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
        title="北本市の畳工事はお気軽にご相談ください"
        subtitle="雑木林に囲まれた北本のファミリー戸建てから石戸地区の日本家屋まで、北本市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
