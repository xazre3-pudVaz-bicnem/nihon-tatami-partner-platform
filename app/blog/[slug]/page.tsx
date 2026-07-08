import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getAllSlugs, getRelatedPosts, categoryNameToSlug, formatDate } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: `記事が見つかりません | ${SITE_NAME}` };

  return {
    title: { absolute: `${post.title} | ${SITE_NAME}` },
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      siteName: SITE_NAME,
      locale: "ja_JP",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${slug}#article`,
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ja",
    keywords: post.tags.join(", "),
    articleSection: post.category,
    author: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME },
    publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL },
    isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  const BREADCRUMB_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "ブログ", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "ブログ", href: "/blog" }, { label: post.title }]} />
          <div className="flex items-center gap-3 mb-3">
            <Link
              href={`/blog/category/${categoryNameToSlug(post.category)}`}
              className="text-xs text-kincya border border-kincya/40 px-2 py-0.5 hover:bg-kincya hover:text-white transition-colors"
            >
              {post.category}
            </Link>
            <span className="text-xs text-white/40">{formatDate(post.date)}</span>
          </div>
          <h1
            className="text-2xl sm:text-3xl text-white leading-snug"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="prose-tatami">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-igusa border border-igusa/30 px-2 py-0.5">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="bg-kiji/40 border border-border p-5">
              <h2 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h2>
              <ul className="space-y-2">
                {[
                  { label: "畳表替え", href: "/services/tatami-omotegae" },
                  { label: "畳新調", href: "/services/tatami-shinchou" },
                  { label: "和室リフォーム", href: "/interior/house-renovation" },
                  { label: "原状回復", href: "/restoration" },
                  { label: "対応エリア（埼玉）", href: "/area/saitama" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-ai hover:underline">
                      — {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sumi text-white p-5">
              <h2 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>畳・和室のご相談</h2>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                畳の張替え・和室リフォーム・原状回復のご相談はお気軽に。内容確認後にご連絡します。
              </p>
              <Link
                href="/contact"
                className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300"
              >
                お問い合わせ →
              </Link>
            </div>

            {related.length > 0 && (
              <div>
                <h2 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>関連記事</h2>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/blog/${r.slug}`} className="text-xs text-sumi/70 hover:text-ai transition-colors leading-relaxed block">
                        — {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <Link href="/blog" className="text-sm text-sumi/60 hover:text-sumi transition-colors">
            ← ブログ一覧に戻る
          </Link>
        </div>
      </article>

      <CTASection />
    </>
  );
}
