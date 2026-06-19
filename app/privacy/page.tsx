import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${SITE_NAME}`,
  description: "日本畳パートナーズのプライバシーポリシーについてご確認いただけます。",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-sumi py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl text-white" style={{ fontFamily: "var(--font-serif)" }}>プライバシーポリシー</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-border p-6 sm:p-8 text-sm text-sumi/70 leading-relaxed space-y-6">
          {[
            { h: "1. 取得する個人情報", p: "氏名・メールアドレス・住所・電話番号・利用履歴など、本サービスの利用に必要な情報を取得します。" },
            { h: "2. 利用目的", p: "本サービスの提供・改善、お問い合わせへの対応、業者との連絡調整、法令に基づく対応のために利用します。" },
            { h: "3. 第三者提供", p: "法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。ただし、依頼を受けた業者との連絡のため、必要最低限の情報を共有することがあります。" },
            { h: "4. 安全管理", p: "取得した個人情報は適切なセキュリティ対策を講じて管理します。漏洩・紛失・毀損を防止します。" },
            { h: "5. Cookie", p: "本サービスではCookieを使用します。ブラウザの設定でCookieを無効にすることができますが、一部の機能が使用できなくなる場合があります。" },
            { h: "6. お問い合わせ", p: "個人情報の取扱いに関するご質問・開示請求は、サイト内のお問い合わせフォームよりご連絡ください。" },
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
