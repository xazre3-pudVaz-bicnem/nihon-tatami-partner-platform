"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
  /** 上下に動かす量（%） */
  strength?: number;
  className?: string;
};

/** セクション背景の写真をスクロールに合わせてゆっくり動かす（親は relative + overflow-hidden） */
export default function ParallaxBackground({ src, alt = "", strength = 12, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div className="parallax-layer absolute inset-x-0 -inset-y-[15%]" style={{ y }}>
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
