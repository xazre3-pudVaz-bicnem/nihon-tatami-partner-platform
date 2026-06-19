"use client";

import Link from "next/link";
import { useState } from "react";
import { PLATFORM_URL } from "@/lib/metadata";

const NAV = [
  { label: "サービス紹介", href: "/#service" },
  { label: "業者の方へ", href: "/for-providers" },
  { label: "料金プラン", href: "/pricing" },
  { label: "会社概要", href: "/about" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-shiro/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 bg-sumi tatami-pattern" />
          <span className="text-base text-sumi tracking-widest" style={{ fontFamily: "var(--font-serif)" }}>
            日本畳パートナー
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-xs text-sumi/60 hover:text-sumi transition-colors tracking-wide">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href={PLATFORM_URL} className="text-xs text-ai border border-ai px-4 py-2 hover:bg-ai hover:text-white transition-all duration-200">
            プラットフォームを使う
          </Link>
        </div>

        <button className="md:hidden text-sumi/60" onClick={() => setOpen(!open)} aria-label="メニュー">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-shiro border-t border-border px-4 py-4 space-y-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sm text-sumi/70 py-1.5 border-b border-kiji">
              {n.label}
            </Link>
          ))}
          <Link href={PLATFORM_URL} className="block text-sm text-center bg-ai text-white py-2.5 mt-3">
            プラットフォームを使う
          </Link>
        </div>
      )}
    </header>
  );
}
