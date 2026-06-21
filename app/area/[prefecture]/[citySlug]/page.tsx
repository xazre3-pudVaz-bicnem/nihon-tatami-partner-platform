import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { AREAS, AREA_SERVICES, getPrefecture, getCity, getAreaService, isAreaServiceSlug } from "@/data/areas";
import AreaPageTemplate from "@/components/templates/AreaPageTemplate";

type Props = { params: Promise<{ prefecture: string; citySlug: string }> };

// citySlug は「市区」または「サービス」のいずれか
export function generateStaticParams() {
  const params: { prefecture: string; citySlug: string }[] = [];
  for (const pref of AREAS) {
    for (const city of pref.cities) {
      params.push({ prefecture: pref.slug, citySlug: city.slug });
    }
    for (const s of AREA_SERVICES) {
      params.push({ prefecture: pref.slug, citySlug: s.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture, citySlug } = await params;
  const pref = getPrefecture(prefecture);
  if (!pref) return { title: `エリアが見つかりません | ${SITE_NAME}` };

  if (isAreaServiceSlug(citySlug)) {
    const service = getAreaService(citySlug)!;
    return buildMetadata({
      title: `${pref.name}の${service.name} | ${SITE_NAME}`,
      description: `${pref.name}で${service.name}に対応。各市区へお伺いします。現地確認・お見積もり無料。素材や枚数により費用は変動します。法人・複数物件もご相談ください。`,
      path: `/area/${prefecture}/${citySlug}`,
    });
  }

  const found = getCity(prefecture, citySlug);
  if (!found) return { title: `エリアが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${pref.name}${found.city.name}の畳張替え・襖障子・原状回復 | ${SITE_NAME}`,
    description: `${pref.name}${found.city.name}で畳の表替え・新調、襖・障子の張替え、原状回復・内装工事に対応。現地確認・お見積もり無料。法人・複数物件もご相談ください。`,
    path: `/area/${prefecture}/${citySlug}`,
  });
}

export default async function CityOrServicePage({ params }: Props) {
  const { prefecture, citySlug } = await params;
  const pref = getPrefecture(prefecture);
  if (!pref) notFound();

  // サービスページ（県×サービス）
  if (isAreaServiceSlug(citySlug)) {
    const service = getAreaService(citySlug)!;
    return (
      <AreaPageTemplate
        pref={pref}
        service={service}
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: pref.name, href: `/area/${pref.slug}` },
          { label: service.name },
        ]}
      />
    );
  }

  // 市区ページ
  const found = getCity(prefecture, citySlug);
  if (!found) notFound();
  return (
    <AreaPageTemplate
      pref={pref}
      city={found.city}
      breadcrumbs={[
        { label: "対応エリア", href: "/area" },
        { label: pref.name, href: `/area/${pref.slug}` },
        { label: found.city.name },
      ]}
    />
  );
}
