import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `ご依頼の流れ | ${SITE_NAME}`,
  description: "畳の表替え・内装工事・原状回復のご依頼からお引き渡しまでの流れをご説明します。お問い合わせ→現地確認→見積もり→施工→確認引き渡し。",
  path: "/flow",
});

const STEPS_PERSONAL = [
  { num: "01", title: "お問い合わせ", duration: "当日〜翌日", desc: "フォーム・電話・LINEからお問い合わせください。施工の概要（場所・枚数・状態）をお知らせいただけるとスムーズです。お見積もりは無料です。" },
  { num: "02", title: "現地確認", duration: "1〜3日後", desc: "ご希望の日程に現地をご訪問します。畳・内装の状態を実際に確認し、素材・施工方法・価格帯の選択肢をご提案します。" },
  { num: "03", title: "お見積もり・ご提案", duration: "即日〜翌日", desc: "現地確認後、素材・施工方法・金額をわかりやすくご提示します。ご納得いただいてからのご依頼です。追加費用が発生する場合は事前にご説明します。" },
  { num: "04", title: "施工日のご調整", duration: "ご都合に合わせて", desc: "ご都合に合わせて施工日を設定します。表替え・裏返しは翌日〜当日返しも対応可能です。" },
  { num: "05", title: "施工", duration: "半日〜数日", desc: "丁寧に施工を行います。養生・清掃も含めて対応します。表替え・裏返しは畳を工場に持ち帰り、新調・内装工事は現地施工が中心です。" },
  { num: "06", title: "確認・お引き渡し", duration: "施工後即日", desc: "施工後にお客様と仕上がりを確認します。ご満足いただいてからお引き渡しです。疑問点があればその場でご相談ください。" },
];

const STEPS_BUSINESS = [
  { num: "01", title: "物件情報・案件概要のご共有", desc: "物件の場所・部屋数・状態・希望納期などをお知らせください。メール・電話どちらでも対応します。" },
  { num: "02", title: "現地確認・複数現場対応", desc: "複数物件・複数現場の一括確認も承ります。スピーディーな現地対応で、管理業務の効率化をサポートします。" },
  { num: "03", title: "一括見積もり・複数工種対応", desc: "畳・クロス・床・建具など複数工種をまとめて見積もります。工種別の費用内訳も明記します。" },
  { num: "04", title: "施工スケジュールの調整", desc: "旅館の稼働状況・賃貸の入居前後・売買のスケジュールに合わせた施工計画を立てます。急ぎの対応にも努めます。" },
  { num: "05", title: "施工・進捗報告", desc: "施工中は担当者が進捗をご報告します。複数部屋・複数棟の同時施工にも対応。" },
  { num: "06", title: "写真付き報告書・お引き渡し", desc: "施工完了後、写真付きの報告書を提出します。管理会社・オーナー様への報告資料としてご活用いただけます。" },
];

export default function FlowPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "ご依頼の流れ" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Process</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            ご依頼の流れ
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            お問い合わせからお引き渡しまで、丁寧にご対応します。
            個人のお客様・法人のお客様それぞれの流れをご説明します。
          </p>
        </div>
      </section>

      {/* 個人向け */}
      <section className="py-16 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 flex items-center gap-4" style={{ fontFamily: "var(--font-serif)" }}>
            個人・一般住宅のお客様の流れ
            <span className="flex-1 h-px bg-border" />
          </h2>
          <div className="space-y-0">
            {STEPS_PERSONAL.map((step, i) => (
              <div key={step.num} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-kincya/40 flex items-center justify-center shrink-0">
                    <span className="text-xs text-kincya" style={{ fontFamily: "var(--font-serif)" }}>{step.num}</span>
                  </div>
                  {i < STEPS_PERSONAL.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                </div>
                <div className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</h3>
                    <span className="text-xs border border-igusa/30 text-igusa px-2 py-0.5">{step.duration}</span>
                  </div>
                  <p className="text-sm text-sumi/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 法人向け */}
      <section className="py-16 bg-kiji/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 flex items-center gap-4" style={{ fontFamily: "var(--font-serif)" }}>
            法人・管理会社・不動産会社のお客様
            <span className="flex-1 h-px bg-border" />
          </h2>
          <div className="space-y-0">
            {STEPS_BUSINESS.map((step, i) => (
              <div key={step.num} className="flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border border-ai/40 bg-ai/5 flex items-center justify-center shrink-0">
                    <span className="text-xs text-ai" style={{ fontFamily: "var(--font-serif)" }}>{step.num}</span>
                  </div>
                  {i < STEPS_BUSINESS.length - 1 && <div className="w-px flex-1 bg-border mt-3" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-base text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</h3>
                  <p className="text-sm text-sumi/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white border border-border p-6">
            <h3 className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>法人のお客様へのご案内</h3>
            <ul className="space-y-2 text-xs text-sumi/70 leading-relaxed">
              <li>— 複数物件・複数部屋の一括対応が可能です</li>
              <li>— 写真付き施工報告書を発行します（管理会社・オーナー様向け）</li>
              <li>— 継続取引・定期メンテナンスのご相談もお受けします</li>
              <li>— 請求書払い・振込対応可能（要ご相談）</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="py-10 bg-shiro text-center">
        <Link href="/contact" className="inline-block bg-sumi text-white text-sm px-10 py-4 tracking-wider hover:bg-sumi-light transition-colors duration-300">
          お問い合わせ・無料見積もり
        </Link>
      </div>

      <CTASection />
    </>
  );
}
