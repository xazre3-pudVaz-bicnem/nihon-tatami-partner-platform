import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Magnetic from "@/components/ui/motion/Magnetic";
import { HOME_PRICE_ROWS } from "@/data/home";

export default function PriceSection() {
  return (
    <section className="relative bg-cloud py-28 sm:py-36">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <SectionHeading
          en="Price"
          title={["料金の目安"]}
          lead="素材・枚数・現場の状況により変動します。詳細は無料見積もりにてご確認ください。"
          className="mb-14"
        />

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden border border-border bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="px-5 py-4 text-left text-[11px] font-normal tracking-wider">サービス</th>
                  <th className="px-5 py-4 text-right text-[11px] font-normal tracking-wider">料金目安</th>
                  <th className="hidden px-5 py-4 text-right text-[11px] font-normal tracking-wider sm:table-cell">単位</th>
                  <th className="hidden px-5 py-4 text-left text-[11px] font-normal tracking-wider md:table-cell">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {HOME_PRICE_ROWS.map((row) => (
                  <tr key={row.service} className="group transition-colors duration-300 hover:bg-kiji/50">
                    <td className="relative px-5 py-4 text-sm text-sumi" style={{ fontFamily: "var(--font-serif)" }}>
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-kincya transition-transform duration-500 group-hover:scale-y-100"
                      />
                      {row.service}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-sm text-kincya-ink">{row.price}</td>
                    <td className="hidden px-5 py-4 text-right text-xs text-sumi/65 sm:table-cell">{row.unit}</td>
                    <td className="hidden px-5 py-4 text-xs text-sumi/65 md:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-sumi/65">※ 表示価格は税込の目安です。法人・大口案件は個別にお見積もりします。</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link href="/price" className="link-draw pb-0.5 text-sm text-ai tracking-wide">
              詳細な料金ページを見る →
            </Link>
            <Magnetic>
              <Link
                href="/contact"
                className="btn-shine inline-block bg-sumi px-8 py-3.5 text-xs tracking-[0.2em] text-white transition-colors duration-300 hover:bg-ai"
              >
                無料見積もりを依頼する
              </Link>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
