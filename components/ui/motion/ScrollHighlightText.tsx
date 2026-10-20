"use client";

import { useRef, type CSSProperties } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** 読み終えた文字の不透明度に対する、未読文字の不透明度 */
  dimOpacity?: number;
};

function Char({ ch, progress, range, dim }: { ch: string; progress: MotionValue<number>; range: [number, number]; dim: number }) {
  const opacity = useTransform(progress, range, [dim, 1]);
  return (
    <motion.span className="highlight-char" style={{ opacity }}>
      {ch}
    </motion.span>
  );
}

/**
 * スクロールに合わせて、文章が1文字ずつ浮かび上がるステートメント。
 * 文字の位置は動かさず不透明度だけを変えるので、レイアウトのずれは起きない。
 */
export default function ScrollHighlightText({ text, className = "", style, dimOpacity = 0.16 }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.42"] });
  const chars = Array.from(text);
  const n = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {chars.map((ch, i) => (
          <Char key={i} ch={ch} progress={scrollYProgress} range={[i / n, Math.min(1, (i + 1.5) / n)]} dim={dimOpacity} />
        ))}
      </span>
    </p>
  );
}
