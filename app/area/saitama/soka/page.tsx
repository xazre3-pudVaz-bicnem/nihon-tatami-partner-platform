import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "草加市の畳張替え・表替え・新調｜江戸情緒・おせんべい対応｜日本畳パートナーズ",
  description:
    "草加市全域で畳張替え・表替え・新調に対応。江戸情緒・おせんべいの町。戸建て・マンション・旧家・商店。現地確認・見積もり無料。",
  path: "/area/saitama/soka",
});

const FAQ_ITEMS = [
  {
    q: "草加市内のどのエリアまで対応していますか？",
    a: "草加市全域に対応しています。草加駅周辺・鷲宮・川柳・新田など全地区からのご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "草加は歴史的な町ですが、古い建築での施工経験はありますか？",
    a: "はい。草加市の江戸情緒が残る地区での古い建築の施工実績が豊富です。旧家・商家の畳・襖・障子工事に対応しています。",
    category: "general" as const,
  },
  {
    q: "おせんべい工場・製造施設での施工に対応していますか？",
    a: "はい。草加のおせんべい製造施設・工場での特殊な床材工事に対応しています。食品製造施設の衛生・耐久性要件にも対応可能です。",
    category: "general" as const,
  },
  {
    q: "草加駅周辺の商業地での施工は可能ですか？",
    a: "はい。草加駅周辺のマンション・商業施設・店舗の施工実績があります。営業時間外の施工も対応可能です。",
    category: "general" as const,
  },
  {
    q: "旧家・商家の格式ある畳工事に対応していますか？",
    a: "はい。草加市内の旧家・商家の格式ある畳・襖工事に対応しています。歴史的価値を尊重した施工が特徴です。",
    category: "general" as const,
  },
  {
    q: "草加市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。古い建築は別途相談になる場合があります。",
    category: "price" as const,
  },
  {
    q: "古い商店街・商家地区での施工実績はありますか？",
    a: "はい。草加市内の商店街・商家地区での施工実績があります。営業を考慮したスケジュール調整が可能です。",
    category: "general" as const,
  },
  {
    q: "七夕祭り・観光イベント前での施工に対応していますか？",
    a: "はい。草加七夕祭りなど観光イベント前の施工・メンテナンスに対応しています。事前ご相談ください。",
    category: "general" as const,
  },
  {
    q: "マンション・一般住宅の施工実績も多いですか？",
    a: "はい。草加駅周辺のマンションから郊外の戸建て住宅まで、幅広い施工実績があります。",
    category: "general" as const,
  },
  {
    q: "見積もり・施工のスケジュール調整は柔軟ですか？",
    a: "はい。商店の営業時間・イベント日程に配慮した施工スケジュール調整が可能です。事前にご相談ください。",
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
    { "@type": "ListItem", position: 4, name: "草加市", item: `${SITE_URL}/area/saitama/soka` },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/soka`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "草加市全域対応の畳張替え・表替え・新調・旧家・商家対応専門業者。",
  areaServed: { "@type": "City", name: "草加市" },
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

export default function SokaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "草加市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Soka City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            草加市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            江戸情緒が残る「おせんべいの町」草加市。旧家・商家から現代的なマンションまで、幅広い施工に対応しています。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            おせんべい工場・商店街・観光施設など、草加市の特色ある施設での施工経験が豊富です。
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

          {/* 草加市での畳工事について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              草加市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                草加市は埼玉県の東南部に位置し、江戸時代から菱や草鞋の産地として知られ、現在ではおせんべいの町として全国的に有名です。市内には江戸情緒が残る歴史的な地区があり、旧家・商家・商店街が多く存在します。
              </p>
              <p>
                一方で、草加駅周辺は商業地として発展し、マンション・商業施設などの現代的な建築も増えています。このため、草加での畳工事は「歴史的建造物と現代建築」の両方に対応することが求められます。
              </p>
              <p>
                おせんべい製造施設での施工経験も豊富で、食品製造施設の衛生・耐久性要件に対応した床材選択をご提案しています。また、七夕祭りなどの観光イベント前の施工にも対応しています。
              </p>
              <p>
                旧家・商家の格式ある畳・襖工事では、歴史的価値を尊重した施工方法を心がけています。
              </p>
            </div>
          </div>

          {/* 草加市での施工特徴 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              草加市での施工の特徴
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { feature: "旧家・商家", desc: "江戸情緒・格式ある畳・襖・障子工事" },
                { feature: "おせんべい工場", desc: "食品製造施設の特殊床材工事・衛生対応" },
                { feature: "商店街・観光施設", desc: "営業・イベント日程に配慮した施工スケジュール" },
                { feature: "駅周辺マンション", desc: "草加駅周辺の商業地・高層建築施工" },
              ].map((item, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-4">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{item.feature}</p>
                  <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 草加市での主要サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              草加市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "旧家・商家の畳工事", desc: "江戸情緒が残る地区の格式ある畳・襖・障子工事。" },
                { title: "おせんべい工場の施工", desc: "食品製造施設の床材工事・衛生・耐久性対応。" },
                { title: "商店街・観光施設", desc: "営業時間・イベント日程に配慮したスケジュール調整。" },
                { title: "駅周辺商業施設", desc: "マンション・店舗・オフィスの大規模施工。" },
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
              草加市内の施工費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 古い建築・工場施設は別途相談です。</p>
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
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・食品施設向け" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "マンション向け" },
                    { label: "畳 新調（わら床）", price: "22,000円〜/枚", note: "旧家・商家向け" },
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
            <p className="text-xs text-sumi/40 mt-2">税別表示。古い建築・工場施設は別途見積もりです。</p>
          </div>

          {/* ターゲット別サービス */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              あなたの状況から選ぶサービス
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・マンション和室の畳・襖・障子" },
                { label: "旧家・商家所有者向け", href: "/contact", desc: "歴史的建造物・格式ある施工対応" },
                { label: "飲食店・観光施設向け", href: "/area/saitama/for-store", desc: "営業・イベント日程に配慮" },
                { label: "食品製造施設向け", href: "/contact", desc: "衛生・耐久性要件対応施工" },
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
              草加市の方向けよくある質問（Q&A）
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
              { label: "越谷市", href: "/area/saitama/koshigaya" },
              { label: "川口市", href: "/area/saitama/kawaguchi" },
              { label: "八潮市", href: "/area/saitama/yashio" },
              { label: "新座市", href: "/area/saitama/niiza" },
              { label: "旧家・古民家向け", href: "/contact" },
              { label: "新調", href: "/area/saitama/tatami-shinchou" },
              { label: "表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "店舗・飲食店向け", href: "/area/saitama/for-store" },
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
        title="草加市の畳工事はお気軽にご相談ください"
        subtitle="旧家・商家・観光施設・食品製造施設など、多様な建築での施工に対応します。"
      />
    </>
  );
}
