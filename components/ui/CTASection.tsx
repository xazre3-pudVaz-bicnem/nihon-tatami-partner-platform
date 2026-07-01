import Link from "next/link";
import { SITE_TEL, SITE_LINE } from "@/lib/site";

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
  const bgClass = variant === "dark" ? "bg-sumi text-white" : variant === "light" ? "bg-shiro text-sumi" : "bg-kiji text-sumi";
  const subtitleColor = variant === "dark" ? "text-white/60" : "text-sumi/60";
  const borderClass = variant === "dark" ? "border-white/20" : "border-sumi/20";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs tracking-[0.3em] text-kincya mb-5 uppercase">Contact</p>
        <h2
          className="text-3xl sm:text-4xl mb-4 leading-snug"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
        >
          {title}
        </h2>
        <p className={`text-sm ${subtitleColor} mb-10 leading-relaxed`}>{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href={primaryHref}
            className="inline-block bg-kincya text-white text-sm px-8 py-4 tracking-wider hover:bg-do transition-colors duration-300"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className={`inline-block border ${borderClass} text-sm px-8 py-4 tracking-wider hover:opacity-70 transition-opacity duration-300`}
          >
            {secondaryLabel}
          </Link>
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t ${borderClass}`}>
          {showTel && (SITE_TEL as string).trim() !== "" && (
            <div className="text-center">
              <p className={`text-xs ${subtitleColor} mb-1 tracking-wide`}>お急ぎの場合はお電話でのご相談も可能です</p>
              <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="text-xl hover:opacity-70 transition-opacity" style={{ fontFamily: "var(--font-serif)" }}>
                {SITE_TEL}
              </a>
            </div>
          )}
          {showLine && (SITE_LINE as string).trim() !== "" && (
            <div className="text-center">
              <p className={`text-xs ${subtitleColor} mb-1 tracking-wide`}>LINEでご相談</p>
              <a href={SITE_LINE} className="inline-block text-sm border border-kincya/40 text-kincya px-5 py-2 hover:bg-kincya/10 transition-colors duration-300">
                LINEで問い合わせる
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
