import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { AREAS, AREA_SERVICES, getPrefecture, getCity, getAreaService } from "@/data/areas";
import AreaPageTemplate from "@/components/templates/AreaPageTemplate";

type Props = { params: Promise<{ prefecture: string; citySlug: string; service: string }> };

// 市区 × サービス（citySlug は実際の市区のみ）
export function generateStaticParams() {
  const params: { prefecture: string; citySlug: string; service: string }[] = [];
  for (const pref of AREAS) {
    for (const city of pref.cities) {
      for (const s of AREA_SERVICES) {
        params.push({ prefecture: pref.slug, citySlug: city.slug, service: s.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { prefecture, citySlug, service } = await params;
  const found = getCity(prefecture, citySlug);
  const svc = getAreaService(service);
  if (!found || !svc) return { title: `ページが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${found.pref.name}${found.city.name}の${svc.name} | ${SITE_NAME}`,
    description: `${found.pref.name}${found.city.name}で${svc.name}に対応。現地確認・お見積もり無料。素材や枚数により費用は変動します。法人・複数物件もご相談ください。`,
    path: `/area/${prefecture}/${citySlug}/${service}`,
  });
}

export default async function CityServicePage({ params }: Props) {
  const { prefecture, citySlug, service } = await params;
  const pref = getPrefecture(prefecture);
  const found = getCity(prefecture, citySlug);
  const svc = getAreaService(service);
  if (!pref || !found || !svc) notFound();
  return (
    <AreaPageTemplate
      pref={pref}
      city={found.city}
      service={svc}
      breadcrumbs={[
        { label: "対応エリア", href: "/area" },
        { label: pref.name, href: `/area/${pref.slug}` },
        { label: found.city.name, href: `/area/${pref.slug}/${found.city.slug}` },
        { label: svc.name },
      ]}
    />
  );
}
