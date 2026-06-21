import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PURPOSE_PAGES } from "@/data/purpose";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `目的から探す｜空室対策・売却前・退去後・法要前・繁忙期前・和モダン・ペット・高齢者 | ${SITE_NAME}`,
  description:
    "空室対策・不動産売却前・引っ越し前・退去後の原状回復・法要祭礼前・繁忙期前・和モダン・ペット対応・高齢者向けまで、目的別の畳・内装工事をご案内します。現地確認・お見積もり無料。",
  path: "/purpose",
});

export default function PurposeIndexPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "目的から探す" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Purpose</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            目的から探す畳・内装工事
          </h1>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            空室対策・売却前の整備・退去後の原状回復・法要前・繁忙期前・和モダン・ペット対応・高齢者向けまで、
            目的に合わせた畳工事・内装整備をご案内します。
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PURPOSE_PAGES.map((p) => (
              <Link key={p.slug} href={`/purpose/${p.slug}`} className="block bg-kiji/40 border border-border p-6 hover:border-ai transition-colors duration-200">
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
