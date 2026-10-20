"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Framer Motion の共通設定。
 * reducedMotion="user": OS の「視差効果を減らす」設定に従い、移動系のアニメーションを自動で省略する。
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
