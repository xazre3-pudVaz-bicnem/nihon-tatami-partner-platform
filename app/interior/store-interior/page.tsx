import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `店舗内装工事の費用・事例・対応範囲｜飲食店・美容室・小売店・オフィス対応 | ${SITE_NAME}`,
  description:
    "店舗内装工事の費用・対応範囲を解説。飲食店（厨房・客席・トイレ）・美容室・サロン・小売店・物販・倉庫・オフィスのテナント工事に対応。スケルトンからの内装、和空間づくり、退去時原状回復、費用目安まで。",
  path: "/interior/store-interior",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "店舗内装工事はどこまで対応できますか？", a: "壁・天井のクロス、床材（フローリング・フロアタイル・クッションフロア）、畳・和スペース・小上がりの設置、建具の張替え、軽微な造作まで対応します。大規模な設備工事は専門業者と連携します。" },
  { category: "btob", q: "スケルトンからの内装もできますか？", a: "テナントのスケルトン状態からの内装工事に対応します。床・壁・天井の仕上げ、和空間の造作などを行います。電気・給排水・空調などの設備は協力業者と連携して進めます。" },
  { category: "btob", q: "飲食店の内装で気をつける点は？", a: "厨房は防水・清掃性、客席は雰囲気と耐久性、トイレは清潔感が重要です。客席に座敷・小上がりを設ける場合は、汚れに強い樹脂畳・和紙畳をご提案します。用途ごとに最適な素材を選定します。" },
  { category: "btob", q: "美容室・サロンの内装にも対応できますか？", a: "はい。美容室・ネイルサロン・エステサロンの待合・施術スペースの内装に対応します。清潔感・耐久性・空間の世界観を重視した素材選びで、お客様に好印象を与える空間づくりをサポートします。" },
  { category: "btob", q: "小売店・物販店の内装はできますか？", a: "はい。小売店・物販店の床・壁・天井の内装に対応します。商品が引き立つ内装、耐久性のある床材など、業態に合わせてご提案します。" },
  { category: "btob", q: "和食店・居酒屋の座敷づくりは得意ですか？", a: "はい。畳の専門性を活かし、座敷・小上がりの新規設置や改修が得意です。素材・縁の選定から施工まで、和の世界観を演出する空間づくりをトータルでサポートします。" },
  { category: "btob", q: "営業しながら工事できますか？", a: "可能な範囲で、営業時間外・定休日の活用、エリアを区切った段階施工など、営業への影響を抑える方法をご提案します。状況をお知らせください。" },
  { category: "btob", q: "開店スケジュールに間に合わせられますか？", a: "オープン日や改装の予定に合わせて施工計画を立てます。他の内装業者・設備業者との工程調整が必要な場合も、スケジュールを共有いただければ調整します。" },
  { category: "btob", q: "退去時の原状回復もお願いできますか？", a: "はい。テナント退去時の畳・クロス・床の修繕・原状回復に対応します。契約内容に応じた範囲で、貸主・管理会社様の求める状態への回復をお手伝いします。詳しくは店舗の原状回復ページもご覧ください。" },
  { category: "price", q: "店舗内装の費用はどのくらいですか？", a: "業種・面積・工事範囲により大きく変動します。クロスは800円〜/m²、フロアタイルは4,000円〜/m²、座敷の設置は別途見積もりなど、内容に応じて個別にお見積もりします。" },
  { category: "btob", q: "オフィスの内装にも対応できますか？", a: "はい。オフィスの床・壁・天井の内装、間仕切り、和の応接スペースづくりなどに対応します。用途に合わせてご提案します。" },
  { category: "btob", q: "請求書払いに対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。法人契約・継続取引の条件についてもご案内します。" },
];

