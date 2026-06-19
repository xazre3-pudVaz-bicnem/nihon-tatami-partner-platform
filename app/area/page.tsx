import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `対応エリア | ${SITE_NAME}`,
  description: "日本畳パートナーズの対応エリア。現在全国からのご相談を承っています。旅館・寺社・大規模法人案件は遠方への対応も相談可能。",
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
            現在、対応エリアを拡大中です。まずはご相談ください。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-kiji border border-border p-8 text-center mb-12">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>
              対応エリアはご相談ください
            </h2>
            <p className="text-sm text-sumi/70 leading-relaxed max-w-xl mx-auto mb-6">
              現在、対応可能なエリアを随時拡大しています。
              旅館・寺社・大規模法人案件など、遠方への対応もご相談ください。
              まずはお問い合わせいただければ、対応可否をご案内します。
            </p>
            <a href="/contact" className="inline-block bg-sumi text-white text-sm px-8 py-3 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              エリアについて問い合わせる
            </a>
          </div>

          <div className="bg-white border border-border p-6">
            <h3 className="text-base text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>エリアページについて</h3>
            <p className="text-sm text-sumi/70 leading-relaxed mb-4">
              対応エリアが確定次第、「地域名 + 畳張替え」「地域名 + 原状回復」などのSEOキーワードに対応した
              エリア専用ページを作成していきます。
            </p>
            <ul className="space-y-2 text-xs text-sumi/60">
              <li>— 市区町村別の畳張替えページ（例：渋谷区 畳張替え）</li>
              <li>— 地域別の内装工事ページ</li>
              <li>— 地域別の原状回復ページ</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
