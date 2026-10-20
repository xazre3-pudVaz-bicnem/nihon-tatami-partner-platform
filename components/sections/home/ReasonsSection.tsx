import type { CSSProperties } from "react";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HOME_REASONS } from "@/data/home";

// 畳の敷き方を思わせる非対称のタイル配置（12カラム）
const LAYOUT = [
  { span: "md:col-span-5", tone: "dark" },
  { span: "md:col-span-4", tone: "white" },
  { span: "md:col-span-3", tone: "kiji" },
  { span: "md:col-span-4", tone: "white" },
  { span: "md:col-span-4", tone: "ai" },
  { span: "md:col-span-4", tone: "white" },
  { span: "md:col-span-6", tone: "kiji" },
  { span: "md:col-span-6", tone: "white" },
] as const;

const TONE: Record<string, { box: string; title: string; text: string; num: string }> = {
  dark: { box: "bg-sumi text-white", title: "text-white", text: "text-white/60", num: "rgba(255,255,255,0.18)" },
  ai: { box: "bg-ai text-white", title: "text-white", text: "text-white/60", num: "rgba(255,255,255,0.2)" },
  white: { box: "bg-white border border-border", title: "text-sumi", text: "text-sumi/70", num: "rgba(30,28,26,0.12)" },
  kiji: { box: "bg-kiji border border-kiji-dark/50", title: "text-sumi", text: "text-sumi/70", num: "rgba(30,28,26,0.12)" },
};

export default function ReasonsSection() {
  return (
    <section className="relative overflow-hidden bg-shiro py-28 sm:py-36">
      <div className="absolute inset-0 tatami-bg pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <SectionHeading en="Why Choose Us" title={["選ばれる8つの理由"]} align="center" className="mb-16" />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-12">
          {HOME_REASONS.map((r, i) => {
            const { span, tone } = LAYOUT[i];
            const t = TONE[tone];
            const featured = i === 0;
            return (
              <ScrollReveal key={r.num} delay={0.04 + (i % 3) * 0.07} className={span}>
                <div
                  className={`group relative h-full overflow-hidden ${t.box} ${featured ? "p-9 sm:p-10" : "p-7"} transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(30,28,26,0.55)]`}
                >
                  {(tone === "dark" || tone === "ai") && <div className="absolute inset-0 tatami-dark" aria-hidden="true" />}
                  {/* ホバーで差し込む金の光 */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ background: "radial-gradient(circle, rgba(184,137,66,0.35), transparent 70%)" }}
                  />
                  <p
                    aria-hidden="true"
                    className={`text-outline relative select-none leading-none ${featured ? "text-7xl mb-8" : "text-5xl mb-6"}`}
                    style={{ fontFamily: "var(--font-serif)", "--outline-color": t.num } as CSSProperties}
                  >
                    {r.num}
                  </p>
                  <h3
                    className={`relative ${featured ? "text-xl" : "text-base"} ${t.title} mb-3 leading-snug`}
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {r.title}
                  </h3>
                  <p className={`relative text-xs leading-relaxed ${t.text}`}>{r.desc}</p>
                  <div
                    aria-hidden="true"
                    className="relative mt-6 h-px w-8 origin-left bg-kincya/70 transition-transform duration-700 group-hover:scale-x-[3]"
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
