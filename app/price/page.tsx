import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import type { FaqItem } from "@/data/faq";

export const metadata: Metadata = buildMetadata({
  title: `料金・見積もり | 畳・襖・障子・内装・原状回復の料金目安 | ${SITE_NAME}`,
  description:
    "畳の表替え・裏返し・新調・縁なし畳・和紙/樹脂畳から、襖・障子・網戸、クロス・床工事、原状回復まで料金目安を網羅。費用が変わる要因、法人・大量施工、相見積もりの注意点、FAQも掲載。無料見積もり対応。",
  path: "/price",
});

const priceFaqs: FaqItem[] = [
  {
    category: "price",
    q: "畳表替えの費用はどのくらいですか？",
    a: "畳表替えは5,500円〜/枚が目安です。国産い草（機械すき・手刈り）・和紙畳・樹脂畳など素材により異なります。手刈り天日干しの高級い草は8,000円〜/枚が目安です。",
  },
  {
    category: "price",
    q: "見積もりは無料ですか？",
    a: "はい、現地確認・お見積もりは無料です。お見積もり後のキャンセルも費用は発生しません。お気軽にご相談ください。",
  },
  {
    category: "price",
    q: "表示価格より高くなることはありますか？",
    a: "表示は最も標準的な条件での目安です。素材のグレードアップ、特注の縁、下地の傷み補修、搬出入が難しい立地、廃材処分などにより変動します。お見積もり時に内訳を明示し、ご了承いただいてから施工します。",
  },
  {
    category: "price",
    q: "費用が変わる要因は何ですか？",
    a: "畳のサイズ（地域・規格による違い）、素材のグレード、縁の種類、枚数、現場の状況（搬入経路・階数・下地の状態）、廃材処分の有無などが費用に影響します。詳しくはページ内「費用が変わる要因」をご覧ください。",
  },
  {
    category: "price",
    q: "枚数が多いと割安になりますか？",
    a: "多枚数・複数部屋・複数物件の施工は、効率化により1枚あたりの単価を抑えられる場合があります。旅館・寺社・賃貸物件など大量施工は個別にお見積もりします。",
  },
  {
    category: "price",
    q: "法人・管理会社向けの料金体系はありますか？",
    a: "複数物件・継続案件をお持ちの管理会社・オーナー様向けには、案件規模に応じて個別にお見積もりします。継続的なお取引の条件もご相談に応じます。",
  },
  {
    category: "price",
    q: "追加料金が発生することはありますか？",
    a: "お見積もり時にご説明した内容以外の追加費用は原則発生しません。ただし、現地で発見できなかった下地の傷みなど特殊な事情がある場合は、必ず事前にご説明し、ご了承いただいてから進めます。",
  },
  {
    category: "price",
    q: "相見積もりを取っても大丈夫ですか？",
    a: "はい、複数社で比較検討いただいて構いません。ただし、価格だけでなく、使用素材のグレード・縁の種類・廃材処分の有無・保証など、見積もりの条件を揃えて比較することをおすすめします。当社は内訳を明確にご提示します。",
  },
  {
    category: "price",
    q: "支払い方法を教えてください。",
    a: "現金・お振込に対応しています。法人・継続取引の場合は請求書払いもご相談いただけます。詳しくはお問い合わせ時にご確認ください。",
  },
  {
    category: "price",
    q: "出張費はかかりますか？",
    a: "対応エリア内は原則無料ですが、遠方の場合は出張費が発生することがあります。物件の所在地をお知らせいただければ、対応可否と条件をご案内します。",
  },
];

