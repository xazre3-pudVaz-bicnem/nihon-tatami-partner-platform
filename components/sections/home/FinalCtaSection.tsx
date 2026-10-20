import Link from "next/link";
import RevealText from "@/components/ui/motion/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/motion/Magnetic";
import ParallaxBackground from "@/components/ui/motion/ParallaxBackground";
import { SITE_TEL } from "@/lib/site";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-sumi text-white">
      <ParallaxBackground src="/images/nihon-tatami/hero/hero-tatami-ryokan-evening.jpg" strength={14} />
      <div className="absolute inset-0 bg-sumi/85" aria-hidden="true" />
      <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
      <div
        className="glow-drift pointer-events-none absolute -left-20 top-1/4 h-[480px] w-[480px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, #B88942 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* 対応エリア */}
      <div className="relative border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14 text-center">
          <ScrollReveal>
            <p className="mb-4 text-[10px] tracking-[0.42em] text-kincya uppercase">Service Area</p>
            <h2 className="mb-4 text-2xl text-white" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.08em" }}>
              対応エリア
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">
              東京都葛飾区の全域を中心に、東京・千葉・埼玉・神奈川・群馬・栃木・茨城の1都6県に対応。旅館・寺社・大規模法人案件については、遠方への対応も承ります。
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-8">
              <Link href="/area/katsushika" className="link-draw mx-auto pb-0.5 text-sm text-kincya sm:mx-0">
                葛飾区の対応エリア →
              </Link>
              <Link href="/area" className="link-draw mx-auto pb-0.5 text-sm text-white/70 sm:mx-0">
                全エリア詳細を確認する →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* 個人のお客様 */}
        <div className="border-b border-white/10 px-6 py-20 sm:px-16 lg:border-b-0 lg:border-r">
          <ScrollReveal>
            <p className="mb-5 text-[10px] tracking-[0.42em] text-kincya uppercase">For Individual</p>
          </ScrollReveal>
          <RevealText
            lines={["畳の張替え・内装工事の", "ご相談はこちら"]}
            className="mb-5 text-2xl leading-snug text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          />
          <ScrollReveal delay={0.2}>
            <p className="mb-9 text-sm leading-relaxed text-white/60">現地確認・お見積もりは無料です。素材・施工方法について丁寧にご説明します。</p>
            <Magnetic>
              <Link
                href="/contact"
                className="btn-shine group inline-flex items-center gap-3 bg-kincya px-8 py-4 text-xs tracking-[0.2em] text-white transition-colors duration-300 hover:bg-do"
              >
                無料見積もりを依頼する
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            {(SITE_TEL as string).trim() !== "" && (
              <div className="mt-6">
                <a
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="text-xl tracking-wider text-white/70 transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {SITE_TEL}
                </a>
                <span className="ml-3 text-xs text-white/35">9:00〜18:00</span>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* 法人のお客様 */}
        <div className="px-6 py-20 sm:px-16">
          <ScrollReveal>
            <p className="mb-5 text-[10px] tracking-[0.42em] text-white/40 uppercase">For Business</p>
          </ScrollReveal>
          <RevealText
            lines={["法人・管理会社様の", "継続案件もご相談ください。"]}
            className="mb-5 text-2xl leading-snug text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-serif)" }}
          />
          <ScrollReveal delay={0.2}>
            <p className="mb-9 text-sm leading-relaxed text-white/60">複数物件・継続取引に対応。スピーディーな現地対応・写真付き報告書の発行。</p>
            <Magnetic strength={0.2}>
              <Link
                href="/contact#business"
                className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white/10"
              >
                法人向けお問い合わせ
              </Link>
            </Magnetic>
            <div className="mt-6">
              <Link href="/business" className="link-draw pb-0.5 text-xs text-white/50 hover:text-white">
                法人向けサービス詳細 →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
