"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** スクロールに合わせて画像を上下させる量（%） */
  strength?: number;
  /** 画面に入ったときに四辺から開くように表示する */
  reveal?: boolean;
};

/**
 * スクロールに合わせて奥行きが出る写真。親要素で高さ（h-80 など）を指定する。
 * 移動は transform のみ。「視差効果を減らす」設定では CSS（.parallax-layer）で止める。
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
  strength = 9,
  reveal = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={reveal ? { clipPath: "inset(10% 10% 10% 10%)", opacity: 0.4 } : false}
      whileInView={reveal ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 } : undefined}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div className="parallax-layer absolute inset-x-0 -inset-y-[12%]" style={{ y }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </motion.div>
    </motion.div>
  );
}
