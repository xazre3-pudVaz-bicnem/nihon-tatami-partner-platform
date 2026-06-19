"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Target } from "@/data/targets";

type Props = {
  target: Target;
  index?: number;
};

const ICONS: Record<string, string> = {
  house: "⌂",
  building: "▣",
  office: "◈",
  ryokan: "⊞",
  shrine: "⊡",
  store: "◻",
};

export default function TargetCard({ target, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={target.href}
        className="group block bg-white border border-border hover:border-ai/30 transition-all duration-300 hover:shadow-sm p-6"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 border border-kiji-dark bg-kiji flex items-center justify-center shrink-0 text-sumi/40 text-lg">
            {ICONS[target.icon] || "◻"}
          </div>
          <h3
            className="text-base text-sumi mt-2 group-hover:text-ai transition-colors duration-200 leading-snug"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {target.title}
          </h3>
        </div>
        <p className="text-xs text-sumi/60 leading-relaxed mb-4">{target.desc}</p>
        <ul className="space-y-1.5">
          {target.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-sumi/60">
              <span className="text-igusa mt-0.5 shrink-0">—</span>
              {pt}
            </li>
          ))}
        </ul>
        <p className="text-xs text-ai mt-4 group-hover:underline">詳しく見る →</p>
      </Link>
    </motion.div>
  );
}
