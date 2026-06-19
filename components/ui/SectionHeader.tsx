"use client";
import { motion } from "framer-motion";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, align = "center", light = false }: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-sumi";
  const eyebrowColor = light ? "text-kincya" : "text-kincya";
  const subtitleColor = light ? "text-white/60" : "text-sumi/50";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${alignClass} mb-12`}
    >
      {eyebrow && (
        <p className={`text-xs tracking-[0.3em] uppercase mb-4 ${eyebrowColor}`} style={{ fontFamily: "var(--font-sans)" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl leading-snug ${titleColor}`}
        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
      >
        {title}
      </h2>
      {align === "center" && (
        <div className="w-12 h-px bg-kincya/60 mt-5 mb-0" />
      )}
      {subtitle && (
        <p className={`text-sm mt-4 max-w-2xl leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
