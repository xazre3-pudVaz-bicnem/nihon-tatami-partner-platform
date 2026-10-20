import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import IntroCurtain, { INTRO_SCRIPT } from "@/components/ui/IntroCurtain";
import FontActivator, { FONTS_SCRIPT } from "@/components/ui/FontActivator";
import StickyContactBar from "@/components/ui/StickyContactBar";
import MotionProvider from "@/components/ui/motion/MotionProvider";
import SmoothScroll from "@/components/ui/motion/SmoothScroll";
import ScrollProgress from "@/components/ui/motion/ScrollProgress";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_TEL, SITE_EMAIL, AREA_SERVED_SCHEMA } from "@/lib/site";

// 見出しの明朝体は next/font で自己ホスト（外部CSSの読み込み待ちをなくし、表示を速くする）。
// 適用はタブレット・PCのみ、ページ読み込み後（FontActivator が html に .fonts-ready を付ける / globals.css 参照）。
// 本文のゴシック体は端末の標準フォントを使い、Webフォントの読み込みと再描画をなくす。
const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--font-shippori-mincho",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 畳・内装・原状回復の専門パートナー`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["葛飾区 畳", "葛飾区 畳張替え", "葛飾区 畳屋", "畳", "畳張替え", "畳表替え", "畳新調", "縁なし畳", "和紙畳", "樹脂畳", "内装工事", "原状回復", "旅館畳", "寺院畳", "賃貸畳"],
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
      telephone: SITE_TEL,
      email: SITE_EMAIL,
      description: SITE_DESCRIPTION,
      image: `${SITE_URL}/og-image.jpg`,
      priceRange: "¥¥",
      currenciesAccepted: "JPY",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      areaServed: AREA_SERVED_SCHEMA,
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
    <html lang="ja" className={shipporiMincho.variable} suppressHydrationWarning>
      <head>
        {/* トップページ初回訪問時のオープニング演出用（描画前に html へ data-intro を付ける） */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: FONTS_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOBAL_SCHEMA) }}
        />
      </head>
      <body>
        <IntroCurtain />
        <FontActivator />
        <MotionProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyContactBar />
        </MotionProvider>
      </body>
    </html>
  );
}
