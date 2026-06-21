import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `旅館・宿泊施設の襖張替え｜客室・大広間・大量施工対応 | ${SITE_NAME}`,
  description:
    "旅館・ホテル・宿泊施設の襖張替えを、格式ある柄・耐久性の高い素材で。客室・大広間・宴会場の多枚数施工、繁忙期・休館日を活用したスケジュール調整、畳・障子との一括施工まで対応します。",
  path: "/fusuma/for-ryokan",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "旅館の客室襖をまとめて張り替えられますか？", a: "はい。客室・大広間・宴会場・廊下など多枚数の襖張替えに対応します。客室数・枚数・スケジュールをお知らせいただければ、施工計画と全体のお見積もりをご案内します。" },
  { category: "btob", q: "格式に合った柄・素材を選べますか？", a: "はい。客室の格に応じて、本鳥の子・織物など上質な素材、落ち着いた柄から華やかな柄まで幅広くご提案します。施設のブランドや空間の雰囲気を損なわない選定を行います。" },
  { category: "btob", q: "稼働を止めずに施工できますか？", a: "空室となった客室から順に襖をお預かりし、お戻しする段階施工に対応します。チェックアウトからチェックインまでの間で完結させる調整もご相談ください。" },
  { category: "timing", q: "繁忙期前にまとめて施工してもらえますか？", a: "はい。お盆・年末年始・連休・紅葉シーズンなど繁忙期前は依頼が集中します。2〜3か月前にスケジュールを共有いただければ、閑散期・休館日を活用した集中施工を計画できます。" },
  { category: "btob", q: "耐久性の高い襖紙はありますか？", a: "人の出入りが多い大広間・宴会場には、糸入り襖紙など破れにくい素材をご提案します。客室の格と使用頻度に応じて、耐久性と風合いのバランスを取った選定を行います。" },
  { category: "btob", q: "畳・障子もまとめて頼めますか？", a: "はい。襖と合わせて畳の表替え・新調、障子・網戸の張替えを一括でご依頼いただけます。客室を一度に整えることで、稼働停止期間を最小化できます。" },
  { category: "btob", q: "施工中の騒音や匂いは大丈夫ですか？", a: "襖は工場でお預かりして加工するため、客室内での作業は最小限です。他の宿泊客に配慮し、搬入経路・作業時間を調整します。" },
  { category: "btob", q: "請求書払い・法人取引に対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。法人契約・継続取引の条件についても案件規模に応じてご案内します。" },
  { category: "price", q: "旅館向けの料金はどのくらいですか？", a: "素材・枚数・スケジュールにより変動します。多枚数・継続取引の場合は個別にお見積もりします。まずは客室数と襖の枚数をお知らせください。" },
  { category: "btob", q: "定期的なメンテナンス契約は可能ですか？", a: "客室数・稼働状況に応じて、毎年一定数を順次更新する計画的なメンテナンスをご相談いただけます。費用の平準化と品質の安定維持が両立できます。" },
];

export default function FusumaForRyokanPage() {
  return (
    <ServicePageTemplate
      eyebrow="Fusuma for Ryokan"
      title="旅館・宿泊施設の襖張替え"
      subtitle="客室・大広間・宴会場の襖を、格式ある素材と稼働に配慮したスケジュールで。多枚数の大量施工に対応します。"
      breadcrumbs={[{ label: "襖張替え", href: "/fusuma" }, { label: "旅館・宿泊施設の襖張替え" }]}
      image="/images/nihon-tatami/fusuma/fusuma-installation-03.png"
      sections={[
        {
          heading: "旅館の襖が果たす役割",
          content: (
            <>
              <p>
                旅館・宿泊施設の襖は、客室の第一印象を左右する重要な要素です。
                日焼けや破れのある襖は、どれほど料理やサービスが優れていても「管理が行き届いていない」という印象を与えかねません。
                整った襖は、和の空間ならではの落ち着きと格を演出し、宿泊客の満足度や口コミにつながります。
              </p>
              <p>
                日本畳パートナーズでは、旅館の運営スケジュールと客室の格を踏まえ、
                格式に合った素材選びと丁寧な施工計画をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "客室・空間別の素材選び",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">一般客室</strong> — 量産鳥の子・糸入りなど、品質とコストのバランスに優れた素材。</li>
              <li><strong className="text-sumi">特別室・離れ</strong> — 本鳥の子・織物など、格式にふさわしい上質な柄・素材。</li>
              <li><strong className="text-sumi">大広間・宴会場</strong> — 人の出入りが多いため、糸入りなど破れにくい耐久性の高い素材。</li>
              <li><strong className="text-sumi">廊下・共用部</strong> — 動線上で傷みやすいため、実用性を重視した選定。</li>
            </ul>
          ),
        },
        {
          heading: "大量施工のスケジュール調整",
          content: (
            <p>
              多枚数の襖張替えは、稼働率を落とさずに進める計画が重要です。空室となった客室から順に襖をお預かりし、
              お戻しする段階施工に対応します。お盆・年末年始・連休・紅葉シーズンなどの繁忙期前は依頼が集中するため、
              2〜3か月前のご相談をおすすめします。閑散期・休館日を活用した集中施工の計画もご提案します。
            </p>
          ),
        },
        {
          heading: "畳・障子との一括施工",
          content: (
            <p>
              襖と合わせて、畳の表替え・新調、障子・網戸の張替えを一括でご依頼いただけます。
              客室を一度に整えることで、稼働停止期間を最小化でき、業者調整の手間も省けます。
              客室の格に合わせた素材を、和室全体のトーンが揃うようご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "襖張替え（量産鳥の子）", price: "4,500円〜/枚", note: "一般客室" },
        { service: "襖張替え（本鳥の子・織物）", price: "8,000円〜/枚", note: "特別室向け" },
        { service: "複数客室・継続取引", price: "別途見積もり", note: "枚数・スケジュールにより" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "襖張替えの費用・種類・流れ", href: "/fusuma/replacement" },
        { label: "旅館・宿泊施設向け畳工事", href: "/business/ryokan" },
        { label: "障子張替え（旅館）", href: "/shoji/for-ryokan" },
        { label: "畳表替え", href: "/services/tatami-omotegae" },
      ]}
      relatedPages={[
        { label: "旅館・宿泊施設向けサービス", href: "/business/ryokan" },
        { label: "寺院・神社の襖張替え", href: "/fusuma/for-temple-shrine" },
        { label: "コラム：旅館の客室畳メンテナンス", href: "/column/ryokan-tatami-merit" },
      ]}
    />
  );
}
