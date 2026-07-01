import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で和室をリノベーションしたい方へ｜畳・ふすま・障子の一括整備",
  description:
    "埼玉県で和室全体のリノベーション・内装整備をご検討の方へ。畳・ふすま・障子の一括整備メリット、畳からフローリングへの変更の選択肢、費用目安と施工期間を専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-renovation",
});

const faqItems = [
  {
    category: "general" as const,
    q: "和室のリノベーションはどのくらいの期間かかりますか？",
    a: "畳・ふすま・障子の一括整備であれば、通常1〜3日程度が目安です。ただし、素材の取り寄せ・部屋の大きさ・施工内容によって異なります。事前の打ち合わせと素材選定を済ませておくことでスムーズに進みます。",
  },
  {
    category: "general" as const,
    q: "畳・ふすま・障子を別々の業者に依頼してもよいですか？",
    a: "それぞれ別の業者に依頼することも可能ですが、スケジュール調整の手間・複数回の立ち合い・トータルコーディネートのしにくさというデメリットがあります。当社では畳・ふすま・障子の一括対応ができるため、トータルで統一感のある仕上がりにご対応できます。",
  },
  {
    category: "general" as const,
    q: "ふすまの張替えの種類は何がありますか？",
    a: "ふすまの表張り材には、量産クロス・和紙・本鳥の子紙など様々なグレードがあります。デザインも無地から伝統的な柄まで幅広く、部屋の雰囲気に合わせてお選びいただけます。また、ふすまの骨組みが傷んでいる場合は新調も対応します。",
  },
  {
    category: "general" as const,
    q: "障子紙はどんな種類がありますか？",
    a: "障子紙には、標準的な和紙・強化和紙（破れにくい）・アクリル入り（ペット・子ども対応）・雪見障子（下部がガラス）など様々な種類があります。用途や環境に合わせてご提案します。",
  },
  {
    category: "general" as const,
    q: "和室をフローリングに変更することも相談できますか？",
    a: "はい、和室から洋室へのリノベーションも対応しています。畳の撤去・下地調整・フローリング施工までご相談ください。ライフスタイルの変化に合わせた全面リノベーションもご提案できます。",
  },
  {
    category: "general" as const,
    q: "一括整備の場合、費用は安くなりますか？",
    a: "複数の施工を同時に行うことで、出張費・段取りのコストが効率化される場合があります。また、素材をトータルでコーディネートすることで統一感が生まれ、空間全体の印象が高まります。費用感はお見積もりでご確認ください。",
  },
  {
    category: "general" as const,
    q: "賃貸物件の和室を一括整備する場合はどうすればよいですか？",
    a: "管理会社・オーナー様からのご依頼も承っています。退去後の原状回復として畳・ふすま・障子をまとめて整備することで、次の入居者への印象を向上させます。複数物件の継続対応もご相談ください。",
  },
  {
    category: "general" as const,
    q: "古い和室の雰囲気をそのまま残したいのですが対応できますか？",
    a: "はい、伝統的な素材・デザインを活かしたリフォームにも対応しています。古い和室の骨格を残しながら、畳・ふすま・障子だけを新しくすることで、趣のある和室を維持できます。素材の選定はご要望をお聞きしてご提案します。",
  },
  {
    category: "general" as const,
    q: "施工中は部屋を使えますか？",
    a: "施工中は基本的にその部屋は使用できなくなります。施工期間は通常1〜3日が目安ですので、スケジュールに合わせてご相談ください。複数の和室がある場合は順番に施工する方法もご提案できます。",
  },
  {
    category: "general" as const,
    q: "和室全体の整備について相談できますか？",
    a: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。現在の和室の状態を確認し、畳・ふすま・障子のトータルコーディネートプランをご提案します。まずはお気軽にご相談ください。",
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

export default function TatamiRenovationPage() {
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

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "お悩み別" },
            { label: "和室リノベーション" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Renovation — Saitama
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で和室のリノベーション・全面整備をお考えの方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            古くなった和室を一新したいとき、畳・ふすま・障子をまとめて整備することで
            手間なく統一感のある空間に仕上がります。
            フローリングへの変更もご相談可能。埼玉県内の現地確認・見積もりは無料です。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            和室リノベーションの選択肢
          </h2>
          <div className="space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <p className="font-medium text-sumi mb-2">① 畳・ふすま・障子を一括整備してリフレッシュ</p>
              <p>
                和室の骨格はそのままに、内装を新しくすることで和室の良さを活かしながら
                清潔で美しい空間に生まれ変わらせる方法です。
                素材の統一・デザインのコーディネートで、シンプルな工事でも大きな印象の変化が生まれます。
                費用を抑えながら空間をリフレッシュしたい方に最適な選択肢です。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">② フローリングに変更して洋室化</p>
              <p>
                ライフスタイルの変化・家具の変更・バリアフリー対応など、
                様々な理由から和室を洋室に変更するケースも多くあります。
                畳を撤去し、下地を整えてフローリングを施工することで、
                使いやすい洋室に変更できます。当社では和室から洋室への変更工事もご相談可能です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳・ふすま・障子の一括整備のメリット
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              和室の内装を構成する3要素——畳・ふすま・障子——をまとめて整備することには、
              個別に依頼するよりも多くのメリットがあります。
            </p>
            <p>
              <strong>トータルコーディネートができる</strong><br />
              畳の色・素材、ふすま紙の柄、障子紙の種類を一度に選定することで、
              和室全体に統一感が生まれます。個別に選ぶと素材・トーンがバラバラになりがちですが、
              一括でご相談いただくことでコーディネートしやすくなります。
            </p>
            <p>
              <strong>職人を別々に呼ぶ手間が省ける</strong><br />
              畳職人・ふすま職人・障子職人を個別に手配すると、
              スケジュール調整・複数回の立ち合いが必要になります。
              当社では一括対応ができるため、連絡先が一つで済み、
              施工の段取りをまとめて進めることができます。
            </p>
            <p>
              <strong>施工期間をまとめられる</strong><br />
              別々に施工すると部屋を何度も明け渡す必要がありますが、
              一括施工であれば1〜3日程度でまとめて完成します。
              生活への影響を最小限に抑えられます。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            フローリングへの変更を選ぶケース
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              ライフスタイルの変化に合わせて、和室をフローリングの洋室に変更する選択肢もあります。
              以下のようなケースでご相談いただくことが多いです。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>子どもが成長してベッド・机を置きたいなど洋室のニーズが高まった</li>
              <li>車いす・歩行器を使用するためバリアフリーが必要になった</li>
              <li>ペットを飼い始め、畳の汚れ・傷みが気になるようになった</li>
              <li>賃貸物件の入居率改善のため洋室化したい</li>
              <li>和室が使わなくなり、収納や書斎として活用したい</li>
            </ul>
            <p>
              フローリングへの変更は畳の厚み（通常55mm程度）とフローリングの厚みの差を
              下地工事で調整する必要があります。現地の状況によって工事内容が異なりますので、
              まずは現地確認でご相談ください。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            施工の流れと期間
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              和室のリノベーション・一括整備は、以下の流れで進めます。
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li>
                <strong>ご相談・現地確認（無料）</strong><br />
                <span className="pl-5 block mt-1">
                  現在の畳・ふすま・障子の状態を確認し、ご要望をヒアリングします。
                  施工内容・費用のおおまかな見通しをお伝えします。
                </span>
              </li>
              <li>
                <strong>素材選定・お見積もり</strong><br />
                <span className="pl-5 block mt-1">
                  畳表の素材・縁のデザイン、ふすま紙・障子紙の種類をご選択いただきます。
                  確定したお見積もりをご提示します。
                </span>
              </li>
              <li>
                <strong>施工（1〜3日目安）</strong><br />
                <span className="pl-5 block mt-1">
                  素材を取り寄せ、施工日に畳・ふすま・障子を一括で仕上げます。
                  施工内容・枚数によって日数が変わります。
                </span>
              </li>
              <li>
                <strong>お引き渡し・アフターフォロー</strong><br />
                <span className="pl-5 block mt-1">
                  施工完了後にご確認いただきます。気になる点があればすぐに対応します。
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 5 — Price Table */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。サイズ・素材・状態・枚数により異なります。
            対応可否は現地確認後にご案内します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>施工内容</th>
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>費用目安</th>
                  <th className="text-left py-3 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">畳 表替え</td>
                  <td className="py-3 pr-6 text-sumi/80">4,500円〜/枚</td>
                  <td className="py-3 text-sumi/60">い草素材・標準グレード</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">ふすま 張替え</td>
                  <td className="py-3 pr-6 text-sumi/80">5,000円〜/枚</td>
                  <td className="py-3 text-sumi/60">両面・素材により変動</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">障子 張替え</td>
                  <td className="py-3 pr-6 text-sumi/80">3,500円〜/枚</td>
                  <td className="py-3 text-sumi/60">和紙・強化タイプなど選択可</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">一括整備（6畳和室目安）</td>
                  <td className="py-3 pr-6 text-sumi/80">別途お見積もり</td>
                  <td className="py-3 text-sumi/60">畳・ふすま・障子セット</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">フローリング変更</td>
                  <td className="py-3 pr-6 text-sumi/80">別途お見積もり</td>
                  <td className="py-3 text-sumi/60">下地工事含む・現地確認要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 対応可否は現地確認後にご案内します。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* Related links */}
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
              <Link href="/interior" className="text-kincya hover:underline">
                内装工事・リノベーションについて →
              </Link>
            </li>
            <li>
              <Link href="/services/fusuma" className="text-kincya hover:underline">
                ふすま・障子の張替えサービス →
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
        title="和室リノベーション・一括整備についてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。畳・ふすま・障子のトータルコーディネートをご提案します。"
      />
    </>
  );
}
