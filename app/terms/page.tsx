import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `利用規約 | ${SITE_NAME}`,
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-sumi py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-white" style={{ fontFamily: "var(--font-serif)" }}>利用規約</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-border p-6 sm:p-8 text-sm text-sumi/70 leading-relaxed space-y-6">
          <p>本利用規約（以下「本規約」）は、日本畳パートナーズ（以下「当社」）が提供するサービスの利用条件を定めるものです。</p>
          {[
            { h: "第1条（適用）", p: "本規約は、本サービスの利用に関する当社とお客様との間の権利義務関係を定めることを目的とします。" },
            { h: "第2条（禁止事項）", p: "法令または公序良俗に違反する行為、当社・第三者の知的財産権・プライバシー・名誉を侵害する行為、虚偽の情報を提供する行為を禁止します。" },
            { h: "第3条（免責事項）", p: "当社は、本サービスに起因してお客様に生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。" },
            { h: "第4条（規約の変更）", p: "当社は必要と判断した場合、本規約を変更することがあります。変更後の規約はサイト上に掲示した時点から効力を生じます。" },
          ].map((sec) => (
            <div key={sec.h}>
              <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{sec.h}</h2>
              <p>{sec.p}</p>
            </div>
          ))}
          <p className="text-xs text-sumi/40">最終更新日：2026年6月19日</p>
        </div>
      </div>
    </>
  );
}
