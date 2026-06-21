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
  { category: "price", q: "費用はどのくらいですか？", a: "賃貸住宅は1Rで5万円〜、1LDKで10万円〜が一式の目安です。店舗は業態・面積・契約内容により変動します。畳のみ・クロスのみの部分対応も可能です。現地確認後に無料でお見積もりします。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
  { category: "btob", q: "写真付きの報告書はもらえますか？", a: "はい。施工前・施工後の写真を添えた報告書を発行します。退去精算の根拠資料、オーナー様への報告資料としてご活用いただけます。" },
  { category: "btob", q: "継続的に依頼できますか？", a: "はい。管理会社・不動産会社・賃貸オーナー・店舗オーナーの継続案件にも対応します。担当者制でスムーズな連絡体制を整えます。" },
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

      <section className="py-14 bg-kiji/40">
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

      <section className="py-16 bg-shiro">
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
        <section className="py-16 bg-kiji/40">
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

      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>費用目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-border">
              <thead className="bg-kiji/60">
                <tr><th className="py-2 px-3 text-left">対象</th><th className="py-2 px-3 text-left">費用目安</th><th className="py-2 px-3 text-left">備考</th></tr>
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
