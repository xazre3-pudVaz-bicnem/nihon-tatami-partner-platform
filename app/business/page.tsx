import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: `法人・事業者向け畳工事・内装工事｜不動産会社・旅館・寺社・店舗対応 | ${SITE_NAME}`,
  description:
    "不動産会社・管理会社・賃貸オーナー・旅館・ホテル・寺院・神社・店舗・法人施設向けの畳工事・内装工事・原状回復。複数物件・継続案件・写真付き報告・スピード見積もりに対応。法人窓口を一本化します。",
  path: "/business",
});

const BUSINESS_PAGES = [
  { title: "不動産会社", href: "/business/real-estate", desc: "売買前の内覧整備・原状回復・空室対策を一括サポート。買主の第一印象を整えます。" },
  { title: "管理会社（継続対応）", href: "/business/property-management", desc: "複数棟の原状回復・定期メンテナンスをスピード対応・写真報告で一括管理。" },
  { title: "賃貸オーナー", href: "/business/rental-owner", desc: "退去後の原状回復・空室対策・ペット可/子供可への転換。費用も透明に。" },
  { title: "旅館・宿泊施設", href: "/business/ryokan", desc: "客室畳の大量施工・繁忙期前の集中スケジューリング・格式維持。" },
  { title: "寺院・神社", href: "/business/temple-shrine", desc: "本堂・客殿・社務所の格式に合わせた畳工事・行事前の整備。" },
  { title: "店舗", href: "/business/store", desc: "和食店・居酒屋・サロンの和空間づくり・座敷改修・退去時原状回復。" },
  { title: "空室対策", href: "/business/vacancy-measures", desc: "畳・クロス・床の整備で賃貸物件の入居率を改善。" },
];

const INDUSTRIES = [
  "不動産会社", "管理会社", "賃貸オーナー", "旅館・ホテル", "民泊・宿泊施設",
  "寺院", "神社", "飲食店", "居酒屋・料亭", "カフェ", "美容室・サロン", "小売店・物販", "法人施設・オフィス",
];

const FEATURES = [
  { title: "複数物件・複数現場の一括対応", desc: "複数物件・複数棟の原状回復や定期メンテナンスをまとめてご依頼いただけます。業者探しの手間を省き、窓口を一本化します。" },
  { title: "スピーディーな現地確認・見積もり", desc: "退去・内覧・行事のタイミングに合わせたスピード対応。状況により写真確認・メール見積もりにも対応し、リードタイムを短縮します。" },
  { title: "写真付き施工報告書の発行", desc: "施工前後の写真付き報告書を発行。管理会社・オーナー様への報告資料、退去精算・物件告知の根拠資料としてご活用いただけます。" },
  { title: "明確な見積もりと費用内訳", desc: "工種別の費用内訳を明記した見積もりを提出。追加費用は事前にご説明し、費用を透明にします。請求書払いもご相談可能です。" },
];

const FLOW = [
  { step: "01", title: "お問い合わせ", desc: "案件概要・物件数・対応エリア・ご希望のスケジュールをお知らせください。" },
  { step: "02", title: "担当確認", desc: "ご要望を整理し、担当者が対応方針をご確認します。継続取引では担当者制で対応します。" },
  { step: "03", title: "現地見積もり", desc: "現地確認（複数物件一括対応可）を行い、工種別内訳を明記した見積もりをご提示します。" },
  { step: "04", title: "施工調整", desc: "内覧・退去・行事・稼働状況に合わせて施工スケジュールを調整します。" },
  { step: "05", title: "施工", desc: "畳・クロス・床・建具を養生・清掃を徹底して一括施工します。" },
  { step: "06", title: "写真付き報告", desc: "施工前後の写真を添えた報告書を提出。記録としてご活用いただけます。" },
];

