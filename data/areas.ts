export type City = { slug: string; name: string; reading?: string };
export type Prefecture = {
  slug: string;
  name: string;
  cities: City[];
};

export const AREAS: Prefecture[] = [
  {
    slug: "saitama",
    name: "埼玉県",
    cities: [
      { slug: "saitama-city", name: "さいたま市" },
      { slug: "kawaguchi", name: "川口市" },
      { slug: "koshigaya", name: "越谷市" },
      { slug: "kasukabe", name: "春日部市" },
      { slug: "kawagoe", name: "川越市" },
      { slug: "tokorozawa", name: "所沢市" },
      { slug: "kumagaya", name: "熊谷市" },
      { slug: "soka", name: "草加市" },
      { slug: "ageo", name: "上尾市" },
      { slug: "niiza", name: "新座市" },
      { slug: "iruma", name: "入間市" },
      { slug: "misato", name: "三郷市" },
      { slug: "asaka", name: "朝霞市" },
      { slug: "fujimi", name: "富士見市" },
      { slug: "fujimino", name: "ふじみ野市" },
      { slug: "toda", name: "戸田市" },
      { slug: "warabi", name: "蕨市" },
      { slug: "hasuda", name: "蓮田市" },
      { slug: "shiraoka", name: "白岡市" },
    ],
  },
];

export const AREA_SERVICES = [
  { slug: "tatami", name: "畳張替え・畳工事" },
  { slug: "fusuma", name: "襖張替え" },
  { slug: "shoji", name: "障子張替え" },
  { slug: "restoration", name: "原状回復工事" },
  { slug: "interior", name: "内装工事" },
];

export function getPrefecture(slug: string): Prefecture | undefined {
  return AREAS.find((p) => p.slug === slug);
}

export function getCity(prefSlug: string, citySlug: string): { pref: Prefecture; city: City } | undefined {
  const pref = getPrefecture(prefSlug);
  if (!pref) return undefined;
  const city = pref.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { pref, city };
}

export function getAreaService(slug: string) {
  return AREA_SERVICES.find((s) => s.slug === slug);
}

// service スラグかどうか（[prefecture]/[service] と [prefecture]/[city] の判別に使用）
export function isAreaServiceSlug(slug: string): boolean {
  return AREA_SERVICES.some((s) => s.slug === slug);
}
