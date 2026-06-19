import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { TATAMI_SERVICES, INTERIOR_SERVICES, RESTORATION_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `サービス一覧 | 畳・内装工事・原状回復 | ${SITE_NAME}`,
  description: "畳の表替え・裏返し・新調・縁なし畳から、内装工事・クロス張替え・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "サービス一覧" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Services</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            サービス一覧
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳工事を軸に、内装工事・原状回復まで一括でご相談いただけます。
            住宅・旅館・寺社・店舗・不動産管理物件など、幅広い用途に対応しています。
          </p>
        </div>
      </section>

      {/* 畳工事 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Tatami Works</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>畳工事</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TATAMI_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 内装工事 */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Interior Works</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>内装工事</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-sm text-sumi/60 mb-8 leading-relaxed max-w-2xl">
            畳工事と合わせて、クロス・床材・建具の内装工事も承ります。
            空間全体をまとめてリフレッシュしたい方にご利用ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERIOR_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 原状回復 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Restoration</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>原状回復</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-sm text-sumi/60 mb-8 leading-relaxed max-w-2xl">
            賃貸退去後の原状回復、店舗退去、売買前の整備など、不動産に関わる
            内装工事をまとめてご依頼いただけます。管理会社・オーナー様の継続案件にも対応。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESTORATION_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 内部リンク */}
      <section className="py-14 bg-cloud/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>関連ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "施工事例", href: "/works" },
              { label: "料金の目安", href: "/price" },
              { label: "よくある質問", href: "/faq" },
              { label: "法人向けサービス", href: "/business" },
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
