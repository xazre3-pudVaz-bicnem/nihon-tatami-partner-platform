import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";
import { WORKS_DETAIL } from "@/data/works-detail";
import { MATERIALS } from "@/data/materials";
import { PROBLEMS } from "@/data/problems";
import { AREAS, AREA_SERVICES, PRIMARY_AREA_SLUG, generatedCities } from "@/data/areas";
import { PURPOSE_PAGES } from "@/data/purpose";
import { getAllPosts, getUsedCategories } from "@/lib/blog";

const BASE = SITE_URL;
const LAST_MODIFIED = new Date("2026-10-20");

function url(
  path: string,
  priority: number = 0.7,
  changeFreq: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[0] {
  return {
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: changeFreq,
    priority: Math.round(priority * 10) / 10,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const columnUrls = COLUMN_ARTICLES.map((a) => url(`/column/${a.slug}`, 0.7, "monthly"));
  const worksUrls = WORKS_DETAIL.map((w) => url(`/works/${w.slug}`, 0.7, "monthly"));
  const materialUrls = MATERIALS.map((m) => url(`/materials/${m.slug}`, 0.7, "monthly"));
  const problemUrls = PROBLEMS.map((p) => url(`/problems/${p.slug}`, 0.7, "monthly"));
  const purposeUrls = PURPOSE_PAGES.map((p) => url(`/purpose/${p.slug}`, 0.7, "monthly"));
  const blogUrls = getAllPosts().map((p) => url(`/blog/${p.slug}`, 0.6, "weekly"));
  const blogCategoryUrls = getUsedCategories().map((c) => url(`/blog/category/${c.slug}`, 0.5, "weekly"));

  // Area pages: prefecture / city / pref×service / city×service
  // 主対象エリア（葛飾区）は優先度を一段高くする
  const areaUrls: MetadataRoute.Sitemap = [];
  for (const pref of AREAS) {
    const boost = pref.slug === PRIMARY_AREA_SLUG ? 0.1 : 0;
    areaUrls.push(url(`/area/${pref.slug}`, 0.8 + boost, "monthly"));
    for (const s of AREA_SERVICES) {
      areaUrls.push(url(`/area/${pref.slug}/${s.slug}`, 0.7 + boost, "monthly"));
    }
    for (const city of generatedCities(pref)) {
      areaUrls.push(url(`/area/${pref.slug}/${city.slug}`, 0.7 + boost, "monthly"));
      for (const s of AREA_SERVICES) {
        areaUrls.push(url(`/area/${pref.slug}/${city.slug}/${s.slug}`, 0.6 + boost, "monthly"));
      }
    }
  }

  const entries: MetadataRoute.Sitemap = [
    // Core
    url("/", 1.0, "weekly"),
    url("/about", 0.8, "monthly"),
    url("/contact", 0.9, "monthly"),
    url("/price", 0.8, "monthly"),
    url("/flow", 0.7, "monthly"),
    url("/faq", 0.8, "monthly"),
    url("/works", 0.8, "monthly"),
    url("/area", 0.8, "monthly"),
    url("/materials", 0.8, "monthly"),
    url("/problems", 0.8, "monthly"),
    url("/purpose", 0.8, "monthly"),
    url("/privacy", 0.3, "yearly"),

    // Target landing pages
    url("/for-homeowner", 0.8, "monthly"),
    url("/for-rental-owner", 0.8, "monthly"),
    url("/for-real-estate-company", 0.8, "monthly"),
    url("/for-ryokan", 0.8, "monthly"),
    url("/for-temple", 0.8, "monthly"),
    url("/for-store", 0.8, "monthly"),

    // Standalone service hubs
    url("/fusuma", 0.8, "monthly"),
    url("/fusuma/replacement", 0.7, "monthly"),
    url("/fusuma/price", 0.7, "monthly"),
    url("/fusuma/for-rental", 0.7, "monthly"),
    url("/fusuma/for-ryokan", 0.7, "monthly"),
    url("/fusuma/for-temple-shrine", 0.7, "monthly"),
    url("/shoji", 0.8, "monthly"),
    url("/shoji/replacement", 0.7, "monthly"),
    url("/shoji/price", 0.7, "monthly"),
    url("/shoji/strong-paper", 0.7, "monthly"),
    url("/shoji/for-rental", 0.7, "monthly"),
    url("/shoji/for-ryokan", 0.7, "monthly"),
    url("/shoji/for-temple-shrine", 0.7, "monthly"),
    url("/flooring", 0.8, "monthly"),
    url("/wallpaper", 0.8, "monthly"),

    // Services — Tatami
    url("/services", 0.9, "monthly"),
    url("/services/tatami", 0.9, "monthly"),
    url("/services/tatami-omotegae", 0.9, "monthly"),
    url("/services/tatami-uragaeshi", 0.8, "monthly"),
    url("/services/tatami-shinchou", 0.9, "monthly"),
    url("/services/herinashi-tatami", 0.8, "monthly"),
    url("/services/ryukyu-tatami", 0.8, "monthly"),
    url("/services/washi-tatami", 0.8, "monthly"),
    url("/services/resin-tatami", 0.8, "monthly"),
    url("/services/color-tatami", 0.7, "monthly"),
    url("/services/tatami-beri", 0.6, "monthly"),
    url("/services/fusuma-shoji-amido", 0.7, "monthly"),

    // Interior
    url("/interior", 0.8, "monthly"),
    url("/interior/cross", 0.8, "monthly"),
    url("/interior/floor", 0.8, "monthly"),
    url("/interior/cushion-floor", 0.7, "monthly"),
    url("/interior/floor-tile", 0.7, "monthly"),
    url("/interior/store-interior", 0.7, "monthly"),
    url("/interior/house-renovation", 0.7, "monthly"),

    // Fusuma (襖張替え)
    url("/fusuma/replacement", 0.8, "monthly"),
    url("/fusuma/price", 0.7, "monthly"),
    url("/fusuma/for-rental", 0.7, "monthly"),
    url("/fusuma/for-ryokan", 0.7, "monthly"),
    url("/fusuma/for-temple-shrine", 0.7, "monthly"),

    // Shoji (障子張替え)
    url("/shoji/replacement", 0.8, "monthly"),
    url("/shoji/price", 0.7, "monthly"),
    url("/shoji/strong-paper", 0.7, "monthly"),
    url("/shoji/for-rental", 0.7, "monthly"),
    url("/shoji/for-ryokan", 0.7, "monthly"),
    url("/shoji/for-temple-shrine", 0.7, "monthly"),

    // Restoration
    url("/restoration", 0.8, "monthly"),
    url("/restoration/rental", 0.8, "monthly"),
    url("/restoration/store", 0.7, "monthly"),
    url("/restoration/owner", 0.7, "monthly"),
    url("/restoration/management-company", 0.7, "monthly"),

    // Business
    url("/business", 0.8, "monthly"),
    url("/business/real-estate", 0.8, "monthly"),
    url("/business/property-management", 0.8, "monthly"),
    url("/business/rental-owner", 0.8, "monthly"),
    url("/business/ryokan", 0.8, "monthly"),
    url("/business/temple-shrine", 0.7, "monthly"),
    url("/business/store", 0.7, "monthly"),
    url("/business/vacancy-measures", 0.7, "monthly"),

    // Purpose (目的から探す)
    url("/purpose", 0.8, "monthly"),
    ...purposeUrls,

    // Needs (お悩み別)
    url("/needs", 0.7, "monthly"),
    url("/needs/mold", 0.7, "monthly"),
    url("/needs/dani", 0.7, "monthly"),
    url("/needs/sasakure", 0.7, "monthly"),
    url("/needs/sunken-tatami", 0.7, "monthly"),
    url("/needs/pet", 0.7, "monthly"),
    url("/needs/children", 0.7, "monthly"),
    url("/needs/elderly", 0.7, "monthly"),
    url("/needs/vacant-room", 0.7, "monthly"),
    url("/needs/before-sale", 0.7, "monthly"),
    url("/needs/before-guest-arrival", 0.7, "monthly"),

    // Guides
    url("/guide/how-to-choose-tatami", 0.8, "monthly"),
    url("/guide/tatami-price-guide", 0.8, "monthly"),
    url("/guide/tatami-maintenance", 0.8, "monthly"),

    // Compare
    url("/compare/omotegae-uragaeshi-shinchou", 0.8, "monthly"),
    url("/compare/igusa-washi-resin", 0.8, "monthly"),

    // Column (SEO articles)
    url("/column", 0.8, "weekly"),
    ...columnUrls,

    // Blog（Markdown自動投稿）
    url("/blog", 0.7, "daily"),
    ...blogCategoryUrls,
    ...blogUrls,

    // Works details
    ...worksUrls,

    // Materials
    ...materialUrls,

    // Problems
    ...problemUrls,

    // Area pages
    ...areaUrls,

    // Katsushika standalone SEO pages（葛飾区）
    url("/area/katsushika/for-homeowner", 0.8, "monthly"),
    url("/area/katsushika/for-rental-owner", 0.8, "monthly"),
    url("/area/katsushika/for-real-estate", 0.8, "monthly"),
    url("/area/katsushika/for-property-management", 0.8, "monthly"),
    url("/area/katsushika/for-ryokan", 0.7, "monthly"),
    url("/area/katsushika/for-temple-shrine", 0.7, "monthly"),
    url("/area/katsushika/for-store", 0.7, "monthly"),
    url("/area/katsushika/before-move-in", 0.7, "monthly"),
    url("/area/katsushika/vacancy-measures", 0.7, "monthly"),
    url("/area/katsushika/seasonal-maintenance", 0.7, "monthly"),
    url("/area/katsushika/bulk-order", 0.7, "monthly"),
    url("/area/katsushika/emergency", 0.7, "monthly"),
    url("/area/katsushika/price-estimate", 0.7, "monthly"),
    url("/area/katsushika/corporate", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-mold", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-dani", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-sasakure", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-smell", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-sunken", 0.7, "monthly"),
    url("/area/katsushika/problems/pet-urine", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-discoloration", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-edge-damage", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-gap", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-flood-damage", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-for-wheelchair", 0.7, "monthly"),
    url("/area/katsushika/problems/tatami-renovation", 0.7, "monthly"),

    // Katsushika guide cluster（葛飾区 畳 キーワードクラスター）
    url("/area/katsushika/guide-tatami-buying", 0.8, "monthly"),
    url("/area/katsushika/guide-tatami-price", 0.8, "monthly"),
    url("/area/katsushika/guide-tatami-maintenance", 0.8, "monthly"),

    // Tokyo standalone SEO pages
    url("/area/tokyo/for-homeowner", 0.8, "monthly"),
    url("/area/tokyo/for-rental-owner", 0.8, "monthly"),
    url("/area/tokyo/for-real-estate", 0.8, "monthly"),
    url("/area/tokyo/for-property-management", 0.8, "monthly"),
    url("/area/tokyo/problems/tatami-mold", 0.7, "monthly"),
    url("/area/tokyo/problems/pet-urine", 0.7, "monthly"),

    // Kanagawa standalone SEO pages
    url("/area/kanagawa/for-homeowner", 0.8, "monthly"),
    url("/area/kanagawa/for-rental-owner", 0.8, "monthly"),

    // Chiba standalone SEO pages
    url("/area/chiba/for-homeowner", 0.8, "monthly"),
    url("/area/chiba/for-rental-owner", 0.8, "monthly"),
  ];

  // 同じURLが複数のセクションに含まれている場合は、優先度の高い方を1件だけ残す（並び順は最初の出現位置）
  const byUrl = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const e of entries) {
    const prev = byUrl.get(e.url);
    if (!prev || (e.priority ?? 0) > (prev.priority ?? 0)) byUrl.set(e.url, e);
  }
  return [...byUrl.values()];
}
