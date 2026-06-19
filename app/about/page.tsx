import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `会社情報 | ${SITE_NAME}`,
  description: "日本畳パートナーズの会社情報。畳の専門集団として、住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナーです。",
  path: "/about",
});

const COMPANY_INFO = [
  { label: "社名", value: "日本畳パートナーズ株式会社" },
  { label: "設立", value: "2022年" },
  { label: "事業内容", value: "畳工事・内装工事・原状回復工事" },
  { label: "対応地域", value: "全国（詳しくはご相談ください）" },
  { label: "電話番号", value: SITE_TEL },
  { label: "メール", value: SITE_EMAIL },
  { label: "受付時間", value: "9:00〜18:00（土日祝定休）" },
];

const STRENGTHS = [
  { title: "畳を軸にした専門集団", desc: "い草・和紙・樹脂・琉球畳など幅広い素材と施工方法に精通した職人が在籍。一般住宅から旅館・寺社・店舗まで、最適な施工をご提供します。" },
  { title: "法人・管理会社のパートナー", desc: "不動産管理会社・賃貸オーナー・旅館・寺社・店舗オーナーとの継続的なお取引実績。複数物件・大量施工にも対応する体制を整えています。" },
  { title: "内装・原状回復まで一括対応", desc: "畳だけでなく、クロス・床材・建具の内装工事も承ります。複数業者に依頼する手間を省き、空間全体を整えることができます。" },
  { title: "丁寧な現地確認と提案", desc: "施工前に必ず現地を確認し、状態・素材・ご予算に合わせた適切な施工方法をご提案。お見積もりは無料です。" },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "日本畳パートナーズ株式会社",
  url: "https://nihontatami.jp",
  telephone: SITE_TEL,
  email: SITE_EMAIL,
  description: "畳の表替え・新調から内装工事・原状回復まで対応する畳と空間整備の専門パートナー",
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }} />

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "会社情報" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">About Us</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            会社情報
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            私たちは畳を通じて、日本の空間の価値を守り、次の世代に引き継ぐことを使命としています。
          </p>
        </div>
      </section>

      <section className="py-20 bg-kiji">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-kincya tracking-[0.3em] mb-5 uppercase">Mission</p>
          <h2 className="text-3xl sm:text-4xl text-sumi mb-8 leading-snug" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            畳から、空間の価値を整える。
          </h2>
          <div className="space-y-5 text-sm text-sumi/70 leading-relaxed text-left max-w-2xl mx-auto">
            <p>畳は単なる床材ではありません。空間の清潔感・香り・格式・印象をつくり、住む人の気持ちと建物の資産価値に直接影響を与える存在です。</p>
            <p>日本畳パートナーズは、畳の専門性を軸にしながら、内装工事・原状回復まで一括でご相談いただける「空間整備の専門パートナー」を目指しています。</p>
            <p>個人のご家庭から、旅館・寺社・店舗、不動産管理会社・賃貸オーナーまで。規模や用途を問わず、最適な提案と施工でお応えします。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi text-center mb-12" style={{ fontFamily: "var(--font-serif)" }}>私たちの強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STRENGTHS.map((s, i) => (
              <div key={i} className="bg-kiji/40 border border-border p-7">
                <h3 className="text-base text-sumi mb-3" style={{ fontFamily: "var(--font-serif)" }}>{s.title}</h3>
                <p className="text-sm text-sumi/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cloud/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-sumi mb-10 text-center" style={{ fontFamily: "var(--font-serif)" }}>会社概要</h2>
          <div className="bg-white border border-border overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-border">
                {COMPANY_INFO.map((row) => (
                  <tr key={row.label}>
                    <th className="text-left text-xs text-sumi/50 bg-kiji/40 py-4 px-6 font-normal w-32 sm:w-40 tracking-wide">{row.label}</th>
                    <td className="text-sm text-sumi py-4 px-6">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
