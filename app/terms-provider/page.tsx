import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `業者向け利用規約 | ${SITE_NAME}`,
  alternates: { canonical: `${SITE_URL}/terms-provider` },
};

export default function TermsProviderPage() {
  return (
    <>
      <div className="bg-sumi py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-white" style={{ fontFamily: "var(--font-serif)" }}>業者向け利用規約</h1>
          <p className="text-sm text-white/50 mt-1">掲載業者（プロバイダー）向けの利用条件</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-border p-6 sm:p-8 text-sm text-sumi/70 leading-relaxed space-y-6">
          {[
            { h: "第1条（掲載条件）", p: "掲載業者は、損害賠償保険への加入・本人確認・審査を通過した業者のみです。虚偽の申請は即時掲載停止とします。" },
            { h: "第2条（料金・手数料）", p: "各プランの月額料金をお支払いください。成約手数料は現在徴収していません。将来的に変更する場合は1ヶ月前に通知します。" },
            { h: "第3条（業者の義務）", p: "掲載内容は正確に保ってください。施工後のトラブルには誠実に対応してください。損害賠償保険の有効期限が切れた場合は速やかに当社に連絡してください。" },
            { h: "第4条（掲載停止）", p: "以下の場合、当社は事前通知なく掲載を停止できます：虚偽の情報の掲載、ユーザーからの重大な苦情、保険切れ、反社会的勢力との関与。" },
            { h: "第5条（知的財産）", p: "掲載業者が登録した写真・テキストの著作権は業者に帰属しますが、本サービスの運営目的に限り当社が利用できるものとします。" },
          ].map((sec) => (
            <div key={sec.h}>
              <h2 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{sec.h}</h2>
              <p>{sec.p}</p>
            </div>
          ))}
          <p className="text-xs text-sumi/40">最終更新日：2025年6月19日</p>
        </div>
      </div>
    </>
  );
}
