import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";

// page.tsx はクライアントコンポーネントのため、メタデータはこの layout で定義する
export const metadata: Metadata = buildMetadata({
  title: `お問い合わせ・無料見積もり｜葛飾区の畳張替え・襖障子・原状回復 | ${SITE_NAME}`,
  description:
    "畳張替え・襖障子・内装工事・原状回復のお問い合わせはこちら。東京都葛飾区の全域を中心に対応し、現地確認・お見積もりは無料です。法人・複数物件のご相談も承ります。",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
