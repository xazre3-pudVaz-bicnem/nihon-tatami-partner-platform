export type Target = {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  href: string;
  desc: string;
  points: string[];
};

export const TARGETS: Target[] = [
  {
    id: "house",
    title: "一般住宅の方へ",
    shortTitle: "一般住宅",
    icon: "house",
    href: "/needs/sasakure",
    desc: "和室の畳替えから、フローリング・壁クロスの張替えまで。住宅全体の内装をまとめてご相談いただけます。",
    points: ["畳の表替え・新調・裏返し", "縁なし畳・和紙畳への変更", "ふすま・障子の張替え", "クロス・床の内装一式"],
  },
  {
    id: "rental-owner",
    title: "賃貸オーナーの方へ",
    shortTitle: "賃貸オーナー",
    icon: "building",
    href: "/business/rental-owner",
    desc: "退去後の原状回復、空室対策、ペット可物件への変更対応。複数物件をまとめてご依頼いただけます。",
    points: ["退去後の原状回復（畳・クロス・床）", "空室対策の内装改善提案", "和紙畳・樹脂畳でペット可対応", "複数物件・継続案件対応"],
  },
  {
    id: "real-estate",
    title: "不動産会社・管理会社の方へ",
    shortTitle: "不動産・管理会社",
    icon: "office",
    href: "/business/real-estate",
    desc: "管理物件の原状回復・空室対策・売買前内装整備を一括サポート。スピーディーな対応と明確な見積もりで業務効率化を支援します。",
    points: ["協力業者として継続対応", "スピーディーな現地確認・見積もり", "写真付き施工報告書の発行", "複数棟・複数物件の一括管理"],
  },
  {
    id: "ryokan",
    title: "旅館・宿泊施設の方へ",
    shortTitle: "旅館・宿泊施設",
    icon: "ryokan",
    href: "/business/ryokan",
    desc: "客室の定期メンテナンス、繁忙期前の集中施工、高品質素材での格式維持。旅館のスケジュールに合わせた施工計画を立てます。",
    points: ["客室畳の大量施工対応", "繁忙期前の集中スケジューリング", "高品質国産い草・特注縁対応", "施設稼働中の段階施工も可能"],
  },
  {
    id: "temple-shrine",
    title: "寺院・神社の方へ",
    shortTitle: "寺院・神社",
    icon: "shrine",
    href: "/business/temple-shrine",
    desc: "本堂・客殿・社務所・控室など、格式と用途に合わせた素材・縁の選定から施工まで。法要・行事前の整備にも対応します。",
    points: ["格式に合わせた縁・素材の選定", "本堂・客殿・控室など各用途対応", "法要・行事前のスケジュール調整", "境内での丁寧な養生・清掃"],
  },
  {
    id: "store",
    title: "店舗オーナーの方へ",
    shortTitle: "店舗オーナー",
    icon: "store",
    href: "/business/store",
    desc: "飲食店・小売店・サロンの和スペース設置・内装改修・退去時の原状回復まで。店舗の魅力を高める空間づくりをサポートします。",
    points: ["小上がり・座敷の新規設置", "店舗内装改修（床・壁・建具）", "退去時の原状回復工事", "和食店・旅館向け高品質施工"],
  },
];
