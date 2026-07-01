import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "東京都の畳のカビ・湿気対策｜マンション・和室の畳カビは早期対応が重要｜日本畳パートナーズ",
  description:
    "東京都内のマンション・戸建て住宅で畳にカビが発生した場合の対処法と張替え案内。23区・多摩地区全域に対応。",
  path: "/area/tokyo/problems/tatami-mold",
});

const faqItems = [
  {
    category: "general" as const,
    q: "東京のマンションで畳にカビが生えやすい理由は何ですか？",
    a: "東京の高層・密集型マンションは気密性が高く、換気不足になりがちです。特に北向き・日当たりの悪い和室では湿度が上がりやすく、梅雨から夏にかけて畳のカビが発生しやすい環境になります。24時間換気システムがあっても、和室の隅や畳の下は空気が滞留しやすいので注意が必要です。",
  },
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
    q: "東京23区内でも出張してもらえますか？",
    a: "はい、東京23区内全域に対応しています。新宿・渋谷・世田谷・江東・台東・荒川・板橋・練馬・足立など全区に出張いたします。マンションの場合は管理組合のルールに配慮した作業時間での対応も可能ですので、事前にお知らせください。",
  },
  {
    category: "general" as const,
    q: "カビを放置するとどうなりますか？",
    a: "カビ胞子が室内に拡散し、アレルギー性鼻炎・喘息・アトピー性皮膚炎の悪化につながる可能性があります。また畳床の腐食が進むと建物の下地（床板）にまで影響が及ぶことがあります。東京の密閉型マンションでは空気の循環が少ないため、カビ胞子の室内滞留リスクが高くなります。早めの対処が重要です。",
  },
  {
    category: "general" as const,
    q: "カビ予防のために日々できることはありますか？",
    a: "1日10〜15分以上の換気、除湿機や空調の活用、畳の下に除湿シートを敷くことが有効です。東京のマンションは気密性が高いため、意識的な換気が特に重要です。梅雨前後は室内の湿度を60%以下に保つよう心がけてください。",
  },
  {
    category: "general" as const,
    q: "和紙畳・樹脂畳にするとカビは生えにくくなりますか？",
    a: "和紙畳・樹脂畳はい草より吸湿性が低いため、カビが繁殖しにくい環境になります。東京のマンションのように気密性が高い環境では、素材変更の効果が期待できます。ただし畳床（芯材）の状態や換気環境にも影響されるため、表面素材の変更だけで完全に防げるわけではありません。",
  },
  {
    category: "general" as const,
    q: "多摩地区の戸建て住宅でも対応できますか？",
    a: "はい、八王子市・立川市・調布市・府中市・三鷹市・武蔵野市など多摩地区全域に対応しています。戸建て住宅の和室の畳工事もお気軽にご相談ください。",
  },
  {
    category: "general" as const,
    q: "カビが生えている畳の表替え費用の目安は？",
    a: "表替えは素材によりますが4,500円〜/枚（中国産い草）が目安です。カビが畳床まで及んでいる場合の新調は15,000円〜/枚が目安です。いずれも素材・枚数・現場状況によって変動します。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "新調したあとのカビ予防で気をつけることはありますか？",
    a: "新しい畳も湿気には弱いため、換気・除湿の習慣が大切です。和紙畳・樹脂畳など機能性素材へ変更するほか、畳の下に防湿シートを敷く方法も有効です。東京のマンションでは定期的に窓を開けての換気・除湿機の活用が再発防止の鍵になります。",
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
  areaServed: [{ "@type": "State", "name": "東京都" }],
  url: SITE_URL,
};

export default function TatamiMoldTokyoPage() {
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

      {/* ─── Breadcrumb ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          variant="light"
          items={[
            { label: "対応エリア", href: "/area" },
            { label: "東京都", href: "/area/tokyo" },
            { label: "お悩み別" },
            { label: "畳のカビ" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Mold — Tokyo</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            東京都で畳にカビが発生した方へ｜早期対応と再発防止のご案内
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            東京のマンションは気密性が高く、換気不足が重なると和室の畳にカビが発生しやすい環境になります。黒・緑の点が広がる前に、正しい知識で対処法と専門家への相談タイミングを把握しておきましょう。
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
            東京のマンション特有の湿気問題
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              東京都内のマンション、特に23区内の高層・密集型住宅は気密性が高く、換気が不十分になりやすい構造です。い草の多孔質構造は湿気を吸収しやすく、湿度60%以上の環境が続くとカビが急速に繁殖します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>黒・緑・白の点や粉状のカビが畳表に広がる</li>
              <li>カビ特有のむわっとした臭いが和室に漂う</li>
              <li>梅雨（6〜7月）や台風後に症状が現れやすい</li>
              <li>北向き・日当たりの悪い和室でとくに多い</li>
              <li>気密性の高いマンションで換気が不足している部屋</li>
              <li>1階・地下に近い部屋（地面からの湿気の影響）</li>
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
              カビを放置すると、健康被害と建物への影響の両方が進行します。東京の気密性の高い住宅ではカビ胞子が室内に滞留しやすく、早期発見・早期対処が長期的なコストを抑える鍵になります。
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
                <strong>換気をする：</strong>窓を開け十分に換気し、湿気を排出します。除湿機を活用するとより効果的です。東京のマンションでは24時間換気システムを必ず稼働させてください。
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
              表替え・新調のタイミングで、湿気に強い素材に変更することでカビの再発リスクを低減できます。東京のマンションのように気密性が高い住環境では、素材変更の効果が期待できます。
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
                  <td className="px-4 py-3">表替え（和紙・樹脂）</td>
                  <td className="px-4 py-3">6,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">カビに強い素材への変更</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換・カビが深部まで及ぶ場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 素材・状態・広さにより変動します。現地確認後にお見積もりします。
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
              <Link href="/area/tokyo" className="text-kincya hover:underline">
                東京都の対応エリア一覧 →
              </Link>
            </li>
            <li>
              <Link href="/area/tokyo/tatami" className="text-kincya hover:underline">
                東京都の畳工事サービス →
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
              <Link href="/area/saitama/problems/tatami-mold" className="text-kincya hover:underline">
                埼玉県の畳カビ対策 →
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
        title="東京都で畳のカビについてお気軽にご相談ください"
        subtitle="東京23区・多摩地区の現地確認・お見積もりは無料です。表替えか新調か、現場を確認してから正直にご案内します。"
      />
    </>
  );
}
