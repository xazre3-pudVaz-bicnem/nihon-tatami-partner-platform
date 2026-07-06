import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { getCity } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "鶴ヶ島市の畳張替え・表替え・新調｜日本畳パートナーズ",
  description:
    "鶴ヶ島市全域で畳の張替え・表替え・新調に対応。若葉駅・鶴ヶ島駅周辺の住宅地の戸建て・分譲マンション・賃貸まで、鶴ヶ島 畳のご相談に幅広く対応。現地確認・見積もり無料。",
  path: "/area/saitama/tsurugashima",
});

const { pref, city } = getCity("saitama", "tsurugashima") || { pref: null, city: null };

const FAQ_ITEMS = [
  {
    q: "鶴ヶ島市内のどのエリアまで対応していますか？",
    a: "鶴ヶ島市全域に対応しています。若葉駅・鶴ヶ島駅周辺から、脚折・鶴ヶ丘・富士見・藤金など市内全域でご依頼をお受けしています。",
    category: "general" as const,
  },
  {
    q: "分譲マンションの和室でも施工できますか？",
    a: "はい。鶴ヶ島市には駅周辺を中心に分譲マンションが多く、和室の畳表替え・新調に対応しています。管理規約による施工時間の制限にも配慮してスケジュールを調整します。",
    category: "general" as const,
  },
  {
    q: "住宅地の戸建てが多いですが対応してもらえますか？",
    a: "はい。鶴ヶ島市は計画的に整備された住宅地が広がり、戸建て住宅が多いエリアです。子育て世帯の和室リフレッシュから、長年住まれたお宅の畳新調まで幅広く対応しています。",
    category: "general" as const,
  },
  {
    q: "小さな子どもがいても安心な畳はありますか？",
    a: "はい。傷や汚れに強く、ダニ・カビが発生しにくい和紙畳・樹脂畳がおすすめです。転んでも安心なクッション性を保ちつつ、お手入れが簡単で子育て世帯に人気です。",
    category: "material" as const,
  },
  {
    q: "見積もりだけでも来てもらえますか？",
    a: "はい。現地確認・お見積もりは無料です。畳の枚数や傷み具合を拝見したうえで、複数のプランと概算費用をその場でご説明します。",
    category: "price" as const,
  },
  {
    q: "1枚だけの表替えでも対応してもらえますか？",
    a: "はい。1枚からでも承ります。日焼けやささくれが気になる1枚だけの表替え・裏返しにも柔軟に対応しています。",
    category: "general" as const,
  },
  {
    q: "鶴ヶ島市での施工費用の目安は？",
    a: "表替え（い草）は1枚4,500円〜、和紙は6,500円〜、樹脂は7,500円〜が目安です。素材・広さにより変動しますので、まずは無料見積もりをご利用ください。",
    category: "price" as const,
  },
  {
    q: "共働きで日中不在ですが工事は可能ですか？",
    a: "はい。畳を一度お預かりして工房で仕上げ、後日納品する方法もあります。土日や夕方の訪問もご相談いただけますので、ご都合に合わせて調整します。",
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
    { "@type": "ListItem", position: 4, name: "鶴ヶ島市", item: `${SITE_URL}/area/saitama/tsurugashima` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/tsurugashima#webpage`,
  name: "鶴ヶ島市の畳張替え・表替え・新調",
  description: "鶴ヶ島市全域で畳の張替え・表替え・新調に対応。住宅地の戸建て・分譲マンション・賃貸まで幅広く対応。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/tsurugashima`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama/tsurugashima`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "鶴ヶ島市全域対応の畳張替え・表替え・新調・原状回復専門業者。住宅地の戸建て・分譲マンションにも対応。",
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

export default function TsurugashimaPage() {
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
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県", href: "/area/saitama" }, { label: "鶴ヶ島市" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Tsurugashima City</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            鶴ヶ島市での畳工事なら日本畳パートナーズ
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            東武東上線・越生線が通る埼玉県西部の鶴ヶ島市。落ち着いた住宅地が広がり、戸建て・分譲マンションが多いエリアで、鶴ヶ島 畳の張替え・表替え・新調に対応します。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            子育て世帯に人気の傷・汚れに強い畳から、長く住まれたお宅の畳新調まで幅広く対応。共働きのご家庭にも通いやすいスケジュールを調整します。
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
              鶴ヶ島市での畳工事について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                鶴ヶ島市は埼玉県西部、坂戸市・川越市に隣接するコンパクトなまちです。関越自動車道の鶴ヶ島インターチェンジや圏央道とのジャンクションを擁し、都心・県外へのアクセスにも恵まれた住宅都市として発展してきました。
              </p>
              <p>
                市内は計画的に整備された住宅地が広がり、戸建て住宅や駅周辺の分譲マンションが多いのが特徴です。子育て世帯からシニア世帯まで幅広い層が暮らし、和室のある住まいも多く残っています。
              </p>
              <p>
                こうした住宅地では、小さなお子さまのいるご家庭から「傷や汚れに強い畳にしたい」というご相談が増えています。和紙畳・樹脂畳など、お手入れが簡単でダニ・カビの発生を抑えられる素材のご提案が好評です。
              </p>
              <p>
                日本畳パートナーズでは、鶴ヶ島市全域を対象に現地確認・お見積もりを無料で承っています。共働きのご家庭には畳のお預かり施工など、暮らしに合わせた柔軟な対応を心がけています。
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              鶴ヶ島市での施工の特徴と実績
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "住宅地の戸建て和室", desc: "子育て世帯からシニア世帯まで、和室の表替え・新調に対応。" },
                { title: "分譲マンションの和室", desc: "管理規約の施工時間に配慮したスケジュール調整。" },
                { title: "子育て世帯向け素材提案", desc: "傷・汚れに強い和紙畳・樹脂畳をご提案。" },
                { title: "共働き家庭への配慮", desc: "畳のお預かり施工・土日夕方の訪問にも対応。" },
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
              鶴ヶ島市からよくご依頼いただくサービス
            </h2>
            <div className="space-y-3">
              {[
                { title: "和紙畳・樹脂畳への新調", desc: "傷・汚れ・ダニに強く、子育て世帯におすすめ。" },
                { title: "い草畳への表替え", desc: "日焼け・ささくれが気になる和室を香り豊かにリフレッシュ。" },
                { title: "分譲マンション和室の張替え", desc: "施工時間の制限に配慮し、近隣にも配慮した工事。" },
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
              鶴ヶ島市内の施工費用目安
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
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "子育て世帯に人気" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "傷・汚れに強く高耐久" },
                    { label: "畳 新調", price: "15,000円〜/枚", note: "建材床・わら床別途" },
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
                { label: "一般住宅オーナー向け", href: "/area/saitama/for-homeowner", desc: "戸建・分譲マンションの畳・襖・障子" },
                { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner", desc: "退去後の原状回復・継続管理" },
                { label: "不動産管理会社向け", href: "/area/saitama/for-property-management", desc: "複数物件・継続案件対応" },
                { label: "畳の選び方ガイド", href: "/area/saitama/guide-tatami-buying", desc: "い草・和紙・樹脂の違いを解説" },
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
              鶴ヶ島市の方向けよくある質問（Q&A）
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
              { label: "坂戸市", href: "/area/saitama/sakado" },
              { label: "日高市", href: "/area/saitama/hidaka" },
              { label: "川越市", href: "/area/saitama/kawagoe" },
              { label: "和紙畳", href: "/area/saitama/washi-tatami" },
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
        title="鶴ヶ島市の畳工事はお気軽にご相談ください"
        subtitle="住宅地の戸建てから分譲マンションまで、鶴ヶ島市全域で対応。現地確認・お見積もりは無料です。"
      />
    </>
  );
}
