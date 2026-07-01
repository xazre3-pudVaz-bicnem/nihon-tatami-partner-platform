import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import { AREAS, AREA_SERVICES } from "@/data/areas";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: `埼玉県の畳張替え・襖障子・原状回復｜全38市区対応 | ${SITE_NAME}`,
  description:
    "埼玉県全域の畳表替え・新調・裏返し、襖・障子張替え、原状回復・内装工事に対応。さいたま市・川口・越谷・川越・春日部など全38市区へお伺い。法人・複数物件・継続案件もご相談ください。現地確認・見積もり無料。",
  path: "/area/saitama",
});

const saitama = AREAS.find((p) => p.slug === "saitama")!;

const FAQ_ITEMS = [
  {
    q: "埼玉県全域に対応していますか？",
    a: "はい。さいたま市・川口市・越谷市・川越市・春日部市・所沢市・草加市・上尾市をはじめ、埼玉県内全38市区に対応しています。対応可否は現地確認後にご案内します。",
    category: "general" as const,
  },
  {
    q: "見積もりや現地確認は無料ですか？",
    a: "はい、現地確認・お見積もりは無料です。素材や枚数により費用は変動しますので、まずはお気軽にご連絡ください。",
    category: "price" as const,
  },
  {
    q: "埼玉の気候は畳の劣化に影響しますか？",
    a: "埼玉県は夏の高温多湿と冬の乾燥が激しく、畳には過酷な環境です。夏場の湿気によるカビ・ダニの発生、冬場の乾燥による表面のひび割れが起きやすい傾向があります。適切な時期の表替え・裏返しで畳の寿命を延ばすことができます。",
    category: "general" as const,
  },
  {
    q: "法人・管理会社からの依頼も受け付けていますか？",
    a: "はい。不動産管理会社・賃貸オーナー・法人施設からの継続案件・複数物件対応を歓迎します。施工後には写真付き報告書を提出しますので、物件管理の記録としてご活用いただけます。",
    category: "general" as const,
  },
  {
    q: "退去後の原状回復工事にも対応していますか？",
    a: "はい。畳の表替え・新調、襖・障子張替え、クロス・床材の内装工事まで一括対応します。複数業者への依頼が不要で、工程管理もスムーズです。",
    category: "general" as const,
  },
  {
    q: "旅館や寺社の畳工事も対応できますか？",
    a: "はい。埼玉県内の旅館・宿泊施設・寺院・神社の本堂・社務所の畳・襖・障子工事に対応しています。国産い草・わら床など格式ある素材での施工も承ります。",
    category: "general" as const,
  },
  {
    q: "和紙畳や樹脂畳への変更も可能ですか？",
    a: "はい。い草からダニが繁殖しにくい和紙畳・完全防水の樹脂畳への変更に対応しています。ペット・アレルギー対応・飲食店の座敷整備など用途に合わせてご提案します。",
    category: "material" as const,
  },
  {
    q: "縁なし畳（琉球畳）への変更はできますか？",
    a: "はい。通常の縁あり畳から縁なし畳（半畳サイズ）への変更が可能です。モダンな和室・リビング和室のリノベーションにご検討ください。",
    category: "material" as const,
  },
  {
    q: "施工は当日完成しますか？",
    a: "表替え・裏返しは基本的に当日完成です。新調は採寸後に製作するため数日いただく場合があります。複数部屋・複数物件は日程を調整して計画的に対応します。",
    category: "general" as const,
  },
  {
    q: "費用の支払い方法は？",
    a: "施工完了後のお支払いが基本です。法人様・管理会社様は請求書払いにも対応しています。お支払い方法の詳細はお問い合わせ時にご確認ください。",
    category: "price" as const,
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
    title: "法人・複数物件対応",
    body: "不動産管理会社・賃貸オーナー様の複数物件・継続案件に対応します。一括発注で工程調整がスムーズになり、管理の手間を削減できます。",
  },
  {
    title: "写真付き報告書の提出",
    body: "施工前後の写真付き報告書を提出します。物件管理の記録として活用でき、オーナー様・管理会社様への報告に役立ちます。",
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
    title: "旅館・寺社・店舗の実績",
    body: "一般住宅だけでなく、旅館の客室・寺院の本堂・飲食店の座敷など、格式ある施設の施工実績があります。",
  },
  {
    title: "現地確認・見積もり無料",
    body: "現地確認・お見積もりは無料です。適切な施工方法と費用をその場でご提示し、無理な営業はしません。",
  },
];

