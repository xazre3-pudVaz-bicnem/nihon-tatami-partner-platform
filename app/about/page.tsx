import type { Metadata } from "next";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "会社概要 | 日本畳パートナー",
  description: "日本畳パートナーの会社概要、設立背景、ミッション、チーム情報を掲載しています。",
  alternates: { canonical: `${SITE_URL}/about` },
};

const INFO = [
  { label: "社名", value: "日本畳パートナー株式会社（仮称）" },
  { label: "設立", value: "2024年" },
  { label: "事業内容", value: "畳・和室工事業者マッチングプラットフォームの運営" },
  { label: "対象エリア", value: "埼玉県（順次拡大予定）" },
  { label: "所在地", value: "埼玉県（詳細はお問い合わせください）" },
  { label: "お問い合わせ", value: "サイト内お問い合わせフォームよりご連絡ください" },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-sumi py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>会社概要</h1>
          <p className="text-sm text-white/50">日本畳パートナーについて</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* ミッション */}
        <section className="mb-14">
          <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>ミッション</h2>
          <div className="bg-kiji/40 border-l-4 border-kincya p-6">
            <p className="text-lg text-sumi leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
              「職人の技術と、それを必要とする人をつなぐ」
            </p>
          </div>
          <div className="mt-6 text-sm text-sumi/70 leading-relaxed space-y-3">
            <p>
              日本の住宅には、今も多くの畳の部屋があります。しかし、「どの業者に頼めばいいかわからない」「料金が不透明」「口コミを見る場所がない」といった悩みから、畳の張替えを先送りにしているお客様が多いことに気づきました。
            </p>
            <p>
              一方で、腕の良い職人がいても、ネット集客が苦手なために仕事が少ない業者も多く存在します。
            </p>
            <p>
              日本畳パートナーは、この双方の課題を解決するために生まれました。料金と口コミを透明化し、信頼できる業者に安心して依頼できる環境を作ることが、私たちのミッションです。
            </p>
          </div>
        </section>

        {/* 会社情報テーブル */}
        <section className="mb-14">
          <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>会社情報</h2>
          <div className="bg-white border border-border divide-y divide-kiji">
            {INFO.map((row) => (
              <div key={row.label} className="flex gap-6 px-6 py-4">
                <span className="text-xs text-sumi/40 shrink-0 w-28 pt-0.5">{row.label}</span>
                <span className="text-sm text-sumi">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 今後の展開 */}
        <section className="mb-14 bg-white border border-border p-6">
          <h2 className="text-xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>今後の展開</h2>
          <div className="text-sm text-sumi/70 leading-relaxed space-y-2">
            <p>現在は埼玉県を中心にサービスを展開しています。今後は対応エリアを拡大し、全国の畳・和室工事業者をカバーすることを目指しています。</p>
            <ul className="list-disc list-inside space-y-1 text-sumi/60 pl-2">
              <li>2024年：埼玉県でサービス開始</li>
              <li>2025年：関東全域への拡大（予定）</li>
              <li>2026年〜：全国展開（予定）</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
