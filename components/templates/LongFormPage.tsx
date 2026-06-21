import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/templates/FaqAccordion";
import { SITE_URL } from "@/lib/site";

export type LongFormSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export type LongFormData = {
  slug?: string;
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroImageAlt?: string;
  sections: LongFormSection[];
  priceNote?: string;
  faqs: { q: string; a: string; category?: string }[];
  relatedServices: { href: string; label: string }[];
  relatedColumns?: { href: string; label: string }[];
};

// Flat props (used by Phase 1 generated pages: flooring, wallpaper, fusuma, shoji, for-*)
type FlatProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  image?: string;
  path?: string;
  intro?: string[];
  sections: LongFormSection[];
  faqs?: { q: string; a: string; category?: string }[];
  relatedServices?: { href: string; label: string }[];
  relatedPages?: { href: string; label: string }[];
  data?: never;
};

type DataProps = {
  data: LongFormData;
  eyebrow?: never;
};

type Props = FlatProps | DataProps;

export default function LongFormPage(props: Props) {
  // Normalise to LongFormData
  let d: LongFormData;

  if ("data" in props && props.data) {
    d = props.data;
  } else {
    const p = props as FlatProps;
    d = {
      breadcrumbs: p.breadcrumbs,
      eyebrow: p.eyebrow,
      h1: p.title,
      lead: [p.subtitle, ...(p.intro ?? [])].filter(Boolean).join(" "),
      heroImage: p.image ?? "/images/nihon-tatami/tatami/tatami-room-traditional-01.png",
      heroImageAlt: p.title,
      sections: p.sections,
      faqs: p.faqs ?? [],
      relatedServices: p.relatedServices ?? [],
      relatedColumns: p.relatedPages,
    };
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      ...d.breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        ...(b.href ? { item: `${SITE_URL}${b.href}` } : {}),
      })),
    ],
  };

  const faqSchema = d.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={d.breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">{d.eyebrow}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
                {d.h1}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed">{d.lead}</p>
            </div>
            <div className="relative h-60 sm:h-80 overflow-hidden">
              <Image src={d.heroImage} alt={d.heroImageAlt ?? d.h1} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {d.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-xl sm:text-2xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              {section.heading}
            </h2>
            {section.body && section.body.length > 0 && (
              <div className="text-sm text-sumi/80 leading-loose space-y-4">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            )}
            {section.list && section.list.length > 0 && (
              <ul className="mt-4 space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-sumi/80 leading-relaxed">
                    <span className="text-igusa shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {d.priceNote && (
          <div className="mb-12 bg-kiji border border-border p-6">
            <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>費用の目安</h2>
            <p className="text-sm text-sumi/80 leading-relaxed">{d.priceNote}</p>
            <p className="text-sm text-kincya mt-2">※ 正確な費用は現地確認後に正式見積もりでご案内します。</p>
            <Link href="/price" className="inline-block mt-4 text-sm text-ai hover:underline">料金の目安を詳しく見る →</Link>
          </div>
        )}

        {/* FAQ */}
        {d.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              よくある質問
            </h2>
            <FaqAccordion items={d.faqs} />
          </section>
        )}

        {/* Related services */}
        {d.relatedServices.length > 0 && (
          <section className="mb-4">
            <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              関連サービス
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {d.relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="border border-border text-sm text-sumi text-center py-4 px-2 hover:border-ai hover:text-ai transition-colors duration-200">
                  {s.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {d.relatedColumns && d.relatedColumns.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              関連コラム
            </h2>
            <ul className="space-y-2">
              {d.relatedColumns.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm text-ai hover:underline">— {c.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <CTASection />
    </>
  );
}
