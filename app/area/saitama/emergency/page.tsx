import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳・内装工事を急ぎで依頼したい方へ｜緊急対応の流れ",
  description:
    "埼玉県で畳工事・内装工事を急ぎで相談したい方へ。緊急性が高いケース（水濡れ/退去前/入居直前）、相談から施工までの最短フロー、対応可否の確認方法を専門家が解説。まずはお電話ください。",
  path: "/area/saitama/emergency",
});

const faqItems = [
  {
    category: "general" as const,
    q: "急ぎで畳工事を依頼したい場合、まず何をすればよいですか？",
    a: "まずはお電話でご連絡ください。状況をお聞きして、対応できるスケジュールをお伝えします。状況によっては当日または翌日の現地確認が可能なこともあります。",
  },
  {
    category: "general" as const,
    q: "水濡れ・浸水後の畳は急いで交換する必要がありますか？",
    a: "水分を含んだ畳はカビの発生リスクが高まります。濡れた状態が続くほどカビの繁殖が進み、床下まで影響が及ぶ可能性があります。可能な限り早めにご連絡ください。まずは状態を確認してから対応方針をご案内します。",
  },
  {
    category: "general" as const,
    q: "退去立会いの前日に依頼することは可能ですか？",
    a: "前日のご依頼については、スケジュールの空き状況によります。直前のご依頼は対応が難しい場合もありますが、まずはお電話でご相談ください。状況に応じて可能な範囲でご対応します。",
  },
  {
    category: "general" as const,
    q: "急ぎの場合、通常より費用が高くなりますか？",
    a: "緊急料金として費用が上乗せになることは基本的にありません。ただし素材の取り寄せが必要な場合など、通常より費用がかかる場合は事前にご説明します。見積もり後にご承認いただいてから施工を進めます。",
  },
  {
    category: "general" as const,
    q: "急ぎでも品質は変わりませんか？",
    a: "急いでいる場合でも、施工の手を抜くことはしません。丁寧な作業を心がけています。ただし、急ぎのため素材の選択肢が限られる場合や、乾燥時間の確保が難しい場合があります。状況はご連絡時にご説明します。",
  },
  {
    category: "general" as const,
    q: "急ぎ対応が難しいケースはどのような場合ですか？",
    a: "素材の取り寄せが必要な場合（特殊サイズ・特殊素材など）や、繁忙期（春・秋の引越しシーズン）は対応に時間がかかることがあります。また遠方の物件や広範囲の施工は日程調整に時間が必要な場合があります。まずはご連絡いただければ対応可否をお伝えします。",
  },
  {
    category: "general" as const,
    q: "入居直前でも畳の施工は間に合いますか？",
    a: "入居日の1週間前以上あれば対応できる可能性が高いです。それ以内の場合も、状況によっては対応できることがあります。まずはお電話でご相談ください。スケジュールの空き状況と素材の在庫を確認してお答えします。",
  },
  {
    category: "general" as const,
    q: "急ぎの相談でも現地確認は必要ですか？",
    a: "正確な状態確認と見積もりのために、原則として現地確認をお願いしています。急ぎの場合はできるだけ早く現地確認に伺い、その場でお見積もりをお出しして即日〜翌日の施工開始を目指します。",
  },
  {
    category: "general" as const,
    q: "費用の目安を教えてください。",
    a: "表替えは4,500円〜/枚、新調は15,000円〜/枚、ふすまは5,000円〜/枚、障子は3,500円〜/枚が目安です。素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "埼玉県のどのエリアでも対応できますか？",
    a: "埼玉県内全域を対応エリアとしています。さいたま市・川越市・川口市・越谷市・熊谷市・所沢市・春日部市などの主要エリアを中心に対応しています。エリアによっては移動時間が必要なため、急ぎの場合は所在地もお知らせください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: { "@type": "State", name: "埼玉県" },
  url: SITE_URL,
};

export default function EmergencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "急ぎの畳・内装工事" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Emergency — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳工事・内装工事を急ぎで相談したい方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            水濡れ後のカビリスク、退去前の原状回復、入居直前の整備など、急いで対応が必要な場合はまずお電話ください。状況をお聞きして、対応できるスケジュールをご案内します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 緊急性が高い代表的なケース ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            緊急性が高い代表的なケース
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <h3 className="text-sumi font-medium mb-2">① 水濡れ・浸水後のカビ発生リスク</h3>
              <p>
                雨漏り・水道管のトラブル・洗濯機の排水詰まりなどで畳が水濡れした場合、放置すると短期間でカビが繁殖します。カビは一度発生すると畳床（芯材）や床下まで浸透することがあり、早期対応が被害を最小限に抑えます。まずはお電話でご連絡ください。状態を確認して対応策をご案内します。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">② 退去・立会い前の原状回復</h3>
              <p>
                退去立会い前に畳の状態を整えたいというご相談は多くいただきます。退去日が決まっている場合は、できるだけ早めにご連絡ください。スケジュールの空き状況を確認して、対応できる日程をお伝えします。立会い直前のご相談は対応が難しい場合もありますが、まずはご連絡ください。
              </p>
            </div>
            <div>
              <h3 className="text-sumi font-medium mb-2">③ 入居直前の整備</h3>
              <p>
                入居日が決まっているが畳の状態が気になる、前の住人の臭いや汚れが残っているといったケースです。入居日の1週間前以上のご相談であれば対応できる可能性が高いです。それ以内の場合も、素材の在庫状況によっては対応できることがあります。まずはお電話でご確認ください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── 相談から施工までの最短フロー ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            相談から施工までの最短フロー
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p className="text-kincya text-xs font-medium tracking-wide">
              ※ 対応可否・スケジュールは状況によって異なります。まずはご連絡ください。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お電話でご相談（即日）：</strong>
                状況・物件の場所・希望のスケジュールをお聞きします。対応できるかどうかを確認してお伝えします。
              </li>
              <li>
                <strong>現地確認（当日または翌日）：</strong>
                状況が許す限り、できるだけ早く現地に伺います。畳の状態・枚数・施工内容を確認します。
              </li>
              <li>
                <strong>即日お見積もり：</strong>
                現地確認のその場でお見積もりをお出しします。ご承認いただき次第、施工の手配を進めます。
              </li>
              <li>
                <strong>スケジュール確認・施工：</strong>
                素材の在庫・スタッフの空き状況を確認して施工日を設定します。
              </li>
              <li>
                <strong>完了・引き渡し：</strong>
                仕上がりをご確認いただいて完了です。
              </li>
            </ol>
          </div>
        </section>

        {/* ─── 急ぎ対応が難しいケースについて ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            急ぎ対応が難しいケースについて
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              状況によっては、ご希望のスケジュールに対応できない場合があります。あらかじめご理解いただけると幸いです。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>素材の取り寄せが必要な場合：</strong>特殊なサイズ・素材は在庫がない場合があり、取り寄せに数日〜1週間程度かかることがあります。
              </li>
              <li>
                <strong>繁忙期（春・秋）：</strong>退去・入居が集中する時期は施工スタッフのスケジュールが埋まりやすいです。早めのご連絡をおすすめします。
              </li>
              <li>
                <strong>施工規模が大きい場合：</strong>多室・大量の畳の施工は1日では完了しないことがあります。スケジュールは現地確認後にご案内します。
              </li>
            </ul>
            <p>
              いずれの場合も、まずはご連絡いただくことで、対応の可否と現実的なスケジュールをお伝えできます。ご連絡をためらわず、まずはお電話ください。
            </p>
          </div>
        </section>

        {/* ─── 急ぎでも品質は変えない方針 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            急ぎでも品質は変えない方針
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              急ぎの依頼であっても、施工の品質を落とすことはしません。畳の張り方・素材の確認・仕上げの丁寧さは通常の施工と変わりません。急いでいるからこそ、手早くかつ丁寧に仕上げることを心がけています。
            </p>
            <p>
              ただし、急ぎのため選べる素材の選択肢が限られる場合や、乾燥時間が十分に確保できない場合は、その点をあらかじめご説明します。ご不明な点はお気軽にご質問ください。
            </p>
          </div>
        </section>

        {/* ─── 費用目安テーブル ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">施工内容</th>
                  <th className="px-4 py-3 font-normal">費用目安（1枚あたり）</th>
                  <th className="px-4 py-3 font-normal">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（一般い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">在庫状況により対応可能な場合あり</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換。状況により日数が必要</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">ふすま張替え</td>
                  <td className="px-4 py-3">5,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">紙の種類・状態により変動</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">障子張替え</td>
                  <td className="px-4 py-3">3,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">障子紙の種類により変動</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── 関連ページ ─── */}
        <section>
          <h2
            className="text-xl text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/area/saitama" className="text-kincya hover:underline">
                埼玉県の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/tatami" className="text-kincya hover:underline">
                埼玉県の畳工事サービス →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/problems/tatami-flood-damage" className="text-kincya hover:underline">
                埼玉の畳の水濡れ・浸水被害について →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/before-move-in" className="text-kincya hover:underline">
                入居前の畳工事について →
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-kincya hover:underline">
                お問い合わせ・無料見積もり →
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <CTASection
        title="急ぎの畳・内装工事はお電話でご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。まずはご連絡いただければ対応可否をお伝えします。"
      />
    </>
  );
}
