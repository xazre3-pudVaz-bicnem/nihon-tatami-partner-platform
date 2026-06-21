"use client";

import { useState } from "react";
import ColumnCard from "@/components/ui/ColumnCard";
import type { ColumnArticle } from "@/data/column";

const CATEGORY_LIST = [
  "すべて",
  "畳の基礎知識",
  "畳素材・種類",
  "畳の費用・相場",
  "畳のお手入れ",
  "法人・施設向け",
  "原状回復",
  "内装工事",
  "地域情報",
] as const;

type CategoryOption = (typeof CATEGORY_LIST)[number];

interface Props {
  articles: ColumnArticle[];
}

export default function ColumnFilter({ articles }: Props) {
  const [selected, setSelected] = useState<CategoryOption>("すべて");

  // Only show chips for categories that have at least one article
  const availableCategories = CATEGORY_LIST.filter(
    (cat) =>
      cat === "すべて" || articles.some((a) => a.category === cat)
  );

  // Deduplicate actual categories from articles for grouping
  const activeCategories =
    selected === "すべて"
      ? [...new Set(articles.map((a) => a.category))]
      : articles.some((a) => a.category === selected)
      ? [selected]
      : [];

  const filteredByCategory = (cat: string) =>
    articles.filter((a) => a.category === cat);

  return (
    <>
      {/* ── Category chip filter ─────────────────────────── */}
      <section className="py-6 bg-cloud/40 border-b border-border sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
            style={{ flexWrap: "nowrap" }}
            role="tablist"
            aria-label="カテゴリで絞り込む"
          >
            {availableCategories.map((cat) => {
              const isActive = selected === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(cat)}
                  className={[
                    "flex-none text-xs px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-kincya focus-visible:ring-offset-1",
                    isActive
                      ? "bg-kincya border-kincya text-white font-medium shadow-sm"
                      : "bg-shiro border-border text-sumi/60 hover:border-kincya hover:text-sumi",
                  ].join(" ")}
                  style={
                    cat === "すべて"
                      ? { fontFamily: "var(--font-serif)" }
                      : { fontFamily: "var(--font-serif)" }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Article grid ────────────────────────────────── */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {activeCategories.length === 0 ? (
            <p className="text-sm text-sumi/50 text-center py-8">
              このカテゴリの記事はまだありません。
            </p>
          ) : (
            activeCategories.map((cat) => {
              const catArticles = filteredByCategory(cat);
              if (catArticles.length === 0) return null;
              return (
                <div key={cat} className="scroll-mt-24">
                  <h2
                    className="text-xl text-sumi mb-6 pl-4 border-l-2 border-kincya"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {cat}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {catArticles.map((article, i) => (
                      <ColumnCard key={article.slug} article={article} index={i} />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}
