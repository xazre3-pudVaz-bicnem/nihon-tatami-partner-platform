import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/motion/Marquee";
import Magnetic from "@/components/ui/motion/Magnetic";

type AreaCard = { slug: string; name: string; reading?: string; station?: string };

const FEATURED = [
  { title: "葛飾区の畳張替え", desc: "表替え・裏返し・新調", href: "/area/katsushika/tatami" },
  { title: "素材選びガイド", desc: "い草・和紙・樹脂の選び方", href: "/area/katsushika/guide-tatami-buying" },
  { title: "一戸建て・マンション", desc: "個人のお客様向け", href: "/area/katsushika/for-homeowner" },
  { title: "賃貸オーナー向け", desc: "空室対策・原状回復", href: "/area/katsushika/for-rental-owner" },
];

export default function AreaSection({ areas }: { areas: AreaCard[] }) {
  return (
    <section className="relative overflow-hidden bg-kiji py-28 sm:py-36">
      <div className="absolute inset-0 tatami-bg pointer-events-none" aria-hidden="true" />
      {/* 背景を流れる大きな輪郭文字 */}
      <div className="pointer-events-none absolute inset-x-0 top-6 sm:top-10">
        <Marquee duration={80}>
          {["KATSUSHIKA", "葛飾区", "KATSUSHIKA", "葛飾区"].map((t, i) => (
            <span
              key={i}
              className="text-outline px-10 text-[5.5rem] sm:text-[9rem] lg:text-[11rem] leading-none whitespace-nowrap"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 sm:pt-24">
        <SectionHeading
          en="Katsushika Area"
          title={["葛飾区での畳工事なら", "葛飾畳店"]}
          align="center"
          lead="亀有・金町・柴又・新小岩・立石・堀切など、葛飾区の全域に伺います。住宅から賃貸、店舗、寺社まで、あらゆる畳工事をご相談ください。"
        />

        {/* 区内12エリア */}
        <ul className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {areas.map((a, i) => (
            <li key={a.slug} className="h-full">
              <ScrollReveal delay={Math.min(i * 0.04, 0.4)} className="h-full">
                <Link
                  href={`/area/katsushika/${a.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden border border-border bg-white px-4 pb-4 pt-5 transition-colors duration-500 hover:border-sumi"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-sumi transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                  />
                  <span className="relative text-[10px] text-kincya-ink tabular-nums transition-colors duration-500 group-hover:text-kincya">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className="relative mt-2 text-lg text-sumi transition-colors duration-500 group-hover:text-white"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.12em" }}
                  >
                    {a.name}
                  </span>
                  {a.reading && (
                    <span className="relative text-[10px] tracking-[0.2em] text-sumi/65 transition-colors duration-500 group-hover:text-white/60">
                      {a.reading}
                    </span>
                  )}
                  {a.station && (
                    <span className="relative mt-3 text-[10px] leading-relaxed text-sumi/65 transition-colors duration-500 group-hover:text-kincya line-clamp-2">
                      {a.station}
                    </span>
                  )}
                  <span aria-hidden="true" className="relative mt-auto pt-3 text-xs text-sumi/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-kincya">
                    →
                  </span>
                </Link>
              </ScrollReveal>
            </li>
          ))}
        </ul>

        {/* 葛飾区向けのおすすめページ */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED.map((item, i) => (
            <ScrollReveal key={item.href} delay={0.05 + i * 0.07} className="h-full">
              <Link
                href={item.href}
                className="group flex h-full items-center justify-between gap-4 border border-border bg-shiro/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-kincya/60 hover:shadow-[0_18px_40px_-24px_rgba(30,28,26,0.45)]"
              >
                <span>
                  <span className="block text-base text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.title}
                  </span>
                  <span className="mt-1 block text-xs text-sumi/70">{item.desc}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sumi/15 text-xs text-sumi/50 transition-all duration-500 group-hover:border-kincya group-hover:bg-kincya group-hover:text-white"
                >
                  →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-14 text-center">
            <Magnetic>
              <Link
                href="/area/katsushika"
                className="btn-shine group inline-flex items-center gap-3 bg-ai px-10 py-4 text-sm text-white tracking-[0.15em] transition-colors duration-300 hover:bg-ai-light"
              >
                葛飾区の対応エリアを見る
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