const AUDIENCE_PAGES = [
  { href: "/area/saitama/for-homeowner", label: "一般住宅オーナー向け", desc: "戸建・マンション和室の畳・ふすま・障子" },
  { href: "/area/saitama/for-rental-owner", label: "賃貸オーナー向け", desc: "退去後の原状回復・継続管理" },
  { href: "/area/saitama/for-property-management", label: "不動産管理会社向け", desc: "複数物件・報告書対応" },
  { href: "/area/saitama/for-real-estate", label: "不動産業者向け", desc: "内覧前整備・売買・リフォーム" },
  { href: "/area/saitama/for-ryokan", label: "旅館・宿泊施設向け", desc: "客室整備・国産い草・わら床" },
  { href: "/area/saitama/for-store", label: "店舗・飲食店向け", desc: "座敷・小上がり・内装工事" },
  { href: "/area/saitama/for-temple-shrine", label: "寺院・神社向け", desc: "本堂・社務所・行事前整備" },
];

const PROBLEM_PAGES = [
  { href: "/area/saitama/problems/tatami-mold", label: "畳のカビ対策" },
  { href: "/area/saitama/problems/tatami-dani", label: "畳のダニ対策" },
  { href: "/area/saitama/problems/tatami-smell", label: "畳の臭い" },
  { href: "/area/saitama/problems/tatami-sunken", label: "畳のへたり・沈み" },
  { href: "/area/saitama/problems/tatami-sasakure", label: "畳のささくれ" },
  { href: "/area/saitama/problems/pet-urine", label: "ペットの粗相・汚れ" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "対応エリア", item: `${SITE_URL}/area` },
    { "@type": "ListItem", position: 3, name: "埼玉県", item: `${SITE_URL}/area/saitama` },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  areaServed: {
    "@type": "State",
    name: "埼玉県",
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "埼玉県の畳張替え・襖障子・原状回復｜全38市区対応",
  description:
    "埼玉県全域の畳表替え・新調・裏返し、襖・障子張替え、原状回復・内装工事に対応。全38市区へお伺い。法人・複数物件・継続案件もご相談ください。",
  url: `${SITE_URL}/area/saitama`,
  provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: `${SITE_URL}/area/saitama`,
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "埼玉県全域の畳張替え・襖障子・原状回復・内装工事に対応する専門業者。",
  areaServed: [
    { "@type": "State", name: "埼玉県" },
    ...saitama.cities.map((c) => ({ "@type": "City", name: c.name })),
  ],
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

export default function SaitamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "埼玉県" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Saitama Prefecture</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            埼玉県の畳張替え・襖障子・原状回復
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-2">
            さいたま市・川口市・越谷市・川越市・春日部市をはじめ、埼玉県内全38市区に対応しています。
            一般住宅・賃貸物件・旅館・寺社・店舗・不動産管理会社まで幅広くご相談ください。
          </p>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed mb-6">
            現地確認・お見積もりは無料。法人・複数物件・継続案件も歓迎します。施工後には写真付き報告書をご提出します。
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${SITE_TEL.replace(/-/g, "")}`}
              className="inline-block bg-kincya text-white text-sm px-5 py-2.5 tracking-wide hover:bg-kincya/90 transition-colors"
            >
              {SITE_TEL} に電話する
            </a>
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
              "埼玉県の気候・環境と畳の劣化傾向",
              "埼玉県内全38市区の対応エリア一覧",
              "畳・襖・障子・内装・原状回復の12サービス",
              "法人・管理会社対応・継続案件について",
              "埼玉で選ばれる6つの理由",
              "埼玉の方向けよくある質問（Q&A 10問）",
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

          {/* 埼玉県の畳について */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              埼玉県の畳について
            </h2>
            <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
              <p>
                埼玉県は関東平野の中央に位置し、海がない内陸県です。夏場は気温が高く湿度も上昇しやすく、特に梅雨から夏にかけての高温多湿が畳にとって厳しい環境となります。
                冬は北西からの「空っ風（からっかぜ）」の影響で乾燥が激しく、畳表のひび割れや縮みが起きやすい季節でもあります。
              </p>
              <p>
                このような気候条件のもとでは、夏の湿気によるカビ・ダニの発生リスクが高まります。特に賃貸物件・旅館・古い住宅では換気が不十分になりがちで、退去後に畳のカビや臭いが発覚するケースも少なくありません。
                また、さいたま市・川口市・越谷市などの都市部では、マンション・高層住宅の普及に伴い、床暖房・防音フローリングとの組み合わせや、薄型建材床の畳が多く使われる傾向があります。
              </p>
              <p>
                一方、飯能市・秩父方面など西部・北西部の山間部エリアでは古民家・旅館・寺社が多く残り、わら床を使った本格的な畳の需要が根強くあります。
                川越市の「小江戸」エリアや所沢・狭山方面の旧家など、歴史的な建物での畳工事にも豊富な対応実績があります。
              </p>
              <p>
                埼玉県の気候への対策として、ダニが繁殖しにくい和紙畳・完全防水の樹脂畳への素材変更や、調湿性能の高い国産い草を使った表替えをお勧めするケースが多くあります。
                地域や建物の特性に合わせた最適な素材・施工方法を、現地確認後にご提案します。
              </p>
            </div>
          </div>

          {/* 埼玉県内の対応市区一覧 */}
          <div>
            <h2 className="text-xl text-sumi mb-2 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              埼玉県内の対応市区一覧
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">全38市区に対応。各市区ページで詳細な費用・施工情報をご確認いただけます。</p>
            <div className="flex flex-wrap gap-2">
              {saitama.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/area/saitama/${c.slug}`}
                  className="text-xs bg-white border border-border text-sumi/70 px-3 py-1.5 hover:border-ai hover:text-ai transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-sumi/40 mt-3">
              ※ 上記エリア外でも旅館・寺社・大規模法人案件は遠方対応をご相談ください。対応可否は現地確認後にご案内します。
            </p>
          </div>

          {/* 埼玉で選ばれる理由 */}
          <div>
            <h2 className="text-xl text-sumi mb-4 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              埼玉で選ばれる6つの理由
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

          {/* 埼玉の畳・内装サービス一覧 */}
          <div>
            <h2 className="text-xl text-sumi mb-2 pl-4 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
              埼玉の畳・内装サービス一覧
            </h2>
            <p className="text-xs text-sumi/50 mb-4 pl-4">畳から内装・原状回復まで12サービスを埼玉県全域でご提供します。</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES_12.map((s) => (
                <Link
                  key={s.slug}
                  href={`/area/saitama/${s.slug}`}
                  className="block bg-white border border-border p-4 hover:border-kincya transition-colors"
                >
                  <p className="text-sm text-sumi mb-1" style={{ fontFamily: "var(--font-serif)" }}>{s.name}</p>
                  <p className="text-xs text-sumi/60 leading-relaxed mb-2">{s.desc}</p>
                  <span className="text-xs text-ai">埼玉県の{s.name} →</span>
                </Link>
              ))}
            </div>
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
              埼玉県内の施工費用目安
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
                { title: "施工日の調整", body: "お客様のご都合に合わせて施工日を設定します。複数部屋・複数物件の場合は計画的に日程を組みます。旅館・寺社は行事日程に合わせた調整も可能です。" },
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
              埼玉の方向けよくある質問（Q&A）
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
              { label: "埼玉の畳表替え", href: "/area/saitama/tatami-omotegae" },
              { label: "埼玉の畳新調", href: "/area/saitama/tatami-shinchou" },
              { label: "埼玉の畳裏返し", href: "/area/saitama/tatami-uragaeshi" },
              { label: "埼玉の縁なし畳", href: "/area/saitama/herinashi-tatami" },
              { label: "埼玉の和紙畳", href: "/area/saitama/washi-tatami" },
              { label: "埼玉の樹脂畳", href: "/area/saitama/resin-tatami" },
              { label: "埼玉の襖張替え", href: "/area/saitama/fusuma" },
              { label: "埼玉の障子張替え", href: "/area/saitama/shoji" },
              { label: "埼玉の原状回復", href: "/area/saitama/restoration" },
              { label: "畳サービス一覧", href: "/services" },
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
        title="埼玉県の畳・内装工事はお気軽にご相談ください"
        subtitle="現地確認・お見積もりは無料です。埼玉県全38市区に対応。法人・管理会社・複数物件もご相談ください。"
      />
    </>
  );
}
