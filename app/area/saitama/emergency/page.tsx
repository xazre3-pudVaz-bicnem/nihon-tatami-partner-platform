import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/ui/CTASection";
import FaqSection from "@/components/ui/FaqSection";

export const metadata: Metadata = buildMetadata({
  title: "埼玉で畳工事を急ぎで相談したい方へ｜緊急対応の流れ",
  description:
    "埼玉県で畳工事を急ぎでご相談の方へ。水濡れ・退去直前・入居前など緊急ケースの対応フローと、施工可否の判断方法を解説。まずはお電話でご連絡ください。",
  path: "/area/saitama/emergency",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "埼玉で畳工事を急ぎで相談したい方へ", item: `${SITE_URL}/area/saitama/emergency` },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/area/saitama/emergency#webpage`,
  name: "埼玉で畳工事を急ぎで相談したい方へ｜緊急対応の流れ",
  description: "埼玉県で畳工事を急ぎでご相談の方へ。水濡れ・退去直前・入居前など緊急ケースの対応フローと、施工可否の判断方法を解説。まずはお電話でご連絡ください。",
  url: `${SITE_URL}/area/saitama/emergency`,
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

const faqs = [
  {
    category: "timing" as const,
    q: "畳が水濡れしました。すぐに対応してもらえますか？",
    a: "水濡れは24〜48時間以内の対応が重要です。まず乾燥・通気を確保することが先決です。状態によっては畳を上げて乾燥させる、または表替え・新調が必要になります。まずはお電話でご連絡ください。状況を聞いて可能な限り早期に対応します。",
  },
  {
    category: "timing" as const,
    q: "退去まで数日しかありません。間に合いますか？",
    a: "素材在庫・職人スケジュールに依存しますが、可能な限り対応します。表替えは引き取り翌日返しが基本です。まずお電話で状況をお伝えいただければ、対応可能かどうかを確認してお伝えします。「絶対に間に合う」とは言えませんが、できる限り対応します。",
  },
  {
    category: "timing" as const,
    q: "入居前日に畳が気になりました。翌日に施工できますか？",
    a: "素材の在庫状況・職人のスケジュールによります。当日・翌日の対応は確約できませんが、まずお電話でご相談ください。状況によって最短の対応日をお伝えします。",
  },
  {
    category: "timing" as const,
    q: "法事・行事が近いのですが、急ぎで畳を整備できますか？",
    a: "法事・法要・行事前の畳整備は多くいただくご相談です。日程の余裕次第で対応できることが多いですが、直前になるほど日程が難しくなります。できるだけ早めにご連絡ください。",
  },
  {
    category: "general" as const,
    q: "急ぎの場合、フォームと電話どちらが良いですか？",
    a: "急ぎの場合はお電話が確実です。フォームは確認・返信に時間がかかる場合があります。状況（枚数・緊急の理由・希望施工日）をお伝えいただくとスムーズです。",
  },
  {
    category: "timing" as const,
    q: "問い合わせから施工まで最短でどのくらいかかりますか？",
    a: "問い合わせ当日または翌日に現地確認、その後素材在庫・職人スケジュールが合えば早期の施工日を確保します。表替えは引き取り翌日返しが基本です。ただし混雑期や素材在庫状況によって変動します。",
  },
  {
    category: "general" as const,
    q: "現地確認なしで施工日を決めてもらえますか？",
    a: "急ぎの場合も、状態確認をしてから最短スケジュールをご案内します。状態によって施工内容（裏返し・表替え・新調）が変わるため、まず現地確認が必要です。現地確認は最優先でスケジュールします。",
  },
  {
    category: "timing" as const,
    q: "水濡れした畳は表替えで対応できますか？新調が必要ですか？",
    a: "水濡れの程度・乾燥状況・畳床の状態によります。表面のみが濡れた軽度の場合は乾燥後に表替えで対応できることもあります。畳床まで傷んでいる場合は新調が必要です。現地確認で状態を見てからご案内します。",
  },
  {
    category: "timing" as const,
    q: "週末・祝日でも急ぎの相談はできますか？",
    a: "対応状況によりますので、まずお電話でご確認ください。平日以外でも可能な限り対応します。ご連絡いただいたうえで対応可能かをお伝えします。",
  },
  {
    category: "price" as const,
    q: "急ぎの場合、費用は割高になりますか？",
    a: "緊急対応料金を別途設定しているわけではありませんが、素材・施工内容によって通常の費用感と変わらない場合もあります。費用については現地確認後にご案内します。まずはお電話でご相談ください。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function EmergencyPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumb
          items={[
            { label: "エリア", href: "/area" },
            { label: "埼玉県", href: "/area/saitama" },
            { label: "急ぎの相談" },
          ]}
        />
      </div>

      <section className="bg-sumi text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-kincya mb-4 uppercase">Emergency — Saitama</p>
          <h1
            className="text-3xl sm:text-4xl font-medium leading-snug mt-6 mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
          >
            埼玉で畳工事を急ぎで相談したい方へ
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl">
            水濡れ・退去直前・入居前・法事前など、急を要する畳工事のご相談は早めのご連絡が対応の選択肢を広げます。まずはお電話でご状況をお伝えください。
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* 急ぎで相談が必要なケース */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            急ぎで相談が必要なケース
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              主なケース：①畳が水濡れ・浸水した（24〜48時間以内の乾燥が重要）、②退去日まで数日しかない、③入居直前・内覧前日に畳の状態が気になった、④法事・行事が近い。どのケースも早めのご連絡が対応の選択肢を広げます。
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">① 畳の水濡れ・浸水</h3>
                <p className="text-xs text-sumi/70">
                  24〜48時間以内の乾燥が重要です。放置するとカビが発生し、畳床まで傷む可能性があります。まず通気を確保し、すぐにご連絡ください。
                </p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">② 退去日まで数日</h3>
                <p className="text-xs text-sumi/70">
                  退去直前の原状回復は時間との勝負です。素材在庫・職人スケジュールによって対応可否が変わります。できるだけ早くご連絡ください。
                </p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">③ 入居直前・内覧前日</h3>
                <p className="text-xs text-sumi/70">
                  入居直前や内覧前日に畳の状態が気になった場合のご相談も対応します。当日・翌日対応は確約できませんが、まずご連絡ください。
                </p>
              </div>
              <div className="border border-border p-5 rounded-sm">
                <h3 className="text-sumi font-medium mb-2">④ 法事・行事が近い</h3>
                <p className="text-xs text-sumi/70">
                  法事・法要・行事前の畳整備は多くいただくご相談です。余裕がある段階でご連絡いただけると、ご希望の日程に対応しやすくなります。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 問い合わせから施工までの最短フロー */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            問い合わせから施工までの最短フロー
          </h2>
          <div className="border border-border p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              ①お問い合わせ（電話・フォーム）→②当日または翌日に現地確認（状態・スケジュール確認）→③可能な限り早期の施工日を確保→④施工（表替えは引き取り翌日返しが基本）。素材在庫・職人スケジュールに依存するため、まず状況をお伝えいただくことが重要です。
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>お問い合わせ：</strong>
                急ぎの場合はお電話が確実です。状況（枚数・緊急の理由・希望施工日）をお伝えください。
              </li>
              <li>
                <strong>現地確認（当日または翌日）：</strong>
                状況が許す限り、できるだけ早く現地に伺います。畳の状態・枚数・施工内容を確認します。
              </li>
              <li>
                <strong>施工日の確保：</strong>
                素材在庫・職人スケジュールを確認して、可能な限り早期の施工日をご案内します。
              </li>
              <li>
                <strong>施工：</strong>
                表替えは工場へ引き取り翌日返しが基本です。施工後にご確認いただきます。
              </li>
            </ol>
          </div>
        </section>

        {/* 施工可能かどうかは現地確認が前提 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            施工可能かどうかは現地確認が前提
          </h2>
          <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5">
            <p className="text-sumi/90 text-sm leading-relaxed">
              急ぎの場合も、まず現地で状態を確認してから最短スケジュールをご案内します。素材の在庫・職人のスケジュールによって対応できる日程が変わります。「絶対に○日に間に合う」とは言えませんが、できる限り対応します。まずご連絡いただくことで選択肢が広がります。
            </p>
          </div>
          <div className="mt-4 border border-border p-5 rounded-sm space-y-3 text-sm text-sumi/80 leading-relaxed">
            <p>現地確認で確認すること：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>畳の状態（裏返し・表替え・新調のどれが必要か）</li>
              <li>枚数・サイズ（規格外の場合は別途調整が必要）</li>
              <li>搬入経路（狭い階段等の場合は作業の手間が変わる）</li>
              <li>素材の在庫状況と対応可能な最短日程</li>
            </ul>
          </div>
        </section>

        {/* 急ぎの場合の連絡方法 */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            急ぎの場合の連絡方法
          </h2>
          <div className="bg-kiji/30 p-5 rounded-sm space-y-4 text-sm text-sumi/80 leading-relaxed">
            <p>
              フォームよりお電話が確実です。状況（枚数・緊急の理由・希望施工日）をお伝えいただくとスムーズです。電話番号はページ下部またはヘッダーに記載しています。
            </p>
            <div className="bg-kiji/20 border-l-4 border-kincya/60 p-5">
              <p className="text-sumi/90 text-sm font-medium mb-2">お電話でお伝えいただきたいこと</p>
              <ul className="list-disc pl-4 space-y-1 text-xs text-sumi/70">
                <li>緊急の状況（水濡れ・退去直前・法事前など）</li>
                <li>物件の所在地・部屋の広さ・畳の枚数（おおよそ）</li>
                <li>ご希望の施工日・期限</li>
                <li>連絡のつきやすい時間帯</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection items={faqs} />

        {/* 関連ページ */}
        <section>
          <h2
            className="text-2xl font-medium mb-6 text-sumi"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
          >
            関連ページ
          </h2>
          <ul className="space-y-3">
            {[
              { href: "/area/saitama/tatami-flood-damage", label: "畳の水濡れ・浸水被害への対応" },
              { href: "/area/saitama/before-move-in", label: "入居前の畳整備について" },
              { href: "/contact", label: "お問い合わせ・無料見積もり" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center justify-between p-4 border border-border hover:border-kincya/50 hover:bg-kiji/10 transition-all duration-200 group"
                >
                  <span className="text-sm text-sumi group-hover:text-kincya transition-colors">{label}</span>
                  <span className="text-kincya text-xs">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <CTASection
        title="急ぎの畳工事はまずお電話でご連絡ください"
        subtitle="状況をお伝えいただければ、できる限り早期の対応をご案内します。埼玉県内全域対応。"
      />
    </>
  );
}
