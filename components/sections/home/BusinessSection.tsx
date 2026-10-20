import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxBackground from "@/components/ui/motion/ParallaxBackground";
import Magnetic from "@/components/ui/motion/Magnetic";
import { HOME_BUSINESS } from "@/data/home";

export default function BusinessSection() {
  return (
    <section className="relative overflow-clip bg-ai py-28 sm:py-36">
      <ParallaxBackground src="/images/nihon-tatami/restoration/restoration-vacant-check-01.jpg" strength={10} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(30,45,58,0.96) 0%, rgba(30,45,58,0.88) 45%, rgba(30,28,26,0.82) 100%)" }} aria-hidden="true" />
      <div className="absolute inset-0 tatami-dark" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              en="For Business"
              title={["法人・不動産管理の", "畳・内装工事を", "まとめてご相談ください。"]}
              light
              titleClassName="text-[1.65rem] sm:text-[2.15rem]"
            />
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-white/60">
              <ScrollReveal delay={0.1}>
                <p>賃貸物件の退去後原状回復、売買前の内装整備、旅館客室の定期メンテナンス、寺院・神社の行事前整備、店舗の和空間づくりまで。</p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <p>複数物件・複数部屋の継続案件にも対応しています。退去のたびに業者を探す手間を省き、一本化してご相談いただけます。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.26}>
              <div className="mt-10 flex flex-col items-start gap-5">
                <Magnetic>
                  <Link
                    href="/business"
                    className="btn-shine inline-block border border-kincya px-8 py-4 text-xs tracking-[0.2em] text-kincya transition-all duration-300 hover:bg-kincya hover:text-white"
                  >
                    法人向けサービスを見る
                  </Link>
                </Magnetic>
                <Link href="/contact#business" className="link-draw pb-0.5 text-xs tracking-wide text-white/55 hover:text-white">
                  法人・管理会社のご相談はこちら →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-2.5 lg:col-span-7">
            {HOME_BUSINESS.map((item, i) => (
              <ScrollReveal key={item.href} delay={0.05 + i * 0.06} direction="right">
                <Link
                  href={item.href}
                  className="group relative flex items-start justify-between gap-4 overflow-hidden border border-white/10 bg-white/[0.04] p-6 transition-colors duration-500 hover:border-kincya/40"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-white/[0.06] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                  <span className="relative">
                    <span className="mb-1 flex items-center gap-3">
                      <span className="text-[10px] text-kincya tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base leading-snug text-white" style={{ fontFamily: "var(--font-serif)" }}>
                        {item.title}
                      </span>
                    </span>
                    <span className="block pl-7 text-xs leading-relaxed text-white/50">{item.desc}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative mt-0.5 shrink-0 text-xs text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-kincya"
                  >
                    →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
