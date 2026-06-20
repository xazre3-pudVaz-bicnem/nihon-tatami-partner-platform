import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `空室対策 | 畳・内装整備で入居率を高める | ${SITE_NAME}`,
  description: "空室対策として畳の張替え・和紙畳への変更・クロス・床のリフレッシュが有効。ペット可物件への転換も対応。賃貸オーナー・管理会社向け。",
  path: "/business/vacancy-measures",
});

export default function VacancyMeasuresPage() {
  return (
    <ServicePageTemplate
      eyebrow="Vacancy Measures"
      title="空室対策の内装整備"
      subtitle="畳の張替え・内装リフレッシュで賃貸物件の競争力を高めます。和紙畳・樹脂畳への変更でペット可物件への転換も可能です。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "空室対策" },
      ]}
      image="/images/nihon-tatami/restoration/restoration-vacant-check-01.png"
      sections={[
        {
          heading: "空室対策に内装整備が有効な理由",
          content: (
            <p>
              賃貸物件の内見時、畳の状態は入居候補者の印象に大きく影響します。
              新品の畳はい草の香りと清潔感で、内見の第一印象を大きく改善します。
              また、老朽化した畳をそのままにしておくと、
              入居希望者が検討から外すリスクがあります。
            </p>
          ),
        },
        {
          heading: "空室対策としての施工メニュー",
          content: (
            <ul className="space-y-2">
              <li>— 畳表替え・新調（清潔感・香りの回復）</li>
              <li>— 和紙畳・樹脂畳への変更（ペット可対応）</li>
              <li>— クロス張替え（壁・天井のリフレッシュ）</li>
              <li>— フローリング・床材の補修・張替え</li>
              <li>— ふすま・障子の張替え（和室の印象改善）</li>
            </ul>
          ),
        },
        {
          heading: "ペット可物件への転換",
          content: (
            <p>
              和紙畳・樹脂畳への変更で、ペットの爪による傷や汚れに強い物件に変えられます。
              ペット可物件は需要が高く、空室期間の短縮につながります。
              ペット対応素材の選定もご相談ください。
            </p>
          ),
        },
      ]}
      relatedServices={[
        { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "クロス張替え", href: "/interior/cross" },
      ]}
      relatedPages={[
        { label: "コラム：空室対策と畳交換", href: "/column/rental-tatami-vacancy" },
        { label: "賃貸オーナー向けサービス", href: "/business/rental-owner" },
      ]}
    />
  );
}
