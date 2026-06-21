import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `クロス張替えの費用・種類・業者選び｜住宅・賃貸・店舗・オフィス対応 | ${SITE_NAME}`,
  description:
    "クロス張替えの費用相場・種類・選び方を専門業者が解説。ビニール・布・紙・機能性クロスの違い、防カビ・消臭・ペット対応などの機能、賃貸退去後の費用負担、部分補修と全面張替えの判断基準、費用目安表まで。",
  path: "/interior/cross",
});

const crossFaqs: FaqItem[] = [
  { category: "general", q: "クロスはどのくらいで張り替えるべきですか？", a: "一般的に5〜10年が張替えの目安です。日焼けによる変色、剥がれ、継ぎ目の開き、カビ・しみ、タバコのヤニ汚れなどが見られたら張替え時です。退去時・売却前・来客前のタイミングで整える方も多くいらっしゃいます。" },
  { category: "material", q: "クロスにはどんな種類がありますか？", a: "国内で最も普及しているビニールクロスのほか、高級感のある布クロス、自然素材の紙クロス、防カビ・消臭・抗菌などの機能を備えた機能性クロスがあります。用途・予算・目的に合わせてご提案します。" },
  { category: "material", q: "機能性クロスとは何ですか？", a: "表面に特殊加工を施し、防カビ・抗菌・消臭・防汚・吸湿・防音などの機能を持たせたクロスです。キッチン・トイレ・ペットのいる部屋・お子様のいる部屋など、目的に応じて選ぶと快適さが長持ちします。" },
  { category: "material", q: "ペット対応のクロスはありますか？", a: "はい。表面を強化し、引っかき傷や汚れに強いペット対応クロスがあります。腰から下だけペット対応クロスにする部分施工も可能で、費用を抑えながら傷みやすい箇所を保護できます。" },
  { category: "general", q: "一部屋だけ・一面だけの張替えもできますか？", a: "はい。部屋単位・壁一面単位での張替えにも対応します。ただし既存クロスとの色・柄の差が出る場合があるため、仕上がりについては事前にご説明します。アクセントクロスとして一面だけ変える施工も人気です。" },
  { category: "general", q: "部分補修と全面張替えはどう判断しますか？", a: "傷・剥がれが一部に限られ、既存クロスがまだ廃番でなければ部分補修が可能です。ただし日焼けで色差が出やすいため、見た目を重視する場合や複数箇所が傷んでいる場合は全面張替えがおすすめです。状態を確認してご提案します。" },
  { category: "general", q: "家具がある状態でも施工できますか？", a: "可能ですが、壁面を空ける必要があるため家具の移動が伴います。当日に移動できる範囲は対応し、大型家具は事前にご相談のうえ段取りを決めます。空室・空き家のほうがスムーズに施工できます。" },
  { category: "general", q: "下地の傷みがある場合はどうなりますか？", a: "クロスを剥がした際に下地（石膏ボード等）の傷み・カビ・剥がれが見つかることがあります。その場合は下地補修を行ってから張ります。補修が必要な場合は事前にご説明し、ご了承いただいてから進めます。" },
  { category: "btob", q: "飲食店・店舗向けのクロスはありますか？", a: "はい。油煙・汚れに強い防汚クロスや、消臭・抗菌機能のあるクロスを飲食店・店舗向けにご提案します。厨房まわりや客席など、用途に応じた使い分けが可能です。" },
  { category: "btob", q: "賃貸退去時、クロスの張替え費用は誰が負担しますか？", a: "クロスは経過年数を考慮して負担を按分する考え方が一般的です。通常損耗・経年劣化は貸主負担、落書き・くぎ穴・タバコのヤニなど借主の過失分は借主負担となる場合があります。国土交通省のガイドラインの考え方に沿って現場状況を整理します。" },
  { category: "timing", q: "工期はどのくらいですか？", a: "6畳一間の壁・天井で1日程度が目安です。部屋数・面積・下地補修の有無により変動します。複数部屋・住戸まるごとの場合は数日かかることもあります。事前にスケジュールをご案内します。" },
  { category: "price", q: "費用はどのくらいですか？", a: "ビニールクロス（量産）は壁800円〜/m²、天井900円〜/m²が目安です。機能性クロスは1,200円〜/m²程度です。面積・下地補修の有無により変動します。畳・床と合わせた一括見積もりも可能で、現地確認後に無料でお見積もりします。" },
];

