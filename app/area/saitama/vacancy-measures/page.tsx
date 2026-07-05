import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の空室対策に畳・内装工事を活用する方法｜賃貸オーナー向け",
  description:
    "埼玉県の賃貸オーナー・管理会社向け。空室対策として畳の表替え・素材変更・ふすま障子の整備が内覧印象に与える効果を解説。複数物件の一括対応可能。",
  path: "/area/saitama/vacancy-measures",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳の状態は内見時の印象にどれくらい影響しますか？",
    a: "和室がある物件では、畳の見た目・臭い・感触が入居者の第一印象に大きく影響します。変色・へたり・臭いが目立つ畳は「管理が行き届いていない」という印象を与えやすく、内見から申込みへの転換率に影響する可能性があります。",
  },
  {
    category: "general" as const,
    q: "表替えと裏返しのどちらがコスト効果が高いですか？",
    a: "畳の使用年数が3〜5年以内で状態が良ければ、裏返しが最もコストを抑えてリフレッシュできます。5年以上経過して変色・へたりがある場合は表替えが適切です。状態は現地確認でお伝えします。",
  },
  {
    category: "general" as const,
    q: "縁なし畳・琉球畳にするといくらくらいかかりますか？",
    a: "縁なし畳（半畳単位）の新調は15,000円〜/枚が目安です。素材・サイズ・枚数によって変動します。おしゃれな雰囲気が演出でき、若い世代や単身者層へのアピールになることがあります。費用は現地確認後に正確にお伝えします。",
  },
  {
    category: "general" as const,
    q: "和紙畳を選ぶメリットはなんですか？",
    a: "和紙畳は色あせに強く、い草より長持ちします。見た目の劣化が遅いため、長期間にわたって物件の美観を維持しやすいというメリットがあります。また汚れや湿気にも強く、退去時の原状回復コストを抑えやすい点も賃貸オーナーに支持される理由です。",
  },
  {
    category: "general" as const,
    q: "樹脂畳（ポリプロピレン）の管理上のメリットはありますか？",
    a: "水拭きができるため日常の清掃が容易です。またカビ・ダニが発生しにくく、退去後の清掃の手間を軽減できます。管理が楽な素材として、複数物件を持つオーナーから選ばれることが多いです。",
  },
  {
    category: "general" as const,
    q: "退去後から次の入居まで時間がないのですが、急ぎの対応は可能ですか？",
    a: "まずはお電話でご連絡ください。スケジュールの空き状況を確認してお伝えします。素材の在庫状況によっては即日〜数日以内での対応が可能な場合もあります。",
  },
  {
    category: "general" as const,
    q: "費用対効果の考え方について教えてください。",
    a: "空室1ヶ月分の家賃損失と整備費用を比較する考え方が一般的です。たとえば月5万円の家賃の物件であれば、5〜6万円程度の内装整備投資で空室期間が1ヶ月短縮できれば費用回収できる計算になります。整備内容は物件の状態・家賃・市場環境を踏まえてご提案します。",
  },
  {
    category: "general" as const,
    q: "物件のオーナーが遠方に住んでいますが、依頼できますか？",
    a: "はい、対応しています。鍵をご手配いただければオーナー様が現地不在でも施工可能です。施工の状況は写真でご報告することも相談ベースで対応しています。詳細はお問い合わせください。",
  },
  {
    category: "general" as const,
    q: "費用の目安を教えてください。",
    a: "裏返しは2,500円〜/枚、表替え（一般い草）は4,500円〜/枚、表替え（和紙）は6,500円〜/枚、縁なし畳・新調は15,000円〜/枚が目安です。素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "複数物件の一括依頼も可能ですか？",
    a: "はい、複数物件の同時依頼も承っています。スケジュールや対応範囲は物件の状況を確認のうえご案内します。まずはお問い合わせください。",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉の空室対策として畳・内装工事を活用したい方へ", item: `${SITE_URL}/area/saitama/vacancy-measures` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/vacancy-measures#webpage`,
  name: "埼玉の空室対策に畳・内装工事を活用する方法｜賃貸オーナー向け",
  description: "埼玉県の賃貸オーナー・管理会社向け。空室対策として畳の表替え・素材変更・ふすま障子の整備が内覧印象に与える効果を解説。複数物件の一括対応可能。",
  url: `${SITE_URL}/area/saitama/vacancy-measures`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  "@id": `${SITE_URL}/#local-business`,
};

