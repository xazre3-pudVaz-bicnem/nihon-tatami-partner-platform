import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "朝霞市の畳張替え・表替え・新調｜都心近接ベッドタウン対応｜日本畳パートナーズ",
  description:
    "朝霞市全域で畳張替え・表替え・新調に対応。朝霞駅・朝霞台駅・北朝霞周辺の賃貸マンション・アパート・戸建てを丁寧に施工。原状回復も対応。現地確認・見積もり無料。",
  path: "/area/saitama/asaka",
});

const { pref, city } = getCity("saitama", "asaka") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "朝霞市内のどのエリアまで対応していますか？",
    a: "朝霞市全域に対応しています。朝霞駅・朝霞台駅周辺から北朝霞、黒目川沿いの住宅地まで、市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "都内へ通勤中でも施工をお願いできますか？",
    a: "はい。朝霞市は都心近接のベッドタウンで、都内通勤の方が多い地域です。畳をお預かりして工場で仕上げる持ち帰り施工なら、日中お留守でも進められます。土日や早朝のご相談も承ります。",
    category: "general" as const,
  },
  {
    q: "賃貸マンション・アパートの原状回復に対応していますか？",
    a: "はい。朝霞市は賃貸マンション・アパートが多い地域で、退去後の原状回復のご依頼を数多くいただいています。畳・襖・障子をまとめて対応し、次の入居に向けてすっきり仕上げます。",
    category: "general" as const,
  },
  {
    q: "朝霞駅・朝霞台駅・北朝霞など駅周辺のマンションでも来てもらえますか？",
    a: "はい。東武東上線の朝霞駅・朝霞台駅、JR武蔵野線の北朝霞駅周辺のマンション・アパートに多く伺っています。搬入経路や共用部のルールにも配慮して施工します。",
    category: "general" as const,
  },
  {
    q: "黒目川に近い低地で湿気が気になります。畳の対策はありますか？",
    a: "黒目川沿いなど水辺に近いエリアは湿度が上がりやすく、畳のカビ・ダニが気になることがあります。防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。",
    category: "material" as const,
  },
  {
    q: "戸建てと賃貸が混在していますが、どちらも対応できますか？",
    a: "はい。朝霞市は人口密度が高く、賃貸マンション・アパートと戸建てが混在する住宅地です。持ち家の和室の表替えから賃貸物件の原状回復まで、どちらも数多く手がけています。",
    category: "general" as const,
  },
  {
    q: "朝霞市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。賃貸の複数戸をまとめてご依頼の場合はお見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "分譲マンションの管理規約に合わせて作業してもらえますか？",
    a: "はい。共用部の使用時間や搬入エレベーターの予約が必要な物件にも対応しています。事前に管理規約をご確認いただければ、その範囲に合わせて施工スケジュールを組みます。",
    category: "general" as const,
  },
  {
    q: "ペットのいる部屋でも安心して使える畳はありますか？",
    a: "はい。朝霞市内でもペット可の賃貸・分譲が増えています。傷や汚れ、においに強い樹脂畳・和紙畳への張替えのご相談も承っています。原状回復時の入れ替えにもおすすめです。",
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
    { "@type": "ListItem", position: 4, name: "朝霞市", item: `${SITE_URL}/area/saitama/asaka` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/asaka#webpage`,
  name: "朝霞市の畳張替え・表替え・新調",
  description: "朝霞市全域で畳張替え・表替え・新調に対応。都心近接ベッドタウンの賃貸マンション・アパート・戸建てを丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/asaka`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/asaka`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県朝霞市全域対応の畳張替え・表替え・新調・原状回復の専門業者。賃貸マンション・アパート・戸建て実績豊富。",
  areaServed: { "@type": "City", name: "朝霞市" },
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

export default function AsakaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "朝霞市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Asaka City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            朝霞市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            都心へのアクセスに優れた埼玉県南部のベッドタウン・朝霞市。黒目川が流れる住宅地で、朝霞市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            朝霞駅・朝霞台駅・北朝霞周辺の賃貸マンション・アパートから戸建てまで、原状回復も含めて幅広く丁寧に対応します。
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

          {/* 朝霞市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              朝霞市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                朝霞市は埼玉県の南部に位置し、東京都に接する都心近接のベッドタウンです。東武東上線の朝霞駅・朝霞台駅、JR武蔵野線の北朝霞駅が利用でき、池袋や都心へ短時間でアクセスできる立地から、通勤世帯に人気の住宅地として発展してきました。県内でも人口密度が高く、限られた市域に多くの世帯が暮らしています。
              </p>
              <p>
                住まいの特徴は、賃貸マンション・アパートと戸建てが混在していることです。駅周辺には多層の賃貸物件が立ち並び、少し離れると戸建て住宅街が広がります。このため、持ち家の和室の表替え・新調と、賃貸物件の退去後の原状回復工事の両方のご依頼を数多くいただいています。畳・襖・障子をまとめて対応し、次の入居に向けてすっきりと仕上げます。
              </p>
              <p>
                市内を流れる黒目川沿いなど水辺に近い低地では湿度が上がりやすく、畳のカビ・ダニ対策が気になるお住まいもあります。日本畳パートナーズでは、伝統的ない草表に加え、防カビ・防湿性に優れた和紙畳・樹脂畳をご用意し、住まいの環境やペットの有無に合わせてご提案しています。
              </p>
              <p>
                都内へ通勤される方が多い朝霞市では、日中お留守のご家庭も少なくありません。畳を一度お預かりして工場で仕上げる持ち帰り施工なら、在宅の負担を抑えて進められます。朝霞市 畳のことなら、賃貸オーナー様・管理会社様から一般のご家庭まで、幅広くご相談を承ります。
              </p>
            </div>
          </div>

          {/* 朝霞市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              朝霞市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "賃貸マンション・アパート", desc: "朝霞駅・北朝霞周辺の賃貸物件の原状回復・入れ替えに対応。" },
                { title: "戸建て住宅の和室", desc: "持ち家の和室の表替え・新調を、都内通勤世帯にも配慮して施工。" },
                { title: "原状回復工事", desc: "退去後の畳・襖・障子を一括対応し、次の入居に向けて仕上げ。" },
                { title: "湿気対策の素材変更", desc: "黒目川沿いの低地に防カビ・防湿の和紙畳・樹脂畳を提案。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 朝霞市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              朝霞市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "賃貸物件の原状回復工事", desc: "退去後の畳・襖・障子をまとめて対応。次の募集にすっきり間に合わせます。" },
                { title: "戸建て和室の表替え", desc: "持ち家の和室を、香りのよいい草表で気持ちよく一新します。" },
                { title: "マンション和室の張替え", desc: "駅近マンションの和室に対応。搬入・作業時間のルールにも配慮。" },
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
              朝霞市内の施工費用目安
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。複数戸をまとめる場合は事前に数量をお知らせください。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一戸建て・持ち家向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
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
              朝霞市の方向けよくある質問（Q&A）
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
              { label: "新座市", href: "/area/saitama/niiza" },
              { label: "富士見市", href: "/area/saitama/fujimi" },
              { label: "戸田市", href: "/area/saitama/toda" },
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
        title="朝霞市の畳工事はお気軽にご相談ください"
        subtitle="朝霞駅・北朝霞周辺の賃貸物件から戸建てまで。表替え・新調・原状回復・襖・障子のご相談を承ります。"
      />
    </>
  );
}
