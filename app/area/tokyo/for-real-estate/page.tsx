import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "東京都の不動産会社・仲介会社向け畳工事・原状回復｜日本畳パートナーズ",
  description:
    "東京都内の物件売買・賃貸仲介に伴う畳・ふすま・障子の張替え、原状回復工事に対応。スピーディな対応と写真付き報告書で不動産業者をサポート。",
  path: "/area/tokyo/for-real-estate",
});

const faqItems = [
  {
    q: "内覧前に畳を交換すると、成約率は上がりますか？",
    a: "畳の状態は内覧者の第一印象に大きく影響します。変色・臭い・へたりのある畳を表替えするだけで、和室の印象が大きく改善します。特に東京都内の売買物件では、購入検討者が「手入れが行き届いている」と感じることが重要です。",
    category: "general" as const,
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
    a: "はい、複数物件のまとめ依頼に対応しています。東京都内の複数エリアにまたがる物件も、物件ごとに担当が状況を確認し、一括で管理します。",
    category: "general" as const,
  },
  {
    q: "畳だけでなく、ふすま・障子も交換できますか？",
    a: "はい、畳・ふすま・障子をセットで承ることができます。和室全体を一度にリフレッシュすることで、印象が大きく変わります。",
    category: "general" as const,
  },
  {
    q: "施工後の写真や証明書類はもらえますか？",
    a: "施工前後の写真を提供しています。物件資料や売主・買主への説明資料として活用いただけます。写真付き施工報告書のご提供も対応しています。",
    category: "general" as const,
  },
  {
    q: "東京都内のどのエリアまで対応できますか？",
    a: "23区内（新宿・渋谷・世田谷・港・中央・千代田・品川・目黒・江東・墨田・豊島・板橋・練馬・杉並・中野など）および多摩地区（八王子・立川・府中・調布・三鷹・武蔵野など）に対応しています。",
    category: "general" as const,
  },
  {
    q: "不動産会社として継続的に依頼したいのですが。",
    a: "継続的なお取引をご希望の場合はご相談ください。案件ごとの個別対応ではなく、継続窓口として対応します。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、新調は15,000円〜が目安です。素材・状態により変動します。物件の状態・枚数・素材によって変動しますので、現地確認後に見積もりをお出しします。",
    category: "general" as const,
  },
  {
    q: "一括依頼の流れを教えてください。",
    a: "物件情報（所在地・和室枚数・引き渡し日）をご連絡いただければ、現地確認のスケジュールを調整します。複数物件の場合は担当が一括管理し、施工完了後に各物件の写真と請求書をまとめてご提供します。",
    category: "general" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/tokyo/for-real-estate#service`,
  name: "東京都の不動産会社向け畳工事・原状回復",
  description: "東京都内の不動産会社向け売買・賃貸仲介前の畳・内装整備・原状回復サービス",
  serviceType: "畳工事・内装整備・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "東京都" },
  },
  url: `${SITE_URL}/area/tokyo/for-real-estate`,
  areaServed: { "@type": "State", name: "東京都" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: { "@type": "State", name: "東京都" },
  url: SITE_URL,
};

export default function TokyoForRealEstatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ServicePageTemplate
        eyebrow="For Real Estate"
        title="東京都の不動産会社・仲介業者の方へ｜物件整備をスピーディに対応"
        subtitle="売買・賃貸仲介前の畳・ふすま・障子整備から原状回復まで。写真付き報告書で取引をスムーズにサポートします。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "東京都", href: "/area/tokyo" },
          { label: "不動産会社向け畳・内装整備" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>売買・賃貸前の畳交換が内覧印象に与える効果</li>
                <li>物件引き渡し期限に合わせた迅速施工の体制</li>
                <li>畳・ふすま・障子のセット対応で和室全体を整備</li>
                <li>写真付き施工報告書の提供について</li>
                <li>複数物件・一括依頼の流れ</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  不動産売買・賃貸仲介前の物件整備において、和室の畳の状態は内覧者の第一印象を大きく左右します。東京都内では物件ごとの競争が激しく、和室の清潔感・状態が成約率に影響することも少なくありません。
                </p>
                <p>
                  日本畳パートナーズでは、東京都内の不動産会社様・仲介会社様から物件単位でご依頼をお受けしています。引き渡し期限に合わせた迅速施工を心がけ、急ぎの案件にも柔軟に対応します。
                </p>
                <p>
                  畳だけでなく、ふすま・障子の張替えもセットで対応可能です。和室全体を一度に整備することで、印象改善の効果が高まります。施工前後の写真付き報告書もご提供しますので、物件資料や買主・借主への説明にお役立てください。
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
                  <p className="text-xs text-sumi/70">「入居直前に畳を新調済み」という事実は、賃貸募集時のアピールポイントになります。東京の競争市場では差別化要素として有効です。</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium text-sumi mb-1">クレームリスクの軽減</p>
                  <p className="text-xs text-sumi/70">入居前に適切な整備を行うことで、入居後の畳に関するトラブルを未然に防ぎます。</p>
                </div>
                <div className="border border-border p-4">
                  <p className="font-medium text-sumi mb-1">写真付き施工報告書</p>
                  <p className="text-xs text-sumi/70">施工前後の写真をまとめた報告書をご提供。物件資料や売主・買主への説明にそのままご活用いただけます。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "一括依頼の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">物件情報とご依頼内容のご連絡</span>
                  <p className="mt-1 ml-5 text-sumi/60">物件の所在地・引き渡し日・和室の枚数などをお知らせください。複数物件もまとめてご連絡いただけます。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・無料見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">畳の状態と施工方法をご説明します。必要に応じてふすま・障子の確認も同時に行います。</p>
                </li>
                <li>
                  <span className="font-medium">施工日程の確定</span>
                  <p className="mt-1 ml-5 text-sumi/60">引き渡し期限から逆算してスケジュールを設定します。急ぎの場合はご相談ください。</p>
                </li>
                <li>
                  <span className="font-medium">施工（写真記録含む）</span>
                  <p className="mt-1 ml-5 text-sumi/60">施工前後の写真を撮影。迅速・丁寧に仕上げます。</p>
                </li>
                <li>
                  <span className="font-medium">写真付き報告書・請求書発行</span>
                  <p className="mt-1 ml-5 text-sumi/60">写真まとめ・請求書をご提供します。複数物件の場合も物件ごとに整理してご提供します。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "売買・賃貸前の標準的な整備" },
          { service: "表替え（上位グレード）", price: "8,000円〜/枚", note: "高品質素材で印象アップ" },
          { service: "新調（建材床・薄型）", price: "15,000円〜/枚", note: "老朽化が進んでいる場合。マンション薄型対応" },
          { service: "ふすま張替え", price: "3,500円〜/枚", note: "畳とセット依頼で和室全体を整備" },
          { service: "障子張替え", price: "2,500円〜/枚", note: "同上" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "東京都の畳工事TOP", href: "/area/tokyo" },
          { label: "不動産会社向けサービス", href: "/business/real-estate" },
          { label: "東京都の原状回復", href: "/area/tokyo/restoration" },
        ]}
        relatedPages={[
          { label: "東京都の内装工事", href: "/area/tokyo/interior" },
          { label: "埼玉の不動産会社向けページ", href: "/area/saitama/for-real-estate" },
          { label: "管理会社向けページ", href: "/area/tokyo/for-property-management" },
        ]}
        canonicalPath="/area/tokyo/for-real-estate"
        serviceTypeName="不動産会社向け畳・内装整備（東京都）"
      />
    </>
  );
}
