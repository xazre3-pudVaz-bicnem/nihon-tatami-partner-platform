import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getPost, formatDate, getFeaturedImage } from "@/lib/wp";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: `記事が見つかりません | ${SITE_NAME}` };

  const title = post.title.rendered;
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim().slice(0, 120);

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: getFeaturedImage(post), width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-sm text-sumi/60 mb-4">この記事はまだ公開されていません。</p>
        <Link href="/blog" className="text-sm text-ai hover:underline">ブログ一覧に戻る</Link>
      </div>
    );
  }

  const image = getFeaturedImage(post);

  const ARTICLE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.rendered,
    datePublished: post.date,
    image,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      <section className="bg-sumi py-12 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "ブログ", href: "/blog" },
            { label: post.title.rendered },
          ]} />
          <p className="text-xs text-sumi/40 mb-3">{formatDate(post.date)}</p>
          <h1
            className="text-2xl sm:text-3xl text-white leading-snug"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative h-56 sm:h-72 bg-kiji mb-10 overflow-hidden">
              <Image src={image} alt={post.title.rendered} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            </div>
            <div
              className="prose-tatami"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          <aside className="space-y-6">
            <div className="bg-kiji/40 border border-border p-5">
              <h3 className="text-sm text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h3>
              <ul className="space-y-2">
                {[
                  { label: "畳表替え", href: "/services/tatami-omotegae" },
                  { label: "畳新調", href: "/services/tatami-shinchou" },
                  { label: "内装工事", href: "/interior" },
                  { label: "原状回復", href: "/restoration" },
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
              <h3 className="text-sm mb-3" style={{ fontFamily: "var(--font-serif)" }}>無料見積もり</h3>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                畳の張替え・内装工事・原状回復のご相談はお気軽に。
              </p>
              <Link href="/contact" className="block text-xs text-center border border-kincya text-kincya py-2.5 hover:bg-kincya hover:text-white transition-all duration-300">
                お問い合わせ →
              </Link>
            </div>

            <div>
              <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>専門コラム</h3>
              <Link href="/column" className="text-xs text-ai hover:underline block">
                畳・内装の専門コラムを読む →
              </Link>
            </div>
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
