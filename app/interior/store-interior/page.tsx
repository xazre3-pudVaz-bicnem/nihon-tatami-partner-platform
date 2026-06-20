import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `店舗内装工事 | 飲食店・小売店・サロンの内装改修 | ${SITE_NAME}`,
  description: "飲食店・小売店・サロンの内装工事。和空間づくり・座敷設置・クロス・床の内装改修。新規開業から退去時原状回復まで対応。",
  path: "/interior/store-interior",
});

export default function StoreInteriorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="店舗内装工事"
      subtitle="新規開業・改装・退去後の原状回復まで、店舗内装工事を幅広く承ります。和食店・旅館の和室空間づくりも得意分野です。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "店舗内装工事" }]}
      image="/images/nihon-tatami/interior/interior-store-workers-01.png"
      sections={[
        {
          heading: "店舗内装工事の対応範囲",
          content: (
            <ul className="space-y-2">
              <li>— 壁・天井のクロス張替え</li>
              <li>— 床材（フローリング・フロアタイル・クッションフロア）の施工</li>
              <li>— 畳・和スペース・小上がりの新規設置</li>
              <li>— ふすま・障子の張替え</li>
              <li>— 軽微な大工工事・造作</li>
            </ul>
          ),
        },
        {
          heading: "和食店・旅館の和空間づくり",
          content: (
            <p>
              日本畳パートナーズは畳の専門性を持つため、
              和食店・旅館の座敷・小上がりの新規設置や改修が得意です。
              素材選び・縁の選定から施工まで、和の空間づくりをトータルでサポートします。
            </p>
          ),
        },
      ]}
      relatedServices={[
        { label: "店舗退去後の原状回復", href: "/restoration/store" },
        { label: "店舗オーナー向けサービス", href: "/business/store" },
        { label: "縁なし畳・樹脂畳", href: "/services/resin-tatami" },
      ]}
      relatedPages={[
        { label: "施工事例（店舗）", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
