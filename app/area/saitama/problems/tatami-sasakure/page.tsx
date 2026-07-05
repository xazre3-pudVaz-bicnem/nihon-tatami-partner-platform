import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳のささくれが気になる方へ｜裏返し・表替えの判断基準",
  description:
    "埼玉県で畳のささくれ・毛羽立ちにお困りの方へ。繊維の自然劣化が起きるタイミング、裏返し・表替え・新調どれを選ぶべきか、費用目安まで専門家が解説。足にひっかかる前に対処しましょう。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-sasakure",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳のささくれは何年ごろから出てきますか？",
    a: "い草の畳表は使用開始から5〜8年ほどで繊維が自然に劣化し、ささくれ・毛羽立ちが目立ってきます。日当たりや使用頻度によって前後しますが、足にひっかかりを感じ始めたら表替えのサインです。",
  },
  {
    category: "general" as const,
    q: "ささくれを放置するとどうなりますか？",
    a: "ささくれが広範囲になると、繊維が衣類に付きやすくなり、小さなお子様が素足で歩く際にケガをするリスクがあります。また劣化が進むと掃除機で吸い切れない細かいクズが増え、衛生面でも問題が起きやすくなります。",
  },
  {
    category: "general" as const,
    q: "ささくれを自分でテープで押さえても大丈夫ですか？",
    a: "応急処置としてセロテープ等で留める方もいますが、根本的な解決にはなりません。また接着剤跡が畳表に残ると、後の表替え作業に影響することがあります。早めに専門家へご相談ください。",
  },
  {
    category: "general" as const,
    q: "裏返しとは何ですか？ささくれに効果がありますか？",
    a: "裏返しは使用済みの畳表を裏に返して再利用する施工です。使用2〜3年程度で軽度の色あせにとどまる場合に有効です。ただし、ささくれが目立つ段階（5年以上使用）は繊維が全体的に劣化しているため、裏面も状態が悪いことが多く、表替えをおすすめします。",
  },
  {
    category: "general" as const,
    q: "ささくれが出た畳は掃除機をかけても大丈夫ですか？",
    a: "畳の目に沿って優しくかければ問題ありません。ただし、繊維を引っ張る方向（目と逆方向）にかけると劣化を促進させてしまいます。繊維のクズが多く出るようであれば、早めの表替えを検討してください。",
  },
  {
    category: "general" as const,
    q: "表替えと新調はどちらが必要か、どう判断しますか？",
    a: "踏んだとき沈む・ふかふかする感触がなければ表替えで対応できます。沈みや床下のきしみ感がある場合は畳床の劣化が疑われるため新調が必要です。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "表替えの費用はどのくらいかかりますか？",
    a: "中国産い草で4,500円〜、国産い草で5,500円〜が1枚あたりの目安です。素材・枚数・現場状況によって変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "ささくれが目立つ畳でも裏返しはできますか？",
    a: "ささくれが広範囲・深度が進んでいる場合は、裏面も同様に劣化していることが多く、裏返しでは改善が見込めません。この段階では表替えが適切です。使用年数・状態を確認してからご提案します。",
  },
  {
    category: "general" as const,
    q: "新調したら何年ごろに次の表替えをすべきですか？",
    a: "新調後は約2〜3年で裏返し、5〜8年で表替えが目安です。使用状況や日当たりによって異なりますが、足への引っかかりや色あせが気になり始めたタイミングが分かりやすいサインです。",
  },
  {
    category: "general" as const,
    q: "小さな子どもがいます。ささくれによるケガは心配ですか？",
    a: "ささくれが大きくなると、素足の子どもが引っかかって転倒したり、繊維が刺さるリスクがあります。お子様の安全のために、ささくれが気になり始めたら早めの表替えをおすすめします。",
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
    { "@type": "ListItem", position: 1, name: "埼玉で畳のささくれ・毛羽立ちが気になる方へ", item: `${SITE_URL}/area/saitama/problems/tatami-sasakure` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/problems/tatami-sasakure#webpage`,
  name: "埼玉で畳のささくれ・毛羽立ちが気になる方へ",
  description:
    "埼玉県で畳のささくれ・毛羽立ちにお困りの方へ。繊維の自然劣化が起きるタイミング、裏返し・表替え・新調どれを選ぶべきか、費用目安まで専門家が解説。足にひっかかる前に対処しましょう。現地確認・見積もり無料。",
  url: `${SITE_URL}/area/saitama/problems/tatami-sasakure`,
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: breadcrumbSchema,
};

export default function TatamiSasakurePage() {
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

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "お悩み別" },
            { label: "畳のささくれ" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Fraying — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳のささくれ・毛羽立ちが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            い草の畳表は5〜8年で繊維が劣化し、ささくれや毛羽立ちが現れます。足への引っかかりが出てきたら、裏返し・表替え・新調どれで対処すべきかを判断するポイントを解説します。
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ─── 症状と原因 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            症状と原因
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              い草は天然素材であるため、使用年数とともに繊維が自然に劣化します。日光・摩擦・湿度変化が繰り返されることで畳表の繊維が分解し、ささくれ・毛羽立ちとして現れます。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>足を引きずった際に繊維がひっかかる感触がある</li>
              <li>表面が毛羽立ち、ざらっとした質感になっている</li>
              <li>繊維のクズが掃除機をかけても出続ける</li>
              <li>使用開始から5〜8年が目安で現れる自然な劣化</li>
              <li>日当たりの強い部屋では劣化が早まることがある</li>
            </ul>
          </div>
        </section>

        {/* ─── 放置するリスク ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            放置するリスク
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <ul className="list-disc pl-5 space-y-2">
              <li>ささくれが大きくなり、素足の子どもが転倒・ケガをするリスクが高まる</li>
              <li>衣類・靴下に繊維が引っかかりやすくなる</li>
              <li>繊維のクズが増え、室内の空気が汚れやすくなる</li>
              <li>劣化が進むほど裏返しが使えなくなり、表替えか新調のみの選択肢になる</li>
              <li>畳表が完全に破損すると施工費用が高くなりやすい</li>
            </ul>
          </div>
        </section>

        {/* ─── 自分でできる応急処置 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            自分でできる応急処置
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p className="text-kincya font-medium text-xs tracking-wide">
              ※ 以下はあくまで応急処置です。根本的な解決には専門業者への相談をおすすめします。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>乾拭き（目に沿って）：</strong>乾いた布で畳の目に沿って優しく拭きます。逆方向に拭くと繊維の劣化を促進するため必ず目に沿って行います。
              </li>
              <li>
                <strong>掃除機がけ（目に沿って）：</strong>週1〜2回、畳の目に沿って掃除機をかけ、繊維のクズを除去します。
              </li>
            </ol>
            <p className="text-sumi/60 text-xs">
              ※ ささくれた繊維をハサミで切る、テープで押さえるなどの処置は一時的な対応にとどまります。繊維の断端が増えてかえって悪化する場合もあります。
            </p>
          </div>
        </section>

        {/* ─── 業者に相談すべき基準 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            業者に相談すべき基準
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>以下のいずれかに当てはまる場合は、専門業者への相談をおすすめします。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>ささくれが複数箇所・広範囲に広がっている</li>
              <li>乾拭き・掃除機がけをしてもすぐに繊維のクズが出る</li>
              <li>足への引っかかりが明確に感じられる</li>
              <li>使用年数が5年以上経過している</li>
              <li>衣類が引っかかったことがある</li>
            </ul>
          </div>
        </section>

        {/* ─── 判断基準 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            裏返し・表替え・新調の判断基準
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-border">
              <thead className="bg-sumi text-white">
                <tr>
                  <th className="px-4 py-3 font-normal">状態</th>
                  <th className="px-4 py-3 font-normal">判断</th>
                  <th className="px-4 py-3 font-normal">理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-white">
                  <td className="px-4 py-3">使用2〜3年・ささくれが軽微</td>
                  <td className="px-4 py-3 text-igusa font-medium">裏返しで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">畳表の裏面がまだ使用可能な状態です</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">使用5〜8年・ささくれ目立つ</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えが適切</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全であれば畳表交換で解決します</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">踏むと沈む・畳床の劣化が疑われる</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごとの交換が必要です</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">※ 対応可否は現場確認後にご案内します。</p>
        </section>

        {/* ─── 素材の選択肢（和紙・樹脂） ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            ささくれしにくい素材への変更という選択肢
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              表替え・新調のタイミングで、ささくれしにくい耐久性の高い素材に変更することができます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  繊維の劣化によるささくれが起きにくく、色あせにも強い素材です。い草に近い見た目で和室の雰囲気を保ちながら、耐久性を高めたい方に適しています。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  ポリプロピレン製でささくれの心配がなく、耐久性が高い素材です。水拭きができ清掃も簡単です。
                </p>
                <Link href="/services/resin-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  樹脂畳について詳しく →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 費用目安 ─── */}
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
                  <td className="px-4 py-3 text-sumi/70">軽度・使用2〜3年の場合</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全な場合</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換が必要な場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は素材・枚数・現場状況によって異なります。正確な費用は現地確認後にご案内します。
          </p>
        </section>

        {/* ─── FAQ ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            よくある質問
          </h2>
          <FaqSection items={faqItems} />
        </section>

        {/* ─── 関連リンク ─── */}
        <section>
          <h2
            className="text-xl text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/area/saitama/tatami" className="text-kincya hover:underline">
                埼玉県の畳工事サービス →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama" className="text-kincya hover:underline">
                埼玉県の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/services/tatami-omotegae" className="text-kincya hover:underline">
                畳の表替えについて →
              </Link>
            </li>
            <li>
              <Link href="/services/tatami-uragaeshi" className="text-kincya hover:underline">
                畳の裏返しについて →
              </Link>
            </li>
            <li>
              <Link href="/services/tatami-shinchou" className="text-kincya hover:underline">
                畳の新調について →
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
        title="畳のささくれについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。裏返し・表替え・新調どれが適切か、現場を見てから正直にご案内します。"
      />
    </>
  );
}
