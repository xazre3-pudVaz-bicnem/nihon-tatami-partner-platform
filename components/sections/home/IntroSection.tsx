import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollHighlightText from "@/components/ui/motion/ScrollHighlightText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HOME_ABOUT_ROWS, HOME_STATEMENT } from "@/data/home";
import { SITE_TEL, SITE_EMAIL } from "@/lib/site";

export default function IntroSection() {
  const rows = [
    ...HOME_ABOUT_ROWS,
    ...((SITE_TEL as string).trim() ? [{ label: "電話番号", value: SITE_TEL }] : []),
    ...((SITE_EMAIL as string).trim() ? [{ label: "メールアドレス", value: SITE_EMAIL }] : []),
  ];

  return (
    <section className="relative overflow-hidden bg-shiro py-28 sm:py-36">
      {/* 大きな輪郭文字（装飾） */}
      <p
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-10 select-none text-[22vw] leading-none lg:text-[13rem]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        About
      </p>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <SectionHeading en="About" title={["葛飾畳店とは"]} />

        <ScrollHighlightText
          text={HOME_STATEMENT}
          className="mt-14 text-[1.55rem] sm:text-3xl lg:text-[2.5rem] leading-[1.75] text-sumi [word-break:auto-phrase]"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
        />

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6 space-y-5 text-sm leading-[2] text-sumi/70">
            <ScrollReveal>
              <p>葛飾畳店は、畳の表替え・裏返し・新調を中心に、襖・障子・内装工事・原状回復までご相談いただける専門窓口です。</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p>
                一般住宅の和室から、賃貸物件の退去後整備、不動産会社・管理会社の継続案件、旅館・寺社・店舗の空間整備まで、用途に合わせた施工相談を受け付けています。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.16}>
              <p>
                東京都葛飾区の全域（亀有・金町・柴又・新小岩・立石・堀切など）を中心に、1都6県（東京・千葉・埼玉・神奈川・群馬・栃木・茨城）のご相談に対応しています。い草・和紙・樹脂・縁なし畳など幅広い素材と施工方法に対応し、現地確認・お見積もりは無料です。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.24}>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/about" className="link-draw pb-0.5 text-sm text-sumi tracking-wide">
                  会社情報を見る →
                </Link>
                <Link href="/contact" className="link-draw pb-0.5 text-sm text-kincya-ink tracking-wide">
                  お問い合わせはこちら →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <dl className="md:col-span-6">
            {rows.map((row, i) => (
              <ScrollReveal
                key={row.label}
                delay={0.05 + i * 0.06}
                className="group flex gap-6 border-b border-border py-4 transition-colors duration-300 hover:border-kincya/50"
              >
                <dt className="w-28 shrink-0 text-xs tracking-wide text-sumi/65 pt-0.5">{row.label}</dt>
                <dd className="text-sm text-sumi/80 [word-break:auto-phrase]">{row.value}</dd>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
