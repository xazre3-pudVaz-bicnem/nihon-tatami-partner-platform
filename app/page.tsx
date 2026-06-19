import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL, PLATFORM_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  title: `埼玉の畳・和室工事マーケットプレイス | ${SITE_NAME}`,
  description: "埼玉県の畳表替え・和室リフォームを料金・口コミで比較して依頼できるマーケットプレイス。業者登録も無料で受付中。",
  alternates: { canonical: SITE_URL },
};

const NUMBERS = [
  { num: "8+", label: "掲載業者数" },
  { num: "4.7", label: "平均評価" },
  { num: "4,700+", label: "累積施工件数" },
  { num: "31", label: "対応市区町村" },
];

const SERVICES = [
  { name: "畳表替え", slug: "tatami-omotegae", price: "3,800円〜/枚", desc: "畳の表面を新しいものに交換。最も一般的なメンテナンス。" },
  { name: "畳新調", slug: "tatami-shinchou", price: "12,000円〜/枚", desc: "畳床ごと新しく作り替え。踏み込みが沈む場合に。" },
  { name: "琉球畳", slug: "ryukyu-tatami", price: "15,000円〜/枚", desc: "モダンな和室に人気の縁なし正方形畳。" },
  { name: "ふすま張替え", slug: "fusuma-harikae", price: "3,500円〜/枚", desc: "古くなったふすまを一新。和室の印象が変わります。" },
  { name: "障子張替え", slug: "shoji-harikae", price: "2,500円〜/枚", desc: "破れた障子紙を新品に。当日仕上げも対応。" },
  { name: "和室リフォーム", slug: "washitsu-reform", price: "50,000円〜/室", desc: "畳・ふすま・障子をまとめてリフォーム。" },
];

const STEPS = [
  { num: "01", title: "業者を探す", desc: "エリアとサービスを選択。料金・口コミ・評価で比較できます。" },
  { num: "02", title: "ネットで予約", desc: "希望日時を入力して予約。見積もり相談も無料で対応。" },
  { num: "03", title: "施工完了", desc: "当日、業者がご自宅へ。施工後に口コミを投稿してください。" },
];

