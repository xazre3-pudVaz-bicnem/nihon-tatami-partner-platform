import type { Metadata } from "next";
import Link from "next/link";
import { PLATFORM_URL, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "業者登録・出店案内 | 日本畳パートナー",
  description: "畳・和室工事の業者・職人として日本畳パートナーに登録しませんか。初期費用0円で掲載開始。埼玉県内の新規顧客獲得をサポートします。",
  alternates: { canonical: `${SITE_URL}/for-providers` },
};

const MERITS = [
  { title: "初期費用0円で掲載開始", desc: "無料プランでまず掲載。費用は受注が増えてから検討できます。ランニングコスト不要のフリープランもあります。" },
  { title: "ネット予約で手間ゼロ", desc: "電話応対不要。ユーザーがネットで予約するので、職人は施工に集中できます。" },
  { title: "口コミで信頼を積み上げる", desc: "施工後の口コミが蓄積されるほど、次の顧客が集まりやすくなります。" },
  { title: "ランキング上位で露出UP", desc: "口コミ評価が高い業者ほど上位に表示されます。広告費なしで露出が増えます。" },
  { title: "管理画面で受注管理", desc: "見積もり・予約・メッセージをダッシュボードで一元管理。スマホからも操作できます。" },
  { title: "損害補償制度でトラブル対応", desc: "当サービスが損害補償制度を運営しています。業者・ユーザー双方を保護します。" },
];

const STEPS = [
  { num: "01", title: "無料で登録する", desc: "会社情報・対応エリア・サービス内容を入力して登録申請します。" },
  { num: "02", title: "審査・掲載開始", desc: "当社が資格・保険などを確認。通過後、即日掲載開始できます。" },
  { num: "03", title: "予約・見積もりを受ける", desc: "ユーザーからの予約・見積もりが届きます。ダッシュボードで管理。" },
  { num: "04", title: "施工・口コミ獲得", desc: "施工完了後、ユーザーが口コミを投稿。評価が高まると露出が増えます。" },
];

const FAQS = [
  { q: "登録費用はかかりますか？", a: "フリープランは完全無料で掲載できます。プレミアムプランは月額料金がかかりますが、より多くの露出機会を得られます。" },
  { q: "埼玉県外の業者でも登録できますか？", a: "現在は埼玉県対応業者のみ掲載しています。" },
  { q: "審査の基準は何ですか？", a: "損害賠償保険への加入・実名・住所・電話番号の確認が必須です。畳製作技能士などの資格があるとバッジが付与されます。" },
  { q: "既存の仕事を続けながら登録できますか？", a: "はい。受注の可否は業者側でコントロールできます。多忙な時期は一時的に予約停止することも可能です（プレミアム機能）。" },
  { q: "手数料はかかりますか？", a: "成約手数料は現在徴収していません。将来的に成約手数料制の導入を予定していますが、既存業者には事前に通知します。" },
];

export default function ForProvidersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sumi py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">For Providers</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            畳・和室工事の業者として<br />
            掲載しませんか
          </h1>
          <p className="text-sm text-white/60 max-w-xl mb-8 leading-relaxed">
            日本畳パートナーは、埼玉県の畳・和室工事業者が新規顧客を獲得できるプラットフォームです。
            フリープランなら初期費用・月額費用ともに0円で掲載できます。
          </p>
          <Link href={`${PLATFORM_URL}/pro/register`} className="inline-block bg-kincya text-white text-sm px-8 py-4 tracking-wider hover:bg-do transition-colors duration-300">
            無料で掲載登録する
          </Link>
        </div>
      </section>

      {/* メリット */}
      <section className="py-16 bg-shiro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            掲載するメリット
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MERITS.map((m, i) => (
              <div key={i} className="flex gap-4 bg-white border border-border p-5">
                <div className="w-7 h-7 bg-kincya/10 border border-kincya/20 text-kincya text-xs flex items-center justify-center shrink-0 rounded-full">{i + 1}</div>
                <div>
                  <h3 className="text-sm text-sumi mb-1">{m.title}</h3>
                  <p className="text-xs text-sumi/60 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 登録フロー */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            掲載までの流れ
          </h2>
          <div className="space-y-3">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-5 bg-white border border-border p-5">
                <div className="w-10 h-10 bg-sumi text-white text-xs font-bold flex items-center justify-center shrink-0">{step.num}</div>
                <div>
                  <h3 className="text-sm text-sumi font-medium mb-0.5">{step.title}</h3>
                  <p className="text-xs text-sumi/60">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${PLATFORM_URL}/pro/register`} className="inline-block bg-ai text-white text-sm px-10 py-3 tracking-wider hover:bg-ai-light transition-colors duration-300">
              登録を始める（無料）
            </Link>
          </div>
        </div>
      </section>

      {/* 料金プランへの誘導 */}
      <section className="py-10 bg-white border-y border-border">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm text-sumi font-medium">料金プランを確認する</p>
            <p className="text-xs text-sumi/50">フリー・スタンダード・プレミアムの3プランから選べます</p>
          </div>
          <Link href="/pricing" className="shrink-0 text-sm border border-sumi text-sumi px-6 py-2.5 hover:bg-sumi hover:text-white transition-all duration-200">
            料金プランを見る →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-shiro">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-10" style={{ fontFamily: "var(--font-serif)" }}>
            よくある質問（業者向け）
          </h2>
          <div className="divide-y divide-kiji">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-4">
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                  <span className="text-sm text-sumi">{faq.q}</span>
                  <span className="text-sumi/40 shrink-0 group-open:rotate-45 transition-transform duration-200 text-lg leading-none">+</span>
                </summary>
                <p className="text-xs text-sumi/70 leading-relaxed mt-3 pl-4 border-l-2 border-kincya">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ai text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl mb-3" style={{ fontFamily: "var(--font-serif)" }}>今すぐ掲載を始める</h2>
          <p className="text-sm text-white/60 mb-6">フリープランなら費用0円。まず試してみてください。</p>
          <Link href={`${PLATFORM_URL}/pro/register`} className="inline-block bg-kincya text-white text-sm px-10 py-4 tracking-wider hover:bg-do transition-colors duration-300">
            無料で掲載登録する
          </Link>
        </div>
      </section>
    </>
  );
}
