import SectionHeading from "@/components/ui/motion/SectionHeading";
import TargetCard from "@/components/ui/TargetCard";
import { TARGETS } from "@/data/targets";

export default function AudienceSection() {
  return (
    <section className="relative bg-shiro py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <SectionHeading
          en="For Your Needs"
          title={["お客様のシーン別にご案内"]}
          lead="個人のお客様から不動産会社・旅館・寺社の方まで、目的に合わせた専用ページをご用意しています。"
          className="mb-16"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TARGETS.map((target, i) => (
            <TargetCard key={target.id} target={target} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
