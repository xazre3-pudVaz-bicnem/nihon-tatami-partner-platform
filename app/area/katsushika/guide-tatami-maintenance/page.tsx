import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title:
    "葛飾区での畳メンテナンス完全ガイド｜定期保全・お手入れ方法・カビ対策｜葛飾畳店",
  description:
    "葛飾区の住環境に合わせた畳メンテナンスガイド。梅雨〜夏の湿気と冬の乾燥を踏まえた定期保全スケジュール、日常のお手入れ、カビ・ダニ対策、寿命の延ばし方を解説します。",
  path: "/area/katsushika/guide-tatami-maintenance",
});

const faqItems = [
  {
    q: "葛飾区の住環境は畳にどのような影響を与えますか？",
    a: "葛飾区は、東京23区のほかの地域と同様に、梅雨〜夏は高温多湿で、冬は乾燥します。1階の和室や北側の部屋、川に近い低地の住まいでは、湿気がこもりやすい場合もあります。い草は湿度60%以上でカビが繁殖しやすく、冬の乾燥でひび割れが起きやすくなります。季節に合わせた正しいメンテナンスで、畳の寿命を延ばすことができます。",
    category: "general" as const,
  },
  {
    q: "い草・和紙・樹脂畳の寿命はどのくらいですか？",
    a: "い草畳は8〜15年が一般的な目安ですが、湿気がこもりやすい環境では目安より早く傷むことがあります。和紙畳は15〜20年、樹脂畳は20年以上と耐久性が高いです。いずれも日常のメンテナンスが寿命を大きく左右します。",
    category: "general" as const,
  },
  {
    q: "定期保全スケジュールの目安は？",
    a: "梅雨〜夏の湿気と冬の乾燥に備えて、春（3月）・初夏（5月）・秋（9月）・冬（12月）の年4回、日当たりの良い日に半日〜1日畳を上げて、下地と畳の裏側を乾燥・風通しさせることをおすすめします。",
    category: "general" as const,
  },
  {
    q: "日常的なお手入れで気をつけることは？",
    a: "①毎日の掃除（掃除機→乾いた雑巾で拭く）②定期的な換気（1日1回、10分以上）③除湿機の活用（梅雨〜初夏）④ラグ・マットの不使用（湿気がこもる）⑤水拭き厳禁（い草が腐る）が基本です。",
    category: "general" as const,
  },
  {
    q: "カビが生えた場合、自分で対処できますか？",
    a: "表面の軽微なカビは、乾いた布で拭き取り、70%程度のアルコールスプレーで除菌する応急処置が有効です。ただし臭いが残る・広範囲・色が変わっているなどの場合は、畳床まで浸透している可能性があり、専門業者への相談をおすすめします。",
    category: "general" as const,
  },
  {
    q: "ダニ対策として何をすべきですか？",
    a: "①湿度を60%以下に保つ（最も重要）②定期的な掃除機がけ（週2回以上）③畳を上げての乾燥（月1回）④防ダニシートの使用 ⑤い草より和紙・樹脂畳への変更を検討するです。完全な予防は難しいため、定期的な掃除が鍵です。",
    category: "general" as const,
  },
  {
    q: "表替え・裏返しの最適なタイミングは？",
    a: "一般的な目安は表替え5〜8年、裏返し3〜5年ですが、湿気がこもりやすい部屋では、交換時期が目安より早まることがあります。い草の色が黄ばんでいる、踏んだときのへたりを感じる、臭いが気になるなどの症状が出ていたら、すぐに専門家に相談してください。",
    category: "timing" as const,
  },
  {
    q: "冬場の乾燥で畳が傷むのを防ぐには？",
    a: "冬場は加湿器を活用し、湿度40〜50%を保つことが理想的です。ただし畳の上に直接加湿器を置かず、部屋の隅に置いてください。また、暖房風が直接当たらない場所に畳を配置することも大切です。",
    category: "general" as const,
  },
  {
    q: "畳の下に敷くシートは必要ですか？",
    a: "防湿シートまたは通気性シートの使用をおすすめします。特に1階の和室や川に近い低地の住まいなど、湿気がこもりやすい環境では、床からの湿気上昇を防ぎ、カビ・ダニの繁殖を抑制できます。既存の床に敷く場合は、施工時にご相談ください。",
    category: "general" as const,
  },
  {
    q: "小さなお子様がいる家庭でのメンテナンスのポイントは？",
    a: "飲み物をこぼした場合は、すぐに乾いた布で吸収し、決して水拭きしないでください。オムツからの尿もカビの原因になるため、こまめな確認と清掃が重要です。和紙畳・樹脂畳への変更も検討すると、メンテナンスの負担が大きく減ります。",
    category: "general" as const,
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
  areaServed: { "@type": "City", name: "葛飾区" },
  url: SITE_URL,
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "葛飾区の住環境に合わせた畳の定期メンテナンス手順",
  description:
    "梅雨〜夏の高温多湿と冬の乾燥に備える、葛飾区の住まい向けの畳の日常お手入れと定期保全の手順です。",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "毎日の掃除",
      text: "畳の目に沿って掃除機をかけ、乾いた雑巾で乾拭きします。水拭きはい草の劣化・カビの原因になるため避けます。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "定期的な換気",
      text: "1日1回、10分以上の換気で室内の湿気を逃がします。梅雨〜初夏は除湿機の併用が効果的です。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "畳上げによる乾燥",
      text: "月1回を目安に畳を上げ、裏側と畳床を風通しの良い場所で乾燥させます。湿気がこもりやすい梅雨の時期は特に重要です。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "季節ごとの点検",
      text: "春・初夏・秋・冬の年4回、カビ・ダニ・へたり・色あせを点検し、必要に応じて裏返し・表替えを検討します。",
    },
  ],
};

export default function TatamiGuideMaintenancePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "葛飾区", href: "/area/katsushika" },
            { label: "ガイド" },
            { label: "メンテナンスガイド" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Katsushika Guide
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
            }}
          >
            葛飾区での畳メンテナンスガイド
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳を長く快適に使い続けるための保全方法をまとめた、葛飾区の畳メンテナンスガイドです。定期保全スケジュールから日常のお手入れ、カビ・ダニ対策、寿命の延ばし方まで解説します。梅雨〜夏の湿気と冬の乾燥に合わせた、季節ごとのお手入れのポイントもお伝えします。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 葛飾区の住環境が畳に与える影響 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            葛飾区の住環境が畳に与える影響
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              葛飾区は荒川・中川・江戸川などの川に囲まれ、区の多くが低地にあるまちです。東京23区のほかの地域と同じく、梅雨〜夏は高温多湿になり、冬は空気が乾燥します。区内には昭和期からの木造住宅と駅前のマンションが混在しています。1階の和室や北側の部屋、川に近い低地の住まいでは、湿気がこもりやすい場合もあります。畳を長く保つには、住まいの条件に合わせた季節ごとの対策が欠かせません。
            </p>

            <div className="space-y-3">
              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">梅雨〜夏（6月〜8月）</p>
                <p>
                  湿度が高く、カビ・ダニが繁殖しやすい時期です。い草の多孔質構造に湿気が溜まりやすく、対策がなければカビが急速に広がります。毎日の換気・除湿が最重要です。
                </p>
              </div>

              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">秋（9月〜11月）</p>
                <p>
                  台風による湿度上昇が見られます。雨の後の換気が重要です。また秋雨前線による曇りの日が続くと、除湿機の活用が効果的になります。
                </p>
              </div>

              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">冬（12月〜2月）</p>
                <p>
                  空気が乾燥し、い草表面のひび割れや毛羽立ちが起きやすい時期です。加湿器で湿度40〜50%を保つことで、乾燥ダメージを軽減できます。
                </p>
              </div>

              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">春（3月〜5月）</p>
                <p>
                  気温の上昇に伴い、冬に溜まった湿気が放出される時期です。春の好天を利用した定期保全が最適です。窓を開けて十分な換気を行ってください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 畳の寿命 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            素材別の畳の寿命の目安
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ い草畳</h3>
              <div className="space-y-2 text-sm text-sumi/80">
                <p>
                  <span className="font-medium">一般的な寿命：</span>
                  8〜15年（日本全体の目安）
                </p>
                <p>
                  <span className="font-medium">湿気がこもりやすい環境：</span>
                  一般的な目安より早く傷むことがあります
                </p>
                <p className="text-xs">
                  い草は調湿性に優れている反面、梅雨〜夏の高温多湿な時期にはカビ・ダニが発生しやすく、寿命が短くなることがあります。1階の和室や北側の部屋では特に注意が必要です。定期的なメンテナンスで延命が可能です。
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ 和紙畳</h3>
              <div className="space-y-2 text-sm text-sumi/80">
                <p>
                  <span className="font-medium">寿命：</span>15〜20年
                </p>
                <p className="text-xs">
                  カビが繁殖しにくく、い草より耐久性が高いため、湿気が気になる部屋でも長く使用できます。アレルギー対策としても有効です。
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">◆ 樹脂畳</h3>
              <div className="space-y-2 text-sm text-sumi/80">
                <p>
                  <span className="font-medium">寿命：</span>20年以上
                </p>
                <p className="text-xs">
                  完全防水で湿度の影響をほぼ受けません。メンテナンス負担が最も少なく、湿気がこもりやすい1階の和室などに向いている素材です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 定期保全スケジュール ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            季節に合わせた畳の定期保全スケジュール（年4回推奨）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sumi/5">
                  <th className="border border-border p-3 text-left font-medium">
                    時期
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    月
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    実施内容
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    目的
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">春</td>
                  <td className="border border-border p-3">3月</td>
                  <td className="border border-border p-3 text-xs">
                    半日～1日、畳を上げて日干し・風通し
                  </td>
                  <td className="border border-border p-3 text-xs">
                    冬に溜まった湿気を除去
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    初夏
                  </td>
                  <td className="border border-border p-3">5月</td>
                  <td className="border border-border p-3 text-xs">
                    畳を上げて通風。除湿機の準備
                  </td>
                  <td className="border border-border p-3 text-xs">
                    梅雨前の湿度準備
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">秋</td>
                  <td className="border border-border p-3">9月</td>
                  <td className="border border-border p-3 text-xs">
                    台風後の除湿・通風。換気確認
                  </td>
                  <td className="border border-border p-3 text-xs">
                    台風による湿気を除去
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    冬
                  </td>
                  <td className="border border-border p-3">12月</td>
                  <td className="border border-border p-3 text-xs">
                    加湿器の準備。乾燥対策の確認
                  </td>
                  <td className="border border-border p-3 text-xs">
                    冬の乾燥ダメージを軽減
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/60 mt-4">
            各季節で「畳を上げての換気」を実施すると、床下の湿気が逃げて、カビ・ダニが発生しにくくなります。
          </p>
        </section>

        {/* ─── 日常のお手入れ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            日常のお手入れ方法（毎日実施）
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">
                ① 毎日の掃除（朝または夜）
              </h3>
              <p className="text-sm text-sumi/80 mb-3">
                掃除機で全体を吸い込んだ後、乾いた雑巾で目に沿ってさっと拭く。湿った雑巾は絶対に使用しないでください。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">
                ② 定期的な換気（毎日、10分以上）
              </h3>
              <p className="text-sm text-sumi/80 mb-3">
                朝起きた時、帰宅時など、1日複数回の短時間換気が効果的です。季節を問わず、毎日の換気が湿度管理の最も重要な方法です。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">
                ③ 除湿機の活用（梅雨〜初夏）
              </h3>
              <p className="text-sm text-sumi/80 mb-3">
                6月～7月は毎日8時間程度の除湿機運転が目安です。湿度60%を超えないよう管理することが、カビ予防の鍵になります。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">
                ④ ラグ・マットの使用を避ける
              </h3>
              <p className="text-sm text-sumi/80 mb-3">
                畳の上にラグやマットを敷くと、湿気がこもってカビ・ダニが繁殖しやすくなります。必要な場合も定期的に上げて、畳を通風させてください。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">
                ⑤ 水拭きは厳禁
              </h3>
              <p className="text-sm text-sumi/80 mb-3">
                水拭きはカビの栄養源となる水分を与えることになります。必ず乾いた布を使用してください。飲み物をこぼした場合は、すぐに乾いた布で吸収してください。
              </p>
            </div>
          </div>
        </section>

        {/* ─── カビ・ダニ対策 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            カビ・ダニ対策（梅雨〜夏の湿気に備える）
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">カビ対策</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-sumi/80">
                <li>湿度を60%以下に保つ（最重要）</li>
                <li>毎日の換気で空気の流れを作る</li>
                <li>梅雨〜初夏は除湿機を毎日使用</li>
                <li>
                  畳を月1回上げて、下地と裏側を乾燥させる
                </li>
                <li>雨の日の後は特に念入りに換気</li>
                <li>
                  表面に軽微なカビが出た場合は、乾いた布で拭き、70%アルコールスプレーで除菌
                </li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">ダニ対策</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-sumi/80">
                <li>湿度を60%以下に保つ（ダニ対策の基本）</li>
                <li>毎週2回以上の掃除機がけ</li>
                <li>月1回の畳を上げての清掃</li>
                <li>防ダニシートの使用（特に古い建物向け）</li>
                <li>い草より和紙畳・樹脂畳への変更を検討</li>
                <li>アレルギーが気になる場合は医師相談</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 四季別の注意点 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            四季別の注意点と対策
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-border rounded-sm p-4">
              <h3 className="font-medium text-sumi mb-3">🌸 春（3月～5月）</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-sumi/80">
                <li>定期保全の黄金期間</li>
                <li>天気の良い日に畳を上げて日干し</li>
                <li>冬に溜まった湿気を完全に除去</li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-sm p-4">
              <h3 className="font-medium text-sumi mb-3">☀ 夏（6月～8月）</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-sumi/80">
                <li>毎日の換気が最重要</li>
                <li>除湿機の毎日使用（湿度60%以下）</li>
                <li>カビ・ダニの繁殖時期</li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-sm p-4">
              <h3 className="font-medium text-sumi mb-3">🍂 秋（9月～11月）</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-sumi/80">
                <li>台風による湿度上昇に注意</li>
                <li>雨の後の十分な換気</li>
                <li>秋の好天を利用した清掃</li>
              </ul>
            </div>

            <div className="bg-white border border-border rounded-sm p-4">
              <h3 className="font-medium text-sumi mb-3">❄ 冬（12月～2月）</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-sumi/80">
                <li>乾燥によるひび割れに注意</li>
                <li>加湿器で湿度40～50%を保つ</li>
                <li>定期的な換気で空気を入れ替え</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ─── 表替え・裏返しの最適タイミング ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            表替え・裏返しの最適なタイミング
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80">
            <p className="font-medium text-sumi">
              推奨スケジュールの目安：
            </p>

            <div className="space-y-3">
              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">
                  ① 裏返し（3〜5年使用）
                </p>
                <p>
                  使用3年程度で裏返しを検討してください。これにより費用を抑えながら清潔感をリセットできます。
                </p>
              </div>

              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">
                  ② 表替え（5〜8年使用）
                </p>
                <p>
                  湿気がこもりやすい部屋では、一般的な目安（5～8年）より早く交換が必要になることがあります。い草の色が黄ばんでいたら、表替えのサインです。
                </p>
              </div>

              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">
                  ③ 新調（8〜15年使用）
                </p>
                <p>
                  畳床がへたっている、踏み込むと沈む、カビが深部に及んでいるなどの場合は新調を検討してください。
                </p>
              </div>
            </div>

            <p className="text-xs text-sumi/60 bg-yellow-50/30 border border-yellow-200/50 rounded p-3">
              注意：梅雨〜夏に湿気がこもりやすい住まいでは、標準的な目安より早めの対応がカビ・ダニ予防につながります。不安な場合は専門家に相談してください。
            </p>
          </div>
        </section>

        {/* ─── よくあるトラブルと解決策 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            よくあるトラブルと解決策
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                Q：黒・緑のカビが点々と出ている
              </p>
              <p className="text-sm text-sumi/80">
                表面のみであれば乾いた布で拭き、70%アルコールで除菌する応急処置が有効です。臭いが残る・広範囲な場合は、表替えをおすすめします。
              </p>
            </div>

            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                Q：い草が黄ばんできた
              </p>
              <p className="text-sm text-sumi/80">
                日焼けと劣化の両方が考えられます。色褪せが目立つ場合は表替え時期です。すぐに施工する必要はありませんが、見積もりを取ることをおすすめします。
              </p>
            </div>

            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                Q：踏むとフカフカしてへたりを感じる
              </p>
              <p className="text-sm text-sumi/80">
                畳床が劣化している兆候です。表替えではなく、新調が必要になる可能性があります。現地確認をおすすめします。
              </p>
            </div>

            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                Q：季節の変わり目に異臭がする
              </p>
              <p className="text-sm text-sumi/80">
                湿度が変動するときにカビが活動し、臭いが発生することがあります。毎日の換気・除湿機の活用で予防してください。臭いが強い場合は、メンテナンスが必要です。
              </p>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-8"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            葛飾区の畳メンテナンスに関するよくあるご質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── Related Pages ─── */}
        <section className="pt-8 border-t border-border">
          <h3 className="text-lg text-sumi mb-6 font-medium">関連ページ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/area/katsushika/guide-tatami-buying"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区で畳を選ぶ時の完全ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                素材・サイズ・予算の選び方
              </p>
            </Link>
            <Link
              href="/area/katsushika/guide-tatami-price"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区の畳工事 料金ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                費用相場・見積もり方法
              </p>
            </Link>
            <Link
              href="/area/katsushika/problems/tatami-mold"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区で畳のカビが気になる方へ
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                原因・対処法・専門家への相談
              </p>
            </Link>
            <Link
              href="/area/katsushika"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区の畳工事 TOP
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                対応エリア・サービス一覧
              </p>
            </Link>
            <Link
              href="/area/katsushika/shibamata"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                柴又の畳張替え・表替え
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                寺社や伝統的な和室の畳もご相談ください
              </p>
            </Link>
            <Link
              href="/area/katsushika/mizumoto"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                水元の畳張替え・表替え
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                水元・東水元・西水元・南水元エリア
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* ─── CTA ─── */}
      <CTASection
        title="葛飾区での畳メンテナンスについてご相談ください"
        subtitle="定期保全・お手入れ方法・カビ対策など、メンテナンスに関するご質問にお答えします。"
        variant="dark"
      />
    </>
  );
}
