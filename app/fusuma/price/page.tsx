import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `襖張替えの料金目安｜素材・枚数・仕様別の費用 | ${SITE_NAME}`,
  description:
    "襖張替えの料金目安を素材別・枚数別・仕様別にわかりやすく解説。発泡ウレタン・鳥の子・本鳥の子・織物など襖紙ごとの費用、両面張替えや引き手交換の追加費用、費用が変わる要因までご案内します。",
  path: "/fusuma/price",
});

const faqs: FaqItem[] = [
  { category: "price", q: "襖張替えの料金はどのように決まりますか？", a: "襖紙の種類（グレード）、片面か両面か、枚数、引き手・縁の交換有無、下地補修の有無によって決まります。同じ枚数でも素材によって費用は大きく変わります。現地確認後に正式なお見積もりをご案内します。" },
  { category: "price", q: "枚数が多いと割安になりますか？", a: "枚数がまとまると1枚あたりの単価を抑えやすくなります。旅館・寺社・賃貸の複数物件など多枚数の場合は、まとめてのお見積もりをご相談ください。" },
  { category: "price", q: "一番安く抑えるにはどの素材が良いですか？", a: "費用を最優先する場合は発泡ウレタン襖紙が手頃です。賃貸の原状回復など実用重視の場面で広く使われます。風合いや格式を求める場合は鳥の子・織物をご検討ください。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
  { category: "price", q: "追加費用が発生することはありますか？", a: "お見積もり時にご説明した内容以外の追加費用は原則発生しません。剥がした後に下地の傷みが見つかった場合など特殊な事情があるときは、必ず事前にご説明し、ご了承いただいてから進めます。" },
  { category: "general", q: "引き手の交換だけでも頼めますか？", a: "張替えと合わせての引き手交換が一般的ですが、状況に応じてご相談ください。引き手の種類により費用が変わります。" },
  { category: "general", q: "畳や障子と一緒に頼むと費用面でメリットはありますか？", a: "和室の建具をまとめて施工すると、出張・段取りが一度で済むため効率的です。畳・障子・網戸・クロスとの一括見積もりもご相談ください。" },
  { category: "price", q: "賃貸物件で大量に依頼したい場合の費用は？", a: "複数物件・多枚数の場合は、枚数・素材・スケジュールをお知らせいただければ個別にお見積もりします。継続的なお取引もご相談に応じます。" },
];

export default function FusumaPricePage() {
  return (
    <ServicePageTemplate
      eyebrow="Fusuma Price"
      title="襖張替えの料金目安"
      subtitle="素材・枚数・仕様によって費用は変動します。代表的な料金目安と、費用が変わる要因をわかりやすくご案内します。"
      breadcrumbs={[{ label: "襖張替え", href: "/fusuma" }, { label: "料金目安" }]}
      image="/images/nihon-tatami/fusuma/fusuma-craftsman-01.png"
      sections={[
        {
          heading: "襖張替えの料金は何で決まるか",
          content: (
            <>
              <p>
                襖張替えの料金は、主に「襖紙のグレード」「片面か両面か」「枚数」「引き手・縁の交換有無」「下地補修の有無」で決まります。
                同じ1枚でも、普及品の発泡ウレタン襖紙と、織物・本鳥の子などの上質素材では費用に差が出ます。
              </p>
              <p>
                以下は一般的な料金目安です。実際の費用は襖の状態・サイズ・仕様により変動します。
                正式なお見積もりは、現地確認後に無料でご案内します。
              </p>
            </>
          ),
        },
        {
          heading: "素材別の料金目安（片面）",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">発泡ウレタン襖紙</strong> — 3,000円〜/枚。普及品。賃貸の原状回復・コスト重視に。</li>
              <li><strong className="text-sumi">鳥の子紙（量産）</strong> — 4,500円〜/枚。住宅で広く選ばれる標準グレード。</li>
              <li><strong className="text-sumi">本鳥の子</strong> — 8,000円〜/枚。格式ある住宅・旅館・寺社向け。</li>
              <li><strong className="text-sumi">糸入り襖紙</strong> — 5,000円〜/枚。丈夫で破れにくい実用タイプ。</li>
              <li><strong className="text-sumi">織物襖紙</strong> — 9,000円〜/枚。高級感のある柄・色が豊富。</li>
            </ul>
          ),
        },
        {
          heading: "費用が変わる主な要因",
          content: (
            <ul className="space-y-2">
              <li>— 片面張替えか両面張替えか（両面は費用が上がります）</li>
              <li>— 枚数（まとまると1枚あたりの単価を抑えやすい）</li>
              <li>— 引き手・縁（框）の交換の有無</li>
              <li>— 下地（骨組み）の傷み・補修の必要性</li>
              <li>— 戸襖（板襖）など特殊な襖の種類</li>
              <li>— 襖紙のグレード・柄・産地</li>
            </ul>
          ),
        },
        {
          heading: "費用を抑えるポイント",
          content: (
            <p>
              費用を抑えたい場合は、実用性の高い発泡ウレタン襖紙や量産鳥の子を選ぶ、片面張替えにする、複数枚をまとめて依頼する、
              畳・障子と同時に施工して出張・段取りを一度で済ませる、といった方法があります。
              一方で、来客の多い和室や格式を重んじる空間では、素材の質を優先したほうが満足度が高くなります。
              ご予算とご要望のバランスを伺いながら最適なプランをご提案します。
            </p>
          ),
        },
      ]}
      price={[
        { service: "発泡ウレタン襖紙（片面）", price: "3,000円〜/枚", note: "普及品" },
        { service: "鳥の子紙・量産（片面）", price: "4,500円〜/枚", note: "標準" },
        { service: "糸入り襖紙（片面）", price: "5,000円〜/枚", note: "丈夫" },
        { service: "本鳥の子（片面）", price: "8,000円〜/枚", note: "上質" },
        { service: "織物襖紙（片面）", price: "9,000円〜/枚", note: "高級" },
        { service: "両面張替え・引き手交換", price: "別途見積もり", note: "" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "襖張替えの費用・種類・流れ", href: "/fusuma/replacement" },
        { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
        { label: "障子張替えの料金目安", href: "/shoji/price" },
        { label: "料金の目安（全体）", href: "/price" },
      ]}
      relatedPages={[
        { label: "賃貸物件の襖張替え", href: "/fusuma/for-rental" },
        { label: "旅館・宿泊施設の襖張替え", href: "/fusuma/for-ryokan" },
        { label: "寺院・神社の襖張替え", href: "/fusuma/for-temple-shrine" },
        { label: "コラム：襖の張替え料金", href: "/column/washi-tatami-vs-resin-tatami" },
      ]}
    />
  );
}
