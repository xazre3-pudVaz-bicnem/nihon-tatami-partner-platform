import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "入間市の畳張替え・表替え・新調｜狭山茶の里対応｜日本畳パートナーズ",
  description:
    "入間市全域で畳張替え・表替え・新調に対応。豊岡・武蔵藤沢・仏子・金子・宮寺・二本木など茶畑と西武池袋線沿線の戸建て・農家住宅を丁寧に施工。現地確認・見積もり無料。",
  path: "/area/saitama/iruma",
});

const { pref, city } = getCity("saitama", "iruma") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "入間市内のどのエリアまで対応していますか？",
    a: "入間市全域に対応しています。豊岡・武蔵藤沢・仏子（ぶし）・金子・宮寺・二本木など、市街地から茶畑の広がる田園地区まで全域からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "茶畑や農家住宅が多い地域ですが、広い和室でも対応できますか？",
    a: "はい。入間市は狭山茶の主産地で、金子・宮寺・二本木などには大きな座敷を備えた農家住宅が多く残っています。10畳以上の続き間や仏間のある広い和室の表替え・新調も得意としています。",
    category: "general" as const,
  },
  {
    q: "仏子や武蔵藤沢など西武池袋線沿線の住宅でも来てもらえますか？",
    a: "はい。仏子駅・武蔵藤沢駅・入間市駅周辺のベッドタウンの戸建て・マンションにも多く伺っています。西武池袋線沿線のご自宅へ、ご希望の日時に合わせて訪問いたします。",
    category: "general" as const,
  },
  {
    q: "三井アウトレットパーク入間の近くの新しい住宅地でも施工できますか？",
    a: "はい。旧米軍ジョンソン基地跡地の再開発エリアやアウトレット周辺の新興住宅地でも施工しています。フローリングの一角に和室を設けた間取りにも薄型畳などで対応できます。",
    category: "general" as const,
  },
  {
    q: "加治丘陵の周辺は湿気が気になります。畳のカビ対策はありますか？",
    a: "はい。加治丘陵や入間川沿いの緑豊かな環境は湿度が上がりやすく、畳のカビ・ダニが気になる季節があります。防カビ・防虫効果のある和紙畳・樹脂畳へのご相談も承っています。",
    category: "material" as const,
  },
  {
    q: "古い農家の畳が傷んでいます。裏返しと表替えどちらがいいですか？",
    a: "い草表の傷み具合によります。日焼けやささくれが軽く畳床がしっかりしていれば裏返し、表面全体が傷んでいれば表替えをおすすめします。現地で畳床の状態を確認し最適な方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "入間市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。畳の枚数が多い農家住宅や続き間の場合は、まとめてのお見積もりをご相談ください。",
    category: "price" as const,
  },
  {
    q: "彩の森入間公園の近くですが、留守中の作業は可能ですか？",
    a: "畳を一度お預かりして工場で仕上げる「持ち帰り施工」なら、日中お留守でも段取り可能です。お預かりと納品の日時だけ在宅いただければ、その間はお出かけいただけます。",
    category: "general" as const,
  },
  {
    q: "縁なし畳や琉球畳などモダンな畳にもできますか？",
    a: "はい。武蔵藤沢や入間市駅周辺の新しい戸建てでは、縁なしの半畳琉球畳や和紙のカラー畳のご依頼が増えています。洋室に合うモダンな和空間づくりもお手伝いします。",
    category: "material" as const,
  },
  {
    q: "見積もり・支払い方法は？",
    a: "現地確認・見積もりは無料です。施工完了後のお支払いが基本で、法人様は請求書払いにも対応しています。ご不明点はお気軽にお問い合わせください。",
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
    { "@type": "ListItem", position: 4, name: "入間市", item: `${SITE_URL}/area/saitama/iruma` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/iruma#webpage`,
  name: "入間市の畳張替え・表替え・新調",
  description: "入間市全域で畳張替え・表替え・新調に対応。狭山茶の里・西武池袋線沿線の戸建て・農家住宅を丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/iruma`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/iruma`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県入間市全域対応の畳張替え・表替え・新調・襖・障子の専門業者。狭山茶の里の農家住宅・戸建て実績豊富。",
  areaServed: { "@type": "City", name: "入間市" },
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

export default function IrumaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "入間市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Iruma City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            入間市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県西部・狭山茶の主産地として知られる入間市。茶畑の広がる田園と西武池袋線沿線のベッドタウンが調和したまちで、入間市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            金子・宮寺の農家住宅の広い座敷から、武蔵藤沢・仏子の戸建て、アウトレット周辺の新興住宅まで、地域の暮らしに合わせて丁寧に施工します。
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

          {/* 入間市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              入間市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                入間市は埼玉県の西部に位置し、狭山茶の主産地として全国有数の茶どころです。加治丘陵のなだらかな地形と入間川がつくる緑豊かな環境の中に、金子・宮寺・二本木といった茶畑の広がる田園地区が点在しています。こうした地区には代々受け継がれてきた農家住宅が多く、10畳を超える続き間や仏間を備えた本格的な和室が今も暮らしの中心にあります。
              </p>
              <p>
                一方、豊岡・武蔵藤沢・仏子（ぶし）などの西武池袋線沿線は、都心へ通勤する世帯が暮らすベッドタウンとして発展してきました。入間市駅周辺の市街地から住宅街まで、戸建てとマンションが混在し、和室のある間取りも数多く残っています。旧米軍ジョンソン基地跡地の再開発エリアや三井アウトレットパーク入間周辺には新しい住宅地も広がり、洋室に合う縁なし畳・カラー和紙畳のご要望も増えています。
              </p>
              <p>
                加治丘陵や入間川沿いの緑に恵まれた入間市は、湿度が上がりやすい季節があり、畳のカビ・ダニ対策が気になるお住まいも少なくありません。日本畳パートナーズでは、伝統的ない草表から、防カビ・防虫性に優れた和紙畳・樹脂畳まで、住まいの環境とご予算に合わせてご提案します。
              </p>
              <p>
                彩の森入間公園に近い住宅街の一室から、茶農家の大広間まで、入間市 畳のことなら幅広く対応可能です。畳・襖・障子をまとめてのご依頼にも一括対応し、写真付きの丁寧なご説明を心がけています。
              </p>
            </div>
          </div>

          {/* 入間市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              入間市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "農家住宅の広い座敷・続き間", desc: "金子・宮寺・二本木の10畳超の続き間や仏間の表替え・新調に対応。" },
                { title: "西武池袋線沿線の戸建て", desc: "豊岡・武蔵藤沢・仏子のベッドタウン住宅の和室を丁寧に施工。" },
                { title: "新興住宅地のモダン和室", desc: "アウトレット周辺・基地跡地の新居に縁なし畳・カラー畳を提案。" },
                { title: "湿気対策の素材変更", desc: "加治丘陵沿いの住まいに防カビ・防虫の和紙畳・樹脂畳を提案。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 入間市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              入間市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "座敷・仏間の表替え", desc: "農家住宅の大広間や仏間の畳を、香りのよい上質ない草表で一新。" },
                { title: "畳の新調", desc: "傷んだ畳床から交換。長年使った座敷の畳を根本から作り直します。" },
                { title: "縁なし畳・琉球畳の施工", desc: "武蔵藤沢・入間市駅周辺の新しい住まいにモダンな半畳畳を。" },
                { title: "襖・障子の張替え", desc: "続き間の襖や広縁の障子もまとめて。畳と同時施工でおすすめ。" },
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
              入間市内の施工費用目安
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
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "座敷・仏間の定番" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "防カビ・色あせに強い" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "湿気の多い部屋に" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "続き間の襖に" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "広縁の障子に" },
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
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "戸建・農家住宅の和室の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "施設・福利厚生棟の畳対応" },
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
              入間市の方向けよくある質問（Q&A）
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
              { label: "所沢市", href: "/area/saitama/tokorozawa" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "ふじみ野市", href: "/area/saitama/fujimino" },
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
        title="入間市の畳工事はお気軽にご相談ください"
        subtitle="狭山茶の里の農家住宅から西武池袋線沿線の戸建てまで。表替え・新調・襖・障子のご相談を承ります。"
      />
    </>
  );
}
