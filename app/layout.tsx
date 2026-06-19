import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 埼玉の畳・和室工事マーケットプレイス`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "埼玉県の畳表替え・和室リフォームを料金・口コミで比較して依頼できるマーケットプレイス。業者の方の出店登録も受付中。",
  openGraph: {
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400&family=Noto+Sans+JP:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
