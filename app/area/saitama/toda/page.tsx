import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "戸田市の畳張替え・表替え・新調｜タワーマンション対応｜日本畳パートナーズ",
  description:
    "戸田市全域で畳張替え・表替え・新調に対応。戸田公園・戸田・北戸田駅周辺、荒川沿いのタワーマンション・分譲マンション・賃貸を丁寧に施工。原状回復も対応。見積もり無料。",
  path: "/area/saitama/toda",
});

const { pref, city } = getCity("saitama", "toda") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "戸田市内のどのエリアまで対応していますか？",
    a: "戸田市全域に対応しています。戸田公園駅・戸田駅・北戸田駅の埼京線各駅周辺から、荒川沿い・戸田ボートコース近くの住宅地まで、市内全域からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "タワーマンションの高層階でも施工してもらえますか？",
    a: "はい。戸田市は駅前を中心にタワーマンション・分譲マンションが多い地域です。高層階でも搬入用エレベーターの予約や共用部のルールに合わせて、畳をお預かりして工場で仕上げる持ち帰り施工で対応します。",
    category: "general" as const,
  },
  {
    q: "分譲マンションの管理規約に合わせて作業してもらえますか？",
    a: "はい。共用部の使用時間や搬入経路の制限がある物件にも対応しています。事前に管理規約をご確認いただければ、その範囲に合わせて施工スケジュールを組みます。",
    category: "general" as const,
  },
  {
    q: "賃貸マンション・アパートの原状回復に対応していますか？",
    a: "はい。戸田市は都内近接で単身・ファミリーの賃貸需要が高い地域です。退去後の畳・襖・障子をまとめて対応し、次の入居に向けてすっきり仕上げます。オーナー様・管理会社様からのご依頼も歓迎です。",
    category: "general" as const,
  },
  {
    q: "荒川に近い立地で湿気が気になります。畳の対策はありますか？",
    a: "荒川沿いの低地は湿度が上がりやすく、畳のカビ・ダニが気になることがあります。防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。マンションの気密性の高い和室にもおすすめです。",
    category: "material" as const,
  },
  {
    q: "若い世帯が多いと聞きますが、モダンな畳にもできますか？",
    a: "はい。戸田市は平均年齢が若く、モダンな住まいを好む世帯が多い地域です。縁なしの半畳琉球畳や、リビングになじむカラー和紙畳のご依頼が増えています。おしゃれな畳コーナーづくりもお手伝いします。",
    category: "material" as const,
  },
  {
    q: "戸田市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。マンション1室分や賃貸の複数戸をまとめてご依頼の場合はお見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "共働きで日中は留守がちですが、施工をお願いできますか？",
    a: "はい。畳をお預かりして工場で仕上げる持ち帰り施工なら、お預かりと納品の日時だけ在宅いただければ進められます。土日や早朝のご相談も承りますので、お気軽にお申し付けください。",
    category: "general" as const,
  },
  {
    q: "ペットのいる部屋でも安心して使える畳はありますか？",
    a: "はい。戸田市内でもペット可の分譲・賃貸が増えています。傷や汚れ、においに強い樹脂畳・和紙畳への張替えのご相談も承っています。原状回復時の入れ替えにもおすすめです。",
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
    { "@type": "ListItem", position: 4, name: "戸田市", item: `${SITE_URL}/area/saitama/toda` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/toda#webpage`,
  name: "戸田市の畳張替え・表替え・新調",
  description: "戸田市全域で畳張替え・表替え・新調に対応。荒川沿いのタワーマンション・分譲マンション・賃貸を丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/toda`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/toda`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県戸田市全域対応の畳張替え・表替え・新調・原状回復の専門業者。タワーマンション・分譲・賃貸の施工実績豊富。",
  areaServed: { "@type": "City", name: "戸田市" },
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

export default function TodaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "戸田市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Toda City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            戸田市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            戸田ボートコースで知られ、荒川沿いにタワーマンションが立ち並ぶ埼玉県南部の戸田市。平均年齢が若く活気あるまちで、戸田市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            戸田公園・戸田・北戸田駅周辺の分譲・賃貸マンションから戸建てまで、原状回復も含めて幅広く丁寧に対応します。
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

          {/* 戸田市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              戸田市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                戸田市は埼玉県の南部、荒川を挟んで東京都に接する立地にあります。1964年の東京オリンピックでボート競技の会場となった戸田ボートコース（戸田公園）を擁し、水辺の風景が象徴的なまちです。JR埼京線の戸田公園駅・戸田駅・北戸田駅から都心へ短時間でアクセスできることから、単身者からファミリーまで幅広い世帯に人気があり、県内でも平均年齢が若い活気ある都市として知られています。
              </p>
              <p>
                住まいの中心は、駅周辺に立ち並ぶタワーマンション・分譲マンションと、賃貸マンション・アパートです。都内近接で賃貸需要が非常に高く、単身向けからファミリー向けまで多様な物件が集まっています。このため、分譲マンションの和室の表替え・新調と、賃貸物件の退去後の原状回復工事の両方のご依頼を数多くいただいています。高層階の物件では、畳をお預かりして工場で仕上げる持ち帰り施工が中心となります。
              </p>
              <p>
                荒川沿いの低地という地形から湿度が上がりやすく、また気密性の高いマンションでは結露による畳のカビ・ダニが気になることもあります。日本畳パートナーズでは、伝統的ない草表に加え、防カビ・防湿性に優れた和紙畳・樹脂畳をご用意し、住まいの環境やペットの有無に合わせてご提案しています。
              </p>
              <p>
                若い世帯の多い戸田市では、縁なしの琉球畳やカラー和紙畳など、モダンな畳コーナーのご要望も増えています。戸田市 畳のことなら、タワーマンションの一室から賃貸物件の原状回復まで、共用部のルールにも配慮して幅広く承ります。
              </p>
            </div>
          </div>

          {/* 戸田市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              戸田市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "タワーマンション・分譲マンション", desc: "高層階も搬入ルールに配慮し持ち帰り施工で対応。" },
                { title: "賃貸物件の原状回復", desc: "都内近接の賃貸需要に応え、退去後の畳・襖を一括対応。" },
                { title: "モダン和室・畳コーナー", desc: "若い世帯に人気の縁なし畳・カラー和紙畳を提案。" },
                { title: "湿気・結露対策の素材変更", desc: "荒川沿い・気密マンションに防カビ・防湿の和紙畳・樹脂畳を。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 戸田市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              戸田市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "マンション和室の表替え", desc: "分譲・タワーマンションの和室を、香りのよいい草表で一新。" },
                { title: "賃貸物件の原状回復工事", desc: "退去後の畳・襖・障子をまとめて対応。次の募集にすっきり間に合わせます。" },
                { title: "縁なし畳・琉球畳の施工", desc: "若い世帯に人気。リビングになじむモダンな半畳畳をご提案。" },
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
              戸田市内の施工費用目安
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "防カビ・結露対策に" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "水拭き・高耐久" },
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
              戸田市の方向けよくある質問（Q&A）
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
              { label: "蕨市", href: "/area/saitama/warabi" },
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
        title="戸田市の畳工事はお気軽にご相談ください"
        subtitle="荒川沿いのタワーマンションから賃貸物件の原状回復まで。表替え・新調・襖・障子のご相談を承ります。"
      />
    </>
  );
}
