import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `店舗退去後の原状回復工事 | 飲食店・小売店・サロン | ${SITE_NAME}`,
  description: "飲食店・小売店・サロンの退去に伴う原状回復工事。床・壁・建具の復旧から畳スペースの撤去・復元まで対応。スケジュール調整柔軟。",
  path: "/restoration/store",
});

export default function RestorationStorePage() {
  return (
    <ServicePageTemplate
      eyebrow="Restoration"
      title="店舗退去後の原状回復"
      subtitle="飲食店・小売店・サロンの退去時の原状回復工事に対応。内装解体・床・壁・天井の復旧まで一括で承ります。"
      breadcrumbs={[
        { label: "原状回復", href: "/restoration" },
        { label: "店舗退去後の原状回復" },
      ]}
      image="/images/nihon-tatami/restoration/restoration-office-01.png"
      sections={[
        {
          heading: "店舗退去時の原状回復",
          content: (
            <p>
              店舗退去時は一般住宅より広範囲の原状回復が必要になることがあります。
              畳スペースの撤去・復元から、クロス・床・天井の復旧まで、
              まとめてご依頼いただけます。
            </p>
          ),
        },
        {
          heading: "対応内容",
          content: (
            <ul className="space-y-2">
              <li>— 和スペース・畳の撤去または復元</li>
              <li>— クロス・壁・天井の復旧</li>
              <li>— 床材（フローリング・フロアタイル・CF）の張替え</li>
              <li>— ふすま・障子・建具の復旧</li>
              <li>— スケジュール調整（閉店日・返却日に合わせた施工）</li>
            </ul>
          ),
        },
      ]}
      relatedServices={[
        { label: "店舗内装工事", href: "/interior/store-interior" },
        { label: "管理会社向け原状回復", href: "/restoration/management-company" },
        { label: "店舗オーナー向け", href: "/business/store" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
        { label: "ご依頼の流れ", href: "/flow" },
      ]}
    />
  );
}
