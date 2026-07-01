import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳の臭いが気になる方へ｜カビ臭・古畳臭の原因と解決策",
  description:
    "埼玉県で畳の臭い（カビ臭・古畳臭・湿気臭）にお困りの方へ。臭いの原因ごとの対処法、換気でも取れない場合の表替え・新調の判断基準を専門家が解説。ペットの臭いに悩む方にも素材変更の選択肢をご紹介。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-smell",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳の臭いはなぜ発生するのですか？",
    a: "主な原因は（1）カビによる臭い、（2）経年劣化した古い畳の臭い、（3）湿気が蓄積した臭い、（4）ペットの尿・排泄物の臭いの4種類です。原因によって対処法が異なります。",
  },
  {
    category: "general" as const,
    q: "新品のい草畳の青い臭いは消せますか？",
    a: "新品のい草特有の青い香りは数週間〜数ヶ月で自然に落ち着きます。これは正常な状態ですので心配不要です。強い臭いが気になる場合は換気を十分に行ってください。",
  },
  {
    category: "general" as const,
    q: "換気をしても臭いが取れない場合はどうすればいいですか？",
    a: "換気をしても臭いが取れない場合は、臭いの原因が畳表の深部や畳床（芯材）まで及んでいる可能性があります。表替え・新調を専門家に相談することをおすすめします。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "重曹を使ったダニ・臭い対策は効果がありますか？",
    a: "重曹は消臭効果がある一方、畳に直接かけると い草の繊維が傷んだり、湿気を含んでカビを促進させる場合があります。使用する場合は少量・短時間にとどめ、十分に取り除いてください。根本的な解決には専門業者への相談をおすすめします。",
  },
  {
    category: "general" as const,
    q: "カビ臭と古畳臭の違いは何ですか？",
    a: "カビ臭はツンとした酸っぱい・土っぽい臭いが特徴で、湿気の多い時期に強くなります。古畳臭は経年劣化したい草が酸化して発生する独特の臭いで、換気によって薄まることが多いです。いずれも改善には表替えが有効です。",
  },
  {
    category: "general" as const,
    q: "臭いのする畳は表替えで解決できますか？",
    a: "臭いの原因が畳表（い草）にとどまっている場合は表替えで改善できます。ただし畳床（芯材）まで及んでいる場合は新調が必要です。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "ペット（猫・犬）の臭いは表替えで取れますか？",
    a: "ペットの尿が畳表の浅い部分にとどまっている場合は表替えで対応できることがあります。畳床まで浸透している場合は新調が必要です。また、素材を樹脂畳・和紙畳に変更することで今後の臭い対策にもなります。詳細は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "和紙畳・樹脂畳は臭いが付きにくいですか？",
    a: "和紙畳はい草より臭いを吸収しにくく、表面が汚れにくい素材です。樹脂畳は水拭きが可能で、臭いの原因となる汚れを拭き取りやすいため、ペット・飲食の多い環境に適しています。",
  },
  {
    category: "general" as const,
    q: "梅雨の時期だけ臭うのはなぜですか？",
    a: "梅雨の高温多湿環境でカビが活性化するためです。また、湿気を含んだ畳が古い有機成分を揮発させやすくなります。梅雨前後に換気・除湿を意識するとともに、表替えのタイミングかどうかを確認することをおすすめします。",
  },
  {
    category: "general" as const,
    q: "臭いを取るために消臭スプレーをかけてもいいですか？",
    a: "市販の消臭スプレーは一時的な臭い抑制には有効ですが、成分によっては畳表を変色・劣化させる場合があります。また根本原因（カビ・劣化）が解決しなければ臭いは再発します。消臭スプレーはあくまで応急処置として使い、専門家への相談を並行してください。",
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

export default function TatamiSmellPage() {
  return (
    <>
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
            { label: "畳の臭い" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Odor — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳の臭いが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            カビ臭・古畳臭・湿気臭・ペット臭など、畳の臭いには複数の原因があります。原因を正しく把握し、換気だけでは解決できない場合の対処法を解説します。
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
            <p>畳の臭いは原因によって性質が異なります。適切な対処をするために原因を把握することが重要です。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">カビ臭</h3>
                <p className="text-xs text-sumi/70">
                  湿度60%以上・換気不足で発生するカビが原因。ツンとした酸っぱい臭いが特徴。梅雨〜夏に強まる傾向。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">古畳臭</h3>
                <p className="text-xs text-sumi/70">
                  経年劣化したい草の酸化により発生。独特のむわっとした臭いで、使用年数とともに強まる。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">湿気臭</h3>
                <p className="text-xs text-sumi/70">
                  畳が吸収した湿気が排出されるときに発生する臭い。梅雨の時期に出やすく、換気で改善する場合がある。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">ペット臭</h3>
                <p className="text-xs text-sumi/70">
                  猫・犬の尿が染み込んだ強い臭い。畳床まで浸透すると換気・表替えだけでは取り除けないことがある。
                </p>
              </div>
            </div>
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
              <li>カビ臭の放置でカビが深部まで進行し、表替えでは対応できなくなる</li>
              <li>アレルギー・喘息・皮膚トラブルの悪化リスクが高まる</li>
              <li>ペット臭は時間が経つほど畳床に定着し、除去が困難になる</li>
              <li>来客時の印象が著しく悪化する</li>
              <li>臭いが壁・床板に移る場合がある</li>
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
                <strong>換気：</strong>毎日10〜15分以上、窓を開けて換気します。除湿機を活用し室内の湿度を60%以下に保ちます。
              </li>
              <li>
                <strong>重曹（少量・短時間）：</strong>重曹を少量畳に振りかけ、30分ほど置いてからしっかり掃除機で吸い取ります。畳への過度な使用は繊維を傷める可能性があるため注意が必要です。
              </li>
              <li>
                <strong>消臭スプレー（応急処置として）：</strong>畳対応の消臭スプレーを使用します。成分を確認し、変色・劣化の少ないものを選んでください。根本解決にはなりません。
              </li>
            </ol>
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
              <li>換気・応急処置をしても数日で臭いが戻る</li>
              <li>部屋に入った瞬間にむわっとした臭いを感じる</li>
              <li>ペットの尿が染み込んでから時間が経過している</li>
              <li>カビ点・変色が同時に見られる</li>
              <li>使用年数が8年以上経過している</li>
            </ul>
          </div>
        </section>

        {/* ─── 表替えで済むケース vs 新調が必要なケース ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            表替えで済むケース vs 新調が必要なケース
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
                  <td className="px-4 py-3">臭いが畳表にとどまっている</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">畳表の交換で臭いの原因を除去できます</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">換気してもカビ臭が取れない・臭いが強い</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調を検討</td>
                  <td className="px-4 py-3 text-sumi/70">畳床まで浸透している可能性があります</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">踏むと沈む・畳床の劣化が疑われる</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごとの交換が必要です</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">古畳臭・軽度の湿気臭</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで改善可能</td>
                  <td className="px-4 py-3 text-sumi/70">新しい畳表に交換することで臭いがなくなります</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">※ 対応可否は現場確認後にご案内します。</p>
        </section>

        {/* ─── 素材の選択肢 ─── */}
        <section>
          <h2
            className="text-2xl text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            和紙畳・樹脂畳などの選択肢
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>表替え・新調のタイミングで、臭いが付きにくい素材に変更することができます。</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  い草より臭いを吸収しにくい素材です。湿気に強く、カビ・ダニが繁殖しにくい環境をつくります。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  水拭き可能で汚れ・臭いの原因を拭き取りやすい素材です。ペット・飲食の多い環境に特に適しています。
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
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換・臭いが深部まで及ぶ場合</td>
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
              <Link href="/services/tatami-shinchou" className="text-kincya hover:underline">
                畳の新調について →
              </Link>
            </li>
            <li>
              <Link href="/services/washi-tatami" className="text-kincya hover:underline">
                和紙畳について →
              </Link>
            </li>
            <li>
              <Link href="/services/resin-tatami" className="text-kincya hover:underline">
                樹脂畳について →
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
        title="畳の臭いについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。臭いの原因を現場で確認し、表替え・新調・素材変更のどれが最適かをご案内します。"
      />
    </>
  );
}
