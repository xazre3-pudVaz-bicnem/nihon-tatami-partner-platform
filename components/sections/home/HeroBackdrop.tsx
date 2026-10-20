"use client";

import { useRef } from "react";
import { preload } from "react-dom";
import { motion, useScroll, useTransform } from "framer-motion";

/** スマホの縦長画面では、縦構図に切り出した軽い画像を使う（PCの約1/5の容量） */
const SP_MEDIA = "(max-width: 640px)";
const PC_MEDIA = "(min-width: 641px)";

type Props = {
  /** PC・タブレット用（横長） */
  src: string;
  /** スマホ用（縦長 9:16） */
  spSrc: string;
  alt: string;
};

/** ファーストビューの背景写真（ゆっくりズーム → スクロールで奥へ沈むパララックス） */
export default function HeroBackdrop({ src, spSrc, alt }: Props) {
  // 最初に表示される大きな画像なので、画面幅に合う方だけを最優先で先読みする
  preload(spSrc, { as: "image", fetchPriority: "high", media: SP_MEDIA });
  preload(src, { as: "image", fetchPriority: "high", media: PC_MEDIA });

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div className="parallax-layer absolute inset-0" style={{ y, scale, opacity }}>
        <div className="anim-ken-burns absolute inset-0">
          <picture>
            <source media={SP_MEDIA} srcSet={spSrc} width={506} height={900} />
            {/* eslint-disable-next-line @next/next/no-img-element -- 画面幅で構図を切り替えるため picture を使う */}
            <img
              src={src}
              alt={alt}
              width={1600}
              height={900}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
            />
          </picture>
        </div>
      </motion.div>
    </div>
  );
}
