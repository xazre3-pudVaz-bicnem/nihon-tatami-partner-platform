// 文字アニメーション用の分割。
// 1文字ずつ別要素（inline-block）にするとブラウザの日本語改行処理（禁則・文節）が効かなくなるため、
// ここで「文字単位」と「改行してよい語のまとまり（文節に近い単位）」を決定的に作る。
// サーバーとクライアントで同じ結果になるよう、辞書や Intl.Segmenter は使わない。

const ATTACH_TO_PREV = new Set(Array.from("、。，．,.・：；:;？！?!ー」』）)］】〕〉》ゝゞヽヾ々…‥ぁぃぅぇぉっゃゅょゎァィゥェォッャュョヮヵヶ"));
const ATTACH_TO_NEXT = new Set(Array.from("「『（(［【〔〈《"));
/** この文字で終わる単位の後ろでは改行してよい */
const BREAK_AFTER = new Set(Array.from("、。，．,.・／/！？!?"));
/** 後ろの語に付く接頭語 */
const PREFIX = new Set(Array.from("おご御"));

const isHiragana = (ch: string) => /[ぁ-ゟ]/.test(ch);
const isSpace = (ch: string) => /\s/.test(ch);

/** 文字単位に分割（句読点・小書き文字・閉じかっこは直前に、開きかっこは直後にくっつける） */
export function splitText(text: string): string[] {
  const out: string[] = [];
  let carry = "";
  for (const ch of Array.from(text)) {
    if (ATTACH_TO_NEXT.has(ch)) {
      carry += ch;
      continue;
    }
    if (ATTACH_TO_PREV.has(ch) && out.length > 0 && !carry) {
      out[out.length - 1] += ch;
      continue;
    }
    out.push(carry + ch);
    carry = "";
  }
  if (carry) out.push(carry);
  return out;
}

/**
 * 改行してよい単位（語のまとまり）ごとに、文字単位の配列を返す。
 * 例: 「まずはお気軽にご相談ください」→ [まずは][お気軽に][ご相談ください]
 */
export function splitPhrases(text: string): string[][] {
  const groups: string[][] = [];
  let cur: string[] = [];
  let prevKind: "H" | "K" | null = null;

  const flush = () => {
    if (cur.length) groups.push(cur);
    cur = [];
  };

  for (const unit of splitText(text)) {
    const chars = Array.from(unit);
    const core = chars.find((c) => !ATTACH_TO_NEXT.has(c)) ?? chars[0];

    if (isSpace(core)) {
      flush();
      groups.push([unit]);
      prevKind = null;
      continue;
    }

    const kind = isHiragana(core) ? "H" : "K";
    if (kind === "K" && prevKind === "H" && cur.length) {
      const last = cur[cur.length - 1];
      if (PREFIX.has(last)) {
        // 接頭語「お・ご」は後ろの語へ
        if (cur.length > 1) {
          groups.push(cur.slice(0, -1));
          cur = [last];
        }
      } else {
        flush();
      }
    }
    cur.push(unit);
    prevKind = kind;

    if (BREAK_AFTER.has(chars[chars.length - 1])) {
      flush();
      prevKind = null;
    }
  }
  flush();
  return groups;
}
