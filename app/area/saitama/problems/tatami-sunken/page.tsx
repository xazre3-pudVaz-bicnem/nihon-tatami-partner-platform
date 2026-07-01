import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL, SITE_EMAIL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳の沈み・へたりが気になる方へ｜新調の判断基準と費用",
  description:
    "埼玉県で畳の沈み・へたりにお困りの方へ。わら床・建材床の劣化年数の目安、ふかふかする感触の原因、表替えでは解決しない理由、新調の費用目安を専門家が解説。踏み心地の問題は表面工事では直りません。現地確認・見積もり無料。",
  path: "/area/saitama/problems/tatami-sunken",
});

const faqItems = [
  {
    category: "general" as const,
    q: "畳が沈む・ふかふかする感触は何が原因ですか？",
    a: "畳床（芯材）の劣化が原因です。わら床は使用10〜15年、建材床（木質ボード）は8〜12年が劣化の目安です。表面の畳表（い草）ではなく、内部の構造材が傷んでいるため、表替えでは解決しません。",
  },
  {
    category: "general" as const,
    q: "表替えをしたばかりなのに沈む感触があります。なぜですか？",
    a: "表替えは畳床をそのまま使い表面だけを新しくする施工のため、畳床の劣化は解消されません。沈む・ふかふかする感触は畳床の問題であり、新調（畳床ごとの交換）が必要です。",
  },
  {
    category: "general" as const,
    q: "沈む場所が一部だけです。部分的な修理はできますか？",
    a: "一部の畳だけが沈んでいる場合でも、原因によっては部分的な新調で対応できる場合があります。ただし、床下の構造・下地板の状態も確認する必要があります。現場確認後に適切な対応をご案内します。",
  },
  {
    category: "general" as const,
    q: "畳の新調はどのくらいの期間がかかりますか？",
    a: "採寸後に畳床を製作するため、通常数日〜1週間程度かかります。枚数・素材・製作状況によって変わります。詳しくはお問い合わせ時にご確認ください。",
  },
  {
    category: "general" as const,
    q: "新調後に沈みが再発しないようにするには？",
    a: "床下の状態（根太・床板）も同時に確認・補修することが重要です。下地が傷んでいる場合は新調のみでは再発することがあります。現場確認の際に床下の状態もあわせてご確認します。",
  },
  {
    category: "general" as const,
    q: "わら床と建材床の違いは何ですか？",
    a: "わら床は稲わらを重ねて圧縮した伝統的な畳床で、断熱性・調湿性に優れ15年前後の耐久性があります。建材床は木質ボードを積層した現代的な畳床で、軽量で安価ですが耐久年数は8〜12年が目安です。どちらも劣化すると沈みが生じます。",
  },
  {
    category: "general" as const,
    q: "踏んだとき端の部分が盛り上がるのは何のサインですか？",
    a: "畳床が劣化・変形しているサインです。特に畳の中央部が沈み端が盛り上がる状態は、畳床のへたりが進行していることを示しています。この状態では表替えではなく新調が必要です。",
  },
  {
    category: "general" as const,
    q: "新調の費用はどのくらいかかりますか？",
    a: "素材・枚数・現場状況によって異なりますが、15,000円〜/枚が目安です。古畳の処分費が加わる場合があります。正確な費用は現地確認後にご案内します。",
  },
  {
    category: "general" as const,
    q: "新調のタイミングで和紙畳や樹脂畳に変更できますか？",
    a: "はい、新調のタイミングで畳表の素材を変更できます。和紙畳・樹脂畳など機能性素材への変更で、耐久性や清掃性を高めることが可能です。詳しくはご相談ください。",
  },
  {
    category: "general" as const,
    q: "沈む畳を放置するとどうなりますか？",
    a: "畳床の劣化が進むと床板・根太にまで負荷がかかり、建物の床構造が傷むリスクがあります。また転倒・つまずきの危険も高まります。早めの新調をおすすめします。",
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

export default function TatamiSunkenPage() {
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
            { label: "畳の沈み・へたり" },
          ]}
        />
      </div>

      {/* ─── Hero ─── */}
      <section className="bg-shiro border-b border-border py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Tatami Sinking — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl leading-snug mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
          >
            埼玉で畳の沈み・へたりが気になる方へ
          </h1>
          <p className="text-sumi/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            踏んだときの沈む感触・ふかふかした踏み心地は、畳床（芯材）の劣化が原因です。表面の張替えでは解決しません。新調が必要なタイミングと費用目安を解説します。
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
              畳の沈み・へたりは、表面の畳表（い草）ではなく畳床（芯材）の劣化が原因です。いくら表面を新しくしても、内部の芯材が傷んでいれば沈みは解消されません。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">わら床の場合</h3>
                <p className="text-xs text-sumi/70">
                  稲わらを圧縮した伝統的な芯材。10〜15年が劣化の目安。湿気・カビが進行すると早期に傷む場合がある。
                </p>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">建材床の場合</h3>
                <p className="text-xs text-sumi/70">
                  木質ボードを積層した現代的な芯材。8〜12年が劣化の目安。軽量だが耐久年数がわら床より短い傾向がある。
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>踏み込むとふかふか・沈む感触がある</li>
              <li>畳の端・縁近くが盛り上がっている</li>
              <li>歩くたびにきしみ音がする</li>
              <li>特定の枚数だけ明らかに踏み心地が違う</li>
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
              <li>劣化が進むと床板・根太への負荷が増し、建物の床構造が傷む可能性がある</li>
              <li>段差・沈みによるつまずき・転倒リスク（高齢者・子どもに特に危険）</li>
              <li>畳床の腐食が進むとカビ・ダニの温床になる</li>
              <li>放置するほど補修費用が高くなる傾向がある</li>
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
            <div className="bg-kincya/5 border border-kincya/20 rounded-sm p-4">
              <p className="text-sumi font-medium text-sm">
                畳の沈み・へたりは畳床（芯材）の問題のため、表面で対処できる応急処置はありません。
              </p>
              <p className="text-sumi/70 text-xs mt-2">
                クッション材や段ボールなどを下に敷く方法は一時的に感触を変えることができますが、畳床の劣化は進み続けます。根本的な解決のために、早めに専門業者へご相談ください。
              </p>
            </div>
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
            <p>畳の沈み・へたりを感じたら、早めに専門業者に相談することをおすすめします。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>踏んだとき明らかに沈む・ふかふかする感触がある</li>
              <li>畳の端が盛り上がっている・畳の縁が浮いている</li>
              <li>わら床の場合で使用10年以上経過</li>
              <li>建材床の場合で使用8年以上経過</li>
              <li>特定の枚数だけ踏み心地が著しく違う</li>
              <li>高齢者・小さな子どもがいてつまずきリスクが心配</li>
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
                  <td className="px-4 py-3">踏んでも沈まず、表面のみ劣化</td>
                  <td className="px-4 py-3 text-igusa font-medium">表替えで対応可</td>
                  <td className="px-4 py-3 text-sumi/70">畳床が健全な場合は表替えで十分です</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">踏んだとき沈む・ふかふかする</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床の劣化のため表替えでは解決しません</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">端が盛り上がっている</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調が必要</td>
                  <td className="px-4 py-3 text-sumi/70">畳床の変形が進んでいるサインです</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">使用15年以上（わら床）</td>
                  <td className="px-4 py-3 text-kincya font-medium">新調を強く推奨</td>
                  <td className="px-4 py-3 text-sumi/70">設計耐用年数を超えており新調が適切です</td>
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
            新調のタイミングでの素材・床材の選択肢
          </h2>
          <div className="bg-white border border-border rounded-sm p-6 space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              新調のタイミングで、畳床の種類・畳表の素材を合わせてご検討いただけます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">和紙畳（畳表として）</h3>
                <p className="text-xs text-sumi/70">
                  耐久性・撥水性が高く、ダニ・カビが繁殖しにくい素材です。表面の張替え周期が長くなるため長期的なコスト削減に繋がります。
                </p>
                <Link href="/services/washi-tatami" className="text-xs text-kincya hover:underline mt-2 inline-block">
                  和紙畳について詳しく →
                </Link>
              </div>
              <div className="bg-shiro rounded-sm p-4">
                <h3 className="text-sumi font-medium mb-2">樹脂畳（畳表として）</h3>
                <p className="text-xs text-sumi/70">
                  水拭きができ、清掃が簡単な素材です。店舗・賃貸など使用頻度の高い場所で長く使える選択肢です。
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
                  <td className="px-4 py-3">表替え（参考）</td>
                  <td className="px-4 py-3">4,500円〜</td>
                  <td className="px-4 py-3 text-sumi/70">沈みがない場合のみ有効</td>
                </tr>
                <tr className="bg-shiro">
                  <td className="px-4 py-3">新調（建材床）</td>
                  <td className="px-4 py-3">15,000円〜</td>
                  <td className="px-4 py-3 text-sumi/70">標準的な建材床＋い草畳表</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">新調（わら床）</td>
                  <td className="px-4 py-3">別途見積もり</td>
                  <td className="px-4 py-3 text-sumi/70">素材・品質により変動します</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-sumi/50 mt-3">
            ※ 費用は畳床の種類・畳表素材・枚数・古畳処分費などによって異なります。正確な費用は現地確認後にご案内します。
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
        title="畳の沈み・へたりについてお気軽にご相談ください"
        subtitle="埼玉県内の現地確認・お見積もりは無料です。新調が必要かどうか、畳床の状態を現場で確認してからご案内します。"
      />
    </>
  );
}