export default function CrossPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="クロス張替えの費用・種類・業者選び"
      subtitle="劣化・剥がれ・変色したクロスを新しく張り替えます。住宅・賃貸・店舗・オフィスに対応し、畳工事と合わせて空間全体を一新できます。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "クロス張替え" }]}
      image="/images/nihon-tatami/restoration/restoration-wallpaper-01.png"
      sections={[
        {
          heading: "クロス張替えで変わること",
          content: (
            <>
              <p>
                日焼け・しみ・カビ・剥がれ・タバコのヤニなど、劣化したクロスを張り替えることで、
                部屋全体の清潔感・明るさが大幅に改善します。クロスは室内で最も面積が大きく、空間の印象を決定づける要素です。
              </p>
              <p>
                和室では畳の張替えと合わせることで空間全体のリフレッシュが効率よく行えます。
                賃貸の原状回復、売却前の印象改善、店舗・オフィスのリニューアルなど、さまざまな目的に対応します。
              </p>
            </>
          ),
        },
        {
          heading: "クロスの種類詳細",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">ビニールクロス</strong> — 塩化ビニール製で国内シェアの大半を占める定番。色柄が豊富でコストを抑えられ、汚れにも比較的強い。賃貸・住宅で広く使われます。</li>
              <li><strong className="text-sumi">布クロス（織物クロス）</strong> — 布地を用いた高級感のある素材。重厚で深みのある質感が得られますが、価格は高めで汚れには弱い面があります。</li>
              <li><strong className="text-sumi">紙クロス</strong> — 紙を主原料とした自然素材系。輸入デザインも豊富で、独特の風合いがあります。湿気・施工に配慮が必要です。</li>
              <li><strong className="text-sumi">機能性クロス</strong> — 防カビ・抗菌・消臭・防汚・吸湿・防音などの機能を備えたクロス。目的に応じて選びます。</li>
            </ul>
          ),
        },
        {
          heading: "機能性クロスの種類と効果",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">防カビ</strong> — 湿気の多い水回り・北側の部屋に。カビの発生を抑えます。</li>
              <li><strong className="text-sumi">抗菌</strong> — 菌の繁殖を抑え、衛生的な環境を保ちます。</li>
              <li><strong className="text-sumi">消臭</strong> — タバコ・ペット・生活臭を軽減。トイレ・リビングに。</li>
              <li><strong className="text-sumi">防汚</strong> — 表面が汚れをはじき、拭き取りやすい。キッチン・店舗に。</li>
              <li><strong className="text-sumi">吸湿（調湿）</strong> — 室内の湿度を緩和し、結露を抑えます。</li>
              <li><strong className="text-sumi">防音</strong> — 生活音を和らげ、集合住宅などに。</li>
            </ul>
          ),
        },
        {
          heading: "賃貸退去後のクロス張替えと費用負担",
          content: (
            <p>
              賃貸退去時のクロス費用は、経過年数を考慮して負担を按分する考え方が一般的です。
              国土交通省のガイドラインでは、クロスは6年で残存価値1円に近づくとされ、経過年数に応じて借主の負担割合が軽減されます。
              通常損耗・経年劣化は貸主負担、落書き・くぎ穴・タバコのヤニなど借主の過失分は借主負担となる場合があります。
              当社は現場状況を写真付きで整理し、判断材料をご提供します。
            </p>
          ),
        },
        {
          heading: "部分補修と全面張替えの判断基準",
          content: (
            <p>
              傷・剥がれが一部に限られ、既存クロスが廃番でなければ部分補修が可能で、費用を抑えられます。
              ただしクロスは日焼けで徐々に色が変わるため、部分補修では新旧の色差が出やすくなります。
              見た目を重視する場合、複数箇所が傷んでいる場合、または築年数が経っている場合は、面単位・部屋単位での全面張替えがおすすめです。
              状態を確認したうえで、費用と仕上がりのバランスを踏まえてご提案します。
            </p>
          ),
        },
        {
          heading: "クロス種類の比較表",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-border">
                <thead className="bg-kiji/60">
                  <tr>
                    <th className="py-2 px-3 text-left">種類</th>
                    <th className="py-2 px-3 text-left">費用</th>
                    <th className="py-2 px-3 text-left">耐久性</th>
                    <th className="py-2 px-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 px-3">ビニールクロス</td><td className="py-2 px-3">安〜中</td><td className="py-2 px-3">高い</td><td className="py-2 px-3">定番・色柄豊富・汚れに強い</td></tr>
                  <tr><td className="py-2 px-3">布クロス</td><td className="py-2 px-3">高い</td><td className="py-2 px-3">中</td><td className="py-2 px-3">高級感・重厚・汚れに弱い</td></tr>
                  <tr><td className="py-2 px-3">紙クロス</td><td className="py-2 px-3">中〜高</td><td className="py-2 px-3">中</td><td className="py-2 px-3">自然素材・独特の風合い</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "工事の流れ",
          content: (
            <ol className="space-y-2">
              <li>1. 現地確認・面積の計測・クロスの選定</li>
              <li>2. 家具の移動・養生</li>
              <li>3. 既存クロスの剥がし・下地の確認</li>
              <li>4. 下地補修（必要な場合）</li>
              <li>5. 新しいクロスの張り付け・継ぎ目処理</li>
              <li>6. 清掃・仕上がり確認</li>
            </ol>
          ),
        },
      ]}
      price={[
        { service: "ビニールクロス（壁・量産）", price: "800円〜/m²", note: "スタンダード" },
        { service: "クロス張替え（天井）", price: "900円〜/m²", note: "" },
        { service: "機能性クロス（防カビ・消臭等）", price: "1,200円〜/m²", note: "目的に応じて" },
        { service: "6畳和室の壁・天井（目安）", price: "30,000円〜", note: "面積により変動" },
        { service: "下地補修", price: "別途見積もり", note: "傷み・カビがある場合" },
      ]}
      faqs={crossFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "住宅内装リフォーム", href: "/interior/house-renovation" },
        { label: "原状回復", href: "/restoration" },
      ]}
      relatedPages={[
        { label: "店舗内装工事", href: "/interior/store-interior" },
        { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
