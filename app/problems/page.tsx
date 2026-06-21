import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PROBLEM_PAGES } from "@/data/problems-pages";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `お悩み解決｜畳のカビ・ダニ・ささくれ・臭い・沈み・襖・障子・床のトラブル | ${SITE_NAME}`,
  description:
    "畳のカビ・ダニ・ささくれ・臭い・へたり・ペットの尿、襖の穴、障子の破れ、クロスの汚れ、床の傷、賃貸の空室まで。症状の原因・対処法・費用目安を専門家が解説します。現地確認・お見積もり無料。",
  path: "/problems",
});

export default function ProblemsIndexPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "お悩み解決" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Problem</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            お悩みから解決方法を探す
          </h1>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            畳のカビ・ダニ・ささくれ・臭い・沈み・ペットの尿、襖や障子の破れ、クロスの汚れ、床の傷、賃貸の空室まで。
            症状の原因・対処法・費用の目安を専門家が解説します。
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROBLEM_PAGES.map((p) => (
              <Link key={p.slug} href={`/problems/${p.slug}`} className="block bg-kiji/40 border border-border p-6 hover:border-ai transition-colors duration-200">
                <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{p.h1}</h2>
                <p className="text-sm text-sumi/70 leading-relaxed line-clamp-2">{p.lead}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
