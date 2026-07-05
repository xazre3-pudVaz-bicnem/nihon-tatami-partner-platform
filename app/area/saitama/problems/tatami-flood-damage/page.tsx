import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳が水濡れ・浸水した場合の対処法｜緊急時の手順と費用",
  description:
    "埼玉県で畳が水濡れ・浸水した方へ。緊急対処法・カビ発生のタイムライン・表替えと新調の判断基準・火災保険の活用まで解説。迅速に対応します。",
  path: "/area/saitama/problems/tatami-flood-damage",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "畳が濡れたらまず何をすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まずすぐに乾いたタオルで水分を拭き取り、畳を部屋から取り出して立てかけてください。次に扇風機・除湿機で強制乾燥させ、窓を開けて通気を確保します。早ければ早いほど被害が小さくなります。水拭きは水分を押し込んでしまうため厳禁です。",
      },
    },
    {
      "@type": "Question",
      name: "カビはどのくらいで発生しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "濡れてから24〜48時間以内にカビの胞子が活動を始める場合があります。48時間を超えると表面だけでなく内部まで菌が浸透し始め、72時間以上放置すると新調が必要になるケースが増えます。迅速な対応が最も重要です。",
      },
    },
    {
      "@type": "Question",
      name: "乾かせば元通りになりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表面だけ濡れた軽度の水濡れであれば、適切に乾燥させることで元の状態に近づく場合があります。しかし畳床（内部）まで水が浸透した場合は、乾燥後もへたり・変形・臭いが残ることがあります。浸水の程度によって判断が異なります。",
      },
    },
    {
      "@type": "Question",
      name: "畳床まで濡れた場合は新調が必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳床（芯材）まで水が浸透した場合は乾燥しても内部でカビが発生するため新調を推奨します。い草表面だけが濡れた場合は十分乾燥できれば表替えで対応可能な場合もあります。判断は現地確認が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "火災保険・水害保険は使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "台風・洪水など自然災害による被害は火災保険の「水災特約」で補償される場合があります。まず加入保険を確認してください。保険会社への申請には施工前の写真・被害状況の記録が重要です。施工前にご連絡いただければ対応を調整できます。",
      },
    },
    {
      "@type": "Question",
      name: "賃貸物件の畳が水濡れした場合、費用はだれが負担しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "賃借人の過失による水濡れは賃借人の負担になる場合があります。建物の雨漏り・給排水設備の老朽化による場合は貸主の責任となるケースもあります。管理会社・貸主・保険会社に早めに連絡することをお勧めします。",
      },
    },
    {
      "@type": "Question",
      name: "浸水後の畳はすぐに捨てるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "すぐに判断する必要はありません。まず適切に乾燥させ、状態を確認してから判断してください。専門業者が確認することで、表替えで対応できるケースか新調が必要なケースかを判断できます。",
      },
    },
    {
      "@type": "Question",
      name: "乾燥させる際の注意点はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "直射日光に長時間当てると畳表が傷む場合があります。日陰の風通しの良い場所で立てかけて乾燥させるのが理想です。除湿機・扇風機の使用は効果的ですが、エアコンの冷房で急激に乾燥させることも避けてください。",
      },
    },
    {
      "@type": "Question",
      name: "カビが生えてしまった畳はどうすればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表面に軽くカビが生えた場合は乾燥後に専門のクリーニングで対応できることがあります。内部までカビが浸透している場合は表替え・新調が必要になります。自己判断せず、まず専門業者にご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "水濡れした畳の費用目安はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "表替えはい草で4,500円〜/枚、畳新調は15,000円〜/枚（目安）です。保険適用の場合は保険会社との調整後に最終費用が決まります。現地確認後に詳細をご案内します。まずはお電話でご相談ください。",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉で畳が水濡れ・浸水してしまった方へ", item: `${SITE_URL}/area/saitama/problems/tatami-flood-damage` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/problems/tatami-flood-damage#webpage`,
  name: "埼玉で畳が水濡れ・浸水してしまった方へ",
  description:
    "埼玉県で畳が水濡れ・浸水した方へ。緊急対処法・カビ発生のタイムライン・表替えと新調の判断基準・火災保険の活用まで解説。迅速に対応します。",
  url: `${SITE_URL}/area/saitama/problems/tatami-flood-damage`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const faqs: { q: string; a: string; category: "general" | "price" | "timing" | "material" | "btob" }[] = [
  {
    category: "general",
    q: "畳が濡れたらまず何をすればよいですか？",
    a: "まずすぐに乾いたタオルで水分を拭き取り、畳を部屋から取り出して立てかけてください。次に扇風機・除湿機で強制乾燥させ、窓を開けて通気を確保します。早ければ早いほど被害が小さくなります。水拭きは水分を押し込んでしまうため厳禁です。",
  },
  {
    category: "timing",
    q: "カビはどのくらいで発生しますか？",
    a: "濡れてから24〜48時間以内にカビの胞子が活動を始める場合があります。48時間を超えると表面だけでなく内部まで菌が浸透し始め、72時間以上放置すると新調が必要になるケースが増えます。迅速な対応が最も重要です。",
  },
  {
    category: "general",
    q: "乾かせば元通りになりますか？",
    a: "表面だけ濡れた軽度の水濡れであれば、適切に乾燥させることで元の状態に近づく場合があります。しかし畳床（内部）まで水が浸透した場合は、乾燥後もへたり・変形・臭いが残ることがあります。浸水の程度によって判断が異なります。",
  },
  {
    category: "timing",
    q: "畳床まで濡れた場合は新調が必要ですか？",
    a: "畳床（芯材）まで水が浸透した場合は乾燥しても内部でカビが発生するため新調を推奨します。い草表面だけが濡れた場合は十分乾燥できれば表替えで対応可能な場合もあります。判断は現地確認が必要です。",
  },
  {
    category: "general",
    q: "火災保険・水害保険は使えますか？",
    a: "台風・洪水など自然災害による被害は火災保険の「水災特約」で補償される場合があります。まず加入保険を確認してください。保険会社への申請には施工前の写真・被害状況の記録が重要です。施工前にご連絡いただければ対応を調整できます。",
  },
  {
    category: "general",
    q: "賃貸物件の畳が水濡れした場合、費用はだれが負担しますか？",
    a: "賃借人の過失による水濡れは賃借人の負担になる場合があります。建物の雨漏り・給排水設備の老朽化による場合は貸主の責任となるケースもあります。管理会社・貸主・保険会社に早めに連絡することをお勧めします。",
  },
  {
    category: "general",
    q: "浸水後の畳はすぐに捨てるべきですか？",
    a: "すぐに判断する必要はありません。まず適切に乾燥させ、状態を確認してから判断してください。専門業者が確認することで、表替えで対応できるケースか新調が必要なケースかを判断できます。",
  },
  {
    category: "general",
    q: "乾燥させる際の注意点はありますか？",
    a: "直射日光に長時間当てると畳表が傷む場合があります。日陰の風通しの良い場所で立てかけて乾燥させるのが理想です。除湿機・扇風機の使用は効果的ですが、エアコンの冷房で急激に乾燥させることも避けてください。",
  },
  {
    category: "general",
    q: "カビが生えてしまった畳はどうすればよいですか？",
    a: "表面に軽くカビが生えた場合は乾燥後に専門のクリーニングで対応できることがあります。内部までカビが浸透している場合は表替え・新調が必要になります。自己判断せず、まず専門業者にご相談ください。",
  },
  {
    category: "price",
    q: "水濡れした畳の費用目安はどのくらいですか？",
    a: "表替えはい草で4,500円〜/枚、畳新調は15,000円〜/枚（目安）です。保険適用の場合は保険会社との調整後に最終費用が決まります。現地確認後に詳細をご案内します。まずはお電話でご相談ください。",
  },
];

export default function TatamiFloodDamagePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "エリア", href: "/area" },
              { label: "埼玉県", href: "/area/saitama" },
              { label: "お悩み" },
              { label: "畳の水濡れ・浸水" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳が水濡れ・浸水してしまった方へ
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳の水濡れは時間との勝負です。24〜48時間以内の対処がカビ発生を防ぐ鍵になります。
            緊急時の正しい対処法・カビ発生のタイムライン・新調が必要なケースの判断基準・
            火災保険の活用まで専門家が解説します。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            水濡れ後の緊急対処法
          </h2>
          <div className="space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <p className="font-medium text-sumi mb-2">① すぐに乾いたタオルで水分を拭き取る</p>
              <p>
                水拭きは水分を内部に押し込んでしまうため厳禁です。
                乾いたタオルや布を押し当てるようにして表面の水分を吸い取ってください。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">② 畳を部屋から取り出して立てかける</p>
              <p>
                濡れた畳をそのまま放置するのは最悪の対処です。
                できるだけ早く畳を持ち上げ、風通しの良い場所に立てかけてください。
                両面に空気が当たるよう定期的に向きを変えると乾燥が早まります。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">③ 扇風機・除湿機で強制乾燥、窓を開けて通気確保</p>
              <p>
                自然乾燥だけでは時間がかかりすぎます。扇風機で風を当て続け、
                除湿機を使って室内の湿度を下げてください。
                窓を開けて通気を確保することも重要です。
                早ければ早いほど被害が小さくなります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            カビ発生のタイムライン
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              カビは温度・湿度・有機物（い草）という条件が揃えば急速に繁殖します。
            </p>
            <div className="space-y-3">
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-1">濡れてから24〜48時間以内</p>
                <p className="text-xs text-sumi/70">カビの胞子が活動を始める。この段階での乾燥が最も重要。</p>
              </div>
              <div className="border border-border rounded-sm p-4">
                <p className="font-medium text-sumi mb-1">48時間を超えると</p>
                <p className="text-xs text-sumi/70">表面だけでなく内部まで菌が浸透し始める。表替えでは対応できないケースが増える。</p>
              </div>
              <div className="border border-border rounded-sm p-4 bg-kiji/30">
                <p className="font-medium text-sumi mb-1">72時間以上放置すると</p>
                <p className="text-xs text-sumi/70">新調が必要になるケースが大幅に増える。コストも大きくなる。迅速な対応が最も重要。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            乾燥後でも交換が必要なケース
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>以下の条件に当てはまる場合は、乾燥後でも表替えまたは新調が必要になります。</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>畳床（芯材）まで濡れた場合：</strong>
                乾燥しても内部でカビが発生するため新調を推奨
              </li>
              <li>
                <strong>い草表面だけが濡れた場合：</strong>
                十分乾燥できれば表替えで対応可能な場合も。判断は現地確認が必要
              </li>
              <li>
                <strong>カビが発生している：</strong>
                表面の軽度のカビはクリーニングで対応できることも。内部まで浸透している場合は新調
              </li>
              <li>
                <strong>乾燥後も臭いが残る：</strong>
                内部が傷んでいるサイン。新調を検討
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            火災保険・水害保険の活用
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              台風・洪水など自然災害による被害は火災保険の「水災特約」で補償される場合があります。
              まず加入保険の確認を。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>水災補償：</strong>台風・豪雨・洪水・土砂崩れによる浸水被害が対象
              </li>
              <li>
                <strong>水濡れ特約：</strong>給排水設備の故障・他の居室からの水漏れが対象の場合も
              </li>
            </ul>
            <p>
              保険会社への申請には施工前の写真・被害状況の記録が重要です。
              施工前にご連絡いただければ対応を調整できます。
              当社では見積書・写真の提供など保険申請サポートができる場合があります。
            </p>
            <div className="bg-kiji/30 border border-border rounded-sm p-4 text-xs text-sumi/70">
              ※ 保険の適用可否は保険会社が判断します。当社は保険の適用を保証するものではありません。
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。水濡れの程度・畳の状態・枚数により大きく異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-sumi/5">
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>対応内容</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>費用目安</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-sumi/80">表替えい草</td>
                  <td className="py-3 px-4 text-sumi/80">4,500円〜/枚</td>
                  <td className="py-3 px-4 text-sumi/60">畳床が乾燥・良好な場合</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">畳新調</td>
                  <td className="py-3 px-4 text-sumi/80">15,000円〜/枚（目安）</td>
                  <td className="py-3 px-4 text-sumi/60">畳床まで浸水・カビ発生の場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 保険適用の場合は保険会社との調整後に最終費用が決まります。現地確認後に詳細をご案内します。
          </p>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* Related links */}
        <section>
          <h2
            className="text-xl font-medium text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/area/saitama"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉県の対応エリア一覧 →
            </Link>
            <Link
              href="/area/saitama/tatami-omotegae"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉の畳表替えサービス →
            </Link>
            <Link
              href="/contact"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              お問い合わせ・無料見積もり →
            </Link>
          </div>
        </section>
      </main>

      <CTASection
        title="畳の水濡れ・浸水についてお急ぎの方はご連絡ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。水濡れの状況を確認して迅速にご対応します。"
      />
    </>
  );
}
