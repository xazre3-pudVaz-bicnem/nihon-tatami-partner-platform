import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `表替え・裏返し・新調の違い | 畳工事の比較 | ${SITE_NAME}`,
  description:
    "畳の表替え・裏返し・新調の違いを比較表とフローチャートで解説。それぞれの費用・工期・適したケースを整理。どの工法を選べばよいか迷っている方へ、後悔しない選び方をご案内します。FAQ付き。",
  path: "/compare/omotegae-uragaeshi-shinchou",
});

const compareFaqs: FaqItem[] = [
  {
    category: "general",
    q: "裏返しと表替えはどう違いますか？",
    a: "裏返しは今使っている畳表を裏返して再利用する施工で、費用を最も抑えられます。表替えは畳表を新しいものに交換する施工です。裏返しは使用2〜3年の比較的新しい畳表が対象で、一度しか行えません。",
  },
  {
    category: "general",
    q: "表替えと新調はどう違いますか？",
    a: "表替えは畳床（芯材）を残し、畳表と縁を新しくします。新調は畳床から作り直す完全リニューアルです。踏むと沈む・へたる・深部のカビダニがある場合は、表替えでは解決できず新調が必要です。",
  },
  {
    category: "general",
    q: "どれを選べばよいか分かりません。",
    a: "畳表が使用2〜3年なら裏返し、5〜8年または色あせ・ささくれが目立つなら表替え、踏むと沈む・床がへたっている・10年以上経過なら新調が目安です。本ページのフローチャートを参考に、迷ったら現地確認でご提案します。",
  },
  {
    category: "general",
    q: "裏返しは何回でもできますか？",
    a: "裏返しは1回のみです。一度裏返した畳表は、次は表替えまたは新調になります。畳表の両面を使い切ったら、新しい畳表への交換が必要です。",
  },
  {
    category: "price",
    q: "それぞれの費用はどのくらいですか？",
    a: "裏返しは3,300円〜/枚、表替えは5,500円〜/枚、新調は15,000円〜/枚が目安です。素材・縁・枚数・現場状況により変動します。費用を抑えたい場合は裏返し・表替え、根本的に直したい場合は新調が選択肢です。",
  },
  {
    category: "timing",
    q: "工期はどのくらい違いますか？",
    a: "裏返し・表替えは持ち帰り翌日〜2日が目安で、当日対応できる場合もあります。新調は一枚ずつ製作するため、枚数・素材により数日かかります。スケジュールは事前にご案内します。",
  },
  {
    category: "timing",
    q: "それぞれの交換サイクルの目安は？",
    a: "新しい畳を使い始めて2〜3年で裏返し、その後5〜8年で表替え、畳床がへたる10〜20年程度で新調、というサイクルが一般的です。使用環境により前後します。",
  },
  {
    category: "general",
    q: "費用を抑えるにはどの工法がよいですか？",
    a: "最も安価なのは裏返しですが、使用2〜3年の畳表が対象という条件があります。条件に合わなければ表替えが次の選択肢です。床がしっかりしていれば新調までは不要なことが多く、無駄のない方法をご提案します。",
  },
  {
    category: "general",
    q: "新調すべきサインはありますか？",
    a: "踏むと沈む・ふわふわする、畳に段差・隙間ができている、表替えしてもすぐへたる、深部までカビ・ダニが及んでいる、水濡れで床が傷んでいる、といったサインがあれば新調をご検討ください。",
  },
  {
    category: "general",
    q: "迷ったらどうすればよいですか？",
    a: "畳の状態は実際に見て触れないと正確に判断できません。現地確認は無料ですので、お気軽にご相談ください。状態を見極め、必要十分でコストに無駄のない工法をご提案します。",
  },
];

