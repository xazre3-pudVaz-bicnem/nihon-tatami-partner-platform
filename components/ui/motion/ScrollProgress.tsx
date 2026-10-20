"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** 画面最上部の金色の読了バー（ページのスクロール量を表示） */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 32, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgba(184,137,66,0.35), #B88942 45%, #D8B26E)",
      }}
    />
  );
}
