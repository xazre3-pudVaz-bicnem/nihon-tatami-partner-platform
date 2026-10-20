export type WorkItem = {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  service: string;
  before?: string;
  after: string;
  desc: string;
  tags: string[];
};

const T = "/images/nihon-tatami/tatami";
const I = "/images/nihon-tatami/interior";
const R = "/images/nihon-tatami/restoration";

export const WORKS: WorkItem[] = [
  {
    id: "works-01",
    title: "一般住宅 和室4.5畳の畳表替え",
    category: "住宅",
    categorySlug: "house",
    location: "一般住宅",
    service: "畳表替え",
    after: `${T}/tatami-room-minimal-01.jpg`,
    desc: "築15年前後の住宅の和室（4.5畳）を、国産い草の畳表に張り替える施工例です。畳床が健全であれば表替えで、い草の香りと明るい色合いを取り戻せます。",
    tags: ["住宅", "畳表替え", "国産い草"],
  },
  {
    id: "works-02",
    title: "賃貸マンション退去後 畳新調+クロス張替え",
    category: "賃貸",
    categorySlug: "rental",
    location: "賃貸マンション",
    service: "畳新調・クロス張替え",
    after: `${R}/restoration-wallpaper-01.jpg`,
    desc: "賃貸マンションの退去後に、畳6枚の新調と壁・天井のクロス張替えをまとめて行う施工例です。窓口が1つで済むため、次の入居募集までの段取りを整えやすくなります。",
    tags: ["賃貸", "原状回復", "畳新調", "クロス"],
  },
  {
    id: "works-03",
    title: "旅館 客室8室の畳表替え（繁忙期前）",
    category: "旅館",
    categorySlug: "ryokan",
    location: "旅館・宿泊施設",
    service: "畳表替え",
    after: `${T}/tatami-room-ryokan-table-01.jpg`,
    desc: "旅館の客室8室（計64枚）の畳表替えを、繁忙期前に計画的に進める施工例です。客室の稼働に合わせて日程を分け、国産い草で格式と清潔感を整えます。",
    tags: ["旅館", "大量施工", "畳表替え"],
  },
  {
    id: "works-04",
    title: "寺院 本堂・客殿の畳新調",
    category: "寺社",
    categorySlug: "temple",
    location: "寺院",
    service: "畳新調",
    after: `${T}/tatami-temple-hall-01.jpg`,
    desc: "寺院の本堂・客殿の畳を新調する施工例です。格式に合わせた縁（ヘリ）の選定から行い、法要の日程から逆算して施工時期を計画します。",
    tags: ["寺院", "畳新調", "大量施工", "本堂"],
  },
  {
    id: "works-05",
    title: "和食店 小上がり・座敷の縁なし畳新調",
    category: "店舗",
    categorySlug: "store",
    location: "飲食店（和食）",
    service: "縁なし畳新調",
    after: `${I}/interior-store-workers-01.jpg`,
    desc: "和食店の座敷・小上がりに縁なし畳を新調する施工例です。汚れに強く拭き掃除がしやすい樹脂畳を使い、営業時間外の施工にも対応します。",
    tags: ["店舗", "飲食店", "縁なし畳", "樹脂畳"],
  },
  {
    id: "works-06",
    title: "分譲マンション 和室の和紙畳+フロアタイル工事",
    category: "住宅",
    categorySlug: "house",
    location: "分譲マンション",
    service: "和紙畳・フロアタイル",
    after: `${T}/tatami-room-herinashi-01.jpg`,
    desc: "リノベーション中のマンションで、和室に和紙畳、リビングにフロアタイルを施工する例です。ペットと暮らす住まいでも清潔に長く使える素材を選びます。",
    tags: ["住宅", "リノベーション", "和紙畳", "フロアタイル"],
  },
  {
    id: "works-07",
    title: "不動産会社 売買前物件の内装整備一式",
    category: "不動産",
    categorySlug: "realestate",
    location: "戸建住宅（売買物件）",
    service: "畳表替え・クロス張替え・床補修",
    after: `${R}/restoration-vacant-check-01.jpg`,
    desc: "売却前の戸建住宅で、畳の表替え・クロス張替え・フローリングの部分補修をまとめて行う施工例です。内覧時の第一印象を整えるための内装整備です。",
    tags: ["不動産", "売買", "内装整備", "畳表替え"],
  },
  {
    id: "works-08",
    title: "神社 社務所・控室の畳表替え",
    category: "寺社",
    categorySlug: "shrine",
    location: "神社",
    service: "畳表替え",
    after: `${T}/tatami-room-lantern-garden-01.jpg`,
    desc: "神社の社務所・控室の畳を表替えする施工例です。境内での作業になるため、養生・清掃に配慮しながら格式ある空間を整えます。",
    tags: ["神社", "畳表替え", "社務所"],
  },
];
