import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "三郷市の畳張替え・表替え・新調｜物流拠点対応｜日本畳パートナーズ",
  description:
    "三郷市全域で畳張替え・表替え・新調に対応。三郷中央・新三郷・早稲田の住宅地、ららぽーと新三郷やIKEA周辺の新興マンション・戸建てを丁寧に施工。現地確認・見積もり無料。",
  path: "/area/saitama/misato",
});

const { pref, city } = getCity("saitama", "misato") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "三郷市内のどのエリアまで対応していますか？",
    a: "三郷市全域に対応しています。三郷中央・新三郷・早稲田をはじめ、江戸川・中川に挟まれた市内全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "つくばエクスプレスやJR武蔵野線沿線のマンションでも来てもらえますか？",
    a: "はい。三郷中央駅（つくばエクスプレス）・新三郷駅・三郷駅（JR武蔵野線）周辺のマンション・分譲住宅に多く伺っています。共用部の搬入ルールにも配慮して施工します。",
    category: "general" as const,
  },
  {
    q: "ららぽーと新三郷やIKEAの近くの新しい住宅でも施工できますか？",
    a: "はい。新三郷ららシティなど、ららぽーと新三郷・IKEA・コストコに近い再開発エリアの新興住宅地でも施工しています。フローリング主体の間取りに設けた和室コーナーにも対応します。",
    category: "general" as const,
  },
  {
    q: "早稲田地区の戸建てが多いエリアも対応していますか？",
    a: "はい。早稲田をはじめとする区画整理された戸建て住宅地にも数多く伺っています。子育て世代のご家庭の和室の表替えや、傷んだ畳の新調をお手伝いします。",
    category: "general" as const,
  },
  {
    q: "江戸川・中川に近い低地で湿気が心配です。畳の対策はありますか？",
    a: "三郷市は江戸川と中川に挟まれた低地で、湿度が高くなりやすい地域です。畳のカビ・ダニが気になる場合は、防カビ・防湿性に優れた和紙畳・樹脂畳へのご相談を承っています。",
    category: "material" as const,
  },
  {
    q: "物流倉庫や事業所など法人施設の畳工事にも対応できますか？",
    a: "はい。三郷市は大型物流倉庫や事業所が集積する物流拠点です。休憩室・宿直室・和室の応接など、法人施設の畳・襖工事にも対応しています。営業時間外の施工もご相談ください。",
    category: "general" as const,
  },
  {
    q: "三郷市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。マンション1室分や複数枚をまとめてご依頼の場合はお見積もりでご相談ください。",
    category: "price" as const,
  },
  {
    q: "分譲マンションの和室で、管理規約の作業時間に合わせてもらえますか？",
    a: "はい。共用部の使用時間制限や搬入エレベーターの予約が必要な物件にも対応しています。事前に管理規約をご確認いただければ、その範囲に合わせて施工スケジュールを組みます。",
    category: "general" as const,
  },
  {
    q: "ペットのいる家庭でも安心して使える畳はありますか？",
    a: "はい。三郷中央や新三郷の新しいマンションではペットと暮らすご家庭が増えています。傷や汚れ、においに強い樹脂畳・和紙畳への張替えのご相談も承っています。",
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
    { "@type": "ListItem", position: 4, name: "三郷市", item: `${SITE_URL}/area/saitama/misato` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/misato#webpage`,
  name: "三郷市の畳張替え・表替え・新調",
  description: "三郷市全域で畳張替え・表替え・新調に対応。物流拠点・ららぽーと周辺の新興マンション・戸建てを丁寧に施工。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/misato`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/misato`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県三郷市全域対応の畳張替え・表替え・新調・襖・障子の専門業者。物流拠点の法人施設・新興マンション実績豊富。",
  areaServed: { "@type": "City", name: "三郷市" },
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

export default function MisatoPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "三郷市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Misato City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            三郷市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            ららぽーと新三郷やIKEA・コストコが集まる埼玉県東部の物流拠点・三郷市。江戸川と中川に挟まれたまちで、三郷市 畳の張替え・表替え・新調を承ります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            三郷中央・新三郷・早稲田の新興住宅地の戸建て・マンションから、物流倉庫・事業所の法人施設まで、幅広く丁寧に対応します。
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

          {/* 三郷市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              三郷市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                三郷市は埼玉県の東部、江戸川と中川に挟まれた低地に広がる物流の拠点都市です。ららぽーと新三郷やIKEA、コストコをはじめとする大型商業・物流施設が集積し、東京外環自動車道や常磐自動車道のインターチェンジを抱える交通の要衝として発展してきました。つくばエクスプレスとJR武蔵野線が交わり、都心へのアクセスの良さから住宅需要も高まっています。
              </p>
              <p>
                三郷中央駅周辺や新三郷ららシティのように、近年は再開発による新興マンション・分譲戸建てが数多く生まれています。早稲田地区をはじめ区画整理された住宅地には子育て世代のファミリーが多く暮らし、フローリング中心の間取りに和室を一室設けたお住まいが目立ちます。こうした住まいでは、洋室になじむ縁なし畳やカラー和紙畳のご要望も増えています。
              </p>
              <p>
                江戸川・中川に挟まれた三郷市は、地形的に湿度が上がりやすく、畳のカビ・ダニ対策が気になるお住まいも少なくありません。日本畳パートナーズでは、伝統的ない草表に加え、防カビ・防湿性に優れた和紙畳・樹脂畳をご用意し、住まいの環境に合わせてご提案しています。
              </p>
              <p>
                また、三郷市には大型物流倉庫や事業所が数多く立地しており、休憩室・宿直室・和室応接など法人施設の畳・襖工事のご依頼も承っています。三郷市 畳のことなら、一般住宅から法人施設まで幅広く対応し、畳・襖・障子をまとめてのご相談にも一括で対応します。
              </p>
            </div>
          </div>

          {/* 三郷市の特色と施工実績 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              三郷市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "新興マンション・分譲住宅", desc: "三郷中央・新三郷ららシティの新居の和室・和室コーナーに対応。" },
                { title: "ファミリー戸建ての和室", desc: "早稲田など区画整理地の子育て世代の和室を丁寧に表替え。" },
                { title: "物流倉庫・事業所", desc: "休憩室・宿直室・応接和室など法人施設の畳・襖工事に対応。" },
                { title: "湿気対策の素材変更", desc: "江戸川・中川沿いの低地に防カビ・防湿の和紙畳・樹脂畳を提案。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 三郷市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              三郷市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "マンション和室の表替え", desc: "分譲・賃貸マンションの和室を、香りのよいい草表ですっきり一新。" },
                { title: "縁なし畳・琉球畳の施工", desc: "新興住宅地の洋室に合う半畳のモダン畳をご提案します。" },
                { title: "法人施設の畳・襖工事", desc: "物流倉庫・事業所の休憩室や宿直室の畳・襖をまとめて対応。" },
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
              三郷市内の施工費用目安
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
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "湿気の多い低地に" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "法人施設の量産品も対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。枚数が多い場合は事前に数量をお知らせください。</p>
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
                { label: "法人施設向け", href: "/area/saitama/corporate", desc: "物流倉庫・事業所の休憩室対応" },
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
              三郷市の方向けよくある質問（Q&A）
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
              { label: "草加市", href: "/area/saitama/soka" },
              { label: "越谷市", href: "/area/saitama/koshigaya" },
              { label: "春日部市", href: "/area/saitama/kasukabe" },
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
        title="三郷市の畳工事はお気軽にご相談ください"
        subtitle="新三郷・三郷中央の新興住宅から物流拠点の法人施設まで。表替え・新調・襖・障子のご相談を承ります。"
      />
    </>
  );
}
