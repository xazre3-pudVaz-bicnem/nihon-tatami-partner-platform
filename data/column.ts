export type ColumnArticle = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  tags: string[];
  readTime: number;
  image: string;
};

export const COLUMN_ARTICLES: ColumnArticle[] = [
  {
    slug: "tatami-omotegae-uragaeshi-shinchou",
    title: "畳の表替え・裏返し・新調の違いを徹底解説",
    excerpt: "畳のメンテナンスには「表替え」「裏返し」「新調」の3つがあります。それぞれの違い、費用感、適したタイミングを専門家が詳しく解説します。",
    publishedAt: "2025-06-01",
    category: "畳の基礎知識",
    tags: ["表替え", "裏返し", "新調", "メンテナンス"],
    readTime: 8,
    image: "/images/column-01.jpg",
  },
  {
    slug: "tatami-timing",
    title: "畳替えの最適なタイミングとは？プロが教えるサインと目安",
    excerpt: "ささくれ・色あせ・沈みなど、畳の交換時期を示すサインを解説。表替え・裏返し・新調それぞれのタイミングの目安も紹介します。",
    publishedAt: "2025-06-08",
    category: "畳の基礎知識",
    tags: ["タイミング", "メンテナンス", "畳替え"],
    readTime: 7,
    image: "/images/column-02.jpg",
  },
  {
    slug: "washi-tatami-vs-resin-tatami",
    title: "和紙畳と樹脂畳の違いを比較｜ペット・子育て家庭向けの選び方",
    excerpt: "機能性畳の代表格、和紙畳と樹脂畳を徹底比較。耐久性・撥水性・価格・見た目など各ポイントから、あなたのライフスタイルに合った素材を選べます。",
    publishedAt: "2025-06-15",
    category: "畳素材・種類",
    tags: ["和紙畳", "樹脂畳", "ペット", "素材比較"],
    readTime: 9,
    image: "/images/column-03.jpg",
  },
  {
    slug: "rental-tatami-vacancy",
    title: "賃貸物件の畳交換で空室対策につなげる方法｜管理会社・オーナー向け",
    excerpt: "賃貸物件の空室問題を解決するために、畳交換がどれほど効果的かを解説。和紙畳・樹脂畳への変更でペット可物件への転換を検討している方にも。",
    publishedAt: "2025-06-22",
    category: "法人・不動産向け",
    tags: ["賃貸", "空室対策", "管理会社", "オーナー"],
    readTime: 8,
    image: "/images/column-04.jpg",
  },
  {
    slug: "ryokan-tatami-merit",
    title: "旅館の客室畳を張り替えるメリットと注意点｜繁忙期前の整備ガイド",
    excerpt: "旅館・ホテルの客室畳を定期的にメンテナンスする重要性と、大量施工時のポイントを解説。繁忙期前の施工計画の立て方も紹介します。",
    publishedAt: "2025-07-01",
    category: "旅館・施設向け",
    tags: ["旅館", "施設", "客室", "大量施工"],
    readTime: 7,
    image: "/images/column-05.jpg",
  },
  {
    slug: "temple-shrine-tatami",
    title: "寺院・神社の畳工事で注意すべきポイント｜格式に合わせた素材選び",
    excerpt: "寺院・神社の畳工事は一般住宅と異なる配慮が必要です。本堂・客殿・控室など用途別の素材選び、縁の格式、施工時の注意点を詳しく解説します。",
    publishedAt: "2025-07-08",
    category: "旅館・施設向け",
    tags: ["寺院", "神社", "本堂", "格式"],
    readTime: 8,
    image: "/images/column-06.jpg",
  },
  {
    slug: "realestate-interior-before-sale",
    title: "不動産売買前に畳と内装を整えるべき理由｜内覧効果と資産価値",
    excerpt: "物件売却前に畳を張り替え、内装を整えることで内覧時の印象は大きく変わります。費用対効果と具体的な施工内容を不動産事業者目線で解説。",
    publishedAt: "2025-07-15",
    category: "法人・不動産向け",
    tags: ["不動産", "売買", "内装整備", "資産価値"],
    readTime: 8,
    image: "/images/column-07.jpg",
  },
  {
    slug: "restoration-tatami-cases",
    title: "原状回復工事で畳交換が必要になるケース｜費用負担の考え方も解説",
    excerpt: "賃貸退去時の原状回復で畳交換が必要になる条件とは？通常使用の範囲・故意過失の判断基準から、費用負担の目安まで管理会社・オーナー視点で解説します。",
    publishedAt: "2025-07-22",
    category: "原状回復",
    tags: ["原状回復", "賃貸", "費用負担", "管理会社"],
    readTime: 9,
    image: "/images/column-08.jpg",
  },
  {
    slug: "pet-tatami",
    title: "ペットがいる家庭に向いている畳素材とは｜選び方と注意点",
    excerpt: "猫・犬などペットと畳の相性を素材別に比較。爪による傷・排泄物への対応・耐久性の観点から、ペットのいる家庭に最適な畳素材を選べるガイドです。",
    publishedAt: "2025-08-01",
    category: "ライフスタイル",
    tags: ["ペット", "和紙畳", "樹脂畳", "素材"],
    readTime: 7,
    image: "/images/column-09.jpg",
  },
  {
    slug: "tatami-for-children-elderly",
    title: "子どもや高齢者に畳が向いている理由｜安全性と快適性の観点から",
    excerpt: "畳のクッション性・調湿性・抗菌性が子どもの安全や高齢者の快適な生活にどう役立つかを解説。和室のある暮らしが持つ健康的なメリットも紹介します。",
    publishedAt: "2025-08-08",
    category: "ライフスタイル",
    tags: ["子ども", "高齢者", "安全", "健康"],
    readTime: 7,
    image: "/images/column-10.jpg",
  },
];
