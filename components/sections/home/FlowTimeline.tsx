"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

type Step = { num: string; title: string; desc: string; sub?: string };

const ease = [0.22, 1, 0.36, 1] as const;

/** スクロールに合わせて金のラインが伸び、各ステップが順に点灯するタイムライン */
export default function FlowTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className="relative">
      {/* ベースの線と、スクロールで伸びる金の線 */}
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
      <motion.div
        className="parallax-layer absolute left-[15px] top-2 bottom-2 w-px origin-top bg-kincya"
        style={{ scaleY }}
        aria-hidden="true"
      />

      <ol className="relative">
      {steps.map((step) => (
        <motion.li
          key={step.num}
          className="relative flex gap-8 pb-12 last:pb-0"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
        >
          <motion.span
            className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border text-[10px]"
            style={{ fontFamily: "var(--font-serif)" }}
            initial={{ backgroundColor: "#FFFFFF", borderColor: "rgba(184,137,66,0.4)", color: "#8A642B" }}
            whileInView={{ backgroundColor: "#B88942", borderColor: "#B88942", color: "#1E1C1A" }}
            viewport={{ once: true, margin: "0px 0px -35% 0px" }}
            transition={{ duration: 0.6, ease }}
          >
            {step.num}
          </motion.span>
          <div className="pt-1">
            <h3 className="mb-2 text-lg text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-sumi/65">{step.desc}</p>
            {step.sub && <p className="mt-2 border-l-2 border-kincya/30 pl-3 text-xs text-sumi/65">{step.sub}</p>}
          </div>
        </motion.li>
      ))}
      </ol>
    </div>
  );
}
