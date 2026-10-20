import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ParallaxImage from "@/components/ui/motion/ParallaxImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ConceptSection() {
  return (
    <section className="relative overflow-hidden bg-shiro py-28 sm:py-40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading en="Our Concept" title={["畳は、空間の印象と", "資産価値を左右する。"]} />
            <div className="mt-10 space-y-5 text-sm leading-[2.1] text-sumi/65">
              <ScrollReveal delay={0.1}>
                <p>
                  畳は単なる床材ではありません。空間の清潔感・香り・印象、そして建物の資産価値を左右する重要な要素です。私たちはその重みを知っているからこそ、畳の施工に誠実に向き合います。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <p>
                  葛飾畳店は、一般住宅の和室リフレッシュから、旅館客室の格式維持、寺社の本堂整備、賃貸物件の空室対策、不動産売買前の印象改善まで、「畳を軸にした空間整備の専門パートナー」として幅広くご支援します。
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.26}>
                <p>個人のお客様にも、法人・管理会社様にも。規模や用途を問わず、最適な素材と施工でお応えします。</p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.32}>
              <Link href="/about" className="link-draw mt-10 inline-block pb-0.5 text-sm text-ai tracking-wide">
                私たちについて →
              </Link>
            </ScrollReveal>
          </div>

          <div className="relative lg:col-span-7">
            <ParallaxImage
              src="/images/nihon-tatami/tatami/tatami-room-traditional-01.jpg"
              alt="床の間のある伝統的な和室"
              className="h-[340px] sm:h-[520px] lg:ml-16"
              sizes="(max-width: 1024px) 100vw, 55vw"
              strength={8}
            />
            {/* 重ねた小さな写真（奥行き） */}
            <div className="absolute -bottom-12 -left-2 hidden w-56 sm:block lg:-left-6">
              <ParallaxImage
                src="/images/nihon-tatami/tatami/tatami-craftsman-01.jpg"
                alt="畳を仕上げる職人の手元"
                className="h-72 border-[6px] border-shiro shadow-[0_30px_60px_-30px_rgba(30,28,26,0.55)]"
                sizes="224px"
                strength={16}
              />
            </div>
            <div
              className="absolute -right-3 -top-6 h-24 w-24 border border-kincya/30 hidden sm:block"
              aria-hidden="true"
            />
            <p
              aria-hidden="true"
              className="absolute -right-12 top-1/2 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-kincya/50 xl:block [writing-mode:vertical-rl]"
            >
              CONCEPT — 畳から整える
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
