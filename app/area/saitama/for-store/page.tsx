import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の店舗向け畳・小上がり・内装工事｜日本畳パートナーズ",
  description:
    "埼玉県の飲食店・小売店・サロン向け。座敷席の畳張替え、小上がりの新規設置・リフレッシュ、店舗イメージに合わせた内装工事に対応。営業中・閉店後の施工も相談可能です。",
  path: "/area/saitama/for-store",
});

const faqItems = [
  {
    category: "btob" as const,
    q: "飲食店の座敷席の畳を張替えたいのですが、営業中でも対応できますか？",
    a: "はい、閉店後や定休日を利用した施工が可能です。スケジュールをご相談いただければ、営業への影響を最小限にしながら対応します。",
  },
  {
    category: "general" as const,
    q: "小上がりを新規設置したいのですが、対応できますか？",
    a: "はい、小上がりの新規設置にも対応しています。床の高さ・サイズ・畳の種類をご相談のうえ、店舗のイメージに合わせてご提案します。",
  },
  {
    category: "material" as const,
    q: "飲食店向けに汚れに強い畳素材はありますか？",
    a: "はい、水拭きができる和紙畳・樹脂畳は飲食店に適しています。食べこぼし・水分にも強く、清掃が簡単です。い草畳に比べ耐久性も高く、使用頻度が高い店舗に向いています。",
  },
  {
    category: "general" as const,
    q: "縁なし畳（琉球畳）で和モダンな雰囲気にしたいのですが。",
    a: "はい、縁なし畳・琉球畳にも対応しています。正方形の半畳タイプを市松模様に配置すると、スタイリッシュな和モダン空間になります。カラー展開も豊富です。",
  },
  {
    category: "btob" as const,
    q: "美容院・サロンに和スペースを作りたいのですが。",
    a: "はい、美容院・サロンの待合スペースや施術エリアへの和スペース設置も承ります。小上がりの設計・施工からご相談ください。",
  },
  {
    category: "general" as const,
    q: "既存の座敷席の畳が傷んでいます。部分的な交換は可能ですか？",
    a: "はい、枚数に関わらず対応可能です。ただし、他の畳との色の差が出る場合があります。全体的なリフレッシュをご検討いただくことも多いです。現地確認のうえ最適な方法をご提案します。",
  },
  {
    category: "general" as const,
    q: "施工にはどのくらい時間がかかりますか？",
    a: "表替えは1〜2日程度、小上がりの新規設置は規模によって数日かかります。閉店後・定休日を利用した場合も多くのケースで対応可能です。",
  },
  {
    category: "general" as const,
    q: "店舗のコンセプトに合わせた畳の色やデザインを選べますか？",
    a: "はい、和紙畳・樹脂畳はカラーバリエーションが豊富です。グリーン・グレー・ブラックなど様々な色を取り扱っており、店舗のデザインに合わせてお選びいただけます。",
  },
  {
    category: "price" as const,
    q: "費用の目安を教えてください。",
    a: "畳表替えは1枚あたり4,500円〜、和紙・樹脂畳への変更は6,500円〜が目安です。小上がりの新規設置は規模・素材によって異なります。現地確認後に詳細なお見積もりをお出しします。",
  },
  {
    category: "general" as const,
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "さいたま市・川越市・川口市・所沢市・越谷市など埼玉県全域に対応しています。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-store#service`,
  name: "埼玉の店舗向け畳・小上がり・内装工事",
  description: "埼玉県の飲食店・小売店・サロン向け畳張替え・小上がり設置・内装工事サービス",
  serviceType: "店舗向け畳・内装工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-store`,
  areaServed: { "@type": "State", name: "埼玉県" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  telephone: SITE_TEL,
  areaServed: { "@type": "State", name: "埼玉県" },
  url: SITE_URL,
};

export default function ForStorePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ServicePageTemplate
        eyebrow="For Stores & Restaurants"
        title="埼玉の店舗・飲食店の畳・小上がり・内装工事"
        subtitle="座敷席の畳張替えから小上がりの新規設置まで。店舗のコンセプトと使いやすさを両立した和スペースをご提案します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "店舗向け畳・小上がり・内装工事" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>飲食店・座敷席の畳張替えと素材選定のポイント</li>
                <li>小上がりの新規設置・リフレッシュの対応範囲</li>
                <li>店舗イメージに合わせた縁なし畳・カラー畳の選択肢</li>
                <li>営業中・閉店後・定休日を活用した施工スケジュール</li>
                <li>美容院・サロン・小売店への和スペース設置事例</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  飲食店の座敷席、居酒屋・和食店の小上がり、美容院や和雑貨店の和スペースなど、店舗の畳・内装工事のご依頼に対応しています。
                </p>
                <p>
                  店舗の畳は、一般住宅と比べて踏まれる頻度が高く、食べこぼしや水分への耐性も求められます。日本畳パートナーズでは、飲食店向けには汚れに強い和紙畳・樹脂畳もご提案しており、清掃のしやすさと耐久性を重視した素材選定を行います。
                </p>
                <p>
                  縁なし畳・カラー畳など、店舗のデザインコンセプトに合わせた素材も豊富に取り扱っています。和モダン・古民家風・スタイリッシュなど、お店のイメージに合わせてご提案します。施工は閉店後・定休日にも対応可能ですので、営業への影響を最小限にできます。
                </p>
              </>
            ),
          },
          {
            heading: "店舗向けサービスの特徴",
            content: (
              <div className="space-y-3">
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">飲食店向け耐久・耐水素材の提案</p>
                  <p className="text-xs text-sumi/70">水拭き対応の和紙畳・樹脂畳を多数取り扱っています。食べこぼし・飲み物にも強く、座敷席の清掃が楽になります。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">小上がりの新規設置・リフレッシュ</p>
                  <p className="text-xs text-sumi/70">小上がりの新規設置から、既存小上がりの畳張替えまで対応します。高さ・サイズ・素材のご要望を伺いながらご提案します。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">デザイン重視の素材選定</p>
                  <p className="text-xs text-sumi/70">縁なし畳・カラー畳・市松模様など、店舗のデザインコンセプトに合わせた仕上げをご提案します。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">閉店後・定休日施工対応</p>
                  <p className="text-xs text-sumi/70">営業時間外に施工することで、お客様への影響なく工事を完了できます。スケジュールはご相談ください。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">ご相談・ご要望のヒアリング</span>
                  <p className="mt-1 ml-5 text-sumi/60">店舗の用途・デザインコンセプト・予算・スケジュールのご要望をお聞きします。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">現場の状況を確認し、素材サンプルをお持ちしてご提案します。お見積もりは無料です。</p>
                </li>
                <li>
                  <span className="font-medium">素材・デザイン確定・施工日調整</span>
                  <p className="mt-1 ml-5 text-sumi/60">素材・縁の色・施工日を確定します。閉店後・定休日などご都合の良い日程を選べます。</p>
                </li>
                <li>
                  <span className="font-medium">施工</span>
                  <p className="mt-1 ml-5 text-sumi/60">店舗内の設備を養生しながら丁寧に施工します。</p>
                </li>
                <li>
                  <span className="font-medium">完成確認・引き渡し</span>
                  <p className="mt-1 ml-5 text-sumi/60">仕上がりをご確認いただき、お手入れ方法をご説明して完了です。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "表替え（一般い草）", price: "4,500円〜/枚", note: "既存座敷席の標準的な整備" },
          { service: "表替え（和紙・樹脂畳）", price: "6,500円〜/枚", note: "飲食店向け耐水・耐久素材" },
          { service: "縁なし畳（表替え）", price: "7,000円〜/枚", note: "和モダン・スタイリッシュな仕上げに" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "畳床ごと新しくする場合" },
          { service: "小上がり設置", price: "別途見積もり", note: "サイズ・素材・構造により異なります" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "法人・施設向けサービス", href: "/business" },
          { label: "内装工事サービス", href: "/interior" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
        ]}
        relatedPages={[
          { label: "旅館・宿泊施設向けページ", href: "/area/saitama/for-ryokan" },
          { label: "寺院・神社向けページ", href: "/area/saitama/for-temple-shrine" },
          { label: "料金・費用目安", href: "/price" },
        ]}
        canonicalPath="/area/saitama/for-store"
        serviceTypeName="店舗向け畳・内装工事"
      />
    </>
  );
}
