import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_TEL, SITE_EMAIL, SITE_URL, AREA_SERVED_SCHEMA } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";
import { AREAS, PRIMARY_AREA_SLUG } from "@/data/areas";
import { KATSUSHIKA_AREA_CONTENT } from "@/data/katsushika-areas";
import { getAllPosts } from "@/lib/blog";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroSection from "@/components/sections/home/IntroSection";
import AreaSection from "@/components/sections/home/AreaSection";
import ConceptSection from "@/components/sections/home/ConceptSection";
import KeywordBand from "@/components/sections/home/KeywordBand";
import ReasonsSection from "@/components/sections/home/ReasonsSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import AudienceSection from "@/components/sections/home/AudienceSection";
import TimingSection from "@/components/sections/home/TimingSection";
import BusinessSection from "@/components/sections/home/BusinessSection";
import WorksSection from "@/components/sections/home/WorksSection";
import PriceSection from "@/components/sections/home/PriceSection";
import FlowSection from "@/components/sections/home/FlowSection";
import HomeFaqSection from "@/components/sections/home/HomeFaqSection";
import KnowledgeSection from "@/components/sections/home/KnowledgeSection";
import FinalCtaSection from "@/components/sections/home/FinalCtaSection";

export const metadata: Metadata = buildMetadata({
  title: `葛飾区の畳張替え・表替え・新調なら葛飾畳店｜和室リフォーム・原状回復`,
  description: "東京都葛飾区で畳の張替え（表替え・新調・裏返し）をお探しなら葛飾畳店へ。亀有・金町・新小岩・柴又・立石など区内全域に対応。襖・障子・内装工事・原状回復まで一括でご相談いただけます。現地確認・お見積もり無料。",
  path: "/",
});

const _hasTel = (SITE_TEL as string).trim() !== "";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}`,
  email: SITE_EMAIL,
  description: "東京都葛飾区を中心に、畳の表替え・新調から内装工事・原状回復まで。東京・千葉・埼玉・神奈川・群馬・栃木・茨城のご相談にも対応する畳と空間整備の専門パートナー。",
  ...(_hasTel ? { telephone: SITE_TEL } : {}),
  priceRange: "¥¥",
  areaServed: AREA_SERVED_SCHEMA,
  knowsAbout: ["畳張替え", "畳表替え", "畳新調", "縁なし畳", "琉球畳", "和紙畳", "樹脂畳", "襖張替え", "障子張替え", "原状回復工事", "内装工事", "葛飾区での施工", "東京都での施工", "千葉県での施工", "埼玉県での施工"],
  serviceType: ["畳工事", "内装工事", "原状回復"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "畳・内装工事サービス",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳表替え" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳新調" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "内装工事" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "原状回復工事" } },
    ],
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}`,
  name: SITE_NAME,
  description: "畳張替え・内装工事・原状回復の専門パートナー",
  inLanguage: "ja",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/column?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// 葛飾区向けのコラムを優先して表示
const FEATURED_COLUMN_SLUGS = ["katsushika-tatami-replacement-guide", "katsushika-manshon-tatami", "katsushika-tatami-kabi-taisaku"];

export default function HomePage() {
  const katsushika = AREAS.find((p) => p.slug === PRIMARY_AREA_SLUG)?.cities ?? [];
  const areaCards = katsushika.map((c) => ({
    slug: c.slug,
    name: c.name,
    reading: c.reading,
    station: KATSUSHIKA_AREA_CONTENT[c.slug]?.stations[0]?.replace(/（.*?）/g, ""),
  }));
  const featuredColumns = FEATURED_COLUMN_SLUGS.map((s) => COLUMN_ARTICLES.find((a) => a.slug === s)).filter(
    (a): a is (typeof COLUMN_ARTICLES)[number] => Boolean(a)
  );
  const columns = featuredColumns.length === 3 ? featuredColumns : COLUMN_ARTICLES.slice(0, 3);
  const latestPosts = getAllPosts().slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />

      <HeroSection areas={katsushika.map((c) => c.name)} />
      <IntroSection />
      <div className="cv-auto">
        <AreaSection areas={areaCards} />
      </div>
      <div className="cv-auto">
        <ConceptSection />
      </div>
      <KeywordBand />
      <div className="cv-auto">
        <ReasonsSection />
      </div>
      <ServicesSection />
      <div className="cv-auto">
        <AudienceSection />
      </div>
      <div className="cv-auto">
        <TimingSection />
      </div>
      <div className="cv-auto">
        <BusinessSection />
      </div>
      <div className="cv-auto">
        <WorksSection />
      </div>
      <div className="cv-auto">
        <PriceSection />
      </div>
      <div className="cv-auto">
        <FlowSection />
      </div>
      <div className="cv-auto">
        <HomeFaqSection />
      </div>
      <div className="cv-auto">
        <KnowledgeSection columns={columns} posts={latestPosts} />
      </div>
      <div className="cv-auto">
        <FinalCtaSection />
      </div>
    </>
  );
}
