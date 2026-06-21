import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { TATAMI_SERVICES, INTERIOR_SERVICES, RESTORATION_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/templates/FaqAccordion";

export const metadata: Metadata = buildMetadata({
  title: `畳工事・内装工事なら日本畳パートナーズ｜畳表替え・新調・原状回復まで一括対応 | ${SITE_NAME}`,
  description:
    "畳の表替え・裏返し・新調・縁なし畳・和紙畳・樹脂畳から、襖・障子・網戸、クロス・床の内装工事、原状回復まで一括対応。い草・和紙・樹脂の素材比較、対象者別サービス、料金目安、施工の流れ、FAQを掲載。住宅・賃貸・旅館・寺社・店舗対応。現地確認・お見積もり無料。",
  path: "/services",
});

const COMPARE = [
  { method: "裏返し", target: "使用2〜3年で傷みが浅い畳", appearance: "清潔感が戻る", cost: "最も安い", cycle: "使用2〜3年" },
  { method: "表替え", target: "畳床は健全で表面が傷んだ畳", appearance: "新品同様の見た目と香り", cost: "中程度", cycle: "5〜8年ごと" },
  { method: "新調", target: "畳床のへたり・沈み・深部カビ", appearance: "踏み心地まで新品", cost: "最も高い", cycle: "10〜20年・床の劣化時" },
];

const MATERIALS = [
  { name: "い草（天然）", feature: "香り・調湿性・伝統的な風合い", use: "住宅の和室・茶室・旅館・寺社" },
  { name: "和紙畳", feature: "色あせ・ささくれに強く撥水性が高い", use: "子育て・ペット・賃貸・旅館" },
  { name: "樹脂畳", feature: "水拭き可・高耐久・防汚性が高い", use: "店舗・飲食・水回り近く" },
];

const TARGETS = [
  { label: "住宅", body: "香りと風合いを楽しむ国産い草の表替え、子ども・ペットに強い和紙畳・樹脂畳、リビングの畳コーナーまで幅広く対応。", href: "/services/tatami" },
  { label: "賃貸", body: "退去後・入居前の原状回復、ペット可への転換、空室対策の和モダンリノベまで。費用対効果を重視してご提案。", href: "/restoration/rental" },
  { label: "旅館・宿泊施設", body: "客室の表替え・新調を営業を止めずに計画施工。繁忙期前の整備、特別室の上質い草に対応。", href: "/business/ryokan" },
  { label: "寺社", body: "本堂・客殿の格式に合わせた畳表・縁を選定。法要・行事に合わせた計画施工で確実に整えます。", href: "/business/temple-shrine" },
  { label: "店舗", body: "座敷・小上がりの清掃性重視の樹脂畳、和モダンな個室の縁なし畳。営業時間外の施工に対応。", href: "/business/store" },
];

const PRICE = [
  { item: "畳 裏返し", price: "3,300円〜/枚" },
  { item: "畳 表替え", price: "4,500円〜/枚" },
  { item: "畳 新調", price: "15,000円〜/枚" },
  { item: "縁なし・和紙・樹脂畳", price: "8,000円〜/枚" },
  { item: "襖・障子・網戸", price: "2,000円〜/枚" },
  { item: "クロス張替え", price: "800円〜/m²" },
];

const FLOW = [
  { n: "01", t: "お問い合わせ", d: "電話・フォーム・LINEからご相談ください。" },
  { n: "02", t: "現地確認（無料）", d: "畳床の状態まで点検し最適な工事をご提案。" },
  { n: "03", t: "お見積もり", d: "工種別に内訳を明示した見積もりをご提示。" },
  { n: "04", t: "施工日の調整", d: "行事・繁忙期・退去日に合わせて調整。" },
  { n: "05", t: "施工・敷き込み", d: "丁寧に施工し、隙間や浮きを確認。" },
  { n: "06", t: "確認・引き渡し", d: "仕上がり確認・古畳処分・写真報告まで。" },
];

const FAQS = [
  { q: "畳工事はどんな種類がありますか？", a: "畳表替え・裏返し・新調が基本で、素材は天然い草・和紙畳・樹脂畳、仕立ては縁あり・縁なし（琉球畳風）から選べます。畳のほか襖・障子・網戸の張替え、クロス・床の内装工事、原状回復まで一括で承ります。" },
  { q: "表替え・裏返し・新調のどれを選べばいいですか？", a: "畳床に沈みがなく表面だけ傷んでいれば表替え、使用2〜3年で傷みが軽ければ裏返し、踏むと沈む・芯までカビていれば新調が適します。現地確認で見極めてご提案します。" },
  { q: "い草・和紙・樹脂はどう違いますか？", a: "い草は香りと風合いの天然素材、和紙畳は色あせ・傷に強く撥水性が高い機能性素材、樹脂畳は水拭きできて汚れに最も強い素材です。用途に合わせてお選びください。" },
  { q: "費用はどのくらいかかりますか？", a: "裏返し3,300円〜、表替え4,500円〜、新調15,000円〜が1枚あたりの目安です。素材・サイズ・枚数・搬入条件により変動します。正確な費用は現地確認後に正式見積もりでご案内します。" },
  { q: "畳と一緒に襖や障子、クロスも頼めますか？", a: "はい。畳・襖・障子・網戸・クロス・床をまとめて施工でき、和室や住戸全体を一括でリフレッシュできます。日程調整の手間も減らせます。" },
  { q: "賃貸の原状回復もまとめて依頼できますか？", a: "はい。退去後の畳・建具・クロス・床の原状回復をワンストップで承ります。写真付き報告書の発行、複数物件の継続対応にも対応します。" },
  { q: "旅館・寺社の大量施工も対応できますか？", a: "はい。客室・本堂など広い面積・大量枚数に対応します。営業や行事に支障が出ないよう計画施工します。" },
  { q: "ペットや小さな子どもがいても大丈夫な畳はありますか？", a: "傷・汚れに強い和紙畳、水拭きできる樹脂畳がおすすめです。ダニ・カビが発生しにくく、衛生的に保てます。" },
  { q: "工期はどのくらいですか？", a: "表替え・裏返しは引き取り後翌日返しが可能なケースが多く、新調は一枚ずつ製作するため数日が目安です。襖・障子・網戸は当日〜数日です。" },
  { q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。見積もり後のキャンセルも費用は発生しません。お気軽にご相談ください。" },
  { q: "対応エリアはどこですか？", a: "幅広いエリアに対応しています。物件の所在地をお知らせいただければ、対応可否と条件をご案内します。遠方は出張費が発生する場合があります。" },
  { q: "古い畳や建具の処分もお願いできますか？", a: "はい。新調などで不要になった古畳・古建具は引き取り・処分します。処分費が別途必要な場合は見積もり時にご案内します。" },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "サービス一覧" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Services</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-5 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            畳工事・内装工事なら日本畳パートナーズ｜畳表替え・新調・原状回復まで一括対応
          </h1>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            畳の表替え・裏返し・新調から、縁なし畳・和紙畳・樹脂畳、襖・障子・網戸、クロス・床の内装工事、
            賃貸退去後の原状回復まで。住宅・賃貸・旅館・寺社・店舗・不動産管理物件のあらゆる場面を、一社でまとめてご相談いただけます。
          </p>
        </div>
      </section>

      {/* イントロ概要 */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>畳と空間整備のワンストップパートナー</h2>
          <div className="text-sm text-sumi/80 leading-loose space-y-5">
            <p>
              日本畳パートナーズは、畳工事を軸に、和室の建具から住戸全体の内装、原状回復までを一社で手がける専門パートナーです。
              畳の表替え・裏返し・新調はもちろん、近年人気の縁なし畳・和紙畳・樹脂畳・カラー畳まで、あらゆる畳のご要望に対応します。
            </p>
            <p>
              畳は、い草の畳表・芯材の畳床・縁の三つで構成され、年月とともに色あせ・ささくれ・へたり・カビといった経年変化が現れます。
              これらのサインを見極め、まだ裏返しで足りるのか、表替えが必要か、畳床から新調すべきかを正しく判断することが、費用と手間を抑える鍵です。
              当社は現地確認で畳床の状態まで点検し、本当に必要な工事だけを正直にご提案します。
            </p>
            <p>
              さらに、畳と同時に襖・障子・網戸を張り替えれば和室全体が一新され、クロスや床まで含めれば住戸まるごとのリフレッシュが可能です。
              賃貸の原状回復や空室対策、旅館・寺社・店舗の大量施工まで、規模を問わず一括で承ります。
              業者を分けて手配する手間がなくなり、日程調整・コスト・品質のすべてを最適化できます。
            </p>
          </div>
        </div>
      </section>

      {/* 表替え・裏返し・新調の違い */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>表替え・裏返し・新調の違い</h2>
          <p className="text-sm text-sumi/70 mb-8 leading-relaxed">畳の状態・使用年数・ご予算に応じて最適な工法は異なります。まずは3つの違いを知りましょう。</p>
          <div className="bg-white border border-border overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="text-left text-xs py-3 px-5 font-normal">工法</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">対象の状態</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">仕上がり</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">費用</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">目安サイクル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {COMPARE.map((r) => (
                  <tr key={r.method} className="hover:bg-kiji/30 transition-colors align-top">
                    <td className="text-sm py-3.5 px-5 text-sumi whitespace-nowrap" style={{ fontFamily: "var(--font-serif)" }}>{r.method}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/70">{r.target}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/70">{r.appearance}</td>
                    <td className="text-xs py-3.5 px-5 text-kincya whitespace-nowrap">{r.cost}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/70 whitespace-nowrap">{r.cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 素材別比較 */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>素材別比較（い草・和紙・樹脂）</h2>
          <p className="text-sm text-sumi/70 mb-8 leading-relaxed">畳表の素材は大きく3種類。重視するポイントで最適解が変わります。</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {MATERIALS.map((m) => (
              <div key={m.name} className="bg-shiro border border-border p-6">
                <h3 className="text-lg text-sumi mb-3 pl-3 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>{m.name}</h3>
                <p className="text-xs text-sumi/75 leading-relaxed mb-3">{m.feature}</p>
                <p className="text-xs text-ai leading-relaxed">向いている用途：{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 畳工事 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Tatami Works</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>畳工事</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TATAMI_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 内装工事 */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Interior Works</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>内装工事</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-sm text-sumi/60 mb-8 leading-relaxed max-w-2xl">
            畳工事と合わせて、クロス・床材・建具の内装工事も承ります。
            空間全体をまとめてリフレッシュしたい方にご利用ください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INTERIOR_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 原状回復 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs text-kincya tracking-[0.3em] mb-1 uppercase">Restoration</p>
              <h2 className="text-2xl text-sumi" style={{ fontFamily: "var(--font-serif)" }}>原状回復</h2>
            </div>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>
          <p className="text-sm text-sumi/60 mb-8 leading-relaxed max-w-2xl">
            賃貸退去後の原状回復、店舗退去、売買前の整備など、不動産に関わる
            内装工事をまとめてご依頼いただけます。管理会社・オーナー様の継続案件にも対応。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESTORATION_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 対象者別サービス */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>対象者別のサービス</h2>
          <div className="space-y-4">
            {TARGETS.map((t) => (
              <Link key={t.label} href={t.href} className="block bg-shiro border border-border p-6 hover:border-ai transition-colors duration-200">
                <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{t.label}向け</h3>
                <p className="text-sm text-sumi/75 leading-relaxed">{t.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 料金目安 */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>料金の目安</h2>
          <p className="text-sm text-sumi/70 mb-8 leading-relaxed">代表的なサービスの目安です。素材・枚数・現場状況により変動します。</p>
          <div className="bg-white border border-border overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {PRICE.map((p) => (
                  <tr key={p.item} className="hover:bg-kiji/30 transition-colors">
                    <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{p.item}</td>
                    <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{p.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-kincya mt-4">※ 正確な費用は現地確認後に正式見積もりでご案内します。</p>
          <div className="mt-6">
            <Link href="/price" className="inline-block border border-sumi text-sumi text-sm px-8 py-3.5 tracking-wider hover:bg-sumi hover:text-white transition-colors duration-300">
              詳しい料金を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 施工の流れ */}
      <section className="py-14 sm:py-20 bg-kiji">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>施工の流れ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FLOW.map((f) => (
              <div key={f.n} className="bg-shiro border border-border p-5">
                <p className="text-kincya text-sm mb-2" style={{ fontFamily: "var(--font-serif)" }}>{f.n}</p>
                <h3 className="text-base text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{f.t}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
          <FaqAccordion items={FAQS} />
        </div>
      </section>

      {/* 内部リンク */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>関連ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "畳工事一覧", href: "/services/tatami" },
              { label: "施工事例", href: "/works" },
              { label: "料金の目安", href: "/price" },
              { label: "よくある質問", href: "/faq" },
              { label: "法人向けサービス", href: "/business" },
              { label: "コラム", href: "/column" },
              { label: "お悩みから探す", href: "/needs" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-border text-sm text-sumi text-center py-3 hover:border-ai hover:text-ai transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
