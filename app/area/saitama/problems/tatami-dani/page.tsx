import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳のダニが気になる方へ｜原因・対処・素材選びの解説",
  description:
    "埼玉県で畳のダニにお困りの方へ。ツメダニ・チリダニが繁殖する原因、アレルギー性鼻炎やアトピーへのリスク、再発させない表替え・素材変更の判断基準を専門家が解説。和紙畳・樹脂畳などダニが繁殖しにくい選択肢もご紹介。",
  path: "/area/saitama/problems/tatami-dani",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳のダニは肉眼で見えますか？",
    a: "畳に多く見られるチリダニ・ツメダニは体長0.3〜0.5mm程度で、肉眼ではほぼ見えません。刺されてもどこにいるか分からない場合が多く、かゆみや皮疹があっても別の原因と混同されることがあります。",
  },
  {
    category: "general" as const,
    q: "ダニを繁殖させないために日々できることは？",
    a: "湿度70%以下を保つ換気・除湿、週1〜2回の掃除機がけ（畳の目に沿ってゆっくりかける）、こまめな畳の点検が基本です。畳の下の定期的な通気も重要です。",
  },
  {
    category: "general" as const,
    q: "天日干しは畳のダニ対策に有効ですか？",
    a: "天日干しは布団には有効ですが、畳に対しては逆効果になる場合があります。急な乾燥は畳表が反ったり割れたりする原因になります。畳のダニ対策には掃除機がけと換気・除湿が基本です。",
  },
  {
    category: "general" as const,
    q: "市販のダニ駆除剤を使っても大丈夫ですか？",
    a: "市販のダニ駆除剤は表面のダニには効果がありますが、畳の深部に入り込んだダニには届きにくいことがあります。また、乳幼児・ペットへの影響も考慮が必要です。繰り返す場合は表替えや素材変更を専門家にご相談ください。",
  },
  {
    category: "general" as const,
    q: "ダニが原因のアレルギーはどのような症状がありますか？",
    a: "ダニの死骸や排泄物がアレルゲンとなり、アレルギー性鼻炎（鼻水・くしゃみ）、喘息、アトピー性皮膚炎の悪化などを引き起こす場合があります。ダニへの感作がある方は特に注意が必要です。",
  },
  {
    category: "general" as const,
    q: "和紙畳にするとダニは減りますか？",
    a: "和紙畳はい草より吸湿性が低く、ダニが繁殖しにくい環境になります。ただし、畳床（芯材）の種類や換気環境にも影響されます。素材変更の際は畳床の状態も含めてご相談ください。",
  },
  {
    category: "general" as const,
    q: "表替えでダニ問題は解決しますか？",
    a: "畳表（い草部分）に生息するダニは表替えで改善できます。ただし、畳床の深部やその下の床板にまでダニ・カビが及んでいる場合は、新調や下地の処置が必要になることがあります。対応可否は現場確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "ダニ対策のための表替え費用の目安は？",
    a: "表替えは4,500円〜/枚（中国産い草）が目安です。和紙畳への変更では8,000円〜/枚が目安です。新調が必要な場合は15,000円〜/枚が目安となります。素材・枚数・現場状況によって変動しますので、正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "ダニが繁殖しやすい季節はありますか？",
    a: "ダニは気温20〜30℃・湿度60〜80%の環境で最も繁殖します。埼玉県では6〜9月の梅雨〜夏にかけてが最も繁殖しやすい時期です。この時期の前後に換気・清掃・必要に応じた表替えを検討することをおすすめします。",
  },
  {
    category: "general" as const,
    q: "新調後もダニが再発しないようにするには？",
    a: "素材を和紙畳や樹脂畳に変更することで繁殖しにくい環境になります。また、換気・除湿を習慣づけ、週1〜2回の掃除機がけを続けることが大切です。新調後しばらくは畳の状態を定期的に確認することをおすすめします。",
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

export default function TatamiDaniPage() {
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
            { label: "畳のダニ" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Dust Mites — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳のダニが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳のダニは見えないからこそ対処が難しいお悩みです。原因・症状・再発させないための素材選びまで、埼玉県の気候環境を踏まえて専門家が解説します。
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
              い草の畳は多孔質構造でダニの隠れ場所となりやすく、温度・湿度の条件が重なると急速に繁殖します。チリダニが増えると、それを捕食するツメダニも増え、刺されるリスクが高まります。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>刺されるが姿が見えない（体長0.3〜0.5mm）</li>
              <li>原因不明のかゆみ・皮疹が続く</li>
              <li>湿度70%以上で爆発的に繁殖する</li>
              <li>い草の有機質（タンパク質）がダニの栄養源になる</li>
              <li>梅雨〜夏（6〜9月）が最も繁殖しやすい時期</li>
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
              ダニは増え続けると健康被害が深刻化します。特に小さなお子様や、もともとアレルギー体質の方がいるご家庭では早めの対処が重要です。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">健康へのリスク</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>アレルギー性鼻炎・くしゃみ・目のかゆみ</li>
                  <li>喘息の悪化・発作リスク</li>
                  <li>アトピー性皮膚炎の症状悪化</li>
                </ul>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">畳への影響</h3>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>畳表の劣化が加速する</li>
                  <li>カビと共存しやすくなり複合的な被害が拡大</li>
                  <li>表替えで対応できる段階を超える</li>
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
              ※ 以下はあくまで応急処置です。再発を繰り返す場合は専門業者への相談をおすすめします。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>掃除機がけ：</strong>畳の目に沿ってゆっくりと掃除機をかけます。畳表面のダニを物理的に除去します。週1〜2回が目安です。
              </li>
              <li>
                <strong>換気・除湿：</strong>窓を開けて換気し、除湿機を活用して室内の湿度を70%以下に保ちます。
              </li>
              <li>
                <strong>畳下の通気：</strong>年に1〜2回、畳を上げて下側を乾燥させることで畳床のダニ・カビを抑制できます。
              </li>
            </ol>
            <p className="text-sumi/60 text-xs">
              ※ 天日干しは畳が反る原因になるため推奨しません。市販の駆除剤は畳深部には届きにくい場合があります。
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
              <li>掃除機がけをしても数週間でかゆみ・症状が再発する</li>
              <li>ダニ被害が複数の部屋に広がっている</li>
              <li>畳の使用年数が5年以上（ダニが畳床に定着している可能性）</li>
              <li>アレルギー症状が悪化している家族がいる</li>
              <li>カビの臭いも同時にある</li>
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
                  <td className="px-4 py-3">使用年数5〜8年・表面劣化のみ</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">畳表の交換でダニの住処を除去します</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">ダニが繰り返し再発する</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調を検討</td>
                  <td className="px-4 py-3 text-sumi/70">畳床に定着している可能性があります</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">踏むと沈む・畳床の劣化が疑われる</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごとの交換が必要です</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">素材をダニに強いものに変えたい</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで素材変更可</td>
                  <td className="px-4 py-3 text-sumi/70">和紙畳・樹脂畳への変更は表替えのタイミングで可能</td>
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
              表替え・新調のタイミングで素材を変更することで、ダニが繁殖しにくい環境をつくれます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳</h3>
                <p className="text-xs text-sumi/70">
                  和紙を樹脂加工した素材でダニが繁殖しにくく、アレルギー対策として注目されています。耐久性・撥水性も高く、子育て・高齢者のいるご家庭にも適しています。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳</h3>
                <p className="text-xs text-sumi/70">
                  ポリプロピレン製でダニが住み着きにくい素材です。水拭き可能で衛生管理がしやすく、アレルギーが心配な方に向いています。
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
                  <td className="px-4 py-3 text-sumi/70">使用2〜3年・軽度の場合</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">表替え（い草）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全な場合</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">表替え（和紙畳）</td>
                  <td className="px-4 py-3">8,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">ダニ・カビに強い素材へ変更</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">畳床ごと交換・ダニが深部に定着の場合</td>
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
        title="畳のダニについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。表替えか新調か、素材変更が必要かを現場で確認してからご案内します。"
      />
    </>
  );
}
