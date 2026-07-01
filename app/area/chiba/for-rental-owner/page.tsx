import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "千葉県の賃貸オーナー・大家向け畳張替え・原状回復｜日本畳パートナーズ",
  description:
    "千葉県の賃貸物件の畳・原状回復に対応。東京湾岸・内陸部の幅広い賃貸物件に対応し、空室期間短縮をサポート。",
  path: "/area/chiba/for-rental-owner",
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
    a: "ご依頼をいただいてから最短で翌営業日の現地確認を目指しています。表替えであれば即日〜1日での施工も可能なケースがあります。千葉県内の空室期間を短縮したい場合はご相談ください。",
  },
  {
    category: "general" as const,
    q: "浦安・船橋の湾岸エリアの賃貸物件に対応できますか？",
    a: "はい、浦安市・船橋市など東京湾岸エリアの賃貸物件に対応しています。湾岸エリアは海風の影響で湿気が高く、畳のカビ・劣化が進みやすい傾向があります。状態を確認した上で適切な施工をご提案します。",
  },
  {
    category: "btob" as const,
    q: "複数の部屋・物件をまとめて依頼できますか？",
    a: "はい、複数室・複数物件のまとめ依頼をお受けしています。退去が集中する繁忙期でも、スケジュールを調整してご対応します。千葉県内の継続的な取引をご希望の場合はご相談ください。",
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
    a: "はい、京間・江戸間・中京間など各サイズに対応しています。千葉県内の古い物件でサイズが微妙に異なる場合でも、現地採寸してぴったりに仕上げます。",
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
    q: "千葉県内のどのエリアまで来てもらえますか？",
    a: "千葉市・船橋市・松戸市・柏市・市川市・浦安市・成田市・木更津市など千葉県全域に対応しています。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/chiba/for-rental-owner#service`,
  name: "千葉県の賃貸オーナー向け畳交換・原状回復",
  description: "千葉県の賃貸物件オーナー向け退去後の畳交換・原状回復サービス",
  serviceType: "畳工事・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: [{ "@type": "State", "name": "千葉県" }],
  },
  url: `${SITE_URL}/area/chiba/for-rental-owner`,
  areaServed: [{ "@type": "State", "name": "千葉県" }],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", "name": "千葉県" }],
  url: SITE_URL,
};

export default function ForRentalOwnerPage() {
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
        eyebrow="For Rental Owners — Chiba"
        title="千葉県の賃貸オーナー・大家の方へ｜畳・原状回復をまとめてお任せください"
        subtitle="東京湾岸から内陸部まで千葉県全域に対応。退去後の畳の状態確認から施工・報告書提供まで一括対応し、空室期間を短縮します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "千葉県", href: "/area/chiba" },
          { label: "賃貸オーナー向け" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>退去後の畳交換・原状回復の費用負担の考え方</li>
                <li>千葉の湾岸エリア（浦安・船橋）の賃貸物件特有の事情</li>
                <li>迅速施工で空室期間を短くする対応フロー</li>
                <li>複数物件・継続案件の受け付け体制</li>
                <li>施工前後の写真提供について</li>
              </ul>
            ),
          },
          {
            heading: "千葉の賃貸市場と畳の空室対策",
            content: (
              <>
                <p>
                  千葉県の賃貸市場は、東京湾岸の浦安・船橋・市川エリアと、成田・千葉市・柏・松戸など内陸部では性格が大きく異なります。湾岸エリアは海風の影響で湿気が高く、畳のカビ・劣化が起きやすい傾向があります。退去後の状態を素早く確認・修繕することが重要です。
                </p>
                <p>
                  千葉市・船橋市・松戸市などの内陸都市部では、退去後の迅速な原状回復が次の入居者獲得の鍵になります。特に繁忙期（2〜3月）は退去・入居が集中するため、事前のご相談をおすすめします。
                </p>
                <p>
                  日本畳パートナーズでは、千葉県内の賃貸オーナー様からのご依頼に迅速対応しています。現地確認・費用負担区分の説明・施工・写真報告までワンストップで承ります。
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
          { label: "原状回復サービス", href: "/area/chiba/restoration" },
          { label: "千葉県の畳工事TOP", href: "/area/chiba" },
          { label: "法人・管理会社向け", href: "/business/rental-owner" },
        ]}
        relatedPages={[
          { label: "千葉県の畳の表替え", href: "/area/chiba/tatami-omotegae" },
          { label: "埼玉の賃貸オーナー向け", href: "/area/saitama/for-rental-owner" },
          { label: "千葉県の畳工事TOP", href: "/area/chiba" },
        ]}
        canonicalPath="/area/chiba/for-rental-owner"
        serviceTypeName="賃貸原状回復・畳交換"
      />
    </>
  );
}