const TATAMI_PRICES = [
  { service: "畳 裏返し", price: "3,300円〜", unit: "1枚あたり（税込）", note: "使用2〜3年の畳表が対象" },
  { service: "畳 表替え（国産い草・機械すき）", price: "5,500円〜", unit: "1枚あたり（税込）", note: "標準グレード" },
  { service: "畳 表替え（国産い草・手刈り）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "高品質グレード" },
  { service: "畳 表替え（和紙畳）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "耐久・清掃性" },
  { service: "畳 表替え（樹脂畳）", price: "9,000円〜", unit: "1枚あたり（税込）", note: "水拭き可能" },
  { service: "畳 新調（建材床・国産い草）", price: "15,000円〜", unit: "1枚あたり（税込）", note: "床+表+縁" },
  { service: "畳 新調（わら床・国産い草）", price: "20,000円〜", unit: "1枚あたり（税込）", note: "旅館・茶室向け" },
  { service: "畳 新調（建材床・和紙畳）", price: "18,000円〜", unit: "1枚あたり（税込）", note: "ペット・子育て向け" },
  { service: "縁なし畳（和紙・半畳）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "和モダン" },
  { service: "縁なし畳（樹脂・半畳）", price: "10,000円〜", unit: "1枚あたり（税込）", note: "水拭き可能" },
  { service: "琉球畳（七島藺）", price: "18,000円〜", unit: "1枚あたり（税込）", note: "旅館・茶室向け高品質" },
  { service: "紋縁・特注縁", price: "別途見積もり", unit: "—", note: "寺社・旅館向け" },
];

const BUILDING_PRICES = [
  { service: "ふすま張替え", price: "3,000円〜", unit: "1枚あたり（税込）", note: "紙の種類により" },
  { service: "障子張替え", price: "2,000円〜", unit: "1枚あたり（税込）", note: "紙の種類により" },
  { service: "網戸張替え", price: "2,500円〜", unit: "1枚あたり（税込）", note: "ネットの種類により" },
];

const INTERIOR_PRICES = [
  { service: "クロス張替え（壁・量産）", price: "800円〜", unit: "m²あたり（税込）", note: "スタンダード" },
  { service: "クロス張替え（天井）", price: "900円〜", unit: "m²あたり（税込）", note: "" },
  { service: "機能性クロス（防汚・消臭等）", price: "1,200円〜", unit: "m²あたり（税込）", note: "目的に応じて" },
  { service: "フローリング張替え（上貼り）", price: "5,000円〜", unit: "m²あたり（税込）", note: "下地が健全な場合" },
  { service: "フローリング張替え（張替え）", price: "8,000円〜", unit: "m²あたり（税込）", note: "下地補修含む" },
  { service: "クッションフロア張替え", price: "2,500円〜", unit: "m²あたり（税込）", note: "水回りに多用" },
  { service: "フロアタイル張替え", price: "4,000円〜", unit: "m²あたり（税込）", note: "" },
];

const RESTORATION_PRICES = [
  { service: "賃貸退去後の原状回復（1R・畳含む）", price: "50,000円〜", unit: "一式（税込）", note: "範囲により変動" },
  { service: "賃貸退去後の原状回復（1LDK）", price: "100,000円〜", unit: "一式（税込）", note: "範囲により変動" },
  { service: "店舗退去後の原状回復", price: "別途見積もり", unit: "—", note: "規模・状況により大きく変動" },
  { service: "不動産売買前の内装整備", price: "別途見積もり", unit: "—", note: "複合施工一括対応可" },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: priceFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

type Row = { service: string; price: string; unit: string; note: string };

function PriceTable({ title, rows, unitHeader }: { title: string; rows: Row[]; unitHeader: string }) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>{title}</h2>
      <div className="bg-white border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-sumi text-white">
              <th className="text-left text-xs py-3 px-5 font-normal">サービス</th>
              <th className="text-right text-xs py-3 px-5 font-normal">料金目安</th>
              <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">{unitHeader}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-kiji/30 transition-colors">
                <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{row.service}</td>
                <td className="text-sm py-3.5 px-5 text-right text-kincya whitespace-nowrap">{row.price}</td>
                <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">{row.unit}{row.note && ` / ${row.note}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

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
            畳・襖・障子・網戸から内装工事・原状回復まで、料金の目安を掲載しています。
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

      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PriceTable title="畳工事 料金目安" rows={TATAMI_PRICES} unitHeader="単位・備考" />
          <PriceTable title="襖・障子・網戸 料金目安" rows={BUILDING_PRICES} unitHeader="単位・備考" />
          <PriceTable title="内装工事 料金目安" rows={INTERIOR_PRICES} unitHeader="単位・備考" />
          <PriceTable title="原状回復工事 料金目安" rows={RESTORATION_PRICES} unitHeader="備考" />

          <div className="mt-8 space-y-2">
            <p className="text-xs text-sumi/40">※ 表示価格はすべて税込の目安です。実際の費用は現地確認後にお見積もりします。</p>
            <p className="text-xs text-sumi/40">※ 法人・大口案件・継続案件については個別にご相談ください。</p>
            <p className="text-xs text-sumi/40">※ 遠方への出張費・廃材処分費が別途発生する場合があります。</p>
          </div>

          {/* 費用が変わる要因 */}
          <div className="mt-14">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>費用が変わる要因</h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-4">
              同じ「畳の表替え」でも、条件によって費用は変わります。お見積もりの際は、次のような要因を考慮します。
            </p>
            <ul className="space-y-2 text-sm text-sumi/80">
              <li>— <strong className="text-sumi">畳のサイズ</strong>：地域・規格（京間・江戸間など）により1枚の大きさが異なります</li>
              <li>— <strong className="text-sumi">素材のグレード</strong>：い草の等級、和紙・樹脂、手刈り/機械すきで価格が変わります</li>
              <li>— <strong className="text-sumi">縁（へり）の種類</strong>：無地・柄・紋縁・特注縁で費用が異なります</li>
              <li>— <strong className="text-sumi">枚数・部屋数</strong>：多枚数は効率化で単価を抑えられる場合があります</li>
              <li>— <strong className="text-sumi">現場の状況</strong>：搬入経路・階数・エレベーターの有無・下地の状態</li>
              <li>— <strong className="text-sumi">廃材処分</strong>：古畳・古建具の処分費が加算される場合があります</li>
            </ul>
          </div>

          {/* 法人・大量施工 */}
          <div className="mt-14">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>法人・大量施工の考え方</h2>
            <p className="text-sm text-sumi/80 leading-relaxed">
              旅館・寺社・賃貸物件・店舗など、多枚数・複数部屋・複数物件の施工は、
              段取りの効率化により1枚あたりの単価を抑えられる場合があります。
              管理会社・オーナー様の継続案件には、案件規模に応じた個別のお見積もり、
              工種別内訳の明記、写真付き報告書の発行、請求書払いの対応など、
              法人取引に必要な体制を整えています。詳しくは
              <Link href="/business/real-estate" className="text-ai hover:underline mx-1">不動産会社・管理会社向け</Link>
              をご覧ください。
            </p>
          </div>

          {/* 相見積もりの注意点 */}
          <div className="mt-14">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>相見積もりの注意点</h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-4">
              複数社で比較検討される場合は、価格だけでなく見積もりの条件を揃えて比較することが大切です。
              極端に安い見積もりは、素材のグレードが低い・廃材処分が含まれていない・後から追加費用が発生する、
              といったケースもあります。次の点を確認しましょう。
            </p>
            <ul className="space-y-2 text-sm text-sumi/80">
              <li>— 使用する畳表・床・縁の素材とグレードが明記されているか</li>
              <li>— 廃材処分費・出張費が含まれているか</li>
              <li>— 工種別に内訳が分かれているか</li>
              <li>— 追加費用が発生する条件が説明されているか</li>
            </ul>
          </div>

          {/* よくある追加費用 */}
          <div className="mt-14">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>よくある追加費用</h2>
            <ul className="space-y-2 text-sm text-sumi/80">
              <li>— 下地（畳床・壁の下地）の傷み補修</li>
              <li>— 古畳・古建具・剥がしたクロスなどの廃材処分費</li>
              <li>— 特注の縁・高グレード素材へのアップグレード</li>
              <li>— 搬入が難しい立地・高層階での搬出入</li>
              <li>— 遠方への出張費</li>
            </ul>
            <p className="text-xs text-sumi/50 mt-3">
              いずれもお見積もり時にご説明し、ご了承いただいてから進めます。事前説明のない追加請求はありません。
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>料金に関するよくある質問</h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={priceFaqs} />
            </div>
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-3 justify-center">
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
