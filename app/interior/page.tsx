import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import { INTERIOR_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: `内装工事・リフォームなら${SITE_NAME}｜クロス・床・フローリング・店舗内装まで`,
  description:
    "クロス張替え・フローリング・クッションフロア・フロアタイル・店舗内装・住宅リフォームまで一括対応。畳工事の専門性を軸に、和室から洋室への変更・和モダン空間づくりも。住宅・賃貸・店舗・オフィス・施設対応。",
  path: "/interior",
});

const SERVICE_LINKS = [
  { title: "クロス張替え", href: "/interior/cross", desc: "壁紙・天井クロスの張替え。住宅・賃貸・店舗・オフィス対応。" },
  { title: "フローリング工事", href: "/interior/floor", desc: "合板・無垢・直貼り。和室から洋室への変更も。" },
  { title: "クッションフロア", href: "/interior/cushion-floor", desc: "水回り・子供部屋・賃貸の原状回復に。防水・清掃性が高い。" },
  { title: "フロアタイル", href: "/interior/floor-tile", desc: "店舗・玄関・水回りに。耐久性とデザイン性を両立。" },
  { title: "店舗内装工事", href: "/interior/store-interior", desc: "飲食店・美容室・小売店・オフィスの内装・座敷づくり。" },
  { title: "住宅内装リフォーム", href: "/interior/house-renovation", desc: "畳・クロス・床・建具を一括。和モダン・バリアフリーも。" },
];

const WORK_TYPES = [
  {
    title: "クロス張替え（壁・天井）",
    desc: "防カビ・消臭・抗菌・防汚クロスなど機能性クロスも豊富に取り扱い。量産品からデザイン性の高いものまで対応します。",
  },
  {
    title: "フローリング",
    desc: "合板・直貼り・無垢の各種に対応。和室の畳撤去からフローリングへの変更も承ります。",
  },
  {
    title: "クッションフロア",
    desc: "水回り・子供部屋・賃貸の原状回復に適した防水素材。清掃性が高く、施工日数が短いのが特長です。",
  },
  {
    title: "フロアタイル",
    desc: "店舗・玄関・水回りに最適。木目・石目など多様なデザインと高い耐久性を両立します。",
  },
  {
    title: "店舗内装",
    desc: "飲食店・美容室・小売店・オフィスの内装工事に対応。和食店の座敷づくりから洋風テナント工事まで。",
  },
  {
    title: "住宅内装",
    desc: "和室・洋室・水回りのリフォームから和モダン化・バリアフリー対応まで。空間全体を一括して整えます。",
  },
  {
    title: "和モダン空間",
    desc: "縁なし畳＋木目床＋機能クロスの組み合わせで、和の落ち着きと現代的なデザインを両立した空間を実現します。",
  },
];

const COST_FACTORS = [
  { label: "施工面積・部屋数", note: "面積が広いほど単価が下がる場合があります。" },
  { label: "素材グレード", note: "量産クロス vs 機能性クロス・無垢材などで大きく変わります。" },
  { label: "下地の状態", note: "既存材の撤去・下地補修が必要な場合は別途費用が発生します。" },
  { label: "家具の移動", note: "大型家具の移動が必要な場合は事前にご相談ください。" },
  { label: "搬入条件", note: "階段作業・搬入困難な現場では追加費用が発生することがあります。" },
  { label: "廃材処分費", note: "撤去した旧材の処分費が含まれる場合があります。" },
];

const FLOW_STEPS = [
  { step: "01", title: "お問い合わせ・ご相談", desc: "工事箇所・ご希望の素材・スケジュールなどをお気軽にお知らせください。" },
  { step: "02", title: "現地確認（無料）", desc: "実際に現場を拝見し、下地の状態・面積・施工条件を確認します。" },
  { step: "03", title: "お見積もり・素材提案", desc: "工種別の内訳を明示した見積もりをご提出します。素材サンプルもご覧いただけます。" },
  { step: "04", title: "着工日調整", desc: "お客様のご都合・物件の状況に合わせて着工日を決定します。" },
  { step: "05", title: "施工（養生・撤去・張替え）", desc: "丁寧に養生を行い、既存材の撤去から新素材の施工まで一括して対応します。" },
  { step: "06", title: "確認・清掃・引き渡し", desc: "施工後にお客様と一緒に仕上がりを確認し、清掃のうえ引き渡します。" },
];

