import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_TEL } from "@/lib/site";
import { TATAMI_SERVICES, INTERIOR_SERVICES, RESTORATION_SERVICES } from "@/data/services";
import { FAQ_ITEMS } from "@/data/faq";
import { WORKS } from "@/data/works";
import { COLUMN_ARTICLES } from "@/data/column";
import { TARGETS } from "@/data/targets";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";
import WorksCard from "@/components/ui/WorksCard";
import ColumnCard from "@/components/ui/ColumnCard";
import TargetCard from "@/components/ui/TargetCard";

export const metadata: Metadata = buildMetadata({
  title: `${SITE_NAME} | 畳・内装・原状回復の専門パートナー`,
  description: "畳の表替え・新調から内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応。BtoC・BtoB両対応の畳と空間整備の専門パートナー。",
  path: "/",
});

const REASONS = [
  {
    num: "01",
    title: "畳を軸にした確かな専門性",
    desc: "畳の素材・工法・施工に精通した専門集団。い草・和紙・樹脂・琉球畳など幅広い素材と施工方法に対応し、最適な提案をします。",
  },
  {
    num: "02",
    title: "一般住宅から法人案件まで",
    desc: "個人のご家庭から、不動産管理会社・旅館・寺院・店舗オーナーまで。規模や用途を問わず、最適な施工プランをご提案します。",
  },
  {
    num: "03",
    title: "旅館・寺社・店舗の実績多数",
    desc: "格式ある空間の施工には特別な配慮が必要です。旅館客室・本堂・社務所・飲食店の座敷など、特殊空間の施工に豊富な実績があります。",
  },
  {
    num: "04",
    title: "内装・原状回復まで一括相談",
    desc: "畳だけでなく、クロス・床材・建具まで一括でご依頼いただけます。複数業者との調整の手間がなく、空間全体を整えられます。",
  },
  {
    num: "05",
    title: "現地確認から丁寧な見積もり",
    desc: "お見積もりは無料。現地を実際に確認し、状態・素材・ご予算に合わせた適切な施工方法と価格をご提案します。",
  },
  {
    num: "06",
    title: "継続案件・複数物件にも対応",
    desc: "管理会社・賃貸オーナー様の継続案件にも対応。退去のたびに複数業者を探す手間を省き、スムーズな物件維持管理を支援します。",
  },
  {
    num: "07",
    title: "素材・予算・用途に合わせた提案",
    desc: "清潔感・耐久性・コスト・見た目を踏まえ、お客様の用途に最適な素材と施工方法をご提案します。",
  },
  {
    num: "08",
    title: "丁寧な施工と確認・引き渡し",
    desc: "施工後の確認を徹底し、仕上がりに満足いただいてから引き渡します。疑問や不安は遠慮なくご相談ください。",
  },
];

const TIMING_ITEMS = [
  { sign: "ささくれが目立つ", recommended: "裏返し or 表替え", desc: "畳表の繊維がほつれてきたら、裏返しか表替えのタイミングです。" },
  { sign: "色あせ・変色", recommended: "表替え", desc: "日焼けや使用により変色が進んだ場合は表替えで清潔感を取り戻せます。" },
  { sign: "沈み・へたり", recommended: "新調", desc: "踏み込んだときに沈む感触は畳床の劣化サイン。新調が必要です。" },
  { sign: "カビ・ダニの臭い", recommended: "新調 or 表替え", desc: "カビ・ダニが深部まで進んでいる場合は新調を。表面のみなら表替えで対応できます。" },
  { sign: "退去後の交換", recommended: "新調 or 表替え", desc: "入居者の入れ替わり時は、状態に応じて表替えか新調で清潔な状態に戻します。" },
  { sign: "旅館・店舗の印象改善", recommended: "表替え or 新調", desc: "繁忙期前・リニューアルに合わせた施工で、空間の品質を維持します。" },
  { sign: "寺社の行事前整備", recommended: "新調 or 表替え", desc: "法要・祭礼などの行事前に整備することで、格式ある空間を保ちます。" },
  { sign: "ペット・子どもの対策", recommended: "和紙畳 or 樹脂畳", desc: "傷・汚れに強い素材への変更で、長く清潔に使えます。" },
];

