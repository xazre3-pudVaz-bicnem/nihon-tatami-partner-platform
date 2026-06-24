"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_NAME, NAV_LINKS, SITE_TEL } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 56);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-kiji/97 border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-sumi/50 border-b border-white/10"
        }`}
        style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="日本畳パートナーズ トップへ">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="日本畳パートナーズ ロゴ"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <span
                className={`block text-sm tracking-[0.14em] transition-colors duration-500 ${
                  scrolled ? "text-sumi" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {SITE_NAME}
              </span>
              <span
                className={`block text-[9px] tracking-[0.25em] -mt-0.5 transition-colors duration-500 ${
                  scrolled ? "text-sumi/35" : "text-white/35"
                }`}
              >
                NIHON TATAMI PARTNERS
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 flex-1 justify-center" aria-label="メインナビゲーション">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-[11px] tracking-[0.1em] transition-colors duration-300 whitespace-nowrap ${
                  scrolled
                    ? "text-sumi/55 hover:text-sumi"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              href="/contact#business"
              className={`text-[11px] px-4 py-2 border transition-all duration-300 whitespace-nowrap tracking-wider ${
                scrolled
                  ? "border-sumi/20 text-sumi/60 hover:border-sumi/50 hover:text-sumi"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              法人のご相談
            </Link>
            <Link
              href="/contact"
              className={`text-[11px] px-5 py-2.5 tracking-wider transition-all duration-300 whitespace-nowrap ${
                scrolled
                  ? "bg-sumi text-white hover:bg-ai"
                  : "bg-white/12 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              無料見積もり
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 w-6 shrink-0 transition-colors ${
              scrolled ? "text-sumi" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span
              className={`block h-px w-full bg-current transition-transform duration-300 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-transform duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: "rgba(30,28,26,0.98)" }}
          >
            {/* Tatami grid overlay */}
            <div className="absolute inset-0 tatami-dark" aria-hidden="true" />

            {/* Header-height spacer + close button */}
            <div className="relative h-16 flex items-center justify-between px-5">
              <span
                className="text-xs text-white/30 tracking-[0.25em] uppercase"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Menu
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/50 hover:text-white transition-colors w-6 h-6 flex items-center justify-center"
                aria-label="メニューを閉じる"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-12">
              <p className="text-[9px] text-kincya/70 tracking-[0.4em] mb-8 uppercase">Navigation</p>
              <nav className="space-y-5" aria-label="モバイルナビゲーション">
                {NAV_LINKS.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.055, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between group"
                    >
                      <span
                        className="text-xl text-white/80 group-hover:text-white transition-colors duration-200"
                        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.1em" }}
                      >
                        {n.label}
                      </span>
                      <span className="text-white/20 text-xs group-hover:text-kincya transition-colors duration-200 mr-2">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <div className="w-12 h-px bg-white/10 my-8" />

              {/* Mobile CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-2.5"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center py-4 text-xs text-white tracking-[0.25em]"
                  style={{ backgroundColor: "#B88942" }}
                >
                  無料見積もりを依頼する
                </Link>
                <Link
                  href="/contact#business"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center py-3.5 text-xs text-white/70 tracking-[0.2em] border border-white/15 hover:bg-white/5 transition-colors"
                >
                  法人・管理会社のご相談
                </Link>
                <a
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="flex items-center justify-center py-2.5 text-xs text-white/35 tracking-widest"
                >
                  {SITE_TEL}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
