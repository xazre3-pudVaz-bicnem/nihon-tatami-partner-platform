import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { MATERIALS, getMaterial } from "@/data/materials";
import { COLUMN_ARTICLES } from "@/data/column";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MATERIALS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) return { title: `素材が見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${m.name}とは｜特徴・メリット・選び方 | ${SITE_NAME}`,
    description: m.description,
    path: `/materials/${slug}`,
    image: m.heroImage,
  });
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) notFound();

  const relatedColumns = COLUMN_ARTICLES.filter((a) => (m.relatedColumns ?? []).includes(a.slug));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: m.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "畳・素材図鑑", href: "/materials" }, { label: m.name }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">{m.category}</p>
          <h1 className="text-2xl sm:text-3xl text-white leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            {m.name}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
              <Image src={m.heroImage} alt={m.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div className="prose-tatami space-y-5 mb-10">
              {m.content.map((p, i) => (
                <p key={i} className="text-sm text-sumi/80 leading-relaxed">{p}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-igusa/5 border-l-2 border-igusa p-5">
                <h2 className="text-base text-igusa mb-3" style={{ fontFamily: "var(--font-serif)" }}>メリット</h2>
                <ul className="space-y-1.5 text-sm text-sumi/80">
                  {m.merit.map((x) => <li key={x}>— {x}</li>)}
                </ul>
              </div>
              <div className="bg-kincya/5 border-l-2 border-kincya p-5">
                <h2 className="text-base text-kincya mb-3" style={{ fontFamily: "var(--font-serif)" }}>注意点</h2>
                <ul className="space-y-1.5 text-sm text-sumi/80">
                  {m.demerit.map((x) => <li key={x}>— {x}</li>)}
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>こんな方におすすめ</h2>
              <ul className="space-y-1.5 text-sm text-sumi/80">
                {m.bestFor.map((x) => <li key={x}>— {x}</li>)}
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>基本情報</h2>
              <div className="bg-white border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    <tr><th className="text-left bg-kiji/40 py-3 px-5 text-sumi/70 font-normal w-28" style={{ fontFamily: "var(--font-serif)" }}>価格帯</th><td className="py-3 px-5 text-sumi/80">{m.price}</td></tr>
                    <tr><th className="text-left bg-kiji/40 py-3 px-5 text-sumi/70 font-normal" style={{ fontFamily: "var(--font-serif)" }}>耐久性</th><td className="py-3 px-5 text-sumi/80">{m.durability}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
              <div className="bg-white border border-border px-5 py-1">
                <FaqSection items={m.faqs.map((f) => ({ ...f, category: "material" as const }))} />
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>素材選びのご相談</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">用途やご予算に合わせて最適な素材をご提案します。現地確認・お見積もりは無料です。</p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">無料で相談する</Link>
            </div>

            {m.relatedServices && m.relatedServices.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
                <ul className="space-y-2">
                  {m.relatedServices.map((link) => (
                    <li key={link.href}><Link href={link.href} className="text-xs text-ai hover:underline">— {link.label}</Link></li>
                  ))}
                </ul>
              </div>
            )}

            {relatedColumns.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連コラム</h3>
                <ul className="space-y-3">
                  {relatedColumns.map((c) => (
                    <li key={c.slug}><Link href={`/column/${c.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-snug block">{c.title}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/materials" className="text-sm text-sumi/60 hover:text-sumi transition-colors">← 素材図鑑に戻る</Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}
