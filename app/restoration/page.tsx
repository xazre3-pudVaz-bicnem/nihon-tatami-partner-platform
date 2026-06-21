import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import { RESTORATION_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: `原状回復工事｜畳・クロス・床・建具まで退去後の内装整備を一括対応 | ${SITE_NAME}`,
  description:
    "賃貸・店舗・オフィスの原状回復工事を畳・クロス・床・建具・水回り・クリーニングまで一括対応。国交省ガイドラインに沿った費用負担の整理、管理会社・不動産会社・自主管理オーナー向け、費用目安・FAQまで解説します。",
  path: "/restoration",
});

const TARGET_LINKS = [
  { title: "賃貸退去後の原状回復", href: "/restoration/rental", desc: "畳・クロス・床・建具を一括。ガイドラインに沿った費用負担の整理。" },
  { title: "店舗・テナント退去", href: "/restoration/store", desc: "スケルトン返し・設備撤去・床壁天井の復旧まで対応。" },
  { title: "自主管理オーナー向け", href: "/restoration/owner", desc: "見積もりの取り方・費用の抑え方・費用負担交渉をサポート。" },
  { title: "管理会社向け", href: "/restoration/management-company", desc: "複数物件・スピード対応・写真付き報告書で業務を効率化。" },
];

const RENTAL_WORKS = [
  { title: "畳の表替え・新調", desc: "傷・変色・臭いに応じて表替えまたは新調をご提案。和紙畳・樹脂畳への変更で次入居後の耐久性も向上します。" },
  { title: "クロス張替え", desc: "タバコのヤニ・シミ・破れなど、借主過失による損傷のクロスを張り替えます。消臭・抗菌クロスへの変更も可能です。" },
  { title: "フローリング補修・張替え", desc: "引き傷・ペット傷・液体汚れなどによるフローリングの補修・張替えに対応します。" },
  { title: "ふすま・障子・網戸", desc: "張替え・調整に対応。次の入居者が快適に使用できる状態に整えます。" },
  { title: "水回りの軽微な補修", desc: "床・壁の軽微な補修に対応します。大規模設備工事は別途ご相談ください。" },
  { title: "クリーニング連携", desc: "内装工事と合わせてハウスクリーニングとの連携も可能です。窓口を一本化して空室期間を短縮します。" },
];

const STORE_WORKS = [
  { title: "スケルトン返し", desc: "契約でスケルトン返しが定められている場合、設備・内装を撤去してコンクリートの躯体状態に戻します。" },
  { title: "設備撤去後の補修", desc: "設備撤去後に生じた壁・床の穴や傷を補修し、次のテナントが利用できる状態に整えます。" },
  { title: "床・壁の復旧", desc: "店舗で独自施工した床材・壁面仕上げを契約に定められた状態へ復旧します。" },
  { title: "契約内容による範囲確認", desc: "原状回復の範囲は賃貸借契約の内容によって異なります。契約書の確認とともに、対応範囲を明確にしてからご提案します。" },
];

const FLOW_STEPS = [
  { step: "01", title: "退去連絡・日程調整", desc: "退去日が決まりましたらお早めにご連絡ください。日程を調整して迅速に対応します。" },
  { step: "02", title: "退去後現地確認・状況記録", desc: "退去後すぐに現地を確認し、損傷状況を写真付きで記録します。経年劣化・通常損耗と借主過失の区分を整理します。" },
  { step: "03", title: "お見積もり（工種別内訳）", desc: "工種ごとの費用内訳を明示した見積もりをご提出します。貸主・借主の負担区分も整理して提示します。" },
  { step: "04", title: "施工", desc: "確認・承認後、速やかに施工を開始します。次の入居者募集に間に合うよう工程を組みます。" },
  { step: "05", title: "写真付き報告書提出", desc: "施工前後の写真と工種別費用内訳を含む報告書を提出します。退去精算・オーナー報告の資料としてご活用ください。" },
  { step: "06", title: "次入居前確認", desc: "入居募集・内覧前に仕上がりを再確認します。気になる点はご遠慮なくお申し付けください。" },
];

const COST_FACTORS = [
  { label: "損傷の程度", note: "通常損耗と借主の故意・過失による損傷では、費用負担の性格が異なります。" },
  { label: "施工面積・工種の数", note: "面積が広く工種が多いほど費用は増えますが、一括依頼による効率化でコストを抑えられる場合があります。" },
  { label: "物件の用途（住宅 vs 店舗）", note: "店舗はスケルトン返しや設備対応が必要なケースがあり、住宅より費用が大きくなる傾向があります。" },
  { label: "素材グレード", note: "張替えに使用する素材のグレードによって費用が変わります。次入居を考慮した素材選定をご提案します。" },
  { label: "廃材処分費", note: "撤去した旧材の処分費が含まれる場合があります。見積もりに明記します。" },
];

