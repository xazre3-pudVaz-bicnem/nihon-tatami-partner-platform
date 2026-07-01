import Link from "next/link";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { AREA_SERVICES, type Prefecture, type City } from "@/data/areas";

type Bc = { label: string; href?: string };
type Props = { pref: Prefecture; city?: City; service?: { slug: string; name: string }; breadcrumbs: Bc[] };

type ServiceContent = {
  desc: string;
  detail: string;
  priceRows: { label: string; price: string; note: string }[];
  timing: string[];
  materials?: { name: string; feature: string }[];
  steps: { title: string; body: string }[];
  faqExtra: { q: string; a: string }[];
};

const SM: Record<string, ServiceContent> = {
  tatami: {
    desc: "畳の表替え・裏返し・新調・縁なし畳・和紙畳・樹脂畳など、畳に関するすべての工事に対応します。",
    detail: "畳の状態により、表面のイ草だけを交換する「表替え」、使用2〜3年で裏面を活用する「裏返し」、畳床ごと交換する「新調」を使い分けます。カビ・ダニ対策には和紙畳・樹脂畳への素材変更も承ります。一般住宅から賃貸物件・旅館・寺社・店舗まで、幅広い用途に対応します。",
    priceRows: [
      { label: "畳 裏返し", price: "2,500円〜/枚", note: "使用2〜3年、表面に損傷がない場合" },
      { label: "畳 表替え（い草・一般品）", price: "4,500円〜/枚", note: "畳床が健全な場合" },
      { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "ダニ対策・傷に強い素材" },
      { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・水拭き可能タイプ" },
      { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "床ごと交換。サイズにより変動" },
      { label: "畳 新調（わら床）", price: "20,000円〜/枚", note: "本格的な畳床。旅館・寺社向け" },
    ],
    timing: [
      "畳表がささくれてきた・繊維がほつれてきた",
      "踏み込むと沈む・へたりを感じる",
      "カビや臭いが気になる",
      "畳の色が変色・日焼けした",
      "退去後の清潔な状態への回復が必要",
      "ペット・子どもに配慮した素材に変更したい",
      "旅館・店舗の印象を整備したい",
      "寺社の行事前に整備が必要",
    ],
    materials: [
      { name: "い草（一般品）", feature: "最もスタンダード。自然な香りと調湿効果。住宅・旅館向け" },
      { name: "い草（上質品）", feature: "国産い草。太く丈夫。格式ある和室・旅館の客室向け" },
      { name: "和紙畳", feature: "ダニが繁殖しにくく傷に強い。アレルギー対応・ペット・子ども部屋向け" },
      { name: "樹脂畳", feature: "完全防水・水拭き可能。店舗・飲食店・ペット対応向け" },
      { name: "縁なし畳（琉球畳）", feature: "正方形の半畳サイズ。モダンな和室・リビング和室向け" },
    ],
    steps: [
      { title: "お問い合わせ", body: "フォームまたはお電話でご連絡ください。畳の状態・枚数・ご希望の素材など、わかる範囲でお知らせいただくとスムーズです。" },
      { title: "現地確認・お見積もり", body: "ご希望日に現地をご訪問し、畳の状態・サイズ・枚数を確認します。その場で施工方法と費用をご提示します。無料です。" },
      { title: "施工日の調整", body: "お客様のご都合に合わせて施工日を設定します。複数部屋・法人案件は日程調整の上で計画を立てます。" },
      { title: "施工", body: "古い畳を撤去し、新しい素材を張った畳を設置します。施工中はできるだけ生活への影響を最小限にします。" },
      { title: "確認・引き渡し", body: "仕上がりを確認のうえ、お客様に引き渡します。管理会社様・法人様には施工写真付き報告書を提出します。" },
    ],
    faqExtra: [
      { q: "表替えと新調はどちらがよいですか？", a: "畳床（土台）が健全なら表替えで十分です。踏み込むと沈む感触がある場合は床まで劣化しているため新調が必要です。現地確認後に適切な方法をご案内します。" },
      { q: "和紙畳と樹脂畳の違いは？", a: "和紙畳は天然素材に近い風合いでダニが繁殖しにくく、ペット・アレルギー対応に向いています。樹脂畳は完全防水で水拭き可能、飲食店・ペット対応向けです。" },
      { q: "畳は何年に一度替えるものですか？", a: "裏返しは2〜3年、表替えは5〜6年、新調は10〜15年が目安です。使用頻度・素材・環境により変動します。" },
      { q: "畳のカビはどうすれば取れますか？", a: "表面のみのカビは乾拭きや消毒で対応できる場合がありますが、深部に浸透している場合は表替えまたは新調が必要です。再発する場合は和紙・樹脂への素材変更もご検討ください。" },
    ],
  },
  "tatami-omotegae": {
    desc: "い草・和紙・樹脂など素材を選んで畳表のみを新しくする「表替え」工事に対応します。",
    detail: "表替えは畳床（土台）はそのままに、畳表（ゴザ面）だけを新しくする工事です。費用を抑えながら畳を清潔・きれいな状態に戻せます。素材はい草・和紙・樹脂の中から選べます。畳の状態が「表面はくすんでいるが、床はしっかりしている」場合に最適です。",
    priceRows: [
      { label: "い草（一般品）", price: "4,500円〜/枚", note: "コスト重視。国産・輸入品で変動" },
      { label: "い草（中〜上質品）", price: "6,000円〜/枚", note: "太さ・産地・等級により変動" },
      { label: "和紙畳", price: "6,500円〜/枚", note: "カラー・グレードにより変動" },
      { label: "樹脂畳", price: "7,500円〜/枚", note: "防水・耐久タイプ" },
    ],
    timing: [
      "畳の色がくすんできた・日焼けした",
      "畳表のささくれ・毛羽立ちが気になる",
      "5〜6年以上交換していない",
      "入居者が入れ替わった（賃貸物件）",
      "旅館・客室を整備したい",
      "アレルギー対策・ペット対応で素材を変えたい",
    ],
    materials: [
      { name: "い草（一般品）", feature: "コストを抑えながら清潔感を回復できる。短期間での交換に向く" },
      { name: "い草（上質品）", feature: "太く丈夫なイ草で長持ち。旅館・格式ある和室向け" },
      { name: "和紙畳", feature: "ダニが繁殖しにくく傷に強い。子ども部屋・ペット対応向け" },
      { name: "樹脂畳", feature: "水拭き可能・防水。飲食店・濡れやすい場所向け" },
    ],
    steps: [
      { title: "お問い合わせ", body: "フォームまたはお電話でご連絡ください。畳の状態・枚数・ご希望素材などお知らせください。" },
      { title: "現地確認・素材選択", body: "現地で畳の状態・枚数を確認し、素材サンプルをもとに表替え素材をお選びいただきます。お見積もりは無料です。" },
      { title: "施工日調整", body: "ご都合に合わせて施工日を設定します。" },
      { title: "表替え施工", body: "古い畳表を剥がし、新しい素材を張った畳表に交換します。基本的に当日完成です。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し、お客様に引き渡します。" },
    ],
    faqExtra: [
      { q: "表替えで床のへたりは改善しますか？", a: "いいえ。表替えは畳表（ゴザ面）のみを交換する工事です。床のへたり・沈みがある場合は新調が必要です。" },
      { q: "い草と和紙畳、どちらがいいですか？", a: "い草は自然な香りと調湿効果があり住宅の和室に向いています。和紙畳はダニが繁殖しにくく傷に強いため、アレルギー対策・ペット対応に向いています。" },
      { q: "表替えの耐用年数はどのくらいですか？", a: "い草で5〜8年、和紙・樹脂で8〜12年程度が目安です。使用頻度・湿度管理により変動します。" },
    ],
  },
  "tatami-shinchou": {
    desc: "畳床ごと新しくする「畳新調」工事に対応します。古くなった畳を根本から一新します。",
    detail: "新調は畳表・畳床（土台）・縁すべてを新しくする工事です。表替えでは対応できないほどの劣化（沈み・カビ・臭い・床の腐食）がある場合に適しています。建材床・わら床の選択が可能です。",
    priceRows: [
      { label: "新調（建材床＋い草）", price: "15,000円〜/枚", note: "一般的な住宅向け。軽量で扱いやすい" },
      { label: "新調（建材床＋和紙）", price: "18,000円〜/枚", note: "ダニ対策・アレルギー対応向け" },
      { label: "新調（わら床＋い草）", price: "20,000円〜/枚", note: "本格的な畳。旅館・寺社向け" },
      { label: "縁なし畳（琉球畳）新調", price: "20,000円〜/枚", note: "半畳サイズ。モダン和室向け" },
    ],
    timing: [
      "踏み込むと沈む・スポンジのような感触がある",
      "畳の端が持ち上がっている（反り）",
      "カビ・臭いが表替えで取り切れない",
      "10年以上交換していない",
      "和室をモダンにリノベーションしたい",
      "旅館・寺社の本格的な整備をしたい",
    ],
    materials: [
      { name: "建材床（スタイロ・インシュレーション）", feature: "軽量・断熱・防虫。現代住宅に最適な標準タイプ" },
      { name: "わら床", feature: "保温・調湿効果が高い本格畳床。旅館・寺社向け" },
      { name: "縁なし（半畳・琉球畳）", feature: "モダンな和室・リビング和室向け" },
    ],
    steps: [
      { title: "お問い合わせ", body: "フォームまたはお電話でご連絡ください。現在の畳の状態・希望の仕上がりをお知らせください。" },
      { title: "現地確認・床の状態確認", body: "現地で畳床の劣化状態・サイズを計測。新調が必要かどうかを含め最適な方法をご提案します。" },
      { title: "素材・仕様の確定", body: "床材（建材床・わら床）・表材（い草・和紙・樹脂）・縁の有無をお選びいただきます。" },
      { title: "製作・施工", body: "畳は採寸後に製作されます。施工日に設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "新調と表替えはどちらがいいですか？", a: "畳床が健全なら表替えで十分です。踏み込むと沈む感触がある場合は床まで劣化しているため新調が必要です。現地確認後に判断します。" },
      { q: "新調の場合、部屋に合わせたサイズに対応できますか？", a: "はい。現地でサイズを採寸し、部屋のサイズに合わせて製作します。" },
      { q: "新調した畳の寿命はどのくらいですか？", a: "畳床は10〜20年、畳表は素材により5〜12年が目安です。定期的な表替えで長期間使用できます。" },
    ],
  },
  "tatami-uragaeshi": {
    desc: "使用2〜3年の畳を裏返して使う「裏返し」工事に対応します。費用を抑えた畳のリフレッシュ方法です。",
    detail: "裏返しは、畳表（ゴザ面）の裏面がまだきれいな状態の場合に使用できる工事です。表替えより費用を抑えながら畳を清潔な状態に戻せます。使用期間2〜3年、床が健全なことが条件です。",
    priceRows: [
      { label: "畳 裏返し", price: "2,500円〜/枚", note: "使用2〜3年・表面に損傷がない場合のみ" },
    ],
    timing: [
      "畳を使い始めて2〜3年が経過した",
      "表面はくすんできたが床は健全",
      "費用を抑えて畳をリフレッシュしたい",
    ],
    steps: [
      { title: "お問い合わせ", body: "畳の使用年数・状態をお知らせください。裏返しが適切かどうか判断します。" },
      { title: "現地確認", body: "現地で畳の状態・使用年数・裏面の状態を確認します。" },
      { title: "施工日調整", body: "ご都合に合わせて施工日を設定します。" },
      { title: "裏返し施工", body: "畳を一枚ずつ取り出し、清掃・乾燥後に裏返して設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "裏返しができない場合はどうなりますか？", a: "裏面に損傷・カビがある場合や使用年数が長い場合は裏返しができません。その場合は表替えをご提案します。" },
      { q: "裏返し後は何年使えますか？", a: "裏返し後は2〜3年が目安です。次は表替えをお勧めします。" },
    ],
  },
  "herinashi-tatami": {
    desc: "縁なし畳（琉球畳・半畳畳）の張替え・新調に対応します。モダンな和室・リビング和室の整備に。",
    detail: "縁なし畳は正方形の半畳サイズで、縁（布）がないのが特徴です。い草・和紙・樹脂の素材を選べます。モダンな和室・リビング和室・和モダンインテリアに多く使われます。",
    priceRows: [
      { label: "縁なし畳 表替え（い草）", price: "7,000円〜/枚", note: "半畳サイズ" },
      { label: "縁なし畳 表替え（和紙）", price: "8,000円〜/枚", note: "カラー・グレードにより変動" },
      { label: "縁なし畳 新調（建材床）", price: "18,000円〜/枚", note: "床込み。半畳サイズ" },
    ],
    timing: [
      "既存の縁なし畳が古くなった",
      "和室をモダンにリノベーションしたい",
      "リビング和室を整備したい",
    ],
    materials: [
      { name: "い草（縁なし）", feature: "自然な風合い。琉球畳の定番素材" },
      { name: "和紙（縁なし）", feature: "カラーバリエーションが豊富。モダンな和室向け" },
      { name: "樹脂（縁なし）", feature: "防水・耐久性が高い。ペット対応向け" },
    ],
    steps: [
      { title: "お問い合わせ", body: "現在の畳の枚数・状態・ご希望をお知らせください。" },
      { title: "現地確認・素材選択", body: "現地確認後、素材・カラーをお選びいただきます。" },
      { title: "施工", body: "製作後、現地に設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "縁なし畳の素材は何が選べますか？", a: "い草・和紙・樹脂の中から選べます。和紙はカラーバリエーションが豊富です。樹脂は完全防水です。" },
      { q: "通常の畳から縁なし畳への変更はできますか？", a: "対応可能です。部屋のサイズに合わせて採寸・製作します。現地確認後にご提案します。" },
    ],
  },
  "washi-tatami": {
    desc: "和紙素材の畳（表替え・新調）に対応します。ダニが繁殖しにくく傷に強い特徴があります。",
    detail: "和紙畳はい草の代わりに和紙（またはポリプロピレン含有和紙）を使用した畳表です。ダニが繁殖しにくい・傷に強い・カラーバリエーションが豊富という特徴があります。アレルギー対策・ペット対応・子ども部屋に多く選ばれます。",
    priceRows: [
      { label: "和紙畳 表替え", price: "6,500円〜/枚", note: "カラー・グレードにより変動" },
      { label: "和紙畳 表替え（縁なし）", price: "8,000円〜/枚", note: "半畳サイズ" },
      { label: "和紙畳 新調", price: "18,000円〜/枚", note: "床込み" },
    ],
    timing: [
      "アレルギー・ダニ対策をしたい",
      "ペットが過ごす部屋の畳を傷に強い素材に変えたい",
      "子ども部屋を清潔に保ちたい",
      "モダンな和室のカラー統一をしたい",
    ],
    materials: [
      { name: "ダイケン和紙（目積）", feature: "国産和紙畳の代表格。カラーバリエーションが豊富" },
      { name: "ダイケン和紙（市松）", feature: "市松模様が特徴的。おしゃれな和室向け" },
    ],
    steps: [
      { title: "お問い合わせ", body: "ご希望の素材・カラー・枚数をお知らせください。" },
      { title: "現地確認・素材確認", body: "サンプルをご覧いただきカラー・素材をお選びいただきます。" },
      { title: "施工", body: "和紙畳を設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "和紙畳はい草より丈夫ですか？", a: "はい。和紙畳はい草より傷に強く、ダニが繁殖しにくいとされています。ただしい草の自然な香りはありません。" },
      { q: "和紙畳のカラーは何種類ありますか？", a: "メーカーにより異なりますが、20〜40色以上のカラーバリエーションがあります。" },
    ],
  },
  "resin-tatami": {
    desc: "樹脂（ポリプロピレン）素材の畳（表替え・新調）に対応します。完全防水で水拭き可能です。",
    detail: "樹脂畳はポリプロピレン素材の畳表を使用した畳です。完全防水・水拭き可能・ダニが繁殖しにくい特徴があります。飲食店・ペット対応・水気のある場所に最適です。",
    priceRows: [
      { label: "樹脂畳 表替え", price: "7,500円〜/枚", note: "グレードにより変動" },
      { label: "樹脂畳 新調", price: "20,000円〜/枚", note: "床込み" },
    ],
    timing: [
      "飲食店・店舗の座敷を耐久性の高い素材にしたい",
      "ペットが粗相しやすい部屋の畳を変えたい",
      "水気のある場所の畳を耐水素材に変えたい",
    ],
    steps: [
      { title: "お問い合わせ", body: "ご希望の素材・用途・枚数をお知らせください。" },
      { title: "現地確認", body: "用途・環境を確認し適切な素材をご提案します。" },
      { title: "施工", body: "樹脂畳を設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "樹脂畳の手入れ方法は？", a: "水拭き可能です。汚れが付いてもふき取りやすいのが特徴です。" },
      { q: "樹脂畳にい草の香りはありますか？", a: "いいえ。樹脂畳にい草の香りはありません。耐久性・衛生面を重視する場合に選ばれます。" },
    ],
  },
  fusuma: {
    desc: "ふすまの張替えに対応します。和室の間仕切り・押し入れ・収納のふすまを清潔・きれいに。",
    detail: "ふすまの張替えは、表面の紙・布を新しくする工事です。劣化・破れ・汚れが目立つ場合や、退去後の整備・内覧前の印象改善に行います。柄・素材を選ぶことができます。",
    priceRows: [
      { label: "ふすま 張替え（量産品）", price: "3,000円〜/枚", note: "シンプルな白・模様入り" },
      { label: "ふすま 張替え（中〜上質紙）", price: "5,000円〜/枚", note: "和柄・落ち着いた素材" },
      { label: "ふすま 張替え（布地）", price: "8,000円〜/枚", note: "格式のある空間向け" },
    ],
    timing: [
      "ふすま紙が破れた・穴が開いた",
      "汚れ・変色が目立つ",
      "退去後の物件を整備したい",
      "内覧前に和室の印象を改善したい",
      "行事・イベント前に整備したい（旅館・寺社）",
    ],
    steps: [
      { title: "お問い合わせ", body: "枚数・現在の状態をお知らせください。" },
      { title: "現地確認", body: "ふすまの状態・サイズ・素材をご確認し見積もりを提示します。" },
      { title: "素材選択", body: "紙・布・柄をお選びいただきます。サンプルをご確認いただけます。" },
      { title: "施工・設置", body: "古い紙を剥がし、新しい素材に張り替えて設置します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "ふすまの張替えにはどのくらい時間がかかりますか？", a: "一般的な量産品では当日仕上げが可能です。特注品や多枚数は別途お時間をいただく場合があります。" },
      { q: "ふすまのサイズが特殊でも対応できますか？", a: "はい。採寸後に対応したサイズに張り替えます。" },
    ],
  },
  shoji: {
    desc: "障子の張替えに対応します。通常の和紙から機能紙（UVカット・防汚）まで選べます。",
    detail: "障子張替えは、劣化・破れた障子紙を新しくする工事です。通常の和紙から、UVカット・防汚・採光機能のある機能紙まで対応します。",
    priceRows: [
      { label: "障子 張替え（並）", price: "2,500円〜/枚", note: "一般的な白い和紙" },
      { label: "障子 張替え（機能紙）", price: "4,000円〜/枚", note: "UVカット・採光・防汚機能あり" },
    ],
    timing: [
      "障子が破れた・穴が開いた",
      "汚れ・変色が目立つ",
      "退去後の物件整備をしたい",
      "行事前の整備をしたい（寺社・旅館）",
    ],
    steps: [
      { title: "お問い合わせ", body: "枚数・状態をお知らせください。" },
      { title: "現地確認", body: "状態・枚数を確認し見積もりします。" },
      { title: "施工", body: "古い障子紙を剥がし、新しい紙を張ります。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "機能紙（UVカット等）はどんな違いがありますか？", a: "UVカット機能紙は日焼けを防ぎます。防汚タイプは子ども・ペットのいる家庭向けです。採光機能紙は光をやわらかく通します。" },
      { q: "障子の枠が歪んでいる場合も対応できますか？", a: "紙の張替えは可能ですが、枠の修理は別途ご相談ください。" },
    ],
  },
  amido: {
    desc: "網戸の張替えに対応します。通常の防虫網・防犯ネット・省エネタイプなど素材を選べます。",
    detail: "網戸の張替えは、劣化・破れた網を新しくする工事です。一般用防虫網・防犯メッシュ・虫が入りにくい細目タイプなど用途に合わせた素材を選べます。",
    priceRows: [
      { label: "網戸 張替え（標準）", price: "1,500円〜/枚", note: "一般的なグレー網" },
      { label: "網戸 張替え（防犯・細目）", price: "2,500円〜/枚", note: "機能性素材" },
    ],
    timing: [
      "網が破れた・穴が開いた",
      "汚れが目立つ",
      "退去後の物件整備をしたい",
      "虫が多い時期の前に整備したい",
    ],
    steps: [
      { title: "お問い合わせ", body: "枚数・状態をお知らせください。" },
      { title: "現地確認", body: "状態・枚数を確認し見積もりします。" },
      { title: "施工", body: "古い網を剥がし、新しい網を張ります。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "マンションの網戸も対応できますか？", a: "はい。マンション・アパートの網戸張替えにも対応しています。複数枚の場合はまとめてご依頼いただけます。" },
    ],
  },
  restoration: {
    desc: "賃貸退去後・店舗退去後の原状回復工事（畳・ふすま・障子・クロス・床材）に対応します。",
    detail: "原状回復工事は、退去後の物件を入居前の状態に戻す工事です。畳の表替え・新調・ふすま・障子張替えからクロス・床材まで、トータルで対応します。国土交通省のガイドラインに基づく費用負担の考え方にも対応します。",
    priceRows: [
      { label: "畳 表替え", price: "4,500円〜/枚", note: "通常損耗の場合" },
      { label: "畳 新調", price: "15,000円〜/枚", note: "経年劣化を超えた損傷の場合" },
      { label: "ふすま 張替え", price: "3,000円〜/枚", note: "素材により変動" },
      { label: "障子 張替え", price: "2,500円〜/枚", note: "素材により変動" },
      { label: "クロス張替え", price: "800円〜/m²", note: "壁・天井別途" },
      { label: "現場まとめ見積もり", price: "別途", note: "現地確認後にご提示" },
    ],
    timing: [
      "退去後の畳・ふすまの状態を確認したい",
      "次の入居者向けに清潔な状態に整えたい",
      "複数室・複数物件の原状回復をまとめて依頼したい",
      "管理会社・オーナーとして継続的な工事パートナーが必要",
    ],
    steps: [
      { title: "退去後の状態確認", body: "退去後の物件で畳・ふすま・クロスの状態を確認します。現地確認・写真撮影も行います。" },
      { title: "お見積もり", body: "確認した内容をもとに工事範囲・費用をご提示します。国交省ガイドラインに基づく費用負担の考え方もご説明します。" },
      { title: "施工日調整", body: "次の入居者の入居日・空き期間に合わせて施工日を設定します。" },
      { title: "一括施工", body: "畳・ふすま・障子・クロスなど必要な工事を一括で行います。複数業者への依頼が不要です。" },
      { title: "写真付き報告書の提出", body: "施工前後の写真付き報告書を提出します。管理会社・オーナー様の記録として活用いただけます。" },
    ],
    faqExtra: [
      { q: "畳の原状回復費用は借主・貸主どちらの負担ですか？", a: "国土交通省のガイドラインでは通常の使用による損耗・経年劣化は貸主負担が基本です。借主の故意・過失による損傷は借主負担となります。詳しくは現地確認後にご説明します。" },
      { q: "管理会社・オーナーからの依頼も対応できますか？", a: "はい。管理会社・賃貸オーナー様からの依頼も歓迎します。複数物件・継続案件もご相談ください。施工後に写真付き報告書を提出します。" },
      { q: "原状回復工事の期間はどのくらいですか？", a: "工事範囲によりますが、畳・ふすま・障子の場合は1〜2日が目安です。クロスを含む場合は別途調整します。" },
    ],
  },
  interior: {
    desc: "クロス・床材・建具など内装工事に対応します。住宅・賃貸・店舗のリフォーム・退去後整備など。",
    detail: "内装工事は壁・天井のクロス張替え・床材の交換・建具（ふすま・障子）の取り換えなど、空間全体の内装を整える工事です。畳工事と同時に依頼することで複数業者への依頼が不要になります。",
    priceRows: [
      { label: "クロス張替え（一般壁紙）", price: "800円〜/m²", note: "既存の除去・下地処理込み" },
      { label: "クロス張替え（機能壁紙）", price: "1,200円〜/m²", note: "消臭・抗菌・調湿タイプ" },
      { label: "床材張替え（フロア材）", price: "5,000円〜/m²", note: "既存の除去込み" },
      { label: "畳→フローリング変更", price: "別途見積もり", note: "現地確認後にご提示" },
    ],
    timing: [
      "退去後のクロス張替えと畳張替えをまとめて依頼したい",
      "和室の畳・ふすまをフローリング・洋風に変えたい",
      "賃貸物件の内装を一新したい",
      "店舗の座敷・内装を改装したい",
    ],
    steps: [
      { title: "お問い合わせ", body: "工事の範囲・ご希望をお知らせください。" },
      { title: "現地確認・お見積もり", body: "現地で状態・範囲を確認し詳細なお見積もりを提示します。" },
      { title: "仕様・素材の確定", body: "クロスや床材のサンプルからお選びいただきます。" },
      { title: "施工", body: "工程に沿って施工します。複数工事はまとめて対応します。" },
      { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
    ],
    faqExtra: [
      { q: "畳工事と内装工事を同時に依頼できますか？", a: "はい。畳の表替え・新調とクロス張替えをまとめてご依頼いただけます。複数業者への依頼が不要で工程調整もスムーズです。" },
      { q: "和室をフローリングに変更できますか？", a: "対応可能です。現地確認後に仕様・費用をご提示します。" },
    ],
  },
};

const DEFAULT_CONTENT: ServiceContent = {
  desc: "畳の表替え・新調から、ふすま・障子・内装・原状回復まで幅広くご相談いただけます。",
  detail: "一般住宅・賃貸物件・旅館・寺社・店舗など、さまざまな用途の工事に対応しています。まずはお気軽にお問い合わせください。",
  priceRows: [
    { label: "畳 裏返し", price: "2,500円〜/枚", note: "使用2〜3年・状態良好な場合" },
    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "素材・グレードにより変動" },
    { label: "畳 新調", price: "15,000円〜/枚", note: "床ごと交換" },
    { label: "ふすま 張替え", price: "3,000円〜/枚", note: "素材により変動" },
    { label: "障子 張替え", price: "2,500円〜/枚", note: "素材により変動" },
  ],
  timing: [
    "畳表がささくれてきた",
    "踏み込むと沈む感触がある",
    "退去後の物件を清潔な状態に整えたい",
    "旅館・寺社の定期整備をしたい",
  ],
  steps: [
    { title: "お問い合わせ", body: "フォームまたはお電話でご連絡ください。" },
    { title: "現地確認・お見積もり", body: "現地で状態を確認し費用をご提示します。無料です。" },
    { title: "施工日調整", body: "ご都合に合わせて施工日を設定します。" },
    { title: "施工", body: "丁寧に施工します。" },
    { title: "確認・引き渡し", body: "仕上がりを確認し引き渡します。" },
  ],
  faqExtra: [],
};

export default function AreaPageTemplate({ pref, city, service, breadcrumbs }: Props) {
  const areaName = city ? `${pref.name}${city.name}` : pref.name;
  const serviceName = service?.name ?? "畳・ふすま・障子・内装・原状回復";
  const title = service ? `${areaName}の${service.name}` : `${areaName}の畳・内装サービス`;
  const content = (service && SM[service.slug]) ? SM[service.slug] : DEFAULT_CONTENT;

  const path = ["/area", pref.slug, city ? city.slug : "", service ? service.slug : ""].filter(Boolean).join("/");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      ...breadcrumbs.map((b, i) => ({
        "@type": "ListItem", position: i + 2,
        name: b.label, item: b.href ? `${SITE_URL}${b.href}` : `${SITE_URL}${path}`,
      })),
    ],
  };

  const areaServed = city
    ? [{ "@type": "City", name: city.name }]
    : pref.cities.length > 0
      ? [{ "@type": "State", name: pref.name }, ...pref.cities.map((c) => ({ "@type": "City", name: c.name }))]
      : [{ "@type": "State", name: pref.name }];

  const hasTel = (SITE_TEL as string).trim() !== "";
  const hasEmail = (SITE_EMAIL as string).trim() !== "";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: `${SITE_URL}${path}`,
    ...(hasTel ? { telephone: SITE_TEL } : {}),
    ...(hasEmail ? { email: SITE_EMAIL } : {}),
    description: `${areaName}の${serviceName}`,
    areaServed,
    priceRange: "¥¥",
  };

  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: content.desc,
    provider: { "@type": "LocalBusiness", name: SITE_NAME, url: SITE_URL },
    areaServed,
    url: `${SITE_URL}${path}`,
  } : null;

  const faqs = [
    { q: `${areaName}に対応していますか？`, a: `はい。${areaName}の${serviceName}に対応しています。対応可否は現地確認後にご案内します。まずはお気軽にご相談ください。`, category: "general" as const },
    { q: "見積もりは無料ですか？", a: "現地確認・お見積もりは無料です。素材や枚数により費用は変動します。", category: "general" as const },
    { q: "法人・複数物件にも対応できますか？", a: `はい。${areaName}の賃貸物件・旅館・寺社・店舗など法人案件、複数物件もご相談可能です。`, category: "general" as const },
    { q: "施工当日は在宅が必要ですか？", a: "現地確認時・施工時は立ち会いをお願いしています。賃貸物件の場合は管理会社様・オーナー様との調整の上で対応します。", category: "general" as const },
    { q: "費用の支払い方法は？", a: "施工完了後のお支払いが基本です。法人様の場合は請求書払いにも対応しています。詳しくはお問い合わせ時にご確認ください。", category: "price" as const },
    ...content.faqExtra.map((f) => ({ ...f, category: "general" as const })),
  ];

  const nearbyCities = pref.cities.filter((c) => city ? c.slug !== city.slug : true).slice(0, 12);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {serviceSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />}

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Service Area</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            {title}
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            {areaName}で{serviceName}をお探しの方へ。{content.desc}現地確認・お見積もりは無料です。
          </p>
          <div className="flex flex-wrap gap-3">
            {hasTel && (
              <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="inline-block bg-kincya text-white text-sm px-5 py-2.5 tracking-wide hover:bg-kincya/90 transition-colors">
                {SITE_TEL} に電話する
              </a>
            )}
            <Link href="/contact" className="inline-block border border-white/30 text-white text-sm px-5 py-2.5 tracking-wide hover:bg-white/10 transition-colors">
              フォームで相談する
            </Link>
          </div>
        </div>
      </section>

      {/* このページで分かること */}
      <section className="py-8 bg-kiji/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-4 uppercase">このページで分かること</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              `${areaName}で${serviceName}を依頼する際の費用目安`,
              "施工の流れ（問い合わせ〜引き渡しまで）",
              service ? "素材・施工方法の選び方" : "対応サービスの一覧",
              "よくある質問（FAQ）",
              "法人・賃貸物件でも対応可能かどうか",
              "見積もり・現地確認の方法",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-sumi/70">
                <span className="text-kincya mt-0.5 shrink-0">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* サービス概要 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              {areaName}での{serviceName}について
            </h2>
            <p className="text-sm text-sumi/80 leading-relaxed mb-3">{content.detail}</p>
            <p className="text-sm text-sumi/80 leading-relaxed">
              一般住宅はもちろん、賃貸物件のオーナー様・管理会社様、旅館・寺社・店舗など法人・施設のご依頼も歓迎します。対応可否は現地確認後にご案内し、素材や枚数により費用は変動します。
            </p>
          </div>

          {/* こんなときにご相談ください */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              こんなときにご相談ください
            </h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {content.timing.map((t, i) => (
                <div key={i} className="flex items-start gap-2 bg-kiji/30 border border-border p-3">
                  <span className="text-kincya text-xs mt-0.5 shrink-0">✓</span>
                  <span className="text-sm text-sumi/80">{t}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-sumi/50 mt-3">※ 上記以外の場合もご相談ください。現地確認後に最適な方法をご案内します。</p>
          </div>

          {/* 費用目安 */}
          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              費用目安
            </h2>
            <p className="text-xs text-sumi/40 mb-4 pl-4">※ 素材・枚数・状態により変動します。下記は参考目安です。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">施工内容</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">目安価格</th>
                    <th className="text-left px-4 py-2.5 text-xs font-normal tracking-wide">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {content.priceRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-kiji/20"}>
                      <td className="px-4 py-3 text-sumi/80 text-xs">{row.label}</td>
                      <td className="px-4 py-3 text-ai font-medium text-xs">{row.price}</td>
                      <td className="px-4 py-3 text-sumi/50 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/40 mt-2">税別表示。正確な費用は現地確認後にお見積もりします。</p>
          </div>

          {/* 素材の選び方 */}
          {content.materials && content.materials.length > 0 && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                素材の選び方
              </h2>
              <div className="space-y-3">
                {content.materials.map((m, i) => (
                  <div key={i} className="bg-kiji/20 border border-border p-4">
                    <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{m.name}</p>
                    <p className="text-xs text-sumi/70 leading-relaxed">{m.feature}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-sumi/50 mt-3">※ サンプルは現地確認時にご確認いただけます。</p>
            </div>
          )}

          {/* 施工の流れ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              施工の流れ
            </h2>
            <div className="space-y-4">
              {content.steps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 bg-sumi text-white text-xs flex items-center justify-center" style={{ fontFamily: "var(--font-serif)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{step.title}</p>
                    <p className="text-xs text-sumi/70 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 対応ターゲット */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              対象・対応範囲
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "一般住宅", desc: "戸建・マンションの和室の畳・ふすま・障子" },
                { label: "賃貸オーナー", desc: "退去後の畳交換・ふすま・障子・原状回復" },
                { label: "不動産管理会社", desc: "複数物件・継続案件・写真付き報告書対応" },
                { label: "旅館・宿泊施設", desc: "客室の畳・ふすま・障子の整備。繁忙期前対応" },
                { label: "寺院・神社", desc: "本堂・社務所の畳・ふすま・障子。行事前整備" },
                { label: "店舗・飲食店", desc: "座敷・小上がり・内装工事。営業状況に合わせた施工" },
              ].map((t) => (
                <div key={t.label} className="border border-border p-4 bg-white">
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{t.label}</p>
                  <p className="text-xs text-sumi/60 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* サービス一覧（エリアTOPページ） */}
          {!service && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {areaName}で対応するサービス
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {AREA_SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={city ? `/area/${pref.slug}/${city.slug}/${s.slug}` : `/area/${pref.slug}/${s.slug}`}
                    className="block bg-kiji/40 border border-border p-4 hover:border-kincya transition-colors"
                  >
                    <span className="text-sm text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</span>
                    <span className="block text-xs text-ai mt-1">{areaName}の{s.name} →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* その他のサービス（サービスページ） */}
          {service && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {areaName}のその他のサービス
              </h2>
              <div className="flex flex-wrap gap-2">
                {AREA_SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                  <Link
                    key={s.slug}
                    href={city ? `/area/${pref.slug}/${city.slug}/${s.slug}` : `/area/${pref.slug}/${s.slug}`}
                    className="text-xs bg-kiji/50 border border-border text-sumi/70 px-3 py-1.5 hover:border-kincya transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 市区一覧（県ページ） */}
          {!city && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {pref.name}の対応市区
              </h2>
              <div className="flex flex-wrap gap-2">
                {pref.cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={service ? `/area/${pref.slug}/${c.slug}/${service.slug}` : `/area/${pref.slug}/${c.slug}`}
                    className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                  >
                    {c.name}{service ? `の${service.name}` : ""}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 周辺市区リンク（市区ページのみ） */}
          {city && nearbyCities.length > 0 && (
            <div>
              <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                {pref.name}の他の市区でのご相談
              </h2>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    href={service ? `/area/${pref.slug}/${c.slug}/${service.slug}` : `/area/${pref.slug}/${c.slug}`}
                    className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                  >
                    {c.name}{service ? `の${service.name}` : ""}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              よくある質問
            </h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 bg-kiji/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-5 uppercase text-center">Related Pages</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { label: `${pref.name}の畳工事TOP`, href: `/area/${pref.slug}` },
              { label: `${pref.name}の畳表替え`, href: `/area/${pref.slug}/tatami-omotegae` },
              { label: `${pref.name}の畳新調`, href: `/area/${pref.slug}/tatami-shinchou` },
              { label: `${pref.name}の畳裏返し`, href: `/area/${pref.slug}/tatami-uragaeshi` },
              { label: `${pref.name}の襖張替え`, href: `/area/${pref.slug}/fusuma` },
              { label: `${pref.name}の障子張替え`, href: `/area/${pref.slug}/shoji` },
              { label: `${pref.name}の原状回復`, href: `/area/${pref.slug}/restoration` },
              { label: "畳サービス一覧", href: "/services" },
              { label: "料金目安", href: "/price" },
              { label: "施工の流れ", href: "/flow" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-sumi/60 hover:text-ai border border-border py-2 px-3 text-center bg-white hover:border-ai/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${areaName}での${serviceName}はお気軽にご相談ください`}
        subtitle="現地確認・お見積もりは無料です。住宅・賃貸・旅館・寺社・店舗まで対応します。"
      />
    </>
  );
}
