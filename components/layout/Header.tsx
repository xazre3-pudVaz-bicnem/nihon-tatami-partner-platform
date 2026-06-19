"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_NAME, NAV_LINKS, SITE_TEL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-shiro/97 shadow-sm backdrop-blur-sm" : "bg-shiro"
      } border-b border-border`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-sumi text-white">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
          <p className="text-xs text-white/50 tracking-wide">畳・内装・原状回復の専門パートナー</p>
          <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="text-xs text-white/70 hover:text-white transition-colors tracking-wider">
            {SITE_TEL}（9:00〜18:00）
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-8 h-8 bg-sumi tatami-pattern relative overflow-hidden">
            <div className="absolute inset-0 bg-sumi/80" />
          </div>
          <div>
            <span
              className="block text-base text-sumi tracking-[0.12em] group-hover:text-ai transition-colors duration-300"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {SITE_NAME}
            </span>
            <span className="block text-[10px] text-sumi/40 tracking-[0.2em] -mt-0.5">NIHON TATAMI PARTNERS</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-xs text-sumi/60 hover:text-sumi transition-colors tracking-wide whitespace-nowrap"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/contact#business"
            className="text-xs text-sumi/70 border border-border px-4 py-2 hover:border-sumi hover:text-sumi transition-all duration-200 whitespace-nowrap"
          >
            法人のご相談
          </Link>
          <Link
            href="/contact"
            className="text-xs bg-sumi text-white px-5 py-2.5 hover:bg-sumi-light transition-colors duration-200 whitespace-nowrap tracking-wider"
          >
            無料見積もり
          </Link>
        </div>

        <button
          className="md:hidden text-sumi/60 hover:text-sumi transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-shiro border-t border-border">
          <div className="px-4 py-4 space-y-0">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 border-b border-kiji text-sm text-sumi/70 hover:text-sumi transition-colors"
              >
                <span style={{ fontFamily: "var(--font-serif)" }}>{n.label}</span>
                <span className="text-sumi/30 text-xs">→</span>
              </Link>
            ))}
          </div>
          <div className="px-4 py-4 space-y-2 bg-kiji/40">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-sm text-center bg-sumi text-white py-3 tracking-wider hover:bg-sumi-light transition-colors"
            >
              無料見積もりを依頼する
            </Link>
            <Link
              href="/contact#business"
              onClick={() => setOpen(false)}
              className="block text-sm text-center border border-sumi/30 text-sumi py-3 tracking-wider hover:bg-sumi/5 transition-colors"
            >
              法人・管理会社のご相談
            </Link>
            <a
              href={`tel:${SITE_TEL.replace(/-/g, "")}`}
              className="block text-sm text-center text-sumi/60 py-2"
            >
              {SITE_TEL}（9:00〜18:00）
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
