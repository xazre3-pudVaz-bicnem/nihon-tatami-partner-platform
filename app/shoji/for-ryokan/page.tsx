import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `旅館・宿泊施設の障子張替え｜客室・廊下・大量施工対応 | ${SITE_NAME}`,
  description:
    "旅館・ホテル・宿泊施設の障子張替えを、繁忙期・稼働に配慮したスケジュールで。客室・廊下・大広間の多枚数施工、破れにくい紙の選び方、畳・襖との一括施工まで対応します。",
  path: "/shoji/for-ryokan",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "旅館の客室障子をまとめて張り替えられますか？", a: "はい。客室・廊下・大広間・宴会場など多枚数の障子張替えに対応します。客室数・枚数・スケジュールをお知らせいただければ、施工計画と全体のお見積もりをご案内します。" },
  { category: "btob", q: "稼働を止めずに施工できますか？", a: "空室となった客室から順に障子をお預かりし、お戻しする段階施工に対応します。チェックアウトからチェックインまでの間で完結させる調整もご相談ください。" },
  { category: "timing", q: "繁忙期前にまとめて施工してもらえますか？", a: "はい。お盆・年末年始・連休・紅葉シーズンなど繁忙期前は依頼が集中します。2〜3か月前にスケジュールを共有いただければ、閑散期・休館日を活用した集中施工を計画できます。" },
  { category: "btob", q: "破れにくい障子紙はありますか？", a: "人の出入りが多い廊下や大広間には、強化紙・プラスチック障子紙など破れにくい紙をご提案します。客室の格と使用頻度に応じて選定します。" },
  { category: "btob", q: "客室の格に合わせた紙を選べますか？", a: "はい。特別室には本和紙や上質な障子紙、一般客室には実用的な紙など、客室の格に応じてご提案します。空間の雰囲気を損なわない選定を行います。" },
  { category: "btob", q: "畳・襖もまとめて頼めますか？", a: "はい。障子と合わせて畳の表替え・新調、襖・網戸の張替えを一括でご依頼いただけます。客室を一度に整えることで、稼働停止期間を最小化できます。" },
  { category: "btob", q: "施工中の騒音は大丈夫ですか？", a: "障子は工場でお預かりして加工するため、客室内での作業は最小限です。他の宿泊客に配慮し、搬入経路・作業時間を調整します。" },
  { category: "btob", q: "請求書払い・法人取引に対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。法人契約・継続取引の条件についても案件規模に応じてご案内します。" },
  { category: "price", q: "旅館向けの料金はどのくらいですか？", a: "紙の種類・枚数・スケジュールにより変動します。多枚数・継続取引の場合は個別にお見積もりします。まずは客室数と障子の枚数をお知らせください。" },
  { category: "btob", q: "定期的なメンテナンス契約は可能ですか？", a: "客室数・稼働状況に応じて、毎年一定数を順次更新する計画的なメンテナンスをご相談いただけます。費用の平準化と品質の安定維持が両立できます。" },
];

export default function ShojiForRyokanPage() {
  return (
    <ServicePageTemplate
      eyebrow="Shoji for Ryokan"
      title="旅館・宿泊施設の障子張替え"
      subtitle="客室・廊下・大広間の障子を、稼働に配慮したスケジュールで。多枚数の大量施工に対応します。"
      breadcrumbs={[{ label: "障子張替え", href: "/shoji" }, { label: "旅館・宿泊施設の障子張替え" }]}
      image="/images/nihon-tatami/shoji/shoji-craftsman-02.png"
      sections={[
        {
          heading: "旅館の障子が果たす役割",
          content: (
            <>
              <p>
                旅館・宿泊施設の障子は、やわらかな光を取り込み、客室に和の落ち着きをもたらす重要な要素です。
                黄ばんだ障子や破れた障子は、せっかくの和の空間の印象を損ない、宿泊客の評価にも影響しかねません。
                整った障子は、清潔感と格を演出し、口コミ・リピートにつながります。
              </p>
              <p>
                日本畳パートナーズでは、旅館の運営スケジュールと客室の格を踏まえ、
                適した紙選びと丁寧な施工計画をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "空間別の紙選び",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">特別室・離れ</strong> — 本和紙や上質な障子紙で格式ある空間に。</li>
              <li><strong className="text-sumi">一般客室</strong> — 実用性とコストのバランスに優れた紙。</li>
              <li><strong className="text-sumi">廊下・大広間</strong> — 人の出入りが多いため、強化紙・プラスチック障子紙など破れにくい紙。</li>
            </ul>
          ),
        },
        {
          heading: "大量施工のスケジュール調整",
          content: (
            <p>
              多枚数の障子張替えは、稼働率を落とさずに進める計画が重要です。空室となった客室から順に障子をお預かりし、
              お戻しする段階施工に対応します。お盆・年末年始・連休・紅葉シーズンなどの繁忙期前は依頼が集中するため、
              2〜3か月前のご相談をおすすめします。閑散期・休館日を活用した集中施工の計画もご提案します。
            </p>
          ),
        },
        {
          heading: "畳・襖との一括施工",
          content: (
            <p>
              障子と合わせて、畳の表替え・新調、襖・網戸の張替えを一括でご依頼いただけます。
              客室を一度に整えることで、稼働停止期間を最小化でき、業者調整の手間も省けます。
              客室の格に合わせて、和室全体のトーンが揃うようご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "障子張替え（普通紙）", price: "1,500円〜/枚", note: "一般客室" },
        { service: "障子張替え（強化紙・プラスチック）", price: "2,200円〜/枚", note: "廊下・大広間" },
        { service: "複数客室・継続取引", price: "別途見積もり", note: "枚数・スケジュールにより" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "障子張替えの費用・種類・流れ", href: "/shoji/replacement" },
        { label: "旅館・宿泊施設向け畳工事", href: "/business/ryokan" },
        { label: "襖張替え（旅館）", href: "/fusuma/for-ryokan" },
        { label: "畳表替え", href: "/services/tatami-omotegae" },
      ]}
      relatedPages={[
        { label: "旅館・宿泊施設向けサービス", href: "/business/ryokan" },
        { label: "寺院・神社の障子張替え", href: "/shoji/for-temple-shrine" },
        { label: "コラム：旅館の客室畳メンテナンス", href: "/column/ryokan-tatami-merit" },
      ]}
    />
  );
}
