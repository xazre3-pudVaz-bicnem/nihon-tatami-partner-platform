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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={target.href}
        className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-ai/30 hover:shadow-[0_26px_50px_-30px_rgba(30,28,26,0.55)]"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-kiji">
          <Image
            src={target.image}
            alt={target.imageAlt}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-80"
            style={{ background: "linear-gradient(to top, rgba(30,28,26,0.6) 0%, transparent 55%)" }}
          />
          <div className="absolute bottom-3 left-3">
            <span className="bg-sumi/80 px-2 py-1 text-[10px] tracking-wider text-white backdrop-blur-sm">{target.shortTitle}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h3
            className="mb-2 text-base leading-snug text-sumi transition-colors duration-300 group-hover:text-ai"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {target.title}
          </h3>
          <p className="mb-4 text-xs leading-relaxed text-sumi/70">{target.desc}</p>
          <ul className="space-y-1.5">
            {target.points.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-sumi/70">
                <span aria-hidden="true" className="mt-0.5 shrink-0 text-igusa">—</span>
                {pt}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-5 text-xs text-ai">
            <span className="link-draw pb-0.5">詳しく見る</span>
            <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