const faqs: FaqItem[] = [
  { category: "general", q: "内装工事はどこまで対応していますか？", a: "クロス張替え、フローリング・クッションフロア・フロアタイルの床工事、ふすま・障子・網戸の建具張替え、店舗内装、住宅リフォームまで対応します。畳工事と合わせた一括施工が得意です。" },
  { category: "general", q: "畳工事と内装工事を一緒に頼めますか？", a: "はい。畳の表替え・新調を軸に、クロス・床・建具をまとめてご依頼いただけます。別々に業者を手配する手間がなく、日程・費用の両面で効率的です。" },
  { category: "general", q: "クロスにはどんな種類がありますか？", a: "ビニールクロス・布クロス・紙クロスのほか、防カビ・消臭・抗菌・防汚などの機能性クロスがあります。用途・予算に合わせてご提案します。詳しくはクロス張替えのページをご覧ください。" },
  { category: "general", q: "床工事の種類は？", a: "フローリング（合板・無垢・直貼り）、クッションフロア、フロアタイルがあります。居室はフローリング、水回りはクッションフロア、店舗はフロアタイルなど、場所に応じて使い分けます。" },
  { category: "general", q: "和室から洋室への変更はできますか？", a: "はい。畳を撤去してフローリングに変更し、下地の段差を解消します。必要に応じてクロスや収納も整えます。逆に洋室に畳コーナーを設けることも可能です。" },
  { category: "general", q: "和モダンな空間にできますか？", a: "はい。縁なし畳・カラー畳、木目の床材、機能性クロスを組み合わせ、和の落ち着きと現代的なデザインを両立した和モダン空間をご提案します。" },
  { category: "general", q: "原状回復と内装リフォームの違いは何ですか？", a: "原状回復は賃貸退去時に物件を貸せる状態に戻す工事で、ガイドラインに沿った費用負担の整理が重要です。内装リフォームは住まいをより快適・きれいにする工事です。当社はどちらにも対応します。" },
  { category: "btob", q: "店舗・オフィスの内装にも対応していますか？", a: "はい。飲食店・美容室・小売店・オフィスの内装工事に対応します。和食店の座敷づくり、テナントのスケルトンからの内装、退去時の原状回復まで承ります。" },
  { category: "general", q: "住みながら工事できますか？", a: "可能な範囲で、部屋を区切って順番に施工するなど、生活への影響を抑える方法をご提案します。状況に応じて最適な進め方をご相談ください。" },
  { category: "general", q: "工期はどのくらいですか？", a: "1部屋のクロス・畳なら1〜2日、床工事や複数部屋を含む場合は数日〜が目安です。工事範囲によって変動するため、計画段階でスケジュールをご案内します。" },
  { category: "general", q: "家具の移動は必要ですか？", a: "施工箇所に応じて家具の移動が必要です。当日に移動できる範囲は対応し、大型家具は事前にご相談のうえ段取りを決めます。" },
  { category: "price", q: "費用はどのくらいですか？", a: "クロスは800円〜/m²（税込）、フローリングは5,000円〜/m²（税込）、クッションフロアは2,500円〜/m²（税込）などが目安です。工事範囲・素材により変動します。現地確認後に無料でお見積もりします。" },
  { category: "general", q: "賃貸物件・複数物件にも対応できますか？", a: "はい。賃貸オーナー様・管理会社様の物件の内装リフォーム・原状回復・空室対策にも対応します。複数物件の一括対応も可能です。" },
  { category: "general", q: "施設・オフィスなど法人向けも対応していますか？", a: "はい。法人施設・オフィス・店舗など、用途に応じた内装工事に対応します。法人向けの一括対応・写真付き報告もご相談ください。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
  { category: "general", q: "下地の傷みがあっても内装工事できますか？", a: "はい。現地確認で下地の状態を確認し、必要な補修を含めた施工プランをご提案します。下地補修を省いた施工は仕上がりに影響するため、状態に応じた適切な処置をご案内します。" },
  { category: "general", q: "臭いのするクロスを消臭タイプに変えられますか？", a: "はい。タバコ・ペット・生活臭などに対応した消臭・抗菌クロスへの張替えが可能です。機能性クロスは量産品よりやや高くなりますが、効果が持続するためご好評をいただいています。" },
  { category: "general", q: "壁だけ・天井だけでも張替えできますか？", a: "はい。壁のみ・天井のみのクロス張替えにも対応します。ただし、壁と天井を一緒に張り替える方が仕上がりの統一感が出やすいため、状況に応じてご提案します。" },
  { category: "btob", q: "店舗の営業時間外に施工してもらえますか？", a: "はい。閉店後・定休日・早朝など、営業に支障のないタイミングでの施工調整が可能です。スケジュールをご相談の上、最適な進め方をご提案します。" },
  { category: "btob", q: "写真付き報告書を出してもらえますか？", a: "はい。施工前・施工後の写真を添えた報告書を発行します。法人・管理会社様のオーナー報告や社内確認用資料としてご活用いただけます。" },
];

const INTERIOR_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/interior#service`,
  name: "内装工事（クロス・床・建具）",
  description: "クロス張替え・フローリング・クッションフロア・フロアタイル・建具調整など、住宅・店舗・賃貸物件の内装工事を一括対応。",
  serviceType: "内装工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
  },
  url: `${SITE_URL}/interior`,
  areaServed: { "@type": "Country", name: "Japan" },
};

