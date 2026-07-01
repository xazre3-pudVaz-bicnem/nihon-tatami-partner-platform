import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "東京都の不動産管理会社向け畳・内装工事｜日本畳パートナーズ",
  description:
    "東京都内の管理物件の畳張替え・内装工事・原状回復に対応。複数棟・定期整備もご相談ください。",
  path: "/area/tokyo/for-property-management",
});

const faqItems = [
  {
    q: "東京都内の管理物件が複数あります。まとめて依頼できますか？",
    a: "はい、複数物件を一括でご依頼いただけます。23区内・多摩地区にまたがる物件も、物件ごとに施工内容・スケジュール・費用を管理し、担当者が窓口として対応します。",
    category: "general" as const,
  },
  {
    q: "毎月コンスタントに退去物件が発生します。継続的に依頼できますか？",
    a: "はい、継続的なお取引をお受けしています。退去のたびにご連絡いただければ、都度スムーズに対応します。東京都内の管理会社様との継続的なお取引も歓迎しています。",
    category: "general" as const,
  },
  {
    q: "施工後に写真や報告書を提供してもらえますか？",
    a: "はい、施工前後の写真をご提供しています。オーナーへの報告や精算書類の作成にお役立てください。写真付き施工報告書の形式でのご提供も対応しています。",
    category: "general" as const,
  },
  {
    q: "緊急対応（短期スケジュール）は可能ですか？",
    a: "状況によりますが、表替えであれば最短翌日対応が可能なケースもあります。東京都内での急ぎの案件はお電話でご相談ください。",
    category: "general" as const,
  },
  {
    q: "退去精算に関する費用区分の説明資料はもらえますか？",
    a: "施工前後の写真と合わせて、損傷の状態を記録します。原状回復ガイドラインに基づく費用区分の考え方についても口頭でご説明します。",
    category: "general" as const,
  },
  {
    q: "定期整備計画を組んでもらえますか？",
    a: "はい、管理物件の定期整備スケジュールについてご相談いただけます。物件の築年数・入居状況に応じて、計画的な整備のご提案も可能です。",
    category: "general" as const,
  },
  {
    q: "畳の状態が良い場合と悪い場合で施工方法を変えてもらえますか？",
    a: "はい、現地確認のうえで状態に応じた施工方法をご提案します。状態が良ければ裏返しや表替えで対応し、劣化が進んでいれば新調をご提案します。コストを抑えた対応も可能です。",
    category: "general" as const,
  },
  {
    q: "オーナーへの請求書と管理会社への請求書を分けてもらえますか？",
    a: "ご希望の請求書形式についてはご相談ください。対応可能な範囲でご対応します。",
    category: "general" as const,
  },
  {
    q: "畳以外に、ふすま・障子の張替えも依頼できますか？",
    a: "はい、ふすま・障子の張替えも承ります。畳とセットで和室全体をまとめてご依頼いただくと、効率的に整備できます。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です。素材・状態により変動します。物件の状態・枚数・素材によって変動します。",
    category: "general" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/tokyo/for-property-management#service`,
  name: "東京都の不動産管理会社向け畳・内装工事",
  description: "東京都内の不動産管理会社向け複数物件の畳張替え・内装工事・原状回復継続対応サービス",
  serviceType: "畳工事・内装工事・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "東京都" },
  },
  url: `${SITE_URL}/area/tokyo/for-property-management`,
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

export default function TokyoForPropertyManagementPage() {
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
        eyebrow="For Property Management"
        title="東京都の不動産管理会社の方へ｜管理物件の畳・内装を一括サポート"
        subtitle="退去のたびに発生する畳交換・原状回復を、一括・継続でお受けします。複数棟・定期整備もご相談ください。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "東京都", href: "/area/tokyo" },
          { label: "管理会社向け畳・内装工事" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>複数物件・棟別管理の効率化と一括受付体制</li>
                <li>施工前後の写真付き報告でオーナー対応をサポート</li>
                <li>定期整備計画のご提案</li>
                <li>緊急対応の流れと対応スピード</li>
                <li>畳・ふすま・障子のセット対応で和室整備を一本化</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  東京都内で複数の管理物件をお持ちの不動産管理会社様にとって、退去のたびに発生する畳交換・原状回復の対応は、業務負荷が高い作業の一つです。日本畳パートナーズでは、東京都内の管理会社様からの継続的な畳工事・内装工事のご依頼をお受けしています。
                </p>
                <p>
                  23区内・多摩地区にまたがる複数物件をまとめてご依頼いただける体制を整えており、担当者が一括で進捗を管理します。施工後は写真をご提供しますので、オーナーへの報告や精算書類の作成にそのままお使いいただけます。
                </p>
                <p>
                  畳だけでなく、ふすま・障子の張替えも一緒に承ることができます。和室整備に関するご依頼の窓口を一本化することで、管理会社様の業務効率化に貢献します。
                </p>
              </>
            ),
          },
          {
            heading: "管理会社様へのサポート体制",
            content: (
              <div className="space-y-3">
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">継続窓口として対応</p>
                  <p className="text-xs text-sumi/70">退去が発生するたびにご連絡いただければ、毎回見積もりを取り直す手間なくスムーズに進めます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">写真付き施工報告</p>
                  <p className="text-xs text-sumi/70">施工前後の写真を記録・提供します。オーナーへの説明や精算書類にそのままお使いいただけます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">定期整備計画のご提案</p>
                  <p className="text-xs text-sumi/70">物件の築年数・入居状況に応じて、計画的な整備スケジュールをご提案します。突発的な対応コストを抑えることができます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">畳・ふすま・障子の一括対応</p>
                  <p className="text-xs text-sumi/70">和室に関する内装整備を一括でご依頼いただけます。複数の業者に連絡する手間が省けます。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "緊急対応の流れ",
            content: (
              <>
                <p>
                  東京都内では退去が集中する繁忙期（3月・9月）に多くのご依頼をいただきます。緊急対応が必要な場合は以下の流れで対応します。
                </p>
                <ol className="list-decimal list-inside space-y-3 mt-3">
                  <li>
                    <span className="font-medium">退去連絡・物件情報の共有</span>
                    <p className="mt-1 ml-5 text-sumi/60">退去確認後、物件の所在地・和室枚数・希望施工日をご連絡ください。</p>
                  </li>
                  <li>
                    <span className="font-medium">現地確認・見積もり</span>
                    <p className="mt-1 ml-5 text-sumi/60">畳の状態を確認し、施工方法と費用をご提示します。最短翌営業日の確認を目指します。</p>
                  </li>
                  <li>
                    <span className="font-medium">施工日確定</span>
                    <p className="mt-1 ml-5 text-sumi/60">管理会社様・オーナー様のスケジュールに合わせて施工日を設定します。</p>
                  </li>
                  <li>
                    <span className="font-medium">施工・写真記録</span>
                    <p className="mt-1 ml-5 text-sumi/60">施工前後の写真を撮影しながら丁寧に施工します。</p>
                  </li>
                  <li>
                    <span className="font-medium">報告・請求書発行</span>
                    <p className="mt-1 ml-5 text-sumi/60">写真と請求書をご提供します。複数物件はまとめてご提供も可能です。</p>
                  </li>
                </ol>
              </>
            ),
          },
        ]}
        price={[
          { service: "裏返し", price: "2,500円〜/枚", note: "使用年数が短く状態が良い場合" },
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "退去後の標準的な整備" },
          { service: "表替え（上位グレード）", price: "8,000円〜/枚", note: "高品質素材を希望する場合" },
          { service: "新調（建材床・薄型）", price: "15,000円〜/枚", note: "長期入居後など劣化が進んでいる場合。マンション薄型対応" },
          { service: "ふすま張替え", price: "3,500円〜/枚", note: "畳とセット対応で和室全体を整備" },
          { service: "障子張替え", price: "2,500円〜/枚", note: "同上" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "東京都の畳工事TOP", href: "/area/tokyo" },
          { label: "管理会社向けサービス", href: "/business/property-management" },
          { label: "東京都の原状回復", href: "/area/tokyo/restoration" },
        ]}
        relatedPages={[
          { label: "埼玉の管理会社向けページ", href: "/area/saitama/for-property-management" },
          { label: "まとめ発注・一括依頼", href: "/area/saitama/bulk-order" },
          { label: "賃貸オーナー向けページ", href: "/area/tokyo/for-rental-owner" },
        ]}
        canonicalPath="/area/tokyo/for-property-management"
        serviceTypeName="管理会社向け畳・内装工事（東京都）"
      />
    </>
  );
}
