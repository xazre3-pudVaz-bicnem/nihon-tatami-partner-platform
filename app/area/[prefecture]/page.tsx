import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { AREAS, getPrefecture } from "@/data/areas";
import AreaPageTemplate from "@/components/templates/AreaPageTemplate";

type Props = { params: Promise<{ prefecture: string }> };

export function generateStaticParams() {
  return AREAS.map((p) => ({ prefecture: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture } = await params;
  const pref = getPrefecture(prefecture);
  if (!pref) return { title: `エリアが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${pref.name}の畳張替え・襖障子・原状回復 | ${SITE_NAME}`,
    description: `${pref.name}で畳の表替え・新調、襖・障子の張替え、原状回復・内装工事に対応。各市区へお伺いします。現地確認・お見積もり無料。法人・複数物件もご相談ください。`,
    path: `/area/${prefecture}`,
  });
}

export default async function PrefecturePage({ params }: Props) {
  const { prefecture } = await params;
  const pref = getPrefecture(prefecture);
  if (!pref) notFound();
  return (
    <AreaPageTemplate
      pref={pref}
      breadcrumbs={[{ label: "対応エリア", href: "/area" }, { label: pref.name }]}
    />
  );
}
