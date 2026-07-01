import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳が水濡れ・浸水した方へ｜緊急対処法と修繕の判断基準",
  description:
    "埼玉県で畳が水濡れ・浸水してお困りの方へ。水濡れ後の緊急対処法、乾燥の重要性、カビ発生リスク、新調の必要性判断、保険対応の考え方を専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-flood-damage",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳が濡れたらまず何をすればよいですか？",
    a: "最優先は畳を床から取り上げて立てかけ、空気に触れさせることです。濡れたままにしておくと内部まで水が浸透し、カビが急速に発生します。扇風機や除湿機を使い、できるだけ早く乾燥させてください。水拭きは厳禁です。",
  },
  {
    category: "general" as const,
    q: "濡れた畳を水拭きしてはいけないのはなぜですか？",
    a: "水拭きは畳表面の水分をさらに内部へ押し込んでしまいます。畳床（内部の芯材）は吸水性が高く、一度水が浸透すると乾燥が難しくなります。表面の水は乾いたタオルで押さえるようにして取り除き、その後は乾燥に専念してください。",
  },
  {
    category: "general" as const,
    q: "カビはどのくらいで発生しますか？",
    a: "温度・湿度条件が整えば、水濡れから24〜48時間以内にカビが発生し始める場合があります。特に気温が高く湿度が高い夏場は進行が速いです。早急な乾燥が最大の予防策です。",
  },
  {
    category: "general" as const,
    q: "乾かせば元通りになりますか？",
    a: "表面だけ濡れた軽度の水濡れであれば、適切に乾燥させることで元の状態に近づく場合があります。しかし、畳床（内部）まで水が浸透した場合は、乾燥後もへたり・変形・臭いが残ることがあります。浸水の程度によって判断が変わります。",
  },
  {
    category: "general" as const,
    q: "新調が必要かどうかはどう判断しますか？",
    a: "畳床（内部の芯材）まで水が浸透した場合・カビが発生した場合・乾燥後も臭いが残る場合・踏んだときにへたりを感じる場合は新調が必要になることが多いです。表面だけの濡れで乾燥後に問題がなければ、表替えで対応できる場合もあります。",
  },
  {
    category: "general" as const,
    q: "火災保険の水濡れ特約は使えますか？",
    a: "台風・水害・給排水設備の事故による水濡れは、火災保険の水濡れ特約・水災補償の対象になる場合があります。まず保険証券を確認し、保険会社に連絡してください。当社では見積書・写真の提供など、保険申請のサポートができる場合もあります。",
  },
  {
    category: "general" as const,
    q: "浸水後の畳はすぐに捨てるべきですか？",
    a: "すぐに判断する必要はありません。まず適切に乾燥させ、状態を確認してから判断してください。専門業者が確認することで、乾燥・クリーニングで対応できるケースか、表替え・新調が必要なケースかを判断できます。",
  },
  {
    category: "general" as const,
    q: "賃貸物件の畳が水濡れした場合、費用はだれが負担しますか？",
    a: "賃借人の過失（洗濯機の故障・雨の吹き込みを放置など）による水濡れは賃借人の負担になる場合があります。一方で建物の雨漏り・給排水設備の老朽化による場合は貸主の責任となるケースもあります。状況に応じて管理会社・貸主・保険会社に早めに連絡することをお勧めします。",
  },
  {
    category: "general" as const,
    q: "乾燥させる際に注意することはありますか？",
    a: "直射日光に長時間当てると畳表が傷む場合があります。日陰の風通しの良い場所で立てかけて乾燥させるのが理想です。除湿機・扇風機の使用は効果的ですが、エアコンの冷房で急激に乾燥させることも避けてください。",
  },
  {
    category: "general" as const,
    q: "水濡れした畳を見てもらえますか？",
    a: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。水濡れの状況・乾燥の程度・カビの有無を確認したうえで、乾燥処理・表替え・新調のどれが適切かをご案内します。お急ぎの方はお電話でご相談ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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

export default function TatamiFloodDamagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "お悩み別" },
            { label: "畳の水濡れ・浸水" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Flood Damage — Saitama
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳が水濡れ・浸水した方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳の水濡れは時間との勝負です。24〜48時間以内の対処がカビ発生を防ぐ鍵になります。
            緊急時の正しい対処法・乾燥のポイント・新調が必要なケースの判断基準を
            専門家が解説します。埼玉県内の現地確認・見積もりは無料です。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            水濡れ後の緊急対処法——まずこの3ステップ
          </h2>
          <div className="space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <p className="font-medium text-sumi mb-2">① すぐに畳を取り上げて立てかける</p>
              <p>
                濡れた畳をそのまま放置するのは最悪の対処です。
                できるだけ早く畳を床から持ち上げ、廊下・庭・ベランダなど
                風通しの良い場所に立てかけてください。両面に空気が当たるよう、
                壁に立てかけるだけでなく定期的に向きを変えると乾燥が早まります。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">② 扇風機・除湿機で強制乾燥させる</p>
              <p>
                自然乾燥だけでは時間がかかりすぎ、カビの発生を招きます。
                扇風機で風を当て続け、除湿機を使って室内の湿度を下げてください。
                乾燥は表面だけでなく内部まで十分に行うことが重要です。
                梅雨・夏場は特に速やかな乾燥が必要です。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">③ 水拭きは厳禁——乾いたタオルで押さえる</p>
              <p>
                水拭きすると表面の水を内部に押し込んでしまいます。
                表面の水分は乾いたタオルや布を押し当てるようにして吸い取ってください。
                こすらないことが重要です。
                また、消臭スプレーや水分を含む薬品の使用は乾燥の妨げになるため控えてください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            乾燥が最重要な理由——24〜48時間が勝負
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              カビは温度・湿度・有機物（い草）という条件が揃えば急速に繁殖します。
              気温20℃以上・湿度80%以上の環境では、水濡れから24〜48時間以内に
              カビが発生し始める場合があります。夏場は特に進行が速いため、
              水濡れに気づいたら速やかに対処することが被害を最小限に抑える鍵です。
            </p>
            <p>
              畳の内部（畳床）は稲わら・木質繊維・建材ボードなど吸水性の高い素材でできています。
              表面が乾いても内部に水分が残っていることがあり、
              そのままにしておくと内側からカビが発生します。
              乾燥できているかどうかは外見だけでは判断が難しいため、
              プロの確認を受けることをお勧めします。
            </p>
            <p>
              特に大規模な浸水（台風・洪水・排水設備の故障など）の場合は
              畳床全体が水を吸い込んでいる可能性が高く、乾燥処理だけでは対応できず
              新調が必要になることも多いです。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            新調が必要になるケースの判断基準
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              水濡れした畳がすべて新調になるわけではありません。
              以下の判断基準を参考にしてください。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>畳床まで水が浸透した：</strong>
                畳床が水を大量に吸い込んでいる場合は乾燥後もへたり・変形が残るため新調が必要です。
              </li>
              <li>
                <strong>カビが発生している：</strong>
                表面に黒ずみや白い斑点が見える、カビ臭がする場合は、
                カビが内部まで浸透している可能性があります。表替えだけでは解決しない場合があります。
              </li>
              <li>
                <strong>乾燥後も臭いが残る：</strong>
                十分に乾燥させても湿った臭い・カビ臭が残る場合は、内部が傷んでいるサインです。
              </li>
              <li>
                <strong>踏んだときのへたりが大きい：</strong>
                水濡れ後に踏み心地が大きく変わった場合、畳床の芯材が傷んでいる可能性があります。
              </li>
            </ul>
            <p>
              これらの判断は専門家による現地確認が最も確実です。
              「乾かせば大丈夫だろう」と判断を先延ばしにすることで、
              修繕費用が大きくなる場合もあります。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            保険対応について——火災保険の水濡れ特約を確認
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              水濡れ・浸水による畳の損害は、加入している火災保険の内容によっては
              補償対象になる可能性があります。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>水災補償：</strong>
                台風・豪雨・洪水・土砂崩れによる浸水被害が対象になることがあります。
                床上浸水の場合は特に確認してください。
              </li>
              <li>
                <strong>水濡れ特約：</strong>
                給排水設備の故障・他の居室からの水漏れによる損害が対象になる場合があります。
              </li>
            </ul>
            <p>
              保険申請には損害状況の写真・見積書が必要です。
              当社では見積書の発行・写真提供など、保険申請時に必要な書類の準備をサポートできる場合があります。
              まずは保険証券を確認し、保険会社・代理店にご相談ください。
            </p>
            <p className="text-sumi/60 text-xs">
              ※ 保険の適用可否は保険会社が判断します。当社は保険の適用を保証するものではありません。
            </p>
          </div>
        </section>

        {/* Section 5 — Price Table */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。水濡れの程度・畳の状態・枚数により大きく異なります。
            対応可否は現地確認後にご案内します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>対応内容</th>
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>費用目安</th>
                  <th className="text-left py-3 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">乾燥・クリーニング処理</td>
                  <td className="py-3 pr-6 text-sumi/80">状況による</td>
                  <td className="py-3 text-sumi/60">軽度の水濡れの場合</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">表替え</td>
                  <td className="py-3 pr-6 text-sumi/80">4,500円〜/枚</td>
                  <td className="py-3 text-sumi/60">畳床が乾燥・良好な場合</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">畳新調</td>
                  <td className="py-3 pr-6 text-sumi/80">15,000円〜/枚</td>
                  <td className="py-3 text-sumi/60">畳床まで浸水・カビ発生の場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 対応可否は現地確認後にご案内します。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* Related links */}
        <section>
          <h2
            className="text-xl text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/area/saitama" className="text-kincya hover:underline">
                埼玉県の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/tatami" className="text-kincya hover:underline">
                埼玉県の畳工事サービス →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/problems/tatami-mold" className="text-kincya hover:underline">
                畳のカビ対策について →
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-kincya hover:underline">
                お問い合わせ・無料見積もり →
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <CTASection
        title="畳の水濡れ・浸水についてお急ぎの方はご連絡ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。水濡れの状況を確認して迅速にご対応します。"
      />
    </>
  );
}
