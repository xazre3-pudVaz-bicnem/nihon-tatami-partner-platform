import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// 主対象エリア変更（埼玉県 → 東京都葛飾区）に伴う恒久リダイレクト
// ─────────────────────────────────────────────────────────────

// 旧 /area/saitama/ 配下の独自ページ → /area/katsushika/ の同等ページ
// （埼玉県の市区・サービスの汎用ページは対応エリアとして存続するため対象外）
const MOVED_AREA_PAGES = [
  "for-homeowner",
  "for-rental-owner",
  "for-real-estate",
  "for-property-management",
  "for-ryokan",
  "for-temple-shrine",
  "for-store",
  "before-move-in",
  "vacancy-measures",
  "seasonal-maintenance",
  "bulk-order",
  "emergency",
  "price-estimate",
  "corporate",
  "guide-tatami-buying",
  "guide-tatami-price",
  "guide-tatami-maintenance",
];

// スラッグに地域名を含むコラム・ブログ（saitama → katsushika）
const RENAMED_COLUMN_SLUGS = [
  "saitama-tatami-replacement-guide",
  "saitama-tatami-price-guide",
  "saitama-rental-tatami-restoration",
  "saitama-property-management-tatami",
  "saitama-real-estate-before-sale-tatami",
  "saitama-fusuma-shoji-guide",
  "saitama-tatami-mold-dani",
  "saitama-washi-resin-tatami",
  "saitama-tatami-omotegae-timing",
  "saitama-manshon-tatami",
  "saitama-chintai-genjo-kaifuku",
  "saitama-ryukyu-tatami",
  "saitama-tatami-kabi-taisaku",
  "saitama-kominka-tatami",
  "saitama-tatami-shobun",
  "saitama-washi-tatami-merit",
  "saitama-tatami-diy-vs-pro",
  "saitama-tatami-price-souba",
  "saitama-fusuma-shoji-timing",
  "saitama-tatami-color-coordinate",
];

const RENAMED_BLOG_SLUGS = [
  "saitama-tatami-omotegae-basics",
  "tatami-replacement-saitama-basics",
  "tatami-care-habits-saitama",
  "saitama-tatami-contractor-selection",
  "tatami-shinchou-timing-saitama",
  "saitama-climate-tatami-humidity",
  "tatami-replacement-basics-saitama",
  "tatami-shinchou-timing-saitama-2",
  "tatami-replacement-basics-saitama-2",
  "tatami-shinchou-timing-saitama-3",
  "how-to-plan-washitsu-renovation-saitama",
  "tatami-damage-options-saitama",
  "saitama-climate-tatami-humidity-dryness",
  "tatami-shinchou-timing-saitama-4",
];

const toKatsushika = (slug: string) => slug.replace("saitama", "katsushika");

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      ...MOVED_AREA_PAGES.map((page) => ({
        source: `/area/saitama/${page}`,
        destination: `/area/katsushika/${page}`,
        permanent: true,
      })),
      { source: "/area/saitama/problems/:slug", destination: "/area/katsushika/problems/:slug", permanent: true },
      // 東京都の汎用「葛飾区」ページ → 葛飾区専用ページ
      { source: "/area/tokyo/katsushika", destination: "/area/katsushika", permanent: true },
      { source: "/area/tokyo/katsushika/:service", destination: "/area/katsushika/:service", permanent: true },
      ...RENAMED_COLUMN_SLUGS.map((slug) => ({
        source: `/column/${slug}`,
        destination: `/column/${toKatsushika(slug)}`,
        permanent: true,
      })),
      ...RENAMED_BLOG_SLUGS.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/blog/${toKatsushika(slug)}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
