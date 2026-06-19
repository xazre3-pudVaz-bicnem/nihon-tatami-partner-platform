import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `法人・施設向けサービス | 不動産・旅館・寺社・店舗 | ${SITE_NAME}`,
  description: "不動産会社・管理会社・旅館・寺社・店舗オーナー向けの畳・内装・原状回復サービス。複数物件・継続案件対応。写真付き施工報告書発行。",
  path: "/business",
});

const BUSINESS_PAGES = [
  { title: "不動産会社・管理会社", href: "/business/real-estate", desc: "管理物件の原状回復・空室対策・売買前内装整備を一括サポート。" },
  { title: "不動産管理会社（継続対応）", href: "/business/property-management", desc: "複数物件の原状回復・定期メンテナンスを一括管理。" },
  { title: "賃貸オーナー", href: "/business/rental-owner", desc: "退去後の原状回復・空室対策・ペット可対応への変更。" },
  { title: "旅館・宿泊施設", href: "/business/ryokan", desc: "客室畳の大量施工・繁忙期前の集中スケジューリング。" },
  { title: "寺院・神社", href: "/business/temple-shrine", desc: "格式に合わせた畳工事・行事前の整備。" },
  { title: "店舗オーナー", href: "/business/store", desc: "飲食店・小売店の和スペース設置・内装改修・退去時原状回復。" },
  { title: "空室対策", href: "/business/vacancy-measures", desc: "畳・内装整備で賃貸物件の競争力を高める。" },
];

const FEATURES = [
  { title: "複数物件・複数現場の一括対応", desc: "複数物件・複数棟の原状回復や定期メンテナンスをまとめてご依頼いただけます。業者探しの手間を省きます。" },
  { title: "スピーディーな現地確認・見積もり", desc: "退去のタイミングに合わせたスピーディーな対応。急ぎの案件にも努めます。" },
  { title: "写真付き施工報告書の発行", desc: "施工前後の写真付き報告書を発行。管理会社・オーナー様への報告資料としてご活用いただけます。" },
  { title: "明確な見積もりと費用内訳", desc: "工種別の費用内訳を明記した見積もりを提出。追加費用は事前にご説明します。" },
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
            法人・施設向けサービス
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            不動産会社・管理会社・賃貸オーナー・旅館・寺社・店舗オーナーまで。
            畳・内装・原状回復を一括でサポートします。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>法人向けサービスメニュー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_PAGES.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white border border-border hover:border-ai/30 transition-all duration-300 p-6"
              >
                <h3 className="text-base text-sumi mb-2 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                  {page.title}
                </h3>
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
