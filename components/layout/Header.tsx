"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLenis } from "lenis/react";
import { SITE_NAME, NAV_LINKS, SITE_TEL } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // スクロール方向に応じてヘッダーを隠す／出す（ページ上部では常に表示）
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 56);
    if (open) return;
    if (y > 200 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y <= 200) setHidden(false);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 56);
  }, []);

  // ページ遷移したらメニューを閉じる
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // メニューを開いている間は背面のスクロールを止める（Lenis とネイティブの両方）
  useEffect(() => {
    if (open) {
      setHidden(false);
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, lenis]);

  // Esc キーでメニューを閉じる
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const solid = scrolled || open;
  // トップページだけはヒーロー写真の上に重ねる半透明。他のページは白い背景の上に乗るため不透明の墨色にする
  const overHero = pathname === "/";

  return (
    <>
      <motion.header
        className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          solid && !open
            ? "bg-kiji/95 border-b border-border/60 shadow-[0_8px_30px_-18px_rgba(30,28,26,0.35)]"
            : open
              ? "bg-sumi border-b border-white/10"
              : overHero
                ? "bg-sumi/40 border-b border-white/10"
                : "bg-sumi border-b border-white/10"
        }`}
        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease }}
        onFocusCapture={() => setHidden(false)}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label={`${SITE_NAME} トップへ`}>
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 group-hover:ring-kincya/60 transition-all duration-500 group-hover:rotate-[20deg]">
              <Image src="/logo-96.png" alt={`${SITE_NAME} ロゴ`} width={36} height={36} className="w-full h-full object-cover" priority />
            </div>
            <div>
              <span
                className={`block text-sm tracking-[0.14em] transition-colors duration-500 ${solid && !open ? "text-sumi" : "text-white"}`}
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {SITE_NAME}
              </span>
              <span
                className={`block text-[9px] tracking-[0.25em] -mt-0.5 transition-colors duration-500 ${
                  solid && !open ? "text-sumi/70" : "text-white/65"
                }`}
              >
                KATSUSHIKA TATAMI STORE
              </span>
            </div>
          </Link>

          {/* Desktop nav（1280px 以上） */}
          <nav className="hidden xl:flex items-center gap-x-6 flex-1 justify-center" aria-label="メインナビゲーション">
            {NAV_LINKS.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-[11px] tracking-[0.1em] whitespace-nowrap transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:bg-kincya after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  } ${
                    scrolled
                      ? active ? "text-sumi" : "text-sumi/55 hover:text-sumi"
                      : active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {/* 法人のご相談（1280px 以上） */}
            <Link
              href="/contact#business"
              className={`hidden xl:inline-block text-[11px] px-4 py-2 border transition-all duration-300 whitespace-nowrap tracking-wider ${
                scrolled
                  ? "border-sumi/20 text-sumi/60 hover:border-sumi/50 hover:text-sumi"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              法人のご相談
            </Link>
            {/* 無料見積もり（640px 以上） */}
            <Link
              href="/contact"
              className={`btn-shine hidden sm:inline-block text-[11px] px-5 py-2.5 tracking-wider whitespace-nowrap transition-colors duration-300 ${
                solid && !open ? "bg-sumi text-white hover:bg-ai" : "bg-kincya text-white hover:bg-do"
              }`}
            >
              無料見積もり
            </Link>

            {/* Hamburger（1280px 未満） */}
            <button
              className={`xl:hidden relative w-10 h-10 -mr-2 flex items-center justify-center transition-colors ${solid && !open ? "text-sumi" : "text-white"}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <span className="relative block w-6 h-3">
                <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute left-0 bottom-0 h-px bg-current transition-all duration-500 ${open ? "w-full -translate-y-1.5 -rotate-45" : "w-4"}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen menu（1280px 未満） */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="サイトメニュー"
            data-lenis-prevent
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-sumi xl:hidden"
          >
            <div className="absolute inset-0 tatami-dark pointer-events-none" aria-hidden="true" />
            <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-8 sm:py-12 min-h-full flex flex-col">
              <p className="text-[9px] text-kincya/80 tracking-[0.4em] mb-6 uppercase">Navigation</p>
              <nav aria-label="モバイルナビゲーション" className="grid sm:grid-cols-2 gap-x-10">
                {NAV_LINKS.map((n, i) => (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.045, duration: 0.6, ease }}
                    className="border-b border-white/[0.07]"
                  >
                    <Link
                      href={n.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(n.href) ? "page" : undefined}
                      className="group flex items-center gap-4 py-3.5"
                    >
                      <span className="text-[10px] text-kincya/60 tabular-nums w-5" style={{ fontFamily: "var(--font-serif)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`flex-1 text-lg sm:text-xl transition-colors duration-300 ${isActive(n.href) ? "text-kincya" : "text-white/85 group-hover:text-white"}`}
                        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.1em" }}
                      >
                        {n.label}
                      </span>
                      <span className="text-white/20 text-xs transition-all duration-300 group-hover:text-kincya group-hover:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6, ease }}
                className="mt-8 grid sm:grid-cols-2 gap-2.5"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-shine flex items-center justify-center py-4 text-xs text-white tracking-[0.25em] bg-kincya hover:bg-do transition-colors"
                >
                  無料見積もりを依頼する
                </Link>
                <Link
                  href="/contact#business"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center py-4 text-xs text-white/75 tracking-[0.2em] border border-white/15 hover:bg-white/5 transition-colors"
                >
                  法人・管理会社のご相談
                </Link>
              </motion.div>
              {(SITE_TEL as string).trim() !== "" && (
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="mt-6 text-center text-sm text-white/50 tracking-widest hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  TEL {SITE_TEL}
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
