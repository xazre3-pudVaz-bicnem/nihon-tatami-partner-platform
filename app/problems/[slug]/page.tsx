import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PROBLEM_PAGES, getProblemPage } from "@/data/problems-pages";
import LongFormPage from "@/components/templates/LongFormPage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROBLEM_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProblemPage(slug);
  if (!p) return { title: `お悩みが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${p.h1} | ${SITE_NAME}`,
    description: p.lead.slice(0, 120),
    path: `/problems/${slug}`,
    image: p.heroImage,
  });
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const p = getProblemPage(slug);
  if (!p) notFound();
  return <LongFormPage data={p} />;
}
