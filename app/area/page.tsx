import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { AREAS, AREA_SERVICES } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `対応エリア｜畳・襖・障子・原状回復 | ${SITE_NAME}`,
  description: "畳張替え・襖障子張替え・原状回復・内装工事の対応エリア。埼玉県を中心に各市区へ対応。対応可否は現地確認後にご案内します。法人・複数物件もご相談ください。",
  path: "/area",
});

export default function AreaPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Service Area</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            対応エリア
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳張替え・襖障子張替え・原状回復・内装工事に対応しています。
            旅館・寺社・大規模法人案件は遠方への対応もご相談可能です。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {AREAS.map((pref) => (
            <div key={pref.slug}>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{pref.name}</h2>
                <Link href={`/area/${pref.slug}`} className="text-xs text-ai hover:underline">{pref.name}のページ →</Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {pref.cities.map((c) => (
                  <Link key={c.slug} href={`/area/${pref.slug}/${c.slug}`} className="text-xs bg-kiji/40 border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-kiji/40 border border-border p-6">
            <h2 className="text-base text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>エリア別の対応サービス</h2>
            <div className="flex flex-wrap gap-2">
              {AREA_SERVICES.map((s) => (
                <span key={s.slug} className="text-xs bg-white border border-border text-sumi/60 px-3 py-1.5">{s.name}</span>
              ))}
            </div>
            <p className="text-sm text-sumi/60 leading-relaxed mt-4">
              上記エリア以外でも、旅館・寺社・大規模法人案件は遠方への対応もご相談ください。
              対応可否は現地確認後にご案内します。
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
