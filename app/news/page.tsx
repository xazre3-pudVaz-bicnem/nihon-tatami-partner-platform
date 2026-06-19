import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "お知らせ・プレスリリース | 日本畳パートナー",
  description: "日本畳パートナーのお知らせ・プレスリリース・サービスアップデート情報。",
  alternates: { canonical: `${SITE_URL}/news` },
};

const NEWS = [
  { date: "2025-06-19", tag: "サービス開始", title: "日本畳パートナー、埼玉県向けのベータ版をリリース", href: "#" },
  { date: "2025-05-10", tag: "アップデート", title: "業者ランキング機能・料金比較機能を追加しました", href: "#" },
  { date: "2025-04-01", tag: "お知らせ", title: "業者登録の受付を開始しました", href: "#" },
];

export default function NewsPage() {
  return (
    <>
      <div className="bg-sumi py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>お知らせ</h1>
          <p className="text-sm text-white/50">サービスアップデート・プレスリリース</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="divide-y divide-kiji">
          {NEWS.map((n) => (
            <Link key={n.title} href={n.href} className="group flex gap-4 items-start py-5 hover:bg-kiji/20 px-3 -mx-3 transition-colors">
              <span className="text-xs text-sumi/40 shrink-0 pt-0.5 w-24">{n.date}</span>
              <span className="text-xs border border-ai/30 text-ai px-2 py-0.5 shrink-0">{n.tag}</span>
              <span className="text-sm text-sumi group-hover:text-ai transition-colors">{n.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
