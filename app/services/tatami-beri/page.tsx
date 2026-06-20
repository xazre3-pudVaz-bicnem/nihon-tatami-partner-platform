import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳縁（畳ヘリ） | デザイン縁・特注縁 | ${SITE_NAME}`,
  description: "畳縁（ヘリ）はデザイン縁・無地・紋縁など種類豊富。旅館・茶室は格式に合わせた縁選びが重要。デザイン縁でおしゃれな和室に。",
  path: "/services/tatami-beri",
});

export default function TatamiBerinPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="畳縁・特注縁"
      subtitle="畳の縁（ヘリ）はデザインや格式を左右する重要な要素。無地・紋縁・デザイン縁など豊富な種類から、空間と用途に合わせてご提案します。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "畳縁・特注縁" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-large-01.png"
      sections={[
        {
          heading: "畳縁の種類",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">無地縁</strong> — シンプルで現代的。一般住宅に多い</li>
              <li><strong className="text-sumi">紋縁</strong> — 格式ある文様入り。旅館・茶室・寺社向け</li>
              <li><strong className="text-sumi">デザイン縁</strong> — ストライプ・花柄など個性的な縁</li>
              <li><strong className="text-sumi">麻縁</strong> — 高品質な麻素材の縁</li>
            </ul>
          ),
        },
        {
          heading: "旅館・茶室・寺社では縁にこだわりを",
          content: (
            <p>
              旅館の客室や茶室、寺社の本堂では、縁の格式が空間の品格を左右します。
              格式高い空間には紋縁・麻縁などが適しており、
              現地確認時に用途と格式に合わせたご提案をいたします。
            </p>
          ),
        },
      ]}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "旅館向け畳", href: "/business/ryokan" },
        { label: "寺院・神社向け", href: "/business/temple-shrine" },
      ]}
      relatedPages={[
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
