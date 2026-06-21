import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
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
  { category: "price", q: "費用はどのくらいですか？", a: "クロスは800円〜/m²、フローリングは5,000円〜/m²、クッションフロアは2,500円〜/m²などが目安です。工事範囲・素材により変動します。現地確認後に無料でお見積もりします。" },
  { category: "general", q: "賃貸物件・複数物件にも対応できますか？", a: "はい。賃貸オーナー様・管理会社様の物件の内装リフォーム・原状回復・空室対策にも対応します。複数物件の一括対応も可能です。" },
  { category: "general", q: "施設・オフィスなど法人向けも対応していますか？", a: "はい。法人施設・オフィス・店舗など、用途に応じた内装工事に対応します。法人向けの一括対応・写真付き報告もご相談ください。" },
  { category: "price", q: "見積もりは無料ですか？", a: "はい。現地確認・お見積もりは無料です。お見積もり後のキャンセルでも費用は発生しません。お気軽にご相談ください。" },
];

export default function InteriorPage() {
  return (
    <>
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
