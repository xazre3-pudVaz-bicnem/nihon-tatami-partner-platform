export type Service = {
  id: string;
  name: string;
  href: string;
  category: "tatami" | "interior" | "restoration";
  shortDesc: string;
  desc: string;
  image: string;
  price?: string;
};

const T = "/images/nihon-tatami/tatami";
const I = "/images/nihon-tatami/interior";
const R = "/images/nihon-tatami/restoration";
const S = "/images/nihon-tatami/shoji";
const F = "/images/nihon-tatami/fusuma";

export const TATAMI_SERVICES: Service[] = [
  {
    id: "tatami-omotegae",
    name: "畳表替え",
    href: "/services/tatami-omotegae",
    category: "tatami",
    shortDesc: "畳の表面（畳表）を新しいい草に交換する最も一般的なメンテナンスです。",
    desc: "畳床はそのままに、表面の畳表（ゴザ）を新しいものに張り替えます。費用を抑えながら清潔感・香りを取り戻せる最も一般的な施工方法です。",
    image: `${T}/tatami-craftsman-01.png`,
    price: "5,500円〜/枚",
  },
  {
    id: "tatami-uragaeshi",
    name: "畳裏返し",
    href: "/services/tatami-uragaeshi",
    category: "tatami",
    shortDesc: "畳表を裏返して再利用する最も経済的な施工方法です。",
    desc: "使用してから2〜3年程度の畳表を裏返して再利用します。まだ裏面が十分に使えるうちに行う経済的な選択肢です。",
    image: `${T}/tatami-room-minimal-01.png`,
    price: "3,300円〜/枚",
  },
  {
    id: "tatami-shinchou",
    name: "畳新調",
    href: "/services/tatami-shinchou",
    category: "tatami",
    shortDesc: "畳床・畳表・縁すべてを新しく作り直す完全リニューアルです。",
    desc: "畳床から新しく作り替えます。踏み込んだときの沈み、へたりが気になる場合や、リフォームを機に全面的に新しくしたい場合に最適です。",
    image: `${T}/tatami-room-traditional-01.png`,
    price: "15,000円〜/枚",
  },
  {
    id: "herinashi-tatami",
    name: "縁なし畳",
    href: "/services/herinashi-tatami",
    category: "tatami",
    shortDesc: "縁のないすっきりとした和モダンスタイルの畳です。",
    desc: "縁（ヘリ）がなくスッキリとした見た目の畳。正方形の半畳タイプが多く、モダンな和室や洋室への和スペース設置に人気です。",
    image: `${T}/tatami-room-herinashi-01.png`,
    price: "12,000円〜/枚",
  },
  {
    id: "ryukyu-tatami",
    name: "琉球畳（七島藺）",
    href: "/services/ryukyu-tatami",
    category: "tatami",
    shortDesc: "本来の七島藺を使った縁なし畳。独特の風合いと耐久性が特徴です。",
    desc: "七島藺（しちとうい）という植物を使った本来の琉球畳。い草より硬く丈夫で、独特のざっくりとした風合いが特徴。旅館や茶室など上質な空間に。",
    image: `${T}/tatami-room-ryokan-lantern-01.png`,
    price: "18,000円〜/枚",
  },
  {
    id: "washi-tatami",
    name: "和紙畳",
    href: "/services/washi-tatami",
    category: "tatami",
    shortDesc: "和紙素材でできた畳。耐久性・撥水性が高くペットのいる家庭にも人気。",
    desc: "特殊加工した和紙素材の畳表。い草に比べ耐久性・撥水性に優れ、退色しにくく色のバリエーションも豊富です。ペットや子どもがいるご家庭にも最適。",
    image: `${T}/tatami-room-modern-01.png`,
    price: "8,000円〜/枚",
  },
  {
    id: "resin-tatami",
    name: "樹脂畳",
    href: "/services/resin-tatami",
    category: "tatami",
    shortDesc: "ポリプロピレン製で水拭きできる。店舗・旅館・エントランスにも対応。",
    desc: "ポリプロピレン等の樹脂素材を使った畳表。水拭き可能で清掃しやすく、変色・カビ・ダニに強い。店舗、旅館のエントランス、ペットルームなどに最適。",
    image: `${T}/tatami-room-rental-01.png`,
    price: "10,000円〜/枚",
  },
  {
    id: "color-tatami",
    name: "カラー畳",
    href: "/services/color-tatami",
    category: "tatami",
    shortDesc: "ブルー・グリーン・ブラウンなど豊富なカラーで空間をコーディネート。",
    desc: "和紙・樹脂素材を使ったカラーバリエーション豊富な畳。店舗の和スペース、子ども部屋、リノベーション物件など、個性的な空間づくりに活用できます。",
    image: `${T}/tatami-room-herinashi-01.png`,
    price: "8,000円〜/枚",
  },
  {
    id: "tatami-beri",
    name: "畳縁・特注縁",
    href: "/services/tatami-beri",
    category: "tatami",
    shortDesc: "デザイン縁や高級縁で畳の印象を大きく変えます。",
    desc: "畳の縁には無地・紋縁・デザイン縁など多様な種類があります。旅館や茶室では格式に合わせた縁の選定も重要。要望に合わせてご提案します。",
    image: `${T}/tatami-room-large-01.png`,
  },
  {
    id: "fusuma-shoji-amido",
    name: "襖・障子・網戸",
    href: "/services/fusuma-shoji-amido",
    category: "tatami",
    shortDesc: "畳と合わせて和室全体を整える。襖・障子・網戸の張替えも対応。",
    desc: "畳の施工に合わせて、襖・障子・網戸の張替えも一括でご依頼いただけます。和室全体の印象を一新し、空気感までリフレッシュします。",
    image: `${S}/shoji-installation-01.png`,
    price: "3,000円〜/枚",
  },
];

