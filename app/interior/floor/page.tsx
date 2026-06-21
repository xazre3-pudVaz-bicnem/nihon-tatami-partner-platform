import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `フローリング工事の費用・種類・選び方｜賃貸・住宅・店舗対応 | ${SITE_NAME}`,
  description:
    "フローリング工事の費用・種類・選び方を専門業者が解説。合板・無垢・直貼りフローリングの違い、和室からフローリングへの変更の流れ、賃貸向けの選び方、傷・めくれ・剥がれの補修、費用目安表まで。",
  path: "/interior/floor",
});

const faqs: FaqItem[] = [
  { category: "material", q: "フローリングにはどんな種類がありますか？", a: "合板（複合）フローリング、無垢フローリング、直貼りフローリングが代表的です。合板は安定性とコストのバランスに優れ、無垢は天然木の風合いが魅力、直貼りはマンションの遮音対策に用いられます。用途に応じてご提案します。" },
  { category: "material", q: "合板と無垢フローリングはどちらが良いですか？", a: "合板フローリングは反り・収縮が少なく価格も手頃で、賃貸・一般住宅に広く使われます。無垢フローリングは天然木ならではの質感と経年変化が魅力ですが、価格が高く湿度管理が必要です。ご予算と好みに合わせて選びます。" },
  { category: "general", q: "和室からフローリングに変更できますか？", a: "はい。畳を撤去し、下地を調整したうえでフローリングを施工します。畳の厚み分の段差を解消する下地工事が必要になります。和室を洋室化したい、ベッドを置きたいといったご要望に対応します。" },
  { category: "general", q: "上貼り（重ね張り）と張替えの違いは？", a: "上貼りは既存の床の上から新しい床材を貼る工法で、工期が短くコストを抑えられます。張替えは既存床を撤去して貼り直す工法で、下地から根本的にリニューアルできます。床の状態に応じて最適な工法をご提案します。" },
  { category: "general", q: "フローリングの傷・めくれ・剥がれは補修できますか？", a: "軽度の傷・へこみは部分補修が可能です。めくれ・剥がれが広範囲の場合や、下地まで傷んでいる場合は、部分張替えや全面張替えをご提案します。状態を確認のうえご案内します。" },
  { category: "btob", q: "賃貸物件にはどのフローリングが向いていますか？", a: "コストと耐久性のバランスから、合板フローリングや、傷に強い表面強化タイプが多く選ばれます。退去ごとの補修を見据え、メンテナンスしやすい床材をご提案します。" },
  { category: "general", q: "フローリングからの音（騒音）対策はできますか？", a: "マンションなどでは、遮音性能のあるフローリングや直貼り防音フローリングを用いることで、階下への音を軽減できます。管理規約の遮音等級に合わせた床材をご提案します。" },
  { category: "timing", q: "工期はどのくらいですか？", a: "6畳程度の部屋で上貼りなら1日程度、張替えや下地工事を伴う場合は数日が目安です。和室からの変更や複数部屋の場合は別途ご案内します。" },
  { category: "general", q: "畳・クロスと一緒に頼めますか？", a: "はい。床だけでなく、畳の表替え・新調、クロス張替え、建具の張替えまで一括でご依頼いただけます。和室から洋室への変更など、空間全体のリフォームにも対応します。" },
  { category: "general", q: "家具がある状態でも施工できますか？", a: "壁際まで床材を施工するため、家具の移動が必要です。当日に移動できる範囲は対応し、大型家具は事前にご相談のうえ段取りを決めます。空室のほうがスムーズに施工できます。" },
  { category: "price", q: "費用はどのくらいですか？", a: "上貼りは5,000円〜/m²、張替えは8,000円〜/m²が目安です。床材のグレード、下地工事の有無、和室からの変更の有無により変動します。現地確認後に無料でお見積もりします。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。" },
];

