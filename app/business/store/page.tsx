import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `店舗向け畳工事・内装工事｜和食店・居酒屋・サロン・和モダン店舗対応 | ${SITE_NAME}`,
  description:
    "和食店・居酒屋・料亭・カフェ・美容室・サロンの和空間づくりを畳工事・内装工事で。小上がり・座敷の設置・改修、飲食店向けの汚れに強い素材、店舗退去時の原状回復、営業への影響を抑えた施工まで対応します。",
  path: "/business/store",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "小上がり・座敷の新規設置はできますか？", a: "はい。飲食店・カフェなどへの小上がり・座敷の新規設置に対応します。床の段上げから畳の敷き込み、縁なし畳での和モダンな仕上げまで、店舗のコンセプトに合わせてご提案します。" },
  { category: "btob", q: "店舗の畳は耐久性が心配です。", a: "店舗は回転率・踏圧・清掃頻度が住宅より高いため、耐久性の高い素材が重要です。色あせ・摩耗に強い和紙畳や、水拭きできる樹脂畳をご提案します。人の出入りが多い空間でも美しさを保ちやすくなります。" },
  { category: "btob", q: "飲食店のシミ・汚れに強い畳はありますか？", a: "はい。樹脂畳は水拭きができ、飲み物や食べこぼしに非常に強い素材です。和紙畳も撥水性があり汚れに強く、清掃性に優れます。飲食を伴う座敷には、これらの機能性素材をおすすめします。" },
  { category: "btob", q: "店舗内装を畳とまとめて整えられますか？", a: "はい。畳に加え、壁クロス・床・建具まで一括で整えることで、空間に統一感が生まれます。和の世界観を演出する内装トータルでのご提案が可能です。" },
  { category: "btob", q: "店舗退去時の原状回復もお願いできますか？", a: "はい。テナント退去時の畳・クロス・床の修繕・原状回復に対応します。契約内容に応じた範囲で、貸主・管理会社様の求める状態への回復をお手伝いします。" },
  { category: "btob", q: "開店前・改装時のスケジュールに合わせられますか？", a: "はい。オープン日や改装の予定に合わせて施工計画を立てます。他の内装業者との工程調整が必要な場合も、スケジュールを共有いただければ調整します。" },
  { category: "btob", q: "営業しながら施工できますか？", a: "可能な範囲で、営業時間外や定休日を活用した施工、エリアを区切った段階施工など、営業への影響を最小限に抑える方法をご提案します。状況をお知らせください。" },
  { category: "btob", q: "美容室・サロンの和空間にも対応できますか？", a: "はい。美容室・ネイルサロン・エステサロンなどの待合・施術スペースへの和の演出にも対応します。清掃性と耐久性を重視した素材選びで、清潔感のある空間づくりをサポートします。" },
  { category: "btob", q: "和食店・居酒屋の座敷の格上げはできますか？", a: "はい。既存座敷の畳表替え・新調、格式に合った縁への変更、縁なし畳での和モダン化など、店舗の格や客層に合わせた改修をご提案します。" },
  { category: "btob", q: "請求書払い・法人取引に対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。法人契約・継続取引の条件についても案件規模に応じてご案内します。" },
  { category: "price", q: "店舗向けの料金はどのくらいですか？", a: "施工内容・面積・素材により大きく変動します。小上がりの新規設置、座敷の改修、内装一式など、ご要望に応じて個別にお見積もりします。まずはご相談ください。" },
  { category: "btob", q: "和モダンな店舗デザインに合う畳はありますか？", a: "縁なし畳やカラー畳は、和モダンな店舗デザインと好相性です。和紙畳・樹脂畳で製作すれば、色の自由度が高く、耐久性・清掃性も確保できます。空間のテイストに合わせてご提案します。" },
  { category: "btob", q: "居抜き物件の既存畳を使えるか確認してもらえますか？", a: "はい。現地確認で既存畳の状態を確認し、表替えで対応できるか・新調が必要かを判断してご報告します。" },
  { category: "btob", q: "何枚から対応してもらえますか？", a: "枚数に下限は設けていません。1枚からのご相談も歓迎です。ただし枚数・施工場所により出張費が発生する場合があります。" },
  { category: "btob", q: "内覧・撮影前に最低限整えるべき箇所はどこですか？", a: "座敷の畳表（色あせ・ささくれ）とクロスの変色が写真印象に最も影響します。撮影前に整えることで清潔感が高まります。" },
  { category: "btob", q: "退去時の原状回復もセットで相談できますか？", a: "はい。退去時の畳・クロス・床・建具の原状回復も一括でご相談いただけます。契約内容に応じた範囲で対応します。" },
  { category: "btob", q: "開業前のスケジュールが決まっていない段階でも相談できますか？", a: "はい。まずは状況をお知らせいただければ、施工の目安期間や必要な情報をご案内します。" },
];

