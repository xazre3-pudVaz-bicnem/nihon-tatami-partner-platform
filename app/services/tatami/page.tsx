import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { TATAMI_SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: `畳工事一覧 | 表替え・裏返し・新調・縁なし畳・和紙畳 | ${SITE_NAME}`,
  description:
    "畳表替え・裏返し・新調の違いから素材選びの総合ガイドまで。い草・和紙・樹脂、縁あり・縁なしを用途別（住宅・旅館・寺社・店舗・賃貸）に解説。住宅から法人施設まで幅広い畳工事を承ります。",
  path: "/services/tatami",
});

const WORK_TYPES = [
  {
    name: "表替え",
    desc: "畳床はそのままに、表面の畳表（ゴザ）と縁を新しくする工事。費用を抑えながら清潔感とい草の香りを取り戻せる、最も一般的なメンテナンスです。",
    cycle: "5〜8年に一度が目安",
    href: "/services/tatami-omotegae",
  },
  {
    name: "裏返し",
    desc: "使用中の畳表を裏返して再利用する工事。2〜3年程度使った比較的新しい畳表に有効で、費用を大きく抑えられます。一度しか行えません。",
    cycle: "使用2〜3年が目安",
    href: "/services/tatami-uragaeshi",
  },
  {
    name: "新調",
    desc: "畳床・畳表・縁をすべて作り直す完全リニューアル。踏み込みの沈み・へたり、深部のカビダニ、リフォーム時に最適です。",
    cycle: "10〜20年・床の劣化時",
    href: "/services/tatami-shinchou",
  },
];

export default function TatamiServicesPage() {
  return (
    <>
      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "サービス", href: "/services" }, { label: "畳工事" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">Tatami Works</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳工事
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳表替え・裏返し・新調から縁なし畳・和紙畳・樹脂畳まで。
            住宅・旅館・寺社・店舗・賃貸物件の畳工事を幅広く承ります。
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TATAMI_SERVICES.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 畳工事の全体像 */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            畳工事の全体像
          </h2>
          <p className="text-sm text-sumi/80 leading-relaxed mb-8">
            畳のメンテナンスには、大きく分けて「表替え」「裏返し」「新調」の3つの工法があります。
            畳の状態・使用年数・ご予算に応じて最適な工法は異なります。
            まずはそれぞれの違いを知り、現在の畳に合った方法を選びましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {WORK_TYPES.map((w) => (
              <Link
                key={w.name}
                href={w.href}
                className="block bg-kiji/40 border border-border p-5 hover:border-ai transition-colors duration-200"
              >
                <h3 className="text-lg text-sumi mb-2 pl-3 border-l-2 border-kincya" style={{ fontFamily: "var(--font-serif)" }}>
                  {w.name}
                </h3>
                <p className="text-xs text-sumi/70 leading-relaxed mb-3">{w.desc}</p>
                <p className="text-xs text-kincya">目安：{w.cycle}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-sumi/50 mt-4">
            3つの違いをより詳しく知りたい方は
            <Link href="/compare/omotegae-uragaeshi-shinchou" className="text-ai hover:underline mx-1">
              「表替え・裏返し・新調の違い」
            </Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* 素材選びの総合ガイド */}
      <section className="py-14 bg-kiji/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-4" style={{ fontFamily: "var(--font-serif)" }}>
            素材選びの総合ガイド
          </h2>
          <p className="text-sm text-sumi/80 leading-relaxed mb-6">
            畳の表面素材は、い草・和紙・樹脂の3種類が代表的です。
            香り・風合いを重視するならい草、耐久性・色あせにくさ・清掃性を重視するなら和紙・樹脂が向いています。
            縁あり・縁なし（琉球畳）の選択でも空間の印象が大きく変わります。
          </p>
          <div className="bg-white border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-sumi text-white">
                  <th className="text-left text-xs py-3 px-5 font-normal">素材</th>
                  <th className="text-left text-xs py-3 px-5 font-normal">特徴</th>
                  <th className="text-left text-xs py-3 px-5 font-normal hidden sm:table-cell">向いている用途</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-kiji/30 transition-colors">
                  <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>い草</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/70">自然な香り・調湿性・伝統的な風合い</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">住宅の和室・茶室・旅館・寺社</td>
                </tr>
                <tr className="hover:bg-kiji/30 transition-colors">
                  <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>和紙</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/70">色あせ・ささくれに強く清掃しやすい</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">子育て・ペット・賃貸・旅館</td>
                </tr>
                <tr className="hover:bg-kiji/30 transition-colors">
                  <td className="text-sm py-3.5 px-5 text-sumi" style={{ fontFamily: "var(--font-serif)" }}>樹脂</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/70">水拭き可・高耐久・防汚性が高い</td>
                  <td className="text-xs py-3.5 px-5 text-sumi/50 hidden sm:table-cell">水回り近く・店舗・汚れやすい空間</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-4">
            素材ごとの詳しい比較は
            <Link href="/compare/igusa-washi-resin" className="text-ai hover:underline mx-1">
              「い草・和紙・樹脂畳の比較」
            </Link>
            、選び方の流れは
            <Link href="/guide/how-to-choose-tatami" className="text-ai hover:underline mx-1">
              「畳の選び方ガイド」
            </Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* 用途別おすすめ */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>
            用途別のおすすめ
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              <strong className="text-sumi">住宅</strong> — 香りと風合いを楽しむなら国産い草の表替え。
              小さなお子様・ペットがいるご家庭には和紙畳・樹脂畳が安心です。
            </p>
            <p>
              <strong className="text-sumi">旅館・宿泊施設</strong> — 一般客室は耐久性とコストのバランスに優れた素材、
              特別室・茶室には手刈り天日干しの上質い草を。
              <Link href="/business/ryokan" className="text-ai hover:underline mx-1">旅館向け畳工事</Link>
              をご覧ください。
            </p>
            <p>
              <strong className="text-sumi">寺院・神社</strong> — 本堂には格式の高い縁と上質い草を。
              <Link href="/business/temple-shrine" className="text-ai hover:underline mx-1">寺院・神社向け畳工事</Link>
              で詳しく解説しています。
            </p>
            <p>
              <strong className="text-sumi">店舗</strong> — 小上がり・和スペースには、人の出入りに強く清掃しやすい和紙畳・樹脂畳がおすすめです。
            </p>
            <p>
              <strong className="text-sumi">賃貸物件</strong> — 退去後の原状回復は表替え・裏返しでコストを抑え、
              空室対策には和紙畳への変更でペット可転換も。
              <Link href="/restoration/rental" className="text-ai hover:underline mx-1">賃貸の原状回復</Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-kiji/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-sumi mb-6" style={{ fontFamily: "var(--font-serif)" }}>関連サービス・ページ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
              { label: "内装工事", href: "/interior" },
              { label: "原状回復", href: "/restoration" },
              { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
              { label: "料金の目安", href: "/price" },
              { label: "施工事例", href: "/works" },
              { label: "FAQ", href: "/faq" },
              { label: "お問い合わせ", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="border border-border text-sm text-sumi text-center py-3 hover:border-ai hover:text-ai transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
