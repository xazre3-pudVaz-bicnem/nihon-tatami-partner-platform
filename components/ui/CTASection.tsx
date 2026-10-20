import Link from "next/link";
import { SITE_TEL, SITE_LINE } from "@/lib/site";
import RevealText from "@/components/ui/motion/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/motion/Magnetic";

type Props = {
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light" | "kiji";
  showLine?: boolean;
  showTel?: boolean;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title = "まずはお気軽にご相談ください",
  subtitle = "畳の張替え・内装工事・原状回復まで、無料でお見積もりいたします。",
  variant = "dark",
  showLine = true,
  showTel = true,
  primaryLabel = "無料見積もりを依頼する",
  primaryHref = "/contact",
  secondaryLabel = "法人・管理会社のご相談",
  secondaryHref = "/contact#business",
}: Props) {
  const dark = variant === "dark";
  const bgClass = dark ? "bg-sumi text-white" : variant === "light" ? "bg-shiro text-sumi" : "bg-kiji text-sumi";
  const subtitleColor = dark ? "text-white/60" : "text-sumi/60";
  const borderClass = dark ? "border-white/20" : "border-sumi/20";

  return (
    <section className={`relative overflow-hidden py-24 sm:py-28 ${bgClass}`}>
      {dark && (
        <>
          <div className="absolute inset-0 tatami-dark pointer-events-none" aria-hidden="true" />
          <div
            className="glow-drift pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-3xl"
            style={{ background: "radial-gradient(circle, #B88942 0%, transparent 70%)" }}
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <ScrollReveal>
          <p className="flex items-center justify-center gap-3 text-[10px] tracking-[0.42em] text-kincya mb-6 uppercase">
            <span className="h-px w-8 bg-kincya/60" aria-hidden="true" />
            Contact
            <span className="h-px w-8 bg-kincya/60" aria-hidden="true" />
          </p>
        </ScrollReveal>
        <RevealText
          lines={[title]}
          className="text-3xl sm:text-4xl mb-5 leading-snug"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
        />
        <ScrollReveal delay={0.2}>
          <p className={`text-sm ${subtitleColor} mb-10 leading-relaxed`}>{subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Magnetic>
              <Link
                href={primaryHref}
                className="btn-shine group inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-kincya text-white text-sm px-9 py-4 tracking-wider hover:bg-do transition-colors duration-300"
              >
                {primaryLabel}
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href={secondaryHref}
                className={`inline-flex w-full sm:w-auto items-center justify-center border ${borderClass} text-sm px-9 py-4 tracking-wider transition-colors duration-300 ${
                  dark ? "hover:bg-white/10" : "hover:bg-sumi/5"
                }`}
              >
                {secondaryLabel}
              </Link>
            </Magnetic>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t ${borderClass}`}>
            {showTel && (SITE_TEL as string).trim() !== "" && (
              <div className="text-center">
                <p className={`text-xs ${subtitleColor} mb-1 tracking-wide`}>お急ぎの場合はお電話でのご相談も可能です</p>
                <a
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="text-2xl tracking-wider hover:text-kincya transition-colors"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {SITE_TEL}
                </a>
              </div>
            )}
            {showLine && (SITE_LINE as string).trim() !== "" && (
              <div className="text-center">
                <p className={`text-xs ${subtitleColor} mb-1 tracking-wide`}>LINEでご相談</p>
                <a
                  href={SITE_LINE}
                  className="inline-block text-sm border border-kincya/40 text-kincya px-5 py-2 hover:bg-kincya/10 transition-colors duration-300"
                >
                  LINEで問い合わせる
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
