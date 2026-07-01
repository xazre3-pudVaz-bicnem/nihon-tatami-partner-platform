import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳のカビに悩んでいる方へ｜対処法と業者相談の判断基準",
  description:
    "埼玉県で畳にカビが生えてお困りの方へ。黒・緑のカビ点の原因、アレルギーリスク、応急処置から表替え・新調の判断基準まで専門家が解説。和紙畳・樹脂畳など再発しにくい素材の選択肢もご紹介。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-mold",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳のカビは自分で取り除けますか？",
    a: "表面だけの軽微なカビは、乾いた布で拭き取り、70%程度のアルコールスプレーで除菌する応急処置が有効です。ただし水拭きはカビの栄養源となる水分を与えるため逆効果になります。臭いが残る・広範囲・色が変わっているなどの場合は畳表の深部まで浸透している可能性があり、専門業者への相談をおすすめします。",
  },
  {
    category: "general" as const,
    q: "カビが生えた畳は表替えで解決しますか？",
    a: "カビが畳表（表面のい草）にとどまっている場合は表替えで改善できます。ただし、カビが畳床（芯材）まで浸透している場合は、表替えだけでは再発するため新調が必要です。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "梅雨明け後にカビが出やすいのはなぜですか？",
    a: "い草の畳は多孔質構造で調湿性に優れている反面、湿度60%以上の環境が続くとカビが繁殖しやすくなります。梅雨から夏にかけて湿気が蓄積し、換気が不足している和室でカビが発生しやすい傾向があります。",
  },
  {
    category: "general" as const,
    q: "カビを放置するとどうなりますか？",
    a: "カビ胞子が室内に拡散し、アレルギー性鼻炎・喘息・アトピー性皮膚炎の悪化につながる可能性があります。また畳床の腐食が進むと建物の下地（床板）にまで影響が及ぶことがあります。早めの対処が重要です。",
  },
  {
    category: "general" as const,
    q: "カビ予防のために日々できることはありますか？",
    a: "1日10〜15分以上の換気、除湿機や空調の活用、畳の下に除湿シートを敷くことが有効です。梅雨前後は特に意識して室内の湿度を60%以下に保つよう心がけてください。",
  },
  {
    category: "general" as const,
    q: "和紙畳・樹脂畳にするとカビは生えにくくなりますか？",
    a: "和紙畳・樹脂畳はい草より吸湿性が低いため、カビが繁殖しにくい環境になります。ただし畳床（芯材）の素材や換気環境にも影響されるため、表面素材の変更だけで完全に防げるわけではありません。素材変更の際は、畳床の状態も含めてご相談ください。",
  },
  {
    category: "general" as const,
    q: "アルコールスプレーを使うと畳は傷みませんか？",
    a: "70%前後のアルコールスプレーは少量であれば畳表への影響は限定的ですが、大量に使用すると変色・乾燥の原因になります。表面の軽微なカビへの応急処置として少量使用する程度にとどめ、根本的な解決は専門業者に相談することをおすすめします。",
  },
  {
    category: "general" as const,
    q: "カビが生えている畳の表替え費用の目安は？",
    a: "表替えは素材によりますが4,500円〜/枚（中国産い草）が目安です。カビが畳床まで及んでいる場合の新調は15,000円〜/枚が目安です。いずれも素材・枚数・現場状況によって変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "埼玉特有のカビが発生しやすい環境はありますか？",
    a: "埼玉県は内陸性気候で梅雨〜夏にかけて高温多湿になりやすく、特に築年数の経った住宅や北側・日当たりの悪い和室ではカビが発生しやすい傾向があります。また台風・大雨後の湿気の逃げにくい環境にも注意が必要です。",
  },
  {
    category: "general" as const,
    q: "新調したあとのカビ予防で気をつけることはありますか？",
    a: "新しい畳も湿気には弱いため、換気・除湿の習慣が大切です。和紙畳・樹脂畳など機能性素材へ変更するほか、畳の下に防湿シートを敷く方法も有効です。定期的に畳を上げての換気・点検もおすすめします。",
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

export default function TatamiMoldPage() {
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
            { label: "畳のカビ" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Mold — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳のカビが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            梅雨から夏にかけて埼玉県の和室で多いお悩みが畳のカビです。黒・緑の点が広がる前に、正しい知識で対処法と専門家への相談タイミングを把握しておきましょう。
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
              畳のカビは、湿度60%以上・風通しの悪い環境が続くと発生します。い草の多孔質構造は湿気を吸収しやすく、カビの栄養源となる有機物も含まれているため、条件が重なると急速に繁殖します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>黒・緑・白の点や粉状のカビが畳表に広がる</li>
              <li>カビ特有のむわっとした臭いが和室に漂う</li>
              <li>梅雨（6〜7月）や台風後に症状が現れやすい</li>
              <li>北側の部屋・日当たりの悪い和室でとくに多い</li>
              <li>換気が少ない閉め切った部屋で多発</li>
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
            <p>
              カビを放置すると、健康被害と建物への影響の両方が進行します。早期発見・早期対処が長期的なコストを抑える鍵になります。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">健康へのリスク</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>カビ胞子によるアレルギー性鼻炎・喘息の悪化</li>
                  <li>アトピー性皮膚炎・皮膚トラブルのリスク</li>
                  <li>免疫力の低い乳幼児・高齢者は特に注意が必要</li>
                </ul>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">建物へのリスク</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>畳床（芯材）の腐食が進む</li>
                  <li>床板・根太まで傷みが広がる</li>
                  <li>深部まで浸透すると表替えでは対応できなくなる</li>
                </ul>
              </div>
            </div>
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
                <strong>換気をする：</strong>窓を開け十分に換気し、湿気を排出します。除湿機を活用するとより効果的です。
              </li>
              <li>
                <strong>乾拭きでカビを拭き取る：</strong>乾いた布でカビを畳の目に沿って優しく拭き取ります。水拭きは禁物です（水分がカビの栄養源になります）。
              </li>
              <li>
                <strong>アルコールスプレーで除菌する：</strong>70%前後のアルコールスプレーを少量噴霧し、乾いた布で拭き取ります。大量使用は変色の原因になるため注意してください。
              </li>
              <li>
                <strong>再度換気・乾燥させる：</strong>処置後はしっかり乾燥させ、湿気が再び溜まらないよう換気を続けます。
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
              <li>カビが広範囲に広がっている（手のひら以上のサイズ）</li>
              <li>拭き取っても数日で再発する</li>
              <li>カビ臭が換気をしても取れない</li>
              <li>畳表の色が変色・シミとして残っている</li>
              <li>踏んだときに沈む・ふかふかする感覚がある（畳床の傷みの可能性）</li>
              <li>アレルギー症状が悪化している</li>
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
                  <td className="px-4 py-3">カビが畳表の表面のみ</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全であれば畳表の交換で改善します</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">臭いが取れない・深部への浸透が疑われる</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調を検討</td>
                  <td className="px-4 py-3 text-sumi/70">畳床までカビが及んでいると表替えでは再発します</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">踏んだとき沈む・ふかふかする</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床の劣化が進んでいるため表替えでは対応できません</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">カビ点が軽微で臭いもほぼない</td>
                  <td className="px-4 py-3 text-igusa font-medium">裏返し・表替えで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">使用年数により裏返しか表替えかを選択します</td>
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
            <p>
              表替え・新調のタイミングで、湿気に強い素材に変更することでカビの再発リスクを低減できます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  和紙を樹脂加工した畳表。い草より吸湿性が低く、カビが繁殖しにくい環境になります。色あせに強く見た目の美しさも長続きします。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  ポリプロピレン製の畳表で水拭きが可能。湿気による影響をほとんど受けず、清掃が簡単です。調湿性はありませんが防カビ・防ダニ性に優れます。
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
                  <td className="px-4 py-3 text-sumi/70">軽度の場合・使用2〜3年以内</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全な場合</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換・カビが深部まで及ぶ場合</td>
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
        title="畳のカビについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。表替えか新調か、現場を確認してから正直にご案内します。"
      />
    </>
  );
}
