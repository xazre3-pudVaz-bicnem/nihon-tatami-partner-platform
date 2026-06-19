import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `料金・見積もり | 畳表替え・内装工事の料金目安 | ${SITE_NAME}`,
  description: "畳の表替え・裏返し・新調・縁なし畳から内装工事・原状回復まで料金目安を掲載。無料見積もり対応。素材・枚数・現場状況により変動します。",
  path: "/price",
});

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "畳表替えの費用はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "畳表替えは5,500円〜/枚が目安です。国産い草・機械すき・中国産などの素材により異なります。" } },
    { "@type": "Question", name: "見積もりは無料ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、現地確認・お見積もりは無料です。お見積もり後のキャンセルも費用は発生しません。" } },
  ],
};

const TATAMI_PRICES = [
  { service: "畳 裏返し", price: "3,300円〜", unit: "1枚あたり（税込）", note: "使用2〜3年の畳表が対象" },
  { service: "畳 表替え（国産い草・機械すき）", price: "5,500円〜", unit: "1枚あたり（税込）", note: "標準グレード" },
  { service: "畳 表替え（国産い草・手刈り）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "高品質グレード" },
  { service: "畳 新調（い草・機械すき）", price: "15,000円〜", unit: "1枚あたり（税込）", note: "床+表+縁" },
  { service: "縁なし畳（和紙畳）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "半畳タイプ" },
  { service: "縁なし畳（樹脂畳）", price: "10,000円〜", unit: "1枚あたり（税込）", note: "水拭き可能" },
  { service: "琉球畳（七島藺）", price: "18,000円〜", unit: "1枚あたり（税込）", note: "旅館・茶室向け高品質" },
];

const INTERIOR_PRICES = [
  { service: "クロス張替え（壁）", price: "800円〜", unit: "m²あたり（税込）", note: "素材により異なります" },
  { service: "クロス張替え（天井）", price: "900円〜", unit: "m²あたり（税込）", note: "" },
  { service: "フローリング張替え（上貼り）", price: "5,000円〜", unit: "m²あたり（税込）", note: "" },
  { service: "クッションフロア張替え", price: "2,500円〜", unit: "m²あたり（税込）", note: "水回りに多用" },
  { service: "フロアタイル張替え", price: "4,000円〜", unit: "m²あたり（税込）", note: "" },
  { service: "ふすま張替え", price: "3,000円〜", unit: "1枚あたり（税込）", note: "" },
  { service: "障子張替え", price: "2,000円〜", unit: "1枚あたり（税込）", note: "" },
  { service: "網戸張替え", price: "2,500円〜", unit: "1枚あたり（税込）", note: "" },
];

const RESTORATION_PRICES = [
  { service: "賃貸退去後の原状回復（1R）", price: "50,000円〜", unit: "一式（税込）", note: "範囲により変動" },
  { service: "賃貸退去後の原状回復（1LDK）", price: "100,000円〜", unit: "一式（税込）", note: "" },
  { service: "店舗退去後の原状回復", price: "別途見積もり", unit: "—", note: "規模・状況により大きく変動" },
  { service: "不動産売買前の内装整備", price: "別途見積もり", unit: "—", note: "複合施工一括対応可" },
];

export default function PricePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "料金・見積もり" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Price</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            料金の目安
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            素材・枚数・現場の状況により変動します。すべて税込の目安価格です。
            詳細は無料見積もりにてご確認ください。
          </p>
        </div>
      </section>

      <section className="py-6 bg-kincya/10 border-b border-kincya/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-sumi text-center">
            <span className="text-kincya font-medium">現地確認・お見積もりは無料です。</span>
            見積もり後のキャンセルも費用は発生しません。まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* 畳工事 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>畳工事 料金目安</h2>
          <div className="bg-white border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="text-left text-xs py-3 px-5 font-normal">サービス</th>
                  <th className="text-right text-xs py-3 px-5 font-normal">料金目安</th>
                  <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">単位・備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {TATAMI_PRICES.map((row, i) => (
                  <tr key={i} className="hover:bg-kiji/30 transition-colors">
                    <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                    <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                    <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">{row.unit}{row.note && ` / ${row.note}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>内装工事 料金目安</h2>
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-5 font-normal">サービス</th>
                    <th className="text-right text-xs py-3 px-5 font-normal">料金目安</th>
                    <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">単位</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {INTERIOR_PRICES.map((row, i) => (
                    <tr key={i} className="hover:bg-kiji/30 transition-colors">
                      <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                      <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                      <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">{row.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl text-sumi mb-8" style={{ fontFamily: "var(--font-serif)" }}>原状回復工事 料金目安</h2>
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-5 font-normal">サービス</th>
                    <th className="text-right text-xs py-3 px-5 font-normal">料金目安</th>
                    <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">備考</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {RESTORATION_PRICES.map((row, i) => (
                    <tr key={i} className="hover:bg-kiji/30 transition-colors">
                      <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                      <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                      <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <p className="text-xs text-sumi/40">※ 表示価格はすべて税込の目安です。実際の費用は現地確認後にお見積もりします。</p>
            <p className="text-xs text-sumi/40">※ 法人・大口案件・継続案件については個別にご相談ください。</p>
            <p className="text-xs text-sumi/40">※ 遠方への出張費・廃材処分費が別途発生する場合があります。</p>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-block bg-sumi text-white text-sm px-10 py-4 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              無料見積もりを依頼する
            </Link>
            <Link href="/contact#business" className="inline-block border border-sumi text-sumi text-sm px-10 py-4 tracking-wider hover:bg-sumi/5 transition-colors duration-300">
              法人・管理会社のご相談
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
