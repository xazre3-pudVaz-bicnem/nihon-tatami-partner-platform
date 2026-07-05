import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の不動産会社向け畳交換・内装整備｜日本畳パートナーズ",
  description:
    "埼玉県の不動産会社様向け。売買・賃貸前の畳交換・内装整備に対応。内覧前の印象改善、複数物件の一括対応、迅速な施工で物件の価値を高めます。",
  path: "/area/saitama/for-real-estate",
});

const faqItems = [
  {
    q: "内覧前に畳を交換すると、成約率は上がりますか？",
    a: "畳の状態は内覧者の第一印象に大きく影響します。変色・臭い・へたりのある畳を表替えするだけで、和室の印象が大きく改善します。特に売買物件では、購入検討者が「手入れが行き届いている」と感じることが重要です。",
    category: "btob" as const,
  },
  {
    q: "売買前の整備として、どの施工方法を選べばよいですか？",
    a: "畳の状態次第ですが、比較的新しい畳であれば表替え、老朽化が進んでいれば新調をお勧めします。現地確認の際に状態を診断して、コストパフォーマンスの高い方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "物件引き渡しまでの期間が短くても対応できますか？",
    a: "表替えであれば最短1〜2日での対応が可能です。引き渡し日程をお知らせいただければ、逆算してスケジュールを組みます。急ぎの案件もご相談ください。",
    category: "general" as const,
  },
  {
    q: "複数の売却・賃貸物件をまとめて依頼できますか？",
    a: "はい、複数物件のまとめ依頼に対応しています。物件ごとに担当が状況を確認し、一括で管理します。",
    category: "btob" as const,
  },
  {
    q: "畳だけでなく、襖・障子も交換できますか？",
    a: "はい、畳・襖・障子をセットで承ることができます。和室全体を一度にリフレッシュすることで、印象が大きく変わります。",
    category: "general" as const,
  },
  {
    q: "施工後の写真や証明書類はもらえますか？",
    a: "施工前後の写真を提供しています。物件資料や売主・買主への説明資料として活用いただけます。",
    category: "btob" as const,
  },
  {
    q: "古い物件で畳のサイズが特殊でも対応できますか？",
    a: "京間・江戸間・中京間など各サイズに対応しています。現地採寸して正確に仕上げます。",
    category: "general" as const,
  },
  {
    q: "不動産会社として継続的に依頼したいのですが。",
    a: "継続的なお取引をご希望の場合はご相談ください。案件ごとの個別対応ではなく、継続窓口として対応します。",
    category: "btob" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、新調は15,000円〜が目安です。物件の状態・枚数・素材によって変動しますので、現地確認後に見積もりをお出しします。",
    category: "price" as const,
  },
  {
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "さいたま市・川越市・川口市・所沢市・越谷市など埼玉県全域に対応しています。",
    category: "general" as const,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉の不動産会社向け畳交換・内装整備", item: `${SITE_URL}/area/saitama/for-real-estate` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/for-real-estate#webpage`,
  name: "埼玉の不動産会社向け畳交換・内装整備｜日本畳パートナーズ",
  description: "埼玉県の不動産会社様向け。売買・賃貸前の畳交換・内装整備に対応。内覧前の印象改善、複数物件の一括対応、迅速な施工で物件の価値を高めます。",
  url: `${SITE_URL}/area/saitama/for-real-estate`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-real-estate#service`,
  name: "埼玉の不動産会社向け畳交換・内装整備",
  description: "埼玉県の不動産会社向け売買・賃貸前の畳交換・内装整備サービス",
  serviceType: "畳工事・内装整備",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-real-estate`,
  areaServed: { "@type": "State", name: "埼玉県" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ForRealEstatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate
        eyebrow="For Real Estate"
        title="埼玉の不動産会社様へ｜売買・賃貸前の畳交換・内装整備"
        subtitle="物件の第一印象を改善し、内覧者・購入者に好印象を与えます。迅速な施工対応と写真提供で、不動産取引をサポートします。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "不動産会社向け畳・内装整備" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>売買・賃貸前の畳交換が内覧印象に与える効果</li>
                <li>物件引き渡し期限に合わせた迅速施工の体制</li>
                <li>畳・襖・障子のセット対応で和室全体を整備</li>
                <li>複数物件の一括依頼に対応できる体制</li>
                <li>施工前後の写真提供について</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  不動産売買・賃貸前の物件整備において、和室の畳の状態は内覧者の第一印象を大きく左右します。変色・臭い・へたりのある畳は「古い」「汚い」という印象を与えてしまいますが、表替えや新調によって清潔感が一気に回復します。
                </p>
                <p>
                  日本畳パートナーズでは、埼玉県内の不動産会社様から物件単位でご依頼をお受けしています。引き渡し期限に合わせた迅速施工を心がけ、急ぎの案件にも柔軟に対応します。
                </p>
                <p>
                  畳だけでなく、襖・障子の張替えもセットで対応可能です。和室全体を一度に整備することで、印象改善の効果が高まります。施工前後の写真もご提供しますので、物件資料や買主への説明にお役立てください。
                </p>
              </>
            ),
          },
          {
            heading: "売買・賃貸前の整備で期待できる効果",
            content: (
              <div className="space-y-3">
                <div className="border border-border p-4">
                  <p className="font-medium text-sumi mb-1">内覧時の第一印象改善</p>
                  <p className="text-xs text-sumi/70">畳の色・香りが新しくなると、和室全体の雰囲気が変わります。「手入れが行き届いている」という印象は購入・入居の判断に影響します。</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium text-sumi mb-1">物件価値のアピール</p>
                  <p className="text-xs text-sumi/70">「入居直前に畳を新調済み」という事実は、賃貸募集時のアピールポイントになります。</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium text-sumi mb-1">クレームリスクの軽減</p>
                  <p className="text-xs text-sumi/70">入居前に適切な整備を行うことで、入居後の畳に関するトラブルを未然に防ぎます。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">物件情報とご依頼内容のご連絡</span>
                  <p className="mt-1 ml-5 text-sumi/60">物件の所在地・引き渡し日・和室の枚数などをお知らせください。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・無料見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">畳の状態と施工方法をご説明します。必要に応じて襖・障子の確認も同時に行います。</p>
                </li>
                <li>
                  <span className="font-medium">施工日程の確定</span>
                  <p className="mt-1 ml-5 text-sumi/60">引き渡し期限から逆算してスケジュールを設定します。</p>
                </li>
                <li>
                  <span className="font-medium">施工（写真記録含む）</span>
                  <p className="mt-1 ml-5 text-sumi/60">施工前後の写真を撮影。迅速・丁寧に仕上げます。</p>
                </li>
                <li>
                  <span className="font-medium">完成報告・請求書発行</span>
                  <p className="mt-1 ml-5 text-sumi/60">写真と請求書をご提供します。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "売買・賃貸前の標準的な整備" },
          { service: "表替え（上位グレード）", price: "8,000円〜/枚", note: "高品質素材で印象アップ" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "老朽化が進んでいる場合" },
          { service: "襖張替え", price: "3,500円〜/枚", note: "畳とセット依頼で和室全体を整備" },
          { service: "障子張替え", price: "2,500円〜/枚", note: "同上" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "原状回復サービス", href: "/restoration" },
          { label: "内装工事サービス", href: "/interior" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
        ]}
        relatedPages={[
          { label: "賃貸オーナー向けページ", href: "/area/saitama/for-rental-owner" },
          { label: "管理会社向けページ", href: "/area/saitama/for-property-management" },
          { label: "料金・費用目安", href: "/price" },
        ]}
        canonicalPath="/area/saitama/for-real-estate"
        serviceTypeName="不動産会社向け畳・内装整備"
      />
    </>
  );
}
