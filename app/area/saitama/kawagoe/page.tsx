import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "川越市の畳張替え・表替え・新調｜蔵造り・歴史建築対応｜日本畳パートナーズ",
  description:
    "川越市全域で畳張替え・表替え・新調に対応。「小江戸」蔵造り・歴史的建造物・観光施設での豊富な施工実績。現地確認・見積もり無料。",
  path: "/area/saitama/kawagoe",
});

const FAQ_ITEMS = [
  {
    q: "川越市内のどのエリアまで対応していますか？",
    a: "川越市全域に対応しています。一番街・蔵の町・川越駅周辺・喜多町・新河岸など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "蔵造りの歴史的建造物での施工は可能ですか？",
    a: "はい。川越の「小江戸」エリアの蔵造り・江戸時代建築での施工実績が豊富です。歴史的価値を損なわない丁寧な施工を心がけています。",
    category: "general" as const,
  },
  {
    q: "観光施設・旅館での施工経験はありますか？",
    a: "はい。川越市内の旅館・民泊・観光施設の畳・襖・障子工事に対応した実績があります。営業日時を考慮した施工スケジュール調整が可能です。",
    category: "general" as const,
  },
  {
    q: "川越駅周辺の商業地での施工も対応できますか？",
    a: "はい。川越駅周辺のマンション・商業施設・オフィスビルの和室施工実績があります。営業時間外の施工も対応可能です。",
    category: "general" as const,
  },
  {
    q: "古い建築・特殊な寸法への対応はできますか？",
    a: "はい。江戸時代建築など古い建物の特殊な寸法・構造に対応できます。畳表の採寸から施工まで、丁寧に対応いたします。",
    category: "general" as const,
  },
  {
    q: "川越市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建築は別途相談となる場合があります。",
    category: "price" as const,
  },
  {
    q: "蔵造りの修復・保全工事に対応していますか？",
    a: "はい。蔵造りの建物の状態診断・修復計画をご提案し、長期的な保全に貢献しています。文化的価値を重視した施工を心がけています。",
    category: "general" as const,
  },
  {
    q: "文化財指定建築での施工経験はありますか？",
    a: "はい。川越市内の文化財建造物・登録有形文化財での施工実績があります。文化庁の指導に従った施工方法をご提案します。",
    category: "general" as const,
  },
  {
    q: "季節営業の施設での施工スケジュール調整は可能ですか？",
    a: "はい。観光シーズン・営業日を考慮した施工スケジュール調整が可能です。閑散期での施工など、柔軟に対応いたします。",
    category: "general" as const,
  },
  {
    q: "大規模な原状回復・改修工事に対応していますか？",
    a: "はい。旅館・民泊・商業施設の大規模改修工事に対応しています。畳・襖・障子・クロス・床の一括施工が可能です。",
    category: "general" as const,
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "埼玉県", item: `${SITE_URL}/area/saitama` },
    { "@type": "ListItem", position: 4, name: "川越市", item: `${SITE_URL}/area/saitama/kawagoe` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/kawagoe`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "川越市全域対応の畳張替え・表替え・新調・蔵造り・歴史建築対応専門業者。",
  areaServed: { "@type": "City", name: "川越市" },
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

export default function KawagoePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "川越市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Kawagoe City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            川越市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            江戸情緒が残る「小江戸」川越。蔵造り・歴史的建造物での豊富な施工実績があります。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            観光施設・旅館から一般住宅まで、川越市の多様な建築での高品質な畳工事を提供します。文化的価値を尊重した施工が特徴です。
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

          {/* 川越市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川越市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                川越市は埼玉県の西部に位置し、江戸時代からの歴史的建造物が数多く残る「小江戸」として知られています。蔵造りの建物が立ち並ぶ一番街・蔵の町エリアは、観光地としても名高く、多くの旅館・民泊・飲食店・商業施設が集中しています。
              </p>
              <p>
                このような歴史的背景から、川越での畳工事の最大の特徴は「文化的価値の保全」です。江戸時代建築の特殊な寸法・構造に対応し、歴史的価値を損なわない施工方法を提案することが求められます。
              </p>
              <p>
                一番街・蔵の町では観光施設・旅館での施工が多く、営業日時に配慮したスケジュール調整が重要です。また、文化財指定建築での施工経験も豊富で、文化庁の指導に従った適切な施工方法をご提案しています。
              </p>
              <p>
                川越駅周辺の商業地・一般住宅地でも幅広い施工実績があり、古い建築から新しいマンションまで、あらゆるタイプの物件に対応可能です。
              </p>
            </div>
          </div>

          {/* 川越市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川越市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "蔵造り・歴史建築", desc: "江戸時代建築の特殊な寸法・構造に対応" },
                { feature: "観光施設・旅館", desc: "営業日時を配慮した施工スケジュール調整" },
                { feature: "文化財建造物", desc: "文化庁指導の施工方法・素材選択" },
                { feature: "川越駅周辺地区", desc: "商業施設・オフィス・マンション施工" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 川越市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川越市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "蔵造り・一番街施工", desc: "観光地・蔵造り建物の畳・襖・障子・内装工事。" },
                { title: "旅館・民泊のメンテナンス", desc: "営業を考慮したスケジュール調整・季節ごとの施工対応。" },
                { title: "文化財建造物の修復", desc: "文化的価値を損なわない適切な施工方法・素材選択。" },
                { title: "川越駅周辺商業施設", desc: "オフィス・店舗・マンションの大規模原状回復工事。" },
              ].map((service, i) => (
                <div key={i} className="border border-border bg-white p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{service.title}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 料金目安 */}
          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川越市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 歴史建築・文化財は別途相談です。</p>
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
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "既存物件対応" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "標準グレード" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "耐久性重視" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・商業向け" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "歴史建築向け" },
                    { label: "襖 張替え", price: "3,500円〜/枚", note: "格式素材対応" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。歴史建築・文化財は別途見積もりです。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "旅館・民泊向け", href: "/area/saitama/for-ryokan", desc: "営業を考慮した施工・メンテナンス対応" },
                { label: "店舗・飲食店向け", href: "/area/saitama/for-store", desc: "座敷・小上がり・内装工事" },
                { label: "文化施設・管理団体向け", href: "/contact", desc: "文化財建造物・歴史的保全工事" },
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

          {/* FAQ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              川越市の方向けよくある質問（Q&A）
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
              { label: "所沢市", href: "/area/saitama/tokorozawa" },
              { label: "狭山市", href: "/area/saitama/sayama" },
              { label: "坂戸市", href: "/area/saitama/sakado" },
              { label: "旅館・宿泊施設向け", href: "/area/saitama/for-ryokan" },
              { label: "店舗・飲食店向け", href: "/area/saitama/for-store" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "原状回復工事", href: "/area/saitama/restoration" },
              { label: "内装工事", href: "/area/saitama/interior" },
              { label: "料金目安", href: "/price" },
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
        title="川越市の畳工事はお気軽にご相談ください"
        subtitle="蔵造り・歴史的建造物・旅館・一般住宅まで、多様な建築での高品質な施工に対応します。"
      />
    </>
  );
}
