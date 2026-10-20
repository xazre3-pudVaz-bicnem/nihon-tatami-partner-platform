"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
};

const VARIANTS: Record<Direction, Variants> = {
  up:    { hidden: { opacity: 0, y: 28 },  visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -28 }, visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 },  visible: { opacity: 1, x: 0 } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
};

/**
 * 画面に入ったときにふわっと表示するラッパー。
 * 「視差効果を減らす」設定では MotionProvider（reducedMotion="user"）により移動を省略する。
 * サーバーとクライアントで同じ構造を描画するため、ここでは設定による分岐をしない。
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  duration = 0.75,
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      variants={VARIANTS[direction]}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
