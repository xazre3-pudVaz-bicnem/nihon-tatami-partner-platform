import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `寺院・神社の障子張替え｜本堂・社務所の格式ある施工 | ${SITE_NAME}`,
  description:
    "寺院・神社の障子張替えを、格式に合った紙で丁寧に施工。本堂・客殿・社務所の用途に応じた紙選び、法要・祭礼前のタイミング調整、境内での養生・搬入の配慮まで対応します。",
  path: "/shoji/for-temple-shrine",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "本堂や社務所の障子も張り替えてもらえますか？", a: "はい。本堂・客殿・庫裏・控室・社務所など、寺社の各空間の障子張替えに対応します。用途と格式に応じた紙をご提案します。" },
  { category: "btob", q: "格式に合った紙を選べますか？", a: "はい。寺院・神社では、上質な本和紙や落ち着いた風合いの紙など、空間の格にふさわしい障子紙を選定します。建物の意匠や雰囲気を踏まえてご提案します。" },
  { category: "timing", q: "法要や祭礼の前に間に合わせられますか？", a: "はい。法要・法事・祭礼など重要な行事の前に整えたいというご相談を多くいただきます。日程に余裕をもってご相談いただければ、行事に間に合うよう施工計画を立てます。" },
  { category: "btob", q: "文化財や歴史的建造物でも対応できますか？", a: "文化財指定の建造物や歴史的建築物では、取り扱いに特別な配慮が必要です。現地を確認のうえ、養生・搬入・施工方法を慎重に検討してご提案します。対応可否は現地確認後にご案内します。" },
  { category: "btob", q: "境内での作業時の配慮はありますか？", a: "参拝者・関係者への配慮として、搬入経路・養生・作業時間を調整します。障子は工場でお預かりして加工するため、境内での作業は最小限に抑えられます。" },
  { category: "btob", q: "破れにくい紙にもできますか？", a: "はい。人の出入りが多い空間には、強化紙・プラスチック障子紙など破れにくい紙もご提案できます。格式と実用性のバランスを取った選定を行います。" },
  { category: "btob", q: "畳・襖もまとめて頼めますか？", a: "はい。障子と合わせて畳の表替え・新調、襖の張替えを一括でご依頼いただけます。行事前に空間全体を整えることができます。" },
  { category: "btob", q: "施工中の騒音は大丈夫ですか？", a: "障子は工場でお預かりして加工するため、現地での騒音は最小限です。作業時間も法務・祭礼の妨げにならないよう調整します。" },
  { category: "price", q: "寺社向けの料金はどのくらいですか？", a: "紙の種類・枚数・仕様により変動します。格式ある紙を用いる場合や多枚数の場合は個別にお見積もりします。まずは空間と枚数をお知らせください。" },
  { category: "btob", q: "請求書払いに対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。寺社のご事情に合わせた対応をご案内します。" },
];

export default function ShojiForTempleShrinePage() {
  return (
    <ServicePageTemplate
      eyebrow="Shoji for Temple / Shrine"
      title="寺院・神社の障子張替え"
      subtitle="本堂・客殿・社務所の障子を、格式に合った紙で。法要・祭礼前のタイミング、境内での配慮まで丁寧に対応します。"
      breadcrumbs={[{ label: "障子張替え", href: "/shoji" }, { label: "寺院・神社の障子張替え" }]}
      image="/images/nihon-tatami/shoji/shoji-adjustment-01.png"
      sections={[
        {
          heading: "寺院・神社の障子に求められること",
          content: (
            <>
              <p>
                寺院・神社の障子は、やわらかな光を取り込み、荘厳な空間に静謐な趣をもたらす重要な要素です。
                黄ばみや破れのある障子は、空間の品格を損ないかねません。
                格式にふさわしい紙で整えることで、本堂・客殿・社務所などの空間の格を保てます。
              </p>
              <p>
                日本畳パートナーズでは、寺社建築特有の格式や意匠を踏まえた紙選びと、
                行事・参拝に配慮した施工計画をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "用途・空間別の紙選び",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">本堂・拝殿</strong> — 最も格式が求められる空間。上質な本和紙で静謐な趣を保つ。</li>
              <li><strong className="text-sumi">客殿・参集殿</strong> — 来客を迎える空間。品格と実用性を兼ね備えた紙。</li>
              <li><strong className="text-sumi">庫裏・控室・社務所</strong> — 日常的に使う空間。実用性とコストのバランス、必要に応じて破れにくい紙。</li>
            </ul>
          ),
        },
        {
          heading: "法要・祭礼前のタイミング",
          content: (
            <p>
              法要・法事・年中行事・祭礼など、多くの方が集まる行事の前は、障子を整える好機です。
              重要な行事に間に合うよう、日程に余裕をもってご相談ください。
              行事の予定を伺ったうえで、施工計画を逆算して立てます。畳・襖と合わせた一括施工もご提案します。
            </p>
          ),
        },
        {
          heading: "文化財・境内での配慮",
          content: (
            <p>
              文化財指定の建造物や歴史的建築物では、取り扱いに特別な配慮が必要です。
              現地を確認のうえ、養生・搬入経路・施工方法を慎重に検討します。
              参拝者・関係者への配慮として、作業時間や搬入経路も調整します。
              障子は工場でお預かりして加工するため、境内での作業は最小限に抑えられます。対応可否は現地確認後にご案内します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "障子張替え（本和紙）", price: "3,000円〜/枚", note: "格式空間向け" },
        { service: "障子張替え（強化紙）", price: "2,200円〜/枚", note: "実用空間向け" },
        { service: "多枚数・文化財対応", price: "別途見積もり", note: "現地確認後" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "障子張替えの費用・種類・流れ", href: "/shoji/replacement" },
        { label: "寺院・神社向け畳工事", href: "/business/temple-shrine" },
        { label: "襖張替え（寺社）", href: "/fusuma/for-temple-shrine" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
      ]}
      relatedPages={[
        { label: "寺院・神社向けサービス", href: "/business/temple-shrine" },
        { label: "旅館・宿泊施設の障子張替え", href: "/shoji/for-ryokan" },
        { label: "コラム：寺院・神社の畳工事", href: "/column/temple-shrine-tatami" },
      ]}
    />
  );
}
