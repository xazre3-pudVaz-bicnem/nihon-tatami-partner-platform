"use client";

import { useEffect } from "react";

const STORAGE_KEY = "kt-fonts";

/**
 * 明朝 Webフォントを使う画面幅（タブレット・PC）。
 * スマホは端末の標準の明朝体（iPhone はヒラギノ明朝）で表示し、
 * 数百KBのフォント読み込みと、差し替え時の再レイアウトをなくす。
 */
const WEBFONT_MEDIA = "(min-width: 768px)";

/**
 * 以前に Webフォントを読み込んだことがある端末では、描画前に html へ .fonts-ready を付ける。
 * （フォントはブラウザに保存済みのため、最初から明朝の Webフォントで表示できる）
 */
export const FONTS_SCRIPT = `try{if(matchMedia("${WEBFONT_MEDIA}").matches&&localStorage.getItem("${STORAGE_KEY}"))document.documentElement.classList.add("fonts-ready")}catch(e){}`;

/**
 * 見出しの明朝 Webフォント（日本語のため数百KB）は、ページの読み込みが終わってから適用する。
 * それまでは端末の標準の明朝体で表示し、文字とファーストビュー画像の表示を優先する。
 */
export default function FontActivator() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains("fonts-ready") || !window.matchMedia(WEBFONT_MEDIA).matches) return;

    let timer = 0;
    const apply = () => {
      root.classList.add("fonts-ready");
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // 保存できない環境では、次回も読み込み後に適用する
      }
    };
    const schedule = () => {
      timer = window.setTimeout(apply, 150);
    };

    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });

    return () => {
      window.removeEventListener("load", schedule);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
