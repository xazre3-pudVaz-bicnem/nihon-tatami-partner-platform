"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

/**
 * サイト全体のスムーススクロール（Lenis）。
 * - 子要素は包まない（root モード）ので、有効化してもページが再マウントされない
 * - 「視差効果を減らす」設定の環境では無効（ネイティブのスクロールのまま）
 * - タッチ操作はネイティブのまま（syncTouch は使わない）
 */
export default function SmoothScroll() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!enabled) return null;
  return <ReactLenis root options={{ lerp: 0.12, anchors: { offset: -88 } }} />;
}
