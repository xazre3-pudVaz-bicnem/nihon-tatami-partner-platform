import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { MATERIALS } from "@/data/materials";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `畳・素材図鑑｜い草・和紙畳・樹脂畳の特徴と選び方 | ${SITE_NAME}`,
  description: "い草・国産い草・和紙畳・樹脂畳・琉球畳・縁なし畳・カラー畳など、畳表素材の特徴・メリット・選び方を専門家が解説。用途に合った素材が見つかります。",
  path: "/materials",
});

export default function MaterialsPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "畳・素材図鑑" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Material Guide</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳・素材図鑑
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            い草・和紙畳・樹脂畳・縁なし畳・カラー畳など、畳に使える素材の特徴と選び方をまとめました。
            用途・ご予算・ライフスタイルに合った素材選びの参考にどうぞ。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MATERIALS.map((m) => (
              <Link key={m.slug} href={`/materials/${m.slug}`} className="group block bg-white border border-border hover:border-kincya transition-colors overflow-hidden">
                <div className="relative h-40 bg-kiji overflow-hidden">
                  <Image src={m.heroImage} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-kincya">{m.category}</span>
                  <h2 className="text-base text-sumi mt-1 mb-2" style={{ fontFamily: "var(--font-serif)" }}>{m.name}</h2>
                  <p className="text-xs text-sumi/60 leading-relaxed line-clamp-3">{m.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