const INTERIOR_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function InteriorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(INTERIOR_SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(INTERIOR_FAQ_SCHEMA) }} />
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "内装工事" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Interior Works</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            内装工事・リフォーム
          </h1>
          <p className="text-sm text-white/60 max-w-2xl leading-relaxed">
            クロス・床・フローリング・店舗内装まで。畳工事の専門性を軸に、空間全体をまとめてリフレッシュ。
            住宅・賃貸・店舗・オフィス・施設に対応します。
          </p>
        </div>
      </section>

      {/* 概要 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>内装工事全体の概要と対応範囲</h2>
          <p>
            内装工事とは、壁・天井・床・建具など、室内を構成する仕上げ材を整える工事の総称です。
            日本畳パートナーズは、畳工事の専門性を軸にしながら、クロス張替え・床工事・建具張替え・店舗内装・住宅リフォームまで一括でご依頼いただけます。
            クロス・床・建具を別々の業者に依頼する手間がなく、空間全体を効率よく整えられます。
          </p>
          <p>
            対応範囲は、一般住宅の和室・洋室・水回りから、賃貸物件の原状回復・空室対策、店舗・オフィス・施設の内装まで幅広く、
            和室から洋室への変更、和モダン空間づくり、バリアフリー対応など、ご要望に合わせた提案が可能です。
          </p>
        </div>
      </section>

      {/* 内装工事とリフォームの違い */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>内装工事とリフォームの違い</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-border p-6">
              <h3 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>内装工事</h3>
              <p className="text-sm text-sumi/70 leading-relaxed">
                壁・床・建具などの仕上げ材を新しくする工事です。クロスの張替え・フローリングの施工・建具の更新など、
                既存の構造を変えずに内側の仕上げを刷新します。工期が短く、費用を抑えながら空間を一新できます。
              </p>
            </div>
            <div className="bg-white border border-border p-6">
              <h3 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>リフォーム</h3>
              <p className="text-sm text-sumi/70 leading-relaxed">
                老朽化した設備・間取り・構造を改善する大規模な工事を指します。水回り設備の入れ替えや間取り変更など、
                構造に踏み込む工事が含まれます。内装工事よりも工期・費用が大きくなる傾向があります。
              </p>
            </div>
          </div>
          <div className="bg-ai/5 border border-ai/20 px-6 py-4 text-sm text-sumi/80">
            <strong className="text-sumi">当社の対応範囲：</strong>内装工事（仕上げ材の張替え・整備）を中心に承ります。
            間取り変更・設備入れ替えなどを含む大規模リフォームは、現地確認後に対応可否をご案内します。
          </div>
        </div>
      </section>

      {/* 対応工事範囲の詳細 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>対応工事範囲の詳細</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORK_TYPES.map((w) => (
              <div key={w.title} className="bg-kiji/30 border border-border p-6">
                <h3 className="text-sm text-sumi mb-2 font-medium" style={{ fontFamily: "var(--font-serif)" }}>{w.title}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 内装工事メニュー */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>内装工事メニュー</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_LINKS.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white border border-border hover:border-ai/30 transition-all duration-300 p-6">
                <h3 className="text-base text-sumi mb-2 group-hover:text-ai transition-colors" style={{ fontFamily: "var(--font-serif)" }}>{s.title}</h3>
                <p className="text-xs text-sumi/60 leading-relaxed mb-3">{s.desc}</p>
                <p className="text-xs text-ai group-hover:underline">詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {INTERIOR_SERVICES && INTERIOR_SERVICES.length > 0 && (
        <section className="py-16 bg-shiro">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>関連サービス</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INTERIOR_SERVICES.map((s, i) => (
                <ServiceCard key={s.id} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 費用が変わる要因 */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>費用が変わる主な要因</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">内装工事の費用は現場の状況・素材・工事範囲によって変動します。すべて税込表示。現地確認後に正式お見積もりをご提出します。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {COST_FACTORS.map((f) => (
              <div key={f.label} className="bg-white border border-border px-5 py-4">
                <p className="text-sm text-sumi font-medium mb-1">{f.label}</p>
                <p className="text-xs text-sumi/60">{f.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border border-border px-5 py-4 text-sm text-sumi/70">
            <strong className="text-sumi">法人・大量施工の場合：</strong>複数物件・大面積の施工は個別お見積もりになります。
            継続的なご依頼を検討中の管理会社・法人様はお気軽にご相談ください。
          </div>
          <p className="text-xs text-sumi/40 mt-3 text-right">※ 上記は目安です。現地確認後に無料でお見積もりします。</p>
        </div>
      </section>

      {/* 施工の流れ */}
      <section className="py-16 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>施工の流れ</h2>
          <div className="space-y-4">
            {FLOW_STEPS.map((step, idx) => (
              <div key={step.step} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-sumi text-white text-xs flex items-center justify-center" style={{ fontFamily: "var(--font-serif)" }}>
                  {step.step}
                </div>
                <div className="flex-1 pt-1 pb-3 border-b border-border last:border-0">
                  <p className="text-sm text-sumi font-medium mb-0.5">{step.title}</p>
                  <p className="text-xs text-sumi/60 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施工前の注意点 */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>施工前の注意点</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-border p-6">
              <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>家具の移動について</h3>
              <p className="text-xs text-sumi/70 leading-relaxed">
                施工箇所の家具は移動が必要です。軽い家具は当日対応できますが、大型家具・重量物は事前にご相談ください。
                状況によっては分割施工も可能です。
              </p>
            </div>
            <div className="bg-white border border-border p-6">
              <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>臭いと乾燥時間</h3>
              <p className="text-xs text-sumi/70 leading-relaxed">
                クロスの接着剤・床材の塗料は施工直後に独特の臭いがする場合があります。
                施工後は換気をしていただき、素材によっては乾燥時間が必要です。詳細は施工時にご案内します。
              </p>
            </div>
            <div className="bg-white border border-border p-6">
              <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>養生中の過ごし方</h3>
              <p className="text-xs text-sumi/70 leading-relaxed">
                施工中は養生シートを敷くため、施工箇所への立ち入りを制限する場合があります。
                安全のため、施工エリアには近づかないようご協力をお願いします。
              </p>
            </div>
            <div className="bg-white border border-border p-6">
              <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>住みながら工事する場合</h3>
              <p className="text-xs text-sumi/70 leading-relaxed">
                居住しながらの施工も可能です。部屋を順番に施工するなど、生活への影響を最小限に抑える進め方をご提案します。
                ご不安な点は事前にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 法人・店舗向けの進め方 */}
      <section className="py-14 bg-shiro">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4 text-center" style={{ fontFamily: "var(--font-serif)" }}>法人・店舗向けの進め方</h2>
          <p className="text-sm text-sumi/60 text-center mb-8">管理会社・賃貸オーナー・店舗オーナー向けに、業務効率を重視した対応体制を整えています。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "複数物件の一括依頼", desc: "管理会社・賃貸オーナーの複数物件を一括でご依頼いただけます。窓口を一本化し、物件ごとの進捗管理もサポートします。" },
              { title: "営業時間外・定休日施工", desc: "閉店後・定休日・早朝など、お店の営業に影響しないタイミングでの施工調整が可能です。事前にご相談ください。" },
              { title: "写真付き施工報告書", desc: "施工前後の写真と工種別内訳を記載した報告書を発行します。オーナー報告・社内確認・費用精算の根拠資料としてご利用いただけます。" },
              { title: "請求書払いの対応", desc: "法人・管理会社のお取引では請求書払いに対応します。支払いサイクルなどのご要望は個別にご相談ください。" },
              { title: "空室写真への影響", desc: "リフォーム完了後の仕上がり写真の撮影タイミングをご案内します。空室募集用写真の更新に合わせた施工計画が可能です。" },
            ].map((item) => (
              <div key={item.title} className="bg-kiji/30 border border-border p-5">
                <h3 className="text-sm text-sumi font-medium mb-2" style={{ fontFamily: "var(--font-serif)" }}>{item.title}</h3>
                <p className="text-xs text-sumi/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応シーン別 */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-sm text-sumi/80 leading-relaxed">
          <h2 className="text-2xl text-sumi mb-2" style={{ fontFamily: "var(--font-serif)" }}>畳と内装工事の同時施工メリット</h2>
          <p>
            畳の張替えと内装工事を同時に行うことで、和室をはじめとする空間全体を一度に整えられます。
            業者の手配・日程調整が一本化でき、養生・搬入も一度で済むため、工期短縮・費用面でメリットがあります。
            和室では、畳・クロス・ふすま・障子をまとめて整えると、空間の印象が見違えるほど刷新されます。
          </p>
          <h2 className="text-2xl text-sumi mb-2 pt-2" style={{ fontFamily: "var(--font-serif)" }}>対応シーン別の内装工事</h2>
          <ul className="space-y-2">
            <li><strong className="text-sumi">住宅</strong> — 和室・洋室・水回りのリフォーム、和モダン化、バリアフリー対応。</li>
            <li><strong className="text-sumi">賃貸</strong> — 退去後の原状回復、空室対策の内装リフレッシュ。</li>
            <li><strong className="text-sumi">店舗</strong> — 飲食店・美容室・小売店の内装、座敷づくり、テナント工事。</li>
            <li><strong className="text-sumi">オフィス・施設</strong> — 床・壁の内装、応接スペースづくり。</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-8 text-center" style={{ fontFamily: "var(--font-serif)" }}>よくある質問</h2>
          <div className="bg-white border border-border px-5 py-1">
            <FaqSection items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-10 bg-kiji/40 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-sumi/70 mb-4">畳工事と内装工事をまとめてご依頼いただくことで、空間全体をスムーズに整えられます。</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services/tatami" className="inline-block border border-sumi text-sumi text-sm px-6 py-2.5 hover:bg-sumi hover:text-white transition-all duration-300">畳工事を見る</Link>
            <Link href="/restoration" className="inline-block border border-sumi text-sumi text-sm px-6 py-2.5 hover:bg-sumi hover:text-white transition-all duration-300">原状回復を見る</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
