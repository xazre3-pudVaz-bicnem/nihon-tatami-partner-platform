import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で車いす・介護対応の床材選びをお考えの方へ｜畳とバリアフリーの考え方",
  description:
    "埼玉県で車いす・介護対応の畳・床材選びをご検討の方へ。畳の段差・摩擦問題、車いすに向いた床材の選択肢、バリアフリー改修との組み合わせを専門家が解説。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-for-wheelchair",
});

const faqItems = [
  {
    category: "general" as const,
    q: "車いすで畳の部屋を使うことはできますか？",
    a: "使用できますが、従来のい草畳は柔らかく車いすが沈みやすく、操作が難しくなります。また、タイヤの跡が残りやすく傷みも早まります。樹脂畳・硬い素材の畳に変更すると車いすの走行がしやすくなります。",
  },
  {
    category: "general" as const,
    q: "畳の縁（へり）が車いすの通行の妨げになりますか？",
    a: "従来の縁あり畳は縁の部分がわずかに段差になる場合があり、車いすのタイヤが引っかかることがあります。縁なし畳（琉球畳）に変更することで、畳同士の境界をフラットに近い仕上がりにできます。ただし、完全な段差解消には下地の調整も必要な場合があります。",
  },
  {
    category: "general" as const,
    q: "樹脂畳は車いすに向いていますか？",
    a: "はい、樹脂畳（ポリプロピレン製）は表面が硬く弾力性が低いため、車いすが沈みにくく操作しやすい特徴があります。また、水拭きができるため汚れを拭き取りやすく、清潔に保ちやすいです。介護環境に向いた素材の一つです。",
  },
  {
    category: "general" as const,
    q: "セキスイ畳（美草）は介護環境に使えますか？",
    a: "はい、セキスイ美草などのポリプロピレン素材の畳は耐久性・撥水性が高く、表面が丈夫なため車いすの使用に適しています。カラーバリエーションも豊富で、介護環境にデザイン性も取り入れたい場合にも選択肢となります。",
  },
  {
    category: "general" as const,
    q: "フローリングへの変更の場合、介護保険の補助金は使えますか？",
    a: "介護保険の住宅改修費（最大18万円まで補助）を利用して床材変更が対象になる場合があります。要介護・要支援認定を受けている方が対象で、ケアマネジャーへの事前相談が必要です。補助制度の利用をご希望の方はケアマネジャーにご相談ください。",
  },
  {
    category: "general" as const,
    q: "畳からフローリングへの変更は難しいですか？",
    a: "基本的な工事としては対応可能です。ただし、畳はフローリングより厚みがあるため、そのまま交換すると段差が生じる場合があります。バリアフリーにするには下地調整が必要になることもあります。詳細は現地確認でご確認ください。",
  },
  {
    category: "general" as const,
    q: "介護目的での床材選びで一番重要なポイントは何ですか？",
    a: "滑りにくさ・クッション性・清掃のしやすさの3点が重要です。車いす使用の場合は走行しやすい硬さも必要です。い草畳はクッション性が高い一方で車いそには不向き、フローリングは走行しやすいが滑りやすいケースもあります。用途・状況に合わせた選択が大切です。",
  },
  {
    category: "general" as const,
    q: "和室の雰囲気を残しながら車いす対応にする方法はありますか？",
    a: "樹脂畳・和紙畳などの機能性畳に変更することで、見た目は和室の雰囲気を保ちながら車いす対応の床にする方法があります。縁なし畳にすることでよりモダンな和室に仕上げることもできます。",
  },
  {
    category: "general" as const,
    q: "将来介護が必要になる可能性があるが、今から対応しておいた方が良いですか？",
    a: "バリアフリー改修は生活環境が変わる前に行う方がスムーズです。特に床材変更は家具の移動・工事の準備が必要なため、余裕をもって検討することをお勧めします。現地確認で将来的な選択肢もご提案できますので、お気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "車いす対応の床材変更について相談できますか？",
    a: "はい、埼玉県内であれば現地確認・お見積もりを無料で承っています。現在の床材の状態・生活環境・ご要望をお聞きしたうえで、樹脂畳・和紙畳・フローリングなどの最適な選択肢をご提案します。お気軽にご連絡ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: { "@type": "State", name: "埼玉県" },
  url: SITE_URL,
};

export default function TatamiForWheelchairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "お悩み別" },
            { label: "車いす・介護対応" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">
            Wheelchair &amp; Care — Saitama
          </p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で車いす・介護対応の畳・床材選びをお考えの方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            車いす利用・介護環境に合った床材選びは、生活の安全と快適さに直結します。
            従来のい草畳をそのまま使い続けるか、機能性畳に変更するか、
            フローリングへ切り替えるかを状況に合わせてご提案します。
            埼玉県内の現地確認・見積もりは無料です。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            車いす利用と畳の相性——い草畳が抱える課題
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              伝統的ない草畳は適度なクッション性・吸湿性・保温性があり、
              寝起きや立ち座りの多い生活に適しています。しかし車いすを使う場合には
              いくつかの課題があります。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>畳が柔らかく車いすが沈みやすい：</strong>
                い草畳は程よい弾力がありますが、車いすのタイヤが沈み込み、
                操作に余分な力が必要になります。長時間の使用で疲労が増す場合があります。
              </li>
              <li>
                <strong>タイヤの跡がつきやすい：</strong>
                車いすのゴムタイヤは畳表に跡をつけやすく、繰り返しの走行で
                い草が傷んでしまいます。通常より早く表替えが必要になることもあります。
              </li>
              <li>
                <strong>縁の段差・引っかかり：</strong>
                縁ありの畳は縁部分がわずかに段差になり、車いすのタイヤが
                引っかかるリスクがあります。転倒防止の観点からも無視できない課題です。
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳を活かす場合の選択肢——樹脂畳・硬めの素材への変更
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              和室の雰囲気を保ちながら車いす対応にしたい場合、
              素材を機能性畳に変更する方法が有効です。
            </p>
            <p>
              <strong>樹脂畳（ポリプロピレン素材）</strong><br />
              表面が硬く弾力性が低いため、車いすが沈みにくく操作しやすい特徴があります。
              水拭きができるので汚れが拭き取りやすく、清潔に保ちやすいです。
              耐久性も高く、車いすによる傷みを受けにくいです。
            </p>
            <p>
              <strong>和紙畳（和紙素材）</strong><br />
              い草より硬く耐久性・撥水性が高い素材です。
              適度な弾力を保ちながら、車いすへの対応力がい草より高いです。
              カラーバリエーションも豊富で、和室のデザイン性を損なわず変更できます。
            </p>
            <p>
              <strong>厚み調整での段差解消</strong><br />
              畳を新調する際に厚みを調整することで、部屋の出入口の段差を
              最小限に抑えることができます。現地確認で下地の状況を確認したうえでご提案します。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            フローリングへの変更という選択肢——バリアフリー補助金の活用も
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              車いすで長期間生活する場合や、根本的なバリアフリー対応が必要な場合は、
              畳からフローリングへの変更も選択肢の一つです。
              フローリングは車いすが走行しやすく、清掃も容易です。
            </p>
            <p>
              介護保険の住宅改修費を利用することで、要介護・要支援認定を受けている方は
              床材変更の費用に補助を受けられる場合があります（上限20万円のうち最大18万円補助）。
              補助制度の利用にはケアマネジャーへの事前相談・申請手続きが必要です。
              制度については各市区町村の窓口またはケアマネジャーにご確認ください。
            </p>
            <p>
              畳からフローリングへの変更は、畳の厚み（通常55mm程度）とフローリングの厚みの差を
              下地調整で埋める工事が伴います。段差が生じないよう適切な施工が必要です。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            介護目的での床材選びのポイント
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              介護環境での床材選びは、使用者の身体状況・生活動作・介護する側の負担の3つを
              総合的に考慮することが重要です。
            </p>
            <p>
              <strong>滑りにくさ</strong><br />
              転倒リスクを下げるために適度な摩擦のある素材が重要です。
              フローリングは光沢のある素材が滑りやすい場合があります。
              防滑処理が施された素材や、マット類の活用も検討してください。
            </p>
            <p>
              <strong>クッション性</strong><br />
              万が一転倒した場合の衝撃を和らげるクッション性も重要な要素です。
              畳はこの点でフローリングより優れていますが、介護用のクッションフロアも選択肢になります。
            </p>
            <p>
              <strong>掃除のしやすさ</strong><br />
              介護環境では清潔な環境を保つことが重要です。
              い草畳はほこりを吸い込みやすく掃除がやや難しいですが、
              樹脂畳・フローリングは拭き掃除ができ衛生的に保ちやすいです。
            </p>
          </div>
        </section>

        {/* Section 5 — Price Table */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。実際の費用は素材・枚数・下地状況により異なります。
            対応可否は現地確認後にご案内します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>施工内容</th>
                  <th className="text-left py-3 pr-6 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>費用目安（1枚あたり）</th>
                  <th className="text-left py-3 text-sumi font-normal" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">樹脂畳 表替え</td>
                  <td className="py-3 pr-6 text-sumi/80">6,500円〜</td>
                  <td className="py-3 text-sumi/60">車いす対応・水拭き可</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">和紙畳 表替え</td>
                  <td className="py-3 pr-6 text-sumi/80">6,500円〜</td>
                  <td className="py-3 text-sumi/60">耐久性・撥水性が高い</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">樹脂・和紙畳 新調</td>
                  <td className="py-3 pr-6 text-sumi/80">18,000円〜</td>
                  <td className="py-3 text-sumi/60">厚み調整対応</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 text-sumi/80">フローリング変更</td>
                  <td className="py-3 pr-6 text-sumi/80">別途お見積もり</td>
                  <td className="py-3 text-sumi/60">下地工事含む・介護保険適用の可能性あり</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 対応可否は現地確認後にご案内します。
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* Related links */}
        <section>
          <h2
            className="text-xl text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/area/saitama" className="text-kincya hover:underline">
                埼玉県の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/tatami" className="text-kincya hover:underline">
                埼玉県の畳工事サービス →
              </Link>
            </li>
            <li>
              <Link href="/services/resin-tatami" className="text-kincya hover:underline">
                樹脂畳・機能性畳について →
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-kincya hover:underline">
                お問い合わせ・無料見積もり →
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <CTASection
        title="車いす・介護対応の床材選びについてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。生活環境に合わせた最適な選択肢をご案内します。"
      />
    </>
  );
}
