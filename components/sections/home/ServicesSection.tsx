import Link from "next/link";
import SectionHeading from "@/components/ui/motion/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceShowcase, { type ShowcaseItem } from "./ServiceShowcase";
import { TATAMI_SERVICES, INTERIOR_SERVICES, RESTORATION_SERVICES } from "@/data/services";

const EN: Record<string, string> = {
  "tatami-omotegae": "Omotegae",
  "tatami-uragaeshi": "Uragaeshi",
  "tatami-shinchou": "Shinchou",
  "herinashi-tatami": "Herinashi",
  "ryukyu-tatami": "Ryukyu",
  "washi-tatami": "Washi",
  "resin-tatami": "Resin",
};

export default function ServicesSection() {
  const items: ShowcaseItem[] = [
    ...TATAMI_SERVICES.slice(0, 5).map((s) => ({
      href: s.href,
      name: s.name,
      en: EN[s.id] ?? "Tatami",
      desc: s.shortDesc,
      image: s.image,
      price: s.price,
    })),
    {
      href: "/interior",
      name: "内装工事",
      en: "Interior",
      desc: "クロス・床材・建具など内装全体を、畳工事とあわせて一括でご依頼いただけます。",
      image: "/images/nihon-tatami/interior/interior-completed-ldk-01.jpg",
    },
    {
      href: "/restoration",
      name: "原状回復",
      en: "Restoration",
      desc: "賃貸の退去後や店舗の退去時に、畳・クロス・床・建具をまとめて整えます。",
      image: "/images/nihon-tatami/restoration/restoration-vacant-check-01.jpg",
    },
  ];

  return (
    <section className="relative bg-kiji">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-28 sm:pt-36 pb-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            en="Services"
            title={["サービス一覧"]}
            lead="畳工事を軸に、内装工事・原状回復まで一括でご相談いただけます。"
          />
          <ScrollReveal delay={0.2}>
            <Link href="/services" className="link-draw shrink-0 pb-0.5 text-sm text-ai tracking-wide">
              すべてのサービスを見る →
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <ServiceShowcase items={items} />

      {/* 内装工事・原状回復の詳細メニュー */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-12 lg:pt-2 pb-28 sm:pb-36">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <div className="h-full border border-border bg-white p-7">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base text-sumi tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                  内装工事
                </h3>
                <Link href="/interior" className="link-draw pb-0.5 text-xs text-ai">
                  すべて見る →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {INTERIOR_SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    href={s.href}
                    className="group border border-border p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-kincya/50 hover:bg-kiji/40"
                  >
                    <p className="text-[11px] text-sumi transition-colors group-hover:text-ai" style={{ fontFamily: "var(--font-serif)" }}>
                      {s.name}
                    </p>
                    {s.price && <p className="mt-0.5 text-[10px] text-kincya-ink">{s.price}</p>}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative h-full overflow-hidden bg-sumi p-7 text-white">
              <div className="absolute inset-0 tatami-dark" aria-hidden="true" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-base text-white tracking-wider" style={{ fontFamily: "var(--font-serif)" }}>
                    原状回復
                  </h3>
                  <Link href="/restoration" className="link-draw pb-0.5 text-xs text-kincya">
                    すべて見る →
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {RESTORATION_SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      className="group border border-white/10 p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-kincya/50 hover:bg-white/5"
                    >
                      <p className="text-[11px] text-white/75 transition-colors group-hover:text-white" style={{ fontFamily: "var(--font-serif)" }}>
                        {s.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-xs leading-relaxed text-white/40">賃貸退去後・店舗退去・管理会社向け継続案件に対応。</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
