import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `畳のお悩み別ガイド | ${SITE_NAME}`,
  description: "畳のカビ・ダニ・ささくれ・へたりなど、お悩み別に解決策をご案内します。ペット・子ども・高齢者向けの畳選びも。",
  path: "/needs",
});

const NEEDS_LIST = [
  { slug: "mold", title: "カビが生えた", subtitle: "梅雨・湿気対策" },
  { slug: "dani", title: "ダニが気になる", subtitle: "アレルギー・衛生対策" },
  { slug: "sasakure", title: "ささくれ・毛羽立ち", subtitle: "素足が痛い" },
  { slug: "sunken-tatami", title: "へたり・沈み込み", subtitle: "床がふかふかする" },
  { slug: "pet", title: "ペットがいる", subtitle: "爪傷・汚れ対策" },
  { slug: "children", title: "赤ちゃん・子ども", subtitle: "安心素材・清潔管理" },
  { slug: "elderly", title: "高齢者・介護", subtitle: "転倒対策・バリアフリー" },
  { slug: "vacant-room", title: "空室対策", subtitle: "入居率改善" },
  { slug: "before-sale", title: "売却前の整備", subtitle: "内覧印象アップ" },
  { slug: "before-guest-arrival", title: "お客様を迎える前", subtitle: "旅館・民泊向け" },
];

export default function NeedsPage() {
  return (
    <>
      <section className="bg-kiji/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "お悩み別ガイド" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Your Needs</p>
          <h1 className="text-3xl sm:text-4xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳のお悩み別ガイド
          </h1>
          <p className="text-sm text-sumi/60 max-w-xl leading-relaxed">
            お悩みの症状・状況から、最適な解決策をご案内します。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEEDS_LIST.map((item) => (
              <Link
                key={item.slug}
                href={`/needs/${item.slug}`}
                className="border border-border p-6 hover:border-ai hover:shadow-sm transition-all duration-200 group"
              >
                <p className="text-base text-sumi font-medium mb-1 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </p>
                <p className="text-xs text-sumi/50">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="お悩みをご相談ください"
        subtitle="状況をお伝えいただければ、最適な解決策をご提案します。お気軽にどうぞ。"
        primaryLabel="無料で相談する"
        primaryHref="/contact"
      />
    </>
  );
}
