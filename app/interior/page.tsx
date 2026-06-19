import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { INTERIOR_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `内装工事 | クロス・床・建具の張替えリフォーム | ${SITE_NAME}`,
  description: "クロス張替え・フローリング・クッションフロア・フロアタイル・ふすま障子・店舗内装・住宅リフォームまで。畳工事と一括でご依頼可能。",
  path: "/interior",
});

export default function InteriorPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "内装工事" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Interior Works</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            内装工事
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳工事を軸に、クロス・床・建具の内装工事も承ります。
            空間全体をまとめてリフレッシュしたい方に。住宅・賃貸・店舗・旅館対応。
          </p>
        </div>
      </section>

      <section className="py-8 bg-kiji/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-sumi/70 leading-relaxed">
            日本畳パートナーズは、畳工事の専門性を軸にしながら、内装工事も一括でご依頼いただけます。
            クロス・床・建具を別々の業者に依頼する手間がなく、空間全体を効率よく整えられます。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERIOR_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-kiji/40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-sumi/70 mb-4">畳工事と内装工事をまとめてご依頼いただくことで、空間全体をスムーズに整えられます。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services/tatami" className="inline-block border border-sumi text-sumi text-sm px-6 py-2.5 hover:bg-sumi hover:text-white transition-all duration-300">
              畳工事を見る
            </Link>
            <Link href="/restoration" className="inline-block border border-sumi text-sumi text-sm px-6 py-2.5 hover:bg-sumi hover:text-white transition-all duration-300">
              原状回復を見る
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
