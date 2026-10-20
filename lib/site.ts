export const SITE_NAME = "葛飾畳店";
export const SITE_NAME_EN = "Katsushika Tatami Store";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.tatami-partners.jp";
export const SITE_DESCRIPTION = "東京都葛飾区を中心に、畳の表替え・新調から内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナー。";
export const SITE_TEL = "090-2360-0052";
export const SITE_EMAIL = "info@cypress-all.co.jp";
export const SITE_LINE = ""; // LINE公式アカウントURL（未設定）

export const AREA_NAME = "全国";
export const AREA_PREF = "";

export const OG_IMAGE = "/og-image.jpg";

// 構造化データ（areaServed）用の対応エリア。主対象は東京都葛飾区、1都6県のご相談にも対応
export const AREA_SERVED_SCHEMA = [
  { "@type": "City", name: "葛飾区", containedInPlace: { "@type": "State", name: "東京都" } },
  ...["東京都", "千葉県", "埼玉県", "神奈川県", "群馬県", "栃木県", "茨城県"].map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
];

export const NAV_LINKS = [
  { label: "葛飾区の畳工事", href: "/area/katsushika" },
  { label: "サービス", href: "/services" },
  { label: "法人・施設", href: "/business" },
  { label: "内装工事", href: "/interior" },
  { label: "原状回復", href: "/restoration" },
  { label: "施工対応例", href: "/works" },
  { label: "料金", href: "/price" },
  { label: "ブログ", href: "/blog" },
  { label: "コラム", href: "/column" },
  { label: "会社情報", href: "/about" },
];
