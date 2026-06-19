import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `襖・障子・網戸の張替え | 和室一式リフレッシュ | ${SITE_NAME}`,
  description: "襖・障子・網戸の張替えを畳工事と一括で依頼可能。和室全体の印象を一新。3,000円〜/枚。賃貸物件・住宅・旅館対応。",
  path: "/services/fusuma-shoji-amido",
});

export default function FusumaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="襖・障子・網戸の張替え"
      subtitle="畳工事と合わせて、ふすま・障子・網戸の張替えも一括でご依頼いただけます。和室全体の印象を一新し、空気感までリフレッシュします。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "襖・障子・網戸" },
      ]}
      image="/images/service-fusuma.jpg"
      sections={[
        {
          heading: "和室一式のリフレッシュ",
          content: (
            <p>
              畳の張替えと合わせて、ふすま・障子・網戸を同時にリフレッシュすることで、
              和室全体の印象が劇的に変わります。
              別々に業者を手配する必要がなく、一括でご依頼いただけます。
            </p>
          ),
        },
        {
          heading: "対応工事",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">ふすま張替え</strong> — 柄・素材選択可能。無地・デザイン紙</li>
              <li><strong className="text-sumi">障子張替え</strong> — 和紙・プラスチック障子紙など</li>
              <li><strong className="text-sumi">網戸張替え</strong> — 標準・防虫・ペット対応など</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "ふすま張替え", price: "3,000円〜/枚", note: "" },
        { service: "障子張替え", price: "2,000円〜/枚", note: "" },
        { service: "網戸張替え", price: "2,500円〜/枚", note: "" },
      ]}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "内装工事", href: "/interior" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "料金の目安", href: "/price" },
        { label: "よくある質問", href: "/faq" },
      ]}
    />
  );
}
