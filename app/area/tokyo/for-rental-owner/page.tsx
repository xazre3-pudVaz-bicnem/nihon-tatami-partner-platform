import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "東京都の賃貸オーナー・大家向け畳張替え・原状回復｜日本畳パートナーズ",
  description:
    "東京都内の賃貸物件の畳張替え・原状回復工事に対応。空室対策・退去後の速やかな対応で入居率向上をサポート。",
  path: "/area/tokyo/for-rental-owner",
});

const faqItems = [
  {
    q: "退去後の畳交換費用はオーナー負担ですか？入居者負担ですか？",
    a: "国土交通省の原状回復ガイドラインでは、通常の生活で生じる畳の変色・傷みはオーナー負担、タバコの焦げ跡や故意・過失による損傷は入居者負担とされています。現地確認の際に損傷の状況を確認し、費用負担の考え方についてもご説明します。",
    category: "general" as const,
  },
  {
    q: "退去後、できるだけ早く畳交換してもらいたいのですが。",
    a: "ご依頼をいただいてから最短で翌営業日の現地確認を目指しています。表替えであれば即日〜1日での施工も可能なケースがあります。東京都内の空室期間を短縮したい場合はご相談ください。",
    category: "general" as const,
  },
  {
    q: "東京23区内の賃貸マンションでも対応できますか？",
    a: "はい、23区内全域に対応しています。新宿・渋谷・世田谷・目黒・品川・港・中央・千代田・江東・墨田・板橋・練馬・杉並など、東京都内の賃貸マンション・アパートにお伺いします。",
    category: "general" as const,
  },
  {
    q: "複数の部屋・物件をまとめて依頼できますか？",
    a: "はい、複数室・複数物件のまとめ依頼をお受けしています。退去が集中する繁忙期でも、スケジュールを調整してご対応します。継続的な取引をご希望の場合はご相談ください。",
    category: "general" as const,
  },
  {
    q: "施工後に写真や報告書を出してもらえますか？",
    a: "施工前・施工後の写真をご提供しています。退去精算や入居者への説明資料として活用できます。",
    category: "general" as const,
  },
  {
    q: "空室対策として、畳を交換するのは効果的ですか？",
    a: "はい、東京都内の賃貸市場は競争が激しく、内見時の第一印象が入居率に直結します。畳の表替えや新調によって和室の清潔感が向上し、内見者への好印象につながります。費用対効果の高い素材をご提案することも可能です。",
    category: "general" as const,
  },
  {
    q: "長年入居者がいた部屋の畳はどの施工方法がよいですか？",
    a: "入居期間が10年以上の場合は畳床も劣化していることが多く、新調をおすすめするケースが多いです。現地で状態を確認し、費用対効果を踏まえてご提案します。",
    category: "general" as const,
  },
  {
    q: "ペットを飼っていた入居者の退去後、畳が傷んでいます。",
    a: "爪による傷・尿による臭いや変色がある場合、表替えや新調で改善できます。程度が激しい場合は下地の処理も含めたご提案をします。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です。素材・状態により変動します。損傷状況や使用素材によって変動しますので、現地確認後に正確なお見積もりをお出しします。",
    category: "general" as const,
  },
  {
    q: "ふすまや障子も一緒に交換してもらえますか？",
    a: "はい、畳だけでなく、ふすま・障子の張替えも承っています。和室全体をまとめてご依頼いただくと、効率よく整備できます。",
    category: "general" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/tokyo/for-rental-owner#service`,
  name: "東京都の賃貸オーナー向け畳張替え・原状回復",
  description: "東京都内の賃貸物件オーナー向け退去後の畳張替え・原状回復サービス",
  serviceType: "畳工事・原状回復",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "東京都" },
  },
  url: `${SITE_URL}/area/tokyo/for-rental-owner`,
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

export default function TokyoForRentalOwnerPage() {
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
        eyebrow="For Rental Owners"
        title="東京都の賃貸オーナー・大家の方へ｜畳・原状回復をまとめてお任せください"
        subtitle="退去後の畳交換・原状回復に迅速対応。23区の競争激しい賃貸市場で、空室期間を短縮し入居率向上をサポートします。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "東京都", href: "/area/tokyo" },
          { label: "賃貸オーナー向け畳・原状回復" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>退去後の畳交換・原状回復の費用負担の考え方</li>
                <li>入居者負担・オーナー負担の区分（ガイドライン解説）</li>
                <li>東京23区・多摩地区での迅速施工体制</li>
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
                  東京都内の賃貸物件オーナー様にとって、退去後の速やかな原状回復と空室対策は入居率に直結する重要な課題です。日本畳パートナーズでは、東京23区・多摩地区の賃貸オーナー様からのご依頼に迅速対応しています。
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
            heading: "東京の賃貸市場と空室対策",
            content: (
              <>
                <p>
                  東京都内の賃貸市場では、内見時の印象が入居決定に大きく影響します。特に23区内は競合物件が多く、和室の状態が入居者の選択を左右することも少なくありません。
                </p>
                <div className="mt-3 space-y-3">
                  <div className="border-l-4 border-kincya pl-4">
                    <p className="font-medium text-sumi mb-1">内見印象の改善</p>
                    <p className="text-xs text-sumi/70">新しい畳のい草の香りと清潔感は、内見者に好印象を与えます。変色・へたりのある畳を表替えするだけで和室全体の雰囲気が変わります。</p>
                  </div>
                  <div className="border-l-4 border-kincya pl-4">
                    <p className="font-medium text-sumi mb-1">複数物件の定期整備</p>
                    <p className="text-xs text-sumi/70">複数棟をお持ちのオーナー様には、定期的な畳整備のスケジュールをご提案することも可能です。</p>
                  </div>
                  <div className="border-l-4 border-kincya pl-4">
                    <p className="font-medium text-sumi mb-1">迅速対応で空室期間を短縮</p>
                    <p className="text-xs text-sumi/70">表替えであれば最短1日での施工対応が可能なケースもあります。退去確認後すぐにご連絡ください。</p>
                  </div>
                </div>
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
          { service: "新調（建材床・薄型）", price: "15,000円〜/枚", note: "長期入居後など畳床が傷んでいる場合。マンション薄型対応" },
          { service: "ふすま張替え", price: "3,500円〜/枚", note: "畳とセット対応で和室全体を整備" },
          { service: "廃棄処分", price: "別途見積もり", note: "古い畳の廃棄処理" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "東京都の畳工事TOP", href: "/area/tokyo" },
          { label: "東京都の原状回復", href: "/area/tokyo/restoration" },
          { label: "賃貸オーナー向けサービス", href: "/business/rental-owner" },
        ]}
        relatedPages={[
          { label: "東京都の畳表替え", href: "/area/tokyo/tatami-omotegae" },
          { label: "東京都のふすま張替え", href: "/area/tokyo/fusuma" },
          { label: "管理会社向けページ", href: "/area/tokyo/for-property-management" },
        ]}
        canonicalPath="/area/tokyo/for-rental-owner"
        serviceTypeName="賃貸原状回復・畳交換（東京都）"
      />
    </>
  );
}
