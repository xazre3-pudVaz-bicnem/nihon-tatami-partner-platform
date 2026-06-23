import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandLoader from "@/components/ui/BrandLoader";
import StickyContactBar from "@/components/ui/StickyContactBar";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 畳・内装・原状回復の専門パートナー`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["畳", "畳張替え", "畳表替え", "畳新調", "縁なし畳", "和紙畳", "樹脂畳", "内装工事", "原状回復", "旅館畳", "寺院畳", "賃貸畳"],
  openGraph: {
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "ja",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/og-image.jpg`,
      priceRange: "¥¥",
      currenciesAccepted: "JPY",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: { "@type": "Country", name: "Japan" },
      knowsAbout: [
        "畳工事",
        "畳表替え",
        "畳裏返し",
        "畳新調",
        "縁なし畳",
        "和紙畳",
        "樹脂畳",
        "琉球畳",
        "内装工事",
        "クロス張替え",
        "フローリング工事",
        "原状回復工事",
        "旅館畳工事",
        "寺社畳工事",
        "店舗内装工事",
        "賃貸管理会社向け工事",
        "不動産会社向け内装整備",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "畳・内装工事サービス一覧",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳表替え" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳裏返し" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "畳新調" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "縁なし畳・琉球畳" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "和紙畳・樹脂畳" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "内装工事（クロス・床・建具）" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "原状回復工事" } },
        ],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500&family=Noto+Serif+JP:wght@300;400&family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOBAL_SCHEMA) }}
        />
      </head>
      <body>
        <BrandLoader />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
