"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import RevealText from "./RevealText";
import type { TextLine } from "./RiseText";

type Props = {
  /** 英字の小見出し（例: "Services"） */
  en: string;
  /** 見出し（行ごとに分割可） */
  title: TextLine[];
  lead?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  as?: "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * セクション見出し（英字ラベル → 見出しの文字アニメーション → 金の罫線 → リード文）。
 */
export default function SectionHeading({
  en,
  title,
  lead,
  align = "left",
  light = false,
  as = "h2",
  className = "",
  titleClassName = "text-3xl sm:text-4xl",
}: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      <motion.div
        className={`flex items-center gap-3 mb-5 ${center ? "justify-center" : ""}`}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7, ease }}
      >
        <motion.span
          aria-hidden="true"
          className="block h-px w-8 origin-left bg-kincya/70"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        />
        <span className={`text-[10px] tracking-[0.42em] uppercase ${light ? "text-kincya" : "text-kincya-ink"}`}>{en}</span>
      </motion.div>

      <RevealText
        as={as}
        lines={title}
        className={`${titleClassName} ${light ? "text-white" : "text-sumi"} leading-snug`}
        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
        delay={0.12}
      />

      <motion.div
        aria-hidden="true"
        className={`mt-6 h-px w-14 origin-left ${center ? "mx-auto origin-center" : ""}`}
        style={{ background: "linear-gradient(90deg, #B88942, rgba(184,137,66,0))" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay: 0.35 }}
      />

      {lead && (
        <motion.div
          className={`mt-6 text-sm leading-relaxed ${light ? "text-white/60" : "text-sumi/70"} ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          transition={{ duration: 0.8, ease, delay: 0.25 }}
        >
          {lead}
        </motion.div>
      )}
    </div>
  );
}
