import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/templates/FaqAccordion";
import { SITE_URL } from "@/lib/site";

export type LongFormSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type LongFormData = {
  slug: string;
  breadcrumbs: { label: string; href?: string }[];
  eyebrow: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroImageAlt: string;
  sections: LongFormSection[];
  priceNote?: string;
  faqs: { q: string; a: string }[];
  relatedServices: { href: string; label: string }[];
  relatedColumns?: { href: string; label: string }[];
};

export default function LongFormPage({ data }: { data: LongFormData }) {
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={data.breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">{data.eyebrow}</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
                {data.h1}
              </h1>
              <p className="text-sm text-white/70 leading-relaxed">{data.lead}</p>
            </div>
            <div className="relative h-60 sm:h-80 overflow-hidden">
              <Image src={data.heroImage} alt={data.heroImageAlt} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        {data.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-xl sm:text-2xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              {section.heading}
            </h2>
            <div className="text-sm text-sumi/80 leading-loose space-y-4">
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
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

        {data.priceNote && (
          <div className="mb-12 bg-kiji border border-border p-6">
            <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>費用の目安</h2>
            <p className="text-sm text-sumi/80 leading-relaxed">{data.priceNote}</p>
            <p className="text-sm text-kincya mt-2">※ 正確な費用は現地確認後に正式見積もりでご案内します。</p>
            <Link href="/price" className="inline-block mt-4 text-sm text-ai hover:underline">料金の目安を詳しく見る →</Link>
          </div>
        )}

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
            よくある質問
          </h2>
          <FaqAccordion items={data.faqs} />
        </section>

        {/* Related services */}
        <section className="mb-4">
          <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
            関連サービス
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.relatedServices.map((s) => (
              <Link key={s.href} href={s.href} className="border border-border text-sm text-sumi text-center py-4 px-2 hover:border-ai hover:text-ai transition-colors duration-200">
                {s.label}
              </Link>
            ))}
          </div>
        </section>

        {data.relatedColumns && data.relatedColumns.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl text-sumi mb-6 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              関連コラム
            </h2>
            <ul className="space-y-2">
              {data.relatedColumns.map((c) => (
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
