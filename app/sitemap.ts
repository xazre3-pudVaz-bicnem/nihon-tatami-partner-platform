import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";
import { WORKS_DETAIL } from "@/data/works-detail";
import { MATERIALS } from "@/data/materials";
import { PROBLEMS } from "@/data/problems";
import { AREAS, AREA_SERVICES } from "@/data/areas";

const BASE = SITE_URL;
const LAST_MODIFIED = new Date("2026-06-21");

function url(
  path: string,
  priority: number = 0.7,
  changeFreq: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[0] {
  return {
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: changeFreq,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const columnUrls = COLUMN_ARTICLES.map((a) => url(`/column/${a.slug}`, 0.7, "monthly"));
  const worksUrls = WORKS_DETAIL.map((w) => url(`/works/${w.slug}`, 0.7, "monthly"));
  const materialUrls = MATERIALS.map((m) => url(`/materials/${m.slug}`, 0.7, "monthly"));
  const problemUrls = PROBLEMS.map((p) => url(`/problems/${p.slug}`, 0.7, "monthly"));

  // Area pages: prefecture / city / pref×service / city×service
  const areaUrls: MetadataRoute.Sitemap = [];
  for (const pref of AREAS) {
    areaUrls.push(url(`/area/${pref.slug}`, 0.8, "monthly"));
    for (const s of AREA_SERVICES) {
      areaUrls.push(url(`/area/${pref.slug}/${s.slug}`, 0.7, "monthly"));
    }
    for (const city of pref.cities) {
      areaUrls.push(url(`/area/${pref.slug}/${city.slug}`, 0.7, "monthly"));
      for (const s of AREA_SERVICES) {
        areaUrls.push(url(`/area/${pref.slug}/${city.slug}/${s.slug}`, 0.6, "monthly"));
      }
    }
  }

  return [
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
    url("/shoji", 0.8, "monthly"),
    url("/flooring", 0.8, "monthly"),
    url("/wallpaper", 0.8, "monthly"),

    // Services — Tatami
    url("/services", 0.9, "monthly"),
    url("/services/tatami", 0.8, "monthly"),
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

    // Needs
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

    // Blog
    url("/blog", 0.7, "weekly"),

    // Works details
    ...worksUrls,

    // Materials
    ...materialUrls,

    // Problems
    ...problemUrls,

    // Area pages
    ...areaUrls,
  ];
}
