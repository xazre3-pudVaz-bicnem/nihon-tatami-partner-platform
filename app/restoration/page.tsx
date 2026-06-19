import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { RESTORATION_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `原状回復工事 | 賃貸退去・店舗退去・不動産 | ${SITE_NAME}`,
  description: "賃貸退去後の原状回復・店舗退去・不動産売買前の内装整備。畳・クロス・床材を一括で原状回復。管理会社・オーナー向け継続対応。",
  path: "/restoration",
});

export default function RestorationPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "原状回復" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Restoration</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            原状回復工事
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            賃貸退去後の原状回復、店舗退去、不動産売買前の内装整備など。
            畳・クロス・床材を一括でご依頼いただけます。
          </p>
        </div>
      </section>

      <section className="py-8 bg-kiji/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-sumi/70 leading-relaxed">
            日本畳パートナーズは、畳の専門性を軸に、クロス・床材・建具の原状回復工事も一括で承ります。
            不動産管理会社・賃貸オーナー・店舗オーナーの継続案件にも対応しています。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESTORATION_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-sumi mb-6 text-center" style={{ fontFamily: "var(--font-serif)" }}>関連ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "不動産会社・管理会社向け", href: "/business/real-estate" },
              { label: "賃貸オーナー向け", href: "/business/rental-owner" },
              { label: "空室対策", href: "/business/vacancy-measures" },
              { label: "コラム：原状回復と畳", href: "/column/restoration-tatami-cases" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-border text-xs text-sumi text-center py-3 hover:border-ai hover:text-ai transition-colors duration-200 px-2">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="原状回復工事のご相談"
        subtitle="退去後の物件状況・規模をお知らせいただければ、スムーズにご提案できます。"
        primaryLabel="原状回復の相談をする"
        primaryHref="/contact"
        secondaryLabel="管理会社・法人のご相談"
        secondaryHref="/contact#business"
      />
    </>
  );
}
