"use client";

import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  /** カーソルに引き寄せられる強さ（0〜1） */
  strength?: number;
  className?: string;
};

/**
 * マウス操作のときだけ、カーソルの方向へわずかに引き寄せられるボタン用ラッパー。
 * タッチ操作・「視差効果を減らす」設定では動かない。
 */
export default function Magnetic({ children, strength = 0.28, className = "" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 17, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 17, mass: 0.4 });

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div className={`inline-block ${className}`} style={{ x: sx, y: sy }} onPointerMove={handleMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  );
}
