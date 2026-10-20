import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FAQTabs from "@/components/ui/FAQTabs";
import { FAQ_ITEMS } from "@/data/faq";

export default function HomeFaqSection() {
  return (
    <section className="relative bg-kiji py-28 sm:py-36">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <SectionHeading en="FAQ" title={["よくあるご質問"]} className="mb-14" />
        <ScrollReveal delay={0.1}>
          <FAQTabs items={FAQ_ITEMS} />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-10 text-center">
            <Link href="/faq" className="link-draw pb-0.5 text-sm text-ai tracking-wide">
              すべてのFAQを見る（{FAQ_ITEMS.length}件）→
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