export default function ComparePage() {
  return (
    <ServicePageTemplate
      eyebrow="Compare"
      title="表替え・裏返し・新調の違い"
      subtitle="畳工事の3つの工法を比較表とフローチャートで整理。費用・工期・適したケースから、あなたに合った工法が分かります。"
      breadcrumbs={[
        { label: "比較ガイド", href: "/compare/omotegae-uragaeshi-shinchou" },
        { label: "表替え・裏返し・新調の違い" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-craftsman-01.png"
      sections={[
        {
          heading: "3つの工法の概要",
          content: (
            <ul className="space-y-2">
              <li>
                <strong className="text-sumi">裏返し</strong> — 今使っている畳表を裏返して再利用。費用が最も安い。
                使用2〜3年の畳表が対象で、一度のみ。
              </li>
              <li>
                <strong className="text-sumi">表替え</strong> — 畳床を残し、畳表と縁を新しく交換。
                費用を抑えつつ清潔感とい草の香りを回復。最も一般的なメンテナンス。
              </li>
              <li>
                <strong className="text-sumi">新調</strong> — 畳床・畳表・縁をすべて作り直す完全リニューアル。
                床のへたり・深部のカビダニを根本解決。
              </li>
            </ul>
          ),
        },
        {
          heading: "比較表",
          content: (
            <div className="bg-white border border-border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left text-xs py-3 px-4 font-normal">項目</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">裏返し</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">表替え</th>
                    <th className="text-left text-xs py-3 px-4 font-normal">新調</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-xs text-sumi/80">
                  <tr><td className="py-3 px-4 text-sumi">内容</td><td className="py-3 px-4">畳表を裏返す</td><td className="py-3 px-4">畳表・縁を交換</td><td className="py-3 px-4">床・表・縁を新調</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">費用目安</td><td className="py-3 px-4 text-kincya">3,300円〜/枚</td><td className="py-3 px-4 text-kincya">5,500円〜/枚</td><td className="py-3 px-4 text-kincya">15,000円〜/枚</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">工期</td><td className="py-3 px-4">翌日〜2日</td><td className="py-3 px-4">翌日〜2日</td><td className="py-3 px-4">数日</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">対象</td><td className="py-3 px-4">使用2〜3年</td><td className="py-3 px-4">使用5〜8年</td><td className="py-3 px-4">床の劣化時</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">回数</td><td className="py-3 px-4">1回のみ</td><td className="py-3 px-4">複数回可</td><td className="py-3 px-4">—</td></tr>
                  <tr><td className="py-3 px-4 text-sumi">沈み・へたり</td><td className="py-3 px-4">解決不可</td><td className="py-3 px-4">解決不可</td><td className="py-3 px-4">解決可</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "選び方フローチャート",
          content: (
            <div className="bg-kiji/40 border border-border p-5 space-y-3 text-sm text-sumi/80">
              <p><strong className="text-sumi">Q1. 踏むと沈む・へたる・床が傷んでいる？</strong></p>
              <p className="pl-4">→ はい：<strong className="text-sumi">新調</strong></p>
              <p className="pl-4">→ いいえ：Q2へ</p>
              <p><strong className="text-sumi">Q2. 畳表の使用年数は？</strong></p>
              <p className="pl-4">→ 2〜3年・まだ新しい：<strong className="text-sumi">裏返し</strong>（裏面が未使用の場合）</p>
              <p className="pl-4">→ 5年以上・色あせ/ささくれが目立つ：<strong className="text-sumi">表替え</strong></p>
              <p><strong className="text-sumi">Q3. すでに一度裏返している？</strong></p>
              <p className="pl-4">→ はい：<strong className="text-sumi">表替え</strong>（裏返しは1回のみ）</p>
            </div>
          ),
        },
        {
          heading: "それぞれの費用・工期",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">裏返し</strong>：3,300円〜/枚、翌日〜2日。最もコストを抑えられる</li>
              <li>— <strong className="text-sumi">表替え</strong>：5,500円〜/枚、翌日〜2日。清潔感とい草の香りを回復</li>
              <li>— <strong className="text-sumi">新調</strong>：15,000円〜/枚、数日。床から作り直す根本リニューアル</li>
            </ul>
          ),
        },
        {
          heading: "ケース別おすすめ",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">新しい畳のメンテ・費用最優先</strong>：裏返し</li>
              <li>— <strong className="text-sumi">色あせ・ささくれが気になる・来客前</strong>：表替え</li>
              <li>— <strong className="text-sumi">踏むと沈む・床がへたっている・リフォーム時</strong>：新調</li>
              <li>— <strong className="text-sumi">賃貸の原状回復</strong>：状態に応じて裏返し/表替え</li>
              <li>— <strong className="text-sumi">旅館・寺社の格上げ</strong>：新調（素材・縁にこだわる）</li>
            </ul>
          ),
        },
      ]}
      faqs={compareFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
      ]}
      relatedPages={[
        { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "畳の料金ガイド", href: "/guide/tatami-price-guide" },
        { label: "い草・和紙・樹脂畳の比較", href: "/compare/igusa-washi-resin" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
