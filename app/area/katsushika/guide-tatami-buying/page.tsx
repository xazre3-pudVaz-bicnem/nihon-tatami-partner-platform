import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = buildMetadata({
  title:
    "葛飾区で畳を選ぶ時の完全ガイド｜素材・サイズ・予算から正しい判断を｜葛飾畳店",
  description:
    "葛飾区での畳選びの完全ガイド。い草・和紙・樹脂の比較、梅雨〜夏の湿気を踏まえた素材選び、江戸間・団地間などのサイズ確認、予算別の選択肢をまとめました。",
  path: "/area/katsushika/guide-tatami-buying",
});

const faqItems = [
  {
    q: "葛飾区の住まいに合う畳素材は何ですか？",
    a: "葛飾区は、東京23区のほかの地域と同様に、梅雨〜夏は高温多湿で、冬は乾燥します。1階の和室や川に近い低地の住まいでは、湿気がこもりやすい場合もあります。い草は調湿性に優れていますが湿気に弱いため、カビ対策が必須となります。カビ・ダニを避けたい場合は和紙畳、完全防水が欲しい場合は樹脂畳がおすすめです。い草を選ぶ場合は定期的な換気・除湿を心がけてください。",
    category: "general" as const,
  },
  {
    q: "い草・和紙・樹脂畳の違いを教えてください。",
    a: "い草畳は本来の畳の香りと調湿性が特徴で、最も一般的です。和紙畳は傷・汚れ・ダニに強く、樹脂畳は完全防水で水拭きが可能です。い草は費用が低く香りが良い反面、湿気対策が必要。和紙・樹脂は高価ですが耐久性と手入れの手軽さが利点です。",
    category: "material" as const,
  },
  {
    q: "葛飾区の住まいでよく使われる畳のサイズは？",
    a: "葛飾区を含む関東では、江戸間（176cm×88cm）が一般的です。区内に多い団地などの集合住宅では、ひと回り小さい団地間の場合もあります。古い住宅では中京間・京間が使われていることもあるため、採寸後に正確なサイズを決定することが重要です。間違ったサイズを発注すると調整に時間がかかるため、事前の現地確認をおすすめします。",
    category: "general" as const,
  },
  {
    q: "予算が限られている場合は何を優先すべきですか？",
    a: "まず現在の畳の状態を正確に把握することが大切です。表面だけが傷んでいれば表替え（比較的低費用）で十分な場合もあります。費用を抑えたい場合は裏返しを選択し、素材は国産中級い草を選ぶと費用対効果が高いです。",
    category: "price" as const,
  },
  {
    q: "ペットがいる家庭ではどの素材が最適ですか？",
    a: "ペットの爪・尿の影響を考えると、樹脂畳が最適です。完全防水で傷に強く、水拭きで簡単にお手入れできます。次点として和紙畳も傷・汚れに強くペット対応に向いています。い草畳はペットの爪で毛羽立ちやすく、尿の臭いが染み込みやすいため避けた方が無難です。",
    category: "material" as const,
  },
  {
    q: "子どもがいる場合の畳選びのポイントは何ですか？",
    a: "お子様のアレルギー防止や安全性を考慮すると、ダニが繁殖しにくい和紙畳・樹脂畳をおすすめします。い草畳を選ぶ場合は高品質なグレードを選び、定期的な清掃・乾燥・換気をより丁寧に行ってください。",
    category: "material" as const,
  },
  {
    q: "新調時にわら床と建材床のどちらを選ぶべきですか？",
    a: "わら床は伝統的で調湿性・断熱性に優れていますが、湿度管理が必要です。建材床は湿度に強く、マンション向けに薄型も対応でき、初期費用も抑えられます。どちらも使用できますが、梅雨〜夏の湿気が気になる部屋では、湿度に強い建材床も選択肢になります。予算とメンテナンス負担を考慮してご選択ください。",
    category: "general" as const,
  },
  {
    q: "葛飾区で畳を交換するタイミングの目安は？",
    a: "表替えは5〜8年、裏返しは3〜5年が標準的です。ただし1階の和室や北側の部屋など、湿気がこもりやすい環境では目安より早く傷むことがあります。日当たり・使用頻度・素材によって大きく異なりますので、専門家に現地確認してもらい、目安をお伝えしてもらうことをおすすめします。",
    category: "timing" as const,
  },
  {
    q: "畳選びで見積もり前に確認すべきことは何ですか？",
    a: "①部屋の広さと畳の枚数 ②現在の畳の素材と劣化状態 ③ご希望の素材とグレード ④建物の構造（戸建 / マンション） ⑤特殊な要望（ペット対応など）の5点です。これらを事前に整理しておくと、見積もり依頼がスムーズになります。",
    category: "general" as const,
  },
  {
    q: "国産・輸入い草の違いは何ですか？",
    a: "国産い草（特に熊本産）は太く、色合い・香りが良く、品質にばらつきが少ないです。輸入い草（中国産など）は価格が低い利点がある反面、色が薄めで香りが劣ります。予算が許せば国産い草をおすすめしますが、中級グレードの国産でも十分に質感が高いです。",
    category: "material" as const,
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

export default function TatamiGuideBuyingPage() {
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
            { label: "葛飾区", href: "/area/katsushika" },
            { label: "ガイド" },
            { label: "畳選びガイド" },
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
            葛飾区で失敗しない畳選びガイド
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            素材・サイズ・予算の正しい判断方法をまとめた、葛飾区の畳選びガイドです。梅雨〜夏の湿気を踏まえた素材選びから予算別の選択肢まで、畳選びで失敗しないための知識をお伝えします。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 畳選びの3つのポイント ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            葛飾区での畳選びの3つのポイント
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              葛飾区の住まいで最適な畳を選ぶには、3つの視点が重要です。区内には昭和期からの木造住宅と駅前のマンションが混在し、和室の条件も住まいごとに異なります。素材選び、サイズ決定、予算配分のバランスを取ることで、長く満足できる畳生活が実現します。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">素材選び</span>
                — い草・和紙・樹脂の3種類から、部屋の湿気の状況と用途に合わせて選択
              </li>
              <li>
                <span className="font-medium">サイズ確認</span>
                — 江戸間が標準ですが、古い住宅は異なる場合も。事前確認が重要
              </li>
              <li>
                <span className="font-medium">予算配分</span>
                — 表替え・裏返し・新調の中から、現状と目的に合わせて選択
              </li>
            </ul>
          </div>
        </section>

        {/* ─── い草・和紙・樹脂の特性比較 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            3つの畳素材（い草・和紙・樹脂）の特性と選び方
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-6">
            <div>
              <h3 className="font-medium text-sumi mb-2">
                ◆ い草畳（伝統畳）
              </h3>
              <p className="text-sm text-sumi/80 mb-2">
                最も一般的で、畳本来の香りと調湿性が特徴です。熊本産などの国産い草は品質が高く、色合い・香りが優れています。ただし湿度に敏感で、梅雨〜夏は湿気対策が必須です。
              </p>
              <p className="text-xs text-sumi/60">
                【向いている場合】畳の香りを大切にしたい、予算を抑えたい、一般的な住宅向け
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-medium text-sumi mb-2">
                ◆ 和紙畳（機能性畳）
              </h3>
              <p className="text-sm text-sumi/80 mb-2">
                傷・汚れ・ダニに強く、い草より耐久性が高いです。梅雨〜夏の高温多湿な時期でもカビが発生しにくく、アレルギーが心配な方に最適です。い草に比べ色が落ちにくく、長く美しい状態を保てます。
              </p>
              <p className="text-xs text-sumi/60">
                【向いている場合】
                アレルギー対策、ペット・子どもがいる、耐久性重視、メンテナンスの手間を減らしたい
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <h3 className="font-medium text-sumi mb-2">
                ◆ 樹脂畳（完全防水）
              </h3>
              <p className="text-sm text-sumi/80 mb-2">
                完全防水で水拭きが可能。ペットの尿・飲食店の水しぶきにも対応します。傷つきにくく耐久性が最も高いですが、い草の香りはありません。湿気がこもりやすい部屋の対策として最も効果的です。
              </p>
              <p className="text-xs text-sumi/60">
                【向いている場合】
                ペット・小さなお子様がいる、飲食店・医療施設、水による劣化を避けたい、最小限のメンテナンスを希望
              </p>
            </div>
          </div>
        </section>

        {/* ─── 葛飾区の住環境に合わせた素材選び ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            葛飾区の住環境・湿気に合わせた畳選び
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              葛飾区は荒川・中川・江戸川などの川に囲まれたまちで、区の多くが低地にあります。気候は東京23区のほかの地域と同様で、梅雨〜夏は高温多湿、冬は乾燥します。1階の和室や北側の部屋、川に近い低地の住まいでは、湿気がこもりやすい場合もあります。こうした住環境を理解した上で素材を選ぶことが、長期的な満足度を大きく左右します。
            </p>

            <div className="bg-shiro/50 p-4 rounded space-y-3">
              <div>
                <p className="font-medium text-sumi mb-1">
                  梅雨〜夏の高温多湿対策
                </p>
                <p>
                  い草畳は調湿性が高い反面、カビ・ダニが繁殖しやすい環境になります。毎日の換気・除湿機の活用が必須となります。和紙畳・樹脂畳なら湿気対策がより容易です。
                </p>
              </div>

              <div>
                <p className="font-medium text-sumi mb-1">冬の乾燥対策</p>
                <p>
                  い草は乾燥でひび割れやすくなりますが、和紙・樹脂畳はこの影響をほぼ受けません。特に樹脂畳は乾湿差への耐性が最も高いです。
                </p>
              </div>

              <div>
                <p className="font-medium text-sumi mb-1">結論</p>
                <p>
                  葛飾区の住まいでは、い草を選ぶ場合は「こまめなメンテナンスが前提」、手間を避けたい場合は「和紙畳・樹脂畳」が選び方の目安です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── サイズ選び ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            畳サイズの選び方（江戸間・中京間・京間・団地間）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-sumi/5">
                  <th className="border border-border p-3 text-left font-medium">
                    サイズ名
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    寸法
                  </th>
                  <th className="border border-border p-3 text-left font-medium">
                    主な使用状況
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-3 font-medium">江戸間</td>
                  <td className="border border-border p-3">176 × 88cm</td>
                  <td className="border border-border p-3">
                    関東の標準。新築の多くが対応
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    中京間
                  </td>
                  <td className="border border-border p-3">182 × 91cm</td>
                  <td className="border border-border p-3">
                    古い住宅や関西風建築で使用
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-medium">京間</td>
                  <td className="border border-border p-3">191 × 95cm</td>
                  <td className="border border-border p-3">
                    高級住宅・寺社建築のみ
                  </td>
                </tr>
                <tr className="bg-sumi/2">
                  <td className="border border-border p-3 font-medium">
                    団地間
                  </td>
                  <td className="border border-border p-3">160 × 80cm</td>
                  <td className="border border-border p-3">
                    1960年代のアパートで使用
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/60 mt-4">
            注：区内に多い団地などの集合住宅では、江戸間より小さい団地間の場合もあります。採寸時に正確なサイズを測定することが重要です。間違ったサイズの発注は調整に時間がかかり、追加費用が発生する場合があります。
          </p>
        </section>

        {/* ─── 予算別の選択肢 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            葛飾区での畳工事 予算別の選択肢
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">予算：～3,000円/枚</h3>
              <p className="text-sm text-sumi/80 mb-2">
                <span className="font-medium">裏返し（中古畳を利用）</span>
              </p>
              <p className="text-xs text-sumi/60">
                使用2〜3年の畳表の裏側を使用。費用を最小限に抑えたい場合の選択肢です。ただし元の畳の状態が良いことが前提となります。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">予算：3,000〜6,000円/枚</h3>
              <p className="text-sm text-sumi/80 mb-2">
                <span className="font-medium">
                  表替え（一般・中国産い草）
                </span>
              </p>
              <p className="text-xs text-sumi/60">
                最も一般的な選択肢。い草の香りを楽しめ、コストも抑えられます。メンテナンスがしっかりできる家庭向けです。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">予算：6,000〜10,000円/枚</h3>
              <p className="text-sm text-sumi/80 mb-2">
                <span className="font-medium">
                  表替え（国産上級い草・和紙畳）
                </span>
              </p>
              <p className="text-xs text-sumi/60">
                品質が大きく向上します。熊本産い草は香りが良く、長く使用できます。和紙畳はアレルギー対策・耐久性重視の場合におすすめです。
              </p>
            </div>

            <div className="bg-white border border-border rounded-sm p-6">
              <h3 className="font-medium text-sumi mb-3">予算：10,000円以上/枚</h3>
              <p className="text-sm text-sumi/80 mb-2">
                <span className="font-medium">
                  新調・樹脂畳・高級素材
                </span>
              </p>
              <p className="text-xs text-sumi/60">
                畳床から全て新しくします。わら床の場合は踏み心地が良く調湿性も高いです。樹脂畳は耐久性が最高で、ペット対応・飲食店向けです。
              </p>
            </div>
          </div>
        </section>

        {/* ─── よくある失敗例 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              letterSpacing: "0.05em",
            }}
          >
            畳選びでよくある失敗例と対策
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                ❌ 失敗例1：香りだけでい草を選んで、カビが生えた
              </p>
              <p className="text-sm text-sumi/80">
                1階の和室や川に近い低地の住まいなど、湿気がこもりやすい環境を考慮せずにい草を選択したケースです。い草を選ぶ場合は、毎日の換気・除湿機の活用が必須となることを理解してからご選択ください。
              </p>
            </div>

            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                ❌ 失敗例2：サイズ確認せず発注して、調整費用が発生
              </p>
              <p className="text-sm text-sumi/80">
                古い住宅のサイズを確認せず発注すると、調整作業が必要になります。事前の採寸が重要です。
              </p>
            </div>

            <div className="bg-red-50/30 border border-red-200/50 rounded-sm p-4">
              <p className="font-medium text-sumi mb-2">
                ❌ 失敗例3：安さだけで最低グレードを選んで、すぐ傷んだ
              </p>
              <p className="text-sm text-sumi/80">
                予算が限られている場合でも、多少品質を上げることで中長期的なコストを大きく削減できることがあります。費用面だけで判断しないことが重要です。
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
            葛飾区の畳選びに関するよくあるご質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── Related Pages ─── */}
        <section className="pt-8 border-t border-border">
          <h3 className="text-lg text-sumi mb-6 font-medium">関連ページ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/area/katsushika/guide-tatami-price"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区の畳工事 料金ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                費用相場・見積もり方法・料金比較
              </p>
            </Link>
            <Link
              href="/area/katsushika/guide-tatami-maintenance"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                葛飾区での畳メンテナンス完全ガイド
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                定期保全・お手入れ・カビ対策
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
              href="/area/katsushika/kameari"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                亀有の畳張替え・表替え
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                駅周辺のマンション・戸建ての和室もご相談ください
              </p>
            </Link>
            <Link
              href="/area/katsushika/horikiri"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                堀切の畳張替え・表替え
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                昭和期からの木造住宅の和室もご相談ください
              </p>
            </Link>
            <Link
              href="/services/washi-tatami"
              className="block p-4 border border-border rounded-sm hover:bg-shiro transition-colors duration-200"
            >
              <p className="font-medium text-sumi text-sm">
                和紙畳・樹脂畳のご紹介
              </p>
              <p className="text-xs text-sumi/60 mt-1">
                素材の特性・選び方
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* ─── CTA ─── */}
      <CTASection
        title="葛飾区での畳選びを専門家に相談する"
        subtitle="素材・予算・サイズについてお迷いですか？無料でお見積もり・ご相談いたします。葛飾区全域に出張対応しています。"
        variant="dark"
      />
    </>
  );
}
