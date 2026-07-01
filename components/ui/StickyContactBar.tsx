"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_TEL } from "@/lib/site";

// Show the phone button only when SITE_TEL is set and not a placeholder
const isTelValid =
  SITE_TEL.trim() !== "" && !SITE_TEL.includes("XXX");

export default function StickyContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="complementary"
      aria-label="お問い合わせ"
    >
      <div
        className="flex h-14 border-t border-white/10"
        style={{ backgroundColor: "rgba(30,28,26,0.97)", backdropFilter: "blur(8px)" }}
      >
        {/* Phone button — only rendered when tel is configured */}
        {isTelValid && (
          <a
            href={`tel:${SITE_TEL.replace(/-/g, "")}`}
            className="flex-1 flex flex-col items-center justify-center text-white/60 hover:text-white border-r border-white/10 transition-colors"
          >
            <span className="text-[10px] tracking-widest" style={{ fontFamily: "var(--font-serif)" }}>
              電話で相談
            </span>
            <span className="text-[11px] font-medium mt-0.5">{SITE_TEL}</span>
          </a>
        )}

        {/* Primary CTA — 無料見積もり */}
        <Link
          href="/contact"
          className={`flex items-center justify-center text-white tracking-widest text-[11px] font-medium transition-opacity hover:opacity-90 ${
            isTelValid ? "flex-[1.4]" : "flex-1 border-r border-white/10"
          }`}
          style={{ backgroundColor: "#B88942", fontFamily: "var(--font-serif)" }}
        >
          無料見積もり
        </Link>

        {/* Secondary CTA — 法人相談 */}
        <Link
          href="/contact#business"
          className="flex-1 flex items-center justify-center text-white/60 hover:text-white border-l border-white/10 transition-colors text-[10px] tracking-widest"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          法人相談
        </Link>
      </div>
    </div>
  );
}
