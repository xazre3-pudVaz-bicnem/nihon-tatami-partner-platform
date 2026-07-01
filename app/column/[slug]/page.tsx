import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { COLUMN_ARTICLES } from "@/data/column";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { FAQ_ITEMS } from "@/data/faq";
import FaqSection from "@/components/ui/FaqSection";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COLUMN_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = COLUMN_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: `記事が見つかりません | ${SITE_NAME}` };

  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    alternates: { canonical: `${SITE_URL}/column/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/column/${slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      images: [{ url: article.image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default async function ColumnArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = COLUMN_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  // 関連記事：明示指定があればそれを優先、なければ同カテゴリ→全体
  const explicitRelated = (article.relatedSlugs ?? [])
    .map((s) => COLUMN_ARTICLES.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  const sameCategory = COLUMN_ARTICLES.filter((a) => a.slug !== slug && a.category === article.category);
  const fallback = COLUMN_ARTICLES.filter((a) => a.slug !== slug);
  const related = (explicitRelated.length > 0 ? explicitRelated : sameCategory.length > 0 ? sameCategory : fallback).slice(0, 4);

  const relatedServices = article.relatedServices ?? [
    { label: "畳表替え", href: "/services/tatami-omotegae" },
    { label: "畳新調", href: "/services/tatami-shinchou" },
    { label: "和紙畳", href: "/services/washi-tatami" },
    { label: "内装工事", href: "/interior" },
    { label: "原状回復", href: "/restoration" },
  ];

  const hasContent = Boolean(article.content && article.content.length > 0);
  const faqs = article.faqs && article.faqs.length > 0 ? article.faqs : null;

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/column/${slug}#article`,
    headline: article.title,
    description: article.excerpt,
    url: `${SITE_URL}/column/${slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    image: {
      "@type": "ImageObject",
      url: article.image.startsWith("http") ? article.image : `${SITE_URL}${article.image}`,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    },
    about: {
      "@type": "Thing",
      name: "畳・内装工事",
    },
    keywords: article.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/column/${slug}`,
    },
    inLanguage: "ja",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    // speakable: mark h2/h3 headings and FAQ as speakable for voice search
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".faq-answer"],
    },
  };

  const WEBPAGE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/column/${slug}`,
    url: `${SITE_URL}/column/${slug}`,
    name: article.title,
    description: article.excerpt,
    inLanguage: "ja",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "専門コラム", item: `${SITE_URL}/column` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}/column/${slug}` },
    ],
  };

  const FAQ_SCHEMA = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {FAQ_SCHEMA && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />}

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "専門コラム", href: "/column" }, { label: article.title }]} />
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs border border-igusa/40 text-igusa px-2 py-0.5">{article.category}</span>
            <span className="text-xs text-white/30">読了約{article.readTime}分</span>
          </div>
          <h1 className="text-2xl sm:text-3xl text-white leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            {article.title}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
              <Image src={article.image} alt={article.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
            </div>

            <div className="bg-kiji/40 border-l-2 border-kincya p-5 mb-8">
              <p className="text-sm text-sumi/80 leading-relaxed">{article.excerpt}</p>
            </div>

            {hasContent && article.content!.length > 1 && (
              <nav className="bg-white border border-border p-5 mb-8">
                <h2 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>目次</h2>
                <ol className="space-y-1.5 text-xs text-ai">
                  {article.content!.map((s, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="hover:underline">{i + 1}. {s.heading}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {hasContent ? (
              <div className="prose-tatami space-y-2">
                {article.content!.map((section, i) => (
                  <section key={i} id={`section-${i}`}>
                    <h2>{section.heading}</h2>
                    {section.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {section.list && section.list.length > 0 && (
                      <ul>
                        {section.list.map((li, k) => (
                          <li key={k}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            ) : (
              <div className="prose-tatami space-y-6 text-sm text-sumi/80 leading-relaxed">
                <p>
                  このコラムは畳・内装のプロフェッショナルが監修した専門コンテンツです。
                  実際の施工経験をもとに、正確でわかりやすい情報をお届けします。
                </p>
                <h2>はじめに</h2>
                <p>{article.excerpt}詳細な内容は随時追記・更新しています。ご不明な点はお気軽にお問い合わせください。</p>
                <h2>専門家のポイント</h2>
                <p>
                  畳の施工には素材・工法・現場状況により最適な方法が異なります。
                  日本畳パートナーズでは、現地確認を通じて最適な提案をいたします。
                </p>
                <p>
                  一般住宅から旅館・寺社・店舗・賃貸物件まで、幅広い施工実績から得た知見をこのコラムで発信しています。
                </p>
                <h2>まとめ</h2>
                <p>
                  詳しくご相談いただきたい場合は、無料で現地確認・お見積もりを承ります。
                  お電話・フォーム・LINEからお気軽にご連絡ください。
                </p>
              </div>
            )}

            <div className="mt-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs border border-border text-sumi/50 px-3 py-1">{tag}</span>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                {faqs ? "よくある質問" : "関連するよくある質問"}
              </h2>
              <div className="bg-white border border-border px-5 py-1">
                <FaqSection items={(faqs ? faqs.map((f) => ({ ...f, category: "general" as const })) : FAQ_ITEMS.slice(0, 4))} />
              </div>
              {!faqs && (
                <div className="mt-4 text-right">
                  <Link href="/faq" className="text-xs text-ai hover:underline">すべてのFAQを見る →</Link>
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-sumi text-white p-5">
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>無料見積もり</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                畳の張替え・内装工事・原状回復のご相談はお気軽に。現地確認無料。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                無料見積もりを依頼する
              </Link>
            </div>

            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
              <ul className="space-y-2">
                {relatedServices.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-ai hover:underline">— {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>施工事例を見る</h3>
              <Link href="/works" className="text-xs text-ai hover:underline">— 畳・内装・原状回復の施工事例 →</Link>
            </div>

            {related.length > 0 && (
              <div className="bg-kiji/40 border border-border p-5">
                <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連コラム</h3>
                <ul className="space-y-3">
                  {related.map((rel) => (
                    <li key={rel.slug}>
                      <Link href={`/column/${rel.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-snug block">
                        {rel.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/column" className="text-sm text-sumi/60 hover:text-sumi transition-colors">← コラム一覧に戻る</Link>
        </div>
      </article>

      <section className="bg-kiji/30 border-t border-border py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-base text-sumi mb-6" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            エリアから探す
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { href: "/area/saitama/tatami", label: "埼玉県の畳張替え" },
              { href: "/area/tokyo/tatami", label: "東京都の畳張替え" },
              { href: "/area/kanagawa/tatami", label: "神奈川県の畳張替え" },
              { href: "/area/chiba/tatami", label: "千葉県の畳張替え" },
              { href: "/area/saitama/restoration", label: "埼玉県の原状回復" },
              { href: "/area/tokyo/restoration", label: "東京都の原状回復" },
              { href: "/area/saitama/fusuma", label: "埼玉県の襖張替え" },
              { href: "/area/tokyo/fusuma", label: "東京都の襖張替え" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block border border-border bg-white text-xs text-sumi/70 text-center px-2 py-3 hover:border-kincya hover:text-kincya transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
