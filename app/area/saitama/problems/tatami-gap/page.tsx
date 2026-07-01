import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳の隙間・浮きが気になる方へ｜原因と対処法",
  description:
    "埼玉県で畳の隙間・浮きにお悩みの方へ。乾燥・施工後の収縮・経年による隙間の原因と、業者に相談すべき基準を解説。現地確認・お見積もり無料。",
  path: "/area/saitama/problems/tatami-gap",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: [{ "@type": "State", name: "埼玉県" }],
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "畳の隙間はなぜできるのですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主な原因は3つです。①乾燥による収縮（冬・エアコン使用時）、②新調・表替え直後の自然収縮、③施工時のズレや経年による変形。い草は天然素材のため湿度の変化により膨張・収縮を繰り返します。",
      },
    },
    {
      "@type": "Question",
      name: "新調・表替えした直後に隙間ができるのはなぜですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "新しい畳は工場で製作される際の湿度と、設置した部屋の湿度が異なるため、設置後に収縮して隙間が生じることがあります。梅雨時期になると膨張して隙間が埋まることもあり、新調後1〜2ヶ月は正常な範囲の変動です。",
      },
    },
    {
      "@type": "Question",
      name: "隙間を放置するとどうなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3mm以上の隙間が長期間続く場合、虫の侵入経路になる・ホコリが溜まり衛生状態が悪化する・歩行時に畳がズレるなどのリスクがあります。高齢者や小さなお子様のいる家庭では転倒リスクにもつながるため、早めの対処をお勧めします。",
      },
    },
    {
      "@type": "Question",
      name: "隙間は自分で詰めることができますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳を押し込んで一時的に詰めることは可能ですが、畳床が変形していたり下地に問題がある場合は難しいです。無理に押し込むと畳が傷んだり、別の箇所に隙間ができることもあります。専門業者に調整を依頼するのが安全です。",
      },
    },
    {
      "@type": "Question",
      name: "冬に隙間が広がり夏に戻るのは正常ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、天然素材のい草は湿度の変化に反応して膨張・収縮を繰り返します。冬の乾燥期に収縮して隙間が広がり、梅雨〜夏の高湿度期に膨張して隙間が狭まるのは自然な現象です。極端に大きな隙間でなければ正常な範囲です。",
      },
    },
    {
      "@type": "Question",
      name: "業者に相談する基準はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3mm以上の隙間が1ヶ月以上続く場合・畳を踏むと大きくズレる場合・浮きが著しい場合は業者に相談してください。調整で直る場合と、表替え・新調が必要な場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "浮き（畳が床から浮いている）はなぜ起きますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "畳の浮きは、畳床の変形・下地（床板）の歪み・湿気による膨張が主な原因です。特に湿気が多い部屋や床下換気が不十分な環境では畳が膨らんで浮き上がることがあります。浮きがある場合は下地の状態確認も重要です。",
      },
    },
    {
      "@type": "Question",
      name: "隙間が生じやすい部屋の条件はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "暖房を頻繁に使う部屋・南向きで乾燥しやすい部屋・床下換気が不十分な部屋・築年数が経過して床が歪んでいる部屋などは隙間ができやすい傾向があります。加湿器の適切な使用で室内湿度を保つことが対策になります。",
      },
    },
    {
      "@type": "Question",
      name: "隙間調整だけ依頼することはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "状況によりますが調整のみの対応が可能な場合もあります。ただし隙間の原因が畳床の変形や下地の問題にある場合は、調整だけでは根本的な解決にならないため、表替えや新調と合わせてのご提案になることもあります。まずはご相談ください。",
      },
    },
    {
      "@type": "Question",
      name: "隙間調整の費用はかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "軽微な隙間調整は無料で対応できる場合もあります。表替えが必要な場合は4,500円〜/枚が目安です。詳細は現地確認後にご案内します。まずはお気軽にご相談ください。",
      },
    },
  ],
};

