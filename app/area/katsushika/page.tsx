import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { AREAS, PRIMARY_AREA_SLUG } from "@/data/areas";
import { KATSUSHIKA_AREA_CONTENT, KATSUSHIKA_OVERVIEW } from "@/data/katsushika-areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

const PAGE_TITLE = "葛飾区の畳屋・畳張替え｜亀有・金町・柴又・新小岩など区内全域対応";
const PAGE_DESCRIPTION =
  "東京都葛飾区の畳屋「葛飾畳店」。亀有・金町・柴又・高砂・青戸・立石・四つ木・堀切・お花茶屋・新小岩・奥戸・水元の全域で、畳の表替え・新調・裏返し、襖・障子、原状回復に対応。現地確認・見積もり無料。";

export const metadata: Metadata = buildMetadata({
  title: `${PAGE_TITLE} | ${SITE_NAME}`,
  description: PAGE_DESCRIPTION,
  path: "/area/katsushika",
});

const katsushika = AREAS.find((p) => p.slug === PRIMARY_AREA_SLUG)!;
const hasTel = (SITE_TEL as string).trim() !== "";

const FAQ_ITEMS = [
  {
    q: "葛飾区内のどの地域まで対応していますか？",
    a: "葛飾区内の全域に対応しています。亀有・金町・柴又・高砂・青戸・立石・四つ木・堀切・お花茶屋・新小岩・奥戸・水元の各エリアと、それぞれの周辺の町（西亀有・東金町・東立石・東四つ木・小菅・白鳥・宝町・細田・鎌倉など）にも伺います。",
    category: "general" as const,
  },
  {
    q: "見積もりや現地確認は無料ですか？",
    a: "はい、現地確認・お見積もりは無料です。素材や枚数により費用は変動しますので、まずはお気軽にご連絡ください。",
    category: "price" as const,
  },
  {
    q: "葛飾区の住まいは畳が傷みやすいのでしょうか？",
    a: "葛飾区は荒川・中川・江戸川などの川に囲まれ、区の多くが東京東部の低地にあります。1階の和室や北側の部屋、川に近い住まいでは、梅雨から夏に湿気がこもりやすい場合があります。こまめな換気に加え、湿気に強い和紙畳・樹脂畳や防湿シートの活用もご提案します。",
    category: "general" as const,
  },
  {
    q: "亀有・金町・新小岩など駅前のマンションにも対応していますか？",
    a: "はい。マンションの和室の表替え・新調、縁なし畳へのリフォームに対応しています。エレベーターの有無や搬出経路、管理規約で定められた作業時間を事前に確認し、段取りよく施工します。",
    category: "general" as const,
  },
  {
    q: "四つ木・堀切・立石などの古い木造住宅の畳もお願いできますか？",
    a: "はい。昭和期からの木造住宅では、部屋ごと・畳ごとに寸法が異なることがよくあります。1枚ずつ採寸して製作するため、既存の敷き込みに合わせて仕上げます。畳を上げた際に床板の状態も確認します。",
    category: "general" as const,
  },
  {
    q: "法人・管理会社からの依頼も受け付けていますか？",
    a: "はい。不動産管理会社・賃貸オーナー・法人施設からの継続案件・複数物件のご依頼に対応しています。施工後には写真付き報告書を提出しますので、物件管理の記録としてご活用いただけます。",
    category: "general" as const,
  },
  {
    q: "退去後の原状回復工事にも対応していますか？",
    a: "はい。畳の表替え・新調、襖・障子の張替え、クロス・床材の内装工事まで一括で対応します。複数の業者に依頼する必要がなく、工程の管理もスムーズです。",
    category: "general" as const,
  },
  {
    q: "飲食店の座敷や、寺院・神社の畳工事も対応できますか？",
    a: "はい。立石・新小岩・亀有などの商店街にある飲食店の座敷・小上がり、寺院・神社の本堂・社務所の畳・襖・障子工事にも対応しています。営業日や行事の日程に合わせて施工時期をご相談ください。",
    category: "general" as const,
  },
  {
    q: "和紙畳や樹脂畳への変更も可能ですか？",
    a: "はい。い草から、ダニが発生しにくい和紙畳や、水拭きできる樹脂畳への変更に対応しています。ペットのいるご家庭、お子さまの部屋、飲食店の座敷など、用途に合わせてご提案します。",
    category: "material" as const,
  },
  {
    q: "縁なし畳（琉球畳）への変更はできますか？",
    a: "はい。通常の縁あり畳から縁なし畳（半畳サイズ）への変更が可能です。モダンな和室・リビング和室のリノベーションにご検討ください。",
    category: "material" as const,
  },
  {
    q: "施工は当日完成しますか？",
    a: "表替え・裏返しは、基本的に当日中に仕上がります。新調は採寸後に製作するため、数日いただく場合があります。複数部屋・複数物件は日程を調整して計画的に対応します。",
    category: "general" as const,
  },
  {
    q: "浸水や水濡れで畳が濡れてしまったらどうすればいいですか？",
    a: "濡れた畳は早めに上げて乾かすことが大切です。泥水などで汚れた場合は、衛生面から新調をおすすめすることがあります。状態を確認してご提案しますので、まずはご相談ください。日頃から区のハザードマップを確認しておくことも大切です。",
    category: "general" as const,
  },
  {
    q: "葛飾区の周辺の地域も相談できますか？",
    a: "はい。足立区・江戸川区・墨田区や、千葉県松戸市、埼玉県三郷市・八潮市など、葛飾区に隣接する地域のご相談もお受けしています。所在地をお知らせください。",
    category: "general" as const,
  },
  {
    q: "葛飾区の「新宿」や「鎌倉」も対応エリアですか？",
    a: "はい。葛飾区の新宿（にいじゅく）は金町エリア、鎌倉は奥戸エリアに含まれ、どちらも対応しています。新宿区や神奈川県の鎌倉市とは別の地域ですので、ご住所をお知らせいただければ確認のうえ伺います。",
    category: "general" as const,
  },
  {
    q: "費用の支払い方法は？",
    a: "施工完了後のお支払いが基本です。法人様・管理会社様は請求書払いにも対応しています。お支払い方法の詳細はお問い合わせ時にご確認ください。",
    category: "price" as const,
  },
  {
    q: "畳の張り替え時期の目安は？",
    a: "裏返しは使用2〜3年、表替えは5〜8年、新調は10〜20年が一般的な目安です。湿気がこもりやすい和室では、梅雨前の春先や秋口の表替えがおすすめです。現地確認で最適な時期をご提案します。",
    category: "general" as const,
  },
];

