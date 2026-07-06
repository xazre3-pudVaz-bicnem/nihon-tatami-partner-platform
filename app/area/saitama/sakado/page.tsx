import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "坂戸市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "坂戸市全域で畳の張替え・表替え・新調に対応。にっさい花みず木の住宅地や大学周辺の学生向け賃貸まで、坂戸 畳のご相談に幅広く対応。戸建て・アパート・法人施設。現地確認・見積もり無料。",
  path: "/area/saitama/sakado",
});

const { pref, city } = getCity("saitama", "sakado") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "坂戸市内のどのエリアまで対応していますか？",
    a: "坂戸市全域に対応しています。坂戸駅・北坂戸駅周辺から、にっさい花みず木・千代田・浅羽・入西など市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "にっさい花みず木の建売住宅の和室にも対応できますか？",
    a: "はい。にっさい花みず木をはじめとする分譲地の建売住宅には、フローリングに合わせた薄型畳や半畳の縁なし畳が多く採用されています。既存サイズに合わせた表替え・新調に対応しています。",
    category: "general" as const,
  },
  {
    q: "大学が多い地域ですが学生向け賃貸の畳も頼めますか？",
    a: "はい。坂戸市には女子栄養大学・城西大学などがあり、学生向けアパート・ワンルームが多いエリアです。退去シーズンの原状回復や、複数室の一括表替えに対応しています。",
    category: "general" as const,
  },
  {
    q: "縁なし畳（琉球畳）への変更はできますか？",
    a: "はい。モダンな内装に合う縁なし畳・半畳畳への変更も承ります。和紙表・樹脂表を用いたカラー畳もご用意でき、建売住宅の和室の雰囲気を一新できます。",
    category: "material" as const,
  },
  {
    q: "見積もりだけでも来てもらえますか？",
    a: "はい。現地確認・お見積もりは無料です。畳の枚数やサイズ、傷み具合を拝見したうえで、複数のプランと概算費用をその場でご説明します。",
    category: "price" as const,
  },
  {
    q: "1枚だけの表替えでも対応してもらえますか？",
    a: "はい。1枚からでも承ります。日焼けやささくれが気になる1枚だけの表替え・裏返しにも柔軟に対応しています。",
    category: "general" as const,
  },
  {
    q: "坂戸市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "退去シーズンにまとめて依頼できますか？",
    a: "はい。2〜3月の退去シーズンは学生向け賃貸のご依頼が集中します。早めにご連絡いただければ、複数室の原状回復を計画的にスケジューリングします。",
    category: "general" as const,
  },
  {
    q: "襖や障子もまとめて頼めますか？",
    a: "はい。畳の張替えと同時に襖・障子・網戸の張替えもまとめて承れます。一度の訪問で和室全体をリフレッシュでき、費用も効率的です。",
    category: "general" as const,
  },
  {
    q: "支払い方法を教えてください。",
    a: "現地確認・見積もりは無料で、施工完了後のお支払いが基本です。法人様・管理会社様は請求書払いにも対応しています。",
    category: "price" as const,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "埼玉県", item: `${SITE_URL}/area/saitama` },
    { "@type": "ListItem", position: 4, name: "坂戸市", item: `${SITE_URL}/area/saitama/sakado` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/sakado#webpage`,
  name: "坂戸市の畳張替え・表替え・新調",
  description: "坂戸市全域で畳の張替え・表替え・新調に対応。にっさい花みず木の住宅地や大学周辺の学生向け賃貸まで幅広く対応。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/sakado`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/sakado`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "坂戸市全域対応の畳張替え・表替え・新調・原状回復専門業者。建売住宅の薄型畳・学生向け賃貸にも対応。",
  areaServed: { "@type": "AdministrativeArea", name: "埼玉県" },
  priceRange: "¥¥",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SakadoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "坂戸市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Sakado City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            坂戸市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            埼玉県西部、東武東上線が通る坂戸市。にっさい花みず木の分譲住宅地や、大学周辺の学生向け賃貸が集まるエリアで、坂戸 畳の張替え・表替え・新調に対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            建売住宅の薄型畳・縁なし畳から、賃貸の原状回復まで幅広く対応。1枚の表替えから複数室の一括施工まで、丁寧に仕上げます。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_TEL.replace(/-/g, "")}`}
              className="inline-block bg-kincya text-white text-sm px-5 py-2.5 tracking-wide hover:bg-kincya/90 transition-colors"
            >
              {SITE_TEL} に電話する
            </a>
            <Link href="/contact" className="inline-block border border-white/30 text-white text-sm px-5 py-2.5 tracking-wide hover:bg-white/10 transition-colors">
              フォームで相談する
            </Link>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-14 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              坂戸市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                坂戸市は埼玉県西部、東武東上線・越生線が交わる交通の便に恵まれたまちです。都心へのアクセスの良さから、近年は「にっさい花みず木」をはじめとする大規模分譲地の開発が進み、若い世帯のファミリー層が多く暮らしています。
              </p>
              <p>
                こうした建売住宅の和室には、フローリングに合わせた薄型畳や、モダンな半畳の縁なし畳が採用されるケースが増えています。既存の畳寸法や床の高さに合わせた表替え・新調が求められる地域です。
              </p>
              <p>
                また、女子栄養大学・城西大学などのキャンパスがあり、学生向けのアパート・ワンルームが数多く立地しています。2〜3月の退去シーズンには原状回復のご依頼が集中するため、計画的なスケジュール調整を大切にしています。
              </p>
              <p>
                日本畳パートナーズでは、坂戸市全域を対象に現地確認・お見積もりを無料で承っています。住まいのタイプに合わせた素材と仕上げをご提案します。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              坂戸市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "建売住宅の薄型畳", desc: "フローリング床に合わせた薄型畳・半畳畳の表替え・新調。" },
                { title: "縁なし畳・カラー畳", desc: "にっさい花みず木のモダンな和室に映える縁なし畳を提案。" },
                { title: "学生向け賃貸の原状回復", desc: "大学周辺のアパート・ワンルームの退去後対応に実績。" },
                { title: "複数室の一括施工", desc: "退去シーズンの複数物件をまとめて計画的にスケジューリング。" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              坂戸市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "縁なし畳への変更", desc: "和紙表・樹脂表のカラー畳で建売住宅の和室を一新。" },
                { title: "い草畳への表替え", desc: "日焼け・ささくれが気になる和室を香り豊かに。" },
                { title: "賃貸物件の原状回復", desc: "畳・襖・障子・網戸を一括対応し、次の入居募集に間に合わせます。" },
                { title: "襖・障子・網戸の張替え", desc: "畳工事とあわせて和室全体を一度の訪問で仕上げます。" },
              ].map((service, i) => (
                <div key={i} className="border border-border bg-white p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{service.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              坂戸市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 素材・広さにより変動します。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">施工内容</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">目安価格</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "新しいうちの早めの対応がおすすめ" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "香りと肌ざわりを重視する方に" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "色あせに強くカラーも豊富" },
                    { label: "縁なし畳（半畳）", price: "8,000円〜/枚", note: "モダンな内装に人気" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・薄型床別途" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "量産品・本襖対応" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "まとめてのご依頼で効率的" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-kiji/20"}>
                      <td className="px-4 py-3 text-sumi/80 text-xs">{row.label}</td>
                      <td className="px-4 py-3 text-ai font-medium text-xs">{row.price}</td>
                      <td className="px-4 py-3 text-sumi/50 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/40 mt-2">税別表示。枚数・素材により変動します。まずは無料見積もりをご利用ください。</p>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "建売住宅・戸建の畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "学生向け賃貸の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "畳の選び方ガイド", href: "/area/saitama/guide-tatami-buying", desc: "い草・和紙・樹脂・縁なし畳の違い" },
              ].map((p, i) => (
                <Link
                  key={i}
                  href={p.href}
                  className="block bg-kiji/30 border border-border p-4 hover:border-ai transition-colors"
                >
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{p.label}</p>
                  <p className="text-xs text-sumi/60">{p.desc}</p>
                  <span className="text-xs text-ai mt-1 block">詳しく見る →</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              坂戸市の方向けよくある質問（Q&A）
            </h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={FAQ_ITEMS} />
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-kiji/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-5 uppercase text-center">関連ページ・エリア</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { label: "埼玉県全域対応", href: "/area/saitama" },
              { label: "畳張替え・畳工事", href: "/area/saitama/tatami" },
              { label: "畳の選び方ガイド", href: "/area/saitama/guide-tatami-buying" },
              { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner" },
              { label: "鶴ヶ島市", href: "/area/saitama/tsurugashima" },
              { label: "日高市", href: "/area/saitama/hidaka" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "縁なし畳・琉球畳", href: "/area/saitama/herinashi-tatami" },
              { label: "価格目安", href: "/price" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-sumi/60 hover:text-ai border border-border py-2 px-3 text-center bg-white hover:border-ai/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="坂戸市の畳工事はお気軽にご相談ください"
        subtitle="建売住宅の縁なし畳から学生向け賃貸の原状回復まで、坂戸市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