export const INTERIOR_SERVICES: Service[] = [
  {
    id: "cross",
    name: "クロス張替え",
    href: "/interior/cross",
    category: "interior",
    shortDesc: "壁紙・天井クロスの張替えで室内の印象を一新します。",
    desc: "劣化・剥がれ・変色したクロスを新しく張り替えます。住宅・賃貸・店舗・旅館など幅広く対応。畳施工と合わせてご依頼いただけます。",
    image: `${R}/restoration-wallpaper-01.png`,
    price: "800円〜/m²",
  },
  {
    id: "floor",
    name: "床工事・フローリング",
    href: "/interior/floor",
    category: "interior",
    shortDesc: "フローリング材の張替え・補修。和室から洋室への変更にも対応。",
    desc: "既存フローリングの上貼り・張替え・部分補修に対応。和室から洋室への変更工事や、逆に洋室に畳スペースを設ける工事も承ります。",
    image: `${R}/restoration-floor-repair-01.png`,
    price: "5,000円〜/m²",
  },
  {
    id: "cushion-floor",
    name: "クッションフロア",
    href: "/interior/cushion-floor",
    category: "interior",
    shortDesc: "キッチン・トイレ・洗面所など水回りに最適な床材。",
    desc: "水や汚れに強いクッションフロアの張替えに対応。賃貸物件の原状回復や水回りのリフォームに多く使われます。豊富な柄から選択可能。",
    image: `${R}/restoration-kitchen-check-01.png`,
    price: "2,500円〜/m²",
  },
  {
    id: "floor-tile",
    name: "フロアタイル",
    href: "/interior/floor-tile",
    category: "interior",
    shortDesc: "石目・木目調など高級感のある床材。店舗・オフィスに人気。",
    desc: "耐久性が高くデザイン性に優れたフロアタイルの施工に対応。店舗・オフィス・賃貸物件のグレードアップに活用されます。",
    image: `${I}/interior-woodwork-shelving-01.png`,
    price: "4,000円〜/m²",
  },
  {
    id: "store-interior",
    name: "店舗内装工事",
    href: "/interior/store-interior",
    category: "interior",
    shortDesc: "飲食店・小売店・サロンの内装工事。和空間づくりも得意。",
    desc: "新規開業・改装・退去後の現状回復まで、店舗内装工事を幅広く承ります。和食店や旅館の和室空間づくりも得意分野です。",
    image: `${I}/interior-store-workers-01.png`,
  },
  {
    id: "house-renovation",
    name: "住宅内装リフォーム",
    href: "/interior/house-renovation",
    category: "interior",
    shortDesc: "畳・床・壁・建具をまとめてリフォーム。一括相談可能。",
    desc: "畳を軸に、床・壁・建具をまとめてリフォームできます。部屋ごとの個別対応から、複数部屋・丸ごとリフォームまで一括でご相談ください。",
    image: `${I}/interior-residential-workers-01.png`,
  },
];

export const RESTORATION_SERVICES: Service[] = [
  {
    id: "rental",
    name: "賃貸退去後の原状回復",
    href: "/restoration/rental",
    category: "restoration",
    shortDesc: "退去後の畳・クロス・床をまとめて原状回復。管理会社にも対応。",
    desc: "賃貸物件の退去後、畳の交換・クロス張替え・床補修をまとめてご依頼いただけます。管理会社・オーナー様からの継続案件にも対応しています。",
    image: `${R}/restoration-vacant-check-01.png`,
  },
  {
    id: "store",
    name: "店舗退去後の原状回復",
    href: "/restoration/store",
    category: "restoration",
    shortDesc: "飲食店・小売店・サロンの退去に伴う原状回復工事。",
    desc: "店舗退去時の原状回復工事に対応。内装解体・床・壁・天井の復旧まで一括で承ります。スケジュール調整も柔軟に対応可能です。",
    image: `${R}/restoration-office-01.png`,
  },
  {
    id: "owner",
    name: "賃貸オーナー向け対応",
    href: "/restoration/owner",
    category: "restoration",
    shortDesc: "複数物件・継続案件にも対応。オーナー様の窓口をまとめます。",
    desc: "複数物件をお持ちのオーナー様の一括管理に対応。退去のたびに複数業者と調整する手間を省き、原状回復から空室対策まで一本化できます。",
    image: `${R}/restoration-vacant-check-02.png`,
  },
  {
    id: "management-company",
    name: "管理会社向け対応",
    href: "/restoration/management-company",
    category: "restoration",
    shortDesc: "不動産管理会社の原状回復業務をまとめてサポート。",
    desc: "不動産管理会社様の協力業者として、原状回復・空室対策・物件維持管理の各種工事を承ります。スピーディーな対応と明確な見積もりでご支援します。",
    image: `${R}/restoration-wall-painting-01.png`,
  },
];

export const ALL_SERVICES = [...TATAMI_SERVICES, ...INTERIOR_SERVICES, ...RESTORATION_SERVICES];
