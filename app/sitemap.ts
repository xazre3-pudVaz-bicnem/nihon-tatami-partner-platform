import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COLUMN_ARTICLES } from "@/data/column";

const BASE = SITE_URL;
const LAST_MODIFIED = new Date("2026-06-21");

function url(path: string, priority: number = 0.7, changeFreq: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly"): MetadataRoute.Sitemap[0] {
  return {
    url: `${BASE}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: changeFreq,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const columnUrls = COLUMN_ARTICLES.map((a) =>
    url(`/column/${a.slug}`, 0.7, "monthly")
  );

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
    url("/privacy", 0.3, "yearly"),

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

    // Column (static SEO articles)
    url("/column", 0.8, "weekly"),
    ...columnUrls,

    // Blog
    url("/blog", 0.7, "weekly"),

    // Area pages
    url("/area/saitama", 0.8, "monthly"),
    url("/area/kawaguchi", 0.7, "monthly"),
    url("/area/urawa", 0.7, "monthly"),
    url("/area/omiya", 0.7, "monthly"),
    url("/area/yono", 0.6, "monthly"),
    url("/area/koshigaya", 0.6, "monthly"),
    url("/area/toda", 0.6, "monthly"),
    url("/area/warabi", 0.6, "monthly"),
  ];
}
