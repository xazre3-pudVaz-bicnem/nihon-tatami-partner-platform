import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `賃貸退去後の原状回復 | 畳・クロス・床一括対応 | ${SITE_NAME}`,
  description: "賃貸物件退去後の原状回復。畳交換・クロス張替え・床補修を一括で対応。管理会社・オーナー向け継続取引歓迎。写真付き報告書発行。",
  path: "/restoration/rental",
});

export default function RestorationRentalPage() {
  return (
    <ServicePageTemplate
      eyebrow="Restoration"
      title="賃貸退去後の原状回復"
      subtitle="退去後の畳・クロス・床をまとめて原状回復。管理会社・オーナー様の継続案件にも対応しています。"
      breadcrumbs={[
        { label: "原状回復", href: "/restoration" },
        { label: "賃貸退去後の原状回復" },
      ]}
      image="/images/nihon-tatami/restoration/restoration-vacant-check-01.png"
      sections={[
        {
          heading: "賃貸物件の原状回復とは",
          content: (
            <p>
              賃貸退去後、次の入居者を迎えるために畳・クロス・床・建具などを
              入居前の状態に近づける工事です。
              日本畳パートナーズでは、これらを一括でご依頼いただけます。
            </p>
          ),
        },
        {
          heading: "対応工事",
          content: (
            <ul className="space-y-2">
              <li>— 畳の表替え・新調・和紙畳・樹脂畳への変更</li>
              <li>— クロス（壁・天井）張替え</li>
              <li>— フローリング・クッションフロア・フロアタイルの補修・張替え</li>
              <li>— ふすま・障子・網戸の張替え</li>
              <li>— 軽微な補修工事</li>
            </ul>
          ),
        },
        {
          heading: "管理会社・オーナー様へ",
          content: (
            <p>
              複数物件・複数棟の一括対応、写真付き施工報告書の発行、
              退去タイミングに合わせたスピーディーな対応を行います。
              継続取引・定期メンテナンスのご相談も歓迎です。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "btob" || f.q.includes("原状回復") || f.q.includes("管理")).slice(0, 4)}
      relatedServices={[
        { label: "賃貸オーナー向け", href: "/business/rental-owner" },
        { label: "管理会社向け", href: "/restoration/management-company" },
        { label: "空室対策", href: "/business/vacancy-measures" },
      ]}
      relatedPages={[
        { label: "コラム：原状回復と畳交換", href: "/column/restoration-tatami-cases" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
