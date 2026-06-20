"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Target } from "@/data/targets";

type Props = {
  target: Target;
  index?: number;
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
        className="group block bg-white border border-border hover:border-ai/30 transition-all duration-300 hover:shadow-sm overflow-hidden"
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-kiji">
          <Image
            src={target.image}
            alt={target.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Bottom gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(30,28,26,0.55) 0%, transparent 50%)" }}
          />
          {/* Category label */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-sumi/80 text-white text-[10px] px-2 py-1 tracking-wider backdrop-blur-sm">
              {target.shortTitle}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3
            className="text-base text-sumi mb-2 group-hover:text-ai transition-colors duration-200 leading-snug"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {target.title}
          </h3>
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
        </div>
      </Link>
    </motion.div>
  );
}
