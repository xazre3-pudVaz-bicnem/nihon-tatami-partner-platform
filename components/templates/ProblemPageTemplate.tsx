import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/site";
import type { Problem } from "@/data/problems";
import { COLUMN_ARTICLES } from "@/data/column";

type Props = { problem: Problem };

export default function ProblemPageTemplate({ problem }: Props) {
  const relatedColumns = COLUMN_ARTICLES.filter((a) => (problem.relatedColumns ?? []).includes(a.slug));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "畳・内装のお悩み", item: `${SITE_URL}/problems` },
      { "@type": "ListItem", position: 3, name: problem.title, item: `${SITE_URL}/problems/${problem.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: problem.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "畳・内装のお悩み", href: "/problems" }, { label: problem.title }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Trouble Guide</p>
          <h1 className="text-2xl sm:text-3xl text-white leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            {problem.title}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
              <Image src={problem.heroImage} alt={problem.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <InfoCard label="症状" value={problem.symptom} accent="ai" />
              <InfoCard label="主な原因" value={problem.cause} accent="kincya" />
              <InfoCard label="放置するリスク" value={problem.risk} accent="kincya" />
              <InfoCard label="解決方法" value={problem.solution} accent="igusa" />
            </div>

            <div className="prose-tatami space-y-5 mb-10">
              {problem.content.map((p, i) => (
                <p key={i} className="text-sm text-sumi/80 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="bg-kiji/40 border border-border p-6 mb-6">
              <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>ご自身でできる応急処置</h2>
              <p className="text-sm text-sumi/80 leading-relaxed">{problem.diyTips}</p>
            </div>
            <div className="bg-ai/5 border-l-2 border-ai p-6 mb-6">
              <h2 className="text-base text-ai mb-3" style={{ fontFamily: "var(--font-serif)" }}>専門業者に相談すべきタイミング</h2>
              <p className="text-sm text-sumi/80 leading-relaxed">{problem.whenToCallPro}</p>
            </div>
            <div className="bg-white border border-border p-6 mb-10">
              <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>費用の目安</h2>
              <p className="text-sm text-kincya">{problem.estimatedCost}</p>
            </div>

            <div className="mb-10">
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
              <div className="bg-white border border-border px-5 py-1">
                <FaqSection items={problem.faqs.map((f) => ({ ...f, category: "general" as const }))} />
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>このお悩み、ご相談ください</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                対応可否は現地確認後にご案内します。現地確認・お見積もりは無料です。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                無料で相談する
              </Link>
            </div>

            {problem.relatedServices.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
                <ul className="space-y-2">
                  {problem.relatedServices.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs text-ai hover:underline">— {link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedColumns.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連コラム</h3>
                <ul className="space-y-3">
                  {relatedColumns.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/column/${c.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-snug block">{c.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/problems" className="text-sm text-sumi/60 hover:text-sumi transition-colors">← お悩み一覧に戻る</Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}

function InfoCard({ label, value, accent }: { label: string; value: string; accent: "ai" | "kincya" | "igusa" }) {
  const border = accent === "ai" ? "border-ai" : accent === "igusa" ? "border-igusa" : "border-kincya";
  const text = accent === "ai" ? "text-ai" : accent === "igusa" ? "text-igusa" : "text-kincya";
  return (
    <div className={`bg-white border border-border border-l-2 ${border} p-4`}>
      <p className={`text-xs ${text} mb-1.5`} style={{ fontFamily: "var(--font-serif)" }}>{label}</p>
      <p className="text-sm text-sumi/80 leading-relaxed">{value}</p>
    </div>
  );
}
