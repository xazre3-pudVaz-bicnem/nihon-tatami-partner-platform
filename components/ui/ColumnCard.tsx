"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ColumnArticle } from "@/data/column";

type Props = {
  article: ColumnArticle;
  index?: number;
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export default function ColumnCard({ article, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/column/${article.slug}`}
        className="group flex flex-col bg-white border border-border hover:border-kincya/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
      >
        <div className="relative h-44 bg-kiji overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs border border-igusa/30 text-igusa px-2 py-0.5">{article.category}</span>
            <span className="text-xs text-sumi/40">{formatDate(article.publishedAt)}</span>
          </div>
          <h3
            className="text-sm text-sumi mb-2 leading-snug group-hover:text-ai transition-colors duration-200"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {article.title}
          </h3>
          <p className="text-xs text-sumi/60 leading-relaxed line-clamp-2">{article.excerpt}</p>
          <p className="text-xs text-sumi/40 mt-3">読了時間 約{article.readTime}分</p>
        </div>
      </Link>
    </motion.div>
  );
}
