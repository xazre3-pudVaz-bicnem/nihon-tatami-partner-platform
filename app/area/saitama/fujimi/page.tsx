import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "富士見市の畳張替え・表替え・新調｜ららぽーと富士見エリア対応｜日本畳パートナーズ",
  description:
    "富士見市全域で畳張替え・表替え・新調に対応。鶴瀬・みずほ台・ふじみ野駅周辺、ららぽーと富士見や難波田城公園エリアの戸建て・団地・マンションを丁寧に施工。見積もり無料。",
  path: "/area/saitama/fujimi",
});

const { pref, city } = getCity("saitama", "fujimi") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "富士見市内のどのエリアまで対応していますか？",
    a: "富士見市全域に対応しています。鶴瀬・みずほ台・ふじみ野駅周辺の住宅地から、びん沼川沿いの田園地区まで、市内全域からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "ららぽーと富士見の近くの新しい住宅でも施工できますか？",
    a: "はい。ららぽーと富士見周辺の新興住宅地でも施工しています。フローリング中心の間取りに設けた和室コーナーや、洋室になじむ縁なし畳・カラー畳のご要望にも対応します。",
    category: "general" as const,
  },
  {
    q: "団地やマンションの和室でも対応してもらえますか？",
    a: "はい。富士見市は団地・マンションと戸建てが混在するベッドタウンです。集合住宅の和室の表替え・新調にも数多く伺っており、搬入経路や作業時間のルールにも配慮して施工します。",
    category: "general" as const,
  },
  {
    q: "鶴瀬・みずほ台など東武東上線沿線の住宅でも来てもらえますか？",
    a: "はい。鶴瀬駅・みずほ台駅・ふじみ野駅周辺の戸建て・マンションに多く伺っています。東武東上線沿線のご自宅へ、ご希望の日時に合わせて訪問いたします。",
    category: "general" as const,
  },
  {
    q: "びん沼川に近い低地で湿気が気になります。畳の対策はありますか？",
    a: "びん沼川沿いなど水辺に近い低地は湿度が上がりやすく、畳のカビ・ダニが気になることがあります。防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。",
    category: "material" as const,
  },
  {
    q: "古い団地の畳が傷んでいます。裏返しと表替えどちらがいいですか？",
    a: "い草表の傷み具合によります。日焼けやささくれが軽く畳床がしっかりしていれば裏返し、表面全体が傷んでいれば表替えがおすすめです。現地で状態を確認し最適な方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "富士見市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。団地・マンション1室分をまとめてご依頼の場合はお見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "難波田城公園の近くの古い住宅でも対応できますか？",
    a: "はい。難波田城公園（なんばたじょうこうえん）周辺には昔ながらの和室を備えたお住まいも残っています。広い座敷や続き間の表替え・新調も丁寧に対応いたします。",
    category: "general" as const,
  },
  {
    q: "縁なし畳や琉球畳などモダンな畳にもできますか？",
    a: "はい。ららぽーと富士見周辺の新しい戸建てでは、縁なしの半畳琉球畳や和紙のカラー畳のご依頼が増えています。洋室に合うモダンな和空間づくりもお手伝いします。",
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
    { "@type": "ListItem", position: 4, name: "富士見市", item: `${SITE_URL}/area/saitama/fujimi` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/fujimi#webpage`,
  name: "富士見市の畳張替え・表替え・新調",
  description: "富士見市全域で畳張替え・表替え・新調に対応。ららぽーと富士見エリアの戸建て・団地・マンションを丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/fujimi`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/fujimi`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県富士見市全域対応の畳張替え・表替え・新調・襖・障子の専門業者。戸建て・団地・マンション実績豊富。",
  areaServed: { "@type": "City", name: "富士見市" },
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

export default function FujimiPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "富士見市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Fujimi City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            富士見市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            ららぽーと富士見が広域から人を集める埼玉県南部のベッドタウン・富士見市。田園と新興住宅地が調和したまちで、富士見市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            鶴瀬・みずほ台・ふじみ野駅周辺の戸建て・団地・マンションから、びん沼川沿いの昔ながらのお住まいまで、幅広く丁寧に対応します。
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

          {/* 富士見市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              富士見市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                富士見市は埼玉県の南部に位置し、東武東上線の鶴瀬駅・みずほ台駅・ふじみ野駅を擁するベッドタウンです。市内にはららぽーと富士見があり、周辺市からも多くの人が訪れる広域集客の核となっています。びん沼川沿いには田園も残り、新興住宅地と昔ながらの落ち着いた住宅地が調和したまちなみが特徴です。
              </p>
              <p>
                住まいのタイプは実に多彩で、区画整理された新興住宅地の戸建て、昭和期に整備された団地、駅前のマンション、そして農村部の広い座敷を備えたお住まいまでが混在しています。難波田城公園（なんばたじょうこうえん）周辺には昔ながらの和室を残すお宅もあり、続き間や仏間の表替え・新調のご依頼も少なくありません。一方、ららぽーと富士見周辺の新しい戸建てでは、洋室になじむ縁なし畳・カラー和紙畳のご要望が増えています。
              </p>
              <p>
                びん沼川沿いなど水辺に近い低地では湿度が上がりやすく、畳のカビ・ダニ対策が気になるお住まいもあります。日本畳パートナーズでは、伝統的ない草表に加え、防カビ・防湿性に優れた和紙畳・樹脂畳をご用意し、住まいの環境やご予算に合わせてご提案しています。
              </p>
              <p>
                富士見市 畳のことなら、団地・マンションの一室から農家住宅の大広間まで幅広く対応可能です。畳・襖・障子をまとめてのご依頼にも一括で対応し、写真付きの丁寧なご説明を心がけています。
              </p>
            </div>
          </div>

          {/* 富士見市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              富士見市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "新興住宅地のモダン和室", desc: "ららぽーと富士見周辺の新居に縁なし畳・カラー畳を提案。" },
                { title: "団地・マンションの和室", desc: "昭和期の団地から駅前マンションまで、集合住宅の和室に対応。" },
                { title: "農家住宅の座敷・続き間", desc: "難波田城公園周辺などの広い座敷・仏間の表替え・新調。" },
                { title: "湿気対策の素材変更", desc: "びん沼川沿いの低地に防カビ・防湿の和紙畳・樹脂畳を提案。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 富士見市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              富士見市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "団地・マンション和室の表替え", desc: "集合住宅の和室を、香りのよいい草表ですっきり一新します。" },
                { title: "縁なし畳・琉球畳の施工", desc: "新興住宅地の洋室に合う半畳のモダン畳をご提案します。" },
                { title: "座敷・仏間の新調", desc: "農家住宅の広い座敷や仏間の畳を根本から作り直します。" },
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
              富士見市内の施工費用目安
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
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "戸建・団地・マンション和室の畳・襖・障子" },
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
              富士見市の方向けよくある質問（Q&A）
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
              { label: "ふじみ野市", href: "/area/saitama/fujimino" },
              { label: "朝霞市", href: "/area/saitama/asaka" },
              { label: "所沢市", href: "/area/saitama/tokorozawa" },
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
        title="富士見市の畳工事はお気軽にご相談ください"
        subtitle="鶴瀬・みずほ台・ふじみ野駅周辺の戸建て・団地・マンションまで。表替え・新調・襖・障子のご相談を承ります。"
      />
    </>
  );
}
