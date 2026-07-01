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
      { slug: "gyoda", name: "行田市" },
      { slug: "konosu", name: "鴻巣市" },
      { slug: "okegawa", name: "桶川市" },
      { slug: "kitamoto", name: "北本市" },
      { slug: "kuki", name: "久喜市" },
      { slug: "satte", name: "幸手市" },
      { slug: "sakado", name: "坂戸市" },
      { slug: "tsurugashima", name: "鶴ヶ島市" },
      { slug: "hidaka", name: "日高市" },
      { slug: "hanno", name: "飯能市" },
      { slug: "honjo", name: "本庄市" },
      { slug: "fukaya", name: "深谷市" },
      { slug: "kazo", name: "加須市" },
      { slug: "hanyu", name: "羽生市" },
      { slug: "yashio", name: "八潮市" },
      { slug: "yoshikawa", name: "吉川市" },
      { slug: "sayama", name: "狭山市" },
      { slug: "higashimatsuyama", name: "東松山市" },
    ],
  },
];

export const AREA_SERVICES = [
  { slug: "tatami", name: "畳張替え・畳工事" },
  { slug: "tatami-omotegae", name: "畳表替え" },
  { slug: "tatami-shinchou", name: "畳新調" },
  { slug: "tatami-uragaeshi", name: "畳裏返し" },
  { slug: "herinashi-tatami", name: "縁なし畳・琉球畳" },
  { slug: "washi-tatami", name: "和紙畳" },
  { slug: "resin-tatami", name: "樹脂畳" },
  { slug: "fusuma", name: "襖張替え" },
  { slug: "shoji", name: "障子張替え" },
  { slug: "amido", name: "網戸張替え" },
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
