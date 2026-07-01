import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "東京都の畳のペット臭・ペット汚れ対策｜汚れた畳の張替えガイド｜日本畳パートナーズ",
  description:
    "東京都内でペットの尿・汚れで傷んだ畳の張替え・対処法をご案内。ペット可物件・マンションの畳工事に対応。",
  path: "/area/tokyo/problems/pet-urine",
});

const faqItems = [
  {
    category: "general" as const,
    q: "ペットの尿が畳に染みてしまいました。すぐにできる対処法は？",
    a: "発見したらすぐに乾いた布・ペーパータオルで尿を吸い取ります。水で薄めながら再度吸い取り、できるだけ早く乾燥させます。中性洗剤を使う場合は薄めて少量にとどめ、しっかり拭き取ってください。時間が経つほど深部へ染み込むため、素早い対応が重要です。",
  },
  {
    category: "general" as const,
    q: "東京のペット可マンションで畳の汚れが気になります。対応できますか？",
    a: "はい、東京23区・多摩地区のペット可マンション・アパートにも対応しています。マンション管理規約の作業時間制限がある場合も、事前にお知らせいただければ配慮した工程で対応します。ペット対応の素材（樹脂畳・和紙畳）へのご提案も可能です。",
  },
  {
    category: "general" as const,
    q: "ペット臭は自分で完全に取り除けますか？",
    a: "表面についた臭いは応急処置で軽減できますが、畳床（芯材）まで浸透した尿の臭いを自分で完全に除去することは非常に困難です。市販の消臭スプレーでは一時的な抑制にとどまります。根本解決には表替えまたは新調をおすすめします。",
  },
  {
    category: "general" as const,
    q: "ペットの尿が染みた畳は表替えで解決できますか？",
    a: "尿が畳表（い草）にとどまっている浅い段階であれば、表替えで改善できる可能性があります。ただし、畳床（芯材）まで染み込んでいる場合は表替えだけでは臭いが残るため新調が必要です。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "樹脂畳はペットの尿に強いですか？",
    a: "樹脂畳はポリプロピレン製で防水性が高く、ペットの尿をすぐに拭き取れるため、い草畳と比べて大幅に臭い・シミのリスクを抑えられます。東京のペット可マンションにお住まいの方に特におすすめです。",
  },
  {
    category: "general" as const,
    q: "和紙畳はペット対応に向いていますか？",
    a: "和紙畳は撥水性がありい草より汚れに強い素材です。完全防水ではありませんが、少量の尿であれば素早く拭き取ることで対処できます。樹脂畳より和室の雰囲気を残したい方に適しています。",
  },
  {
    category: "general" as const,
    q: "東京のペット可マンションで畳から樹脂畳に変えられますか？",
    a: "はい、既存の畳から樹脂畳・和紙畳への変更は表替えのタイミングで可能です。東京23区・多摩地区のマンションでも対応しています。薄型の建材畳床の場合も対応素材をご提案しますので、現地確認の際にご相談ください。",
  },
  {
    category: "general" as const,
    q: "ペットによるシミは賃貸の原状回復費用として請求されますか？",
    a: "ペットによる汚損・臭いは借主の故意・過失による損傷とみなされることが多く、原状回復費用（表替え・新調）を求められるケースがあります。東京都内の賃貸物件の場合、東京都版のガイドラインも参考になります。状況によって判断が異なりますので、詳しくはご相談ください。",
  },
  {
    category: "general" as const,
    q: "ペットの爪で畳が傷んでいます。表替えで対応できますか？",
    a: "爪による傷が畳表（い草）にとどまる場合は表替えで対応できます。畳床まで傷が及んでいる場合は新調が必要です。現場確認後に適切な対応をご案内します。",
  },
  {
    category: "general" as const,
    q: "ペット対応の畳に変えた後、何か特別なお手入れが必要ですか？",
    a: "樹脂畳・和紙畳は水拭きができるため、通常の掃除機がけと拭き掃除で清潔に保てます。尿などの汚れはすぐに拭き取ることが基本です。東京のマンションでは定期的な換気で湿気対策も忘れずに行ってください。",
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

export default function PetUrineTokyoPage() {
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
            { label: "ペット汚れの畳" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Pet Urine on Tatami — Tokyo</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            東京都でペットの畳汚れにお困りの方へ｜畳張替えで清潔な和室に
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            東京のペット可マンションで増えているお悩みが、猫・犬の尿による畳の汚れ・臭いです。時間が経つほど除去が困難になります。応急処置のポイントから、表替え・新調の判断基準、ペットに強い素材への変更まで解説します。
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
            ペット可マンションの畳事情
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              東京都内のペット可マンション・アパートが増える中、和室の畳へのペット汚れのご相談も増えています。ペットの尿はい草の多孔質構造に染み込みやすく、時間が経つほど畳床（芯材）へと浸透します。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>独特の強い臭いが時間が経っても取れない</li>
              <li>シミが畳表に残っている</li>
              <li>繰り返し同じ場所に粗相してしまう（臭いが残るため）</li>
              <li>カビが発生しやすくなっている</li>
              <li>ダニが繁殖しやすい状態になっている</li>
              <li>賃貸退去時の原状回復が心配</li>
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
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">衛生・健康面のリスク</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>尿がカビ・ダニの栄養源となり複合的に悪化</li>
                  <li>アレルギー・臭いによる生活環境の悪化</li>
                  <li>再び同じ場所に粗相を繰り返しやすくなる</li>
                </ul>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">建物・費用面のリスク</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>畳床の腐食が進み新調費用が高くなる</li>
                  <li>床板・下地まで浸透すると補修費用が膨らむ</li>
                  <li>賃貸の場合、退去時の原状回復費用が増える</li>
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
              ※ 以下はあくまで応急処置です。完全除去は困難なため、できるだけ早く専門業者にご相談ください。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>すぐに吸い取る：</strong>乾いた布・ペーパータオルを重ねて尿を押し当てるように吸い取ります。こすると広がるため、押し当てて吸い取る動作を繰り返します。
              </li>
              <li>
                <strong>水で薄めながら吸い取る：</strong>少量の水で薄め、再度押し当てて吸い取る工程を繰り返し、尿の濃度を下げます。
              </li>
              <li>
                <strong>中性洗剤を使う場合：</strong>薄めた中性洗剤を少量だけ使い、拭き取った後に水拭き・乾拭きを行います。洗剤が残ると畳表が傷む原因になります。
              </li>
              <li>
                <strong>乾燥させる：</strong>扇風機・換気で十分に乾燥させます。東京のマンションでは24時間換気システムを活用してください。
              </li>
            </ol>
            <p className="text-sumi/60 text-xs mt-2">
              ※ 時間が経った尿・畳床まで染み込んだ尿は、応急処置では除去できません。早めに専門業者へご相談ください。
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
            <p>ペットによる畳の汚れ・臭いは、できるだけ早い段階での相談をおすすめします。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>尿が染み込んでから数時間以上経過している</li>
              <li>応急処置をしても臭いが取れない</li>
              <li>シミが広範囲に残っている</li>
              <li>複数回の粗相があった</li>
              <li>カビが同時に発生している</li>
              <li>賃貸物件で退去前の対応が必要</li>
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
                  <td className="px-4 py-3">尿が畳表にとどまっている（浅い染み）</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで対応可能な場合あり</td>
                  <td className="px-4 py-3 text-sumi/70">畳表の交換で臭い・シミを除去できる場合があります</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">臭いが強く換気しても取れない</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調を検討</td>
                  <td className="px-4 py-3 text-sumi/70">畳床まで浸透している可能性があります</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">複数回の粗相・長期間放置</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床の腐食・カビが進んでいる可能性が高いです</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">再発防止のために素材変更を希望</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで素材変更可</td>
                  <td className="px-4 py-3 text-sumi/70">樹脂畳・和紙畳への変更は表替えのタイミングで可能</td>
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
            消臭対策と素材選び｜ペットに強い和紙・樹脂畳
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              表替え・新調のタイミングでペット対応の素材に変更することで、今後の汚れ・臭いリスクを大幅に下げることができます。東京のペット可マンションでの採用実績も増えています。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳（最もおすすめ）</h3>
                <p className="text-xs text-sumi/70">
                  ポリプロピレン製で防水性が高く、ペットの尿をすぐに水拭きで除去できます。ダニ・カビも繁殖しにくく、ペット対応として最も優れた素材です。
                </p>
                <Link href="/services/resin-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  樹脂畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  撥水性があり、少量の汚れなら拭き取りやすい素材です。和室の風合いを残しながらペット対応力を高めたい方に向いています。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
            </div>
            <div className="bg-shiro rounded-sm p-4">
              <h3 className="text-sumi font-medium mb-2 text-sm">い草畳との比較</h3>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-2 pr-4 font-medium text-sumi">素材</th>
                      <th className="py-2 pr-4 font-medium text-sumi">防水性</th>
                      <th className="py-2 pr-4 font-medium text-sumi">汚れへの強さ</th>
                      <th className="py-2 font-medium text-sumi">和室の風合い</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="py-2 pr-4 text-sumi/70">い草畳</td>
                      <td className="py-2 pr-4 text-sumi/70">なし</td>
                      <td className="py-2 pr-4 text-sumi/70">弱い</td>
                      <td className="py-2 text-sumi/70">高い</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sumi/70">和紙畳</td>
                      <td className="py-2 pr-4 text-sumi/70">撥水性あり</td>
                      <td className="py-2 pr-4 text-sumi/70">やや強い</td>
                      <td className="py-2 text-sumi/70">中程度</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-sumi/70">樹脂畳</td>
                      <td className="py-2 pr-4 text-sumi/70">防水（水拭き可）</td>
                      <td className="py-2 pr-4 text-sumi/70">強い</td>
                      <td className="py-2 text-sumi/70">低め</td>
                    </tr>
                  </tbody>
                </table>
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
                  <td className="px-4 py-3">表替え（い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">浅い染みの場合</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（和紙畳へ変更）</td>
                  <td className="px-4 py-3">8,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">ペット対応素材へ変更</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（樹脂畳へ変更）</td>
                  <td className="px-4 py-3">9,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">防水・最高レベルのペット対応</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床まで浸透した場合・畳床ごと交換</td>
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
                和紙畳（汚れに強い）について →
              </Link>
            </li>
            <li>
              <Link href="/services/resin-tatami" className="text-kincya hover:underline">
                樹脂畳（防水・ペット対応）について →
              </Link>
            </li>
            <li>
              <Link href="/area/saitama/problems/pet-urine" className="text-kincya hover:underline">
                埼玉県のペット畳汚れ対策 →
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
        title="東京都でペットによる畳の汚れ・臭いについてご相談ください"
        subtitle="東京23区・多摩地区の現地確認・お見積もりは無料です。表替え・新調・素材変更のどれが最適か、現場を確認してからご案内します。"
      />
    </>
  );
}