export default function StoreInteriorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="店舗内装工事の費用・事例・対応範囲"
      subtitle="飲食店・美容室・小売店・オフィスの内装工事を幅広く承ります。和食店の座敷づくりから、新規開業・改装・退去時の原状回復まで対応します。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "店舗内装工事" }]}
      image="/images/nihon-tatami/interior/interior-store-workers-01.png"
      sections={[
        {
          heading: "店舗内装工事の全体像",
          content: (
            <>
              <p>
                店舗の内装は、来店客の第一印象とブランドイメージを決定づける重要な要素です。
                壁・天井のクロス、床材、照明とのバランス、和空間の演出まで、業態に合わせた内装づくりが集客と居心地を左右します。
              </p>
              <p>
                日本畳パートナーズは、畳工事の専門性を軸に、飲食店・美容室・小売店・オフィスの内装工事に幅広く対応します。
                新規開業・改装・退去時の原状回復まで、店舗のライフサイクル全体をサポートします。
              </p>
            </>
          ),
        },
        {
          heading: "飲食店の内装（厨房・客席・トイレ）",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">厨房</strong> — 防水・清掃性を重視した床・壁材。衛生管理しやすい仕上げを選定します。</li>
              <li><strong className="text-sumi">客席</strong> — 雰囲気と耐久性の両立。座敷・小上がりには汚れに強い樹脂畳・和紙畳を。</li>
              <li><strong className="text-sumi">トイレ</strong> — 清潔感が店舗評価に直結。防汚・消臭クロスやフロアタイルを。</li>
            </ul>
          ),
        },
        {
          heading: "美容室・サロンの内装",
          content: (
            <p>
              美容室・ネイルサロン・エステサロンでは、清潔感・耐久性・世界観の演出が重要です。
              待合・施術スペースの床・壁・建具を、ブランドのイメージに合わせて整えます。
              和の演出を取り入れたい場合は、置き畳・小上がりなどで落ち着いた空間を作ることもできます。
            </p>
          ),
        },
        {
          heading: "小売店・物販・物流倉庫の内装",
          content: (
            <p>
              小売店・物販店では、商品が引き立つ内装と、人の出入りに耐える耐久性のある床材が求められます。
              フロアタイルなど重歩行に強い床材をご提案します。物流倉庫など実用性重視の空間では、
              耐久性・清掃性を最優先した内装をご提案します。
            </p>
          ),
        },
        {
          heading: "テナント工事（スケルトン → 内装）",
          content: (
            <p>
              テナントのスケルトン状態からの内装工事に対応します。床・壁・天井の仕上げ、和空間の造作などを行い、
              電気・給排水・空調などの設備工事は協力業者と連携して進めます。
              オープン日に合わせた工程管理で、開業準備をスムーズに進められるようサポートします。
            </p>
          ),
        },
        {
          heading: "費用目安（業種別・㎡単価）",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-border">
                <thead className="bg-kiji/60">
                  <tr><th className="py-2 px-3 text-left">工事項目</th><th className="py-2 px-3 text-left">費用目安</th><th className="py-2 px-3 text-left">備考</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 px-3">クロス張替え</td><td className="py-2 px-3">800円〜/m²</td><td className="py-2 px-3">防汚・消臭は別途</td></tr>
                  <tr><td className="py-2 px-3">フロアタイル</td><td className="py-2 px-3">4,000円〜/m²</td><td className="py-2 px-3">土足対応</td></tr>
                  <tr><td className="py-2 px-3">座敷・小上がり設置</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">面積・仕様により</td></tr>
                  <tr><td className="py-2 px-3">スケルトンからの内装一式</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">範囲により</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      price={[
        { service: "クロス張替え", price: "800円〜/m²", note: "" },
        { service: "フロアタイル施工", price: "4,000円〜/m²", note: "土足対応" },
        { service: "座敷・小上がり設置", price: "別途見積もり", note: "面積・仕様により" },
        { service: "店舗内装一式", price: "別途見積もり", note: "範囲により" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "店舗退去後の原状回復", href: "/restoration/store" },
        { label: "店舗オーナー向けサービス", href: "/business/store" },
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "フロアタイル", href: "/interior/floor-tile" },
      ]}
      relatedPages={[
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
