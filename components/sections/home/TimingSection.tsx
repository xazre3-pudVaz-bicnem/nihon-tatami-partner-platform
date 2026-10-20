import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HOME_TIMING } from "@/data/home";

export default function TimingSection() {
  return (
    <section className="relative overflow-hidden bg-kiji py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <SectionHeading en="Timing Guide" title={["畳替えのサインと", "最適な施工方法"]} className="mb-16" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_TIMING.map((item, i) => (
            <ScrollReveal key={item.sign} delay={Math.min((i % 4) * 0.07, 0.3)}>
              <div className="group relative h-full overflow-hidden border border-border bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-kincya/50 hover:shadow-[0_20px_44px_-28px_rgba(30,28,26,0.5)]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-kincya transition-transform duration-500 group-hover:scale-y-100"
                />
                <div className="mb-4 flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-xs text-sumi/65 tabular-nums" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-snug text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                    {item.sign}
                  </p>
                </div>
                <div className="mb-3 inline-block border border-kincya/40 px-2 py-0.5 text-[10px] tracking-wide text-kincya-ink transition-colors duration-500 group-hover:bg-kincya-ink group-hover:text-white">
                  {item.recommended}
                </div>
                <p className="text-xs leading-relaxed text-sumi/70">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 text-center">
            <Link href="/needs" className="link-draw pb-0.5 text-sm text-ai tracking-wide">
              お悩み別のご案内はこちら →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
