import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { AREAS, AREA_SERVICES } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `対応エリア｜畳・内装工事 東京・神奈川・千葉・埼玉など1都6県 | ${SITE_NAME}`,
  description:
    "畳張替え・襖障子張替え・原状回復・内装工事の対応エリア。東京・神奈川・千葉・埼玉・群馬・栃木・茨城の1都6県に対応。法人・複数物件・遠方案件もお気軽にご相談ください。",
  path: "/area",
});

const PREF_DESCRIPTIONS: Record<string, string> = {
  saitama:
    "さいたま市・川口市・越谷市など38市区に対応。埼玉県全域の畳張替え・原状回復に実績があります。",
  tokyo:
    "23区を含む多摩地区まで、東京都内の畳工事に対応。マンション・戸建て・事務所・店舗に対応。",
  kanagawa:
    "横浜市・川崎市・相模原市を中心に神奈川県全域に対応。旅館・賃貸物件・施設向けも承ります。",
  chiba:
    "千葉市・船橋市・市川市など千葉県内の畳・原状回復工事に対応。不動産管理会社からのご依頼も多数。",
  gunma:
    "前橋市・高崎市など群馬県内に対応。農家住宅・旧家の畳新調・和室整備も承ります。",
  tochigi:
    "宇都宮市・足利市・日光市など栃木県全域に対応。旅館・寺社の特殊畳工事も対応可。",
  ibaraki:
    "水戸市・つくば市など茨城県内に対応。賃貸管理物件・法人施設の畳・内装工事に対応。",
};

const totalCities = AREAS.reduce((acc, pref) => acc + pref.cities.length, 0);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tatami-partners.jp/area",
      name: "対応エリア｜畳・内装工事",
      description:
        "東京・神奈川・千葉・埼玉・群馬・栃木・茨城の1都6県に対応する畳張替え・内装工事・原状回復のエリア情報ページです。",
      url: "https://www.tatami-partners.jp/area",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "対応エリア",
          item: "https://www.tatami-partners.jp/area",
        },
      ],
    },
  ],
};

export default function AreaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Service Area</p>
          <h1
            className="text-3xl sm:text-5xl text-white mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉を中心に1都6県対応<br />
            畳・内装工事の対応エリア
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl leading-relaxed">
            埼玉県全域を中心に、東京・神奈川・千葉・群馬・栃木・茨城の1都6県に対応。
            住宅・賃貸・旅館・寺社・法人施設など、あらゆる用途の畳工事・内装工事をご依頼いただけます。
          </p>
        </div>
      </section>

      {/* Coverage Summary */}
      <section className="py-12 bg-kiji/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p
                className="text-4xl text-ai mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                1都6県
              </p>
              <p className="text-xs text-sumi/60">対応都県</p>
            </div>
            <div className="text-center">
              <p
                className="text-4xl text-ai mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {totalCities}<span className="text-xl">+</span>
              </p>
              <p className="text-xs text-sumi/60">対応市区町村</p>
            </div>
            <div className="text-center">
              <p
                className="text-4xl text-ai mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                12
              </p>
              <p className="text-xs text-sumi/60">対応サービス</p>
            </div>
            <div className="text-center">
              <p
                className="text-4xl text-ai mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                法人
              </p>
              <p className="text-xs text-sumi/60">広域・複数物件対応</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {["東京都", "神奈川県", "千葉県", "埼玉県", "群馬県", "栃木県", "茨城県"].map(
              (label) => (
                <span
                  key={label}
                  className="text-xs bg-white border border-border text-ai/70 px-4 py-1.5 tracking-wider"
                >
                  {label}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Prefecture Sections — Saitama first */}
      <section className="py-16 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {AREAS.sort((a, b) => {
            if (a.slug === 'saitama') return -1;
            if (b.slug === 'saitama') return 1;
            return 0;
          }).map((pref) => (
            <div key={pref.slug}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-3 gap-2">
                <h2
                  className="text-2xl text-sumi"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
                >
                  {pref.name}
                </h2>
                <Link
                  href={`/area/${pref.slug}`}
                  className="text-xs text-ai hover:underline shrink-0"
                >
                  {pref.name}のエリアページ →
                </Link>
              </div>

              {PREF_DESCRIPTIONS[pref.slug] && (
                <p className="text-sm text-sumi/65 leading-relaxed mb-4">
                  {PREF_DESCRIPTIONS[pref.slug]}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {pref.cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/area/${pref.slug}/${c.slug}`}
                    className="text-xs bg-kiji/40 border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-16 bg-kiji/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl text-sumi mb-2"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            エリア別の対応サービス
          </h2>
          <p className="text-sm text-sumi/60 mb-8">
            各エリアで以下のサービスに対応しています。詳細は各エリアページをご確認ください。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {AREA_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/area/saitama/${s.slug}`}
                className="bg-white border border-border text-center text-xs text-sumi/70 px-3 py-3 hover:border-ai hover:text-ai transition-colors leading-snug"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 法人・広域対応 Callout */}
      <section className="py-14 bg-ai text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-white/50 mb-3 uppercase">Corporate &amp; Wide-Area</p>
          <h2
            className="text-2xl sm:text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            法人・広域対応について
          </h2>
          <p className="text-sm text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            不動産管理会社・ビルオーナー・旅館・寺社など、複数物件・広域エリアにまたがるご依頼も承ります。
            上記1都6県以外の遠方案件についても、内容によってはご対応できる場合がございます。
            まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-kincya text-white text-sm px-8 py-3 hover:opacity-90 transition-opacity tracking-wider"
            >
              無料相談・見積もりを依頼する
            </Link>
            <Link
              href="/business"
              className="inline-block border border-white/30 text-white text-sm px-8 py-3 hover:bg-white/10 transition-colors tracking-wider"
            >
              法人向けサービスを見る
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
