import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: { absolute: `プライバシーポリシー | ${SITE_NAME}` },
  description: "日本畳パートナーズのプライバシーポリシーについてご確認いただけます。",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-sumi py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
          <h1 className="text-2xl text-white" style={{ fontFamily: "var(--font-serif)" }}>プライバシーポリシー</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-border p-6 sm:p-10 space-y-8">

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>1. 個人情報の収集について</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              お問い合わせフォームから収集する情報：氏名、会社名/施設名、電話番号、メールアドレス、施工場所（住所）、お問い合わせ内容。サービス利用に必要な最低限の情報のみ収集します。
            </p>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>2. 利用目的</h2>
            <ul className="text-sm text-sumi/70 leading-relaxed space-y-1 list-disc list-inside">
              <li>お問い合わせへの対応・回答</li>
              <li>現地確認・施工スケジュールの調整</li>
              <li>施工パートナーへの連絡調整（必要最低限の情報のみ）</li>
              <li>法令に基づく対応</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>3. 第三者提供について</h2>
            <p className="text-sm text-sumi/70 leading-relaxed mb-2">
              原則として第三者に提供しません。ただし、以下の場合を除きます。
            </p>
            <ul className="text-sm text-sumi/70 leading-relaxed space-y-1 list-disc list-inside">
              <li>ご本人の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>施工調整のため協力業者に連絡する場合（必要最低限の情報に限る）</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>4. 業務委託について</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              施工業務の一部を協力業者に委託する場合があります。委託先に対しては、個人情報の適切な取り扱いを指導・監督します。
            </p>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>5. 安全管理措置</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              取得した個人情報への不正アクセス、紛失、破壊、改ざん、漏洩を防止するため、適切なセキュリティ対策を実施します。
            </p>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>6. 開示・訂正・削除のご請求</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              ご本人からの開示、訂正、削除のご請求に対しては、ご本人確認のうえ対応します。お問い合わせはサイト内のお問い合わせフォームよりご連絡ください。
            </p>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>7. Cookieおよびアクセス解析について</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              当サイトではCookieおよびGoogleアナリティクスを使用し、利用状況の分析を行います。Googleアナリティクスはデータを匿名で収集するものであり、個人を特定する情報は含みません。ブラウザの設定でCookieを無効にすることができますが、一部機能が使用できなくなる場合があります。
            </p>
          </div>

          <div>
            <h2 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>8. お問い合わせ窓口</h2>
            <p className="text-sm text-sumi/70 leading-relaxed">
              個人情報の取り扱いに関するご質問・ご要望は、サイト内のお問い合わせフォームよりご連絡ください。
            </p>
          </div>

          <p className="text-xs text-sumi/40 pt-4 border-t border-border">制定日：2026年6月21日</p>
        </div>
      </div>
    </>
  );
}
