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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-border overflow-hidden hover:border-kincya/30 transition-all duration-300 hover:shadow-sm"
    >
      <div className="relative h-48 bg-kiji">
        <Image
          src={work.after}
          alt={work.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-sumi text-white text-xs px-2 py-1">{work.category}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-kincya mb-1">{work.service}</p>
        <h3 className="text-sm text-sumi mb-2 leading-snug" style={{ fontFamily: "var(--font-serif)" }}>
          {work.title}
        </h3>
        <p className="text-xs text-sumi/60 leading-relaxed line-clamp-3">{work.desc}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {work.tags.map((tag) => (
            <span key={tag} className="text-xs border border-border text-sumi/50 px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
