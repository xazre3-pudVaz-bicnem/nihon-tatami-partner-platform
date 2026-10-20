import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 1周にかける秒数（大きいほどゆっくり） */
  duration?: number;
  reverse?: boolean;
  className?: string;
};

/**
 * 無限に流れる装飾テキスト帯（CSS のみ・JS 不要）。
 * 同じ内容を2つ並べて -50% 移動することで継ぎ目なくループする。
 * 装飾目的のため aria-hidden（リンクなど操作できる要素は入れないこと）。
 */
export default function Marquee({ children, duration = 40, reverse = false, className = "" }: Props) {
  return (
    <div className={`marquee ${reverse ? "marquee--reverse" : ""} ${className}`} aria-hidden="true">
      <div className="marquee__track" style={{ "--marquee-duration": `${duration}s` } as CSSProperties}>
        <div className="marquee__group">{children}</div>
        <div className="marquee__group">{children}</div>
      </div>
    </div>
  );
}
