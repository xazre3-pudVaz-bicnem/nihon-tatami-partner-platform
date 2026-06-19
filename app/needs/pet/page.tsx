import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `ペットと畳 | 猫・犬の爪傷・汚れ対策 | ${SITE_NAME}`,
  description: "ペット（猫・犬）がいる家庭の畳選び。爪で傷ついた畳・おしっこの汚れ対策に。和紙畳・樹脂畳など耐久性の高い畳をご提案。",
  path: "/needs/pet",
});

export default function NeedsPetPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="ペットがいるご家庭の畳選び"
      subtitle="猫や犬の爪傷・粗相に強い畳へ。和紙畳・樹脂畳など、ペットと共存できる素材をご提案します。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "ペットと畳" },
      ]}
      image="/images/needs-pet.jpg"
      sections={[
        {
          heading: "ペットが原因の畳トラブル",
          content: (
            <ul className="space-y-2">
              <li>— 猫・犬の爪による引っかき傷</li>
              <li>— おしっこ・粗相による染み・臭い</li>
              <li>— 毛が畳の目に入り込む</li>
              <li>— 噛みちぎりによる損傷</li>
            </ul>
          ),
        },
        {
          heading: "ペットに強い畳素材",
          content: (
            <p>
              和紙畳・樹脂畳（ポリプロピレン）はい草より耐久性が高く、爪傷・水分に強い素材です。
              拭き掃除ができるため衛生管理も簡単です。
              また色・柄のバリエーションが豊富で、インテリアに合わせて選べます。
            </p>
          ),
        },
        {
          heading: "ペット可賃貸での原状回復",
          content: (
            <p>
              ペット可物件でも退去時の原状回復は必要です。
              爪傷・汚れの範囲によって表替えか新調かが変わります。
              管理会社・オーナー様のご相談も承ります。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "material").slice(0, 4)}
      relatedServices={[
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "賃貸の原状回復", href: "/restoration/rental" },
      ]}
      relatedPages={[
        { label: "ペット可賃貸の畳対策", href: "/column/pet-tatami-guide" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