const businessFaqs: FaqItem[] = [
  { category: "btob", q: "法人として複数物件をまとめて依頼できますか？", a: "はい。不動産会社・管理会社・賃貸オーナー・旅館・寺社・店舗など、法人・事業者様の複数物件・複数現場を継続的に承ります。窓口を一本化することで業者調整の手間を削減できます。" },
  { category: "btob", q: "どんな業種に対応していますか？", a: "不動産会社・管理会社・賃貸オーナー・旅館・ホテル・民泊・寺院・神社・飲食店・居酒屋・カフェ・美容室・サロン・小売店・法人施設など幅広く対応します。業種に応じた素材・施工方法をご提案します。" },
  { category: "btob", q: "畳以外（クロス・床・建具）もまとめて頼めますか？", a: "はい。畳の表替え・新調に加え、クロス（壁・天井）張替え、フローリング・クッションフロア・フロアタイルの補修・張替え、ふすま・障子・網戸の張替えまで一括対応します。" },
  { category: "btob", q: "見積もりはどのくらいで出ますか？", a: "現地訪問のほか、状況によっては写真確認・メールでのお見積もりにも対応します。スピードを重視する法人のお客様のために、できる限り早いご返答を心がけています。" },
  { category: "btob", q: "写真付きの施工報告書はもらえますか？", a: "はい。施工前・施工後の写真を添えた報告書を発行します。オーナー様への報告、退去精算・物件告知の根拠資料としてご活用いただけます。" },
  { category: "btob", q: "見積もりの内訳は明確にしてもらえますか？", a: "はい。工種別に費用を明記したお見積書を発行します。経費精算やオーナー様への説明がしやすい形でご提出します。" },
  { category: "btob", q: "急ぎの案件にも対応できますか？", a: "次の入居者の入居日や内覧・行事が迫っている場合など、タイトな工期のご相談も承ります。優先度・スケジュールをお知らせいただければ、可能な範囲で調整します。" },
  { category: "btob", q: "継続取引・定期メンテナンスは可能ですか？", a: "はい。退去のたびの対応だけでなく、年間発注や計画的なメンテナンスのご相談も承ります。担当者制で物件履歴を踏まえた一貫対応が可能です。" },
  { category: "btob", q: "原状回復の借主負担・貸主負担の判断も相談できますか？", a: "国土交通省の原状回復ガイドラインの考え方を踏まえ、経年劣化・通常損耗と借主の過失による損傷の区分について、現場の状況を写真付きでご説明します。最終判断は貸主・管理会社様が行います。" },
  { category: "btob", q: "退去精算書との整合性は取れますか？", a: "工種別に費用を明記したお見積書・報告書を発行するため、退去精算書との整合性を取りやすい形でご提供します。精算根拠が明確になり、トラブル防止につながります。" },
  { category: "btob", q: "ペット可物件への転換はできますか？", a: "可能です。い草畳から、爪傷・水分に強く清掃しやすい和紙畳・樹脂畳へ変更することで、ペット可物件への転換がしやすくなります。差別化による入居・成約促進が期待できます。" },
  { category: "btob", q: "売買前・内覧前の内装整備にも対応できますか？", a: "はい。内覧での第一印象を改善するための畳・クロス・床・建具の整備に対応します。費用対効果の高い箇所に絞ったご提案も可能です。" },
  { category: "btob", q: "旅館の繁忙期前にまとめて施工してもらえますか？", a: "はい。繁忙期前は依頼が集中します。スケジュールを早めに共有いただければ、稼働中の段階施工や休館日・閑散期の集中施工を計画できます。2〜3か月前のご相談をおすすめします。" },
  { category: "btob", q: "寺社の行事前に間に合わせられますか？", a: "はい。法要・祭礼など重要な行事の前に整えたいというご相談を多くいただきます。日程に余裕をもってご相談いただければ、行事に間に合うよう施工計画を立てます。" },
  { category: "btob", q: "店舗の営業に影響しないように施工できますか？", a: "可能な範囲で、営業時間外・定休日の活用、エリアを区切った段階施工など、営業への影響を抑える方法をご提案します。状況をお知らせください。" },
  { category: "btob", q: "遠方の物件でも対応できますか？", a: "対応エリアや物件の所在によっては出張費が発生する場合があります。まずは所在地をお知らせいただければ、対応可否と条件をご案内します。" },
  { category: "btob", q: "担当者制で対応してもらえますか？", a: "はい。継続的なお取引では担当者制でスムーズな連絡体制を整えます。物件の履歴や過去の対応を踏まえた一貫対応が可能です。" },
  { category: "btob", q: "請求書払い・掛け取引に対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。継続的なお取引の条件についても、案件規模に応じて柔軟にご案内します。" },
  { category: "price", q: "法人向けの料金体系はありますか？", a: "複数物件・継続案件をお持ちの法人様向けには、案件規模に応じて個別にお見積もりします。継続的なお取引の場合はご相談に応じます。まずは案件概要をお知らせください。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい、現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
];

export default function BusinessPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "法人・施設向け" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">For Business</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            法人・事業者向け畳工事・内装工事
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            不動産会社・管理会社・賃貸オーナー・旅館・寺社・店舗・法人施設まで。
            畳・内装・原状回復を、複数物件・継続案件・写真付き報告・スピード見積もりで一括サポートします。
          </p>
        </div>
      </section>

      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>法人対応の概要</h2>
          <p>
            日本畳パートナーズは、法人・事業者のお客様に向けて、畳工事・内装工事・原状回復をワンストップでご提供します。
            複数物件・複数現場の同時対応、退去や内覧・行事に合わせたスピード見積もり、施工前後の写真報告まで、
            事業者様の業務効率と意思決定を支える体制を整えています。
          </p>
          <p>
            退去のたびに複数業者へ連絡し、見積もりを取り、日程を調整する──こうした手間は、空室期間の長期化やオーナー対応の負担につながります。
            畳・クロス・床・建具をまとめてお引き受けすることで、業者調整の手間と二度手間を防ぎ、リードタイムを短縮します。
            継続的なお取引では担当者制でスムーズに連絡でき、請求書払いにも対応します。
          </p>
        </div>
      </section>

      <section className="py-14 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-3 text-center" style={{ fontFamily: "var(--font-serif)" }}>対応業種</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">幅広い業種・施設に対応しています。</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {INDUSTRIES.map((name) => (
              <span key={name} className="text-xs sm:text-sm bg-white border border-border text-sumi/70 px-4 py-2">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>業種別サービス</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_PAGES.map((page) => (
              <Link key={page.href} href={page.href} className="group bg-white border border-border hover:border-ai/30 transition-all duration-300 p-6">
                <h3 className="text-base text-sumi mb-2 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>{page.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed mb-3">{page.desc}</p>
                <p className="text-xs text-ai group-hover:underline">詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>法人のお客様へのサポート体制</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white border border-border p-6">
                <h3 className="text-sm text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{f.title}</h3>
                <p className="text-sm text-sumi/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-3 text-center" style={{ fontFamily: "var(--font-serif)" }}>法人専用の対応フロー</h2>
          <p className="text-sm text-sumi/60 text-center mb-10">お問い合わせから写真付き報告まで、明確な流れで進めます。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FLOW.map((f) => (
              <div key={f.step} className="bg-kiji/40 border border-border p-6">
                <p className="text-2xl text-kincya mb-2" style={{ fontFamily: "var(--font-serif)" }}>{f.step}</p>
                <h3 className="text-sm text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{f.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-sm text-sumi/80 leading-relaxed">
            <h2 className="text-2xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>複数物件・継続案件の対応方針</h2>
            <p>
              複数物件・複数棟を扱うお客様には、退去のたびの個別対応に加え、定期メンテナンスや年間発注の枠組みをご提案します。
              年間を通じた発注により費用管理がしやすくなり、繁忙期の業者確保の不安も軽減できます。
            </p>
            <p>
              担当者制で物件の履歴を共有することで、一貫した品質と迅速な対応を実現します。
              施工管理・スケジュール調整では、内覧・退去・行事・稼働状況に合わせて優先順位を整理し、機会損失を防ぎます。
            </p>
            <p>
              見積もりスピードへの取り組みとして、現地訪問に加え、状況に応じた写真確認・メール見積もりにも対応し、
              意思決定までのリードタイム短縮に努めます。
            </p>
          </div>
          <div className="relative h-56 sm:h-72 bg-kiji overflow-hidden">
            <Image src="/images/nihon-tatami/restoration/restoration-vacant-check-01.png" alt="法人向け畳・内装工事の現地確認" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>よくある質問（法人向け）</h2>
          <div className="bg-white border border-border px-5 py-1">
            <FaqSection items={businessFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="法人・管理会社のご相談"
        primaryHref="/contact#business"
        secondaryLabel="施工事例を見る"
        secondaryHref="/works"
        title="法人のお客様のご相談をお待ちしています"
        subtitle="複数物件・継続案件・大規模施工のご相談も歓迎です。まずはお気軽にお問い合わせください。"
      />
    </>
  );
}
