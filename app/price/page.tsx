import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqAccordion from "@/components/templates/FaqAccordion";

export const metadata: Metadata = buildMetadata({
  title: `工事別料金目安｜畳・襖・障子・クロス・床・原状回復 | ${SITE_NAME}`,
  description:
    "畳表替え・裏返し・新調・縁なし・和紙・樹脂、襖・障子・網戸、クロス・床、原状回復、店舗内装の詳細料金表を網羅。費用が変わる要因、見積もり例、相見積もりの注意点、法人・大量施工、FAQ20問を掲載。現地確認・お見積もり無料。",
  path: "/price",
});

type Row = { service: string; price: string; unit: string; note: string };

const TATAMI_PRICES: Row[] = [
  { service: "畳 裏返し", price: "3,300円〜", unit: "1枚あたり（税込）", note: "使用2〜3年の畳表が対象" },
  { service: "畳 表替え（中国産い草）", price: "4,500円〜", unit: "1枚あたり（税込）", note: "コスト重視" },
  { service: "畳 表替え（国産い草・機械すき）", price: "5,500円〜", unit: "1枚あたり（税込）", note: "標準グレード" },
  { service: "畳 表替え（国産い草・手刈り）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "高品質グレード" },
  { service: "畳 表替え（和紙畳）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "耐久・撥水性重視" },
  { service: "畳 表替え（樹脂畳）", price: "9,000円〜", unit: "1枚あたり（税込）", note: "水拭き可能" },
  { service: "畳 新調（建材床・国産い草）", price: "15,000円〜", unit: "1枚あたり（税込）", note: "床+表+縁" },
  { service: "畳 新調（わら床・国産い草）", price: "20,000円〜", unit: "1枚あたり（税込）", note: "旅館・茶室向け" },
  { service: "畳 新調（建材床・和紙畳）", price: "18,000円〜", unit: "1枚あたり（税込）", note: "ペット・子育て向け" },
  { service: "縁なし畳（和紙・半畳）", price: "8,000円〜", unit: "1枚あたり（税込）", note: "和モダン" },
  { service: "縁なし畳（樹脂・半畳）", price: "10,000円〜", unit: "1枚あたり（税込）", note: "水拭き可能" },
  { service: "琉球畳（七島い草）", price: "18,000円〜", unit: "1枚あたり（税込）", note: "旅館・茶室向け高品質" },
  { service: "紋縁・特注縁", price: "別途見積もり", unit: "—", note: "寺社・旅館向け" },
];

const BUILDING_PRICES: Row[] = [
  { service: "ふすま張替え（量産紙）", price: "3,000円〜", unit: "1枚あたり（税込）", note: "賃貸・標準" },
  { service: "ふすま張替え（上級・鳥の子）", price: "別途見積もり", unit: "—", note: "格式ある空間向け" },
  { service: "障子張替え（普通紙）", price: "2,000円〜", unit: "1枚あたり（税込）", note: "標準" },
  { service: "障子張替え（強化・プラ障子紙）", price: "別途見積もり", unit: "—", note: "破れにくい" },
  { service: "網戸張替え（標準ネット）", price: "2,500円〜", unit: "1枚あたり（税込）", note: "18・20メッシュ" },
  { service: "網戸張替え（ペット・防虫・防塵）", price: "別途見積もり", unit: "—", note: "機能性ネット" },
];

const INTERIOR_PRICES: Row[] = [
  { service: "クロス張替え（壁・量産）", price: "800円〜", unit: "m²あたり（税込）", note: "スタンダード" },
  { service: "クロス張替え（天井）", price: "900円〜", unit: "m²あたり（税込）", note: "" },
  { service: "機能性クロス（防汚・消臭等）", price: "1,200円〜", unit: "m²あたり（税込）", note: "目的に応じて" },
  { service: "フローリング張替え（上貼り）", price: "5,000円〜", unit: "m²あたり（税込）", note: "下地が健全な場合" },
  { service: "フローリング張替え（張替え）", price: "8,000円〜", unit: "m²あたり（税込）", note: "下地補修含む" },
  { service: "クッションフロア張替え", price: "2,500円〜", unit: "m²あたり（税込）", note: "水回りに多用" },
  { service: "フロアタイル張替え", price: "4,000円〜", unit: "m²あたり（税込）", note: "" },
];

const RESTORATION_PRICES: Row[] = [
  { service: "賃貸退去後の原状回復（1R・畳含む）", price: "50,000円〜", unit: "一式（税込）", note: "範囲により変動" },
  { service: "賃貸退去後の原状回復（1LDK）", price: "100,000円〜", unit: "一式（税込）", note: "範囲により変動" },
  { service: "賃貸退去後の原状回復（2DK・畳2室）", price: "120,000円〜", unit: "一式（税込）", note: "畳・建具・クロス含む" },
  { service: "店舗退去後の原状回復", price: "別途見積もり", unit: "—", note: "規模・状況により大きく変動" },
  { service: "不動産売買前の内装整備", price: "別途見積もり", unit: "—", note: "複合施工一括対応可" },
  { service: "店舗内装（小上がり造作含む）", price: "別途見積もり", unit: "—", note: "規模により変動" },
];

const FACTORS = [
  { t: "素材・グレード", d: "い草の産地・等級、和紙・樹脂、手刈り/機械すきで価格が変わります。" },
  { t: "枚数・面積", d: "多枚数・複数部屋は効率化で単価を抑えられる場合があります。" },
  { t: "畳のサイズ", d: "京間・江戸間・団地間など地域規格で1枚の大きさが異なります。" },
  { t: "縁の種類", d: "無地・柄・紋縁・特注縁で費用が異なります。" },
  { t: "搬入経路・階数", d: "エレベーターの有無、高層階、狭い経路で養生・搬出入の手間が増えます。" },
  { t: "家具移動", d: "大型家具の移動が必要な場合、別途対応となることがあります。" },
  { t: "下地の補修", d: "畳床や壁下地の傷みがあれば補修費が加わります。" },
  { t: "廃材処分", d: "古畳・古建具・剥がしたクロスの処分費が加算される場合があります。" },
  { t: "繁忙期・遠方", d: "繁忙期の日程や遠方への出張費が影響することがあります。" },
];

const EXAMPLES = [
  {
    title: "一般住宅 6畳和室の表替え",
    body: "国産い草（機械すき）で6枚の表替え。畳床は健全で表替えのみ。落ち着いた縁を選定。家具移動はお客様対応。",
    note: "目安：5,500円〜/枚 × 6枚＋諸経費。素材を和紙畳にすると単価が上がります。",
  },
  {
    title: "賃貸退去後 2DK（畳2室）の原状回復",
    body: "畳表替え（標準い草）、襖・障子の張替え、クロス全面張替え、室内クリーニングを一括施工。次の募集に向けた標準仕様。",
    note: "目安：120,000円〜（範囲・素材により変動）。畳・建具・クロスをまとめて効率化。",
  },
  {
    title: "旅館 客室10室の表替え（繁忙期前）",
    body: "客室を順番に施工し営業を継続。国産い草の高品質グレードで64枚規模。障子の張替えも同時施工。",
    note: "目安：枚数・素材により個別見積もり。計画施工で稼働停止を最小化。",
  },
];

const CAUTIONS = [
  "使用する畳表・床・縁の素材とグレードが明記されているか",
  "廃材処分費・出張費が含まれているか",
  "工種別に内訳が分かれているか",
  "追加費用が発生する条件が説明されているか",
  "極端に安い見積もりは素材グレードや処分費が含まれていないことがある",
];

const FAQS = [
  { q: "畳表替えの費用はどのくらいですか？", a: "中国産い草で4,500円〜、国産い草（機械すき）で5,500円〜、手刈り・和紙畳で8,000円〜、樹脂畳で9,000円〜が1枚あたりの目安です。素材・サイズ・枚数により変動します。" },
  { q: "畳裏返しの費用はどのくらいですか？", a: "1枚あたり3,300円〜が目安です。使用2〜3年の畳表が対象で、既存の畳表を再利用するため最も経済的です。" },
  { q: "畳新調の費用はどのくらいですか？", a: "建材床・国産い草で15,000円〜、わら床・国産い草で20,000円〜、建材床・和紙畳で18,000円〜が1枚あたりの目安です。床・表・縁の組み合わせで変わります。" },
  { q: "縁なし畳・和紙畳・樹脂畳の費用は？", a: "縁なし畳（和紙）8,000円〜、縁なし畳（樹脂）10,000円〜、琉球畳（七島い草）18,000円〜が目安です。素材・カラー・枚数により変動します。" },
  { q: "襖・障子・網戸の費用は？", a: "ふすま3,000円〜、障子2,000円〜、網戸2,500円〜が1枚あたりの目安です。紙・ネットの種類、下地の状態により変動します。" },
  { q: "クロス・床の費用は？", a: "クロス（壁・量産）800円〜/m²、機能性クロス1,200円〜/m²、フローリング上貼り5,000円〜/m²、クッションフロア2,500円〜/m²が目安です。" },
  { q: "原状回復の費用はどのくらいですか？", a: "1Rで50,000円〜、1LDKで100,000円〜、2DK（畳2室）で120,000円〜が一式の目安です。範囲・素材・物件状況により変動します。" },
  { q: "見積もりは無料ですか？", a: "はい、現地確認・お見積もりは無料です。お見積もり後のキャンセルも費用は発生しません。お気軽にご相談ください。" },
  { q: "表示価格より高くなることはありますか？", a: "表示は最も標準的な条件での目安です。素材のグレードアップ、特注縁、下地補修、搬出入が難しい立地、廃材処分などにより変動します。内訳を明示し、ご了承いただいてから施工します。" },
  { q: "費用が変わる要因は何ですか？", a: "畳のサイズ、素材グレード、縁の種類、枚数、搬入経路・階数、家具移動、下地補修、廃材処分、繁忙期・遠方などが影響します。ページ内「費用が変わる要因」をご覧ください。" },
  { q: "枚数が多いと割安になりますか？", a: "多枚数・複数部屋・複数物件の施工は、効率化により1枚あたりの単価を抑えられる場合があります。旅館・寺社・賃貸など大量施工は個別にお見積もりします。" },
  { q: "法人・管理会社向けの料金体系はありますか？", a: "複数物件・継続案件をお持ちの管理会社・オーナー様向けには、案件規模に応じて個別にお見積もりします。継続的なお取引の条件もご相談に応じます。" },
  { q: "追加料金が発生することはありますか？", a: "お見積もり時にご説明した内容以外の追加費用は原則発生しません。現地で発見できなかった下地の傷みなど特殊な事情がある場合は、必ず事前にご説明し、ご了承いただいてから進めます。" },
  { q: "相見積もりを取っても大丈夫ですか？", a: "はい、複数社で比較検討いただいて構いません。ただし価格だけでなく、素材グレード・縁の種類・廃材処分の有無・保証など条件を揃えて比較することをおすすめします。当社は内訳を明確にご提示します。" },
  { q: "安さだけで選ぶリスクはありますか？", a: "極端に安い見積もりは、素材グレードが低い、廃材処分が含まれていない、後から追加費用が発生する、といったケースがあります。条件を揃えた比較が大切です。" },
  { q: "支払い方法を教えてください。", a: "現金・お振込に対応しています。法人・継続取引の場合は請求書払いもご相談いただけます。詳しくはお問い合わせ時にご確認ください。" },
  { q: "出張費はかかりますか？", a: "対応エリア内は原則無料ですが、遠方の場合は出張費が発生することがあります。物件の所在地をお知らせいただければ、対応可否と条件をご案内します。" },
  { q: "古い畳や建具の処分費はかかりますか？", a: "新調などで不要になった古畳・古建具の処分費が別途必要な場合があります。お見積もり時にご案内します。" },
  { q: "賃貸の畳替え費用は誰が負担しますか？", a: "日焼けや自然な色あせなど通常損耗は貸主負担、こぼしたシミやペットによる損傷など故意・過失は借主負担とされるのが一般的です。状況を整理してご報告します。" },
  { q: "見積もりにはどのくらい時間がかかりますか？", a: "現地確認のうえ、内容に応じて見積もりをご提示します。枚数・規模が大きい場合や法人案件はお時間をいただくことがあります。お急ぎの場合はご相談ください。" },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const PRICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "畳・内装工事料金一覧",
  url: `${SITE_URL}/price`,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "施工別料金目安",
    itemListElement: [
      ...[...TATAMI_PRICES, ...BUILDING_PRICES, ...INTERIOR_PRICES].filter((row) => row.price !== "別途見積もり").map((row) => ({
        "@type": "Offer",
        name: row.service,
        description: `${row.price} ${row.unit}${row.note ? ` — ${row.note}` : ""}`,
        priceCurrency: "JPY",
      })),
    ],
  },
};

function PriceTable({ title, rows, unitHeader }: { title: string; rows: Row[]; unitHeader: string }) {
  return (
    <div className="mt-12 first:mt-0">
      <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>{title}</h2>
      <div className="bg-white border border-border overflow-x-auto">
        <table className="w-full min-w-[480px]">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICE_SCHEMA) }} />

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "料金・見積もり" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Price</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
            工事別料金目安｜畳・襖・障子・クロス・床・原状回復
          </h1>
          <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
            畳工事から襖・障子・網戸、内装、原状回復、店舗内装まで、工事別の料金目安を網羅しています。
            素材・枚数・現場の状況により変動します。すべて税込の目安価格です。正確な費用は無料の現地確認・お見積もりでご案内します。
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
          <PriceTable title="クロス・床 内装工事 料金目安" rows={INTERIOR_PRICES} unitHeader="単位・備考" />
          <PriceTable title="原状回復・店舗内装 料金目安" rows={RESTORATION_PRICES} unitHeader="備考" />

          <div className="mt-8 space-y-2">
            <p className="text-xs text-sumi/40">※ 表示価格はすべて税込の目安です。実際の費用は現地確認後にお見積もりします。</p>
            <p className="text-xs text-sumi/40">※ 法人・大口案件・継続案件については個別にご相談ください。</p>
            <p className="text-xs text-sumi/40">※ 遠方への出張費・廃材処分費が別途発生する場合があります。</p>
          </div>

          {/* 費用が変わる要因 */}
          <div className="mt-16">
            <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>費用が変わる要因</h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-6">
              同じ「畳の表替え」でも、条件によって費用は変わります。お見積もりの際は、次のような要因を考慮します。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FACTORS.map((f) => (
                <div key={f.t} className="bg-kiji/40 border border-border p-5">
                  <h3 className="text-sm text-sumi mb-2 pl-2 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>{f.t}</h3>
                  <p className="text-xs text-sumi/70 leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 見積もり例 */}
          <div className="mt-16">
            <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>見積もり例</h2>
            <div className="space-y-4">
              {EXAMPLES.map((e) => (
                <div key={e.title} className="bg-white border border-border p-6">
                  <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{e.title}</h3>
                  <p className="text-sm text-sumi/75 leading-relaxed mb-2">{e.body}</p>
                  <p className="text-xs text-kincya leading-relaxed">{e.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-sumi/40 mt-3">※ 上記は条件の一例です。実際の費用は現地確認後に正式見積もりでご案内します。</p>
          </div>

          {/* 相見積もりの注意点 */}
          <div className="mt-16">
            <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>相見積もりの注意点</h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-4">
              複数社で比較検討される場合は、価格だけでなく見積もりの条件を揃えて比較することが大切です。
              次の点を確認しましょう。
            </p>
            <ul className="space-y-2">
              {CAUTIONS.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-sumi/80 leading-relaxed">
                  <span className="text-kincya shrink-0 mt-0.5">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 法人・大量施工 */}
          <div className="mt-16">
            <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>法人・大量施工の考え方</h2>
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

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>料金に関するよくある質問</h2>
            <FaqAccordion items={FAQS} />
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

      {/* 埼玉エリアリンク */}
      <section className="py-10 bg-kiji/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-5 uppercase text-center">埼玉エリアの畳工事・料金相談</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "埼玉の畳表替え料金", href: "/area/saitama/tatami-omotegae" },
              { label: "埼玉の畳新調料金", href: "/area/saitama/tatami-shinchou" },
              { label: "埼玉の畳工事TOP", href: "/area/saitama/tatami" },
              { label: "埼玉の原状回復", href: "/area/saitama/restoration" },
              { label: "さいたま市の畳張替え", href: "/area/saitama/saitama-city" },
              { label: "川口市の畳張替え", href: "/area/saitama/kawaguchi" },
              { label: "お問い合わせ・見積もり", href: "/contact" },
              { label: "埼玉エリアTOP", href: "/area/saitama" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-center text-sumi/60 hover:text-ai border border-border py-2 px-3 bg-white hover:border-ai/30 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
