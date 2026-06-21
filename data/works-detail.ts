export type WorkDetail = {
  slug: string;
  title: string;
  category: string; // tatami | fusuma | shoji | interior | restoration
  categoryLabel: string;
  targetType: string; // house | rental | ryokan | temple | shrine | store | office | realestate
  targetLabel: string;
  location: string;
  service: string;
  challenge: string;
  proposal: string;
  workContent: string;
  materials: string;
  duration: string;
  cost: string;
  result: string;
  staffComment: string;
  simultaneousWork: string[];
  heroImage: string;
  relatedServices: { label: string; href: string }[];
  relatedColumns: string[];
  tags: string[];
};

const IMG = {
  craftsman: "/images/nihon-tatami/tatami/tatami-craftsman-01.png",
  traditional: "/images/nihon-tatami/tatami/tatami-room-traditional-01.png",
  minimal: "/images/nihon-tatami/tatami/tatami-room-minimal-01.png",
  herinashi: "/images/nihon-tatami/tatami/tatami-room-herinashi-01.png",
  temple: "/images/nihon-tatami/tatami/tatami-temple-hall-01.png",
  ryokan: "/images/nihon-tatami/tatami/tatami-room-ryokan-table-01.png",
  garden: "/images/nihon-tatami/tatami/tatami-room-lantern-garden-01.png",
  storeWorkers: "/images/nihon-tatami/interior/interior-store-workers-01.png",
  resWorkers: "/images/nihon-tatami/interior/interior-residential-workers-01.png",
  ldk: "/images/nihon-tatami/interior/interior-completed-ldk-01.png",
  vacant: "/images/nihon-tatami/restoration/restoration-vacant-check-01.png",
  wallpaper: "/images/nihon-tatami/restoration/restoration-wallpaper-01.png",
  floorRepair: "/images/nihon-tatami/restoration/restoration-floor-repair-01.png",
  shoji: "/images/nihon-tatami/shoji/shoji-installation-01.png",
  fusuma: "/images/nihon-tatami/fusuma/fusuma-installation-01.png",
} as const;

const CATEGORY_LABELS: Record<string, string> = {
  tatami: "畳工事",
  fusuma: "襖張替え",
  shoji: "障子張替え",
  interior: "内装工事",
  restoration: "原状回復",
};

const TARGET_LABELS: Record<string, string> = {
  house: "一般住宅",
  rental: "賃貸物件",
  ryokan: "旅館・宿泊施設",
  temple: "寺院",
  shrine: "神社",
  store: "店舗・飲食店",
  office: "オフィス",
  realestate: "不動産・売買物件",
};

type Seed = {
  slug: string;
  title: string;
  category: WorkDetail["category"];
  targetType: WorkDetail["targetType"];
  location: string;
  service: string;
  challenge: string;
  proposal: string;
  workContent: string;
  materials: string;
  duration: string;
  cost: string;
  result: string;
  staffComment: string;
  simultaneousWork: string[];
  heroImage: string;
  relatedServices: { label: string; href: string }[];
  relatedColumns: string[];
  tags: string[];
};

