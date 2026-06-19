import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `寺院・神社の畳工事 | 格式に合わせた施工 | ${SITE_NAME}`,
  description: "寺院・神社の本堂・客殿・社務所・控室の畳工事。格式に合わせた縁の選定・行事前の整備・法要スケジュールに合わせた施工計画。",
  path: "/business/temple-shrine",
});

export default function TempleShrinesPage() {
  return (
    <ServicePageTemplate
      eyebrow="For Temple / Shrine"
      title="寺院・神社の畳工事"
      subtitle="本堂・客殿・控室など、格式と用途に合わせた素材・縁の選定から施工まで。法要・行事前の整備にも対応します。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "寺院・神社向け" },
      ]}
      image="/images/works-04.jpg"
      sections={[
        {
          heading: "寺院・神社の畳工事で大切なこと",
          content: (
            <p>
              寺院・神社の畳工事は、一般住宅とは異なる配慮が必要です。
              本堂・客殿・控室・社務所など用途によって、求められる格式と素材が異なります。
              また、法要・祭礼などの行事スケジュールに合わせた施工計画が重要です。
            </p>
          ),
        },
        {
          heading: "対応場所・施工内容",
          content: (
            <ul className="space-y-2">
              <li>— 本堂の畳新調・表替え（格式の高い縁選定）</li>
              <li>— 客殿・書院の畳整備</li>
              <li>— 控室・待合室の畳表替え</li>
              <li>— 社務所・祈祷室の畳工事</li>
              <li>— 境内での丁寧な養生・清掃対応</li>
            </ul>
          ),
        },
        {
          heading: "縁（ヘリ）の格式について",
          content: (
            <p>
              寺院・神社の本堂では、縁の格式が空間の品格を決定づけます。
              紋縁・麻縁など格式の高い縁を選ぶことで、神聖な空間の格式を保てます。
              現地確認時に用途・格式・ご予算に合わせた縁をご提案します。
            </p>
          ),
        },
        {
          heading: "法要・行事前の整備",
          content: (
            <p>
              年忌法要・お盆・彼岸・祭礼など、大きな行事前に畳を整備するケースが多くあります。
              スケジュールに合わせて施工計画を立てますので、早めにご相談ください。
            </p>
          ),
        },
      ]}
      relatedServices={[
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "畳縁・特注縁", href: "/services/tatami-beri" },
        { label: "畳表替え", href: "/services/tatami-omotegae" },
      ]}
      relatedPages={[
        { label: "施工事例（寺社）", href: "/works" },
        { label: "コラム：寺院・神社の畳工事のポイント", href: "/column/temple-shrine-tatami" },
      ]}
    />
  );
}
