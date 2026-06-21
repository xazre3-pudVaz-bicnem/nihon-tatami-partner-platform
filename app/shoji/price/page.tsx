import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `障子張替えの料金目安｜紙の種類・枚数別の費用 | ${SITE_NAME}`,
  description:
    "障子張替えの料金目安を紙の種類別・枚数別に解説。普通紙・強化紙・プラスチック障子紙・本和紙ごとの費用、桟補修の追加費用、費用が変わる要因や費用を抑えるポイントまでご案内します。",
  path: "/shoji/price",
});

const faqs: FaqItem[] = [
  { category: "price", q: "障子張替えの料金はどう決まりますか？", a: "障子紙の種類（グレード）、枚数、障子のサイズ、桟（さん）補修の有無によって決まります。同じ枚数でも紙の種類で費用が変わります。現地確認後に正式なお見積もりをご案内します。" },
  { category: "price", q: "枚数が多いと割安になりますか？", a: "枚数がまとまると1枚あたりの単価を抑えやすくなります。旅館・寺社・賃貸の複数物件など多枚数の場合は、まとめてのお見積もりをご相談ください。" },
  { category: "price", q: "一番安く抑えるにはどの紙が良いですか？", a: "費用を最優先する場合は普通紙が手頃です。ただし破れやすさが気になる場合は、やや費用は上がりますが強化紙・プラスチック障子紙のほうが長持ちし、結果的に張替え頻度を減らせます。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。" },
  { category: "price", q: "追加費用が発生することはありますか？", a: "お見積もり時にご説明した内容以外の追加費用は原則発生しません。桟の破損など特殊な事情があるときは、必ず事前にご説明し、ご了承いただいてから進めます。" },
  { category: "general", q: "畳や襖と一緒に頼むと費用面でメリットはありますか？", a: "和室の建具をまとめて施工すると、出張・段取りが一度で済むため効率的です。畳・襖・網戸・クロスとの一括見積もりもご相談ください。" },
  { category: "price", q: "プラスチック障子紙は普通紙よりどのくらい高いですか？", a: "普通紙が1枚1,500円程度からに対し、プラスチック障子紙は2,500円程度からが目安です。破れにくく張替え頻度を減らせるため、長期的にはコストパフォーマンスが高い選択肢です。" },
  { category: "price", q: "賃貸物件で大量に依頼したい場合の費用は？", a: "複数物件・多枚数の場合は、枚数・紙の種類・スケジュールをお知らせいただければ個別にお見積もりします。継続的なお取引もご相談に応じます。" },
];

export default function ShojiPricePage() {
  return (
    <ServicePageTemplate
      eyebrow="Shoji Price"
      title="障子張替えの料金目安"
      subtitle="紙の種類・枚数によって費用は変動します。代表的な料金目安と、費用が変わる要因をわかりやすくご案内します。"
      breadcrumbs={[{ label: "障子張替え", href: "/shoji" }, { label: "料金目安" }]}
      image="/images/nihon-tatami/shoji/shoji-craftsman-01.png"
      sections={[
        {
          heading: "障子張替えの料金は何で決まるか",
          content: (
            <>
              <p>
                障子張替えの料金は、主に「障子紙のグレード」「枚数」「障子のサイズ」「桟（さん）補修の有無」で決まります。
                同じ1枚でも、標準的な普通紙と、プラスチック障子紙・本和紙などでは費用に差が出ます。
              </p>
              <p>
                以下は一般的な料金目安です。実際の費用は障子の状態・サイズ・仕様により変動します。
                正式なお見積もりは、現地確認後に無料でご案内します。
              </p>
            </>
          ),
        },
        {
          heading: "紙の種類別の料金目安",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">普通紙（和紙）</strong> — 1,500円〜/枚。標準的な障子紙。コスト重視に。</li>
              <li><strong className="text-sumi">強化紙</strong> — 2,200円〜/枚。破れにくく実用的。</li>
              <li><strong className="text-sumi">プラスチック障子紙</strong> — 2,500円〜/枚。非常に丈夫。ペット・子育て家庭に。</li>
              <li><strong className="text-sumi">模様入り</strong> — 2,800円〜/枚。柄・透かしで個性を演出。</li>
              <li><strong className="text-sumi">本和紙</strong> — 3,000円〜/枚。格式ある空間向けの上質素材。</li>
            </ul>
          ),
        },
        {
          heading: "費用が変わる主な要因",
          content: (
            <ul className="space-y-2">
              <li>— 障子紙のグレード・種類</li>
              <li>— 枚数（まとまると1枚あたりの単価を抑えやすい）</li>
              <li>— 障子のサイズ（大判は費用が上がります）</li>
              <li>— 桟（さん）の破損・補修の必要性</li>
              <li>— 全面張替えか部分補修か</li>
            </ul>
          ),
        },
        {
          heading: "費用を抑えるポイント",
          content: (
            <p>
              費用を抑えたい場合は、普通紙を選ぶ、複数枚をまとめて依頼する、畳・襖と同時に施工して出張・段取りを一度で済ませる、
              といった方法があります。一方、ペットや小さなお子様がいるご家庭では、やや費用は上がっても破れにくいプラスチック障子紙を選ぶことで、
              張替え頻度が減り、長期的にはコストを抑えられるケースもあります。ご予算とご要望に合わせて最適なプランをご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "障子張替え（普通紙）", price: "1,500円〜/枚", note: "標準" },
        { service: "障子張替え（強化紙）", price: "2,200円〜/枚", note: "破れにくい" },
        { service: "障子張替え（プラスチック障子紙）", price: "2,500円〜/枚", note: "丈夫" },
        { service: "障子張替え（本和紙・模様入り）", price: "3,000円〜/枚", note: "上質" },
        { service: "桟（さん）補修", price: "別途見積もり", note: "破損がある場合" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "障子張替えの費用・種類・流れ", href: "/shoji/replacement" },
        { label: "強化障子紙・プラスチック障子紙", href: "/shoji/strong-paper" },
        { label: "襖張替えの料金目安", href: "/fusuma/price" },
        { label: "料金の目安（全体）", href: "/price" },
      ]}
      relatedPages={[
        { label: "賃貸物件の障子張替え", href: "/shoji/for-rental" },
        { label: "旅館・宿泊施設の障子張替え", href: "/shoji/for-ryokan" },
        { label: "寺院・神社の障子張替え", href: "/shoji/for-temple-shrine" },
      ]}
    />
  );
}
