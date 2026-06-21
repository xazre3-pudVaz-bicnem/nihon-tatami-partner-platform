"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { WorkDetail } from "@/data/works-detail";

type Props = {
  works: WorkDetail[];
  categories: { value: string; label: string }[];
};

export default function WorksFilter({ works, categories }: Props) {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? works : works.filter((w) => w.category === active);

  return (
    <>
      <section className="py-8 bg-cloud/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={`text-xs border px-4 py-1.5 transition-colors duration-200 ${
                  active === cat.value
                    ? "border-sumi text-sumi"
                    : "border-border text-sumi/60 hover:border-ai hover:text-ai"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((work) => (
              <Link
                key={work.slug}
                href={`/works/${work.slug}`}
                className="group block bg-white border border-border hover:border-kincya transition-colors overflow-hidden"
              >
                <div className="relative h-48 bg-kiji overflow-hidden">
                  <Image
                    src={work.heroImage}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-xs border border-igusa/40 text-igusa px-2 py-0.5">{work.categoryLabel}</span>
                    <span className="text-xs text-sumi/40">{work.targetLabel}</span>
                  </div>
                  <h2 className="text-sm text-sumi mb-2 leading-snug line-clamp-2" style={{ fontFamily: "var(--font-serif)" }}>
                    {work.title}
                  </h2>
                  <p className="text-xs text-sumi/55 leading-relaxed line-clamp-2">{work.result}</p>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-sm text-sumi/50 text-center py-10">該当する施工事例はありません。</p>
          )}
        </div>
      </section>
    </>
  );
}