export default function FloorPage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="フローリング工事の費用・種類・選び方"
      subtitle="フローリングの張替え・上貼り・部分補修に対応。和室から洋室への変更や、賃貸・住宅・店舗の床リフォームまで承ります。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "フローリング工事" }]}
      image="/images/nihon-tatami/restoration/restoration-floor-repair-01.png"
      sections={[
        {
          heading: "フローリング工事でできること",
          content: (
            <>
              <p>
                フローリングは、住空間の印象と使い勝手を大きく左右する床材です。
                傷・めくれ・きしみが出てきた床を張り替えることで、部屋全体が明るく清潔な印象になります。
                和室を洋室化したい、ベッドや家具を置きやすくしたいといったご要望にも対応します。
              </p>
              <p>
                日本畳パートナーズは、畳工事の専門性を活かし、和室からフローリングへの変更や、
                逆に洋室への畳スペース設置まで、床まわりのリフォームをトータルでご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "フローリングの種類",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">合板（複合）フローリング</strong> — 合板の表面に化粧材を貼ったもの。反り・収縮が少なく、価格も手頃。賃貸・住宅で最も広く使われます。</li>
              <li><strong className="text-sumi">無垢フローリング</strong> — 天然木をそのまま使った床材。質感・調湿性に優れ、経年変化を楽しめます。価格は高めで湿度管理が必要です。</li>
              <li><strong className="text-sumi">直貼りフローリング</strong> — コンクリート床に直接貼るタイプ。遮音性能を備えたものが多く、マンションの防音対策に用いられます。</li>
            </ul>
          ),
        },
        {
          heading: "和室からフローリングへの変更の流れ",
          content: (
            <ol className="space-y-2">
              <li>1. 現地確認（畳の厚み・下地・段差の確認）</li>
              <li>2. 畳の撤去</li>
              <li>3. 下地（根太・合板）の調整・段差解消</li>
              <li>4. フローリングの施工</li>
              <li>5. 巾木・見切り材の取り付け・清掃</li>
            </ol>
          ),
        },
        {
          heading: "賃貸向けフローリングの選び方",
          content: (
            <p>
              賃貸物件では、コストと耐久性のバランスが重要です。合板フローリングや表面強化タイプは、
              傷に強く価格も抑えられるため、退去ごとの補修を見据えた選択として適しています。
              マンションでは管理規約の遮音等級に適合した床材を選ぶ必要があります。物件の条件に合わせてご提案します。
            </p>
          ),
        },
        {
          heading: "傷・めくれ・剥がれの補修",
          content: (
            <p>
              軽度の傷・へこみは部分補修で対応できます。めくれ・剥がれが広範囲の場合や、
              水濡れで下地まで傷んでいる場合は、部分張替えや全面張替えをご提案します。
              放置すると傷みが広がるため、早めの対応がコストを抑えるポイントです。状態を確認のうえ最適な方法をご案内します。
            </p>
          ),
        },
        {
          heading: "費用目安（施工方法別）",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-border">
                <thead className="bg-kiji/60">
                  <tr><th className="py-2 px-3 text-left">工法・種類</th><th className="py-2 px-3 text-left">費用目安（1㎡）</th><th className="py-2 px-3 text-left">特徴</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 px-3">上貼り（重ね張り）</td><td className="py-2 px-3">5,000円〜</td><td className="py-2 px-3">工期短縮・コスト削減</td></tr>
                  <tr><td className="py-2 px-3">張替え（合板）</td><td className="py-2 px-3">8,000円〜</td><td className="py-2 px-3">下地から刷新</td></tr>
                  <tr><td className="py-2 px-3">無垢フローリング</td><td className="py-2 px-3">10,000円〜</td><td className="py-2 px-3">天然木の風合い</td></tr>
                  <tr><td className="py-2 px-3">和室→洋室変更</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">畳撤去・下地調整含む</td></tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      price={[
        { service: "フローリング張替え（上貼り）", price: "5,000円〜/m²", note: "" },
        { service: "フローリング張替え（張替え）", price: "8,000円〜/m²", note: "" },
        { service: "無垢フローリング", price: "10,000円〜/m²", note: "" },
        { service: "和室→洋室変更・部分補修", price: "別途見積もり", note: "範囲により変動" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "フロアタイル", href: "/interior/floor-tile" },
        { label: "クロス張替え", href: "/interior/cross" },
        { label: "住宅内装リフォーム", href: "/interior/house-renovation" },
      ]}
      relatedPages={[
        { label: "原状回復", href: "/restoration" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
