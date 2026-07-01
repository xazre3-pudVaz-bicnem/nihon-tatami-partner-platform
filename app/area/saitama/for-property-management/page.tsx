import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の管理会社向け畳交換・原状回復｜日本畳パートナーズ",
  description:
    "埼玉県の不動産管理会社様向け。複数物件の畳交換・原状回復を継続的にお受けします。写真付き施工報告、スケジュール調整、一括対応で管理業務をサポートします。",
  path: "/area/saitama/for-property-management",
});

const faqItems = [
  {
    q: "管理物件が複数あります。まとめて依頼できますか？",
    a: "はい、複数物件を一括でご依頼いただけます。物件ごとに施工内容・スケジュール・費用を管理し、担当者が窓口として対応します。",
    category: "btob" as const,
  },
  {
    q: "毎月コンスタントに退去物件が発生します。継続的に依頼できますか？",
    a: "はい、継続的なお取引をお受けしています。退去のたびにご連絡いただければ、都度スムーズに対応します。",
    category: "btob" as const,
  },
  {
    q: "施工後に写真や報告書を提供してもらえますか？",
    a: "はい、施工前後の写真をご提供しています。オーナーへの報告や精算書類の作成にお役立てください。",
    category: "btob" as const,
  },
  {
    q: "緊急対応（短期スケジュール）は可能ですか？",
    a: "状況によりますが、表替えであれば最短翌日対応が可能なケースもあります。急ぎの場合はお電話でご相談ください。",
    category: "general" as const,
  },
  {
    q: "退去精算に関する費用区分の説明資料はもらえますか？",
    a: "施工前後の写真と合わせて、損傷の状態を記録します。原状回復ガイドラインに基づく費用区分の考え方についても口頭でご説明します。",
    category: "btob" as const,
  },
  {
    q: "畳の状態が良い場合と悪い場合で施工方法を変えてもらえますか？",
    a: "はい、現地確認のうえで状態に応じた施工方法をご提案します。状態が良ければ裏返しや表替えで対応し、劣化が進んでいれば新調をご提案します。",
    category: "general" as const,
  },
  {
    q: "オーナーへの請求書と管理会社への請求書を分けてもらえますか？",
    a: "ご希望の請求書形式についてはご相談ください。対応可能な範囲でご対応します。",
    category: "btob" as const,
  },
  {
    q: "埼玉県内であればどのエリアでも対応できますか？",
    a: "さいたま市・川越市・川口市・越谷市・熊谷市など埼玉県全域に対応しています。",
    category: "general" as const,
  },
  {
    q: "畳以外に、襖・障子の張替えも依頼できますか？",
    a: "はい、襖・障子の張替えも承ります。畳とセットで和室全体をまとめてご依頼いただくと、効率的に整備できます。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です。物件の状態・枚数・素材によって変動します。",
    category: "price" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-property-management#service`,
  name: "埼玉の管理会社向け畳交換・原状回復",
  description: "埼玉県の不動産管理会社向け複数物件の畳交換・原状回復継続対応サービス",
  serviceType: "畳工事・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-property-management`,
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

export default function ForPropertyManagementPage() {
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
        title="埼玉の管理会社様へ｜継続案件・複数物件の畳交換相談窓口"
        subtitle="退去のたびに発生する畳交換・原状回復を、一括・継続でお受けします。写真付き報告でオーナーへの対応もスムーズに。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "管理会社向け畳交換" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>複数物件・継続案件の一括受付体制</li>
                <li>施工前後の写真付き報告でオーナー対応をサポート</li>
                <li>退去ごとの迅速施工でリードタイムを短縮</li>
                <li>畳・襖・障子のセット対応で和室整備を一本化</li>
                <li>費用目安と施工の流れ</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  不動産管理会社様にとって、退去のたびに発生する畳交換・原状回復の対応は、業務負荷が高い作業の一つです。日本畳パートナーズでは、埼玉県内の管理会社様からの継続的な畳工事のご依頼をお受けしています。
                </p>
                <p>
                  複数物件をまとめてご依頼いただける体制を整えており、担当者が一括で進捗を管理します。施工後は写真をご提供しますので、オーナーへの報告や精算書類の作成にそのままお使いいただけます。
                </p>
                <p>
                  畳だけでなく、襖・障子の張替えも一緒に承ることができます。和室整備に関するご依頼の窓口を一本化することで、管理会社様の業務効率化に貢献します。
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
                  <p className="font-medium text-sumi mb-1">状態に応じた施工提案</p>
                  <p className="text-xs text-sumi/70">現地確認のうえ、裏返し・表替え・新調など最適な施工方法をご提案します。コストを抑えた対応も可能です。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">畳・襖・障子の一括対応</p>
                  <p className="text-xs text-sumi/70">和室に関する内装整備を一括でご依頼いただけます。複数の業者に連絡する手間が省けます。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">退去連絡・物件情報の共有</span>
                  <p className="mt-1 ml-5 text-sumi/60">退去確認後、物件の所在地・和室枚数・希望施工日をご連絡ください。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">畳の状態を確認し、施工方法と費用をご提示します。</p>
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
                  <p className="mt-1 ml-5 text-sumi/60">写真と請求書をご提供します。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "裏返し", price: "2,500円〜/枚", note: "使用年数が短く状態が良い場合" },
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "退去後の標準的な整備" },
          { service: "表替え（上位グレード）", price: "8,000円〜/枚", note: "高品質素材を希望する場合" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "長期入居後など劣化が進んでいる場合" },
          { service: "襖張替え", price: "3,500円〜/枚", note: "畳とセット対応で和室全体を整備" },
          { service: "障子張替え", price: "2,500円〜/枚", note: "同上" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "原状回復サービス", href: "/restoration" },
          { label: "法人・施設向け", href: "/business" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
        ]}
        relatedPages={[
          { label: "賃貸オーナー向けページ", href: "/area/saitama/for-rental-owner" },
          { label: "不動産会社向けページ", href: "/area/saitama/for-real-estate" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
        canonicalPath="/area/saitama/for-property-management"
        serviceTypeName="管理会社向け畳交換・原状回復"
      />
    </>
  );
}