const SERVICES_12 = [
  { slug: "tatami", name: "畳工事（表替え・新調）", desc: "い草・和紙・樹脂から素材を選べます。住宅・賃貸・旅館・寺社・店舗に対応。" },
  { slug: "tatami-omotegae", name: "畳表替え", desc: "畳床はそのまま、表面のい草を新しくします。5〜6年に一度が目安。" },
  { slug: "tatami-shinchou", name: "畳新調", desc: "畳床ごと全て新しくします。踏み込むと沈む・カビが深部に至った場合に。" },
  { slug: "tatami-uragaeshi", name: "畳裏返し", desc: "使用2〜3年の畳を裏返してリフレッシュ。費用を抑えた整備方法。" },
  { slug: "herinashi-tatami", name: "縁なし畳・琉球畳", desc: "半畳サイズの縁なし畳でモダンな和室に。リビング和室にも人気。" },
  { slug: "washi-tatami", name: "和紙畳", desc: "ダニが繁殖しにくく傷に強い素材。アレルギー・ペット・子ども部屋向け。" },
  { slug: "resin-tatami", name: "樹脂畳", desc: "完全防水・水拭き可能。飲食店の座敷・ペット対応向けに最適。" },
  { slug: "fusuma", name: "襖張替え", desc: "和室の間仕切り・押し入れ・収納の襖を清潔・新しく。量産品から上質紙まで。" },
  { slug: "shoji", name: "障子張替え", desc: "通常の和紙からUVカット・防汚機能紙まで対応。旅館・寺社の行事前整備にも。" },
  { slug: "amido", name: "網戸張替え", desc: "防虫・防犯・省エネタイプの素材を選べます。マンション・アパートも対応。" },
  { slug: "restoration", name: "原状回復工事", desc: "退去後の畳・襖・障子・クロスを一括対応。管理会社・オーナー様の継続案件歓迎。" },
  { slug: "interior", name: "内装工事", desc: "クロス・床材・建具など内装全体を畳工事と同時に依頼可能。複数業者不要。" },
];

