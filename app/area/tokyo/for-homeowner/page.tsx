import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "東京都の一戸建て・マンション向け畳張替え｜日本畳パートナーズ",
  description:
    "東京都内のご自宅の畳張替え・表替え・新調に対応。23区・多摩地区・市部まで。素材選びから施工まで丁寧にご対応します。",
  path: "/area/tokyo/for-homeowner",
});

const faqItems = [
  {
    q: "東京のマンションでも畳工事はできますか？",
    a: "はい、マンションの和室にも対応しています。東京都内のマンションは床スラブ構造のため、薄型の建材畳や防音対応の畳を使用します。管理規約で作業時間が指定されている場合も、事前にお知らせいただければ対応可能です。",
    category: "general" as const,
  },
  {
    q: "マンションの遮音等級に対応した畳はありますか？",
    a: "はい、マンション向けに遮音性能を考慮した畳をご提案しています。下の階への音の伝わりが気になる場合は、防音材入りの薄型畳など適切な素材をご提案します。管理規約の遮音等級要件についてもご相談ください。",
    category: "general" as const,
  },
  {
    q: "畳の表替えと新調はどう違いますか？",
    a: "表替えは畳床（土台）はそのまま使い、表面のい草のみを新しいものに交換する方法です。新調は畳床ごと丸ごと新しくする方法で、床が劣化している場合や厚みを変えたい場合に選びます。費用は表替えのほうが安く、新調はより長持ちします。",
    category: "general" as const,
  },
  {
    q: "畳の張替えタイミングの目安はありますか？",
    a: "表替えは日常使いであれば5〜10年、裏返しは3〜5年が目安です。日当たりや使用頻度によって大きく異なります。い草の変色が進んでいる、踏んだときにへたりを感じる、湿気によるカビや臭いがある場合は早めにご相談ください。",
    category: "general" as const,
  },
  {
    q: "施工中は部屋に入れなくなりますか？",
    a: "表替えであれば、畳を工場に持ち帰り1〜2日で完成することが多く、その間は畳なしの状態になります。新調の場合も同様です。施工規模によりますが、多くの場合は1日で完了します。スケジュールは事前に詳しくご説明します。",
    category: "general" as const,
  },
  {
    q: "ペットや子どもがいる家庭向けの畳素材はありますか？",
    a: "はい、傷がつきにくいセキスイ畳（樹脂製）や和紙素材の畳は、ペットの爪・水分・汚れに強く、小さなお子様がいるご家庭にも向いています。い草に比べ色落ちしにくく、水拭きで簡単にお手入れできます。",
    category: "general" as const,
  },
  {
    q: "世田谷・渋谷・新宿など都内の住宅地にも来てもらえますか？",
    a: "はい、23区内の新宿・渋谷・世田谷・目黒・杉並・練馬・板橋・江東・墨田・豊島などにも対応しています。多摩地区（八王子・立川・府中・調布・三鷹など）や市部も対応エリアです。",
    category: "general" as const,
  },
  {
    q: "見積もりはどのように進みますか？",
    a: "まずはお電話またはお問い合わせフォームでご連絡ください。現地に伺い、畳の状態・枚数・ご希望の素材を確認したうえで無料でお見積もりをお出しします。訪問見積もりは費用がかかりません。",
    category: "general" as const,
  },
  {
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です。素材・状態により変動します。使用する素材のグレードや枚数によって異なります。正確な金額は現地確認後にお伝えします。",
    category: "general" as const,
  },
  {
    q: "古い畳の処分はしてもらえますか？",
    a: "はい、表替え・新調後に取り外した古い畳の廃棄処理も承っています。処分費用については事前にお見積もりに含めてお伝えします。",
    category: "general" as const,
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/tokyo/for-homeowner#service`,
  name: "東京都の一戸建て・マンション向け畳張替え・表替え・新調",
  description: "東京都内の戸建・マンション和室の畳張替え・表替え・新調サービス",
  serviceType: "畳工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "東京都" },
  },
  url: `${SITE_URL}/area/tokyo/for-homeowner`,
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

export default function TokyoForHomeownerPage() {
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
        title="東京都の一戸建て・マンションで畳張替えをご検討の方へ"
        subtitle="23区・多摩地区・市部の戸建・マンション和室に対応。マンション特有の防音・遮音対応から素材選びまで、丁寧にご提案します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "東京都", href: "/area/tokyo" },
          { label: "一般住宅向け畳工事" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>東京マンション特有の床スラブ・防音対応畳の選び方</li>
                <li>畳の表替え・裏返し・新調の違いと選び方</li>
                <li>23区・多摩地区での対応エリアと施工の流れ</li>
                <li>ペット・子どもがいる家庭向け素材の紹介</li>
                <li>費用目安と施工スケジュール</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  日本畳パートナーズは、東京都内の一般住宅（戸建・マンション）の畳工事を専門に承っています。新宿・渋谷・世田谷・目黒・杉並・練馬など23区内はもちろん、八王子・立川・府中・調布・三鷹など多摩地区・市部にも対応しています。
                </p>
                <p>
                  東京都内のマンションは床スラブ構造のため、一般的な戸建用の畳とは異なる薄型建材畳や防音対応畳が必要なケースがあります。管理規約の遮音等級要件にも配慮した素材選びをご提案します。
                </p>
                <p>
                  施工方法は「表替え」「裏返し」「新調」から、現在の畳の状態・ご予算・ご希望のテイストに合わせてご提案します。い草の産地別グレードから、水に強い和紙・樹脂製まで多様に取り扱っています。現地確認・お見積もりは無料です。
                </p>
              </>
            ),
          },
          {
            heading: "東京マンション特有の畳事情",
            content: (
              <>
                <p>東京都内のマンションで畳工事を行う際は、以下の点に注意が必要です。</p>
                <div className="mt-3 space-y-3">
                  <div className="border border-border p-4">
                    <p className="font-medium text-sumi mb-1">床スラブ構造への対応</p>
                    <p className="text-xs text-sumi/70">マンションはコンクリートスラブの上に直接床を張る構造のため、薄型畳（15mm〜25mm程度）が必要です。既存の畳の厚みを採寸したうえで適切な厚みの畳を製作します。</p>
                  </div>
                  <div className="border border-border p-4">
                    <p className="font-medium text-sumi mb-1">遮音等級・防音対応</p>
                    <p className="text-xs text-sumi/70">管理規約でL-45やLL-45など遮音等級が定められている場合は、防音材入りの畳をご提案します。ご入居のマンションの管理規約をご確認のうえご相談ください。</p>
                  </div>
                  <div className="border border-border p-4">
                    <p className="font-medium text-sumi mb-1">作業時間・搬入経路の確認</p>
                    <p className="text-xs text-sumi/70">マンションによって作業可能時間（平日9時〜17時など）や養生・搬入ルールがあります。事前にご確認いただければ、管理規約に沿った対応をします。</p>
                  </div>
                </div>
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
                  <p className="mt-1 ml-5 text-sumi/60">実際に畳の状態を確認し、施工方法・素材・費用をご説明します。マンションの場合は管理規約も確認します。</p>
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
          { service: "新調（建材床・薄型）", price: "15,000円〜/枚", note: "マンション向け薄型対応。防音材入りも選択可" },
          { service: "新調（わら床）", price: "20,000円〜/枚", note: "伝統的なわら床。戸建向け" },
          { service: "和紙・樹脂畳（表替え）", price: "6,500円〜/枚", note: "水・傷に強い。ペット・子ども向け" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "東京都の畳工事TOP", href: "/area/tokyo" },
          { label: "東京都の畳張替え・新調", href: "/area/tokyo/tatami" },
          { label: "和室畳の表替え", href: "/area/tokyo/tatami-omotegae" },
        ]}
        relatedPages={[
          { label: "東京都の原状回復", href: "/area/tokyo/restoration" },
          { label: "和室壁紙・内装サービス", href: "/services/washi-tatami" },
          { label: "賃貸オーナー向けページ", href: "/area/tokyo/for-rental-owner" },
        ]}
        canonicalPath="/area/tokyo/for-homeowner"
        serviceTypeName="一般住宅向け畳工事（東京都）"
      />
    </>
  );
}
