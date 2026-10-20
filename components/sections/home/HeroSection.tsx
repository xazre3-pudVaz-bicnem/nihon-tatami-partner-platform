import Link from "next/link";
import type { CSSProperties } from "react";
import RiseText from "@/components/ui/motion/RiseText";
import Marquee from "@/components/ui/motion/Marquee";
import Magnetic from "@/components/ui/motion/Magnetic";
import HeroBackdrop from "./HeroBackdrop";
import { SITE_TEL } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** 回転する円形バッジ（見積無料） */
function EstimateBadge() {
  return (
    <Link
      href="/contact"
      className="group absolute right-8 bottom-32 z-20 hidden lg:flex h-36 w-36 items-center justify-center anim-fade-in"
      style={d(1800)}
      aria-label="無料見積もりを依頼する"
    >
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-white/70" style={{ fontSize: 13, letterSpacing: "0.32em" }}>
          <textPath href="#badge-circle">FREE ESTIMATE ・ 現地確認・お見積もり無料 ・ </textPath>
        </text>
      </svg>
      <span
        className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-kincya text-white transition-transform duration-500 group-hover:scale-110"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <span className="text-[11px] tracking-[0.2em] leading-tight">見積</span>
        <span className="text-base tracking-[0.2em] leading-tight">無料</span>
      </span>
    </Link>
  );
}

export default function HeroSection({ areas }: { areas: string[] }) {
  return (
    <section className="home-hero grain relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-sumi">
      <HeroBackdrop
        src="/images/nihon-tatami/hero/hero-tatami-premium.jpg"
        spSrc="/images/nihon-tatami/hero/hero-tatami-premium-sp.jpg"
        alt="格式ある和室の畳空間"
      />

      {/* 文字を読みやすくするグラデーション */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(100deg, rgba(22,20,18,0.92) 0%, rgba(22,20,18,0.78) 38%, rgba(22,20,18,0.35) 68%, rgba(22,20,18,0.15) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-1/2"
        style={{ background: "linear-gradient(to top, rgba(22,20,18,0.85), transparent)" }}
        aria-hidden="true"
      />

      {/* 右端の縦書き（装飾） */}
      <div
        className="absolute right-6 top-0 bottom-0 z-[2] hidden xl:flex items-center anim-fade-in"
        style={{ ...d(1600), fontFamily: "var(--font-serif)" }}
        aria-hidden="true"
      >
        <span className="text-white/25 text-xs tracking-[1.2em] [writing-mode:vertical-rl]">畳　内装　原状回復　葛飾区</span>
      </div>

      <div className="relative z-10 flex flex-1 items-center w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-32 pb-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 anim-fade-up" style={d(100)}>
            <span className="anim-draw-x block h-px w-10 bg-kincya" style={d(250)} aria-hidden="true" />
            <p className="text-[10px] sm:text-[11px] text-kincya tracking-[0.45em] uppercase">Katsushika Tatami Store</p>
          </div>

          <RiseText
            as="h1"
            lines={["葛飾の畳から、", "空間の価値を", { text: "整える。", className: "text-kincya" }]}
            className="text-[2.6rem] sm:text-[3.7rem] xl:text-[4.6rem] text-white leading-[1.14]"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
            delay={250}
          />

          <p className="mt-8 text-sm sm:text-base text-white/80 tracking-wide [word-break:auto-phrase] anim-fade-up" style={d(1000)}>
            東京都葛飾区の畳張替え・表替え・新調／和室リフォーム・原状回復
          </p>

          <div className="anim-draw-x mt-7 h-px w-20" style={{ ...d(1150), background: "linear-gradient(90deg, #B88942, transparent)" }} aria-hidden="true" />

          <p className="mt-7 text-sm text-white/60 leading-relaxed max-w-xl anim-fade-up" style={d(1250)}>
            葛飾区を中心に、住宅・旅館・寺社・店舗まで。畳と内装の専門パートナー。
            <br className="hidden sm:block" />
            畳の表替え・新調から内装工事・原状回復まで一括でご相談いただけます。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center anim-fade-up" style={d(1400)}>
            <Magnetic>
              <Link
                href="/contact"
                className="btn-shine group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-kincya px-8 py-4 text-sm text-white tracking-[0.15em] transition-colors duration-300 hover:bg-do"
              >
                無料で見積もりを相談する
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/area/katsushika"
                className="inline-flex w-full sm:w-auto items-center justify-center border border-white/30 px-8 py-4 text-sm text-white tracking-[0.15em] transition-colors duration-300 hover:bg-white/10"
              >
                葛飾区の対応エリア
              </Link>
            </Magnetic>
          </div>

          {(SITE_TEL as string).trim() !== "" && (
            <a
              href={`tel:${SITE_TEL.replace(/-/g, "")}`}
              className="mt-6 inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors anim-fade-up"
              style={d(1550)}
            >
              <span className="text-[10px] tracking-[0.3em] text-kincya">TEL</span>
              <span className="text-lg tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                {SITE_TEL}
              </span>
            </a>
          )}
        </div>
      </div>

      <EstimateBadge />

      {/* スクロールを促す線 */}
      <div className="absolute left-5 bottom-24 z-10 hidden sm:flex flex-col items-center gap-3 anim-fade-in" style={d(1800)} aria-hidden="true">
        <span className="text-[9px] text-white/40 tracking-[0.5em] [writing-mode:vertical-rl]">SCROLL</span>
        <span className="scroll-cue block h-14 w-px bg-white/15" />
      </div>

      {/* 葛飾区のエリアが流れる帯 */}
      <div className="relative z-10 border-t border-white/10 bg-sumi/30 backdrop-blur-[2px] py-4 anim-fade-in" style={d(1700)}>
        <Marquee duration={48}>
          {areas.map((a) => (
            <span key={a} className="flex items-center">
              <span className="px-6 text-xs sm:text-sm tracking-[0.35em] text-white/55" style={{ fontFamily: "var(--font-serif)" }}>
                {a}
              </span>
              <span className="text-kincya/50 text-[10px]">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