const REASONS = [
  {
    title: "葛飾区内の全域に出張",
    body: "亀有・金町・柴又から新小岩・奥戸・水元まで、区内のどこへでも伺います。駅から離れた住宅地でも、現地確認・お見積もりは無料です。",
  },
  {
    title: "湿気に配慮した素材提案",
    body: "川に囲まれた低地の住まいに多い湿気の悩みに合わせ、和紙畳・樹脂畳・防湿シートなどの選択肢をご提案します。",
  },
  {
    title: "畳・内装の一括対応",
    body: "畳表替え・新調から襖・障子・クロス・床材まで一括対応。複数業者への依頼が不要で、トータルの工程管理が容易です。",
  },
  {
    title: "素材サンプルで現地確認",
    body: "現地でい草・和紙・樹脂・縁なしなどのサンプルをご覧いただけます。実際の質感を確認してから素材を選べます。",
  },
  {
    title: "法人・複数物件にも対応",
    body: "不動産管理会社・賃貸オーナー様の複数物件・継続案件に対応します。施工前後の写真付き報告書も提出します。",
  },
  {
    title: "店舗・寺社の和室にも対応",
    body: "飲食店の座敷・小上がり、寺院・神社の本堂や社務所など、用途に合わせた素材と施工時期をご提案します。",
  },
];

const AUDIENCE_PAGES = [
  { href: "/area/katsushika/for-homeowner", label: "一般住宅オーナー向け", desc: "戸建・マンション和室の畳・ふすま・障子" },
  { href: "/area/katsushika/for-rental-owner", label: "賃貸オーナー向け", desc: "退去後の原状回復・継続管理" },
  { href: "/area/katsushika/for-property-management", label: "不動産管理会社向け", desc: "複数物件・報告書対応" },
  { href: "/area/katsushika/for-real-estate", label: "不動産業者向け", desc: "内覧前整備・売買・リフォーム" },
  { href: "/area/katsushika/for-ryokan", label: "旅館・宿泊施設向け", desc: "客室整備・国産い草・わら床" },
  { href: "/area/katsushika/for-store", label: "店舗・飲食店向け", desc: "座敷・小上がり・内装工事" },
  { href: "/area/katsushika/for-temple-shrine", label: "寺院・神社向け", desc: "本堂・社務所・行事前整備" },
];

const PROBLEM_PAGES = [
  { href: "/area/katsushika/problems/tatami-mold", label: "畳のカビ対策" },
  { href: "/area/katsushika/problems/tatami-dani", label: "畳のダニ対策" },
  { href: "/area/katsushika/problems/tatami-smell", label: "畳の臭い" },
  { href: "/area/katsushika/problems/tatami-sunken", label: "畳のへたり・沈み" },
  { href: "/area/katsushika/problems/tatami-sasakure", label: "畳のささくれ" },
  { href: "/area/katsushika/problems/pet-urine", label: "ペットの粗相・汚れ" },
  { href: "/area/katsushika/problems/tatami-flood-damage", label: "畳の水濡れ・浸水" },
];

