import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { TATAMI_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: `畳工事一覧 | 表替え・新調・縁なし畳・和紙畳 | ${SITE_NAME}`,
  description: "畳表替え・裏返し・新調・縁なし畳・和紙畳・樹脂畳・琉球畳まで対応。住宅・旅館・寺社・店舗・賃貸物件の畳工事を承ります。",
  path: "/services/tatami",
});

export default function TatamiServicesPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "サービス", href: "/services" }, { label: "畳工事" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Tatami Works</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳工事
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳表替え・裏返し・新調から縁なし畳・和紙畳・樹脂畳まで。
            住宅・旅館・寺社・店舗・賃貸物件の畳工事を幅広く承ります。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TATAMI_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>関連ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "料金の目安", href: "/price" },
              { label: "施工事例", href: "/works" },
              { label: "FAQ", href: "/faq" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-border text-sm text-sumi text-center py-3 hover:border-ai hover:text-ai transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
