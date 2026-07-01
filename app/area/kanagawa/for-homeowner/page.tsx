import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "神奈川県の一戸建て・マンション向け畳張替え｜日本畳パートナーズ",
  description:
    "神奈川県内の畳張替え・表替え・新調に対応。横浜・川崎・相模原・鎌倉・藤沢など全域。素材選びから施工まで丁寧にご対応。",
  path: "/area/kanagawa/for-homeowner",
});

const faqItems = [
  {
    category: "general" as const,
    q: "横浜市の旧家・邸宅でも対応できますか？",
    a: "はい、横浜市内の旧家や歴史ある邸宅にも対応しています。京間・江戸間など特殊サイズの畳にも現地採寸で対応可能です。大正・昭和初期の建物に多い古い畳床の状態も確認した上で、適切な施工方法をご提案します。",
  },
  {
    category: "general" as const,
    q: "鎌倉・逗子の和風住宅の畳工事は対応できますか？",
    a: "はい、鎌倉・逗子・葉山など神奈川県南部の和風住宅にも対応しています。歴史ある建物に使われる伝統的なわら床畳の修繕・新調も承っております。",
  },
  {
    category: "general" as const,
    q: "川崎市のマンションの和室でも畳工事はできますか？",
    a: "はい、川崎市内のマンション和室にも対応しています。薄型畳や建材畳など、マンションの床構造に合った素材を使用します。管理規約で作業時間が限られている場合も事前にお知らせいただければ対応可能です。",
  },
  {
    category: "general" as const,
    q: "畳の表替えと新調はどう違いますか？",
    a: "表替えは畳床（土台）はそのまま使い、表面のい草のみを新しいものに交換する方法です。新調は畳床ごと丸ごと新しくする方法で、床が劣化している場合や厚みを変えたい場合に選びます。費用は表替えのほうが安く、新調はより長持ちします。",
  },
  {
    category: "general" as const,
    q: "相模原市・藤沢市からでも依頼できますか？",
    a: "はい、神奈川県内全域に対応しています。相模原市・藤沢市・茅ヶ崎市・平塚市・小田原市など県内各地へ出張いたします。遠方でもまずはお気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "畳の張替えタイミングの目安はありますか？",
    a: "表替えは日常使いであれば5〜10年、裏返しは3〜5年が目安です。い草の変色が進んでいる、踏んだときにへたりを感じる、湿気によるカビや臭いがある場合は早めにご相談ください。",
  },
  {
    category: "general" as const,
    q: "ペットや子どもがいる家庭向けの畳素材はありますか？",
    a: "はい、傷がつきにくいセキスイ畳（樹脂製）や和紙素材の畳は、ペットの爪・水分・汚れに強く、小さなお子様がいるご家庭にも向いています。い草に比べ色落ちしにくく、水拭きで簡単にお手入れできます。",
  },
  {
    category: "general" as const,
    q: "見積もりはどのように進みますか？",
    a: "まずはお電話またはお問い合わせフォームでご連絡ください。現地に伺い、畳の状態・枚数・ご希望の素材を確認したうえで無料でお見積もりをお出しします。訪問見積もりは費用がかかりません。",
  },
  {
    category: "general" as const,
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜、裏返しは2,500円〜、新調は15,000円〜が目安です（素材・状態により変動）。使用する素材のグレードや枚数によって異なります。正確な金額は現地確認後にお伝えします。",
  },
  {
    category: "general" as const,
    q: "古い畳の処分はしてもらえますか？",
    a: "はい、表替え・新調後に取り外した古い畳の廃棄処理も承っています。処分費用については事前にお見積もりに含めてお伝えします。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/kanagawa/for-homeowner#service`,
  name: "神奈川県の一戸建て・マンション向け畳張替え・表替え・新調",
  description: "神奈川県の戸建・マンション和室の畳張替え・表替え・新調サービス",
  serviceType: "畳工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: [{ "@type": "State", "name": "神奈川県" }],
  },
  url: `${SITE_URL}/area/kanagawa/for-homeowner`,
  areaServed: [{ "@type": "State", "name": "神奈川県" }],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", "name": "神奈川県" }],
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
        eyebrow="For Homeowners — Kanagawa"
        title="神奈川県の一戸建て・マンションで畳張替えをご検討の方へ"
        subtitle="横浜・川崎・鎌倉・相模原など神奈川県全域に対応。住宅事情に合わせた畳の表替え・新調をご提案します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "神奈川県", href: "/area/kanagawa" },
          { label: "自宅・マンション向け" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>横浜・川崎・鎌倉など神奈川県内の住宅事情と畳の選び方</li>
                <li>畳の表替え・裏返し・新調の違いと選び方</li>
                <li>マンション和室でも対応できる薄型畳の選択肢</li>
                <li>ペット・子どもがいる家庭向け素材の紹介</li>
                <li>費用目安と施工の流れ</li>
              </ul>
            ),
          },
          {
            heading: "神奈川県の住宅事情と畳工事",
            content: (
              <>
                <p>
                  神奈川県は横浜市・川崎市の都市型マンションから、鎌倉・逗子の歴史ある和風住宅、相模原・厚木・藤沢の一戸建て住宅まで、多様な住環境が共存する地域です。それぞれの住宅形態に応じた畳工事のご提案が必要です。
                </p>
                <p>
                  横浜市内の旧家・邸宅では、江戸間・京間など特殊サイズの畳が使われているケースも多く、現地採寸が欠かせません。鎌倉・逗子の和風住宅では、わら床の伝統畳を大切にしたいというご要望も多くあります。川崎市のマンションでは薄型建材畳が主流で、管理規約に配慮した工事計画が重要です。
                </p>
                <p>
                  日本畳パートナーズでは、神奈川県内の様々な住宅タイプに対応した畳工事を承っています。現地確認・お見積もりは無料ですので、まずはお気軽にご相談ください。
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
                  目安としては、裏返し3〜5年、表替え5〜10年、新調10〜20年ですが、日当たりや使用頻度によって異なります。神奈川県の海沿いエリアは湿気が多く、内陸部に比べて劣化が早まる傾向があります。
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
          { label: "神奈川県の畳工事TOP", href: "/area/kanagawa" },
          { label: "畳の表替えサービス", href: "/area/kanagawa/tatami-omotegae" },
          { label: "和紙畳について", href: "/services/washi-tatami" },
        ]}
        relatedPages={[
          { label: "神奈川県の畳・たたみ工事", href: "/area/kanagawa/tatami" },
          { label: "原状回復サービス", href: "/area/kanagawa/restoration" },
          { label: "賃貸オーナー向けページ", href: "/area/kanagawa/for-rental-owner" },
        ]}
        canonicalPath="/area/kanagawa/for-homeowner"
        serviceTypeName="一般住宅向け畳工事"
      />
    </>
  );
}