export default function StorePage() {
  return (
    <ServicePageTemplate
      eyebrow="For Store Owner"
      title="店舗向け畳工事・内装工事"
      subtitle="和食店・居酒屋・料亭・カフェ・サロンの和空間づくりから、座敷改修・店舗内装・退去時の原状回復まで。店舗の魅力を高める空間づくりをサポートします。"
      breadcrumbs={[{ label: "法人・施設向け", href: "/business" }, { label: "店舗向け" }]}
      image="/images/nihon-tatami/interior/interior-store-workers-01.png"
      sections={[
        {
          heading: "店舗における和空間の需要",
          content: (
            <>
              <p>
                和食店・居酒屋・料亭・カフェ・美容室・サロン・宿泊施設の一部など、
                さまざまな業態で「和の空間」への需要が高まっています。
                小上がりや座敷は、落ち着いた雰囲気と特別感を演出し、客単価の向上やリピートにつながります。
                和の演出は、画一的な内装が並ぶ中での差別化要素にもなります。
              </p>
              <p>
                日本畳パートナーズは、店舗の和空間づくりを畳工事・内装工事の両面からサポートします。
                耐久性・清掃性を考慮した素材選びで、営業を支える実用的な空間をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "小上がり・座敷の設置・改修",
          content: (
            <p>
              飲食店やカフェへの小上がり・座敷の新規設置は、床の段上げから畳の敷き込み、縁の選定までトータルで対応します。
              既存座敷の改修では、畳の表替え・新調、格式に合った縁への変更、縁なし畳での和モダン化など、
              店舗のコンセプトや客層に合わせてご提案します。客席数や動線も考慮した実用的なプランニングを心がけます。
            </p>
          ),
        },
        {
          heading: "店舗の和室における耐久性の重要性",
          content: (
            <p>
              店舗の畳は、住宅とは比較にならないほど高い回転率・踏圧・清掃頻度にさらされます。
              そのため、住宅向けの畳より耐久性の高い素材を選ぶことが、長く美しさを保つ鍵になります。
              色あせ・摩耗に強い和紙畳、水拭きできる樹脂畳など、人の出入りが多い空間に耐える素材をご提案します。
              耐久性の高い素材は、結果としてメンテナンス頻度を抑え、長期的なコスト削減にもつながります。
            </p>
          ),
        },
        {
          heading: "飲食店特有のシミ・汚れ対策素材",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">樹脂畳</strong> — 水拭きができ、飲み物・食べこぼしに非常に強い。飲食を伴う座敷に最適。</li>
              <li><strong className="text-sumi">和紙畳</strong> — 撥水性があり汚れに強く、色あせしにくい。清掃性と風合いのバランスに優れる。</li>
              <li><strong className="text-sumi">縁なし畳・カラー畳</strong> — 和モダンな店舗デザインと好相性。機能性素材で製作すれば耐久性も確保。</li>
            </ul>
          ),
        },
        {
          heading: "店舗内装全体の統一感",
          content: (
            <p>
              畳だけでなく、壁クロス・床・建具まで一括で整えることで、空間に統一感が生まれます。
              和の世界観を一貫して演出するには、素材・色・質感のトーンを揃えることが重要です。
              当社は畳工事と内装工事の両方に対応できるため、別々に業者を手配する手間なく、まとまりのある空間づくりが可能です。
            </p>
          ),
        },
        {
          heading: "店舗退去時の原状回復",
          content: (
            <p>
              テナント退去時には、契約内容に応じた原状回復が求められます。
              畳・クロス・床の修繕、座敷の解体・撤去など、貸主・管理会社様の求める状態への回復をお手伝いします。
              退去のスケジュールに合わせて施工計画を立て、明け渡し期限に間に合わせます。詳しくは店舗の原状回復ページもご覧ください。
            </p>
          ),
        },
        {
          heading: "業種別の対応ポイントと工事中の配慮",
          content: (
            <>
              <ul className="space-y-2">
                <li><strong className="text-sumi">飲食店・居酒屋・料亭</strong> — 汚れに強い素材、格式に合った座敷の格上げ。</li>
                <li><strong className="text-sumi">カフェ・和モダン店舗</strong> — 縁なし畳・カラー畳での個性的な演出。</li>
                <li><strong className="text-sumi">美容室・サロン</strong> — 清掃性・耐久性を重視した清潔感のある和の空間。</li>
              </ul>
              <p>
                開店前・改装時のスケジュールに合わせて施工し、営業中の場合は営業時間外・定休日の活用や段階施工で、
                営業への影響を最小限に抑えます。状況をお知らせいただければ、最適な進め方をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "店舗の畳工事・内装工事で大切な3点",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>耐久性と清掃性の確保</h3>
                <p className="text-sumi/80 text-sm">飲食・美容・小売店は摩耗・汚れが早い。樹脂畳（水拭き可）・和紙畳（撥水性）など機能性素材を推奨します。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>営業への影響を最小化</h3>
                <p className="text-sumi/80 text-sm">定休日・営業時間外・早朝の施工調整に対応。段階施工でエリアを区切る方式も可能です。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>店舗ブランドに合わせた素材・デザイン</h3>
                <p className="text-sumi/80 text-sm">縁なし畳・カラー畳・格式ある縁の使い分けで和食店・モダン店舗・サロンに対応します。</p>
              </div>
            </div>
          ),
        },
        {
          heading: "業種別の対応ポイント",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>和食店・料亭</h3>
                <p className="text-sumi/80 text-sm">格式ある縁の座敷、多人数に耐える耐久素材も選択肢。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>居酒屋・焼き鳥店</h3>
                <p className="text-sumi/80 text-sm">シミ・臭いに強い樹脂畳・和紙畳で清潔感を維持します。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>カフェ・和モダン</h3>
                <p className="text-sumi/80 text-sm">縁なし畳・カラー畳で個性的な空間演出が可能です。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>美容室・サロン</h3>
                <p className="text-sumi/80 text-sm">清潔感と撥水性を重視、施術・待合スペースへの和の演出。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5 md:col-span-2">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>小売店・その他</h3>
                <p className="text-sumi/80 text-sm">フローリング・フロアタイルで陳列スペースと調和した空間づくりも対応します。</p>
              </div>
            </div>
          ),
        },
        {
          heading: "営業を止めない施工の進め方",
          content: (
            <>
              <ol className="space-y-2">
                <li className="text-sumi">1. 定休日・早朝・深夜の作業時間を確認</li>
                <li className="text-sumi">2. 施工範囲・順番を決め影響を最小化</li>
                <li className="text-sumi">3. エリアを区切って段階的に施工</li>
                <li className="text-sumi">4. 翌朝開店に間に合わせる工期設定</li>
              </ol>
              <p className="text-sm text-sumi/60 mt-3">施工時間・エリアはご要望に合わせて調整します。</p>
            </>
          ),
        },
        {
          heading: "費用が変わる主な要因（店舗向け）",
          content: (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">施工面積・坪数</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">素材グレード（い草/和紙/樹脂/縁なし畳）</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">段差の有無（小上がり床下地工事）</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">廃材処分・家具移動</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">時間外施工（深夜・早朝・休日）</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-4">
                  <p className="text-sumi font-semibold text-sm">工種の数（畳のみ/畳+クロス+建具の一括）</p>
                </div>
              </div>
              <p className="text-sm text-sumi/60 mt-3">現地確認後に各要因を踏まえた正式お見積もりをご案内します（税込表示）。</p>
            </>
          ),
        },
        {
          heading: "開業前・リニューアル時の整備チェックリスト",
          content: (
            <>
              <ul className="space-y-2">
                <li className="text-sumi/80">座敷・小上がりの設置または改修の確認</li>
                <li className="text-sumi/80">畳の素材グレードと縁の選定</li>
                <li className="text-sumi/80">クロス・床・建具との統一感</li>
                <li className="text-sumi/80">施工スケジュールの逆算（開業日から）</li>
                <li className="text-sumi/80">廃材処分・家具移動の段取り</li>
                <li className="text-sumi/80">営業時間外施工の確認</li>
              </ul>
              <p className="text-sm text-sumi/60 mt-3">各項目について、現地確認後に具体的な提案をご案内します。</p>
            </>
          ),
        },
      ]}
      price={[
        { service: "座敷・小上がり 畳新調", price: "別途見積もり", note: "面積・仕様により" },
        { service: "店舗座敷 畳表替え（樹脂畳）", price: "8,000円〜/枚", note: "汚れに強い" },
        { service: "店舗座敷 畳表替え（和紙畳）", price: "8,000円〜/枚", note: "清掃性・風合い" },
        { service: "店舗内装一式（クロス・床含む）", price: "別途見積もり", note: "範囲により" },
        { service: "店舗退去時の原状回復", price: "別途見積もり", note: "契約内容により" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "樹脂畳", href: "/services/resin-tatami" },
        { label: "縁なし畳", href: "/services/herinashi-tatami" },
        { label: "店舗内装工事", href: "/interior/store-interior" },
        { label: "店舗退去後の原状回復", href: "/restoration/store" },
      ]}
      relatedPages={[
        { label: "カラー畳", href: "/services/color-tatami" },
        { label: "施工事例", href: "/works" },
        { label: "料金の目安", href: "/price" },
      ]}
    />
  );
}
