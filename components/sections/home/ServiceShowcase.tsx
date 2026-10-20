"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type ShowcaseItem = {
  href: string;
  name: string;
  en: string;
  desc: string;
  image: string;
  price?: string;
};

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * サービスの横スクロールショーケース。
 * - 1024px 以上: 縦スクロールに合わせて横へ流れる（セクションを画面に固定）
 * - それ未満・「視差効果を減らす」設定: 指で横にスワイプできるカルーセル
 */
export default function ServiceShowcase({ items }: { items: ShowcaseItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    const update = () => setPinned(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 横に流す距離 = トラックの全幅 − 画面幅（固定表示のレイアウトになってから測る）
  useIsomorphicLayoutEffect(() => {
    if (!pinned) {
      setDistance(0);
      return;
    }
    const measure = () => {
      const track = trackRef.current;
      if (track) setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrapRef} className="relative" style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}>
      <div className={pinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : ""}>
        <motion.div
          ref={trackRef}
          style={pinned ? { x } : undefined}
          className={
            pinned
              ? "flex w-max gap-6 pl-[max(3.5rem,calc((100vw-80rem)/2+3.5rem))] pr-14 will-change-transform"
              : "flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 sm:px-10 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
          data-lenis-prevent-wheel={pinned ? undefined : true}
        >
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block h-[440px] w-[78vw] max-w-[360px] shrink-0 snap-start overflow-hidden bg-sumi sm:h-[480px] lg:h-[min(68vh,560px)] lg:w-[380px] lg:max-w-none"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 1024px) 78vw, 380px"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div
                className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-90"
                style={{ background: "linear-gradient(to top, rgba(22,20,18,0.92) 0%, rgba(22,20,18,0.35) 55%, rgba(22,20,18,0.05) 100%)" }}
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                <span className="text-[11px] tracking-[0.3em] text-white/60 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[10px] tracking-[0.35em] text-kincya uppercase">{item.en}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                {item.price && <p className="mb-2 text-xs text-kincya tracking-wider">{item.price}</p>}
                <h3 className="text-2xl text-white" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.08em" }}>
                  {item.name}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/65 line-clamp-3">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs text-white/80">
                  <span className="link-draw pb-0.5">詳しく見る</span>
                  <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-kincya transition-transform duration-700 group-hover:scale-x-100"
              />
            </Link>
          ))}
        </motion.div>

        {/* 進み具合（固定表示のときだけ） */}
        {pinned && (
          <div className="mx-auto mt-10 h-px w-full max-w-7xl px-14" aria-hidden="true">
            <div className="h-px w-full bg-sumi/10">
              <motion.div className="h-px origin-left bg-kincya" style={{ scaleX: progress }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
