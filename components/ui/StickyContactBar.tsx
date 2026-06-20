"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_TEL } from "@/lib/site";

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
        className="flex border-t border-white/10"
        style={{ backgroundColor: "rgba(30,28,26,0.97)", backdropFilter: "blur(8px)" }}
      >
        <a
          href={`tel:${SITE_TEL.replace(/-/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center py-3 text-white/60 hover:text-white border-r border-white/10 transition-colors"
        >
          <span className="text-[10px] tracking-widest">電話で相談</span>
        </a>
        <Link
          href="/contact"
          className="flex-[1.4] flex flex-col items-center justify-center py-3 text-white tracking-widest text-[10px]"
          style={{ backgroundColor: "#B88942" }}
        >
          無料見積もり
        </Link>
        <Link
          href="/contact#business"
          className="flex-1 flex flex-col items-center justify-center py-3 text-white/60 hover:text-white border-l border-white/10 transition-colors text-[10px] tracking-widest"
        >
          法人相談
        </Link>
      </div>
    </div>
  );
}
