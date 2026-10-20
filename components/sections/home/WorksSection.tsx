import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WorksCard from "@/components/ui/WorksCard";
import Magnetic from "@/components/ui/motion/Magnetic";
import { WORKS } from "@/data/works";

export default function WorksSection() {
  return (
    <section className="relative bg-shiro py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <SectionHeading
          en="Works"
          title={["施工対応例"]}
          lead="住宅・旅館・寺社・店舗・賃貸物件など、さまざまなご依頼への施工対応例・施工イメージをご紹介します。実際の素材・費用は現地確認後にご案内します。"
          className="mb-16"
        />

        {/* スマホは横スワイプ、タブレット以上はグリッド */}
        <div
          role="region"
          aria-label="施工対応例の一覧"
          tabIndex={0}
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-kincya [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
        >
          {WORKS.slice(0, 8).map((work, i) => (
            <div key={work.id} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <WorksCard work={work} index={i} />
            </div>
          ))}
        </div>
        <p aria-hidden="true" className="mt-4 text-center text-[10px] tracking-[0.35em] text-sumi/70 sm:hidden">
          SWIPE →
        </p>

        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <Magnetic strength={0.2}>
              <Link
                href="/works"
                className="group inline-flex items-center gap-3 border border-sumi px-10 py-4 text-xs tracking-[0.2em] text-sumi transition-colors duration-300 hover:bg-sumi hover:text-white"
              >
                施工対応例をすべて見る
                <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