export default function VacancyMeasuresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
            { label: "空室対策と畳工事" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Vacancy Measures — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉の空室対策として畳・内装工事を活用したい方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            和室のある賃貸物件で空室が続いている場合、畳の状態が入居者の印象に影響している可能性があります。コストを抑えたリフレッシュから素材変更まで、オーナー視点で最適な施工をご提案します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* 畳の状態が入居率に与える影響 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳の状態が入居率に与える影響
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              内見時に和室の見た目・臭い・感触は入居者の印象を大きく左右します。い草の変色・へたり・独特の臭いは、物件全体の管理状態への不信感につながることがあります。逆に清潔で状態のよい畳は和室のある物件の魅力を引き立て、入居決定に好影響を与えます。
            </p>
            <p>
              埼玉県内の賃貸市場では、和室付き物件を希望する層は一定数存在します。しかし和室に対してネガティブな印象を持つ入居希望者も多く、畳の状態がその印象を左右することがあります。古びた畳が不安材料となっている場合、適切な整備でその懸念を払拭できる可能性があります。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>変色・へたりのある畳は「管理が行き届いていない」という印象を与えやすい</li>
              <li>臭いは内見時に即座に印象を悪化させる要因になりやすい</li>
              <li>清潔感のある和室は、和室を好む入居者層に強くアピールできる</li>
              <li>縁なし畳・琉球畳などのモダンなデザインは若い世代にも訴求できる</li>
            </ul>
          </div>
        </section>

        {/* 空室対策として有効な施工内容 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            空室対策として有効な施工内容
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              物件の状態・予算・ターゲット入居者層によって最適な施工内容は異なります。コストを最小限に抑えつつ印象を改善したい場合と、素材変更でより長期的な価値向上を狙う場合とで選択肢が変わります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">コスト重視：裏返し・表替え</h3>
                <p className="text-xs text-sumi/70">
                  現在の畳床を活用して表面だけをリフレッシュします。費用を抑えながら見た目と臭いを改善できます。畳の使用年数が浅い場合は裏返しが最もコスト効率が高い選択です。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">差別化重視：縁なし畳・琉球畳</h3>
                <p className="text-xs text-sumi/70">
                  半畳サイズの縁なし畳や琉球畳に変更することで、モダンな和室の雰囲気を演出できます。和室をおしゃれな空間として訴求したい物件に向いています。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">耐久性重視：和紙畳・樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  和紙畳・樹脂畳は色あせや傷に強く、退去時の劣化が少ないため長期的なメンテナンスコストを抑えやすいです。複数の入居者サイクルを見越した投資として有効です。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">全面リニューアル：新調</h3>
                <p className="text-xs text-sumi/70">
                  畳床からすべて新しくします。床のへたりが著しい場合や、物件全体のリノベーションに合わせたタイミングで選ばれることが多いです。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* おすすめの素材と特徴 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            おすすめの素材と特徴
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">素材</th>
                  <th className="px-4 py-3 font-normal">特徴</th>
                  <th className="px-4 py-3 font-normal">こんな物件に向く</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">い草（国産・中国産）</td>
                  <td className="px-4 py-3 text-sumi/70">自然な香り・調湿性あり</td>
                  <td className="px-4 py-3 text-sumi/70">伝統的な和室を好む入居者向け</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">和紙畳</td>
                  <td className="px-4 py-3 text-sumi/70">色あせに強く長持ち。汚れにも強い</td>
                  <td className="px-4 py-3 text-sumi/70">長期入居・ファミリー向け物件</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">樹脂畳</td>
                  <td className="px-4 py-3 text-sumi/70">水拭き可・カビ発生リスク低い</td>
                  <td className="px-4 py-3 text-sumi/70">管理の手間を減らしたい物件</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">縁なし畳（琉球畳）</td>
                  <td className="px-4 py-3 text-sumi/70">モダンな印象。デザイン性が高い</td>
                  <td className="px-4 py-3 text-sumi/70">若い世代・おしゃれ重視の物件</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* 費用対効果の考え方 */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用対効果の考え方
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              空室対策としての内装整備を検討する際、1〜2ヶ月分の家賃相当の整備投資で空室リスクを下げるという考え方があります。たとえば月5万円の家賃の物件であれば、5〜10万円程度の整備費用で空室期間が1〜2ヶ月短縮できれば、費用対効果がある投資といえます。
            </p>
            <p>
              もちろん整備だけで必ず入居が決まるわけではありませんが、内見時の印象改善は申込み転換率の向上に寄与することがあります。物件の家賃設定・立地・競合物件の状況などを踏まえ、どの程度の整備が適切かご相談ください。費用と効果のバランスを重視した施工内容をご提案します。
            </p>
          </div>
        </section>

        {/* 費用目安テーブル */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">施工内容</th>
                  <th className="px-4 py-3 font-normal">費用目安（1枚あたり）</th>
                  <th className="px-4 py-3 font-normal">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">裏返し</td>
                  <td className="px-4 py-3">2,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">状態が比較的よい場合</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（一般い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">コストを抑えてリフレッシュ</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（和紙）</td>
                  <td className="px-4 py-3">6,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">長持ち・色あせに強い</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">縁なし畳・新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">モダンな和室へリニューアル</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
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

        {/* 関連ページ */}
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
              <Link href="/area/saitama/for-rental-owner" className="text-kincya hover:underline">
                賃貸オーナー向け畳工事 →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/for-real-estate" className="text-kincya hover:underline">
                不動産会社・管理会社向け →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/bulk-order" className="text-kincya hover:underline">
                複数物件・大量発注の畳工事 →
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
        title="空室対策の畳・内装工事についてご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。物件の状態を確認して費用対効果の高い施工をご提案します。"
      />
    </>
  );
}