const PRICE_ROWS = [
  { service: "畳 裏返し", price: "3,300円〜", unit: "1枚あたり", note: "2〜3年使用の畳表に対応" },
  { service: "畳 表替え", price: "5,500円〜", unit: "1枚あたり", note: "素材により変動" },
  { service: "畳 新調", price: "15,000円〜", unit: "1枚あたり", note: "畳床+畳表+縁" },
  { service: "縁なし畳（和紙）", price: "8,000円〜", unit: "1枚あたり", note: "半畳・1畳サイズあり" },
  { service: "縁なし畳（樹脂）", price: "10,000円〜", unit: "1枚あたり", note: "水拭き可能タイプ" },
  { service: "クロス張替え", price: "800円〜", unit: "m²あたり", note: "壁・天井別途" },
  { service: "内装工事・床材", price: "別途見積もり", unit: "—", note: "現場確認後にご提示" },
  { service: "原状回復工事", price: "別途見積もり", unit: "—", note: "現場状況・範囲により変動" },
];

const FLOW_STEPS = [
  { num: "01", title: "お問い合わせ", desc: "フォーム・電話・LINEからご連絡ください。お見積もりは無料です。", sub: "法人の方は物件情報・概要をお知らせください。" },
  { num: "02", title: "現地確認", desc: "ご希望日程に現地をご訪問します。畳・内装の状態を確認し、最適な施工方法をご提案します。", sub: "複数物件・大規模案件は日程を調整します。" },
  { num: "03", title: "お見積もり・ご提案", desc: "現地確認後、素材・施工方法・金額をわかりやすくご提示します。ご納得いただいてからのご依頼です。", sub: "追加費用が発生する場合は事前にご説明します。" },
  { num: "04", title: "施工日のご調整", desc: "ご都合に合わせて施工日を設定します。旅館・管理物件の場合は稼働状況に合わせた計画を立てます。", sub: "" },
  { num: "05", title: "施工", desc: "丁寧に施工を行います。養生・清掃も含めて対応します。", sub: "複数部屋・大規模工事は担当者が進捗をご報告します。" },
  { num: "06", title: "確認・引き渡し", desc: "施工後にお客様と仕上がりを確認します。ご満足いただいてから引き渡しです。", sub: "管理会社様には写真付き報告書を提出します。" },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: "畳の表替え・新調から内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナー。",
  "@id": "https://nihontatami.jp",
  url: "https://nihontatami.jp",
  telephone: SITE_TEL,
  priceRange: "¥¥",
  servesCuisine: null,
  areaServed: {
    "@type": "Country",
    name: "Japan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "畳・内装工事サービス",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳表替え" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳新調" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "内装工事" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "原状回復工事" } },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />

      {/* 1. Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-sumi">
        <div className="absolute inset-0 tatami-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-sumi via-sumi/90 to-transparent" />

        {/* 右側背景画像 */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <Image
            src="/images/hero-tatami.jpg"
            alt="和室の畳"
            fill
            className="object-cover opacity-40"
            priority
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-sumi/60" />
        </div>

        {/* 縦書き装飾 */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6">
          {["畳", "内", "装", "原", "状", "回", "復"].map((char, i) => (
            <span
              key={i}
              className="text-white/10 text-xs tracking-[0.5em]"
              style={{ fontFamily: "var(--font-serif)", writingMode: "vertical-rl" }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-xs text-kincya tracking-[0.35em] mb-7 uppercase">Nihon Tatami Partners</p>
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
            >
              畳から、<br />
              空間の価値を<br />
              <span className="text-kincya">整える。</span>
            </h1>
            <p className="text-sm text-white/60 leading-relaxed mb-3 max-w-lg">
              住宅・旅館・寺社・店舗まで。<br />
              畳と内装の専門パートナー。
            </p>
            <p className="text-xs text-white/40 leading-relaxed mb-10 max-w-lg">
              畳の表替え・新調を中心に、内装工事・原状回復まで一括でご相談いただけます。
              BtoC・BtoBどちらにも対応。不動産会社・管理会社様の継続案件も承ります。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <Link
                href="/contact"
                className="inline-block bg-kincya text-white text-sm px-8 py-4 tracking-wider hover:bg-do transition-colors duration-300 text-center"
              >
                無料見積もりを依頼する
              </Link>
              <Link
                href="/contact#business"
                className="inline-block border border-white/30 text-white text-sm px-8 py-4 tracking-wider hover:bg-white/10 transition-colors duration-300 text-center"
              >
                法人・管理会社のご相談
              </Link>
              <Link
                href="/works"
                className="inline-block text-white/60 text-sm px-8 py-4 tracking-wider hover:text-white transition-colors duration-300 text-center underline underline-offset-4"
              >
                施工事例を見る
              </Link>
            </div>

            {/* 数字 */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md">
              {[
                { num: "3,000+", label: "年間施工件数" },
                { num: "4.8", label: "お客様満足度" },
                { num: "20+", label: "対応サービス" },
              ].map((n) => (
                <div key={n.label}>
                  <p className="text-2xl text-white mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>{n.num}</p>
                  <p className="text-xs text-white/40 tracking-wide">{n.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. コンセプト */}
      <section className="py-20 bg-kiji">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-5 uppercase">Our Concept</p>
              <h2
                className="text-3xl sm:text-4xl text-sumi mb-8 leading-snug"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                畳は、空間の印象と<br />
                資産価値を左右する。
              </h2>
              <div className="space-y-5 text-sm text-sumi/70 leading-relaxed">
                <p>
                  畳は単なる床材ではありません。空間の清潔感・香り・印象、そして建物の資産価値を左右する重要な要素です。
                  私たちはその重みを知っているからこそ、畳の施工に誠実に向き合います。
                </p>
                <p>
                  日本畳パートナーズは、一般住宅の和室リフレッシュから、旅館客室の格式維持、
                  寺社の本堂整備、賃貸物件の空室対策、不動産売買前の印象改善まで、
                  「畳を軸にした空間整備の専門パートナー」として幅広くご支援します。
                </p>
                <p>
                  個人のお客様にも、法人・管理会社様にも。規模や用途を問わず、
                  最適な素材と施工でお応えします。
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about" className="text-sm text-ai hover:underline underline-offset-4 tracking-wide">
                  私たちについて →
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 sm:h-96 bg-sumi/10 overflow-hidden">
                <Image
                  src="/images/concept-tatami.jpg"
                  alt="畳の空間"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* 装飾 */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-kincya/20" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-kincya/10" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. 選ばれる理由 */}
      <section className="py-20 bg-shiro tatami-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Why Choose Us</p>
            <h2
              className="text-3xl text-sumi"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
            >
              選ばれる8つの理由
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REASONS.map((r) => (
              <div key={r.num} className="bg-white border border-border p-6 hover:border-kincya/30 transition-colors duration-300">
                <p className="text-3xl text-kiji-dark mb-4" style={{ fontFamily: "var(--font-serif)" }}>{r.num}</p>
                <h3 className="text-sm text-sumi mb-3 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>{r.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. サービス一覧 */}
      <section className="py-20 bg-cloud/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Services</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              サービス一覧
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5 mb-4" />
            <p className="text-sm text-sumi/50">畳工事を軸に、内装工事・原状回復まで一括でご相談いただけます。</p>
          </div>

          {/* 畳工事 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-sm text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>畳工事</h3>
              <div className="flex-1 h-px bg-border" />
              <Link href="/services/tatami" className="text-xs text-ai hover:underline">すべて見る →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {TATAMI_SERVICES.slice(0, 5).map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group bg-white border border-border hover:border-kincya/30 transition-all duration-300 p-4 text-center"
                >
                  <div className="w-full h-20 bg-kiji mb-3 overflow-hidden relative">
                    <Image src={s.image} alt={s.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="200px" />
                  </div>
                  {s.price && <p className="text-xs text-kincya mb-1">{s.price}</p>}
                  <p className="text-xs text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* 内装工事 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-sm text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>内装工事</h3>
              <div className="flex-1 h-px bg-border" />
              <Link href="/interior" className="text-xs text-ai hover:underline">すべて見る →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {INTERIOR_SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group bg-white border border-border hover:border-kincya/30 transition-all duration-300 p-4 text-center"
                >
                  <p className="text-xs text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                  {s.price && <p className="text-xs text-kincya mt-1">{s.price}</p>}
                </Link>
              ))}
            </div>
          </div>

          {/* 原状回復 */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-sm text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>原状回復</h3>
              <div className="flex-1 h-px bg-border" />
              <Link href="/restoration" className="text-xs text-ai hover:underline">すべて見る →</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {RESTORATION_SERVICES.map((s) => (
                <Link
                  key={s.id}
                  href={s.href}
                  className="group bg-white border border-border hover:border-kincya/30 transition-all duration-300 p-4 text-center"
                >
                  <p className="text-xs text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ターゲット別導線 */}
      <section className="py-20 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">For Your Needs</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              お客様のシーン別にご案内
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5 mb-4" />
            <p className="text-sm text-sumi/50">個人のお客様から不動産会社・旅館・寺社の方まで、目的に合わせた専用ページをご用意しています。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TARGETS.map((target, i) => (
              <TargetCard key={target.id} target={target} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. 畳替えのタイミング */}
      <section className="py-20 bg-kiji">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Timing Guide</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              畳替えのサインと<br className="sm:hidden" />最適な施工方法
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIMING_ITEMS.map((item, i) => (
              <div key={i} className="bg-white border border-border p-5">
                <p className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.sign}
                </p>
                <div className="inline-block border border-kincya/30 text-kincya text-xs px-2 py-0.5 mb-3">
                  {item.recommended}
                </div>
                <p className="text-xs text-sumi/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/needs/sasakure" className="text-sm text-ai hover:underline underline-offset-4">
              お悩み別のご案内はこちら →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. 法人・不動産向けセクション */}
      <section className="py-20 bg-sumi text-white relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-5 uppercase">For Business</p>
              <h2
                className="text-3xl sm:text-4xl text-white mb-8 leading-snug"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                法人・不動産管理の<br />
                畳・内装工事を<br />
                まとめてご相談ください。
              </h2>
              <div className="space-y-4 text-sm text-white/70 leading-relaxed mb-8">
                <p>
                  賃貸物件の退去後原状回復、売買前の内装整備、旅館客室の定期メンテナンス、
                  寺院・神社の行事前整備、店舗の和空間づくりまで。
                </p>
                <p>
                  複数物件・複数部屋の継続案件にも対応しています。
                  退去のたびに業者を探す手間を省き、一本化してご相談いただけます。
                </p>
              </div>
              <Link
                href="/business"
                className="inline-block border border-kincya text-kincya text-sm px-8 py-4 tracking-wider hover:bg-kincya hover:text-white transition-all duration-300"
              >
                法人向けサービスを見る
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { title: "空室対策・入居前整備", desc: "退去後の畳・クロス・床をまとめて原状回復。和紙畳・樹脂畳への変更でペット可物件への転換も。", href: "/business/vacancy-measures" },
                { title: "不動産売買前の内装整備", desc: "売却前の印象改善、内覧での好感度アップ。畳・クロス・床の一括整備で資産価値を高めます。", href: "/business/real-estate" },
                { title: "旅館・宿泊施設の客室改修", desc: "繁忙期前の大量施工、格式に合わせた素材選定。稼働スケジュールに合わせた施工計画を立てます。", href: "/business/ryokan" },
                { title: "寺院・神社の畳整備", desc: "本堂・客殿・控室など格式ある空間の畳工事。行事前の整備にも対応します。", href: "/business/temple-shrine" },
                { title: "管理会社・オーナーの継続対応", desc: "複数物件・複数棟の一括管理。写真付き施工報告書の発行、スピーディーな現場対応。", href: "/business/property-management" },
                { title: "店舗の和空間づくり", desc: "飲食店・旅館の座敷・小上がりの新規設置、改修、退去後の原状回復まで対応。", href: "/business/store" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group flex items-start justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 p-5 gap-4"
                >
                  <div>
                    <h3 className="text-sm text-white mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-white/30 text-xs shrink-0 mt-1 group-hover:text-kincya transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 施工事例 */}
      <section className="py-20 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Works</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              施工事例
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5 mb-4" />
            <p className="text-sm text-sumi/50">住宅・旅館・寺社・店舗・賃貸物件など、さまざまな施工実績をご紹介します。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKS.slice(0, 8).map((work, i) => (
              <WorksCard key={work.id} work={work} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/works" className="inline-block border border-sumi text-sumi text-sm px-10 py-3 tracking-wider hover:bg-sumi hover:text-white transition-all duration-300">
              施工事例をすべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* 9. 料金 */}
      <section className="py-20 bg-cloud/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Price</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              料金の目安
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5 mb-4" />
            <p className="text-sm text-sumi/50">素材・枚数・現場の状況により変動します。詳細は無料見積もりにてご確認ください。</p>
          </div>
          <div className="bg-white border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="text-left text-xs py-3 px-5 font-normal tracking-wide">サービス</th>
                  <th className="text-right text-xs py-3 px-5 font-normal tracking-wide">料金目安</th>
                  <th className="text-right text-xs py-3 px-5 font-normal tracking-wide hidden sm:table-cell">単位</th>
                  <th className="text-left text-xs py-3 px-5 font-normal tracking-wide hidden md:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {PRICE_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-kiji/30 transition-colors">
                    <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                    <td className="text-sm py-3.5 px-5 text-right text-kincya">{row.price}</td>
                    <td className="text-xs py-3.5 px-5 text-right text-sumi/50 hidden sm:table-cell">{row.unit}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/50 hidden md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/40 mt-4 text-center">※ 表示価格は税込の目安です。法人・大口案件は個別にお見積もりします。</p>
          <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/price" className="inline-block text-sm text-ai hover:underline underline-offset-4 tracking-wide">
              詳細な料金ページを見る →
            </Link>
            <Link href="/contact" className="inline-block bg-sumi text-white text-sm px-8 py-3 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              無料見積もりを依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* 10. ご依頼の流れ */}
      <section className="py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Process</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              ご依頼の流れ
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5" />
          </div>
          <div className="space-y-0">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.num} className="flex gap-6 sm:gap-10 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-kincya/40 flex items-center justify-center shrink-0">
                    <span className="text-xs text-kincya" style={{ fontFamily: "var(--font-serif)" }}>{step.num}</span>
                  </div>
                  {i < FLOW_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</h3>
                  <p className="text-sm text-sumi/70 leading-relaxed">{step.desc}</p>
                  {step.sub && (
                    <p className="text-xs text-sumi/40 mt-2 border-l border-kincya/30 pl-3">{step.sub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/flow" className="text-sm text-ai hover:underline underline-offset-4">
              詳しい流れを確認する →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 bg-kiji">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">FAQ</p>
            <h2 className="text-3xl text-sumi" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
              よくあるご質問
            </h2>
            <div className="w-12 h-px bg-kincya/60 mx-auto mt-5" />
          </div>
          <div className="bg-white border border-border px-6 py-2">
            <FaqSection items={FAQ_ITEMS} limit={8} />
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-sm text-ai hover:underline underline-offset-4">
              すべてのFAQを見る（{FAQ_ITEMS.length}件）→
            </Link>
          </div>
        </div>
      </section>

      {/* 12. ブログ・専門コラム */}
      <section className="py-20 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 専門コラム */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Knowledge Column</p>
                  <h2 className="text-xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>専門コラム</h2>
                  <p className="text-xs text-sumi/50 mt-1">畳・内装・原状回復の専門知識をわかりやすく解説</p>
                </div>
                <Link href="/column" className="text-xs text-ai hover:underline shrink-0">すべて見る →</Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {COLUMN_ARTICLES.slice(0, 3).map((article, i) => (
                  <ColumnCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            </div>

            {/* ブログ */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Blog / News</p>
                  <h2 className="text-xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>ブログ・お知らせ</h2>
                  <p className="text-xs text-sumi/50 mt-1">施工レポート・お知らせ・スタッフブログ</p>
                </div>
                <Link href="/blog" className="text-xs text-ai hover:underline shrink-0">すべて見る →</Link>
              </div>
              <div className="space-y-4">
                {[
                  { date: "2025年8月1日", title: "夏の繁忙期前に旅館客室8室の畳表替えを実施しました", category: "施工レポート" },
                  { date: "2025年7月15日", title: "賃貸物件の原状回復工事（和紙畳への変更）", category: "施工レポート" },
                  { date: "2025年7月1日", title: "寺院の本堂・客殿の畳新調工事が完成しました", category: "施工レポート" },
                  { date: "2025年6月20日", title: "お盆前の畳替えのご依頼を承っています", category: "お知らせ" },
                ].map((post, i) => (
                  <Link
                    key={i}
                    href="/blog"
                    className="group flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0 hover:opacity-70 transition-opacity"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs border border-igusa/30 text-igusa px-2 py-0.5">{post.category}</span>
                        <span className="text-xs text-sumi/40">{post.date}</span>
                      </div>
                      <p className="text-sm text-sumi leading-snug group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                        {post.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. 対応エリア */}
      <section className="py-16 bg-kiji/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Service Area</p>
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            対応エリア
          </h2>
          <p className="text-sm text-sumi/60 leading-relaxed mb-6">
            対応エリアはご相談ください。旅館・寺社・大規模法人案件については、
            遠方への対応も承ります。
          </p>
          <Link href="/area" className="text-sm text-ai hover:underline underline-offset-4">
            対応エリア詳細を確認する →
          </Link>
        </div>
      </section>

      {/* 14. お問い合わせ */}
      <CTASection
        title="まずはお気軽にご相談ください"
        subtitle="畳の張替え・内装工事・原状回復まで、無料でお見積もりいたします。法人・管理会社様のご相談もお待ちしています。"
        variant="dark"
      />
    </>
  );
}