// 葛飾区に接する自治体（いずれも1都6県の対応エリアページあり）
const NEIGHBOR_AREAS = [
  { label: "足立区", href: "/area/tokyo/adachi" },
  { label: "江戸川区", href: "/area/tokyo/edogawa" },
  { label: "墨田区", href: "/area/tokyo/sumida" },
  { label: "松戸市（千葉県）", href: "/area/chiba/matsudo" },
  { label: "三郷市（埼玉県）", href: "/area/saitama/misato" },
  { label: "八潮市（埼玉県）", href: "/area/saitama/yashio" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "葛飾区", item: `${SITE_URL}/area/katsushika` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/katsushika#webpage`,
  name: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  url: `${SITE_URL}/area/katsushika`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  ...(hasTel ? { telephone: SITE_TEL } : {}),
  email: SITE_EMAIL,
  description: "東京都葛飾区の全域で畳張替え・襖障子・原状回復・内装工事に対応する畳と空間整備の専門店。",
  areaServed: [
    { "@type": "City", name: "葛飾区", containedInPlace: { "@type": "State", name: "東京都" } },
    ...katsushika.cities.map((c) => ({ "@type": "Place", name: `東京都葛飾区${c.name}` })),
  ],
  serviceType: ["畳工事", "襖・障子張替え", "原状回復工事", "内装工事"],
  priceRange: "¥¥",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function KatsushikaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "葛飾区" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">東京都葛飾区 全域対応</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            葛飾区の畳屋・畳張替えなら<br className="hidden sm:block" />葛飾畳店
          </h1>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed mb-3">
            亀有・金町・柴又・高砂・青戸・立石・四つ木・堀切・お花茶屋・新小岩・奥戸・水元。葛飾区内の全域に伺います。一戸建て・マンション・賃貸物件・店舗・寺社まで、幅広いご相談をお受けします。
          </p>
          <p className="text-sm text-white/60 max-w-3xl leading-relaxed mb-6">
            川に囲まれた低地ならではの湿気に配慮した素材選び、法人・複数物件・継続案件のご相談も歓迎です。現地確認・お見積もりは無料です。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-block bg-kincya text-white text-sm px-6 py-3 tracking-wide hover:bg-kincya/90 transition-colors"
            >
              無料で見積もりを相談する
            </Link>
            {hasTel && (
              <a
                href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                className="inline-block border border-white/30 text-white text-sm px-6 py-3 tracking-wide hover:bg-white/10 transition-colors"
              >
                {SITE_TEL} に電話する
              </a>
            )}
          </div>
        </div>
      </section>

      {/* このページで分かること */}
      <section className="py-8 bg-kiji/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-sumi/40 tracking-[0.3em] mb-4 uppercase">このページで分かること</p>
          <ul className="grid sm:grid-cols-2 gap-2">
            {[
              "葛飾区の住まいの特徴と畳の傷み方",
              "区内12エリアの対応町名と最寄り駅",
              "畳・襖・障子・内装・原状回復の12サービス",
              "法人・管理会社対応・継続案件について",
              "葛飾畳店の6つの強み",
              "葛飾区の方向けよくある質問（Q&A）",
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* 葛飾区の畳工事：住まいの特徴と対応 */}
          <div>
            <h2 className="text-2xl text-sumi mb-6 pl-4 border-l-4 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区の畳工事：住まいの特徴と対応
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>{KATSUSHIKA_OVERVIEW.intro}</p>
              <p>
                葛飾畳店は、葛飾区を中心に畳の表替え・裏返し・新調から、襖・障子・網戸の張替え、内装工事・原状回復までをお受けする畳と空間整備の専門店です。一戸建て・マンション・賃貸物件から、飲食店の座敷、寺院・神社の和室まで、建物と用途に合わせた施工をご提案します。
              </p>
              <p>
                区内の住まいは、エリアによって表情が異なります。亀有・金町・新小岩・立石などの駅の周辺では、再開発や分譲マンションによる新しい住まいが見られます。マンションの和室は、床の高さに合わせた薄い畳が使われていることがあるため、厚みを測って同じ仕様で表替え・新調を行います。
              </p>
              <p>
                一方、四つ木・堀切・立石の周辺などには、昭和期からの木造戸建てやアパートが多く残る地域があります。古い住宅では部屋ごとに畳の寸法が異なることも多く、1枚ずつ採寸して製作します。区内には都営住宅や団地も多く、退去後・入居前の整備のご相談にも対応します。
              </p>
              <p>
                柴又には帝釈天（経栄山題経寺）の門前町が広がり、「葛飾柴又の文化的景観」は2018年に都内で初めて国の重要文化的景観に選ばれました。伝統的な和室が残る住まいでは、国産い草の畳表やわら床など本格的な素材もご相談いただけます。
              </p>
              <p>
                気をつけたいのが湿気です。区の多くは荒川・中川・江戸川などに囲まれた東京東部の低地にあり、1階の和室や北側の部屋では、梅雨から夏に湿気がこもりやすい場合があります。カビやダニが気になる和室には、和紙畳・樹脂畳への変更や防湿シートの併用をご提案します。
              </p>
            </div>
          </div>

          {/* 葛飾区内の対応エリア一覧 */}
          <div>
            <h2 className="text-xl text-sumi mb-2 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区内の対応エリア一覧
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">区内12エリアの全域に対応。各エリアのページで、住まいの特徴とご相談例をご確認いただけます。</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {katsushika.cities.map((c) => {
                const info = KATSUSHIKA_AREA_CONTENT[c.slug];
                return (
                  <Link
                    key={c.slug}
                    href={`/area/katsushika/${c.slug}`}
                    className="group block bg-white border border-border p-4 hover:border-kincya transition-colors"
                  >
                    <p className="text-base text-sumi mb-1 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                      {c.name}
                      {c.reading && <span className="ml-2 text-[10px] text-sumi/40 tracking-wider">{c.reading}</span>}
                    </p>
                    {info && (
                      <>
                        <p className="text-xs text-sumi/60 leading-relaxed">{info.towns.join("・")}</p>
                        <p className="text-xs text-sumi/45 leading-relaxed mt-1">{info.stations.join("／")}</p>
                      </>
                    )}
                    <span className="text-xs text-ai mt-2 block">{c.name}エリアの畳工事 →</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* 葛飾区周辺の対応エリア */}
          <div>
            <h2 className="text-xl text-sumi mb-2 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区に隣接する地域もご相談ください
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">区外の物件も、所在地をお知らせいただければ対応可否をご案内します。</p>
            <div className="flex flex-wrap gap-2">
              {NEIGHBOR_AREAS.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                >
                  {a.label}
                </Link>
              ))}
              <Link
                href="/area"
                className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
              >
                1都6県の対応エリア一覧
              </Link>
            </div>
          </div>

          {/* 葛飾畳店の強み */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区で畳工事を頼むなら｜葛飾畳店の6つの強み
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {REASONS.map((r, i) => (
                <div key={i} className="bg-kiji/30 border border-border p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-kincya text-xs font-medium" style={{ fontFamily: "var(--font-serif)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-sumi" style={{ fontFamily: "var(--font-serif)" }}>{r.title}</p>
                  </div>
                  <p className="text-xs text-sumi/70 leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 葛飾区の畳・内装サービス一覧 */}
          <div>
            <h2 className="text-xl text-sumi mb-2 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区の畳・内装サービス一覧
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">畳から内装・原状回復まで、12のサービスを葛飾区の全域でご提供します。</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES_12.map((s) => (
                <Link
                  key={s.slug}
                  href={`/area/katsushika/${s.slug}`}
                  className="block bg-white border border-border p-4 hover:border-kincya transition-colors"
                >
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                  <p className="text-xs text-sumi/60 leading-relaxed mb-2">{s.desc}</p>
                  <span className="text-xs text-ai">葛飾区の{s.name} →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* 素材比較表 */}
          <div>
            <h2 className="text-2xl text-sumi mb-4 pl-4 border-l-4 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区の住まいに合う畳選び：素材・価格比較
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">湿気がこもりやすい和室かどうか、ペットや小さなお子さまがいるかで、合う素材が変わります。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-sumi text-white">
                    <th className="text-left px-3 py-2.5 font-normal">素材</th>
                    <th className="text-left px-3 py-2.5 font-normal">い草</th>
                    <th className="text-left px-3 py-2.5 font-normal">和紙畳</th>
                    <th className="text-left px-3 py-2.5 font-normal">樹脂畳</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: "湿気・カビ対策", igusa: "調湿性あり。カビ対策は別途必要", washi: "撥水性あり。カビ・ダニ対策に◎", resin: "完全防水。カビが生えにくい" },
                    { aspect: "耐久性", igusa: "5〜8年で表替え", washi: "い草より長持ち", resin: "非常に長持ち" },
                    { aspect: "価格", igusa: "最も手頃", washi: "やや高め", resin: "高め" },
                    { aspect: "香り", igusa: "あり（好評）", washi: "なし", resin: "なし" },
                    { aspect: "メンテナンス", igusa: "定期的な換気・清掃が必要", washi: "簡単", resin: "水拭き可・最も簡単" },
                    { aspect: "ペット対応", igusa: "弱い", washi: "中程度", resin: "最適" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-kiji/20"}>
                      <td className="px-3 py-2.5 text-sumi/80 font-medium">{row.aspect}</td>
                      <td className="px-3 py-2.5 text-sumi/70">{row.igusa}</td>
                      <td className="px-3 py-2.5 text-sumi/70">{row.washi}</td>
                      <td className="px-3 py-2.5 text-sumi/70">{row.resin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-sumi/40 mt-2">1階の和室や北側の部屋など湿気が気になる場合は、和紙畳・樹脂畳もおすすめです。現地確認時にサンプルをご覧いただき、最適な素材をご相談ください。</p>
          </div>

          {/* 対象者別ページ・お悩み別ページ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              対象者別・お悩み別のご案内
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>あなたの状況・立場から選ぶ</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {AUDIENCE_PAGES.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block bg-kiji/30 border border-border p-4 hover:border-ai transition-colors"
                    >
                      <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{p.label}</p>
                      <p className="text-xs text-sumi/60">{p.desc}</p>
                      <span className="text-xs text-ai mt-1 block">詳しく見る →</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>お悩みから選ぶ</p>
                <div className="flex flex-wrap gap-2">
                  {PROBLEM_PAGES.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="text-xs bg-white border border-border text-sumi/70 px-3 py-2 hover:border-kincya hover:text-kincya transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 費用目安 */}
          <div>
            <h2 className="text-xl text-sumi mb-1 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区での施工費用の目安
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
                  {[
                    { label: "畳 裏返し", price: "2,500円〜/枚", note: "使用2〜3年・表面に損傷がない場合" },
                    { label: "畳 表替え（い草）", price: "4,500円〜/枚", note: "素材・グレードにより変動" },
                    { label: "畳 表替え（和紙）", price: "6,500円〜/枚", note: "ダニ対策・ペット向け" },
                    { label: "畳 表替え（樹脂）", price: "7,500円〜/枚", note: "防水・水拭き可能" },
                    { label: "畳 新調（建材床）", price: "15,000円〜/枚", note: "床ごと交換。サイズにより変動" },
                    { label: "畳 新調（わら床）", price: "20,000円〜/枚", note: "本格畳。旅館・寺社向け" },
                    { label: "縁なし畳（琉球畳）", price: "18,000円〜/枚", note: "半畳サイズ" },
                    { label: "襖 張替え", price: "3,000円〜/枚", note: "素材により変動" },
                    { label: "障子 張替え", price: "2,500円〜/枚", note: "機能紙は別途" },
                    { label: "網戸 張替え", price: "1,500円〜/枚", note: "素材により変動" },
                    { label: "クロス張替え", price: "800円〜/m²", note: "壁・天井別途" },
                  ].map((row, i) => (
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

          {/* 施工の流れ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              施工の流れ（お問い合わせ〜引き渡しまで）
            </h2>
            <div className="space-y-4">
              {[
                { title: "お問い合わせ", body: "フォームまたはお電話でご連絡ください。畳の状態・枚数・ご希望の素材など、わかる範囲でお知らせいただくとスムーズです。管理会社・法人様からのまとめてのご相談も歓迎します。" },
                { title: "現地確認・お見積もり", body: "ご希望日に現地をご訪問し、畳の状態・サイズ・枚数を確認します。素材サンプルをご覧いただきながら、その場で施工方法と費用をご提示します。無料です。" },
                { title: "施工日の調整", body: "お客様のご都合に合わせて施工日を設定します。複数部屋・複数物件の場合は計画的に日程を組みます。店舗の営業日や寺社の行事日程に合わせた調整も可能です。" },
                { title: "施工", body: "古い畳を撤去し、新しい素材を張った畳を設置します。施工中はできるだけ生活への影響を最小限にします。表替えは基本的に当日完成です。" },
                { title: "確認・引き渡し・報告書提出", body: "仕上がりを確認のうえ、お客様に引き渡します。管理会社様・法人様には施工前後の写真付き報告書を提出します。" },
              ].map((step, i) => (
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

          {/* 対象・対応範囲 */}
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

          {/* FAQ */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              葛飾区の方向けよくある質問（Q&amp;A）
            </h2>
            <div className="bg-white border border-border px-5 py-1">
              <FaqSection items={FAQ_ITEMS} />
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
              { label: "葛飾区の畳表替え", href: "/area/katsushika/tatami-omotegae" },
              { label: "葛飾区の畳新調", href: "/area/katsushika/tatami-shinchou" },
              { label: "葛飾区の畳裏返し", href: "/area/katsushika/tatami-uragaeshi" },
              { label: "葛飾区の縁なし畳", href: "/area/katsushika/herinashi-tatami" },
              { label: "葛飾区の和紙畳", href: "/area/katsushika/washi-tatami" },
              { label: "葛飾区の樹脂畳", href: "/area/katsushika/resin-tatami" },
              { label: "葛飾区の襖張替え", href: "/area/katsushika/fusuma" },
              { label: "葛飾区の障子張替え", href: "/area/katsushika/shoji" },
              { label: "葛飾区の原状回復", href: "/area/katsushika/restoration" },
              { label: "葛飾区の畳料金ガイド", href: "/area/katsushika/guide-tatami-price" },
              { label: "料金目安", href: "/price" },
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
        title="葛飾区の畳・内装工事はお気軽にご相談ください"
        subtitle="現地確認・お見積もりは無料です。葛飾区内の全域に伺います。法人・管理会社・複数物件もご相談ください。"
      />
    </>
  );
}
