import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `住宅内装リフォーム | 畳・床・壁・建具の一括対応 | ${SITE_NAME}`,
  description: "畳を軸に床・壁・建具をまとめてリフォーム。部屋ごとの個別対応から複数部屋・丸ごとリフォームまで一括相談可能。",
  path: "/interior/house-renovation",
});

export default function HouseRenovationPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="住宅内装リフォーム"
      subtitle="畳を軸に、床・壁・建具をまとめてリフォームできます。部屋ごとの個別対応から、複数部屋・丸ごとリフォームまで一括でご相談ください。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "住宅内装リフォーム" }]}
      image="/images/interior-house.jpg"
      sections={[
        {
          heading: "住宅内装リフォームの進め方",
          content: (
            <p>
              畳の張替えを機に、同時にクロス・床・建具も整えることで、
              より効率的に空間全体をリフレッシュできます。
              部屋単位・複数部屋・丸ごとリフォームまで、ご要望に合わせて対応します。
            </p>
          ),
        },
        {
          heading: "よくある組み合わせ",
          content: (
            <ul className="space-y-2">
              <li>— 和室の畳表替え + 壁クロス張替え</li>
              <li>— 和室の畳新調 + ふすま・障子張替え + クロス</li>
              <li>— 洋室のフローリング張替え + クロス張替え</li>
              <li>— 水回りのクッションフロア + クロス</li>
              <li>— 複数部屋の一括施工</li>
            </ul>
          ),
        },
      ]}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "床工事・フローリング", href: "/interior/floor" },
      ]}
      relatedPages={[
        { label: "ご依頼の流れ", href: "/flow" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
