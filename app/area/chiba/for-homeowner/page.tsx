import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "千葉県の一戸建て・マンション向け畳張替え｜日本畳パートナーズ",
  description:
    "千葉県内の畳張替え・表替え・新調に対応。千葉市・船橋市・市川市・松戸市・浦安市など全域。",
  path: "/area/chiba/for-homeowner",
});

const faqItems = [
  {
    category: "general" as const,
    q: "浦安・市川の高級住宅でも畳工事はできますか？",
    a: "はい、浦安市・市川市の高級住宅にも対応しています。高品質な国産い草（熊本産など）やわら床畳の施工も承っています。建物のグレードに合わせた素材・縁（へり）の選定もご相談ください。",
  },
  {
    category: "general" as const,
    q: "成田周辺の農家住宅の大型和室にも対応できますか？",
    a: "はい、成田市・香取市・印旛郡など千葉県北東部の農家住宅の大型和室にも対応しています。江戸間・中京間など伝統的なサイズに合わせた現地採寸と施工が可能です。",
  },
  {
    category: "general" as const,
    q: "千葉市・船橋市のマンション和室でも対応できますか？",
    a: "はい、千葉市・船橋市内のマンション和室にも対応しています。薄型畳や建材畳など、マンションの床構造に合った素材を使用します。管理規約で作業時間が限られている場合も事前にお知らせいただければ対応可能です。",
  },
  {
    category: "general" as const,
    q: "畳の表替えと新調はどう違いますか？",
    a: "表替えは畳床（土台）はそのまま使い、表面のい草のみを新しいものに交換する方法です。新調は畳床ごと丸ごと新しくする方法で、床が劣化している場合や厚みを変えたい場合に選びます。費用は表替えのほうが安く、新調はより長持ちします。",
  },
  {
    category: "general" as const,
    q: "千葉県内のどのエリアまで来てもらえますか？",
    a: "千葉市・船橋市・松戸市・柏市・市川市・浦安市・成田市・木更津市など千葉県内全域に対応しています。お気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "畳の張替えタイミングの目安はありますか？",
    a: "表替えは日常使いであれば5〜10年、裏返しは3〜5年が目安です。千葉県の沿岸部は海風の影響で湿気が高く、内陸部より劣化が早まる場合があります。い草の変色・へたり・カビ臭がある場合は早めにご相談ください。",
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
  "@id": `${SITE_URL}/area/chiba/for-homeowner#service`,
  name: "千葉県の一戸建て・マンション向け畳張替え・表替え・新調",
  description: "千葉県の戸建・マンション和室の畳張替え・表替え・新調サービス",
  serviceType: "畳工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: [{ "@type": "State", "name": "千葉県" }],
  },
  url: `${SITE_URL}/area/chiba/for-homeowner`,
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
        eyebrow="For Homeowners — Chiba"
        title="千葉県の一戸建て・マンションで畳張替えをご検討の方へ"
        subtitle="千葉市・船橋・浦安・成田など千葉県全域に対応。戸建て・マンション・農家住宅まで、住宅タイプに合わせた畳の表替え・新調をご提案します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "千葉県", href: "/area/chiba" },
          { label: "自宅・マンション向け" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>千葉県内の多様な住宅事情と畳の選び方</li>
                <li>畳の表替え・裏返し・新調の違いと選び方</li>
                <li>浦安・市川の高級住宅向け素材の紹介</li>
                <li>農家住宅など大型和室への対応</li>
                <li>費用目安と施工の流れ</li>
              </ul>
            ),
          },
          {
            heading: "千葉県の住宅事情と畳工事",
            content: (
              <>
                <p>
                  千葉県は、東京湾岸の浦安・市川・船橋エリアの高級マンション・住宅街から、成田・香取・印旛周辺の農家住宅、そして千葉市内の一般的な戸建て・マンションまで、非常に多様な住環境が広がっています。
                </p>
                <p>
                  浦安・市川の高級住宅では、品質の高い国産い草（熊本産）やわら床畳が求められることも多く、素材と縁（へり）の選定にこだわった施工が重要です。成田周辺の農家住宅では、大きな和室に伝統的なサイズの畳が敷かれているケースも多く、現地採寸と丁寧な施工が欠かせません。
                </p>
                <p>
                  千葉市・船橋市・松戸市などの都市部では、マンションの和室に薄型建材畳が使われていることが多く、マンション管理規約に配慮した施工計画が必要です。日本畳パートナーズでは、千葉県内の様々な住宅タイプに対応した畳工事を承っています。
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
                  目安としては、裏返し3〜5年、表替え5〜10年、新調10〜20年ですが、日当たりや使用頻度によって異なります。千葉県の海沿いエリアは潮風の影響で湿気が高く、劣化が早まる傾向があります。
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
          { label: "千葉県の畳工事TOP", href: "/area/chiba" },
          { label: "畳の表替えサービス", href: "/area/chiba/tatami-omotegae" },
          { label: "畳の新調について", href: "/services/tatami-shinchou" },
        ]}
        relatedPages={[
          { label: "千葉県の畳・たたみ工事", href: "/area/chiba/tatami" },
          { label: "原状回復サービス", href: "/area/chiba/restoration" },
          { label: "賃貸オーナー向けページ", href: "/area/chiba/for-rental-owner" },
        ]}
        canonicalPath="/area/chiba/for-homeowner"
        serviceTypeName="一般住宅向け畳工事"
      />
    </>
  );
}
