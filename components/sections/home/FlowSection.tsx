import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FlowTimeline from "./FlowTimeline";
import { HOME_FLOW } from "@/data/home";

export default function FlowSection() {
  return (
    <section className="relative bg-shiro py-28 sm:py-36">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <SectionHeading en="Process" title={["ご依頼の流れ"]} className="mb-16" />
        <FlowTimeline steps={HOME_FLOW} />
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <Link href="/flow" className="link-draw pb-0.5 text-sm text-ai tracking-wide">
              詳しい流れを確認する →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
