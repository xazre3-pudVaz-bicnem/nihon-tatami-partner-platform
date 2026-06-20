import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `賃貸オーナー向け原状回復 | 複数物件・継続対応 | ${SITE_NAME}`,
  description: "賃貸オーナー向けの原状回復工事。複数物件・継続案件対応。退去ごとの業者探しを一本化。写真付き報告書発行。",
  path: "/restoration/owner",
});

export default function RestorationOwnerPage() {
  return (
    <ServicePageTemplate
      eyebrow="Restoration"
      title="賃貸オーナー向け原状回復"
      subtitle="複数物件をお持ちのオーナー様の一括管理に対応。退去のたびに業者を探す手間を省き、原状回復から空室対策まで一本化できます。"
      breadcrumbs={[
        { label: "原状回復", href: "/restoration" },
        { label: "オーナー向け対応" },
      ]}
      image="/images/nihon-tatami/restoration/restoration-vacant-check-02.png"
      sections={[
        {
          heading: "オーナー様のメリット",
          content: (
            <ul className="space-y-2">
              <li>— 複数物件の原状回復を一社に一本化</li>
              <li>— 退去連絡から施工まで迅速対応</li>
              <li>— 写真付き施工報告書で入居前後の状態を記録</li>
              <li>— 空室対策（畳・内装整備）の相談も一緒に可能</li>
              <li>— 継続取引で業者を都度探す手間がなくなる</li>
            </ul>
          ),
        },
        {
          heading: "よくある依頼パターン",
          content: (
            <ul className="space-y-2">
              <li>— 退去後の畳交換・クロス張替え</li>
              <li>— 和紙畳・樹脂畳への変更（ペット可対応）</li>
              <li>— 複数棟の一括施工（入居前後スケジュールに合わせた段取り）</li>
            </ul>
          ),
        },
      ]}
      relatedServices={[
        { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
        { label: "賃貸オーナー向けサービス", href: "/business/rental-owner" },
        { label: "空室対策", href: "/business/vacancy-measures" },
      ]}
      relatedPages={[
        { label: "コラム：空室対策と畳交換", href: "/column/rental-tatami-vacancy" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