const faqs: { q: string; a: string; category: "general" | "price" | "timing" | "material" | "btob" }[] = [
  {
    category: "general",
    q: "畳の隙間はなぜできるのですか？",
    a: "主な原因は3つです。①乾燥による収縮（冬・エアコン使用時）、②新調・表替え直後の自然収縮、③施工時のズレや経年による変形。い草は天然素材のため湿度の変化により膨張・収縮を繰り返します。",
  },
  {
    category: "general",
    q: "新調・表替えした直後に隙間ができるのはなぜですか？",
    a: "新しい畳は工場で製作される際の湿度と、設置した部屋の湿度が異なるため、設置後に収縮して隙間が生じることがあります。梅雨時期になると膨張して隙間が埋まることもあり、新調後1〜2ヶ月は正常な範囲の変動です。",
  },
  {
    category: "general",
    q: "隙間を放置するとどうなりますか？",
    a: "3mm以上の隙間が長期間続く場合、虫の侵入経路になる・ホコリが溜まり衛生状態が悪化する・歩行時に畳がズレるなどのリスクがあります。高齢者や小さなお子様のいる家庭では転倒リスクにもつながるため、早めの対処をお勧めします。",
  },
  {
    category: "general",
    q: "隙間は自分で詰めることができますか？",
    a: "畳を押し込んで一時的に詰めることは可能ですが、畳床が変形していたり下地に問題がある場合は難しいです。無理に押し込むと畳が傷んだり、別の箇所に隙間ができることもあります。専門業者に調整を依頼するのが安全です。",
  },
  {
    category: "general",
    q: "冬に隙間が広がり夏に戻るのは正常ですか？",
    a: "はい、天然素材のい草は湿度の変化に反応して膨張・収縮を繰り返します。冬の乾燥期に収縮して隙間が広がり、梅雨〜夏の高湿度期に膨張して隙間が狭まるのは自然な現象です。極端に大きな隙間でなければ正常な範囲です。",
  },
  {
    category: "timing",
    q: "業者に相談する基準はありますか？",
    a: "3mm以上の隙間が1ヶ月以上続く場合・畳を踏むと大きくズレる場合・浮きが著しい場合は業者に相談してください。調整で直る場合と、表替え・新調が必要な場合があります。",
  },
  {
    category: "general",
    q: "浮き（畳が床から浮いている）はなぜ起きますか？",
    a: "畳の浮きは、畳床の変形・下地（床板）の歪み・湿気による膨張が主な原因です。特に湿気が多い部屋や床下換気が不十分な環境では畳が膨らんで浮き上がることがあります。浮きがある場合は下地の状態確認も重要です。",
  },
  {
    category: "general",
    q: "隙間が生じやすい部屋の条件はありますか？",
    a: "暖房を頻繁に使う部屋・南向きで乾燥しやすい部屋・床下換気が不十分な部屋・築年数が経過して床が歪んでいる部屋などは隙間ができやすい傾向があります。加湿器の適切な使用で室内湿度を保つことが対策になります。",
  },
  {
    category: "timing",
    q: "隙間調整だけ依頼することはできますか？",
    a: "状況によりますが調整のみの対応が可能な場合もあります。ただし隙間の原因が畳床の変形や下地の問題にある場合は、調整だけでは根本的な解決にならないため、表替えや新調と合わせてのご提案になることもあります。まずはご相談ください。",
  },
  {
    category: "price",
    q: "隙間調整の費用はかかりますか？",
    a: "軽微な隙間調整は無料で対応できる場合もあります。表替えが必要な場合は4,500円〜/枚が目安です。詳細は現地確認後にご案内します。まずはお気軽にご相談ください。",
  },
];

