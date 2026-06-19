import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳新調 | 畳床から作り直す完全リニューアル | ${SITE_NAME}`,
  description: "畳新調は畳床・畳表・縁をすべて新しく作り直す施工。踏み込みのへたり・深部のカビダニ・リフォーム時に最適。15,000円〜/枚。現地確認無料。",
  path: "/services/tatami-shinchou",
});

export default function TatamiShinchouPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="畳新調"
      subtitle="畳床・畳表・縁をすべて新しく作り直す完全リニューアル。踏み込んだときの沈み・へたり、深部のカビ・ダニが気になる場合に最適です。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "畳新調" },
      ]}
      image="/images/service-shinchou.jpg"
      sections={[
        {
          heading: "畳新調とは",
          content: (
            <p>
              畳新調とは、畳床（芯材）から新しく作り替える施工です。
              畳表だけでなく、下地の畳床まで完全に刷新するため、
              踏み込んだときの沈み感・へたり・古い床のカビ・ダニなどの問題も
              根本から解決できます。
            </p>
          ),
        },
        {
          heading: "新調が必要なケース",
          content: (
            <ul className="space-y-2">
              <li>— 踏み込むとへたり・沈みを感じる</li>
              <li>— 畳床が劣化し、表替えだけでは改善しない</li>
              <li>— カビ・ダニが深部まで浸透している</li>
              <li>— リフォームに合わせて全面リニューアルしたい</li>
              <li>— 旅館・施設の客室を格上げしたい</li>
              <li>— 寺社の本堂を格式高く整えたい</li>
            </ul>
          ),
        },
        {
          heading: "畳床の種類",
          content: (
            <>
              <p>畳床には以下の種類があり、用途・予算に合わせてご提案します。</p>
              <ul className="space-y-2">
                <li><strong className="text-sumi">わら床</strong> — 伝統的な素材。重厚感・断熱性が高い。旅館・寺社向け</li>
                <li><strong className="text-sumi">建材床（スタイロ畳）</strong> — 軽量・ダニが発生しにくい。現代住宅向け</li>
                <li><strong className="text-sumi">複合床</strong> — わらとインシュレーションボードの組み合わせ</li>
              </ul>
            </>
          ),
        },
      ]}
      price={[
        { service: "畳新調（わら床・国産い草）", price: "20,000円〜/枚", note: "旅館・茶室向け高品質" },
        { service: "畳新調（建材床・国産い草）", price: "15,000円〜/枚", note: "住宅・賃貸向け標準" },
        { service: "畳新調（建材床・和紙畳）", price: "18,000円〜/枚", note: "ペット・子育て向け" },
      ]}
      faqs={FAQ_ITEMS.filter((f) => f.category === "general" || f.category === "timing").slice(0, 5)}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "旅館向け畳", href: "/business/ryokan" },
      ]}
      relatedPages={[
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
