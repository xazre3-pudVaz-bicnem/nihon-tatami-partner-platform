import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { ColumnArticle } from "@/data/column";
import type { BlogPost } from "@/lib/blog";

const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return y && m && d ? `${y}年${m}月${d}日` : iso;
};

export default function KnowledgeSection({ columns, posts }: { columns: ColumnArticle[]; posts: BlogPost[] }) {
  return (
    <section className="relative bg-shiro py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-14">
          {/* 専門コラム */}
          <div>
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading en="Knowledge Column" title={["専門コラム"]} titleClassName="text-2xl sm:text-3xl" />
              <Link href="/column" className="link-draw shrink-0 pb-0.5 text-xs text-ai">
                すべて見る →
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-4">
              {columns.map((article, i) => (
                <li key={article.slug}>
                  <ScrollReveal delay={0.05 + i * 0.07}>
                    <Link
                      href={`/column/${article.slug}`}
                      className="group flex items-stretch overflow-hidden border border-border bg-white transition-all duration-500 hover:-translate-y-0.5 hover:border-kincya/40 hover:shadow-[0_18px_40px_-28px_rgba(30,28,26,0.5)]"
                    >
                      <span className="relative w-28 shrink-0 overflow-hidden bg-kiji sm:w-40">
                        <Image
                          src={article.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="160px"
                        />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-4 sm:p-5">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="border border-igusa/40 px-2 py-0.5 text-[10px] tracking-wide text-matcha">{article.category}</span>
                          <span className="text-[10px] text-sumi/65">約{article.readTime}分で読めます</span>
                        </span>
                        <span
                          className="block text-sm leading-snug text-sumi [word-break:auto-phrase] transition-colors duration-300 group-hover:text-ai line-clamp-2"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {article.title}
                        </span>
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>

          {/* ブログ（最新記事） */}
          <div>
            <div className="mb-10 flex items-end justify-between gap-6">
              <SectionHeading en="Blog" title={["畳のお役立ちブログ"]} titleClassName="text-2xl sm:text-3xl" />
              <Link href="/blog" className="link-draw shrink-0 pb-0.5 text-xs text-ai">
                すべて見る →
              </Link>
            </div>
            <ul className="border-t border-border">
              {posts.map((post, i) => (
                <li key={post.slug}>
                  <ScrollReveal delay={0.05 + i * 0.07}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group relative flex items-start gap-4 overflow-hidden border-b border-border py-6 pr-2"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 origin-left scale-x-0 bg-kiji/50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                      />
                      <span className="relative min-w-0 flex-1 pl-2">
                        <span className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="border border-igusa/40 px-2 py-0.5 text-[10px] tracking-wide text-matcha">{post.category}</span>
                          <time dateTime={post.date} className="text-[10px] text-sumi/65">
                            {formatDate(post.date)}
                          </time>
                        </span>
                        <span
                          className="block text-sm leading-snug text-sumi [word-break:auto-phrase] transition-colors duration-300 group-hover:text-ai line-clamp-2"
                          style={{ fontFamily: "var(--font-serif)" }}
                        >
                          {post.title}
                        </span>
                      </span>
                      <span aria-hidden="true" className="relative mt-1 shrink-0 text-xs text-sumi/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-kincya">
                        →
                      </span>
                    </Link>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
