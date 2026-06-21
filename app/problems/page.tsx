import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PROBLEMS, PROBLEM_CATEGORIES } from "@/data/problems";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `畳・襖・障子・内装のお悩み解決ガイド | ${SITE_NAME}`,
  description: "畳のカビ・ダニ・臭い・ささくれ・沈み、襖や障子の破れ、クロス・床の傷みなど、和室・内装のお悩みの原因と対処法を専門家が解説します。",
  path: "/problems",
});

export default function ProblemsPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "畳・内装のお悩み" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Trouble Guide</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳・内装のお悩み解決ガイド
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳のカビ・ダニ・臭い・沈み、襖や障子の破れ、クロス・床の傷みなど、和室と内装のお悩みごとに、
            原因・対処法・費用の目安をまとめました。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {PROBLEM_CATEGORIES.filter((c) => c.value !== "all").map((cat) => {
            const items = PROBLEMS.filter((p) => p.category === cat.value);
            if (items.length === 0) return null;
            return (
              <div key={cat.value} className="mb-12">
                <h2 className="text-xl text-sumi mb-5 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>{cat.label}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {items.map((p) => (
                    <Link key={p.slug} href={`/problems/${p.slug}`} className="block bg-kiji/40 border border-border p-4 hover:border-kincya transition-colors">
                      <span className="text-sm text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{p.title}</span>
                      <span className="block text-xs text-sumi/55 mt-1 line-clamp-2">{p.symptom}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
