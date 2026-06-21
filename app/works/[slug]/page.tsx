import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { WORKS_DETAIL, getWorkBySlug } from "@/data/works-detail";
import WorkDetailTemplate from "@/components/templates/WorkDetailTemplate";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORKS_DETAIL.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: `施工対応例が見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${work.title} | 施工対応例・施工イメージ | ${SITE_NAME}`,
    description: `${work.location}での${work.service}の施工対応例。${work.challenge.slice(0, 80)}`,
    path: `/works/${slug}`,
    image: work.heroImage,
  });
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();
  return <WorkDetailTemplate work={work} />;
}
