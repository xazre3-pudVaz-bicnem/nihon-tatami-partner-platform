import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳裏返し | 費用を抑えた畳メンテナンス | ${SITE_NAME}`,
  description: "畳裏返しは使用済み畳表を裏返して再利用する経済的な施工方法。3,300円〜/枚。使用2〜3年が目安。現地確認・見積もり無料。",
  path: "/services/tatami-uragaeshi",
});

export default function TatamiUragaeshiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="畳裏返し"
      subtitle="使用済みの畳表を裏側に返して再利用する、最も費用を抑えられる施工方法です。使用開始から2〜3年の畳表に対して有効です。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "畳裏返し" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-minimal-01.png"
      sections={[
        {
          heading: "畳裏返しとは",
          content: (
            <p>
              畳裏返しとは、使用済みの畳表を裏側に返して再利用する施工方法です。
              畳表の裏側はまだきれいな状態を保っているため、費用を大幅に抑えながら
              清潔感を取り戻すことができます。
              使用開始から2〜3年程度の比較的新しい畳表に対して有効な施工方法です。
            </p>
          ),
        },
        {
          heading: "裏返しに適したタイミング",
          content: (
            <ul className="space-y-2">
              <li>— 新調・表替えから2〜3年が経過した</li>
              <li>— 表面の色あせが気になりはじめた</li>
              <li>— ささくれが軽度に出てきた</li>
              <li>— 費用を抑えてリフレッシュしたい</li>
            </ul>
          ),
        },
        {
          heading: "裏返しができない場合",
          content: (
            <p>
              畳表の劣化が激しい場合（ひどいカビ・ダニ・破れ・へたりなど）は
              裏返しではなく表替えまたは新調をお勧めします。
              現地確認時に状態を確認した上で、最適な施工方法をご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "畳裏返し", price: "3,300円〜/枚", note: "使用2〜3年の畳表が対象" },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "general").slice(1, 4)}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
      ]}
      relatedPages={[
        { label: "畳替えのタイミング", href: "/needs/sasakure" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
