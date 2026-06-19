import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "損害賠償補償制度 | 日本畳パートナー",
  description: "日本畳パートナーの損害賠償補償制度について。ネット予約での施工トラブルを最大10万円まで補償します。",
  alternates: { canonical: `${SITE_URL}/guarantee` },
};

export default function GuaranteePage() {
  return (
    <>
      <div className="bg-sumi py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white mb-2" style={{ fontFamily: "var(--font-serif)" }}>損害賠償補償制度</h1>
          <p className="text-sm text-white/50">当サービスからの予約に起因するトラブルをサポートします</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white border border-igusa/30 p-6 mb-8">
          <h2 className="text-lg text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>制度の概要</h2>
          <p className="text-sm text-sumi/70 leading-relaxed">
            日本畳パートナーを通じてネット予約した工事で施工ミスや故意・過失による損害が発生した場合に、1件あたり最大10万円を補償する制度です。
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { label: "補償上限額", v: "1件あたり最大10万円" },
            { label: "申請期限", v: "施工完了から30日以内" },
            { label: "対象", v: "ネット予約成立案件" },
            { label: "対象業者", v: "損害保険加入済みの全掲載業者" },
          ].map((r) => (
            <div key={r.label} className="flex gap-4 bg-white border border-border p-4">
              <span className="text-xs text-sumi/40 w-24 shrink-0">{r.label}</span>
              <span className="text-sm text-sumi font-medium">{r.v}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="inline-block border border-sumi text-sumi text-sm px-8 py-3 hover:bg-sumi hover:text-white transition-all duration-200">
            補償についてのお問い合わせ
          </Link>
        </div>
      </div>
    </>
  );
}
