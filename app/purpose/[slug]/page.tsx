import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PURPOSE_PAGES, getPurpose } from "@/data/purpose";
import LongFormPage from "@/components/templates/LongFormPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PURPOSE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPurpose(slug);
  if (!p) return { title: `ページが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${p.h1} | ${SITE_NAME}`,
    description: p.lead.slice(0, 120),
    path: `/purpose/${slug}`,
    image: p.heroImage,
  });
}

export default async function PurposePage({ params }: Props) {
  const { slug } = await params;
  const p = getPurpose(slug);
  if (!p) notFound();
  return <LongFormPage data={p} />;
}
