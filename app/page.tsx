import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_TEL, SITE_URL } from "@/lib/site";
import { TATAMI_SERVICES, INTERIOR_SERVICES, RESTORATION_SERVICES } from "@/data/services";
import { FAQ_ITEMS } from "@/data/faq";
import { WORKS } from "@/data/works";
import { COLUMN_ARTICLES } from "@/data/column";
import { TARGETS } from "@/data/targets";
import CTASection from "@/components/ui/CTASection";
import WorksCard from "@/components/ui/WorksCard";
import ColumnCard from "@/components/ui/ColumnCard";
import TargetCard from "@/components/ui/TargetCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IgusaLine from "@/components/ui/IgusaLine";
import SectionLabel from "@/components/ui/SectionLabel";
import FAQTabs from "@/components/ui/FAQTabs";

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
    title: "旅館・寺社・店舗のご相談にも対応",
    desc: "格式ある空間の施工には特別な配慮が必要です。旅館客室・本堂・社務所・飲食店の座敷など、特殊空間の畳工事もお気軽にご相談ください。",
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
    title: "丁寧な施工と仕上がり確認",
    desc: "施工後に仕上がりを確認のうえ引き渡します。疑問や不安があれば遠慮なくご相談ください。",
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
  { service: "畳 裏返し", price: "3,300円〜", unit: "1枚", note: "2〜3年使用の畳表に対応" },
  { service: "畳 表替え", price: "5,500円〜", unit: "1枚", note: "素材により変動" },
  { service: "畳 新調", price: "15,000円〜", unit: "1枚", note: "畳床+畳表+縁" },
  { service: "縁なし畳（和紙）", price: "8,000円〜", unit: "1枚", note: "半畳・1畳サイズあり" },
  { service: "縁なし畳（樹脂）", price: "10,000円〜", unit: "1枚", note: "水拭き可能タイプ" },
  { service: "クロス張替え", price: "800円〜", unit: "m²", note: "壁・天井別途" },
  { service: "内装工事・床材", price: "別途見積もり", unit: "—", note: "現場確認後にご提示" },
  { service: "原状回復工事", price: "別途見積もり", unit: "—", note: "現場状況・範囲により変動" },
];

const FLOW_STEPS = [
  { num: "01", title: "お問い合わせ", desc: "サイト内のお問い合わせフォームよりご連絡ください。お見積もりは無料です。", sub: "法人の方は物件情報・概要をお知らせください。" },
  { num: "02", title: "現地確認", desc: "ご希望日程に現地をご訪問します。畳・内装の状態を確認し、最適な施工方法をご提案します。", sub: "複数物件・大規模案件は日程を調整します。" },
  { num: "03", title: "お見積もり・ご提案", desc: "現地確認後、素材・施工方法・金額をわかりやすくご提示します。ご納得いただいてからのご依頼です。", sub: "追加費用が発生する場合は事前にご説明します。" },
  { num: "04", title: "施工日のご調整", desc: "ご都合に合わせて施工日を設定します。旅館・管理物件の場合は稼働状況に合わせた計画を立てます。", sub: "" },
  { num: "05", title: "施工", desc: "丁寧に施工を行います。養生・清掃も含めて対応します。", sub: "複数部屋・大規模工事は担当者が進捗をご報告します。" },
  { num: "06", title: "確認・引き渡し", desc: "施工後にお客様と仕上がりを確認します。ご満足いただいてから引き渡しです。", sub: "管理会社様には写真付き報告書を提出します。" },
];

