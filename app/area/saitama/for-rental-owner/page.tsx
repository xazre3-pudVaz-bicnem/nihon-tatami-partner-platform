import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の賃貸オーナー向け畳交換・原状回復｜日本畳パートナーズ",
  description:
    "埼玉県の賃貸オーナー様向け。退去後の畳交換・原状回復に迅速対応。国土交通省ガイドライン対応の費用負担区分の説明も可能。次の入居者のために、適切な整備をご提案します。",
  path: "/area/saitama/for-rental-owner",
});

const faqItems = [
  {
    category: "btob" as const,
    q: "退去後の畳交換費用はオーナー負担ですか？入居者負担ですか？",
    a: "国土交通省の原状回復ガイドラインでは、通常の生活で生じる畳の変色・傷みはオーナー負担、タバコの焦げ跡や故意・過失による損傷は入居者負担とされています。現地確認の際に損傷の状況を確認し、費用負担の考え方についてもご説明します。",
  },
  {
    category: "btob" as const,
    q: "退去後、できるだけ早く畳交換してもらいたいのですが。",
    a: "ご依頼をいただいてから最短で翌営業日の現地確認を目指しています。表替えであれば即日〜1日での施工も可能なケースがあります。空室期間を短縮したい場合はご相談ください。",
  },
  {
    category: "general" as const,
    q: "入居者が喫煙していた部屋の畳はどう対応できますか？",
    a: "タバコの臭いや変色が激しい場合は、表替えや新調で新しいい草に交換することで大幅に改善できます。下地（床）にまで臭いが染み込んでいる場合は消臭処理と組み合わせた対応をご提案することもあります。",
  },
  {
    category: "btob" as const,
    q: "複数の部屋・物件をまとめて依頼できますか？",
    a: "はい、複数室・複数物件のまとめ依頼をお受けしています。退去が集中する繁忙期でも、スケジュールを調整してご対応します。継続的な取引をご希望の場合はご相談ください。",
  },
  {
    category: "btob" as const,
    q: "施工後に写真や報告書を出してもらえますか？",
    a: "施工前・施工後の写真をご提供しています。退去精算や入居者への説明資料として活用できます。",
  },
  {
    category: "timing" as const,
    q: "長年入居者がいた部屋の畳はどの施工方法がよいですか？",
    a: "入居期間が10年以上の場合は畳床も劣化していることが多く、新調をおすすめするケースが多いです。現地で状態を確認し、費用対効果を踏まえてご提案します。",
  },
  {
    category: "general" as const,
    q: "古い物件でサイズが特殊な畳でも対応できますか？",
    a: "はい、京間・江戸間・中京間など各サイズに対応しています。古い物件でサイズが微妙に異なる場合でも、現地採寸してぴったりに仕上げます。",
  },
  {
    category: "general" as const,
    q: "ペットを飼っていた入居者の退去後、畳が傷んでいます。",
    a: "爪による傷・尿による臭いや変色がある場合、表替えや新調で改善できます。程度が激しい場合は下地の処理も含めたご提案をします。",
  },
  {
    category: "price" as const,
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です。損傷状況や使用素材によって変動しますので、現地確認後に正確なお見積もりをお出しします。",
  },
  {
    category: "general" as const,
    q: "対応エリアを教えてください。",
    a: "さいたま市・川越市・川口市・越谷市・所沢市・熊谷市など埼玉県全域に対応しています。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-rental-owner#service`,
  name: "埼玉の賃貸オーナー向け畳交換・原状回復",
  description: "埼玉県の賃貸物件オーナー向け退去後の畳交換・原状回復サービス",
  serviceType: "畳工事・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-rental-owner`,
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "賃貸オーナー向け畳交換", item: `${SITE_URL}/area/saitama/for-rental-owner` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/for-rental-owner#webpage`,
  name: "埼玉の賃貸オーナー向け畳交換・原状回復",
  description:
    "埼玉県の賃貸オーナー様向け。退去後の畳交換・原状回復に迅速対応。国土交通省ガイドライン対応の費用負担区分の説明も可能。",
  url: `${SITE_URL}/area/saitama/for-rental-owner`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
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

export default function ForRentalOwnerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageTemplate
        eyebrow="For Rental Owners"
        title="埼玉の賃貸オーナー様へ｜退去後の畳交換・原状回復のご相談"
        subtitle="空室期間を最小化し、次の入居者に良い印象を。退去後の畳の状態確認から施工まで、迅速・丁寧に対応します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "賃貸オーナー向け畳交換" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>退去後の畳交換・原状回復の費用負担の考え方</li>
                <li>入居者負担・オーナー負担の区分（ガイドライン解説）</li>
                <li>迅速施工で空室期間を短くする対応フロー</li>
                <li>複数物件・継続案件の受け付け体制</li>
                <li>施工前後の写真提供について</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  賃貸物件の退去後は、次の入居者のために素早く適切な状態に整えることが重要です。日本畳パートナーズでは、埼玉県内の賃貸オーナー様からのご依頼に迅速対応しています。
                </p>
                <p>
                  畳の状態確認・費用負担の区分説明・施工・写真報告まで、ワンストップで承ります。国土交通省の原状回復ガイドラインに沿った費用負担の考え方についても、わかりやすくご説明しますので、入居者とのやり取りでお困りの際もご相談ください。
                </p>
                <p>
                  退去が重なる繁忙期でも、スケジュール調整を柔軟に対応。複数室・複数物件をまとめてご依頼いただくことも可能です。継続的にお取引いただける賃貸オーナー様のご相談もお待ちしています。
                </p>
              </>
            ),
          },
          {
            heading: "原状回復ガイドラインと費用負担の区分",
            content: (
              <>
                <p>
                  国土交通省の「原状回復をめぐるトラブルとガイドライン」では、退去時の費用負担について以下のように整理されています。
                </p>
                <div className="mt-3 space-y-2">
                  <div className="bg-kiji/40 border border-border p-4">
                    <p className="font-medium text-sumi mb-1">オーナー負担（自然損耗・経年劣化）</p>
                    <ul className="list-disc list-inside text-sumi/70 space-y-1 text-xs">
                      <li>日当たりによる畳の変色・日焼け</li>
                      <li>通常の生活による畳の傷みやへたり</li>
                      <li>年数経過による劣化</li>
                    </ul>
                  </div>
                  <div className="bg-kiji/40 border border-border p-4">
                    <p className="font-medium text-sumi mb-1">入居者負担（故意・過失・善管注意義務違反）</p>
                    <ul className="list-disc list-inside text-sumi/70 space-y-1 text-xs">
                      <li>タバコの焦げ跡・煤による変色</li>
                      <li>ペットによる引っかき傷・尿汚れ</li>
                      <li>水濡れ放置によるカビ・腐食</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-3 text-xs text-sumi/60">
                  ※ 実際の費用負担の判断は個別の状況によります。現地確認の際にご相談ください。
                </p>
              </>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">退去後、すぐにご連絡</span>
                  <p className="mt-1 ml-5 text-sumi/60">退去確認後、お電話またはフォームでご連絡ください。最短翌営業日の現地確認を目指します。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・損傷状況の確認</span>
                  <p className="mt-1 ml-5 text-sumi/60">畳の状態（変色・損傷・カビ等）を確認。費用負担区分の説明を含む無料見積もりをご提供します。</p>
                </li>
                <li>
                  <span className="font-medium">施工方法・スケジュール確認</span>
                  <p className="mt-1 ml-5 text-sumi/60">表替え・新調など施工方法と施工日を決定します。</p>
                </li>
                <li>
                  <span className="font-medium">施工</span>
                  <p className="mt-1 ml-5 text-sumi/60">迅速・丁寧に施工。施工前後の写真を記録します。</p>
                </li>
                <li>
                  <span className="font-medium">写真・書類の提供・請求</span>
                  <p className="mt-1 ml-5 text-sumi/60">施工前後の写真と請求書をご提供。退去精算の資料としてご利用いただけます。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "裏返し", price: "2,500円〜/枚", note: "比較的状態が良く、使用年数が短い場合" },
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "標準的な退去後の畳交換" },
          { service: "表替え（上位グレード）", price: "8,000円〜/枚", note: "高品質い草・国産素材使用" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "長期入居後など畳床が傷んでいる場合" },
          { service: "廃棄処分", price: "別途見積もり", note: "古い畳の廃棄処理" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "原状回復サービス", href: "/restoration" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
          { label: "法人・管理会社向け", href: "/business" },
        ]}
        relatedPages={[
          { label: "管理会社向けページ", href: "/area/saitama/for-property-management" },
          { label: "不動産会社向けページ", href: "/area/saitama/for-real-estate" },
          { label: "料金・費用目安", href: "/price" },
        ]}
        canonicalPath="/area/saitama/for-rental-owner"
        serviceTypeName="賃貸原状回復・畳交換"
      />
    </>
  );
}
