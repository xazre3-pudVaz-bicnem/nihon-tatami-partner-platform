import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳表替え | 国産い草・和紙畳・樹脂畳対応 | ${SITE_NAME}`,
  description: "畳表替えとは畳床はそのままに表面を新しく張り替えるメンテナンス。素材・工程・料金目安・施工の流れ・対応シーンを詳しく解説。住宅・旅館・賃貸物件対応。現地確認・お見積もり無料。",
  path: "/services/tatami-omotegae",
});

const tatamiFaqs = [
  {
    category: "general" as const,
    q: "表替えは何日かかりますか？",
    a: "枚数や素材によりますが、引き取り後に翌日返しが可能なケースが多いです。当日返しに対応できる場合もあります。詳しくはお問い合わせ時にご確認ください。",
  },
  {
    category: "timing" as const,
    q: "表替えのタイミングの目安は？",
    a: "前回の張り替えから5〜8年、または裏返しの時期を逃して色あせ・ささくれが目立ってきた頃が目安です。畳床に沈みがなければ表替えで十分です。",
  },
  {
    category: "general" as const,
    q: "家具はどうすればいいですか？",
    a: "畳の上の家具は事前に移動が必要です。大型家具の移動が難しい場合はご相談ください。状況に応じて対応方法をご案内します。",
  },
  {
    category: "material" as const,
    q: "どの素材を選べばいいですか？",
    a: "香りを重視するなら国産い草、耐久性・撥水性なら和紙畳、清掃性なら樹脂畳がおすすめです。用途やご予算に合わせてご提案します。",
  },
  {
    category: "general" as const,
    q: "縁の交換費用は別ですか？",
    a: "表替えでは通常、縁の交換も含まれます。特殊な縁をご希望の場合は別途ご相談ください。",
  },
  {
    category: "general" as const,
    q: "賃貸物件の表替えもできますか？",
    a: "はい。賃貸の退去後・入居前の表替えに対応します。管理会社様・オーナー様のご依頼、複数物件もご相談ください。",
  },
  {
    category: "general" as const,
    q: "カビ・臭いがある畳でも表替えできますか？",
    a: "表面だけの問題なら表替えで改善します。芯まで及んでいる場合は再発するため新調をおすすめすることがあります。現地で確認します。",
  },
  {
    category: "price" as const,
    q: "見積もりは無料ですか？",
    a: "はい。現地確認・お見積もりは無料です。素材・枚数により費用は変動しますので、内訳を明確にしてご案内します。",
  },
  {
    category: "timing" as const,
    q: "法事・来客前に間に合いますか？",
    a: "日程をお知らせいただければ、間に合うようスケジュールを調整します。枚数が多い場合は早めのご相談がおすすめです。",
  },
  {
    category: "general" as const,
    q: "旅館・寺社の大量施工も対応できますか？",
    a: "はい。客室・本堂など広い面積・大量枚数にも対応します。営業や行事に支障が出ないよう計画施工します。",
  },
];

export default function TatamiOmotegaePage() {
  return (
    <ServicePageTemplate
      eyebrow="Tatami Works"
      title="畳表替え"
      subtitle="畳床はそのままに、表面の畳表（ゴザ）を新しいい草に張り替えます。費用を抑えながら清潔感・い草の香りを取り戻せる最も一般的なメンテナンスです。"
      breadcrumbs={[
        { label: "サービス", href: "/services" },
        { label: "畳工事", href: "/services/tatami" },
        { label: "畳表替え" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-craftsman-01.png"
      sections={[
        {
          heading: "畳表替えとは",
          content: (
            <>
              <p>
                畳表替えとは、畳床（芯材）はそのままに、表面の畳表（ゴザ）と縁を新しいものに張り替える施工です。
                費用を抑えながら、新品のい草の香りと清潔感を取り戻せる最も一般的なメンテナンス方法です。
              </p>
              <p>
                畳全体を作り替える新調に比べて費用を大きく抑えられ、見た目と肌触りは新品同様によみがえります。
                畳床が傷んでいなければ、最もコストパフォーマンスの良い選択肢です。
              </p>
              <p>
                表替えの目安は5〜8年に一度。ただし、ささくれが目立つ、色あせが気になる、
                カビ・ダニの臭いがするなどのサインが出たら早めのメンテナンスをお勧めします。
              </p>
            </>
          ),
        },
        {
          heading: "表替えの工程",
          content: (
            <ol className="space-y-2">
              <li>1. 現地確認・採寸・素材のご相談（無料）</li>
              <li>2. 畳の引き取り（既存の畳を工場へ）</li>
              <li>3. 古い畳表と縁を丁寧に取り外す</li>
              <li>4. 畳床の点検・調整（必要に応じて補修）</li>
              <li>5. 新しい畳表を張り、縁を縫い付ける</li>
              <li>6. 仕上げ・検品</li>
              <li>7. 納品・敷き込み・最終確認</li>
            </ol>
          ),
        },
        {
          heading: "使用できる素材と選び方",
          content: (
            <>
              <p>表替えに使用できる畳表の素材は多岐にわたります。用途とご予算に合わせてお選びください。</p>
              <ul className="space-y-2">
                <li><strong className="text-sumi">国産い草（機械すき）</strong> — 標準的な品質。香りと風合いのバランスが良い</li>
                <li><strong className="text-sumi">国産い草（手刈り・天日干し）</strong> — 高品質・香りが豊か。旅館・茶室・寺社向け</li>
                <li><strong className="text-sumi">和紙畳</strong> — 耐久性・撥水性が高く色あせに強い。ペット・子育て家庭向け</li>
                <li><strong className="text-sumi">樹脂畳</strong> — 水拭き可能で汚れに強い。店舗・旅館・水回り向け</li>
              </ul>
              <p>
                香りを重視するなら国産い草、耐久性・撥水性なら和紙畳、清掃性なら樹脂畳がおすすめです。
                <a href="/materials" className="text-ai hover:underline">素材図鑑</a>で各素材の特徴を詳しくご紹介しています。
              </p>
            </>
          ),
        },
        {
          heading: "よくあるご相談",
          content: (
            <ul className="space-y-2">
              <li>— 畳表のささくれ・色あせが気になる</li>
              <li>— い草の香りを取り戻したい</li>
              <li>— 費用を抑えてきれいにしたい</li>
              <li>— 賃貸物件の入退去時のリフレッシュ</li>
              <li>— ペット・子どもの汚れに強い素材に変えたい</li>
              <li>— 法事・来客前に間に合わせたい</li>
              <li>— 旅館・施設の定期メンテナンス</li>
              <li>— 寺社の本堂・客殿を格式に合わせて</li>
            </ul>
          ),
        },
        {
          heading: "施工前に知っておくべきこと",
          content: (
            <>
              <p>
                表替えは畳床が健全であることが前提です。踏むと沈む・ふかふかする場合は畳床が傷んでいるため、
                表替えではなく新調が必要になります。現地確認で畳床の状態を見極めてご案内します。
              </p>
              <p>
                カビ・臭いが芯まで及んでいる場合も、表替えだけでは再発することがあります。
                表面だけの問題か、芯まで及んでいるかを確認したうえで最適な方法をご提案します。
              </p>
              <p>
                畳の上の家具は事前に移動が必要です。大型家具の移動が難しい場合は事前にご相談ください。
              </p>
            </>
          ),
        },
        {
          heading: "対応シーン",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">住宅</strong> — 和室の畳を清潔に。素材選びからご相談</li>
              <li><strong className="text-sumi">賃貸</strong> — 退去後・入居前のリフレッシュ。複数物件対応</li>
              <li><strong className="text-sumi">旅館</strong> — 客室を営業を止めずに計画施工。繁忙期前の整備</li>
              <li><strong className="text-sumi">寺社</strong> — 本堂・客殿を格式に合わせて。行事に合わせた施工</li>
              <li><strong className="text-sumi">店舗</strong> — 座敷・小上がりを清掃性重視で。営業時間外に施工</li>
            </ul>
          ),
        },
      ]}
      price={[
        { service: "畳表替え（中国産い草）", price: "お見積もり", note: "コスト重視" },
        { service: "畳表替え（国産い草・機械すき）", price: "お見積もり", note: "標準グレード" },
        { service: "畳表替え（国産い草・手刈り）", price: "お見積もり", note: "高品質グレード" },
        { service: "畳表替え（和紙畳）", price: "お見積もり", note: "耐久性・撥水性重視" },
        { service: "畳表替え（樹脂畳）", price: "お見積もり", note: "水拭き可能・清掃性重視" },
      ]}
      faqs={tatamiFaqs.length > 0 ? tatamiFaqs : FAQ_ITEMS.slice(0, 4)}
      relatedServices={[
        { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "樹脂畳", href: "/services/resin-tatami" },
      ]}
      relatedPages={[
        { label: "畳表替えの完全ガイド", href: "/column/tatami-omotegae-guide" },
        { label: "畳表替えの費用", href: "/column/tatami-omotegae-cost" },
        { label: "畳・素材図鑑", href: "/materials" },
        { label: "施工事例を見る", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