const REASONS = [
  { title: "料金が明確", desc: "掲載料金は業者が設定した透明価格。追加料金は事前に確認できます。" },
  { title: "口コミで選べる", desc: "実際に依頼したユーザーの口コミ・評価を公開しています。" },
  { title: "審査済み業者のみ", desc: "保険加入・資格を確認した業者のみ掲載。信頼できる業者に依頼できます。" },
  { title: "損害補償制度", desc: "万が一のトラブルも安心。損害賠償補償制度が適用されます。" },
  { title: "ネット予約24時間", desc: "電話不要でいつでも予約。急ぎの相談も対応します。" },
  { title: "無料見積もり", desc: "複数の業者に無料で見積もりを依頼。比較して選べます。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-sumi min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sumi/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <p className="text-xs text-kincya tracking-[0.3em] mb-6 uppercase">埼玉の畳・和室工事マーケットプレイス</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
            畳工事の業者を<br />
            料金と口コミで<br />
            <span className="text-kincya">比べて選ぶ</span>
          </h1>
          <p className="text-base text-white/60 max-w-xl mb-10 leading-relaxed">
            埼玉県内の畳表替え・和室リフォーム・ふすま障子の張替えを、
            料金・口コミ・対応エリアで比較して、安心して依頼できるプラットフォームです。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={PLATFORM_URL} className="inline-block bg-kincya text-white text-sm px-8 py-4 tracking-wider hover:bg-do transition-colors duration-300 text-center">
              業者を探す（無料）
            </Link>
            <Link href="/for-providers" className="inline-block border border-white/30 text-white text-sm px-8 py-4 tracking-wider hover:bg-white/10 transition-colors duration-300 text-center">
              業者として登録する
            </Link>
          </div>

          {/* 数字 */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/10">
            {NUMBERS.map((n) => (
              <div key={n.label} className="text-center">
                <p className="text-3xl text-white mb-0.5" style={{ fontFamily: "var(--font-serif)" }}>{n.num}</p>
                <p className="text-xs text-white/40 tracking-wide">{n.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ステップ */}
      <section id="service" className="bg-kiji/40 border-b border-kiji py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>
            3ステップで簡単依頼
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-kiji" />
                )}
                <div className="w-12 h-12 rounded-full bg-sumi text-white text-sm font-bold flex items-center justify-center mx-auto mb-4 z-10 relative">
                  {step.num}
                </div>
                <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href={PLATFORM_URL} className="inline-block bg-sumi text-white text-sm px-10 py-3 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              プラットフォームを使う
            </Link>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-3" style={{ fontFamily: "var(--font-serif)" }}>
            対応サービス
          </h2>
          <p className="text-xs text-sumi/50 text-center mb-10">畳・ふすま・障子・和室リフォームなど幅広く対応</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`${PLATFORM_URL}/${s.slug}`}
                className="group bg-white border border-border hover:border-kincya/40 transition-all duration-300 hover:shadow-sm p-5"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm text-sumi group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                    {s.name}
                  </h3>
                  <span className="text-xs text-kincya shrink-0 ml-2">{s.price}</span>
                </div>
                <p className="text-xs text-sumi/60 leading-relaxed">{s.desc}</p>
                <p className="text-xs text-ai mt-3 group-hover:underline">埼玉の{s.name}業者を探す →</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={`${PLATFORM_URL}/search`} className="text-sm text-ai hover:underline">
              すべてのサービスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="py-16 bg-cloud/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-3" style={{ fontFamily: "var(--font-serif)" }}>
            選ばれる6つの理由
          </h2>
          <p className="text-xs text-sumi/50 text-center mb-10">安心・安全に業者を探せる理由</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REASONS.map((r, i) => (
              <div key={i} className="flex gap-4 bg-shiro border border-border p-5">
                <div className="w-7 h-7 bg-igusa/10 border border-igusa/20 text-igusa text-xs flex items-center justify-center shrink-0 rounded-full">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm text-sumi mb-1">{r.title}</h3>
                  <p className="text-xs text-sumi/60 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業者向けCTA */}
      <section className="py-20 bg-ai text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/40 tracking-[0.3em] mb-4 uppercase">For Providers</p>
          <h2 className="text-3xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            業者の方の登録も<br />受け付けています
          </h2>
          <p className="text-sm text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            日本畳パートナーは、畳・和室工事の職人・業者が新規顧客を獲得できるプラットフォームです。
            初期費用0円で掲載開始できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/for-providers" className="inline-block bg-kincya text-white text-sm px-8 py-4 tracking-wider hover:bg-do transition-colors duration-300">
              出店のご案内を見る
            </Link>
            <Link href="/pricing" className="inline-block border border-white/30 text-white text-sm px-8 py-4 tracking-wider hover:bg-white/10 transition-colors duration-300">
              料金プランを確認する
            </Link>
          </div>
        </div>
      </section>

      {/* 地域リンク */}
      <section className="py-14 bg-shiro">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-sumi text-center mb-8" style={{ fontFamily: "var(--font-serif)" }}>
            対応エリア（埼玉県）
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["さいたま市", "川口市", "川越市", "越谷市", "所沢市", "草加市", "春日部市", "上尾市", "熊谷市", "戸田市", "蕨市", "朝霞市", "志木市", "和光市", "新座市"].map((city) => (
              <Link
                key={city}
                href={`${PLATFORM_URL}/saitama`}
                className="text-xs border border-border text-sumi/60 hover:border-ai hover:text-ai transition-colors px-3 py-1.5"
              >
                {city}
              </Link>
            ))}
            <Link href={`${PLATFORM_URL}/saitama`} className="text-xs text-ai hover:underline px-3 py-1.5">
              全エリアを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 最終CTA */}
      <section className="py-20 bg-kiji">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            まずは業者を探してみてください
          </h2>
          <p className="text-sm text-sumi/60 mb-8">無料で見積もり依頼・業者比較ができます</p>
          <Link href={PLATFORM_URL} className="inline-block bg-sumi text-white text-sm px-12 py-4 tracking-wider hover:bg-sumi-light transition-colors duration-300">
            プラットフォームを使う（無料）
          </Link>
        </div>
      </section>
    </>
  );
}
