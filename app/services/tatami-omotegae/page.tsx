import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳表替え | 国産い草・和紙畳・樹脂畳対応 | ${SITE_NAME}`,
  description: "畳表替えとは畳床はそのままに表面を新しく張り替えるメンテナンス。費用5,500円〜/枚。住宅・旅館・賃貸物件対応。現地確認・お見積もり無料。",
  path: "/services/tatami-omotegae",
});

export default function TatamiOmotegaePage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="畳表替え"
      subtitle="畳床はそのままに、表面の畳表（ゴザ）を新しいい草に張り替えます。費用を抑えながら清潔感・い草の香りを取り戻せる最も一般的なメンテナンスです。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "畳表替え" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-craftsman-01.png"
      sections={[
        {
          heading: "畳表替えとは",
          content: (
            <>
              <p>
                畳表替えとは、畳床（芯材）はそのままに、表面の畳表（ゴザ）を新しいものに張り替える施工です。
                費用を抑えながら、新品のい草の香りと清潔感を取り戻せる最も一般的なメンテナンス方法です。
              </p>
              <p>
                表替えの目安は5〜8年に一度。ただし、ささくれが目立つ、色あせが気になる、
                カビ・ダニの臭いがするなどのサインが出たら早めのメンテナンスをお勧めします。
              </p>
            </>
          ),
        },
        {
          heading: "使用できる素材",
          content: (
            <>
              <p>
                表替えに使用できる畳表の素材は多岐にわたります。
              </p>
              <ul className="space-y-2">
                <li><strong className="text-sumi">国産い草（機械すき）</strong> — 標準的な品質。5,500円〜/枚</li>
                <li><strong className="text-sumi">国産い草（手刈り・天日干し）</strong> — 高品質・香りが豊か。旅館・茶室向け</li>
                <li><strong className="text-sumi">和紙畳</strong> — 耐久性・撥水性が高い。ペット・子育て家庭向け</li>
                <li><strong className="text-sumi">樹脂畳</strong> — 水拭き可能。店舗・旅館向け</li>
              </ul>
            </>
          ),
        },
        {
          heading: "こんな方にお勧め",
          content: (
            <ul className="space-y-2">
              <li>— 畳表のささくれ・色あせが気になる</li>
              <li>— い草の香りを取り戻したい</li>
              <li>— 費用を抑えてきれいにしたい</li>
              <li>— 賃貸物件の入退去時のリフレッシュ</li>
              <li>— 旅館・施設の定期メンテナンス</li>
            </ul>
          ),
        },
        {
          heading: "施工の流れ",
          content: (
            <ol className="space-y-2">
              <li>1. お問い合わせ・現地確認（無料）</li>
              <li>2. お見積もり・素材の選定</li>
              <li>3. 畳を工場に持ち帰り（当日または翌日返し）</li>
              <li>4. 新しい畳表を張り替えて納品</li>
              <li>5. 仕上がり確認・お引き渡し</li>
            </ol>
          ),
        },
      ]}
      price={[
        { service: "畳表替え（国産い草・機械すき）", price: "5,500円〜/枚", note: "標準グレード" },
        { service: "畳表替え（国産い草・手刈り）", price: "8,000円〜/枚", note: "高品質グレード" },
        { service: "畳表替え（和紙畳）", price: "8,000円〜/枚", note: "耐久性重視" },
        { service: "畳表替え（樹脂畳）", price: "10,000円〜/枚", note: "水拭き可能" },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "general").slice(0, 4)}
      relatedServices={[
        { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "和紙畳", href: "/services/washi-tatami" },
      ]}
      relatedPages={[
        { label: "施工事例を見る", href: "/works" },
        { label: "料金の目安", href: "/price" },
        { label: "よくある質問", href: "/faq" },
      ]}
    />
  );
}
