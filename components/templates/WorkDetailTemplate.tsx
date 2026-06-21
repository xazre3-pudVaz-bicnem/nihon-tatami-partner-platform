import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { SITE_URL } from "@/lib/site";
import type { WorkDetail } from "@/data/works-detail";
import { COLUMN_ARTICLES } from "@/data/column";

type Props = { work: WorkDetail };

export default function WorkDetailTemplate({ work }: Props) {
  const relatedColumns = COLUMN_ARTICLES.filter((a) => work.relatedColumns.includes(a.slug));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "施工事例", item: `${SITE_URL}/works` },
      { "@type": "ListItem", position: 3, name: work.title, item: `${SITE_URL}/works/${work.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "施工事例", href: "/works" }, { label: work.title }]} />
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs border border-igusa/40 text-igusa px-2 py-0.5">{work.categoryLabel}</span>
            <span className="text-xs border border-kincya/40 text-kincya px-2 py-0.5">{work.targetLabel}</span>
            <span className="text-xs text-white/40">{work.location}</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl text-white leading-snug"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            {work.title}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-80 bg-kiji mb-10 overflow-hidden">
              <Image src={work.heroImage} alt={work.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <Section heading="ご相談・課題">{work.challenge}</Section>
            <Section heading="ご提案">{work.proposal}</Section>
            <Section heading="施工内容">{work.workContent}</Section>

            <div className="mb-10">
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                施工概要
              </h2>
              <div className="bg-white border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    <Row label="使用素材" value={work.materials} />
                    <Row label="工期" value={work.duration} />
                    <Row label="費用目安" value={work.cost} />
                    <Row label="サービス" value={work.service} />
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-sumi/40 mt-2">※ 費用は素材・枚数・現場状況により変動します。詳細は無料見積もりにてご案内します。</p>
            </div>

            <Section heading="施工後の変化">{work.result}</Section>

            {work.simultaneousWork.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                  同時に施工した工事
                </h2>
                <div className="flex flex-wrap gap-2">
                  {work.simultaneousWork.map((w) => (
                    <span key={w} className="text-xs bg-kiji/50 border border-border text-sumi/70 px-3 py-1.5">{w}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-ai/5 border-l-2 border-ai p-6 mb-10">
              <h3 className="text-sm text-ai mb-3" style={{ fontFamily: "var(--font-serif)" }}>担当者のコメント</h3>
              <p className="text-sm text-sumi/80 leading-relaxed">{work.staffComment}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span key={tag} className="text-xs border border-border text-sumi/50 px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>同様のご相談はこちら</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                類似の施工も承ります。現地確認・お見積もりは無料です。法人案件・複数物件もご相談ください。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                無料見積もりを依頼する
              </Link>
            </div>

            {work.relatedServices.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
                <ul className="space-y-2">
                  {work.relatedServices.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-xs text-ai hover:underline">— {link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedColumns.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連コラム</h3>
                <ul className="space-y-3">
                  {relatedColumns.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/column/${c.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-snug block">
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/works" className="text-sm text-sumi/60 hover:text-sumi transition-colors">← 施工事例一覧に戻る</Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
        {heading}
      </h2>
      <p className="text-sm text-sumi/80 leading-relaxed">{children}</p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <th className="text-left bg-kiji/40 py-3 px-5 text-sumi/70 font-normal whitespace-nowrap w-28" style={{ fontFamily: "var(--font-serif)" }}>{label}</th>
      <td className="py-3 px-5 text-sumi/80">{value}</td>
    </tr>
  );
}
