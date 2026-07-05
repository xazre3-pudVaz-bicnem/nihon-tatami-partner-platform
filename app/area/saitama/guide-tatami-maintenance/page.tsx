import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title:
    "埼玉での畳メンテナンス完全ガイド｜定期保全・お手入れ方法・カビ対策｜日本畳パートナーズ",
  description:
    "埼玉の気候に合わせた畳メンテナンスガイド。定期保全スケジュール、日常のお手入れ、カビ・ダニ対策、寿命の延ばし方を解説。",
  path: "/area/saitama/guide-tatami-maintenance",
});

const faqItems = [
  {
    q: "埼玉の気候は畳にどのような影響を与えますか？",
    a: "埼玉県は梅雨〜夏の高温多湿（平均湿度70%以上）と冬の乾燥が激しい内陸性気候です。い草は湿度60%以上でカビが繁殖しやすく、冬の乾燥でひび割れが起きやすくなります。正しいメンテナンスで、埼玉の厳しい気候下でも畳の寿命を延ばすことができます。",
    category: "general" as const,
  },
  {
    q: "い草・和紙・樹脂畳の寿命はどのくらいですか？",
    a: "い草畳は8〜15年が目安ですが、埼玉の気候では5〜10年に短くなることもあります。和紙畳は15〜20年、樹脂畳は20年以上と耐久性が高いです。いずれも日常のメンテナンスが寿命を大きく左右します。",
    category: "general" as const,
  },
  {
    q: "定期保全スケジュールの目安は？",
    a: "埼玉の気候を考慮して、春（3月）・初夏（5月）・秋（9月）・冬（12月）の年4回、日当たりの良い日に半日〜1日畳を上げて、下地と畳の裏側を乾燥・風通しさせることをおすすめします。",
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
    a: "埼玉の高温多湿環境では、一般的な目安（表替え5〜8年、裏返し3〜5年）より1〜2年早まることがあります。い草の色が黄ばんでいる、踏んだときのへたりを感じる、臭いが気になるなどの症状が出ていたら、すぐに専門家に相談してください。",
    category: "timing" as const,
  },
  {
    q: "冬場の乾燥で畳が傷むのを防ぐには？",
    a: "冬場は加湿器を活用し、湿度40〜50%を保つことが理想的です。ただし畳の上に直接加湿器を置かず、部屋の隅に置いてください。また、暖房風が直接当たらない場所に畳を配置することも大切です。",
    category: "general" as const,
  },
  {
    q: "畳の下に敷くシートは必要ですか？",
    a: "防湿シートまたは通気性シートの使用をおすすめします。特に埼玉のような多湿地域では、床からの湿気上昇を防ぎ、カビ・ダニの繁殖を抑制できます。既存の床に敷く場合は、施工時にご相談ください。",
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
  areaServed: { "@type": "State", name: "埼玉県" },
  url: SITE_URL,
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

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "ガイド" },
            { label: "メンテナンスガイド" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Saitama Guide
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.06em",
            }}
          >
            埼玉での畳メンテナンスガイド
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            長く快適に使い続けるための保全方法。埼玉 畳メンテナンスの完全ガイド。定期保全スケジュール、日常のお手入れ、カビ・ダニ対策、寿命の延ばし方まで、埼玉の気候に合わせたメンテナンス知識をお伝えします。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 埼玉の気候が畳に与える影響 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            埼玉の気候が畳に与える影響
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              埼玉県は内陸性気候で、気温・湿度の変動が大きい地域です。このような環境下で畳を長く保つには、季節ごとの対策が欠かせません。
            </p>

            <div className="space-y-3">
              <div className="bg-sumi/5 p-4 rounded">
                <p className="font-medium text-sumi mb-1">梅雨〜夏（6月〜8月）</p>
                <p>
                  平均湿度70%以上と非常に高く、カビ・ダニが繁殖しやすい時期です。い草の多孔質構造に湿気が溜まりやすく、対策がなければカビが急速に広がります。毎日の換気・除湿が最重要です。
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
                  乾燥が激しく、い草表面のひび割れや毛羽立ちが起きやすい時期です。加湿器で湿度40〜50%を保つことで、乾燥ダメージを軽減できます。
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
            埼玉での畳の寿命（素材別）
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
                  <span className="font-medium">埼玉での実寿命：</span>
                  5〜10年（気候により短くなる傾向）
                </p>
                <p className="text-xs">
                  い草は調湿性に優れている反面、埴玉の高温多湿環境ではカビ・ダニが発生しやすく、寿命が短くなります。定期的なメンテナンスで延命が可能です。
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
                  カビが繁殖しにくく、い草より耐久性が高いため、埴玉の気候でも長く使用できます。アレルギー対策としても有効です。
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
                  完全防水で湿度の影響をほぼ受けません。メンテナンス負担が最も少なく、埴玉のような多湿地域に最適な素材です。
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
            埼玉での畳 定期保全スケジュール（年4回推奨）
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
            カビ・ダニ対策（埼玉の気候に合わせた）
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
              埼玉での推奨スケジュール：
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
                  埴玉の気候では一般的な目安（5～8年）より1～2年早く交換が必要になることがあります。い草の色が黄ばんでいたら、表替えのサイン。
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
              注意：埴玉の高温多湿環境では、標準的な目安より早めの対応がカビ・ダニ予防につながります。不安な場合は専門家に相談してください。
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
            埼玉 畳メンテナンスに関するよくあるご質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── Related Pages ─── */}
        <section className="pt-8 border-t border-border">
          <h3 className="text-lg text-sumi mb-6 font-medium">関連ページ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/area/saitama/guide-tatami-buying"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉で畳を選ぶ時の完全ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                素材・サイズ・予算の選び方
              </p>
            </Link>
            <Link
              href="/area/saitama/guide-tatami-price"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉の畳工事 料金ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                費用相場・見積もり方法
              </p>
            </Link>
            <Link
              href="/area/saitama/problems/tatami-mold"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉で畳のカビが気になる方へ
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                原因・対処法・専門家への相談
              </p>
            </Link>
            <Link
              href="/area/saitama"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                埼玉の畳工事 TOP
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                対応エリア・サービス一覧
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* ─── CTA ─── */}
      <CTASection
        title="埼玉の畳メンテナンスについてご相談ください"
        subtitle="定期保全・お手入れ方法・カビ対策など、メンテナンスに関するご質問にお答えします。"
        variant="dark"
      />
    </>
  );
}