const _hasTel = (SITE_TEL as string).trim() !== "";
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: "畳の表替え・新調から内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナー。",
  "@id": `${SITE_URL}`,
  url: `${SITE_URL}`,
  ...(_hasTel ? { telephone: SITE_TEL } : {}),
  priceRange: "¥¥",
  areaServed: { "@type": "Country", name: "Japan" },
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

      {/* ===== 1. HERO ===== */}
      <section
        className="relative -mt-16 flex flex-col overflow-hidden bg-sumi"
        style={{ minHeight: "100svh" }}
      >
        {/* Tatami grid overlay */}
        <div className="absolute inset-0 tatami-dark" aria-hidden="true" />

        {/* Gradient layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,28,26,0.97) 0%, rgba(30,28,26,0.82) 50%, rgba(30,44,58,0.70) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Background image — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block" aria-hidden="true">
          <Image
            src="/images/nihon-tatami/hero/hero-tatami-premium.png"
            alt="和室の畳空間"
            fill
            className="object-cover"
            priority
            sizes="52vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(30,28,26,1) 0%, rgba(30,28,26,0.5) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Decorative vertical text — far right */}
        <div
          className="absolute right-5 top-0 bottom-0 hidden xl:flex items-center"
          aria-hidden="true"
          style={{ writingMode: "vertical-rl", letterSpacing: "2.5em", fontFamily: "var(--font-serif)" }}
        >
          <span className="text-white/[0.04] text-6xl select-none">畳内装原状回復</span>
        </div>

        {/* Content */}
        <div className="relative flex-1 flex items-center w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="max-w-lg xl:max-w-xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-9">
              <div className="w-7 h-px bg-kincya/75" />
              <p className="text-[10px] text-kincya tracking-[0.45em] uppercase">
                Nihon Tatami Partners
              </p>
            </div>

            {/* H1 */}
            <h1
              className="text-[2.75rem] sm:text-[3.5rem] xl:text-[4.25rem] text-white leading-[1.08] mb-8"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
            >
              畳から、<br />
              空間の価値を<br />
              <span style={{ color: "#B88942" }}>整える。</span>
            </h1>

            {/* Separator */}
            <IgusaLine light className="mb-7" />

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed mb-3 max-w-sm">
              住宅・旅館・寺社・店舗まで。<br />
              畳と内装の専門パートナー。
            </p>
            <p className="text-xs text-white/30 leading-relaxed max-w-sm">
              畳の表替え・新調を中心に、内装工事・原状回復まで一括でご相談いただけます。
              BtoC・BtoBどちらにも対応。不動産会社・管理会社様の継続案件も承ります。
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative pb-10 flex flex-col items-center gap-3" aria-hidden="true">
          <p className="text-[9px] text-white/25 tracking-[0.5em] uppercase">Scroll</p>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }}
          />
        </div>
      </section>

      {/* ===== 2. STATS BAND — 実績確定まで非表示 ===== */}

      {/* ===== 3. CONCEPT ===== */}
      <section className="py-24 sm:py-32 bg-kiji relative overflow-hidden">
        <div className="absolute inset-0 tatami-bg" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Left content */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.05}>
                <SectionLabel en="Our Concept" className="mb-6" />
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <h2
                  className="text-3xl sm:text-4xl text-sumi mb-8 leading-snug"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
                >
                  畳は、空間の印象と<br />
                  資産価値を左右する。
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.22}>
                <div className="space-y-5 text-sm text-sumi/65 leading-[2]">
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
                  <Link
                    href="/about"
                    className="text-sm text-ai hover:text-ai-light transition-colors tracking-wide underline underline-offset-4 decoration-ai/30"
                  >
                    私たちについて →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right image */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={0.1} direction="right">
                <div className="relative">
                  <div className="relative h-72 sm:h-96 bg-sumi/10 overflow-hidden">
                    <Image
                      src="/images/nihon-tatami/tatami/tatami-room-traditional-01.png"
                      alt="畳の空間"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className="absolute -top-4 -right-4 w-20 h-20 border border-kincya/20"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-14 h-14"
                    style={{ backgroundColor: "rgba(184,137,66,0.08)" }}
                    aria-hidden="true"
                  />
                  {/* Vertical label */}
                  <div
                    className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:block"
                    style={{ writingMode: "vertical-rl", fontFamily: "var(--font-serif)" }}
                    aria-hidden="true"
                  >
                    <span className="text-[10px] text-kincya/40 tracking-[0.4em] uppercase">
                      Concept
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. REASONS — asymmetric tatami grid ===== */}
      <section className="py-24 sm:py-32 bg-shiro tatami-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <ScrollReveal>
            <div className="text-center mb-16">
              <SectionLabel en="Why Choose Us" className="justify-center mb-4" />
              <h2
                className="text-3xl text-sumi"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                選ばれる8つの理由
              </h2>
              <IgusaLine className="mx-auto mt-5" />
            </div>
          </ScrollReveal>

          {/* Asymmetric grid inspired by tatami layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

            {/* 01 — Featured dark card */}
            <ScrollReveal delay={0.05} className="md:col-span-5">
              <div className="h-full bg-sumi text-white p-8 relative overflow-hidden">
                <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
                <div className="relative">
                  <p
                    className="text-6xl text-white/8 mb-5 leading-none select-none"
                    style={{ fontFamily: "var(--font-serif)" }}
                    aria-hidden="true"
                  >
                    01
                  </p>
                  <h3
                    className="text-lg text-white mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {REASONS[0].title}
                  </h3>
                  <p className="text-xs text-white/55 leading-relaxed">{REASONS[0].desc}</p>
                  <div className="mt-6 w-8 h-px bg-kincya/60" aria-hidden="true" />
                </div>
              </div>
            </ScrollReveal>

            {/* 02 */}
            <ScrollReveal delay={0.1} className="md:col-span-4">
              <div className="h-full bg-white border border-border p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-kiji-dark mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  02
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[1].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[1].desc}</p>
              </div>
            </ScrollReveal>

            {/* 03 */}
            <ScrollReveal delay={0.15} className="md:col-span-3">
              <div className="h-full bg-kiji border border-kiji-dark/40 p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-sumi/10 mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  03
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[2].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[2].desc}</p>
              </div>
            </ScrollReveal>

            {/* 04 */}
            <ScrollReveal delay={0.1} className="md:col-span-4">
              <div className="h-full bg-white border border-border p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-kiji-dark mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  04
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[3].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[3].desc}</p>
              </div>
            </ScrollReveal>

            {/* 05 — second feature */}
            <ScrollReveal delay={0.15} className="md:col-span-4">
              <div className="h-full bg-ai text-white p-6 hover:bg-ai-light transition-colors duration-300">
                <p
                  className="text-4xl text-white/10 mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  05
                </p>
                <h3 className="text-sm text-white mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[4].title}
                </h3>
                <p className="text-xs text-white/55 leading-relaxed">{REASONS[4].desc}</p>
              </div>
            </ScrollReveal>

            {/* 06 */}
            <ScrollReveal delay={0.2} className="md:col-span-4">
              <div className="h-full bg-white border border-border p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-kiji-dark mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  06
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[5].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[5].desc}</p>
              </div>
            </ScrollReveal>

            {/* 07 */}
            <ScrollReveal delay={0.1} className="md:col-span-6">
              <div className="h-full bg-kiji border border-kiji-dark/40 p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-sumi/10 mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  07
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[6].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[6].desc}</p>
              </div>
            </ScrollReveal>

            {/* 08 */}
            <ScrollReveal delay={0.15} className="md:col-span-6">
              <div className="h-full bg-white border border-border p-6 hover:border-kincya/30 transition-colors duration-300">
                <p
                  className="text-4xl text-kiji-dark mb-4 leading-none select-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                  aria-hidden="true"
                >
                  08
                </p>
                <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                  {REASONS[7].title}
                </h3>
                <p className="text-xs text-sumi/55 leading-relaxed">{REASONS[7].desc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 5. SERVICES ===== */}
      <section className="py-24 sm:py-32 bg-kiji">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel en="Services" className="mb-4" />
              <h2
                className="text-3xl text-sumi mb-2"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                サービス一覧
              </h2>
              <p className="text-sm text-sumi/50 mt-3">畳工事を軸に、内装工事・原状回復まで一括でご相談いただけます。</p>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          {/* Tatami services — primary, larger */}
          <div className="mb-14">
            <ScrollReveal delay={0.05}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-sm text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                  畳工事
                </h3>
                <div className="flex-1 h-px bg-border/60" />
                <Link href="/services/tatami" className="text-xs text-ai hover:underline">すべて見る →</Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {TATAMI_SERVICES.slice(0, 5).map((s, i) => (
                <ScrollReveal key={s.id} delay={0.05 + i * 0.06}>
                  <Link
                    href={s.href}
                    className="group block bg-white border border-border hover:border-kincya/40 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="relative h-24 bg-kiji overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="200px"
                      />
                      {/* Heri accent on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kincya scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                    <div className="p-3 text-center">
                      {s.price && <p className="text-[10px] text-kincya mb-0.5">{s.price}</p>}
                      <p className="text-xs text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Interior + Restoration in a 2-col layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Interior */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-border p-6">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                    内装工事
                  </h3>
                  <Link href="/interior" className="text-xs text-ai hover:underline">すべて見る →</Link>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {INTERIOR_SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      className="group p-2.5 border border-border hover:border-kincya/30 text-center transition-colors"
                    >
                      <p className="text-[11px] text-sumi group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                        {s.name}
                      </p>
                      {s.price && <p className="text-[10px] text-kincya mt-0.5">{s.price}</p>}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Restoration */}
            <ScrollReveal delay={0.15}>
              <div className="bg-sumi text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-sm text-white tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                      原状回復
                    </h3>
                    <Link href="/restoration" className="text-xs text-kincya hover:underline">すべて見る →</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {RESTORATION_SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        href={s.href}
                        className="group p-3 border border-white/10 hover:border-white/25 text-center transition-colors"
                      >
                        <p className="text-[11px] text-white/75 group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                          {s.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <p className="text-xs text-white/35 mt-4 leading-relaxed">
                    賃貸退去後・店舗退去・管理会社向け継続案件に対応。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== 6. AUDIENCE CARDS ===== */}
      <section className="py-24 sm:py-32 bg-shiro">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel en="For Your Needs" className="mb-4" />
              <h2
                className="text-3xl text-sumi mb-2"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                お客様のシーン別にご案内
              </h2>
              <p className="text-sm text-sumi/50 mt-3">
                個人のお客様から不動産会社・旅館・寺社の方まで、目的に合わせた専用ページをご用意しています。
              </p>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TARGETS.map((target, i) => (
              <TargetCard key={target.id} target={target} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== 7. TIMING GUIDE ===== */}
      <section className="py-24 sm:py-32 bg-kiji">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel en="Timing Guide" className="mb-4" />
              <h2
                className="text-3xl text-sumi"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                畳替えのサインと<br className="sm:hidden" />最適な施工方法
              </h2>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TIMING_ITEMS.map((item, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 0.07, 0.35)}>
                <div className="bg-white border border-border p-5 h-full hover:border-kincya/30 transition-colors duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs text-sumi/30 mt-0.5 shrink-0 select-none" style={{ fontFamily: "var(--font-serif)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-sumi leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                      {item.sign}
                    </p>
                  </div>
                  <div className="inline-block border border-kincya/30 text-kincya text-[10px] px-2 py-0.5 mb-3 tracking-wide">
                    {item.recommended}
                  </div>
                  <p className="text-xs text-sumi/55 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="text-center mt-10">
              <Link href="/needs/sasakure" className="text-sm text-ai hover:underline underline-offset-4">
                お悩み別のご案内はこちら →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 8. BUSINESS PANEL ===== */}
      <section className="py-24 sm:py-32 bg-ai relative overflow-hidden">
        <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(30,44,58,0.6) 0%, rgba(30,28,26,0.4) 100%)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* Left */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <SectionLabel en="For Business" light className="mb-6" />
                <h2
                  className="text-3xl sm:text-4xl text-white mb-7 leading-snug"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
                >
                  法人・不動産管理の<br />
                  畳・内装工事を<br />
                  まとめてご相談ください。
                </h2>
                <div className="space-y-4 text-sm text-white/60 leading-relaxed mb-10">
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
                  className="inline-block border border-kincya text-kincya text-xs px-8 py-4 tracking-[0.2em] hover:bg-kincya hover:text-white transition-all duration-300"
                >
                  法人向けサービスを見る
                </Link>
                <div className="mt-6">
                  <Link
                    href="/contact#business"
                    className="inline-block text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide underline underline-offset-4 decoration-white/20"
                  >
                    法人・管理会社のご相談はこちら →
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — business links */}
            <div className="lg:col-span-7 space-y-2">
              {[
                { title: "空室対策・入居前整備", desc: "退去後の畳・クロス・床をまとめて原状回復。和紙畳・樹脂畳への変更でペット可物件への転換も。", href: "/business/vacancy-measures" },
                { title: "不動産売買前の内装整備", desc: "売却前の印象改善、内覧での好感度アップ。畳・クロス・床の一括整備で資産価値を高めます。", href: "/business/real-estate" },
                { title: "旅館・宿泊施設の客室改修", desc: "繁忙期前の大量施工、格式に合わせた素材選定。稼働スケジュールに合わせた施工計画を立てます。", href: "/business/ryokan" },
                { title: "寺院・神社の畳整備", desc: "本堂・客殿・控室など格式ある空間の畳工事。行事前の整備にも対応します。", href: "/business/temple-shrine" },
                { title: "管理会社・オーナーの継続対応", desc: "複数物件・複数棟の一括管理。写真付き施工報告書の発行、スピーディーな現場対応。", href: "/business/property-management" },
                { title: "店舗の和空間づくり", desc: "飲食店・旅館の座敷・小上がりの新規設置、改修、退去後の原状回復まで対応。", href: "/business/store" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={0.05 + i * 0.06}>
                  <Link
                    href={item.href}
                    className="group flex items-start justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 p-5 gap-4"
                  >
                    <div>
                      <h3 className="text-sm text-white mb-1 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-white/25 text-xs shrink-0 mt-0.5 group-hover:text-kincya transition-colors duration-200">
                      →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. WORKS ===== */}
      <section className="py-24 sm:py-32 bg-shiro">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel en="Works" className="mb-4" />
              <h2
                className="text-3xl text-sumi mb-2"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                施工事例
              </h2>
              <p className="text-sm text-sumi/50 mt-3">
                住宅・旅館・寺社・店舗・賃貸物件など、さまざまな施工実績をご紹介します。
              </p>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKS.slice(0, 8).map((work, i) => (
              <WorksCard key={work.id} work={work} index={i} />
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/works"
                className="inline-block border border-sumi text-sumi text-xs px-10 py-3.5 tracking-[0.2em] hover:bg-sumi hover:text-white transition-all duration-300"
              >
                施工事例をすべて見る
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 10. PRICE ===== */}
      <section className="py-24 sm:py-32 bg-cloud">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="mb-14">
              <SectionLabel en="Price" className="mb-4" />
              <h2
                className="text-3xl text-sumi mb-2"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                料金の目安
              </h2>
              <p className="text-sm text-sumi/50 mt-3">
                素材・枚数・現場の状況により変動します。詳細は無料見積もりにてご確認ください。
              </p>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-[11px] py-3.5 px-5 font-normal tracking-wider">サービス</th>
                    <th className="text-right text-[11px] py-3.5 px-5 font-normal tracking-wider">料金目安</th>
                    <th className="text-right text-[11px] py-3.5 px-5 font-normal tracking-wider hidden sm:table-cell">単位</th>
                    <th className="text-left text-[11px] py-3.5 px-5 font-normal tracking-wider hidden md:table-cell">備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {PRICE_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-kiji/40 transition-colors duration-150">
                      <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                        {row.service}
                      </td>
                      <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                      <td className="text-xs py-3.5 px-5 text-right text-sumi/40 hidden sm:table-cell">{row.unit}</td>
                      <td className="text-xs py-3.5 px-5 text-sumi/40 hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/35 mt-3 text-center">
              ※ 表示価格は税込の目安です。法人・大口案件は個別にお見積もりします。
            </p>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/price"
                className="text-sm text-ai hover:underline underline-offset-4 tracking-wide"
              >
                詳細な料金ページを見る →
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-sumi text-white text-xs px-8 py-3 tracking-[0.2em] hover:bg-ai transition-colors duration-300"
              >
                無料見積もりを依頼する
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 11. FLOW ===== */}
      <section className="py-24 sm:py-32 bg-shiro">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel en="Process" className="mb-4" />
              <h2
                className="text-3xl text-sumi"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                ご依頼の流れ
              </h2>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

            <div className="space-y-0">
              {FLOW_STEPS.map((step, i) => (
                <ScrollReveal key={step.num} delay={i * 0.08}>
                  <div className="flex gap-8 pb-10 last:pb-0 relative">
                    <div className="shrink-0 flex flex-col items-center">
                      <div className="w-8 h-8 border border-kincya/50 bg-shiro flex items-center justify-center z-10 relative">
                        <span
                          className="text-[10px] text-kincya"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {step.num}
                        </span>
                      </div>
                    </div>
                    <div className="pt-1 pb-2">
                      <h3
                        className="text-base text-sumi mb-2"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-sumi/65 leading-relaxed">{step.desc}</p>
                      {step.sub && (
                        <p className="text-xs text-sumi/35 mt-2 border-l-2 border-kincya/30 pl-3 ml-0.5">
                          {step.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/flow"
                className="text-sm text-ai hover:underline underline-offset-4"
              >
                詳しい流れを確認する →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 12. FAQ ===== */}
      <section className="py-24 sm:py-32 bg-kiji">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="mb-14">
              <SectionLabel en="FAQ" className="mb-4" />
              <h2
                className="text-3xl text-sumi"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
              >
                よくあるご質問
              </h2>
              <IgusaLine className="mt-5" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FAQTabs items={FAQ_ITEMS} />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="text-center mt-8">
              <Link href="/faq" className="text-sm text-ai hover:underline underline-offset-4">
                すべてのFAQを見る（{FAQ_ITEMS.length}件）→
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 13. BLOG & COLUMN ===== */}
      <section className="py-24 sm:py-32 bg-shiro">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* SEO Column */}
            <div>
              <ScrollReveal>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <SectionLabel en="Knowledge Column" className="mb-3" />
                    <h2 className="text-xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                      専門コラム
                    </h2>
                    <p className="text-xs text-sumi/40 mt-1.5">
                      畳・内装・原状回復の専門知識をわかりやすく解説
                    </p>
                  </div>
                  <Link href="/column" className="text-xs text-ai hover:underline shrink-0">
                    すべて見る →
                  </Link>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 gap-4">
                {COLUMN_ARTICLES.slice(0, 3).map((article, i) => (
                  <ScrollReveal key={article.slug} delay={i * 0.08}>
                    <ColumnCard article={article} index={i} />
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Blog */}
            <div>
              <ScrollReveal delay={0.05}>
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <SectionLabel en="Blog / News" className="mb-3" />
                    <h2 className="text-xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                      ブログ・お知らせ
                    </h2>
                    <p className="text-xs text-sumi/40 mt-1.5">
                      施工レポート・お知らせ・スタッフブログ
                    </p>
                  </div>
                  <Link href="/blog" className="text-xs text-ai hover:underline shrink-0">
                    すべて見る →
                  </Link>
                </div>
              </ScrollReveal>
              <div className="space-y-0 border border-border">
                {[
                  { date: "2025年8月1日", title: "旅館客室8室の畳表替えを繁忙期前に実施しました", category: "施工レポート" },
                  { date: "2025年7月15日", title: "賃貸物件の原状回復工事（和紙畳への変更）", category: "施工レポート" },
                  { date: "2025年7月1日", title: "寺院の本堂・客殿の畳新調工事が完成しました", category: "施工レポート" },
                  { date: "2025年6月20日", title: "お盆前の畳替えのご依頼を承っています", category: "お知らせ" },
                ].map((post, i) => (
                  <ScrollReveal key={i} delay={0.05 + i * 0.07}>
                    <Link
                      href="/blog"
                      className="group flex items-start gap-4 p-5 border-b border-border last:border-0 hover:bg-kiji/30 transition-colors duration-200"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          <span className="text-[10px] border border-igusa/30 text-igusa px-2 py-0.5 tracking-wide">
                            {post.category}
                          </span>
                          <span className="text-[10px] text-sumi/35">{post.date}</span>
                        </div>
                        <p
                          className="text-sm text-sumi leading-snug group-hover:text-ai transition-colors duration-200 line-clamp-2"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {post.title}
                        </p>
                      </div>
                      <span className="text-sumi/20 text-xs shrink-0 mt-1 group-hover:text-kincya transition-colors duration-200">
                        →
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 14. AREA ===== */}
      <section className="py-16 bg-kiji/50 border-y border-border/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionLabel en="Service Area" className="justify-center mb-4" />
            <h2
              className="text-2xl text-sumi mb-4"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
            >
              対応エリア
            </h2>
            <p className="text-sm text-sumi/55 leading-relaxed mb-6">
              対応エリアはご相談ください。旅館・寺社・大規模法人案件については、
              遠方への対応も承ります。
            </p>
            <Link href="/area" className="text-sm text-ai hover:underline underline-offset-4">
              対応エリア詳細を確認する →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 15. FINAL CTA — two lanes ===== */}
      <section className="bg-sumi text-white relative overflow-hidden">
        <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2">

          {/* Lane 1: General */}
          <ScrollReveal direction="left">
            <div className="px-10 sm:px-16 py-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-[10px] text-kincya tracking-[0.4em] uppercase mb-5">For Individual</p>
              <h2
                className="text-2xl text-white mb-5 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                畳の張替え・内装工事の<br />
                ご相談はこちら
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-8">
                現地確認・お見積もりは無料です。素材・施工方法について丁寧にご説明します。
              </p>
              <Link
                href="/contact"
                className="inline-block bg-kincya text-white text-xs px-8 py-4 tracking-[0.2em] hover:bg-do transition-colors duration-300"
              >
                無料見積もりを依頼する
              </Link>
              <div className="mt-5">
                <a
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="text-sm text-white/40 hover:text-white/70 transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {SITE_TEL}
                </a>
                <span className="text-xs text-white/25 ml-3">9:00〜18:00</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Lane 2: Business */}
          <ScrollReveal direction="right">
            <div className="px-10 sm:px-16 py-20">
              <p className="text-[10px] text-white/35 tracking-[0.4em] uppercase mb-5">For Business</p>
              <h2
                className="text-2xl text-white mb-5 leading-snug"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                法人・管理会社様の<br />
                継続案件もご相談ください。
              </h2>
              <p className="text-sm text-white/55 leading-relaxed mb-8">
                複数物件・継続取引に対応。スピーディーな現地対応・写真付き報告書の発行。
              </p>
              <Link
                href="/contact#business"
                className="inline-block border border-white/25 text-white text-xs px-8 py-4 tracking-[0.2em] hover:bg-white/8 transition-colors duration-300"
              >
                法人向けお問い合わせ
              </Link>
              <div className="mt-5">
                <Link
                  href="/business"
                  className="text-xs text-white/35 hover:text-white/60 transition-colors underline underline-offset-4 decoration-white/15"
                >
                  法人向けサービス詳細 →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
