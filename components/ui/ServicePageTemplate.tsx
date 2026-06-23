import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import type { FaqItem } from "@/data/faq";

type RelatedLink = { label: string; href: string };
type BreadcrumbItem = { label: string; href?: string };

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image?: string;
  sections: {
    heading: string;
    content: React.ReactNode;
  }[];
  faqs?: FaqItem[];
  relatedServices?: RelatedLink[];
  relatedPages?: RelatedLink[];
  price?: { service: string; price: string; note?: string }[];
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  image,
  sections,
  faqs,
  relatedServices,
  relatedPages,
  price,
}: Props) {
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
          {eyebrow && (
            <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">{eyebrow}</p>
          )}
          <h1
            className="text-3xl sm:text-4xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            {title}
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {image && (
              <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>
            )}

            {sections.map((section, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {section.heading}
                </h2>
                <div className="text-sm text-sumi/80 leading-relaxed space-y-4">
                  {section.content}
                </div>
              </div>
            ))}

            {price && price.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                  料金の目安
                </h2>
                <div className="bg-white border border-border overflow-hidden">
                  <table className="w-full">
                    <tbody className="divide-y divide-border">
                      {price.map((row, i) => (
                        <tr key={i} className="hover:bg-kiji/30 transition-colors">
                          <td className="text-sm py-3 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                          <td className="text-sm py-3 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                          {row.note && <td className="text-xs py-3 px-5 text-sumi/50 hidden sm:table-cell">{row.note}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-sumi/40 mt-2">※ 素材・状況により変動します。詳細は無料見積もりにてご確認ください。</p>
              </div>
            )}

            {faqs && faqs.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                  よくある質問
                </h2>
                <div className="bg-white border border-border px-5 py-1">
                  <FaqSection items={faqs} />
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>無料見積もり</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                現地確認・お見積もりは無料です。お気軽にご相談ください。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                お問い合わせ →
              </Link>
            </div>

            {relatedServices && relatedServices.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
                <ul className="space-y-2">
                  {relatedServices.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs text-ai hover:underline">
                        — {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedPages && relatedPages.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連ページ</h3>
                <ul className="space-y-2">
                  {relatedPages.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs text-sumi/60 hover:text-ai transition-colors">
                        — {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>ご依頼の流れ</h3>
              <ul className="space-y-1 text-xs text-sumi/60">
                <li>01 お問い合わせ</li>
                <li>02 現地確認（無料）</li>
                <li>03 お見積もり</li>
                <li>04 施工日調整</li>
                <li>05 施工・確認・引き渡し</li>
              </ul>
              <Link href="/flow" className="block text-xs text-ai mt-3 hover:underline">詳しい流れを見る →</Link>
            </div>
          </aside>
        </div>
      </div>

      <CTASection />
    </>
  );
}
