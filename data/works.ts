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

export const WORKS: WorkItem[] = [
  {
    id: "works-01",
    title: "一般住宅 和室4.5畳の畳表替え",
    category: "住宅",
    categorySlug: "house",
    location: "一般住宅",
    service: "畳表替え",
    after: "/images/works-01.jpg",
    desc: "築15年の住宅の和室4.5畳を国産い草の畳表に張り替えました。新品のい草の香りが部屋に広がり、お客様に大変喜んでいただきました。",
    tags: ["住宅", "畳表替え", "国産い草"],
  },
  {
    id: "works-02",
    title: "賃貸マンション退去後 畳新調+クロス張替え",
    category: "賃貸",
    categorySlug: "rental",
    location: "賃貸マンション",
    service: "畳新調・クロス張替え",
    after: "/images/works-02.jpg",
    desc: "退去後の原状回復として、畳6枚を新調し、壁・天井のクロスも全面張替え。次の入居者を迎えるための空室対策として管理会社様よりご依頼いただきました。",
    tags: ["賃貸", "原状回復", "畳新調", "クロス"],
  },
  {
    id: "works-03",
    title: "旅館 客室8室の畳表替え（繁忙期前）",
    category: "旅館",
    categorySlug: "ryokan",
    location: "旅館・宿泊施設",
    service: "畳表替え",
    after: "/images/works-03.jpg",
    desc: "繁忙期前に旅館の客室8室（計64枚）の畳表替えを実施。国産い草の高品質素材で旅館の格式を保ちながら、清潔感を取り戻しました。",
    tags: ["旅館", "大量施工", "畳表替え"],
  },
  {
    id: "works-04",
    title: "寺院 本堂・客殿の畳新調",
    category: "寺社",
    categorySlug: "temple",
    location: "寺院",
    service: "畳新調",
    after: "/images/works-04.jpg",
    desc: "築50年以上の寺院本堂と客殿の畳を新調。格式に合わせた縁（ヘリ）の選定から施工まで丁寧に対応。法要前に間に合うよう施工スケジュールを調整しました。",
    tags: ["寺院", "畳新調", "大量施工", "本堂"],
  },
  {
    id: "works-05",
    title: "和食店 小上がり・座敷の縁なし畳新調",
    category: "店舗",
    categorySlug: "store",
    location: "飲食店（和食）",
    service: "縁なし畳新調",
    after: "/images/works-05.jpg",
    desc: "和食店の座敷・小上がりスペースに縁なし畳を新調。樹脂畳素材を採用し、汚れに強く清掃しやすい仕様に。お客様の満足度向上に貢献しました。",
    tags: ["店舗", "飲食店", "縁なし畳", "樹脂畳"],
  },
  {
    id: "works-06",
    title: "分譲マンション 和室の和紙畳+フロアタイル工事",
    category: "住宅",
    categorySlug: "house",
    location: "分譲マンション",
    service: "和紙畳・フロアタイル",
    after: "/images/works-06.jpg",
    desc: "リノベーション中のマンションで、和室に和紙畳、リビングにフロアタイルを施工。ペット対応素材で、清潔に長く使えるよう提案しました。",
    tags: ["住宅", "リノベーション", "和紙畳", "フロアタイル"],
  },
  {
    id: "works-07",
    title: "不動産会社 売買前物件の内装整備一式",
    category: "不動産",
    categorySlug: "realestate",
    location: "戸建住宅（売買物件）",
    service: "畳表替え・クロス張替え・床補修",
    after: "/images/works-07.jpg",
    desc: "売却前の戸建住宅の内装整備を一括受注。畳表替え・クロス張替え・フローリング部分補修を実施し、内覧時の印象を大幅に改善。スムーズな売却につながりました。",
    tags: ["不動産", "売買", "内装整備", "畳表替え"],
  },
  {
    id: "works-08",
    title: "神社 社務所・控室の畳表替え",
    category: "寺社",
    categorySlug: "shrine",
    location: "神社",
    service: "畳表替え",
    after: "/images/works-08.jpg",
    desc: "神社の社務所・控室の畳表替えを実施。神聖な空間の格式を保ちながら、清潔感のある施工を行いました。境内での作業のため、養生・清掃にも細心の注意を払いました。",
    tags: ["神社", "畳表替え", "社務所"],
  },
];