const faqs: FaqItem[] = [
  { category: "btob", q: "原状回復とは何ですか？", a: "原状回復とは、賃貸物件を退去する際に、借主の故意・過失や通常を超える使用による損耗を回復することです。国土交通省のガイドラインでは、経年劣化・通常損耗は貸主負担とされ、入居当時の状態に完全に戻すことではないとされています。" },
  { category: "btob", q: "国交省のガイドラインに沿って対応してもらえますか？", a: "はい。「原状回復をめぐるトラブルとガイドライン」の考え方を踏まえ、経年劣化・通常損耗と借主の過失による損傷の区分について、現場状況を写真付きで整理してご報告します。最終判断は貸主・管理会社様が行います。" },
  { category: "btob", q: "どんな工事に対応していますか？", a: "畳の表替え・新調、クロス（壁・天井）張替え、フローリング・クッションフロア・フロアタイルの補修・張替え、ふすま・障子・網戸の張替え、軽微な補修、ハウスクリーニング連携まで一括対応します。" },
  { category: "btob", q: "畳・クロス・床をまとめて頼めますか？", a: "はい。複数の工種を一括でご依頼いただけます。窓口を一本化することで、業者調整の手間と空室期間を削減できます。" },
  { category: "btob", q: "賃貸住宅の原状回復に対応していますか？", a: "はい。アパート・マンションの賃貸住宅の退去後原状回復に対応します。1Rから複数LDKまで、間取り・損傷状況に応じてご提案します。" },
  { category: "btob", q: "店舗・オフィスの原状回復もできますか？", a: "はい。飲食店・小売店・サロン・オフィスなどのテナント退去時の原状回復に対応します。契約に応じたスケルトン返しや設備撤去も承ります。" },
  { category: "btob", q: "管理会社・不動産会社向けの対応はありますか？", a: "はい。複数物件・複数棟の一括対応、スピード見積もり、写真付き報告書の発行に対応します。協力業者として継続的なお取引を歓迎します。" },
  { category: "btob", q: "自主管理オーナーでも頼めますか？", a: "はい。1部屋・1物件からのご依頼も歓迎です。見積もりの取り方・費用の抑え方・費用負担の交渉まで、自主管理のオーナー様をサポートします。" },
  { category: "btob", q: "借主負担・貸主負担の判断材料はもらえますか？", a: "施工前後の写真と工種別の内訳を明記した資料をご提供します。ガイドラインの考え方に沿った客観的な整理により、退去精算の判断材料としてご活用いただけます。" },
  { category: "btob", q: "和紙畳・樹脂畳への変更も原状回復でできますか？", a: "可能です。原状回復の機会に、傷みにくく清掃しやすい和紙畳・樹脂畳へ変更しておくと、次の入居者の満足度向上やペット可物件への転換につながります。" },
  { category: "timing", q: "退去後どのくらいで施工できますか？", a: "退去のタイミングに合わせて迅速に対応します。次の入居者募集に間に合うよう調整します。急ぎの場合はその旨をお知らせください。" },
  { category: "price", q: "費用はどのくらいですか？", a: "賃貸住宅は1Rで50,000円〜（税込）、1LDKで100,000円〜（税込）が一式の目安です。店舗は業態・面積・契約内容により変動します。畳のみ・クロスのみの部分対応も可能です。現地確認後に無料でお見積もりします。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
  { category: "btob", q: "写真付きの報告書はもらえますか？", a: "はい。施工前・施工後の写真を添えた報告書を発行します。退去精算の根拠資料、オーナー様への報告資料としてご活用いただけます。" },
  { category: "btob", q: "継続的に依頼できますか？", a: "はい。管理会社・不動産会社・賃貸オーナー・店舗オーナーの継続案件にも対応します。担当者制でスムーズな連絡体制を整えます。" },
  { category: "btob", q: "入居者立ち会いなしでも対応できますか？", a: "はい。退去後の物件は通常、入居者立ち会いなしで施工します。合鍵・キーボックスの管理方法は事前にご確認のうえ、安全に対応します。" },
  { category: "btob", q: "賃貸と店舗で対応範囲は違いますか？", a: "はい。賃貸住宅は国交省ガイドラインに基づく対応が基本です。店舗・テナントは賃貸借契約の内容（スケルトン返しか現状渡しかなど）によって範囲が異なります。契約書の内容を確認のうえ対応範囲をご案内します。" },
  { category: "btob", q: "費用を借主に請求するための書類は出してもらえますか？", a: "はい。施工前後の写真・工種別費用内訳・損傷状況の記録を含む書類をご提供します。借主への費用請求や退去精算の根拠資料としてご活用いただけます。" },
  { category: "btob", q: "事前に写真だけ送って見積もりを出せますか？", a: "写真を参考に概算をお伝えすることは可能ですが、正確な費用は現地確認後のお見積もりとなります。まずは写真をお送りいただき、概算の確認からご相談ください。" },
  { category: "btob", q: "施工中のカギの管理はどうなりますか？", a: "合鍵をお預かりするか、キーボックスを設置いただくかを事前にご相談します。お預かりした合鍵は施工完了後に速やかにお返しし、取り扱いは厳重に管理します。" },
];

export default function RestorationPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "原状回復" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Restoration</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            原状回復工事
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            畳・クロス・床・建具まで、退去後の内装整備を一括対応。賃貸・店舗・オフィスの原状回復を、
            国交省ガイドラインに沿った費用負担の整理とともにサポートします。
          </p>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>原状回復の全体像</h2>
          <p>
            原状回復とは、賃貸物件を退去する際に、借主の故意・過失や通常を超える使用による損耗を回復する工事です。
            国土交通省「原状回復をめぐるトラブルとガイドライン」では、経年劣化・通常損耗は貸主負担とされ、
            入居当時の状態に完全に戻すことではないとされています。費用負担をめぐるトラブルを防ぐには、この考え方に沿った整理が重要です。
          </p>
          <p>
            日本畳パートナーズは、畳の専門性を軸に、クロス・床材・建具の原状回復工事も一括で承ります。
            賃貸住宅・店舗・オフィス、管理会社・不動産会社・自主管理オーナーまで、幅広い立場のお客様に対応します。
          </p>
        </div>
      </section>

      {/* 原状回復とリフォームの違い */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>原状回復とリフォームの違い</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-border p-6">
              <h3 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>原状回復</h3>
              <p className="text-sm text-sumi/70 leading-relaxed">
                退去後に物件を「貸せる状態に戻す」工事です。国交省ガイドラインに準拠し、借主の故意・過失による損傷を
                対象として費用負担を整理します。入居当時の状態に完全に戻すことではない点が重要なポイントです。
              </p>
            </div>
            <div className="bg-white border border-border p-6">
              <h3 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>リフォーム</h3>
              <p className="text-sm text-sumi/70 leading-relaxed">
                状態をより良くするグレードアップ工事です。設備の更新・グレード向上などは原状回復の対象外となり、
                費用負担の性格が異なります。リフォーム費用は基本的に貸主側の負担となります。
              </p>
            </div>
          </div>
          <div className="bg-ai/5 border border-ai/20 px-6 py-4 text-sm text-sumi/80">
            <strong className="text-sumi">借主負担・貸主負担の考え方：</strong>経年劣化・通常損耗（自然に生じる劣化）は貸主負担が原則です。
            タバコのヤニ・ペット傷・故意の破損など、借主の過失による損傷は借主負担となります。
            当社では現場状況を写真付きで記録し、費用負担の整理をサポートします。
          </div>
        </div>
      </section>

      {/* 対応工事種別 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-6 text-center" style={{ fontFamily: "var(--font-serif)" }}>対応工事種別</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-sumi/80">
            <li className="bg-white border border-border p-4">畳の表替え・新調・和紙畳/樹脂畳への変更</li>
            <li className="bg-white border border-border p-4">クロス（壁・天井）の張替え</li>
            <li className="bg-white border border-border p-4">フローリング・クッションフロア・フロアタイルの補修・張替え</li>
            <li className="bg-white border border-border p-4">ふすま・障子・網戸の張替え・建具調整</li>
            <li className="bg-white border border-border p-4">水回りの補修・軽微な原状回復工事</li>
            <li className="bg-white border border-border p-4">ハウスクリーニングとの連携</li>
          </ul>
        </div>
      </section>

      {/* 賃貸退去後の対応範囲 */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>賃貸退去後の対応範囲</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">退去後の状況を確認し、損傷の種類・程度に応じた最適な工事をご提案します。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RENTAL_WORKS.map((w) => (
              <div key={w.title} className="bg-white border border-border p-5">
                <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>{w.title}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 店舗退去後の対応範囲 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>店舗退去後の対応範囲</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">店舗の原状回復は契約内容によって範囲が異なります。契約書をご確認のうえご相談ください。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STORE_WORKS.map((w) => (
              <div key={w.title} className="bg-kiji/30 border border-border p-5">
                <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>{w.title}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対象者別 */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>対象者別の原状回復</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TARGET_LINKS.map((t) => (
              <Link key={t.href} href={t.href} className="group bg-white border border-border hover:border-ai/30 transition-all duration-300 p-5">
                <h3 className="text-sm text-sumi mb-2 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>{t.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed">{t.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {RESTORATION_SERVICES && RESTORATION_SERVICES.length > 0 && (
        <section className="py-16 bg-shiro">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>原状回復サービス</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RESTORATION_SERVICES.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 施工の流れ（管理会社向け） */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-2 text-center" style={{ fontFamily: "var(--font-serif)" }}>施工の流れ</h2>
          <p className="text-sm text-sumi/60 text-center mb-10">管理会社・賃貸オーナーのお取引に最適化したフローです。</p>
          <div className="space-y-4">
            {FLOW_STEPS.map((step) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-sumi text-white text-xs flex items-center justify-center" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.step}
                </div>
                <div className="flex-1 pt-1 pb-3 border-b border-border last:border-0">
                  <p className="text-sm text-sumi font-medium mb-0.5">{step.title}</p>
                  <p className="text-xs text-sumi/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用が変わる要因 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>費用が変わる主な要因</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">原状回復費用は現場の状況・損傷の程度・物件の種別によって変動します。すべて税込表示。現地確認後に正式お見積もりをご提出します。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {COST_FACTORS.map((f) => (
              <div key={f.label} className="bg-kiji/30 border border-border px-5 py-4">
                <p className="text-sm text-sumi font-medium mb-1">{f.label}</p>
                <p className="text-xs text-sumi/60">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用目安 */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>費用目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-border">
              <thead className="bg-kiji/60">
                <tr><th className="py-2 px-3 text-left">対象</th><th className="py-2 px-3 text-left">費用目安（税込）</th><th className="py-2 px-3 text-left">備考</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="py-2 px-3">賃貸 1R（畳含む一式）</td><td className="py-2 px-3">50,000円〜</td><td className="py-2 px-3">範囲により変動</td></tr>
                <tr><td className="py-2 px-3">賃貸 1LDK（一式）</td><td className="py-2 px-3">100,000円〜</td><td className="py-2 px-3">範囲により変動</td></tr>
                <tr><td className="py-2 px-3">畳 表替え</td><td className="py-2 px-3">5,500円〜/枚</td><td className="py-2 px-3">国産い草</td></tr>
                <tr><td className="py-2 px-3">クロス張替え</td><td className="py-2 px-3">800円〜/m²</td><td className="py-2 px-3">素材により</td></tr>
                <tr><td className="py-2 px-3">店舗・テナント</td><td className="py-2 px-3">別途見積もり</td><td className="py-2 px-3">契約・面積により</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/40">※ 素材・損傷状況・契約内容により変動します。現地確認後に無料でお見積もりします。</p>
        </div>
      </section>

      {/* 写真付き報告書について */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>写真付き報告書について</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">管理会社・賃貸オーナーの業務を支援する報告書を標準発行します。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "施工前後の状況記録", desc: "損傷箇所・施工内容・仕上がりを写真付きで記録します。現場の状況を客観的に残せます。" },
              { title: "工種別費用内訳", desc: "畳・クロス・床材など工種ごとの費用を明示します。費用の内訳が明確で、精算時の説明が容易です。" },
              { title: "退去精算の根拠資料", desc: "借主負担・貸主負担の判断材料として活用できます。トラブル防止に役立つ客観的な記録です。" },
              { title: "オーナーへの説明資料", desc: "管理会社からオーナーへの報告書として、そのままご活用いただけます。報告業務の効率化につながります。" },
            ].map((item) => (
              <div key={item.title} className="bg-kiji/30 border border-border p-5">
                <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-kiji/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
          <div className="bg-white border border-border px-5 py-1">
            <FaqSection items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="原状回復工事のご相談"
        subtitle="退去後の物件状況・規模をお知らせいただければ、スムーズにご提案できます。"
        primaryLabel="原状回復の相談をする"
        primaryHref="/contact"
        secondaryLabel="管理会社・法人のご相談"
        secondaryHref="/contact#business"
      />
    </>
  );
}
