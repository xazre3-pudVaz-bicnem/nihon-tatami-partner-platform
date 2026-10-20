import type { CSSProperties } from "react";
import Marquee from "@/components/ui/motion/Marquee";
import { HOME_MARQUEE_WORDS } from "@/data/home";

/** セクション間を流れるキーワードの帯（装飾） */
export default function KeywordBand() {
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-sumi py-8 sm:py-10" aria-hidden="true">
      <Marquee duration={55}>
        {HOME_MARQUEE_WORDS.map((w, i) => (
          <span key={w} className="flex items-center">
            <span
              className={`px-8 sm:px-12 text-4xl sm:text-6xl whitespace-nowrap ${i % 2 === 0 ? "text-outline" : "text-kincya/80"}`}
              style={{ fontFamily: "var(--font-serif)", "--outline-color": "rgba(255,255,255,0.28)" } as CSSProperties}
            >
              {w}
            </span>
            <span className="text-kincya/40 text-xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
