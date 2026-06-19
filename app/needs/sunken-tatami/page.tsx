import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳のへたり・沈み込み対策 | 床がふかふかする原因と交換 | ${SITE_NAME}`,
  description: "畳がへたる・沈む・ふかふかする原因と解決法を専門家が解説。畳床の劣化と新調のタイミングについて。",
  path: "/needs/sunken-tatami",
});

export default function NeedsSunkenTatamiPage() {
  return (
    <ServicePageTemplate
      eyebrow="Needs"
      title="畳のへたり・沈み込みでお困りの方へ"
      subtitle="床を踏むとフカフカする、ヘコミが目立つ — それは畳床の劣化サインです。新調で快適な歩き心地に戻ります。"
      breadcrumbs={[
        { label: "お悩み別", href: "/needs" },
        { label: "畳のへたり・沈み込み" },
      ]}
      image="/images/needs-sunken.jpg"
      sections={[
        {
          heading: "へたり・沈み込みの原因",
          content: (
            <ul className="space-y-2">
              <li>— 畳床（芯材）の経年劣化（目安：15〜20年）</li>
              <li>— 重い家具を長期間同じ場所に置いている</li>
              <li>— 湿気による畳床の腐食</li>
              <li>— 床下地の問題（稀に下地が原因のこともある）</li>
            </ul>
          ),
        },
        {
          heading: "表替えで改善できる？",
          content: (
            <p>
              畳のへたりは畳床（芯材）の問題です。表替え（畳表の張替え）では改善しません。
              畳を新調（畳丸ごと交換）することで歩き心地・クッション性が戻ります。
              現地確認後、表替えか新調かをご提案します。
            </p>
          ),
        },
        {
          heading: "畳床の種類と選び方",
          content: (
            <p>
              現在の稲わら床と同等のものへの交換のほか、建材床（ポリスチレンフォーム複合）も選べます。
              建材床は軽量・防湿に優れ、新築・リフォームに向いています。
              用途・予算に合わせてご提案します。
            </p>
          ),
        },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "timing" || f.category === "price").slice(0, 4)}
      relatedServices={[
        { label: "畳の新調", href: "/services/tatami-shincho" },
        { label: "畳の表替え", href: "/services/tatami-omotekaeri" },
        { label: "フローリングへ変更", href: "/interior/flooring" },
      ]}
      relatedPages={[
        { label: "畳替えのタイミング", href: "/needs/timing" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
