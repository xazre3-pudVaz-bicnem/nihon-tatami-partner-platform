import type { CSSProperties, ElementType } from "react";
import { splitPhrases } from "./splitText";

export type TextLine = string | { text: string; className?: string };

type Props = {
  as?: ElementType;
  lines: TextLine[];
  className?: string;
  style?: CSSProperties;
  /** 開始までの遅延（ms） */
  delay?: number;
};

const toText = (l: TextLine) => (typeof l === "string" ? l : l.text);
const nbsp = (ch: string) => (/^\s+$/.test(ch) ? " " : ch);

/**
 * 1文字ずつ下から立ち上がる見出し（CSS アニメーション）。
 * JS の読み込みを待たずに初回描画から始まるため、ファーストビュー（H1 など）向け。
 * 改行は語のまとまり（splitPhrases）の間だけで起きる。
 * 読み上げ用に全文を aria-label に持ち、分割した文字は aria-hidden にする。
 */
export default function RiseText({ as: Tag = "span", lines, className, style, delay = 0 }: Props) {
  let index = 0;
  return (
    <Tag className={className} style={style} aria-label={lines.map(toText).join("")}>
      {lines.map((line, li) => (
        <span key={li} aria-hidden="true" className={`block ${typeof line === "string" ? "" : line.className ?? ""}`}>
          {splitPhrases(toText(line)).map((group, gi) => (
            <span key={gi} className="inline-block whitespace-nowrap">
              {group.map((ch, ci) => (
                <span key={ci} className="rise-char">
                  <span style={{ "--i": index++, "--d": `${delay}ms` } as CSSProperties}>{nbsp(ch)}</span>
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