const SEEDS: Seed[] = [
  // ===== 一般住宅 畳表替え =====
  {
    slug: "house-tatami-omotegae-01",
    title: "一般住宅 和室6畳の畳表替え（国産い草）",
    category: "tatami",
    targetType: "house",
    location: "戸建住宅",
    service: "畳表替え",
    challenge:
      "築12年の戸建住宅の和室6畳。畳表全体に色あせとささくれが目立ち、来客時に気になるとのご相談でした。い草特有の香りも薄れ、リビング続きの和室の印象が古びて見えてしまうことを気にされていました。畳床自体に沈みはなく、表面のみの傷みであることを現地で確認しました。",
    proposal:
      "畳床は健全だったため、費用を抑えられる表替えをご提案。香りと風合いを重視されるご希望から、国産い草の標準グレードを選定しました。サンプルで色味と縁の柄を確認いただき、和室全体に馴染む落ち着いた縁をお選びいただきました。引き取り翌日返しで、生活への影響を最小限に抑える計画としました。",
    workContent:
      "施工当日は、まず和室の家具を一時移動し、既存の畳を採寸しながら引き取りました。工場で古い畳表と縁を丁寧に取り外し、畳床の点検と軽微な調整を実施。新しい国産い草の畳表を張り、選定いただいた縁を縫い付けました。納品時には一枚ずつ敷き込みながら隙間や浮きがないかを確認し、最後に表面を整えてお引き渡ししました。新しいい草の香りが部屋に広がりました。",
    materials: "国産い草（機械すき・標準グレード）／落ち着いた色合いの縁",
    duration: "引き取り〜翌日納品（実働2日）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "色あせて白茶けていた和室が、青々とした新しい畳によみがえります。い草の香りが戻り、リビング続きの和室の印象が一新され、来客時にも安心して案内できる空間になります。",
    staffComment:
      "畳床がしっかりしていたため表替えで十分にきれいになりました。香りを大切にされるお客様には、やはり国産い草の良さを実感いただけます。タイミングを逃さずメンテナンスいただければ、畳は長く美しく保てます。",
    simultaneousWork: ["障子の張替え"],
    heroImage: IMG.craftsman,
    relatedServices: [
      { label: "畳表替え", href: "/services/tatami-omotegae" },
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["tatami-omotegae-guide", "tatami-timing"],
    tags: ["住宅", "畳表替え", "国産い草"],
  },
  {
    slug: "house-tatami-omotegae-02",
    title: "一般住宅 和室4.5畳の畳表替え（和紙畳）",
    category: "tatami",
    targetType: "house",
    location: "マンション",
    service: "畳表替え（和紙畳）",
    challenge:
      "小さなお子様のいるご家庭から、和室4.5畳の畳が傷んできたとのご相談。食べこぼしによるシミが取れず、色あせも進んでいました。お子様が遊ぶスペースとして使うため、汚れに強く衛生的な畳にしたいとのご希望でした。",
    proposal:
      "汚れと色あせに強く、ダニ・カビが発生しにくい和紙畳をご提案しました。撥水性があり飲み物をこぼしても染み込みにくいため、子育て中のご家庭に最適です。明るい印象になるよう、お部屋に合う色味の和紙畳を選定いただきました。",
    workContent:
      "既存の畳を引き取り、畳床を点検したうえで和紙畳の畳表に張り替えました。お子様が触れることを考慮し、肌触りと角の仕上がりにも配慮。納品時には敷き込みの精度を確認し、段差や隙間がないよう丁寧に調整しました。お手入れ方法もあわせてご案内しました。",
    materials: "和紙畳（撥水加工）／明るい色味の縁",
    duration: "引き取り〜翌日納品（実働2日）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "汚れを気にせずお子様を遊ばせられる安心な空間になります。撥水性があり水拭きできるため、掃除の手間も軽減されます。色あせに強いため、長くきれいな状態を保てます。",
    staffComment:
      "子育て中のご家庭には和紙畳が本当に好評です。撥水性があり、万一の食べこぼしも染み込みにくいので、毎日のストレスが減ります。色のバリエーションも豊富なので、お部屋に合わせて選んでいただけます。",
    simultaneousWork: [],
    heroImage: IMG.minimal,
    relatedServices: [
      { label: "和紙畳", href: "/services/washi-tatami" },
      { label: "畳表替え", href: "/services/tatami-omotegae" },
    ],
    relatedColumns: ["washi-tatami-merit", "tatami-for-children"],
    tags: ["住宅", "和紙畳", "子育て"],
  },
  {
    slug: "house-tatami-omotegae-03",
    title: "一般住宅 客間8畳の畳表替え（法事前）",
    category: "tatami",
    targetType: "house",
    location: "戸建住宅",
    service: "畳表替え",
    challenge:
      "法事を控えたお客様から、客間8畳の畳をきれいにしたいとのご相談。親族が集まる場のため、色あせとささくれが目立つ畳を新しくしたいが、法事までの日数が限られているとのことでした。",
    proposal:
      "法事の日程から逆算し、確実に間に合うスケジュールで表替えをご提案。畳床は健全だったため、表替えで十分に印象を一新できることをご説明しました。格式ある客間に合う落ち着いた縁を選定いただきました。",
    workContent:
      "限られた日程の中、引き取り・施工・納品をスケジュール通りに進行。8畳分の畳を採寸し、国産い草の畳表に張り替えました。納品時には一枚ずつ丁寧に敷き込み、法事に向けて清潔感のある客間に仕上げました。",
    materials: "国産い草（機械すき）／格式に合う縁",
    duration: "ご相談から法事前までに完了（計画施工）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "法事に間に合い、新しいい草の香りと清潔感のある客間で親族をお迎えできる仕上がりになります。日程から逆算した計画施工で、行事前の整備を確実に完了させます。",
    staffComment:
      "行事前のご依頼は日程が命です。早めにご相談いただければ、逆算して確実に間に合うよう調整します。新しい畳でお客様をお迎えできると、場の格も上がります。",
    simultaneousWork: ["襖の張替え"],
    heroImage: IMG.traditional,
    relatedServices: [
      { label: "畳表替え", href: "/services/tatami-omotegae" },
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["tatami-before-ceremony", "tatami-omotegae-guide"],
    tags: ["住宅", "畳表替え", "法事"],
  },

  // ===== 賃貸 退去後原状回復 =====
  {
    slug: "rental-tatami-restoration-01",
    title: "賃貸アパート 退去後の畳表替え＋クロス張替え",
    category: "restoration",
    targetType: "rental",
    location: "賃貸アパート",
    service: "畳表替え・クロス張替え",
    challenge:
      "管理会社様より、退去後のアパート和室の原状回復をご依頼。畳の色あせとクロスの汚れが目立ち、次の入居者募集に向けて早急に整えたいとのことでした。空室期間を短縮するため、スピーディな対応が求められました。",
    proposal:
      "畳の表替えと壁・天井のクロス張替えをまとめてご提案。一社でまとめて施工することで工程を効率化し、募集開始までの期間短縮を図りました。次の入居者層を想定し、清潔感のある標準的な仕様を選定しました。",
    workContent:
      "畳を引き取り表替えを行うのと並行して、既存クロスを剥がして下地を整え、新しいクロスを張りました。畳の納品とクロス仕上げのタイミングを合わせ、効率的に進行。室内全体の清掃まで行い、すぐに内見対応できる状態に仕上げました。",
    materials: "国産い草（標準グレード）／量産クロス（防汚タイプ）",
    duration: "数日（畳・クロス同時進行）",
    cost: "枚数・面積により変動（現地確認後にご案内）",
    result:
      "色あせた和室が清潔感のある空間に一新され、すぐに募集を開始できる状態に仕上がります。畳とクロスをまとめてご依頼いただくことで、別々に発注するより短期間での完了が見込め、空室期間の短縮が期待できます。",
    staffComment:
      "原状回復は畳とクロスをセットで行うと効率的です。窓口が一つになることで、管理会社様の手間も減ります。次の入居者を早く迎えられるよう、スピードと品質の両立を心がけています。",
    simultaneousWork: ["クロス張替え", "室内クリーニング"],
    heroImage: IMG.wallpaper,
    relatedServices: [
      { label: "賃貸の原状回復", href: "/restoration/rental" },
      { label: "クロス張替え", href: "/interior/cross" },
    ],
    relatedColumns: ["rental-restoration-checklist", "restoration-cost-guide"],
    tags: ["賃貸", "原状回復", "クロス"],
  },
  {
    slug: "rental-tatami-restoration-02",
    title: "賃貸マンション 退去後の畳新調",
    category: "restoration",
    targetType: "rental",
    location: "賃貸マンション",
    service: "畳新調",
    challenge:
      "オーナー様より、長期入居だった賃貸マンションの和室の原状回復をご依頼。畳を踏むと沈む箇所があり、表替えでは対応できない状態でした。次の入居者に気持ちよく住んでもらえるよう、しっかり整えたいとのご希望でした。",
    proposal:
      "畳床のへたりが進んでいたため、表替えではなく新調をご提案。マンションのため軽量な建材床を選定し、扱いやすく衛生的な仕様としました。費用と耐久性のバランスを考慮した素材選定をご案内しました。",
    workContent:
      "既存の畳を撤去し、床下地を点検。建材床の新しい畳を製作し、採寸に合わせて敷き込みました。沈みのない快適な踏み心地に仕上げ、和室全体の印象を一新。次の入居者を迎える準備が整いました。",
    materials: "建材床＋国産い草／清潔感のある縁",
    duration: "数日（採寸・製作・敷き込み）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "沈みのあった和室が、新品同様の快適な空間に仕上がります。踏み心地が改善され、次の入居者にも好印象を与えられる状態になります。畳床からしっかり整えることで、長く快適に使える和室になります。",
    staffComment:
      "踏んで沈む畳は畳床の寿命のサインです。表替えでは直らないため、思い切って新調することで長く快適に使えます。マンションでは軽量な建材床が扱いやすくおすすめです。",
    simultaneousWork: [],
    heroImage: IMG.minimal,
    relatedServices: [
      { label: "畳新調", href: "/services/tatami-shinchou" },
      { label: "賃貸の原状回復", href: "/restoration/rental" },
    ],
    relatedColumns: ["tatami-shinchou-guide", "tatami-sunken-guide"],
    tags: ["賃貸", "原状回復", "畳新調"],
  },
  {
    slug: "rental-tatami-restoration-03",
    title: "賃貸戸建 退去後の畳・襖・障子一括張替え",
    category: "restoration",
    targetType: "rental",
    location: "賃貸戸建",
    service: "畳表替え・襖・障子張替え",
    challenge:
      "管理会社様より、退去した賃貸戸建の和室2部屋の原状回復をご依頼。畳・襖・障子のすべてが傷んでおり、別々の業者に頼む手間を省きたいとのことでした。和室が複数あるため、まとめて効率よく整えたいご希望でした。",
    proposal:
      "畳の表替え、襖と障子の張替えを一括でご提案。一社でまとめて対応することで、調整の手間を省き工期も短縮できることをご説明しました。賃貸物件として清潔感のある標準的な仕様を選定しました。",
    workContent:
      "和室2部屋の畳を表替えするとともに、襖と障子をすべて張り替えました。建具は枠の状態も点検し、必要に応じて調整。和室全体を統一感のある清潔な空間に仕上げ、すぐに内見対応できる状態にしました。",
    materials: "国産い草／量産襖紙／障子紙（強化タイプ）",
    duration: "数日（畳・建具まとめて）",
    cost: "枚数・面積により変動（現地確認後にご案内）",
    result:
      "畳・襖・障子がすべて新しくなり、和室2部屋が見違えるように清潔に仕上がります。一社にまとめることで管理会社様の調整手間が減り、工期の短縮が見込めます。スムーズに次の募集へ移行できる状態になります。",
    staffComment:
      "畳と建具をまとめてご依頼いただくと、調整が一度で済み、仕上がりの統一感も出ます。賃貸の原状回復では、このワンストップ対応が特に喜ばれます。",
    simultaneousWork: ["襖の張替え", "障子の張替え"],
    heroImage: IMG.traditional,
    relatedServices: [
      { label: "賃貸の原状回復", href: "/restoration/rental" },
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["rental-restoration-checklist", "interior-and-tatami-package"],
    tags: ["賃貸", "原状回復", "襖", "障子"],
  },

  // ===== 旅館 =====
  {
    slug: "ryokan-tatami-01",
    title: "旅館 客室8室の畳表替え（繁忙期前）",
    category: "tatami",
    targetType: "ryokan",
    location: "旅館・宿泊施設",
    service: "畳表替え",
    challenge:
      "旅館の女将様より、繁忙期を前に客室8室（計64枚）の畳をきれいにしたいとのご相談。客室の畳に色あせが見られ、お客様をお迎えするにあたり清潔感を取り戻したいとのことでした。営業を止めずに施工することが条件でした。",
    proposal:
      "繁忙期から逆算し、客室を順番に施工して営業を継続する計画をご提案。旅館の格式に合う国産い草を選定し、香りと清潔感を重視しました。閑散期にまとめて施工することで効率化を図りました。",
    workContent:
      "8室を順番に施工し、稼働中の客室に影響が出ないよう日程を調整しました。各室の畳を引き取り、国産い草の畳表に張り替え。納品時には敷き込みの精度を確認し、旅館にふさわしい仕上がりに整えました。全64枚を計画通りに完了しました。",
    materials: "国産い草（高品質グレード）／旅館の格式に合う縁",
    duration: "計画施工（客室を順番に）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "全客室の畳が新しくなり、青々としたい草の香りでお客様をお迎えできる状態になります。客室を順番に施工するため、営業を止めずに繁忙期前の整備を完了させることができます。",
    staffComment:
      "旅館は営業を止められないので、客室を順番に施工する段取りが重要です。繁忙期前の整備は毎年計画的に行うと、常に最高の状態でお客様をお迎えできます。香り高い国産い草はおもてなしの質を高めます。",
    simultaneousWork: ["障子の張替え"],
    heroImage: IMG.ryokan,
    relatedServices: [
      { label: "旅館向け", href: "/business/ryokan" },
      { label: "畳表替え", href: "/services/tatami-omotegae" },
    ],
    relatedColumns: ["ryokan-tatami-maintenance", "before-peak-season-tatami"],
    tags: ["旅館", "大量施工", "畳表替え"],
  },
  {
    slug: "ryokan-tatami-02",
    title: "旅館 大広間の畳新調（宴会場）",
    category: "tatami",
    targetType: "ryokan",
    location: "旅館・宴会場",
    service: "畳新調",
    challenge:
      "旅館の宴会用大広間の畳が、長年の使用でへたり、踏み心地に沈みが出ていました。大人数が利用する場所のため耐久性が求められ、見た目の格式も保ちたいとのご相談でした。",
    proposal:
      "使用頻度が高い大広間のため、耐久性のある畳床での新調をご提案。格式を保つ高品質な畳表と縁を選定しました。大人数の利用に耐える仕様としつつ、宴会場にふさわしい風格を重視しました。",
    workContent:
      "広い大広間の畳をすべて撤去し、床下地を点検。耐久性のある畳床で新しい畳を製作し、広い面積を隙間なく敷き込みました。格式ある縁を縫い付け、宴会場にふさわしい重厚で清潔な空間に仕上げました。",
    materials: "耐久性のある畳床＋高品質い草／格式ある縁",
    duration: "計画施工（広面積・大量枚数）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "沈みのあった大広間が、しっかりとした踏み心地と格式ある見た目に一新されます。大人数の宴会でも安心して使える状態になり、施設の価値向上という効果が期待できます。",
    staffComment:
      "大人数が利用する大広間は、耐久性が何より重要です。畳床からしっかり作り替えることで、長く快適に使えます。宴会場は施設の顔なので、格式にも配慮して仕上げました。",
    simultaneousWork: [],
    heroImage: IMG.temple,
    relatedServices: [
      { label: "畳新調", href: "/services/tatami-shinchou" },
      { label: "旅館向け", href: "/business/ryokan" },
    ],
    relatedColumns: ["ryokan-tatami-maintenance", "bulk-order-tatami-cost"],
    tags: ["旅館", "畳新調", "大広間"],
  },
  {
    slug: "ryokan-tatami-03",
    title: "旅館 客室の縁なし畳でモダンリニューアル",
    category: "tatami",
    targetType: "ryokan",
    location: "旅館・客室",
    service: "縁なし畳新調",
    challenge:
      "旅館のリニューアルに合わせ、一部の客室を現代的な雰囲気にしたいとのご相談。若い世代やインバウンドのお客様にも好まれる、モダンで洗練された和の空間を目指していました。",
    proposal:
      "縁なし畳の市松敷きで、モダンで上質な客室をご提案。色あせに強く清掃性の高い和紙畳を採用し、旅館の運営に適した仕様としました。落ち着いたカラーで陰影の美しさを引き立てる配色を選定しました。",
    workContent:
      "既存の畳を撤去し、縁なし畳を製作。市松状に敷き込み、光の当たり方による陰影が美しく映えるよう配置しました。和紙畳のため色あせに強く、長く美しさを保てる仕様に。洗練された客室に仕上がりました。",
    materials: "和紙畳（縁なし）／市松敷き",
    duration: "計画施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "客室が現代的で洗練された印象に生まれ変わります。若い世代やインバウンドのお客様にも好まれるモダンな和室という効果が期待できます。色あせに強い和紙畳のため、メンテナンスの負担も軽減されます。",
    staffComment:
      "縁なし畳の市松敷きは、和の趣を保ちつつモダンな印象を作れます。旅館では和紙畳を使うことで、デザイン性と運営面の両立ができます。リニューアルのご相談も承ります。",
    simultaneousWork: ["クロス張替え"],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
      { label: "和紙畳", href: "/services/washi-tatami" },
    ],
    relatedColumns: ["herinashi-tatami-guide", "modern-japanese-room"],
    tags: ["旅館", "縁なし畳", "和紙畳", "リニューアル"],
  },

  // ===== 寺院 =====
  {
    slug: "temple-tatami-01",
    title: "寺院 本堂の畳新調（法要前）",
    category: "tatami",
    targetType: "temple",
    location: "寺院・本堂",
    service: "畳新調",
    challenge:
      "築50年以上の寺院本堂の畳が老朽化し、法要を前に新調したいとのご相談。広い本堂の畳をまとめて施工する必要があり、格式に合わせた縁の選定と、法要に間に合わせる段取りが求められました。",
    proposal:
      "本堂の格式にふさわしい高品質な畳表と、伝統的な縁をご提案。法要の日程から逆算した計画施工で、確実に間に合わせる段取りをご案内しました。広い面積でも一括で対応できる体制でお引き受けしました。",
    workContent:
      "本堂の広い畳をすべて撤去し、畳床から新調。格式ある縁を選定し、伝統的な意匠に配慮して施工しました。境内での作業では養生・清掃を徹底。広い本堂を隙間なく美しく敷き込み、法要前に完了させました。",
    materials: "高品質い草＋畳床新調／伝統的な紋縁",
    duration: "計画施工（法要前までに完了）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "本堂が格式ある清潔な空間に一新され、法要を滞りなく執り行える仕上がりになります。伝統に配慮した縁の選定により、参拝者にも好印象を与える空間となります。",
    staffComment:
      "寺院の本堂は格式が重要です。縁の柄一つにも伝統的な意味があるため、丁寧にご相談しながら選定します。法要に間に合わせる段取りも含め、寺院ならではのご要望に対応します。",
    simultaneousWork: [],
    heroImage: IMG.temple,
    relatedServices: [
      { label: "寺社向け", href: "/business/temple-shrine" },
      { label: "畳新調", href: "/services/tatami-shinchou" },
    ],
    relatedColumns: ["temple-tatami-guide", "tatami-before-ceremony"],
    tags: ["寺院", "畳新調", "本堂"],
  },
  {
    slug: "temple-tatami-02",
    title: "寺院 客殿・控室の畳表替え",
    category: "tatami",
    targetType: "temple",
    location: "寺院・客殿",
    service: "畳表替え",
    challenge:
      "寺院の客殿と控室の畳に色あせが見られ、来客をお迎えする空間として整えたいとのご相談。本堂ほどの格式は不要だが、清潔感と落ち着きを保ちたいとのご希望でした。",
    proposal:
      "畳床は健全だったため、費用を抑えられる表替えをご提案。来客に映える清潔感のある国産い草を選定し、客殿にふさわしい落ち着いた縁を選びました。複数の部屋をまとめて効率的に施工する計画としました。",
    workContent:
      "客殿と控室の畳を引き取り、国産い草の畳表に張り替えました。来客時の印象を重視し、丁寧に敷き込み。境内での作業に配慮し、養生・清掃を徹底しました。清潔で落ち着いた来客空間に仕上げました。",
    materials: "国産い草／落ち着いた色合いの縁",
    duration: "数日（複数室まとめて）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "客殿・控室が清潔感のある空間に一新され、来客を気持ちよくお迎えできる仕上がりになります。複数室をまとめて施工することで効率的に完了できます。",
    staffComment:
      "客殿や控室は来客の印象を左右します。本堂と用途が異なるため、それぞれに合った素材を選ぶことが大切です。複数室まとめての施工は効率が良くおすすめです。",
    simultaneousWork: ["襖の張替え"],
    heroImage: IMG.traditional,
    relatedServices: [
      { label: "畳表替え", href: "/services/tatami-omotegae" },
      { label: "寺社向け", href: "/business/temple-shrine" },
    ],
    relatedColumns: ["temple-tatami-guide", "tatami-omotegae-guide"],
    tags: ["寺院", "畳表替え", "客殿"],
  },

  // ===== 神社 =====
  {
    slug: "shrine-tatami-01",
    title: "神社 社務所・参集殿の畳表替え",
    category: "tatami",
    targetType: "shrine",
    location: "神社",
    service: "畳表替え",
    challenge:
      "神社の社務所と参集殿の畳が傷んできたとのご相談。祭事や参拝者の利用がある神聖な空間として、清潔感を保ちたいとのご希望でした。祭事の日程に支障が出ないよう施工することが条件でした。",
    proposal:
      "祭事の日程に配慮した施工計画とともに、清潔感のある国産い草での表替えをご提案。神聖な空間にふさわしい仕上がりを重視しました。社務所と参集殿をまとめて効率的に施工する計画としました。",
    workContent:
      "祭事に支障が出ないよう日程を調整し、社務所・参集殿の畳を表替えしました。境内での作業では養生・清掃を徹底し、神聖な空間にふさわしい配慮を行いました。清潔で整った空間に仕上げました。",
    materials: "国産い草／清潔感のある縁",
    duration: "数日（祭事日程に配慮）",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "社務所・参集殿が清潔な空間に整い、参拝者や祭事の場として気持ちよく利用できる仕上がりになります。祭事の日程に配慮した計画施工で、支障なく整備を完了させます。",
    staffComment:
      "神社では祭事の日程が最優先です。それに支障が出ないよう調整し、境内での作業にも細心の注意を払います。神聖な空間にふさわしい清潔感を大切に仕上げました。",
    simultaneousWork: [],
    heroImage: IMG.garden,
    relatedServices: [
      { label: "寺社向け", href: "/business/temple-shrine" },
      { label: "畳表替え", href: "/services/tatami-omotegae" },
    ],
    relatedColumns: ["shrine-tatami-guide", "temple-tatami-guide"],
    tags: ["神社", "畳表替え", "社務所"],
  },

  // ===== 店舗（和食店） =====
  {
    slug: "store-japanese-room-01",
    title: "和食店 座敷・小上がりの樹脂畳新調",
    category: "tatami",
    targetType: "store",
    location: "飲食店（和食）",
    service: "樹脂畳新調",
    challenge:
      "和食店の座敷・小上がりの畳が、飲食による汚れとシミで傷んでいました。お客様が飲食する空間のため、汚れに強く清掃しやすい畳にしたいとのご相談。営業に影響しない施工も求められました。",
    proposal:
      "水拭きでき汚れに強い樹脂畳をご提案。飲食店の座敷に最適な清掃性と耐久性を備えています。店舗の雰囲気に合う色味を選定し、定休日に合わせた施工計画としました。",
    workContent:
      "定休日に合わせて既存の畳を撤去し、樹脂畳を新調。飲食店の使用に耐える耐久性と、水拭きできる清掃性を重視して施工しました。営業再開に間に合うよう敷き込みを完了し、清潔で扱いやすい座敷に仕上げました。",
    materials: "樹脂畳／店舗の雰囲気に合う色味",
    duration: "定休日に施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "飲み物をこぼしても水拭きで簡単に対処でき、日々の清掃が楽になる仕上がりです。汚れに強いため、座敷を常に清潔に保てます。衛生面でお客様に好印象を与えられる座敷空間になります。",
    staffComment:
      "飲食店の座敷には樹脂畳が最適です。水拭きできるので、こぼれた飲み物もサッと拭けて衛生的。営業への影響を抑えるため定休日に施工しました。店舗ならではのご要望に対応します。",
    simultaneousWork: [],
    heroImage: IMG.storeWorkers,
    relatedServices: [
      { label: "樹脂畳", href: "/services/resin-tatami" },
      { label: "店舗向け", href: "/business/store" },
    ],
    relatedColumns: ["resin-tatami-merit", "store-japanese-space"],
    tags: ["店舗", "飲食店", "樹脂畳"],
  },
  {
    slug: "store-japanese-room-02",
    title: "和食店 縁なし畳で和モダンな個室空間",
    category: "tatami",
    targetType: "store",
    location: "飲食店（和食）",
    service: "縁なし畳新調",
    challenge:
      "和食店の個室を、落ち着いた和モダンな雰囲気にリニューアルしたいとのご相談。他店との差別化を図り、特別感のある空間でお客様をもてなしたいとのご希望でした。",
    proposal:
      "縁なし畳の市松敷きで、和モダンで上質な個室をご提案。汚れに強く色あせしにくい和紙畳を採用し、店舗運営に適した仕様としました。落ち着いたカラーで特別感を演出する配色を選定しました。",
    workContent:
      "個室の畳を縁なし畳で新調し、市松状に敷き込みました。和紙畳のため色あせ・汚れに強く、店舗での長期使用に適した仕様に。陰影の美しさが映える落ち着いた空間に仕上げました。",
    materials: "和紙畳（縁なし）／市松敷き",
    duration: "定休日に施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "個室が和モダンで特別感のある空間に生まれ変わります。色あせに強い和紙畳のため、清潔感を長く保てます。他店との差別化という効果が期待できる仕上がりです。",
    staffComment:
      "縁なし畳は店舗の個室を上質に見せます。和紙畳ならデザイン性と耐久性を両立できるので、飲食店に向いています。空間づくりのご相談も承ります。",
    simultaneousWork: ["店舗内装工事"],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
      { label: "店舗内装", href: "/interior/store-interior" },
    ],
    relatedColumns: ["store-japanese-space", "modern-japanese-room"],
    tags: ["店舗", "縁なし畳", "和モダン"],
  },

  // ===== 襖張替え =====
  {
    slug: "fusuma-replacement-01",
    title: "一般住宅 和室の襖張替え（4枚）",
    category: "fusuma",
    targetType: "house",
    location: "戸建住宅",
    service: "襖張替え",
    challenge:
      "戸建住宅の和室の襖4枚が、日焼けと破れで傷んでいました。和室全体の印象を明るく整えたいとのご相談。柄の選び方に迷われており、相談しながら決めたいとのご希望でした。",
    proposal:
      "サンプルを見ながら、和室を明るく見せる襖紙をご提案。お部屋の雰囲気に合う柄を一緒に選定しました。畳・障子との調和も考慮し、まとまりのある和室になるよう配慮しました。",
    workContent:
      "既存の襖紙を剥がし、骨組みを点検したうえで新しい襖紙を張りました。シワや浮きが出ないよう丁寧に仕上げ、選定いただいた柄で和室を明るい印象に。建て付けも確認し、スムーズに開閉できるよう調整しました。",
    materials: "中級グレードの襖紙（明るい色柄）",
    duration: "1〜2日",
    cost: "枚数・グレードにより変動（現地確認後にご案内）",
    result:
      "日焼けと破れで傷んでいた襖が一新され、和室が明るく整います。サンプルを見ながら柄を選んでいただくため、納得感のある仕上がりになります。畳・障子との調和もとれた、まとまりのある和室に仕上がります。",
    staffComment:
      "襖は和室の大きな面積を占めるので、柄選びで印象が大きく変わります。サンプルを見ながらじっくり選んでいただくと、満足度の高い仕上がりになります。",
    simultaneousWork: [],
    heroImage: IMG.fusuma,
    relatedServices: [
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["fusuma-replacement-price", "fusuma-design-guide"],
    tags: ["住宅", "襖", "張替え"],
  },
  {
    slug: "fusuma-replacement-02",
    title: "賃貸物件 退去後の襖張替え（複数枚）",
    category: "fusuma",
    targetType: "rental",
    location: "賃貸マンション",
    service: "襖張替え",
    challenge:
      "管理会社様より、退去後の賃貸マンションの襖張替えをご依頼。複数枚の襖が汚れと傷みで張替えが必要でした。次の入居者募集に向けて、清潔感のある標準的な仕様で整えたいとのことでした。",
    proposal:
      "賃貸物件として清潔感のある標準グレードの襖紙をご提案。複数枚をまとめて効率的に張り替える計画としました。次の入居者に好印象を与える、明るく清潔な仕様を選定しました。",
    workContent:
      "複数枚の襖紙をすべて剥がし、骨組みを点検したうえで新しい襖紙を張りました。建て付けも確認・調整し、スムーズに開閉できる状態に。清潔感のある仕上がりで、すぐに内見対応できる状態にしました。",
    materials: "標準グレードの襖紙（清潔感のある柄）",
    duration: "数日",
    cost: "枚数・グレードにより変動（現地確認後にご案内）",
    result:
      "汚れていた襖がすべて新しくなり、清潔感のある和室に仕上がります。畳・クロスの工事と合わせてご依頼いただくことで、効率よく原状回復を完了させることができます。スムーズな募集開始という効果が期待できます。",
    staffComment:
      "賃貸の襖張替えは、清潔感とコストのバランスが大切です。畳や他の工事とまとめてご依頼いただくと、効率よく原状回復できます。",
    simultaneousWork: ["畳表替え", "クロス張替え"],
    heroImage: IMG.fusuma,
    relatedServices: [
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
      { label: "賃貸の原状回復", href: "/restoration/rental" },
    ],
    relatedColumns: ["fusuma-replacement-price", "rental-restoration-checklist"],
    tags: ["賃貸", "襖", "原状回復"],
  },

  // ===== 障子張替え =====
  {
    slug: "shoji-replacement-01",
    title: "一般住宅 和室の障子張替え（強化紙）",
    category: "shoji",
    targetType: "house",
    location: "戸建住宅",
    service: "障子張替え",
    challenge:
      "戸建住宅の和室の障子が破れと黄ばみで傷んでいました。小さなお孫さんが来ると破れてしまうため、丈夫な障子紙にしたいとのご相談でした。",
    proposal:
      "破れにくい強化紙をご提案。普通紙より丈夫で長持ちするため、お孫さんが来ても安心です。和の風合いを保ちつつ、実用性を高める仕様を選定しました。",
    workContent:
      "既存の障子紙を剥がし、桟をきれいに清掃したうえで強化紙を張りました。たるみやシワが出ないよう丁寧に仕上げ、明るくすっきりとした和室に。丈夫な紙のため、日常使いでも長持ちします。",
    materials: "強化障子紙",
    duration: "1日",
    cost: "枚数により変動（現地確認後にご案内）",
    result:
      "破れと黄ばみで傷んでいた障子が一新され、和室が明るくなります。強化紙のため、お子様やお孫さんが来ても破れにくく、安心してご利用いただける仕上がりです。丈夫で長持ちする素材を使用しています。",
    staffComment:
      "お子様やお孫さんがいるご家庭には、破れにくい強化紙がおすすめです。和の風合いを保ちつつ、実用性も高められます。障子は張り替えるだけで部屋が見違えます。",
    simultaneousWork: [],
    heroImage: IMG.shoji,
    relatedServices: [
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["shoji-replacement-price", "shoji-paper-types"],
    tags: ["住宅", "障子", "強化紙"],
  },
  {
    slug: "shoji-replacement-02",
    title: "一般住宅 障子をプラスチック障子紙に張替え",
    category: "shoji",
    targetType: "house",
    location: "戸建住宅",
    service: "障子張替え（プラ障子）",
    challenge:
      "ペットを飼うご家庭から、障子がよく破れて困っているとのご相談。猫が障子に飛びついて破れてしまうため、丈夫でお手入れしやすい障子紙にしたいとのご希望でした。",
    proposal:
      "破れにくく水拭きもできるプラスチック障子紙をご提案。ペットがいるご家庭に最適で、お手入れも簡単です。和の見た目を保ちつつ、丈夫さと清掃性を両立する仕様を選定しました。",
    workContent:
      "既存の障子紙を剥がし、桟を清掃したうえでプラスチック障子紙を張りました。丈夫な素材のため、ペットによる破れに強い仕様に。水拭きできるため、汚れてもお手入れが簡単です。",
    materials: "プラスチック障子紙",
    duration: "1日",
    cost: "枚数により変動（現地確認後にご案内）",
    result:
      "ペットが飛びついても破れにくくなり、たびたびの張替えの手間が軽減される仕上がりです。水拭きできるため、お手入れも楽になります。丈夫なプラスチック障子紙で日常のストレスを大きく減らせます。",
    staffComment:
      "ペットがいるご家庭には、丈夫なプラスチック障子紙が本当におすすめです。破れにくく水拭きもできるので、ストレスが大きく減ります。",
    simultaneousWork: [],
    heroImage: IMG.shoji,
    relatedServices: [
      { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
    ],
    relatedColumns: ["shoji-paper-types", "tatami-for-pets"],
    tags: ["住宅", "障子", "ペット"],
  },

  // ===== 賃貸マンション 原状回復 =====
  {
    slug: "apartment-restoration-01",
    title: "賃貸マンション 和室一式の原状回復",
    category: "restoration",
    targetType: "rental",
    location: "賃貸マンション",
    service: "畳・クロス・床",
    challenge:
      "管理会社様より、退去後の賃貸マンション和室の原状回復をご依頼。畳・クロス・床のすべてに傷みがあり、まとめて整えて早く募集を再開したいとのことでした。",
    proposal:
      "畳の表替え、クロスの張替え、床の補修を一括でご提案。一社でまとめて施工することで工程を効率化し、空室期間を短縮する計画としました。次の入居者に好印象を与える清潔な仕様を選定しました。",
    workContent:
      "畳を表替えし、クロスを全面張替え、傷んだ床を補修しました。各工事のタイミングを調整して効率的に進行。室内清掃まで行い、すぐに内見対応できる清潔な状態に仕上げました。",
    materials: "国産い草／防汚クロス／床補修材",
    duration: "数日（一括施工）",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "和室一式が清潔に整い、すぐに募集を再開できる状態に仕上がります。まとめてご依頼いただくことで、別々に発注するより短期間・効率的に完了でき、空室期間の短縮という効果が期待できます。",
    staffComment:
      "原状回復は畳・クロス・床を一括で対応すると効率的です。窓口が一つになり、管理会社様の手間も減ります。空室期間の短縮を意識して段取りします。",
    simultaneousWork: ["クロス張替え", "床補修", "室内クリーニング"],
    heroImage: IMG.wallpaper,
    relatedServices: [
      { label: "賃貸の原状回復", href: "/restoration/rental" },
      { label: "管理会社向け", href: "/restoration/management-company" },
    ],
    relatedColumns: ["rental-restoration-checklist", "restoration-cost-guide"],
    tags: ["賃貸", "原状回復", "一括"],
  },
  {
    slug: "apartment-restoration-02",
    title: "賃貸マンション ペット可物件への転換リフォーム",
    category: "restoration",
    targetType: "rental",
    location: "賃貸マンション",
    service: "和紙畳・床張替え",
    challenge:
      "オーナー様より、空室が続く物件をペット可にして競争力を高めたいとのご相談。ペットに対応できるよう、傷・汚れ・臭いに強い内装に変更したいとのご希望でした。",
    proposal:
      "傷・汚れ・臭いに強い和紙畳と、耐傷性のある床材への変更をご提案。ペット可物件としての魅力を高め、入居者層を広げる計画としました。差別化により空室解消を図りました。",
    workContent:
      "和室の畳を和紙畳に変更し、傷みやすい箇所の床材を耐傷性のあるものに張り替えました。ペットによる傷・汚れに強い仕様に整え、ペット可物件として募集できる状態にしました。",
    materials: "和紙畳／耐傷性フロア材",
    duration: "数日",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "ペット可物件として募集できるようになり、入居者層が広がります。傷・汚れに強い仕様のため、長期的な維持管理もしやすくなります。物件の差別化による空室対策という効果が期待できます。",
    staffComment:
      "ペット可への転換は、空室対策として有効です。和紙畳や耐傷性の床材を使うことで、ペットによる損耗を抑えられます。物件の差別化につながります。",
    simultaneousWork: ["床張替え", "消臭クロス施工"],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "和紙畳", href: "/services/washi-tatami" },
      { label: "空室対策", href: "/business/vacancy-measures" },
    ],
    relatedColumns: ["vacancy-measures-tatami", "tatami-for-pets"],
    tags: ["賃貸", "ペット可", "空室対策"],
  },
  {
    slug: "apartment-restoration-03",
    title: "賃貸マンション 喫煙物件のクロス・畳一新",
    category: "restoration",
    targetType: "rental",
    location: "賃貸マンション",
    service: "クロス張替え・畳表替え",
    challenge:
      "管理会社様より、喫煙者が退去した物件の原状回復をご依頼。クロスのヤニ汚れと臭いがひどく、畳にも臭いが染み付いていました。臭いを取り除き、次の入居者を気持ちよく迎えたいとのことでした。",
    proposal:
      "クロスの全面張替えと畳の表替えをご提案。ヤニ汚れと臭いの染み付いた箇所を一新し、消臭効果のあるクロスを採用しました。臭い対策を重視した仕様で、清潔な空間への再生を図りました。",
    workContent:
      "ヤニで汚れたクロスをすべて剥がし、下地を処理したうえで消臭・防汚クロスを張りました。臭いの染み付いた畳は表替えで一新。室内全体の清掃と消臭処理を行い、臭いの気にならない清潔な状態に仕上げました。",
    materials: "消臭・防汚クロス／国産い草",
    duration: "数日",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "ヤニ汚れと臭いが解消され、清潔な空間に再生されます。消臭クロスの採用で臭い戻りも抑えられ、次の入居者を気持ちよく迎えられる仕上がりです。スムーズな募集再開につながる状態に整います。",
    staffComment:
      "喫煙物件は臭い対策が肝心です。クロスと畳を一新し、消臭仕様を選ぶことで臭いをしっかり抑えられます。臭いの染み付いた畳は表替えが効果的です。",
    simultaneousWork: ["室内消臭処理"],
    heroImage: IMG.wallpaper,
    relatedServices: [
      { label: "クロス張替え", href: "/interior/cross" },
      { label: "賃貸の原状回復", href: "/restoration/rental" },
    ],
    relatedColumns: ["restoration-cost-guide", "tatami-smell-guide"],
    tags: ["賃貸", "原状回復", "消臭"],
  },

  // ===== オフィス 原状回復 =====
  {
    slug: "office-restoration-01",
    title: "オフィス 退去時の原状回復（床・壁）",
    category: "restoration",
    targetType: "office",
    location: "オフィスビル",
    service: "床・壁の原状回復",
    challenge:
      "オフィス移転に伴う原状回復のご依頼。契約上の回復範囲に従い、床と壁を入居時の状態に戻す必要がありました。退去期限が厳格なため、計画的な施工が求められました。",
    proposal:
      "契約の回復範囲を確認したうえで、床・壁の原状回復をご提案。退去期限から逆算した施工スケジュールで、確実に間に合わせる計画としました。効率的な工程で期限内完了を図りました。",
    workContent:
      "傷んだ床材を張り替え、壁のクロスを張替え。契約で定められた回復範囲に従い、入居時の状態に整えました。退去期限を意識した工程管理で、計画通りに完了させました。",
    materials: "オフィス用床材／クロス",
    duration: "計画施工（退去期限内）",
    cost: "面積により変動（現地確認後にご案内）",
    result:
      "契約上の回復範囲を満たし、退去期限内に原状回復を完了できる仕上がりです。逆算した計画施工により、期限が厳しい案件でもスムーズな退去に対応します。",
    staffComment:
      "オフィスの原状回復は退去期限が厳格なことが多いので、計画性が重要です。契約の回復範囲を確認し、期限内に確実に完了させる段取りを大切にしています。",
    simultaneousWork: ["クロス張替え"],
    heroImage: IMG.floorRepair,
    relatedServices: [
      { label: "原状回復", href: "/restoration" },
      { label: "床工事", href: "/interior/floor" },
    ],
    relatedColumns: ["restoration-cost-guide", "store-restoration-guide"],
    tags: ["オフィス", "原状回復", "床"],
  },
  {
    slug: "office-restoration-02",
    title: "オフィス 和室応接室の畳・内装原状回復",
    category: "restoration",
    targetType: "office",
    location: "オフィス・応接室",
    service: "畳・クロス原状回復",
    challenge:
      "和室の応接室を備えるオフィスの退去に伴い、畳と内装の原状回復をご依頼。畳の傷みとクロスの汚れがあり、まとめて対応してほしいとのことでした。",
    proposal:
      "畳の表替えとクロスの張替えを一括でご提案。和室の応接室を入居時の状態に整える計画としました。一社でまとめて対応することで、退去手続きをスムーズにする段取りとしました。",
    workContent:
      "応接室の畳を表替えし、クロスを張替え。和室部分を清潔に整え、契約の回復範囲を満たしました。畳と内装をまとめて施工し、効率的に原状回復を完了させました。",
    materials: "国産い草／クロス",
    duration: "数日",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "和室応接室が清潔に整い、原状回復を完了できる仕上がりです。畳と内装をまとめてご依頼いただくことで、効率的な施工が可能になります。",
    staffComment:
      "和室を備えるオフィスの原状回復では、畳と内装をまとめて対応すると効率的です。一社で完結できるので、退去手続きもスムーズになります。",
    simultaneousWork: ["クロス張替え"],
    heroImage: IMG.traditional,
    relatedServices: [
      { label: "原状回復", href: "/restoration" },
      { label: "畳表替え", href: "/services/tatami-omotegae" },
    ],
    relatedColumns: ["restoration-cost-guide", "interior-and-tatami-package"],
    tags: ["オフィス", "原状回復", "畳"],
  },

  // ===== 店舗内装 =====
  {
    slug: "store-interior-01",
    title: "和食店 店舗内装の和空間リニューアル",
    category: "interior",
    targetType: "store",
    location: "飲食店（和食）",
    service: "店舗内装工事",
    challenge:
      "和食店から、店舗の内装を和の趣あふれる空間にリニューアルしたいとのご相談。畳・壁・建具を含めて、統一感のある上質な和空間を目指していました。",
    proposal:
      "畳・壁・建具を含めた店舗内装の一括リニューアルをご提案。和の趣と店舗運営に適した実用性を両立する仕様を選定しました。営業への影響を抑える施工計画も合わせてご案内しました。",
    workContent:
      "座敷の畳を機能性畳で整え、壁のクロスや建具も和の雰囲気に合わせて施工しました。店舗全体に統一感のある和空間を演出。営業時間外に施工を進め、影響を最小限に抑えました。",
    materials: "機能性畳／和風クロス／建具",
    duration: "計画施工（営業時間外）",
    cost: "規模により変動（現地確認後にご案内）",
    result:
      "店舗が和の趣あふれる上質な空間に生まれ変わります。畳から内装まで一社で対応するため、統一感のある仕上がりになります。お客様に好印象を与える和空間という効果が期待できます。",
    staffComment:
      "店舗の和空間づくりは、畳・壁・建具のトーンを合わせることが大切です。一社でまとめて対応することで、統一感のある仕上がりになります。営業への影響にも配慮します。",
    simultaneousWork: ["畳新調", "クロス張替え", "建具工事"],
    heroImage: IMG.storeWorkers,
    relatedServices: [
      { label: "店舗内装", href: "/interior/store-interior" },
      { label: "店舗向け", href: "/business/store" },
    ],
    relatedColumns: ["store-japanese-space", "interior-and-tatami-package"],
    tags: ["店舗", "内装", "和空間"],
  },
  {
    slug: "store-interior-02",
    title: "店舗 小上がり新設と畳コーナー造作",
    category: "interior",
    targetType: "store",
    location: "飲食店",
    service: "小上がり造作・畳",
    challenge:
      "店舗に新たに小上がりの畳コーナーを設けたいとのご相談。お客様がくつろげる和の空間を作り、客席のバリエーションを増やしたいとのご希望でした。",
    proposal:
      "小上がりの造作と畳の設置を一括でご提案。店舗の雰囲気に合うデザインで、くつろげる和の畳コーナーを計画しました。清掃性を考慮し、機能性畳を採用する仕様としました。",
    workContent:
      "小上がりの段差を造作し、その上に機能性畳を敷き込みました。店舗の雰囲気に合わせたデザインで、お客様がくつろげる和の空間を新設。清掃しやすい仕様で店舗運営にも配慮しました。",
    materials: "機能性畳／造作材",
    duration: "計画施工",
    cost: "規模により変動（現地確認後にご案内）",
    result:
      "くつろげる小上がりの畳コーナーが新設され、客席のバリエーションが増えます。和のくつろぎを加えた店舗の魅力向上という効果が期待できる仕上がりです。",
    staffComment:
      "小上がりの畳コーナーは、店舗に和のくつろぎを加えられます。造作から畳まで一社で対応できるので、デザインと実用性を両立できます。",
    simultaneousWork: ["造作工事"],
    heroImage: IMG.storeWorkers,
    relatedServices: [
      { label: "店舗内装", href: "/interior/store-interior" },
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
    ],
    relatedColumns: ["store-japanese-space", "modern-japanese-room"],
    tags: ["店舗", "小上がり", "畳コーナー"],
  },

  // ===== 空室対策リノベーション =====
  {
    slug: "vacant-room-renovation-01",
    title: "賃貸 空室対策の和室モダンリノベーション",
    category: "interior",
    targetType: "rental",
    location: "賃貸マンション",
    service: "和室リノベーション",
    challenge:
      "オーナー様より、長期間空室が続く和室物件をなんとかしたいとのご相談。ありきたりな内装で内見につながらず、差別化が必要でした。",
    proposal:
      "縁なし畳やカラー畳を使ったモダンな和室へのリノベーションをご提案。他物件と差別化し、内見からの成約率を高める計画としました。コストを抑えつつ印象を大きく変える仕様を選定しました。",
    workContent:
      "和室の畳を縁なしのカラー畳に変更し、クロスも明るい色味に張り替えました。モダンで洗練された印象に一新し、他物件と差別化。コストを抑えながら、内見で目を引く空間に仕上げました。",
    materials: "縁なしカラー畳／アクセントクロス",
    duration: "数日",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "ありきたりだった和室が、モダンで魅力的な空間に生まれ変わります。内見からの反応改善と空室解消という効果が期待できます。縁なし畳やカラー畳を活用した差別化で、物件の競争力が高まります。",
    staffComment:
      "空室対策は差別化が鍵です。縁なし畳やカラー畳でモダンな印象にすると、内見で目を引きます。コストを抑えつつ効果を出す提案を心がけています。",
    simultaneousWork: ["クロス張替え"],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "空室対策", href: "/business/vacancy-measures" },
      { label: "カラー畳", href: "/services/color-tatami" },
    ],
    relatedColumns: ["vacancy-measures-tatami", "color-tatami-guide"],
    tags: ["賃貸", "空室対策", "リノベーション"],
  },
  {
    slug: "vacant-room-renovation-02",
    title: "賃貸 和室を洋室化して空室対策",
    category: "interior",
    targetType: "rental",
    location: "賃貸マンション",
    service: "和室の洋室化",
    challenge:
      "オーナー様より、和室の需要が低く空室が続くため、洋室化して入居者層を広げたいとのご相談。フローリングの洋室にして、より多くの入居希望者にアピールしたいとのことでした。",
    proposal:
      "和室を洋室化するリフォームをご提案。畳をフローリング（またはフロアタイル）に変更し、襖・壁を洋風に整える計画としました。入居者層を広げ、空室解消を図る仕様を選定しました。",
    workContent:
      "畳を撤去して下地を調整し、フローリングを施工しました。襖を洋風の建具に変更し、壁のクロスも洋室に合わせて張替え。和室を機能的でモダンな洋室に転換しました。",
    materials: "フローリング／洋風建具／クロス",
    duration: "計画施工",
    cost: "面積により変動（現地確認後にご案内）",
    result:
      "和室が使い勝手の良い洋室に生まれ変わり、入居者層が広がります。内見の反応改善と空室解消という効果が期待できます。",
    staffComment:
      "和室の需要が低いエリアでは、洋室化が有効な空室対策になります。畳から床・建具・壁まで一社で対応できるので、スムーズに進められます。",
    simultaneousWork: ["床張替え", "建具工事", "クロス張替え"],
    heroImage: IMG.ldk,
    relatedServices: [
      { label: "和室リフォーム", href: "/interior/house-renovation" },
      { label: "床工事", href: "/interior/floor" },
    ],
    relatedColumns: ["japanese-room-renovation", "vacancy-measures-tatami"],
    tags: ["賃貸", "洋室化", "空室対策"],
  },
  {
    slug: "vacant-room-renovation-03",
    title: "賃貸戸建 全室リフレッシュで再募集",
    category: "interior",
    targetType: "rental",
    location: "賃貸戸建",
    service: "畳・クロス・床一新",
    challenge:
      "管理会社様より、空室が続く賃貸戸建を全室リフレッシュして再募集したいとのご相談。複数の部屋の畳・クロス・床をまとめて整え、印象を一新したいとのことでした。",
    proposal:
      "全室の畳・クロス・床をまとめて一新するプランをご提案。一社でまとめて施工することで効率化し、コストと工期を最適化しました。明るく清潔な仕様で、再募集での競争力を高める計画としました。",
    workContent:
      "複数の部屋の畳を表替えまたは新調し、クロスを全面張替え、傷んだ床を補修・張替えしました。各工事を効率的に進行し、戸建全体を明るく清潔な空間に一新。すぐに募集を開始できる状態にしました。",
    materials: "国産い草／量産クロス／床材",
    duration: "計画施工（全室一括）",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "戸建全体が明るく清潔に生まれ変わり、再募集での印象が改善します。まとめて一社にご依頼いただくことで、効率的に短期間で完了でき、空室解消という効果が期待できます。",
    staffComment:
      "全室リフレッシュは、まとめて一社に任せると効率的です。畳・クロス・床をワンストップで対応し、コストと工期を最適化します。再募集での印象アップに貢献します。",
    simultaneousWork: ["クロス張替え", "床張替え"],
    heroImage: IMG.ldk,
    relatedServices: [
      { label: "内装工事", href: "/interior" },
      { label: "賃貸の原状回復", href: "/restoration/rental" },
    ],
    relatedColumns: ["vacancy-measures-tatami", "interior-and-tatami-package"],
    tags: ["賃貸", "全室", "再募集"],
  },

  // ===== 分譲マンション =====
  {
    slug: "mansion-tatami-01",
    title: "分譲マンション 和室の和紙畳＋フロアタイル",
    category: "tatami",
    targetType: "house",
    location: "分譲マンション",
    service: "和紙畳・フロアタイル",
    challenge:
      "リノベーション中の分譲マンションで、和室に機能性畳を、リビングにフロアタイルを施工したいとのご相談。ペットと暮らすため、清潔で長持ちする素材を希望されていました。",
    proposal:
      "和室には傷・汚れに強い和紙畳、リビングには耐久性の高いフロアタイルをご提案。ペットとの暮らしに適した、清潔で長持ちする組み合わせを選定しました。空間に調和する色味で統一感を出しました。",
    workContent:
      "和室の畳を和紙畳に変更し、リビングにフロアタイルを施工しました。ペットによる傷・汚れに強い仕様で、清掃のしやすさも重視。空間全体のトーンを合わせ、統一感のある住まいに仕上げました。",
    materials: "和紙畳／フロアタイル",
    duration: "計画施工",
    cost: "面積・枚数により変動（現地確認後にご案内）",
    result:
      "ペットと暮らしやすい、清潔で長持ちする住まいに仕上がります。和紙畳とフロアタイルの組み合わせで、傷・汚れを気にせず過ごせる空間になります。",
    staffComment:
      "ペットとの暮らしには、和紙畳とフロアタイルの組み合わせが好相性です。どちらも傷・汚れに強く清掃しやすいので、長く快適に使えます。空間のトーンも合わせて提案します。",
    simultaneousWork: ["フロアタイル施工"],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "和紙畳", href: "/services/washi-tatami" },
      { label: "フロアタイル", href: "/interior/floor-tile" },
    ],
    relatedColumns: ["washi-tatami-merit", "tatami-for-pets"],
    tags: ["住宅", "和紙畳", "フロアタイル"],
  },
  {
    slug: "mansion-tatami-02",
    title: "分譲マンション リビング横の畳コーナー新設",
    category: "tatami",
    targetType: "house",
    location: "分譲マンション",
    service: "縁なし畳・畳コーナー",
    challenge:
      "分譲マンションのリビングの一角に、くつろげる畳コーナーを設けたいとのご相談。フローリングのリビングに馴染む、モダンな畳スペースを希望されていました。",
    proposal:
      "縁なし畳でリビングに馴染む畳コーナーをご提案。床色に合わせたカラーの和紙畳を選定し、市松敷きで陰影の美しさを演出する計画としました。リビングと調和するモダンな仕上がりを目指しました。",
    workContent:
      "リビングの一角に縁なしの和紙畳を市松敷きで設置しました。床色に合わせたカラーで、フローリングと自然に調和。陰影の美しい、くつろげるモダンな畳コーナーに仕上げました。",
    materials: "和紙畳（縁なし・カラー）／市松敷き",
    duration: "計画施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "リビングに馴染むモダンな畳コーナーが完成し、家族のくつろぎスペースになります。フローリングとの調和もとれ、リビング全体が上質な印象になる仕上がりです。",
    staffComment:
      "リビング横の畳コーナーは人気です。縁なしの和紙畳を床色に合わせると、洋室にも自然に馴染みます。陰影の美しい市松敷きでモダンに仕上げます。",
    simultaneousWork: [],
    heroImage: IMG.minimal,
    relatedServices: [
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
      { label: "カラー畳", href: "/services/color-tatami" },
    ],
    relatedColumns: ["modern-japanese-room", "herinashi-tatami-guide"],
    tags: ["住宅", "畳コーナー", "縁なし畳"],
  },

  // ===== 縁なし畳新調 =====
  {
    slug: "herinashi-installation-01",
    title: "新築住宅 和室に縁なし畳を新調",
    category: "tatami",
    targetType: "house",
    location: "新築戸建",
    service: "縁なし畳新調",
    challenge:
      "新築住宅の和室に、モダンな縁なし畳を入れたいとのご相談。家全体のモダンなテイストに合う、洗練された和室を希望されていました。色や敷き方の相談をしたいとのご希望でした。",
    proposal:
      "縁なし畳の市松敷きで、新築に合うモダンな和室をご提案。家全体のテイストに合わせたカラーを一緒に選定しました。色あせに強い和紙畳を採用し、長く美しさを保てる仕様としました。",
    workContent:
      "和室に縁なしの和紙畳を新調し、市松状に敷き込みました。家全体のテイストに合わせた色味で、洗練された和室に。陰影の美しさが映える配置で、モダンで上質な空間に仕上げました。",
    materials: "和紙畳（縁なし）／市松敷き",
    duration: "計画施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "新築の家全体のテイストに調和した、モダンで洗練された和室に仕上がります。色あせに強い素材を使用しているため、長く美しさを保てます。",
    staffComment:
      "新築の和室は縁なし畳で一気にモダンになります。家全体のテイストに合わせて色を選ぶと、統一感のある仕上がりに。色や敷き方のご相談も歓迎します。",
    simultaneousWork: [],
    heroImage: IMG.herinashi,
    relatedServices: [
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
      { label: "カラー畳", href: "/services/color-tatami" },
    ],
    relatedColumns: ["herinashi-tatami-guide", "color-tatami-guide"],
    tags: ["住宅", "新築", "縁なし畳"],
  },

  // ===== 和紙畳 =====
  {
    slug: "washi-tatami-01",
    title: "一般住宅 和室を和紙畳で一新（高齢の家族向け）",
    category: "tatami",
    targetType: "house",
    location: "戸建住宅",
    service: "和紙畳・畳新調",
    challenge:
      "高齢のご家族と暮らすお客様から、和室を安全で手入れしやすい畳にしたいとのご相談。踏み心地に沈みが出ており、つまずきが心配とのことでした。お手入れの負担も軽減したいとのご希望でした。",
    proposal:
      "畳床のへたりがあったため新調をご提案し、表面には手入れしやすい和紙畳を採用。沈みを解消して安全性を高めるとともに、お手入れの負担を軽減する仕様としました。高齢のご家族が安心して使える和室を目指しました。",
    workContent:
      "既存の畳を撤去し、畳床から新調。沈みのない安定した踏み心地に整えました。表面には色あせ・汚れに強い和紙畳を採用し、お手入れしやすい仕様に。高齢のご家族が安全に過ごせる和室に仕上げました。",
    materials: "畳床新調＋和紙畳",
    duration: "計画施工",
    cost: "枚数・素材により変動（現地確認後にご案内）",
    result:
      "沈みが解消されてつまずきの心配がなくなり、安全な和室に仕上がります。和紙畳のため掃除も楽になり、お手入れの負担が軽減されます。高齢のご家族が安心してお使いいただける空間になります。",
    staffComment:
      "高齢のご家族がいる場合、沈みや段差はつまずきの原因になるので早めの対処が安心です。和紙畳ならお手入れも楽になります。安全性とメンテナンス性を両立した提案を心がけています。",
    simultaneousWork: [],
    heroImage: IMG.traditional,
    relatedServices: [
      { label: "和紙畳", href: "/services/washi-tatami" },
      { label: "畳新調", href: "/services/tatami-shinchou" },
    ],
    relatedColumns: ["washi-tatami-merit", "tatami-for-elderly"],
    tags: ["住宅", "和紙畳", "高齢者"],
  },
];

export const WORKS_DETAIL: WorkDetail[] = SEEDS.map((s) => ({
  ...s,
  categoryLabel: CATEGORY_LABELS[s.category] ?? s.category,
  targetLabel: TARGET_LABELS[s.targetType] ?? s.targetType,
}));

export const WORK_CATEGORIES = [
  { value: "all", label: "すべて" },
  { value: "tatami", label: "畳工事" },
  { value: "restoration", label: "原状回復" },
  { value: "interior", label: "内装工事" },
  { value: "fusuma", label: "襖張替え" },
  { value: "shoji", label: "障子張替え" },
];

export function getWorkBySlug(slug: string): WorkDetail | undefined {
  return WORKS_DETAIL.find((w) => w.slug === slug);
}
