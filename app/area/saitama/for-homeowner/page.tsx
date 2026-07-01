import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の一般住宅向け畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "埼玉県の戸建・マンション和室の畳張替え・表替え・新調に対応。日常使いの畳の傷み・変色・へたりでお困りの方に、適切な施工方法とタイミングをご提案します。現地確認・見積もり無料。",
  path: "/area/saitama/for-homeowner",
});

const faqItems = [
  {
    q: "畳の表替えと新調はどう違いますか？",
    a: "表替えは畳床（土台）はそのまま使い、表面のい草のみを新しいものに交換する方法です。新調は畳床ごと丸ごと新しくする方法で、床が劣化している場合や厚みを変えたい場合に選びます。費用は表替えのほうが安く、新調はより長持ちします。",
    category: "general" as const,
  },
  {
    q: "畳の張替えタイミングの目安はありますか？",
    a: "表替えは日常使いであれば5〜10年、裏返しは3〜5年が目安です。ただし、日当たりや使用頻度によって大きく異なります。い草の変色が進んでいる、踏んだときにへたりを感じる、湿気によるカビや臭いがある場合は早めにご相談ください。",
    category: "timing" as const,
  },
  {
    q: "マンションの和室でも畳工事はできますか？",
    a: "はい、マンションの和室にも対応しています。薄型畳や建材畳など、マンションの床構造に合った素材を使用します。管理規約で作業時間が限られている場合も、事前にお知らせいただければ対応可能です。",
    category: "general" as const,
  },
  {
    q: "施工中は部屋に入れなくなりますか？",
    a: "表替えであれば、畳を工場に持ち帰り1〜2日で完成することが多く、その間は畳なしの状態になります。新調の場合も同様です。施工規模によりますが、多くの場合は1日で完了します。スケジュールは事前に詳しくご説明します。",
    category: "general" as const,
  },
  {
    q: "畳の臭いが気になります。張替えで改善できますか？",
    a: "い草は本来よい香りがするものですが、長年使用したり湿気を吸って劣化すると不快な臭いが出ることがあります。表替え・新調で新しいい草に交換することで臭いの改善が期待できます。カビが原因の場合は下地の状態も確認してご提案します。",
    category: "general" as const,
  },
  {
    q: "ペットや子どもがいる家庭向けの畳素材はありますか？",
    a: "はい、傷がつきにくいセキスイ畳（樹脂製）や和紙素材の畳は、ペットの爪・水分・汚れに強く、小さなお子様がいるご家庭にも向いています。い草に比べ色落ちしにくく、水拭きで簡単にお手入れできます。",
    category: "material" as const,
  },
  {
    q: "見積もりはどのように進みますか？",
    a: "まずはお電話またはお問い合わせフォームでご連絡ください。現地に伺い、畳の状態・枚数・ご希望の素材を確認したうえで無料でお見積もりをお出しします。訪問見積もりは費用がかかりません。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です（素材・状態により変動）。使用する素材のグレードや枚数によって異なります。正確な金額は現地確認後にお伝えします。",
    category: "price" as const,
  },
  {
    q: "古い畳の処分はしてもらえますか？",
    a: "はい、表替え・新調後に取り外した古い畳の廃棄処理も承っています。処分費用については事前にお見積もりに含めてお伝えします。",
    category: "general" as const,
  },
  {
    q: "埼玉県内のどのエリアまで来てもらえますか？",
    a: "さいたま市・川越市・川口市・越谷市・熊谷市・所沢市など埼玉県内全域に対応しています。お気軽にご相談ください。",
    category: "general" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-homeowner#service`,
  name: "埼玉の一般住宅向け畳張替え・表替え・新調",
  description: "埼玉県の戸建・マンション和室の畳張替え・表替え・新調サービス",
  serviceType: "畳工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-homeowner`,
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

export default function ForHomeownerPage() {
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
        eyebrow="For Homeowners"
        title="埼玉の一般住宅で畳張替え・表替え・新調を検討している方へ"
        subtitle="戸建・マンションの和室を快適に保つために。畳の状態を正しく診断し、適切な施工方法をご提案します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "一般住宅向け畳工事" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>畳の表替え・裏返し・新調の違いと選び方</li>
                <li>張替えのタイミングと劣化サインの見分け方</li>
                <li>マンション和室でも対応できる薄型畳の選択肢</li>
                <li>ペット・子どもがいる家庭向け素材の紹介</li>
                <li>費用目安と施工の流れ</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  日本畳パートナーズは、埼玉県内の一般住宅（戸建・マンション）の畳工事を専門に承っています。長年使い込んで変色・へたりが出てきた畳、子どもが走り回って傷んだ畳、湿気で気になる臭いが出てきた畳など、日常使いの中で生じるあらゆる畳の悩みに対応します。
                </p>
                <p>
                  施工方法は大きく3種類。い草の表面だけを新しくする「表替え」、同じ畳表の裏面を使う「裏返し」、畳床ごと新しくする「新調」から、現在の畳の状態・ご予算・ご希望のテイストに合わせてご提案します。素材もい草の産地別グレードから、水に強い和紙・樹脂製まで多様に取り扱っています。
                </p>
                <p>
                  埼玉県内全域に出張対応しており、現地確認・お見積もりは無料です。施工は丁寧・迅速を心がけ、当日中に仕上がるケースも多くあります。
                </p>
              </>
            ),
          },
          {
            heading: "畳の劣化サインと張替えタイミング",
            content: (
              <>
                <p>畳は適切なタイミングでメンテナンスすることで、長く快適に使えます。以下のような症状が出ていたら、ご相談ください。</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>表面のい草が黄ばんで変色してきた</li>
                  <li>歩いたときにフカフカした感触・底つき感がある</li>
                  <li>縁（へり）がほつれてきた</li>
                  <li>梅雨時期などに湿気やカビの臭いが気になる</li>
                  <li>表面の毛羽立ちやほつれが目立ってきた</li>
                </ul>
                <p className="mt-2">
                  目安としては、裏返し3〜5年、表替え5〜10年、新調10〜20年ですが、日当たりや使用頻度によって異なります。定期的な点検をご希望の方もお気軽にご相談ください。
                </p>
              </>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">お問い合わせ</span>
                  <p className="mt-1 ml-5 text-sumi/60">電話またはフォームでご連絡ください。現状をお聞きし、訪問日程を調整します。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・無料見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">実際に畳の状態を確認し、施工方法・素材・費用をご説明します。</p>
                </li>
                <li>
                  <span className="font-medium">素材選定・施工日調整</span>
                  <p className="mt-1 ml-5 text-sumi/60">い草・和紙・樹脂など素材サンプルをご覧いただきながら選んでいただきます。</p>
                </li>
                <li>
                  <span className="font-medium">施工</span>
                  <p className="mt-1 ml-5 text-sumi/60">表替えは1〜2日程度、新調は状況により異なります。施工中は丁寧に家財を養生します。</p>
                </li>
                <li>
                  <span className="font-medium">完成・引き渡し</span>
                  <p className="mt-1 ml-5 text-sumi/60">仕上がりをご確認いただき、お手入れ方法をご説明して完了です。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "裏返し", price: "2,500円〜/枚", note: "い草の裏面を使用。比較的状態が良い場合" },
          { service: "表替え（一般い草）", price: "4,500円〜/枚", note: "国産・中国産い草を新しく張替え" },
          { service: "表替え（国産上位グレード）", price: "8,000円〜/枚", note: "熊本産など高品質い草使用" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "畳床ごと新しく。マンション向けに薄型も対応" },
          { service: "新調（わら床）", price: "20,000円〜/枚", note: "伝統的なわら床。断熱・調湿性が高い" },
          { service: "和紙・樹脂畳（表替え）", price: "6,500円〜/枚", note: "水・傷に強い。ペット・子ども向け" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "畳の表替え・新調サービス", href: "/area/saitama/tatami" },
          { label: "埼玉の内装工事", href: "/interior" },
          { label: "料金・費用目安", href: "/price" },
        ]}
        relatedPages={[
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
          { label: "賃貸オーナー向けページ", href: "/area/saitama/for-rental-owner" },
          { label: "施工対応例", href: "/works" },
        ]}
        canonicalPath="/area/saitama/for-homeowner"
        serviceTypeName="一般住宅向け畳工事"
      />
    </>
  );
}
