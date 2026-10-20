"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { WorkItem } from "@/data/works";

type Props = {
  work: WorkItem;
  index?: number;
};

export default function WorksCard({ work, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-kincya/40 hover:shadow-[0_26px_50px_-30px_rgba(30,28,26,0.55)]"
    >
      <div className="relative h-52 overflow-hidden bg-kiji">
        <Image
          src={work.after}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute left-3 top-3">
          <span className="bg-sumi px-2 py-1 text-xs text-white">{work.category}</span>
        </div>
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-kincya transition-transform duration-700 group-hover:scale-x-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1 text-xs text-kincya-ink">{work.service}</p>
        <h3 className="mb-2 text-sm leading-snug text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
          {work.title}
        </h3>
        <p className="text-xs leading-relaxed text-sumi/70 line-clamp-3">{work.desc}</p>
        <div className="mt-auto flex flex-wrap gap-1 pt-3">
          {work.tags.map((tag) => (
            <span key={tag} className="border border-border px-2 py-0.5 text-xs text-sumi/65">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
