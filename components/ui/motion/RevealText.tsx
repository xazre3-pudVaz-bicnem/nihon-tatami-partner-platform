"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ElementType } from "react";
import type { TextLine } from "./RiseText";
import { splitPhrases } from "./splitText";

type Props = {
  as?: ElementType;
  lines: TextLine[];
  className?: string;
  style?: CSSProperties;
  /** 開始までの遅延（秒） */
  delay?: number;
  /** 1文字ごとの間隔（秒） */
  stagger?: number;
};

const toText = (l: TextLine) => (typeof l === "string" ? l : l.text);
const nbsp = (ch: string) => (/^\s+$/.test(ch) ? " " : ch);

const charVariants: Variants = {
  hidden: { y: "108%" },
  visible: { y: "0%", transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * 画面に入ったときに1文字ずつマスクから立ち上がる見出し。
 * 改行は語のまとまり（splitPhrases）の間だけで起きる。
 * 読み上げ用に全文を aria-label に持ち、分割した文字は aria-hidden にする。
 */
export default function RevealText({ as: Tag = "h2", lines, className, style, delay = 0, stagger = 0.028 }: Props) {
  return (
    <Tag className={className} style={style} aria-label={lines.map(toText).join("")}>
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {lines.map((line, li) => (
          <span key={li} className={`block ${typeof line === "string" ? "" : line.className ?? ""}`}>
            {splitPhrases(toText(line)).map((group, gi) => (
              <span key={gi} className="inline-block whitespace-nowrap">
                {group.map((ch, ci) => (
                  <span key={ci} className="inline-block overflow-hidden align-bottom py-[0.08em] -my-[0.08em]">
                    <motion.span className="inline-block" variants={charVariants}>
                      {nbsp(ch)}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
