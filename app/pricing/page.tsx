import type { Metadata } from "next";
import Link from "next/link";
import { PLATFORM_URL, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "業者向け料金プラン | 日本畳パートナー",
  description: "日本畳パートナーの業者掲載プランは3種類。フリー・スタンダード・プレミアムから選べます。",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const PLANS = [
  {
    name: "フリー",
    price: "0",
    period: "/月",
    desc: "まずは試してみたい方に",
    color: "border-border",
    highlight: false,
    features: [
      { label: "掲載プロフィール", ok: true },
      { label: "口コミ・評価表示", ok: true },
      { label: "ネット予約受付", ok: true },
      { label: "メッセージ機能", ok: true },
      { label: "見積もり受付", ok: true },
      { label: "検索上位表示", ok: false },
      { label: "ランキングバッジ", ok: false },
      { label: "施工事例の複数登録", ok: false },
      { label: "優先サポート", ok: false },
    ],
    cta: "無料で始める",
    href: `${PLATFORM_URL}/pro/register`,
  },
  {
    name: "スタンダード",
    price: "5,980",
    period: "/月（税込）",
    desc: "安定した受注を目指す方に",
    color: "border-ai",
    highlight: true,
    features: [
      { label: "掲載プロフィール", ok: true },
      { label: "口コミ・評価表示", ok: true },
      { label: "ネット予約受付", ok: true },
      { label: "メッセージ機能", ok: true },
      { label: "見積もり受付", ok: true },
      { label: "検索上位表示", ok: true },
      { label: "ランキングバッジ", ok: false },
      { label: "施工事例の複数登録（10件まで）", ok: true },
      { label: "優先サポート", ok: false },
    ],
    cta: "スタンダードで始める",
    href: `${PLATFORM_URL}/pro/register?plan=standard`,
  },
  {
    name: "プレミアム",
    price: "12,800",
    period: "/月（税込）",
    desc: "積極的に受注を拡大したい方に",
    color: "border-kincya",
    highlight: false,
    features: [
      { label: "掲載プロフィール", ok: true },
      { label: "口コミ・評価表示", ok: true },
      { label: "ネット予約受付", ok: true },
      { label: "メッセージ機能", ok: true },
      { label: "見積もり受付", ok: true },
      { label: "検索最上位表示", ok: true },
      { label: "ランキングバッジ表示", ok: true },
      { label: "施工事例の複数登録（無制限）", ok: true },
      { label: "優先サポート（電話・メール）", ok: true },
    ],
    cta: "プレミアムで始める",
    href: `${PLATFORM_URL}/pro/register?plan=premium`,
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="bg-sumi py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-white text-center mb-2" style={{ fontFamily: "var(--font-serif)" }}>
            料金プラン
          </h1>
          <p className="text-sm text-white/50 text-center">掲載業者向けの3つのプラン</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`bg-white border-2 ${plan.color} ${plan.highlight ? "shadow-lg" : ""} p-6 relative`}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ai text-white text-xs px-4 py-1 tracking-wide">
                  おすすめ
                </div>
              )}
              <h2 className="text-xl text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{plan.name}</h2>
              <p className="text-xs text-sumi/50 mb-4">{plan.desc}</p>
              <div className="mb-5">
                <span className="text-3xl font-bold text-sumi">¥{plan.price}</span>
                <span className="text-xs text-sumi/50 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f.label} className={`flex items-start gap-2 text-xs ${f.ok ? "text-sumi/70" : "text-sumi/25 line-through"}`}>
                    <span className={`shrink-0 mt-0.5 ${f.ok ? "text-igusa" : "text-sumi/20"}`}>{f.ok ? "✓" : "✕"}</span>
                    {f.label}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block text-center text-sm py-3 tracking-wide transition-colors duration-200 ${
                  plan.highlight
                    ? "bg-ai text-white hover:bg-ai-light"
                    : "border border-sumi text-sumi hover:bg-sumi hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* 注記 */}
        <div className="bg-kiji/40 border border-kiji p-5 text-xs text-sumi/60 leading-relaxed space-y-1">
          <p>・すべてのプランで初期登録費用は無料です。</p>
          <p>・スタンダード・プレミアムは月額料金を翌月に請求します。</p>
          <p>・成約手数料は現在徴収していません（将来的に変更の可能性あり）。</p>
          <p>・プランはいつでも変更できます。</p>
          <p>・掲載審査は全プラン共通です。審査通過後に掲載開始となります。</p>
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-sumi/60 mb-4">プランについてご不明な点はお問い合わせください</p>
          <Link href="/contact" className="text-sm text-ai hover:underline">お問い合わせ →</Link>
        </div>
      </div>
    </>
  );
}
