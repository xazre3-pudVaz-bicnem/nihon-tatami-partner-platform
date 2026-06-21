import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/templates/FaqAccordion";
import { COLUMN_ARTICLES } from "@/data/column";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export interface ComparisonRow {
  method: string;
  condition: string;
  appearance: string;
  cost: string;
  duration: string;
  recommended: string;
  notes: string;
}

export interface MaterialItem {
  name: string;
  feature: string;
  merit: string;
  demerit: string;
  suitableFor: string;
  cost: string;
}

export interface PriceRow {
  item: string;
  unit: string;
  priceMin: string;
  priceMax: string;
  notes: string;
}

export interface FlowStep {
  step: number;
  title: string;
  detail: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface FullServicePageData {
  slug: string;
  breadcrumbs: { label: string; href?: string }[];
  h1: string;
  lead: string;
  heroImage: string;
  heroImageAlt: string;
  targets: string[];
  whatYouLearn: string[];
  recommendedFor: string[];
  serviceOverview: string;
  workScope: string[];
  comparisonTable?: ComparisonRow[];
  materials?: MaterialItem[];
  residentialProposal: string;
  rentalOwnerProposal: string;
  realEstateProposal: string;
  ryokanProposal: string;
  templeProposal: string;
  storeProposal: string;
  priceTable: PriceRow[];
  priceNotes: string[];
  flow: FlowStep[];
  preWorkChecklist: string[];
  commonMistakes: string[];
  relatedWorksIds: string[];
  relatedColumnIds: string[];
  relatedServices: { href: string; label: string }[];
  faqs: FAQ[];
}

function SectionHeading({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <div className="mb-8">
      {eyebrow && <p className="text-xs text-kincya tracking-[0.3em] mb-2 uppercase">{eyebrow}</p>}
      <h2
        className="text-2xl sm:text-3xl text-sumi leading-snug"
        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
      >
        {children}
      </h2>
    </div>
  );
}

const TARGET_PROPOSALS = [
  { key: "residential", label: "一般住宅", icon: "住" },
  { key: "rentalOwner", label: "賃貸オーナー", icon: "貸" },
  { key: "realEstate", label: "不動産・管理会社", icon: "管" },
  { key: "ryokan", label: "旅館・宿泊施設", icon: "宿" },
  { key: "temple", label: "寺社", icon: "社" },
  { key: "store", label: "店舗", icon: "店" },
] as const;

export default function FullServicePageTemplate({ data }: { data: FullServicePageData }) {
  const proposals: Record<string, string> = {
    residential: data.residentialProposal,
    rentalOwner: data.rentalOwnerProposal,
    realEstate: data.realEstateProposal,
    ryokan: data.ryokanProposal,
    temple: data.templeProposal,
    store: data.storeProposal,
  };

  const relatedColumns = data.relatedColumnIds
    .map((id) => COLUMN_ARTICLES.find((a) => a.slug === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      ...data.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        ...(b.href ? { item: `${SITE_URL}${b.href}` } : {}),
      })),
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "畳の表替え・裏返し・新調から内装工事・原状回復まで対応する畳と空間整備の専門パートナー。",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={data.breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-snug"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
              >
                {data.h1}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed mb-6">{data.lead}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.targets.map((t) => (
                  <span key={t} className="text-xs text-kincya border border-kincya/40 px-3 py-1.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-block bg-kincya text-white text-sm px-7 py-3.5 tracking-wider hover:bg-do transition-colors duration-300 text-center">
                  無料見積もりを依頼する
                </Link>
                <Link href="/price" className="inline-block border border-white/30 text-white text-sm px-7 py-3.5 tracking-wider hover:bg-white/10 transition-colors duration-300 text-center">
                  料金の目安を見る
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <Image
                src={data.heroImage}
                alt={data.heroImageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you learn */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Overview">このページで分かること</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.whatYouLearn.map((item, i) => (
              <div key={i} className="bg-shiro border border-border p-5 flex items-start gap-3">
                <span className="text-kincya text-sm shrink-0" style={{ fontFamily: "var(--font-serif)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-sumi/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended for */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Check">こんな方におすすめ</SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {data.recommendedFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-sumi/80 leading-relaxed border-b border-border pb-3">
                <span className="text-igusa shrink-0 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service overview */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About">サービス概要</SectionHeading>
          <div className="text-sm text-sumi/80 leading-loose space-y-5">
            {data.serviceOverview.split("\n").filter(Boolean).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Work scope */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Scope">対応できる施工内容</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.workScope.map((item, i) => (
              <div key={i} className="bg-kiji/50 border border-border p-5">
                <p className="text-sm text-sumi/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      {data.comparisonTable && data.comparisonTable.length > 0 && (
        <section className="py-14 sm:py-20 bg-kiji">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Compare">施工方法の比較</SectionHeading>
            <div className="bg-shiro border border-border overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead>
                  <tr className="bg-kiji text-sumi">
                    <th className="text-left text-xs py-3 px-4 font-normal">施工方法</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">対応できる状態</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">見た目</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">費用</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">工期</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">おすすめ</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">注意点</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {data.comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-kiji/30 transition-colors align-top">
                      <td className="text-sm py-3.5 px-4 text-sumi whitespace-nowrap" style={{ fontFamily: "var(--font-serif)" }}>{row.method}</td>
                      <td className="text-xs py-3.5 px-4 text-sumi/70">{row.condition}</td>
                      <td className="text-xs py-3.5 px-4 text-sumi/70">{row.appearance}</td>
                      <td className="text-xs py-3.5 px-4 text-kincya whitespace-nowrap">{row.cost}</td>
                      <td className="text-xs py-3.5 px-4 text-sumi/70 whitespace-nowrap">{row.duration}</td>
                      <td className="text-xs py-3.5 px-4 text-sumi/70">{row.recommended}</td>
                      <td className="text-xs py-3.5 px-4 text-sumi/50">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Materials */}
      {data.materials && data.materials.length > 0 && (
        <section className="py-14 sm:py-20 bg-shiro">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Material">素材の選び方</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.materials.map((m, i) => (
                <div key={i} className="bg-kiji/40 border border-border p-6 flex flex-col">
                  <h3 className="text-lg text-sumi mb-3 pl-3 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                    {m.name}
                  </h3>
                  <dl className="text-xs text-sumi/75 leading-relaxed space-y-2 flex-1">
                    <div><dt className="inline text-kincya">特徴｜</dt><dd className="inline">{m.feature}</dd></div>
                    <div><dt className="inline text-igusa">メリット｜</dt><dd className="inline">{m.merit}</dd></div>
                    <div><dt className="inline text-do">デメリット｜</dt><dd className="inline">{m.demerit}</dd></div>
                    <div><dt className="inline text-ai">向いている｜</dt><dd className="inline">{m.suitableFor}</dd></div>
                  </dl>
                  <p className="text-xs text-kincya mt-3 pt-3 border-t border-border">費用感：{m.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Target proposals */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="For You">対象者別のご提案</SectionHeading>
          <div className="space-y-4">
            {TARGET_PROPOSALS.map((tp) => (
              <div key={tp.key} className="bg-shiro border border-border p-6 sm:p-7 flex flex-row gap-4 sm:gap-6 items-start">
                <span className="w-10 h-10 shrink-0 bg-sumi text-kincya flex items-center justify-center text-sm" style={{ fontFamily: "var(--font-serif)" }}>
                  {tp.icon}
                </span>
                <div>
                  <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{tp.label}向け</h3>
                  <p className="text-sm text-sumi/80 leading-relaxed">{proposals[tp.key]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Price">料金の目安</SectionHeading>
          <div className="bg-white border border-border overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="text-left text-xs py-3 px-5 font-normal">項目</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">単位</th>
                  <th className="text-right text-xs py-3 px-5 font-normal">料金目安</th>
                  <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {data.priceTable.map((row, i) => (
                  <tr key={i} className="hover:bg-kiji/30 transition-colors">
                    <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.item}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/60 whitespace-nowrap">{row.unit}</td>
                    <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">
                      {row.priceMin}
                      {row.priceMax && row.priceMax !== row.priceMin ? `〜${row.priceMax}` : ""}
                    </td>
                    <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-1.5">
            <p className="text-sm text-kincya">※ 正確な費用は現地確認後に正式見積もりでご案内します。</p>
            {data.priceNotes.map((n, i) => (
              <p key={i} className="text-xs text-sumi/50">※ {n}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Flow">施工の流れ</SectionHeading>
          <ol className="list-none space-y-4">
            {data.flow.map((step) => (
              <li key={step.step} className="bg-shiro border border-border p-5 flex items-start gap-4">
                <span className="w-9 h-9 shrink-0 bg-kincya text-white flex items-center justify-center text-sm rounded-full" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</h3>
                  <p className="text-sm text-sumi/70 leading-relaxed">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pre-work checklist */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Checklist">施工前に確認したいこと</SectionHeading>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {data.preWorkChecklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-sumi/80 leading-relaxed border-b border-border pb-3">
                <span className="text-kincya shrink-0 mt-0.5">□</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Caution">よくある失敗・注意点</SectionHeading>
          <ul className="space-y-3">
            {data.commonMistakes.map((item, i) => (
              <li key={i} className="bg-shiro border-l-4 border-do/70 border border-border p-4 flex items-start gap-3 text-sm text-sumi/80 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-do shrink-0 mt-2" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related works */}
      {data.relatedWorksIds.length > 0 && (
        <section className="py-14 sm:py-20 bg-shiro">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Works">関連する施工事例</SectionHeading>
            <p className="text-sm text-sumi/70 leading-relaxed mb-6">
              住宅・賃貸・旅館・寺社・店舗まで、さまざまな現場の施工事例を掲載しています。
            </p>
            <Link
              href="/works"
              className="inline-block border border-sumi text-sumi text-sm px-8 py-3.5 tracking-wider hover:bg-sumi hover:text-white transition-colors duration-300"
            >
              施工事例を見る →
            </Link>
          </div>
        </section>
      )}

      {/* Related columns */}
      {relatedColumns.length > 0 && (
        <section className="py-14 sm:py-20 bg-kiji">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Column">関連コラム</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedColumns.map((c) => (
                <Link key={c.slug} href={`/column/${c.slug}`} className="block bg-shiro border border-border p-5 hover:border-ai transition-colors duration-200">
                  <p className="text-xs text-kincya mb-2">{c.category}</p>
                  <h3 className="text-sm text-sumi leading-relaxed mb-2" style={{ fontFamily: "var(--font-serif)" }}>{c.title}</h3>
                  <p className="text-xs text-sumi/60 leading-relaxed line-clamp-2">{c.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {data.relatedServices.length > 0 && (
        <section className="py-14 sm:py-16 bg-shiro">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Services">関連サービス</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {data.relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="border border-border text-sm text-sumi text-center py-4 px-2 hover:border-ai hover:text-ai transition-colors duration-200">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ">よくある質問</SectionHeading>
          <FaqAccordion items={data.faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
