import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "白岡市の畳張替え・表替え・新調｜梨のまちの戸建て対応｜日本畳パートナーズ",
  description:
    "白岡市全域で畳張替え・表替え・新調に対応。白岡駅・新白岡駅周辺の区画整理された住宅地から梨の産地の農家住宅まで、戸建て和室の畳工事を承ります。見積もり無料。",
  path: "/area/saitama/shiraoka",
});

const { pref, city } = getCity("saitama", "shiraoka") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "白岡市内のどのエリアまで対応していますか？",
    a: "白岡市全域に対応しています。白岡駅・新白岡駅周辺の住宅地、篠津・上野田・下野田・爪田ヶ谷など、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "新白岡駅周辺の新しい住宅地でも施工してもらえますか？",
    a: "はい。白岡市は区画整理された分譲住宅地が多く、比較的新しい戸建てが並ぶエリアです。新築時に入れた畳の表替えや、和室のグレードアップにも対応しています。",
    category: "general" as const,
  },
  {
    q: "白岡は2012年に市になった新しい市ですが、対応地域ですか？",
    a: "はい。白岡市は2012年に市制を施行した比較的新しい市ですが、当社は市制以前から続く旧町域も含め、白岡全域を対応エリアとしています。",
    category: "general" as const,
  },
  {
    q: "梨畑に囲まれた農家の広い和室でも対応できますか？",
    a: "はい。白岡は梨の産地として知られ、続き間や床の間を備えた農家住宅も多く残っています。広間の枚数が多い表替え・新調にも慣れていますのでご相談ください。",
    category: "general" as const,
  },
  {
    q: "分譲住宅の和室を洋風に近い雰囲気にしたいのですが。",
    a: "はい。縁なし畳（琉球畳風）や、グレー・淡い色の和紙・樹脂表を使うと、モダンでフローリングに馴染む和室に仕上がります。白岡の新しい住宅でも人気のご要望です。",
    category: "material" as const,
  },
  {
    q: "共働き世帯なので土日や夕方に来てもらえますか？",
    a: "はい。白岡駅・新白岡駅は宇都宮線で都心方面へ通勤する共働きファミリーが多い地域です。ご都合に合わせて日程を調整して伺いますので、ご希望をお知らせください。",
    category: "general" as const,
  },
  {
    q: "白岡市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。枚数や素材によって変わりますので、無料見積もりでご確認ください。",
    category: "price" as const,
  },
  {
    q: "小さな子どもがいるので、丈夫で掃除しやすい畳はありますか？",
    a: "和紙畳・樹脂畳は表面が丈夫で、飲みこぼしや汚れを拭き取りやすい素材です。分譲住宅で子育て中のご家庭からのご依頼が増えています。",
    category: "material" as const,
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
    { "@type": "ListItem", position: 4, name: "白岡市", item: `${SITE_URL}/area/saitama/shiraoka` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/shiraoka#webpage`,
  name: "白岡市の畳張替え・表替え・新調",
  description: "白岡市全域で畳張替え・表替え・新調に対応。白岡駅・新白岡駅周辺の区画整理された住宅地から梨の産地の農家住宅まで、戸建て和室の畳工事を承ります。見積もり無料。",
  url: `${SITE_URL}/area/saitama/shiraoka`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/shiraoka`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県白岡市全域対応の畳張替え・表替え・新調専門業者。区画整理された分譲住宅地・梨の産地の農家住宅の和室工事に対応。",
  areaServed: { "@type": "City", name: "白岡市" },
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

export default function ShiraokaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "白岡市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Shiraoka City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            白岡市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県東部・白岡市。梨の産地として知られる田園に、区画整理された分譲住宅地が広がるエリアで、白岡 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            白岡駅・新白岡駅周辺の新しい戸建てから、床の間を備えた農家住宅の和室まで、幅広い畳工事に対応しています。
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

          {/* 白岡市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              白岡市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                白岡市は埼玉県の東部に位置し、2012年に市制を施行した比較的新しい市です。JR宇都宮線の白岡駅・新白岡駅を中心に、区画整理された分譲住宅地が広がり、都心方面へ通勤するファミリー層のベッドタウンとして人気を集めています。
              </p>
              <p>
                その一方で、白岡は良質な梨の産地としても知られ、駅から少し離れると梨畑や田んぼが広がる田園風景が残ります。こうした農家住宅には、続き間の座敷や床の間を備えた広い和室が多く、白岡 畳の張替えでは新しい分譲住宅と伝統的な農家住宅の両方に対応してきました。
              </p>
              <p>
                分譲住宅では、新築時に入れた畳が10年前後で色あせやへたりが目立ちはじめます。縁なし畳（琉球畳風）や、グレー・淡色の和紙・樹脂表を使ったモダンな和室へのリフォームも、白岡の若い世帯から人気のご要望です。
              </p>
              <p>
                共働き世帯が多い土地柄を踏まえ、土日や夕方の対応など日程調整にも柔軟に応じます。一枚だけの張替えから、家じゅうの畳のまとめ替えまで、まずはお気軽にご相談ください。
              </p>
            </div>
          </div>

          {/* 白岡市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              白岡市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "分譲住宅の和室リフォーム", desc: "区画整理地の新しい戸建て和室を、縁なし畳やモダンな色で一新。" },
                { title: "農家住宅の続き間", desc: "梨の産地の農家住宅の座敷・床の間付き和室の表替え・新調。" },
                { title: "子育て世帯向けの畳", desc: "汚れに強く掃除しやすい和紙・樹脂畳で、子ども部屋の和室を快適に。" },
                { title: "駅前マンションの和室", desc: "白岡駅・新白岡駅周辺の集合住宅の畳張替え・原状回復。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 白岡市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              白岡市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "縁なし畳・モダン和室化", desc: "分譲住宅の和室を、琉球畳風やグレー系の色でスタイリッシュに。" },
                { title: "戸建て和室の表替え", desc: "新築から10年前後で気になる色あせ・へたりを、い草・和紙・樹脂で一新。" },
                { title: "広間・続き間の畳工事", desc: "農家住宅の座敷・大広間を一度に表替え・新調。縁の柄も選択可能。" },
                { title: "子育て世帯向け素材変更", desc: "掃除しやすく丈夫な和紙・樹脂畳へのグレードアップ。" },
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
              白岡市内の施工費用目安
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
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "分譲住宅・農家住宅の和室の畳・襖・障子" },
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
              白岡市の方向けよくある質問（Q&A）
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
              { label: "久喜市", href: "/area/saitama/kuki" },
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
        title="白岡市の畳工事はお気軽にご相談ください"
        subtitle="梨のまち・白岡の分譲住宅から農家住宅まで、白岡市全域の畳張替え・表替え・新調を承ります。"
      />
    </>
  );
}
