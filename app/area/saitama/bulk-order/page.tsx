import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で複数物件・大量発注の畳工事｜管理会社・オーナー向け",
  description:
    "埼玉県で複数物件・大量発注の畳工事をお考えの管理会社・オーナー様へ。複数棟の同時進行・写真付き施工報告書・透明な見積もりで継続的にご対応します。",
  path: "/area/saitama/bulk-order",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  "@id": `${SITE_URL}/#local-business`,
};

const faqs = [
  {
    category: "btob" as const,
    q: "複数物件の畳工事を一括で依頼できますか？",
    a: "はい、対応しています。物件ごとの状況確認・スケジュール調整・施工をまとめてご依頼いただけます。窓口を一本化することで、連絡のやりとりが効率的になります。まずはご相談ください。",
  },
  {
    category: "btob" as const,
    q: "施工報告書や写真はもらえますか？",
    a: "施工前後の写真および作業内容を記載した報告書をご提供しています。遠隔管理されているオーナー様や管理会社様が貸主・借主への説明資料として活用いただける形式で提出します。詳細はお問い合わせください。",
  },
  {
    category: "btob" as const,
    q: "見積書・請求書を一括で発行してもらえますか？",
    a: "法人向けの正式な見積書・請求書を発行しています。物件ごと・工事種別ごとに内訳を明示した書類でご提供します。請求書の一括発行についてはご要望をお聞きして対応をご案内します。",
  },
  {
    category: "btob" as const,
    q: "退去・入居のタイミングに合わせた施工は可能ですか？",
    a: "はい、退去日・入居日に合わせたスケジュールで施工をご提案します。空き期間を活用した効率的な施工計画を立てることが可能ですので、退去予定日・入居予定日をお伝えください。",
  },
  {
    category: "btob" as const,
    q: "物件ごとに施工内容が異なっても対応できますか？",
    a: "はい、物件によって表替え・裏返し・新調など施工内容が異なる場合も対応しています。各物件の状態を現地確認したうえで、最適な施工内容をご提案します。",
  },
  {
    category: "btob" as const,
    q: "オーナーが現地にいなくても施工を進められますか？",
    a: "鍵のご手配をいただければ、オーナー様が現地不在でも施工を進めることが可能です。施工完了後の状況は写真付き報告書でご報告します。",
  },
  {
    category: "timing" as const,
    q: "多忙期（春・秋）は予約が混雑しますか？",
    a: "退去・入居が集中する春（2〜4月）と秋（9〜10月）は依頼が集中しやすい時期です。余裕を持ったスケジュールでご相談いただけると、ご希望の日程に対応しやすくなります。",
  },
  {
    category: "price" as const,
    q: "複数物件を依頼する場合の費用の目安はどのくらいですか？",
    a: "費用は物件ごとの畳の状態・施工内容・枚数によって異なります。各物件の現地確認を行い、物件ごとにお見積もりをご提示します。表替え4,500円〜/枚、裏返し2,500円〜/枚が基本の目安です。まとめ依頼で効率化できる部分についてはご相談ください。",
  },
  {
    category: "btob" as const,
    q: "継続的に依頼できますか？退去のたびに毎回連絡する必要はありますか？",
    a: "継続的なお取引を歓迎しています。退去のたびにご連絡いただければスピーディに対応します。担当者との継続的な関係で物件の状態を把握しやすい環境を構築でき、長期的なコスト最適化につながります。",
  },
  {
    category: "btob" as const,
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "さいたま市・川越市・川口市・越谷市・熊谷市・所沢市・春日部市など埼玉県内全域に対応しています。複数物件が複数エリアにまたがる場合もご相談ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function BulkOrderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          items={[
            { label: "エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "複数物件・大量発注" },
          ]}
        />
      </div>

      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Bulk Order — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl font-medium leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉で複数物件・大量発注の畳工事をご検討の方へ
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            管理会社・大家・不動産オーナーの方で、複数の賃貸物件の畳・内装工事をまとめて依頼したい方へ。窓口を一本化し、スケジュール管理・写真付き施工報告まで対応します。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* 複数物件一括依頼のメリット */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            複数物件一括依頼のメリット
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              複数業者への個別連絡・個別スケジュール調整が不要です。一つの窓口でまとめて依頼することで、管理の手間を大幅に削減できます。退去スケジュールに合わせた柔軟な対応が可能です。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>連絡窓口が一本化されるため、やりとりの手間が激減</li>
              <li>物件ごとのスケジュールを一括で調整・管理できる</li>
              <li>各物件の施工状況を統一したフォーマットで把握しやすくなる</li>
              <li>退去・入居タイミングに合わせた計画的な施工が立てやすい</li>
              <li>物件ごとに業者を探し直す手間が省ける</li>
            </ul>
          </div>
        </section>

        {/* 管理会社・大家向けの対応体制 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            管理会社・大家向けの対応体制
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              複数棟・複数室の同時進行に対応します。退去のタイミングに合わせたスピード施工で、物件ごとの状態・費用を個別に管理して報告します。担当者との継続的な関係で現場状況を把握しやすい環境を構築します。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-kiji/30 p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">同時進行対応</h3>
                <p className="text-xs text-sumi/70">
                  複数棟・複数室の同時並行施工に対応。退去スケジュールが重なる場合も効率的に対応します。
                </p>
              </div>
              <div className="bg-kiji/30 p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">スピード施工</h3>
                <p className="text-xs text-sumi/70">
                  退去後から次の入居までの空き期間を最大限活用した、迅速な施工スケジュールをご提案します。
                </p>
              </div>
              <div className="bg-kiji/30 p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">物件別管理・報告</h3>
                <p className="text-xs text-sumi/70">
                  物件ごとの状態・施工内容・費用を個別に管理し、写真付き報告書でご報告します。
                </p>
              </div>
              <div className="bg-kiji/30 p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">継続的な関係構築</h3>
                <p className="text-xs text-sumi/70">
                  担当者との継続的なお取引で物件状態を継続把握し、適切な整備タイミングをご提案できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 写真付き施工報告書 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            写真付き施工報告書
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              施工前・施工後の写真を撮影し、作業内容とともに報告書として提出します。管理会社が入居者との費用負担確認に使用できる資料として活用いただけます。
            </p>
            <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5">
              <p className="text-sumi/90 text-sm font-medium mb-2">報告書に含まれる情報</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-sumi/70">
                <li>施工前・施工後の状態写真</li>
                <li>施工内容の詳細（使用素材・施工種別）</li>
                <li>物件情報・部屋番号・施工日</li>
                <li>費用明細（物件ごと・工事種別ごとの内訳）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 継続案件としてのお付き合い */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            継続案件としてのお付き合い
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              退去のたびに毎回業者を探す手間がなくなります。物件の状態を継続して把握している業者がいることで、適切なタイミングでの施工提案が可能です。長期的なコスト最適化につながります。
            </p>
            <p>
              管理会社様・オーナー様との継続的な関係では、各物件の状態の変化を継続把握できます。「この物件はそろそろ表替えの時期」「あの物件の畳床は状態が良い」といった情報が蓄積されることで、計画的な整備提案が可能になります。
            </p>
          </div>
        </section>

        {/* 費用・見積もりの透明化 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            費用・見積もりの透明化
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              物件ごと・工事種別ごとの費用を明示した見積もりを提出します。追加費用が発生する場合は事前に説明し了承を得てから進めます。複数物件のまとめ依頼は効率化できる部分について相談に応じます。
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="p-3 text-left font-normal">施工種別</th>
                    <th className="p-3 text-left font-normal">費用目安（/枚）</th>
                    <th className="p-3 text-left font-normal">備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">裏返し</td>
                    <td className="p-3 text-kincya font-medium">2,500円〜</td>
                    <td className="p-3 text-sumi/70">状態が比較的良い場合</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え（い草）</td>
                    <td className="p-3 text-kincya font-medium">4,500円〜</td>
                    <td className="p-3 text-sumi/70">い草表面の張替え</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">表替え（和紙）</td>
                    <td className="p-3 text-kincya font-medium">6,500円〜</td>
                    <td className="p-3 text-sumi/70">耐光性・撥水性重視</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors border-t border-border">
                    <td className="p-3">新調</td>
                    <td className="p-3 text-kincya font-medium">15,000円〜</td>
                    <td className="p-3 text-sumi/70">畳床ごと新しく</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/50">※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。</p>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* 関連ページ */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-3">
            {[
              { href: "/area/saitama/for-property-management", label: "管理会社向け畳工事" },
              { href: "/area/saitama/vacancy-measures", label: "空室対策に畳工事を活用する" },
              { href: "/area/saitama/corporate", label: "法人・企業向け畳工事" },
              { href: "/contact", label: "お問い合わせ・無料見積もり" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center justify-between p-4 border border-border hover:border-kincya/50 hover:bg-kiji/10 transition-all duration-200 group"
                >
                  <span className="text-sm text-sumi group-hover:text-kincya transition-colors">{label}</span>
                  <span className="text-kincya text-xs">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <CTASection
        title="複数物件・大量発注についてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。物件数・施工内容を確認して対応可能かご案内します。"
      />
    </>
  );
}
