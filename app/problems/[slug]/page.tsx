import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { PROBLEMS, getProblem } from "@/data/problems";
import ProblemPageTemplate from "@/components/templates/ProblemPageTemplate";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROBLEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProblem(slug);
  if (!p) return { title: `お悩みが見つかりません | ${SITE_NAME}` };
  return buildMetadata({
    title: `${p.title}｜原因と対処法 | ${SITE_NAME}`,
    description: `${p.title}の原因・対処法・費用の目安を専門家が解説。${p.solution.slice(0, 60)}`,
    path: `/problems/${slug}`,
    image: p.heroImage,
  });
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const p = getProblem(slug);
  if (!p) notFound();
  return <ProblemPageTemplate problem={p} />;
}