export default function TatamiGapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "エリア", href: "/area" },
              { label: "埼玉県", href: "/area/saitama" },
              { label: "お悩み" },
              { label: "畳の隙間・浮き" },
            ]}
          />
          <h1
            className="text-3xl sm:text-4xl leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳の隙間・浮きが気になる方へ
          </h1>
          <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-2xl">
            畳の隙間や浮きは乾燥・収縮・経年変化など様々な原因で生じます。
            放置してよいのか、業者に依頼すべきかの判断基準を専門家が解説します。
            埼玉県内の現地確認・お見積もりは無料です。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            畳に隙間ができる原因
          </h2>
          <div className="space-y-6 text-sm text-sumi/80 leading-relaxed">
            <div>
              <p className="font-medium text-sumi mb-2">① 乾燥による収縮（冬・エアコン使用時）</p>
              <p>
                い草は天然素材のため、室内の湿度変化に反応して膨張・収縮を繰り返します。
                暖房を使う冬場やエアコンで乾燥した室内では畳が収縮し、
                畳同士の間に隙間ができやすくなります。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">② 新調・表替え直後の自然収縮</p>
              <p>
                新しい畳は工場で製作される際の湿度と設置した部屋の湿度が異なるため、
                設置後に収縮して隙間が生じることがあります。
                梅雨時期になると膨張して隙間が埋まることもあり、これは正常な現象です。
              </p>
            </div>
            <div>
              <p className="font-medium text-sumi mb-2">③ 施工時のズレや経年による変形</p>
              <p>
                長年の使用により畳床（内部の芯材）が変形・へたりを起こすと、
                形状が変化して隙間ができることがあります。
                建物自体の経年変化で床が歪んでいる場合も、畳との間に隙間が生じます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            新調直後の隙間は正常なことが多い
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              い草は湿度に応じて伸縮する天然素材です。新調後1〜2ヶ月は若干の隙間が
              生じることがあります。梅雨時期になると膨張して隙間が埋まることも多く、
              この変動は正常な範囲です。
            </p>
            <p>
              埼玉県は関東内陸に位置し、冬の乾燥・夏の多湿という気候差が大きいため、
              季節による隙間の変動が顕著に現れることがあります。
              新調後の最初の冬に隙間が気になっても、翌春〜夏に自然と解消されることが多いです。
            </p>
            <div className="bg-kiji/30 border border-border rounded-sm p-4 text-xs text-sumi/70">
              目安として2〜3mm程度の隙間は許容範囲とされています。
              5mm以上の隙間が1ヶ月以上続く場合は業者にご相談ください。
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            長期放置のリスク
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              3mm以上の隙間が長期間続く場合は注意が必要です。放置することで以下のリスクが生じます。
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>虫の侵入経路になりやすい</li>
              <li>ホコリが溜まり衛生状態が悪化する</li>
              <li>歩行時に畳がズレて転倒リスクになる</li>
              <li>床下からの湿気が上がりカビの発生リスクが高まる</li>
            </ul>
            <p>
              特に高齢者や小さなお子様のいる家庭では、畳のズレや浮きによる転倒が
              深刻な事故につながる場合があります。気になる隙間は早めにご相談ください。
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            業者に相談する基準
          </h2>
          <div className="space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>以下に当てはまる場合は、専門業者への相談をお勧めします。</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>3mm以上の隙間が1ヶ月以上続いている</li>
              <li>畳を踏むと大きくズレる</li>
              <li>浮きが著しく、踏んだときに大きく沈む</li>
              <li>隙間から異臭（カビ・虫）がする</li>
            </ul>
            <p>
              調整で直る場合と、表替え・新調が必要な場合があります。
              どちらが適切かは現地確認でしか判断が難しいため、
              気になる場合はお気軽にご相談ください。
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2
            className="text-2xl font-medium text-sumi mb-6"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            費用目安
          </h2>
          <p className="text-xs text-sumi/50 mb-4">
            ※ 価格はあくまで目安です。実際の費用は状態・枚数・下地状況により異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-sumi/5">
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>対応内容</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>費用目安</th>
                  <th className="text-left py-3 px-4 text-sumi font-medium" style={{ fontFamily: "var(--font-serif)" }}>備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 px-4 text-sumi/80">隙間調整は状況により異なる</td>
                  <td className="py-3 px-4 text-sumi/80">軽微な調整は無料対応の場合も</td>
                  <td className="py-3 px-4 text-sumi/60">状況によります</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">表替え</td>
                  <td className="py-3 px-4 text-sumi/80">4,500円〜/枚</td>
                  <td className="py-3 px-4 text-sumi/60">畳床が良好な場合</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sumi/80">畳新調</td>
                  <td className="py-3 px-4 text-sumi/80">15,000円〜/枚</td>
                  <td className="py-3 px-4 text-sumi/60">畳床の変形・へたりがある場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 詳細は現地確認後にお見積もりします。
          </p>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* Related links */}
        <section>
          <h2
            className="text-xl font-medium text-sumi mb-5"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/area/saitama/tatami-omotegae"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉の畳表替えサービス →
            </Link>
            <Link
              href="/area/saitama"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              埼玉県の対応エリア一覧 →
            </Link>
            <Link
              href="/contact"
              className="border border-border rounded-sm p-4 text-sm text-sumi/80 hover:border-kincya transition-colors"
            >
              お問い合わせ・無料見積もり →
            </Link>
          </div>
        </section>
      </main>

      <CTASection
        title="畳の隙間・浮きについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。現場を確認してから適切な対応をご案内します。"
      />
    </>
  );
}
