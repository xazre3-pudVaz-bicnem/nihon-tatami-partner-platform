import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `店舗オーナー向け畳・内装工事 | 和空間づくり | ${SITE_NAME}`,
  description: "飲食店・小売店・サロンの和スペース設置・座敷改修・内装工事・退去時原状回復。店舗の和空間づくりをトータルサポート。",
  path: "/business/store",
});

export default function StorePage() {
  return (
    <ServicePageTemplate
      eyebrow="For Store Owner"
      title="店舗オーナー向け畳・内装工事"
      subtitle="飲食店・小売店・サロンの和スペース設置・座敷改修・内装工事・退去時の原状回復まで。店舗の魅力を高める空間づくりをサポートします。"
      breadcrumbs={[
        { label: "法人・施設向け", href: "/business" },
        { label: "店舗オーナー向け" },
      ]}
      image="/images/works-05.jpg"
      sections={[
        {
          heading: "店舗の和空間づくり",
          content: (
            <p>
              飲食店や小売店に和のスペースを設けることで、空間の差別化が図れます。
              座敷・小上がりの設置から、既存和室の改修、縁なし畳・樹脂畳での清掃しやすい空間づくりまで対応します。
            </p>
          ),
        },
        {
          heading: "店舗向け対応内容",
          content: (
            <ul className="space-y-2">
              <li>— 座敷・小上がりの新規設置</li>
              <li>— 既存和室スペースの畳改修</li>
              <li>— 樹脂畳・和紙畳（清掃しやすい素材）への変更</li>
              <li>— クロス・床材の内装改修</li>
              <li>— 退去時の原状回復工事</li>
              <li>— 和食店の座敷改修・格上げ</li>
            </ul>
          ),
        },
        {
          heading: "店舗向け素材の選び方",
          content: (
            <p>
              店舗の畳は耐久性と清掃のしやすさが重要です。
              飲食店の座敷には樹脂畳（水拭き可能）や和紙畳が適しており、
              高級和食店や旅館には国産い草・七島藺の高品質素材をお勧めします。
              用途とご予算に合わせてご提案します。
            </p>
          ),
        },
      ]}
      relatedServices={[
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "店舗内装工事", href: "/interior/store-interior" },
        { label: "店舗退去後の原状回復", href: "/restoration/store" },
      ]}
      relatedPages={[
        { label: "施工事例（店舗）", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
