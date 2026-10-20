export type City = {
  slug: string;
  name: string;
  reading?: string;
  /** 専用ページが別にある場合の誘導先（例: 東京都の葛飾区 → /area/katsushika）。指定時は汎用ページを生成しない */
  href?: string;
};
export type Prefecture = {
  slug: string;
  name: string;
  cities: City[];
  /** 下位区分の呼び方（既定「市区」）。葛飾区のように区内を町域で分ける場合は「エリア」 */
  subdivisionLabel?: string;
  /** 構造化データ上の型（既定 "State"）。区（特別区）は "City" */
  schemaType?: "State" | "City";
  /** 上位の都道府県名（葛飾区 → 東京都） */
  parentName?: string;
};

// 主対象エリア: 東京都葛飾区（区内を駅・町域ごとに12エリアに分けて案内）
export const PRIMARY_AREA_SLUG = "katsushika";

export const AREAS: Prefecture[] = [
  {
    slug: "katsushika",
    name: "葛飾区",
    parentName: "東京都",
    subdivisionLabel: "エリア",
    schemaType: "City",
    cities: [
      { slug: "kameari", name: "亀有", reading: "かめあり" },
      { slug: "kanamachi", name: "金町", reading: "かなまち" },
      { slug: "shibamata", name: "柴又", reading: "しばまた" },
      { slug: "takasago", name: "高砂", reading: "たかさご" },
      { slug: "aoto", name: "青戸", reading: "あおと" },
      { slug: "tateishi", name: "立石", reading: "たていし" },
      { slug: "yotsugi", name: "四つ木", reading: "よつぎ" },
      { slug: "horikiri", name: "堀切", reading: "ほりきり" },
      { slug: "ohanajaya", name: "お花茶屋", reading: "おはなぢゃや" },
      { slug: "shinkoiwa", name: "新小岩", reading: "しんこいわ" },
      { slug: "okudo", name: "奥戸", reading: "おくど" },
      { slug: "mizumoto", name: "水元", reading: "みずもと" },
    ],
  },
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
  {
    slug: "tokyo",
    name: "東京都",
    cities: [
      { slug: "shinjuku", name: "新宿区" },
      { slug: "shibuya", name: "渋谷区" },
      { slug: "minato", name: "港区" },
      { slug: "chuo", name: "中央区" },
      { slug: "chiyoda", name: "千代田区" },
      { slug: "setagaya", name: "世田谷区" },
      { slug: "nerima", name: "練馬区" },
      { slug: "adachi", name: "足立区" },
      { slug: "edogawa", name: "江戸川区" },
      { slug: "koto", name: "江東区" },
      { slug: "sumida", name: "墨田区" },
      { slug: "arakawa", name: "荒川区" },
      { slug: "bunkyo", name: "文京区" },
      { slug: "toshima", name: "豊島区" },
      { slug: "nakano", name: "中野区" },
      { slug: "suginami", name: "杉並区" },
      { slug: "ota-ku", name: "大田区" },
      { slug: "meguro", name: "目黒区" },
      { slug: "shinagawa", name: "品川区" },
      { slug: "taito", name: "台東区" },
      { slug: "kita", name: "北区" },
      { slug: "itabashi", name: "板橋区" },
      { slug: "katsushika", name: "葛飾区", href: "/area/katsushika" },
      { slug: "hachioji", name: "八王子市" },
      { slug: "tachikawa", name: "立川市" },
      { slug: "musashino", name: "武蔵野市" },
      { slug: "mitaka", name: "三鷹市" },
      { slug: "fuchu", name: "府中市" },
      { slug: "chofu", name: "調布市" },
      { slug: "machida", name: "町田市" },
      { slug: "koganei", name: "小金井市" },
      { slug: "kodaira", name: "小平市" },
      { slug: "hino", name: "日野市" },
      { slug: "higashimurayama", name: "東村山市" },
      { slug: "kokubunji", name: "国分寺市" },
      { slug: "kunitachi", name: "国立市" },
    ],
  },
  {
    slug: "kanagawa",
    name: "神奈川県",
    cities: [
      { slug: "yokohama", name: "横浜市" },
      { slug: "kawasaki", name: "川崎市" },
      { slug: "sagamihara", name: "相模原市" },
      { slug: "fujisawa", name: "藤沢市" },
      { slug: "yokosuka", name: "横須賀市" },
      { slug: "hiratsuka", name: "平塚市" },
      { slug: "kamakura", name: "鎌倉市" },
      { slug: "odawara", name: "小田原市" },
      { slug: "yamato", name: "大和市" },
      { slug: "atsugi", name: "厚木市" },
      { slug: "ayase", name: "綾瀬市" },
      { slug: "isehara", name: "伊勢原市" },
      { slug: "zushi", name: "逗子市" },
      { slug: "chigasaki", name: "茅ヶ崎市" },
      { slug: "ebina", name: "海老名市" },
      { slug: "hadano", name: "秦野市" },
      { slug: "miura", name: "三浦市" },
      { slug: "ninomiya", name: "二宮町" },
      { slug: "oiso", name: "大磯町" },
      { slug: "samukawa", name: "寒川町" },
      { slug: "kaisei", name: "開成町" },
      { slug: "hayama", name: "葉山町" },
    ],
  },
  {
    slug: "chiba",
    name: "千葉県",
    cities: [
      { slug: "chiba", name: "千葉市" },
      { slug: "funabashi", name: "船橋市" },
      { slug: "ichikawa", name: "市川市" },
      { slug: "matsudo", name: "松戸市" },
      { slug: "kashiwa", name: "柏市" },
      { slug: "urayasu", name: "浦安市" },
      { slug: "ichihara", name: "市原市" },
      { slug: "narashino", name: "習志野市" },
      { slug: "abiko", name: "我孫子市" },
      { slug: "narita", name: "成田市" },
      { slug: "sakura-city", name: "佐倉市" },
      { slug: "noda", name: "野田市" },
      { slug: "kamagaya", name: "鎌ヶ谷市" },
      { slug: "yotsukaido", name: "四街道市" },
      { slug: "shiroi", name: "白井市" },
      { slug: "tomisato", name: "富里市" },
      { slug: "inzai", name: "印西市" },
      { slug: "choshi", name: "銚子市" },
      { slug: "mobara", name: "茂原市" },
      { slug: "sodegaura", name: "袖ケ浦市" },
    ],
  },
  {
    slug: "gunma",
    name: "群馬県",
    cities: [
      { slug: "maebashi", name: "前橋市" },
      { slug: "takasaki", name: "高崎市" },
      { slug: "kiryu", name: "桐生市" },
      { slug: "isesaki", name: "伊勢崎市" },
      { slug: "ota-city", name: "太田市" },
      { slug: "numata", name: "沼田市" },
      { slug: "tatebayashi", name: "館林市" },
      { slug: "shibukawa", name: "渋川市" },
      { slug: "fujioka", name: "藤岡市" },
      { slug: "annaka", name: "安中市" },
      { slug: "midori", name: "みどり市" },
      { slug: "tomioka", name: "富岡市" },
    ],
  },
  {
    slug: "tochigi",
    name: "栃木県",
    cities: [
      { slug: "utsunomiya", name: "宇都宮市" },
      { slug: "ashikaga", name: "足利市" },
      { slug: "tochigi-city", name: "栃木市" },
      { slug: "sano", name: "佐野市" },
      { slug: "kanuma", name: "鹿沼市" },
      { slug: "nikko", name: "日光市" },
      { slug: "oyama", name: "小山市" },
      { slug: "mooka", name: "真岡市" },
      { slug: "otawara", name: "大田原市" },
      { slug: "yaita", name: "矢板市" },
      { slug: "nasushiobara", name: "那須塩原市" },
      { slug: "sakura-tochigi", name: "さくら市" },
    ],
  },
  {
    slug: "ibaraki",
    name: "茨城県",
    cities: [
      { slug: "mito", name: "水戸市" },
      { slug: "tsukuba", name: "つくば市" },
      { slug: "hitachi", name: "日立市" },
      { slug: "tsuchiura", name: "土浦市" },
      { slug: "ryugasaki", name: "龍ケ崎市" },
      { slug: "toride", name: "取手市" },
      { slug: "ushiku", name: "牛久市" },
      { slug: "tsukubamirai", name: "つくばみらい市" },
      { slug: "moriya", name: "守谷市" },
      { slug: "joso", name: "常総市" },
      { slug: "bando", name: "坂東市" },
      { slug: "kashima", name: "鹿嶋市" },
      { slug: "kamisu", name: "神栖市" },
      { slug: "chikusei", name: "筑西市" },
      { slug: "hitachiota", name: "常陸太田市" },
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
  // 専用ページへ誘導する市区（href付き）は汎用ページとしては扱わない
  const city = pref.cities.find((c) => c.slug === citySlug && !c.href);
  if (!city) return undefined;
  return { pref, city };
}

/** 汎用テンプレートでページを生成する市区（専用ページへ誘導する href 付きを除く） */
export function generatedCities(pref: Prefecture): City[] {
  return pref.cities.filter((c) => !c.href);
}

/** 市区ページ（serviceSlug 指定時はその市区のサービスページ）へのリンク */
export function cityHref(pref: Prefecture, city: City, serviceSlug?: string): string {
  const base = city.href ?? `/area/${pref.slug}/${city.slug}`;
  return serviceSlug ? `${base}/${serviceSlug}` : base;
}

/** 「市区」「エリア」など下位区分の呼び方 */
export function subdivisionLabel(pref: Prefecture): string {
  return pref.subdivisionLabel ?? "市区";
}

export function getAreaService(slug: string) {
  return AREA_SERVICES.find((s) => s.slug === slug);
}

// service スラグかどうか（[prefecture]/[service] と [prefecture]/[city] の判別に使用）
export function isAreaServiceSlug(slug: string): boolean {
  return AREA_SERVICES.some((s) => s.slug === slug);
}
