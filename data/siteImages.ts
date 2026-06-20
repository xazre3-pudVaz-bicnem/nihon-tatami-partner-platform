/**
 * siteImages.ts
 * カテゴリ別サイト画像一覧。パスの一元管理。
 * 画像は public/images/nihon-tatami/ に格納。
 *
 * 配置ルール:
 * - hero/     トップ・各ページのヒーロー背景
 * - tatami/   畳空間・職人・各種畳サービス
 * - interior/ 内装工事作業・完成例
 * - restoration/ 原状回復・補修・空室確認
 * - shoji/    障子施工
 * - fusuma/   襖施工
 * - business/ BtoB向けセクション（他カテゴリから流用も可）
 * - works/    施工事例（works.ts の after パスと対応）
 * - columns/  コラム挿絵
 * - common/   複数カテゴリで共用
 */

export type SiteImage = {
  src: string;
  alt: string;
  category: string;
  recommendedUse: string;
  priority?: boolean;
  caption?: string;
};

const BASE = "/images/nihon-tatami";

export const SITE_IMAGES: Record<string, SiteImage[]> = {
  // ===== HERO =====
  hero: [
    {
      src: `${BASE}/hero/hero-tatami-premium.png`,
      alt: "庭園を望む格式ある旅館風和室。丁寧に敷かれた畳と床の間の掛け軸",
      category: "tatami",
      recommendedUse: "トップページヒーロー背景（メイン推奨）",
      priority: true,
      caption: "高品質な畳が醸す、静寂と格式の空間",
    },
    {
      src: `${BASE}/hero/hero-tatami-ryokan-evening.png`,
      alt: "夕暮れ時の旅館客室。庭園を望む畳の間と石灯籠",
      category: "tatami",
      recommendedUse: "旅館・宿泊施設向けページヒーロー",
      priority: true,
      caption: "繁忙期前に整えた旅館客室の畳",
    },
    {
      src: `${BASE}/hero/hero-tatami-modern.png`,
      alt: "障子と中庭を持つ現代的なミニマル和室の畳空間",
      category: "tatami",
      recommendedUse: "縁なし畳・和モダンサービスページヒーロー",
      priority: true,
    },
    {
      src: `${BASE}/hero/hero-tatami-garden.png`,
      alt: "日本庭園を望む広間の畳空間。掛け軸と石灯籠",
      category: "tatami",
      recommendedUse: "寺社・大型施設ページヒーロー",
      priority: true,
    },
    {
      src: `${BASE}/hero/hero-tatami-large-room.png`,
      alt: "床の間と掛け軸を持つ伝統的な日本の大広間",
      category: "tatami",
      recommendedUse: "寺院・神社・旅館ページヒーロー",
    },
  ],

  // ===== TATAMI =====
  tatami: [
    {
      src: `${BASE}/tatami/tatami-craftsman-01.png`,
      alt: "和室で畳の縁（ヘリ）を丁寧に縫い付ける畳職人",
      category: "tatami",
      recommendedUse: "畳表替え・畳新調サービスページ、職人紹介",
      caption: "熟練した技で縁を縫い付ける畳職人",
    },
    {
      src: `${BASE}/tatami/tatami-room-minimal-01.png`,
      alt: "障子と中庭が美しい現代的なミニマル和室の畳空間",
      category: "tatami",
      recommendedUse: "縁なし畳・和モダンサービス、トップコンセプト",
    },
    {
      src: `${BASE}/tatami/tatami-room-herinashi-01.png`,
      alt: "中庭を望む現代住宅の縁なし畳。モダンな和室空間",
      category: "tatami",
      recommendedUse: "縁なし畳・和紙畳サービスページ",
    },
    {
      src: `${BASE}/tatami/tatami-room-ryokan-lantern-01.png`,
      alt: "提灯と低いテーブルを配した旅館風の畳客室",
      category: "tatami",
      recommendedUse: "旅館ページ、琉球畳・特注縁サービス",
    },
    {
      src: `${BASE}/tatami/tatami-temple-hall-01.png`,
      alt: "金色の仏像と畳が広がる寺院の本堂内部",
      category: "tatami",
      recommendedUse: "寺院・神社向けページ、本堂施工事例",
      caption: "寺院本堂の格式に合わせた畳新調",
    },
    {
      src: `${BASE}/tatami/tatami-room-rental-01.png`,
      alt: "賃貸マンションの和室。清潔な畳と押し入れ",
      category: "tatami",
      recommendedUse: "賃貸オーナー・原状回復・賃貸退去後施工",
    },
    {
      src: `${BASE}/tatami/tatami-room-house-01.png`,
      alt: "住宅の和室と隣接するフローリングの間。畳からの眺め",
      category: "tatami",
      recommendedUse: "一般住宅向け・住宅内装リフォーム",
    },
    {
      src: `${BASE}/tatami/tatami-room-modern-01.png`,
      alt: "低いテーブルと庭を望む現代的な旅館風の畳の間",
      category: "tatami",
      recommendedUse: "旅館ページ・和モダンリフォーム事例",
    },
    {
      src: `${BASE}/tatami/tatami-room-traditional-01.png`,
      alt: "床の間と掛け軸、障子に囲まれた伝統的な和室の畳空間",
      category: "tatami",
      recommendedUse: "トップページコンセプト・畳全般サービス（最高品質）",
      priority: true,
      caption: "丁寧に整えられた伝統和室の畳",
    },
    {
      src: `${BASE}/tatami/tatami-room-ryokan-evening-01.png`,
      alt: "夕景を背景に石灯籠と庭を望む旅館の畳客室",
      category: "tatami",
      recommendedUse: "旅館ページヒーロー・施工事例",
      caption: "繁忙期前に施工した旅館客室の畳表替え",
    },
    {
      src: `${BASE}/tatami/tatami-room-garden-01.png`,
      alt: "日本庭園と障子を望む伝統的な和室の畳空間",
      category: "tatami",
      recommendedUse: "畳表替えサービス・施工事例",
    },
    {
      src: `${BASE}/tatami/tatami-room-large-01.png`,
      alt: "庭園に開かれた大型和室の畳。伝統的な日本建築",
      category: "tatami",
      recommendedUse: "旅館・寺社の大型施工案件",
    },
    {
      src: `${BASE}/tatami/tatami-room-lantern-garden-01.png`,
      alt: "石灯籠のある日本庭園を臨む和室の畳",
      category: "tatami",
      recommendedUse: "神社・旅館向け施工事例",
      caption: "神社社務所の畳表替え施工",
    },
    {
      src: `${BASE}/tatami/tatami-room-ryokan-table-01.png`,
      alt: "ローテーブルと座椅子を配した旅館客室の畳空間",
      category: "tatami",
      recommendedUse: "旅館ページ・旅館施工事例",
      caption: "旅館客室8室の畳表替え",
    },
    {
      src: `${BASE}/tatami/tatami-room-large-tokonoma-01.png`,
      alt: "床の間と掛け軸を持つ格調高い日本家屋の大広間",
      category: "tatami",
      recommendedUse: "寺院・旅館の大型案件ページ",
    },
    {
      src: `${BASE}/tatami/tatami-room-garden-scroll-01.png`,
      alt: "掛け軸と石灯籠が映える日本庭園を臨む大広間の畳",
      category: "tatami",
      recommendedUse: "旅館・寺院の施工事例",
    },
  ],

  // ===== INTERIOR =====
  interior: [
    {
      src: `${BASE}/interior/interior-residential-workers-01.png`,
      alt: "住宅リビングの内装工事。木製収納を施工する2名の職人",
      category: "interior",
      recommendedUse: "住宅内装リフォームページ・内装工事全般",
    },
    {
      src: `${BASE}/interior/interior-store-workers-01.png`,
      alt: "店舗内装工事で木製棚と収納を施工する3名の職人",
      category: "interior",
      recommendedUse: "店舗内装工事ページ・法人向けBtoBセクション",
    },
    {
      src: `${BASE}/interior/interior-doors-workers-01.png`,
      alt: "住宅の引き戸・スライドドアを設置する内装工事職人",
      category: "interior",
      recommendedUse: "建具工事・住宅内装リフォーム",
    },
    {
      src: `${BASE}/interior/interior-woodwork-shelving-01.png`,
      alt: "住宅リビングに木製造作棚を設置する職人。間接照明付き",
      category: "interior",
      recommendedUse: "店舗内装・住宅リフォームページ",
    },
    {
      src: `${BASE}/interior/interior-completed-ldk-01.png`,
      alt: "完成した現代的な住宅のLDK。白を基調とした清潔な内装",
      category: "interior",
      recommendedUse: "住宅内装リフォーム完成例",
    },
    {
      src: `${BASE}/interior/interior-woodslat-wall-01.png`,
      alt: "住宅リビングに木製スリット壁を施工する職人",
      category: "interior",
      recommendedUse: "店舗・住宅の木工インテリア施工",
    },
    {
      src: `${BASE}/interior/interior-completed-modern-house-01.png`,
      alt: "石材壁とフローリングを組み合わせた完成後のモダン住宅LDK",
      category: "interior",
      recommendedUse: "住宅内装リフォーム完成例・after画像",
    },
    {
      src: `${BASE}/interior/interior-office-glass-partition-01.png`,
      alt: "オフィスのガラスパーティションを設置する内装工事",
      category: "interior",
      recommendedUse: "オフィス改装・法人向け内装工事",
    },
    {
      src: `${BASE}/interior/interior-office-renovation-01.png`,
      alt: "オフィスの原状回復工事。パーティション解体・撤去作業",
      category: "interior",
      recommendedUse: "オフィス原状回復・BtoB法人向け",
    },
  ],

  // ===== RESTORATION =====
  restoration: [
    {
      src: `${BASE}/restoration/restoration-wall-painting-01.png`,
      alt: "賃貸退去後の原状回復で壁の塗装補修を行う職人",
      category: "restoration",
      recommendedUse: "原状回復全般・賃貸退去後補修",
    },
    {
      src: `${BASE}/restoration/restoration-floor-repair-01.png`,
      alt: "賃貸物件の原状回復でフローリングを張り替える職人",
      category: "restoration",
      recommendedUse: "床補修・フローリング張替えサービス",
    },
    {
      src: `${BASE}/restoration/restoration-wall-repair-01.png`,
      alt: "退去後の空室でパテを使って壁の穴を補修する作業員",
      category: "restoration",
      recommendedUse: "原状回復・壁補修・クロス下地処理",
    },
    {
      src: `${BASE}/restoration/restoration-kitchen-check-01.png`,
      alt: "賃貸退去後のキッチンを清掃・点検する作業員",
      category: "restoration",
      recommendedUse: "原状回復・キッチン清掃・設備点検",
    },
    {
      src: `${BASE}/restoration/restoration-office-01.png`,
      alt: "オフィスの退去後原状回復工事。パーティション撤去と清掃",
      category: "restoration",
      recommendedUse: "店舗・オフィス退去後の原状回復",
    },
    {
      src: `${BASE}/restoration/restoration-vacant-check-01.png`,
      alt: "退去後の空室を検査票を持って点検する不動産担当者",
      category: "restoration",
      recommendedUse: "空室確認・不動産管理会社向けBtoBセクション",
      caption: "退去後の物件状態を確認する専門スタッフ",
    },
    {
      src: `${BASE}/restoration/restoration-wallpaper-01.png`,
      alt: "賃貸物件の原状回復でクロス（壁紙）を張り替える職人",
      category: "restoration",
      recommendedUse: "クロス張替え・原状回復サービス",
    },
    {
      src: `${BASE}/restoration/restoration-vacant-check-02.png`,
      alt: "退去後の空室を検査票を確認しながら点検する担当者",
      category: "restoration",
      recommendedUse: "管理会社・オーナー向けBtoB空室管理",
    },
  ],

  // ===== SHOJI =====
  shoji: [
    {
      src: `${BASE}/shoji/shoji-installation-01.png`,
      alt: "和室で障子を建て込む職人。庭園を背景に丁寧に設置",
      category: "shoji",
      recommendedUse: "障子施工サービスページヒーロー",
      priority: true,
      caption: "障子の建て込みを行う職人",
    },
    {
      src: `${BASE}/shoji/shoji-installation-02.png`,
      alt: "伝統的な和室に障子を設置する職人の作業",
      category: "shoji",
      recommendedUse: "障子施工サービスページ",
    },
    {
      src: `${BASE}/shoji/shoji-installation-03.png`,
      alt: "旅館の和室で障子の建て込みを確認する職人",
      category: "shoji",
      recommendedUse: "旅館・寺社の障子施工事例",
    },
    {
      src: `${BASE}/shoji/shoji-craftsman-01.png`,
      alt: "障子の枠を丁寧に調整する職人の手元",
      category: "shoji",
      recommendedUse: "障子施工・職人の技術紹介",
    },
    {
      src: `${BASE}/shoji/shoji-craftsman-02.png`,
      alt: "和室の障子レールを確認しながら調整する職人",
      category: "shoji",
      recommendedUse: "障子施工品質・サービス紹介",
    },
    {
      src: `${BASE}/shoji/shoji-adjustment-01.png`,
      alt: "日本庭園を望む和室で障子を調整する職人",
      category: "shoji",
      recommendedUse: "障子施工完成・旅館・寺社向け",
    },
    {
      src: `${BASE}/shoji/shoji-adjustment-02.png`,
      alt: "障子の建て付けを確認しながら最終調整を行う職人",
      category: "shoji",
      recommendedUse: "障子施工の品質確認",
    },
    {
      src: `${BASE}/shoji/shoji-adjustment-03.png`,
      alt: "障子の下部レールを確認しながら調整する職人",
      category: "shoji",
      recommendedUse: "障子施工サービスページ",
    },
  ],

  // ===== FUSUMA =====
  fusuma: [
    {
      src: `${BASE}/fusuma/fusuma-installation-01.png`,
      alt: "和室に真白い新しい襖を建て込む職人",
      category: "fusuma",
      recommendedUse: "襖施工サービスページヒーロー",
      priority: true,
      caption: "新しい襖を建て込む職人",
    },
    {
      src: `${BASE}/fusuma/fusuma-installation-02.png`,
      alt: "和室の押し入れ襖を丁寧に取り付ける職人",
      category: "fusuma",
      recommendedUse: "襖施工サービスページ",
    },
    {
      src: `${BASE}/fusuma/fusuma-installation-03.png`,
      alt: "現代的な住宅の和室に襖を設置する職人",
      category: "fusuma",
      recommendedUse: "現代住宅の襖施工",
    },
    {
      src: `${BASE}/fusuma/fusuma-craftsman-01.png`,
      alt: "畳の上で新しい白い襖を慎重に建て込む職人",
      category: "fusuma",
      recommendedUse: "襖施工職人の技術紹介",
    },
    {
      src: `${BASE}/fusuma/fusuma-craftsman-02.png`,
      alt: "和室で襖の建て付けを確認する職人",
      category: "fusuma",
      recommendedUse: "襖施工・品質確認",
    },
    {
      src: `${BASE}/fusuma/fusuma-craftsman-03.png`,
      alt: "伝統的な和室に襖を設置し最終確認を行う職人",
      category: "fusuma",
      recommendedUse: "旅館・寺社向け襖施工",
    },
    {
      src: `${BASE}/fusuma/fusuma-adjustment-01.png`,
      alt: "収納スペースの建具・引き戸を調整する職人",
      category: "fusuma",
      recommendedUse: "建具・引き戸・押し入れ戸の施工",
    },
    {
      src: `${BASE}/fusuma/fusuma-adjustment-02.png`,
      alt: "和室の押し入れ建具を微調整する職人の手元",
      category: "fusuma",
      recommendedUse: "建具調整・仕上げ工程紹介",
    },
  ],

  // ===== BUSINESS (BtoB向けセクション用) =====
  business: [
    {
      src: `${BASE}/restoration/restoration-vacant-check-01.png`,
      alt: "退去後の空室を検査票を持って点検する不動産担当者",
      category: "restoration",
      recommendedUse: "不動産・管理会社向けBtoBセクション",
    },
    {
      src: `${BASE}/restoration/restoration-vacant-check-02.png`,
      alt: "空室の状態確認と報告書作成を行う専門スタッフ",
      category: "restoration",
      recommendedUse: "管理会社向け・物件管理業務",
    },
    {
      src: `${BASE}/interior/interior-office-renovation-01.png`,
      alt: "オフィスの退去後原状回復工事を行う作業チーム",
      category: "interior",
      recommendedUse: "店舗・オフィス退去後の法人向け原状回復",
    },
    {
      src: `${BASE}/tatami/tatami-room-ryokan-evening-01.png`,
      alt: "夕景を望む旅館の畳客室。繁忙期前の定期メンテナンス後",
      category: "tatami",
      recommendedUse: "旅館・宿泊施設向けBtoBセクション",
    },
    {
      src: `${BASE}/tatami/tatami-temple-hall-01.png`,
      alt: "寺院の本堂。新調した畳と金色の仏像",
      category: "tatami",
      recommendedUse: "寺院・神社向けBtoBセクション",
    },
    {
      src: `${BASE}/interior/interior-store-workers-01.png`,
      alt: "店舗内装工事で棚と什器を設置する職人チーム",
      category: "interior",
      recommendedUse: "店舗オーナー向けBtoBセクション",
    },
  ],

  // ===== WORKS (施工事例に対応) =====
  works: [
    {
      src: `${BASE}/tatami/tatami-room-minimal-01.png`,
      alt: "現代的な住宅の和室に畳表替えを施工した仕上がり",
      category: "tatami",
      recommendedUse: "works-01: 住宅和室畳表替え",
      caption: "一般住宅 和室4.5畳の畳表替え",
    },
    {
      src: `${BASE}/restoration/restoration-wallpaper-01.png`,
      alt: "賃貸退去後の原状回復でクロス張替えを行う職人",
      category: "restoration",
      recommendedUse: "works-02: 賃貸退去後畳新調+クロス",
      caption: "賃貸退去後の原状回復工事",
    },
    {
      src: `${BASE}/tatami/tatami-room-ryokan-table-01.png`,
      alt: "ローテーブルと庭を望む旅館客室の新しい畳",
      category: "tatami",
      recommendedUse: "works-03: 旅館8室畳表替え",
      caption: "旅館客室8室の畳表替え（繁忙期前）",
    },
    {
      src: `${BASE}/tatami/tatami-temple-hall-01.png`,
      alt: "金の仏像が輝く寺院本堂の新しい畳",
      category: "tatami",
      recommendedUse: "works-04: 寺院本堂・客殿畳新調",
      caption: "寺院本堂・客殿の畳新調",
    },
    {
      src: `${BASE}/interior/interior-store-workers-01.png`,
      alt: "和食店の内装工事。木製棚と什器を設置する職人",
      category: "interior",
      recommendedUse: "works-05: 和食店縁なし畳新調",
      caption: "和食店 小上がり・座敷の縁なし畳新調",
    },
    {
      src: `${BASE}/tatami/tatami-room-herinashi-01.png`,
      alt: "現代的な住宅の縁なし和紙畳とフローリングの組み合わせ",
      category: "tatami",
      recommendedUse: "works-06: マンション和紙畳+フロアタイル",
      caption: "分譲マンション 和紙畳+フロアタイル工事",
    },
    {
      src: `${BASE}/restoration/restoration-vacant-check-01.png`,
      alt: "不動産売買前の物件内装確認。担当者が現地調査",
      category: "restoration",
      recommendedUse: "works-07: 不動産売買前内装整備",
      caption: "不動産売買前の内装整備一式",
    },
    {
      src: `${BASE}/tatami/tatami-room-lantern-garden-01.png`,
      alt: "石灯籠のある日本庭園を臨む神社和室の畳表替え後",
      category: "tatami",
      recommendedUse: "works-08: 神社社務所畳表替え",
      caption: "神社 社務所・控室の畳表替え",
    },
  ],

  // ===== COLUMNS (コラム挿絵) =====
  columns: [
    {
      src: `${BASE}/tatami/tatami-craftsman-01.png`,
      alt: "畳の縁を手縫いで仕上げる職人。畳施工の専門技術",
      category: "tatami",
      recommendedUse: "畳表替え・裏返しコラム挿絵",
    },
    {
      src: `${BASE}/tatami/tatami-room-traditional-01.png`,
      alt: "伝統的な和室の畳空間。床の間と掛け軸",
      category: "tatami",
      recommendedUse: "畳の種類・選び方コラム挿絵",
    },
    {
      src: `${BASE}/tatami/tatami-room-herinashi-01.png`,
      alt: "現代住宅の縁なし畳。和紙畳の美しい質感",
      category: "tatami",
      recommendedUse: "和紙畳vs樹脂畳コラム挿絵",
    },
    {
      src: `${BASE}/restoration/restoration-wall-painting-01.png`,
      alt: "壁補修作業。原状回復の基本的な施工工程",
      category: "restoration",
      recommendedUse: "原状回復コラム挿絵",
    },
    {
      src: `${BASE}/shoji/shoji-installation-01.png`,
      alt: "障子を建て込む職人。和室の建具施工",
      category: "shoji",
      recommendedUse: "障子・建具コラム挿絵",
    },
    {
      src: `${BASE}/fusuma/fusuma-installation-01.png`,
      alt: "白い新しい襖を建て込む職人",
      category: "fusuma",
      recommendedUse: "襖コラム挿絵",
    },
  ],

  // ===== COMMON (汎用) =====
  common: [
    {
      src: `${BASE}/tatami/tatami-room-traditional-01.png`,
      alt: "格調ある伝統的な和室の畳空間",
      category: "tatami",
      recommendedUse: "アバウトページ・会社概要・共通ヒーロー",
    },
    {
      src: `${BASE}/tatami/tatami-room-garden-01.png`,
      alt: "日本庭園を望む清潔な和室の畳",
      category: "tatami",
      recommendedUse: "お問い合わせ・フローページのアクセント",
    },
    {
      src: `${BASE}/interior/interior-completed-ldk-01.png`,
      alt: "内装工事完成後の清潔なLDK",
      category: "interior",
      recommendedUse: "内装全般・施工後の仕上がり例",
    },
  ],
};

// 便利なアクセサー
export function getImagesByCategory(category: keyof typeof SITE_IMAGES): SiteImage[] {
  return SITE_IMAGES[category] ?? [];
}

export function getHeroImage(category: keyof typeof SITE_IMAGES = "hero"): SiteImage {
  return SITE_IMAGES[category]?.[0] ?? SITE_IMAGES.hero[0];
}
