import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { AREA_SERVICES, type Prefecture, type City } from "@/data/areas";

type Bc = { label: string; href?: string };

type Props = {
  pref: Prefecture;
  city?: City;
  service?: { slug: string; name: string };
  breadcrumbs: Bc[];
};

export default function AreaPageTemplate({ pref, city, service, breadcrumbs }: Props) {
  const areaName = city ? `${pref.name}${city.name}` : pref.name;
  const serviceName = service?.name ?? "畳・襖・障子・内装・原状回復";
  const title = service ? `${areaName}の${service.name}` : `${areaName}の畳・内装サービス`;

  const path = [
    "/area",
    pref.slug,
    city ? city.slug : "",
    service ? service.slug : "",
  ].filter(Boolean).join("/");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: b.label,
        item: b.href ? `${SITE_URL}${b.href}` : `${SITE_URL}${path}`,
      })),
    ],
  };

  const areaServed = city
    ? [{ "@type": "City", name: city.name }]
    : pref.cities.length > 0
      ? [
          { "@type": "State", name: pref.name },
          ...pref.cities.map((c) => ({ "@type": "City", name: c.name })),
        ]
      : [{ "@type": "State", name: pref.name }];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: `${SITE_URL}${path}`,
    telephone: SITE_TEL,
    email: SITE_EMAIL,
    description: `${areaName}の畳張替え・内装工事・原状回復工事`,
    areaServed,
    priceRange: "¥¥",
  };

  const faqs = [
    { q: `${areaName}に対応していますか？`, a: `はい。${areaName}の${serviceName}に対応しています。対応可否は現地確認後にご案内します。まずはお気軽にご相談ください。`, category: "general" as const },
    { q: "見積もりは無料ですか？", a: "現地確認・お見積もりは無料です。素材や枚数により費用は変動します。お気軽にお問い合わせください。", category: "general" as const },
    { q: "法人・複数物件にも対応できますか？", a: "はい。賃貸物件・旅館・寺社・店舗など法人案件、複数物件もご相談可能です。", category: "general" as const },
    { q: `${areaName}で畳の表替えと新調、どちらが良いですか？`, a: `畳床（土台）が健全なら表替えで対応可能です。踏み込むと沈む感覚や、床がへたっている場合は新調が必要です。現地確認後に適切な方法をご案内します。`, category: "general" as const },
    { q: "畳表替えの費用目安はいくらですか？", a: "素材・枚数・現場状況により異なりますが、い草の一般品で4,500円〜/枚程度が目安です。和紙畳や樹脂畳はやや高めになります。正確な費用は現地確認後にお見積もりします。", category: "price" as const },
    { q: "畳の新調はどのくらいの費用がかかりますか？", a: "素材・サイズ・枚数により異なります。一般的な稲わら床+い草表で15,000円〜/枚程度が目安です。建材床や和紙・樹脂畳は価格が異なります。", category: "price" as const },
    { q: "施工当日に退去できますか？", a: "基本的に当日中に仕上げます。ただし枚数・素材・現場状況により所要時間は変わります。お見積もり時にご確認ください。", category: "general" as const },
    { q: "賃貸物件の退去後に畳交換を依頼できますか？", a: "はい。賃貸物件の退去後整備も対応しています。管理会社・オーナー様からのご依頼も承ります。法人案件・複数物件もご相談ください。", category: "general" as const },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Service Area</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            {title}
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            {areaName}で{serviceName}をお探しの方へ。住宅・賃貸・旅館・寺社・店舗・管理物件まで、畳と空間整備をワンストップで承ります。現地確認・お見積もりは無料です。
          </p>
        </div>
      </section>

      <section className="py-14 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              {areaName}での対応について
            </h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-3">
              {areaName}エリアで、{serviceName}に対応しています。畳の表替え・裏返し・新調から、襖・障子の張替え、クロス・床などの内装工事、賃貸退去後の原状回復まで、幅広くご相談いただけます。
            </p>
            <p className="text-sm text-sumi/80 leading-relaxed">
              一般住宅はもちろん、賃貸物件のオーナー様・管理会社様、旅館・寺社・店舗など法人・施設のご依頼も歓迎します。対応可否は現地確認後にご案内し、素材や枚数により費用は変動します。
            </p>
          </div>

          {!service && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {areaName}で対応するサービス
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {AREA_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={city ? `/area/${pref.slug}/${city.slug}/${s.slug}` : `/area/${pref.slug}/${s.slug}`}
                    className="block bg-kiji/40 border border-border p-4 hover:border-kincya transition-colors"
                  >
                    <span className="text-sm text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</span>
                    <span className="block text-xs text-ai mt-1">{areaName}の{s.name} →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {service && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                その他のサービス（{areaName}）
              </h2>
              <div className="flex flex-wrap gap-2">
                {AREA_SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={city ? `/area/${pref.slug}/${city.slug}/${s.slug}` : `/area/${pref.slug}/${s.slug}`}
                    className="text-xs bg-kiji/50 border border-border text-sumi/70 px-3 py-1.5 hover:border-kincya transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 市区一覧（県ページ または 県×サービスページ） */}
          {!city && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {pref.name}の対応市区
              </h2>
              <div className="flex flex-wrap gap-2">
                {pref.cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={service ? `/area/${pref.slug}/${c.slug}/${service.slug}` : `/area/${pref.slug}/${c.slug}`}
                    className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                  >
                    {c.name}{service ? `の${service.name}` : ""}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              よくある質問
            </h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 関連エリアページ */}
      <section className="py-12 bg-kiji/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-5 uppercase text-center">Related Pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { label: `${pref.name}の畳工事TOP`, href: `/area/${pref.slug}` },
              { label: `${pref.name}の畳表替え`, href: `/area/${pref.slug}/tatami-omotegae` },
              { label: `${pref.name}の畳新調`, href: `/area/${pref.slug}/tatami-shinchou` },
              { label: `${pref.name}の畳裏返し`, href: `/area/${pref.slug}/tatami-uragaeshi` },
              { label: `${pref.name}の襖張替え`, href: `/area/${pref.slug}/fusuma` },
              { label: `${pref.name}の障子張替え`, href: `/area/${pref.slug}/shoji` },
              { label: `${pref.name}の原状回復`, href: `/area/${pref.slug}/restoration` },
              { label: "畳サービス一覧", href: "/services" },
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
        title={`${areaName}での施工はお気軽にご相談ください`}
        subtitle="畳の張替え・内装工事・原状回復まで、無料でお見積もりいたします。"
      />
    </>
  );
}
