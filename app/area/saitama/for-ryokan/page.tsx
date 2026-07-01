import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の旅館・宿泊施設向け畳張替え｜日本畳パートナーズ",
  description:
    "埼玉県の旅館・温泉宿・宿泊施設の畳張替え・客室整備に対応。格式感を維持しながら繁忙期前に整備。客室別施工で営業を続けながら対応可能です。",
  path: "/area/saitama/for-ryokan",
});

const faqItems = [
  {
    category: "btob" as const,
    q: "営業中でも施工してもらえますか？",
    a: "はい、客室ごとの分割施工が可能です。全室一斉ではなく、空き室から順に進めることで営業を維持しながら畳を整備できます。繁忙期の前後に計画的に進めることをおすすめします。",
  },
  {
    category: "material" as const,
    q: "旅館の客室に適した畳素材はありますか？",
    a: "使用頻度が高い旅館の客室には、耐久性の高い中上位グレードの国産い草や、汚れに強い和紙・樹脂畳もご提案できます。格式感を保ちたい場合は熊本産の高品質い草が適しています。素材サンプルをお持ちして比較していただけます。",
  },
  {
    category: "timing" as const,
    q: "繁忙期前に全室を整備したいのですが、スケジュール調整はできますか？",
    a: "はい、計画的な施工スケジュールを組むことが可能です。閑散期・繁忙期前のタイミングに合わせて、余裕を持った日程でご提案します。",
  },
  {
    category: "btob" as const,
    q: "大広間や宴会場の畳にも対応できますか？",
    a: "はい、大広間・宴会場・座敷など大面積の畳にも対応しています。枚数が多い場合も、複数名での施工で対応します。",
  },
  {
    category: "general" as const,
    q: "特殊サイズの畳でも対応できますか？",
    a: "はい、京間・江戸間など各サイズに対応しています。現地採寸でぴったりに仕上げます。",
  },
  {
    category: "material" as const,
    q: "旅館の格式に合う高品質な素材を使ってもらえますか？",
    a: "はい、熊本県八代産など産地の明確な国産い草を取り扱っています。品質証明書の確認も可能です。旅館のグレード感に合わせた素材をご提案します。",
  },
  {
    category: "general" as const,
    q: "畳以外に、襖・障子の張替えも一緒に頼めますか？",
    a: "はい、畳・襖・障子をセットで承ります。客室全体を一度に整備することで、旅館としての統一感ある空間を作れます。",
  },
  {
    category: "general" as const,
    q: "施工中の騒音・臭い対策はされていますか？",
    a: "施工工程での音や臭いについては、事前にお知らせして周辺客室への影響を最小化するよう努めます。稼働客室に配慮したスケジュール組みで対応します。",
  },
  {
    category: "price" as const,
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜（素材グレードにより変動）、新調は15,000円〜が目安です。枚数・素材・施工難度によって変動します。まずは現地確認のうえお見積もりします。",
  },
  {
    category: "general" as const,
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "秩父エリア・東松山・熊谷・所沢など、埼玉県内全域に対応しています。旅館・温泉施設からのご依頼もお待ちしています。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-ryokan#service`,
  name: "埼玉の旅館・宿泊施設向け畳張替え・客室整備",
  description: "埼玉県の旅館・温泉宿・宿泊施設向け畳張替え・客室整備サービス",
  serviceType: "旅館・宿泊施設向け畳工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-ryokan`,
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

export default function ForRyokanPage() {
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
        eyebrow="For Ryokan & Hotels"
        title="埼玉の旅館・宿泊施設の畳張替え・客室整備"
        subtitle="旅館の格式感を維持しながら、客室ごとに計画的に整備します。営業を止めずに進める分割施工で、繁忙期前の準備をサポートします。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "旅館・宿泊施設向け畳張替え" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>営業を継続しながら客室ごとに分割施工できる仕組み</li>
                <li>旅館のグレード感に合わせた高品質い草素材の選択肢</li>
                <li>繁忙期前の計画的な整備スケジュールの組み方</li>
                <li>大広間・宴会場など大面積への対応体制</li>
                <li>畳・襖・障子のセット対応で客室全体を整備</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  旅館や温泉宿にとって、畳の状態はお客様の満足度に直結します。へたった畳、色褪せたい草、古い臭いは「古ぼけた印象」につながりますが、適切に整備することで「手入れが行き届いた宿」という印象になります。
                </p>
                <p>
                  日本畳パートナーズでは、旅館・ホテル・湯治宿など埼玉県内の宿泊施設からのご依頼に対応しています。客室ごとの分割施工で営業を維持しながら整備を進めることができ、繁忙期の直前・直後でも計画的にスケジュールを組むことが可能です。
                </p>
                <p>
                  素材は旅館のグレード感に合わせた国産い草（熊本県八代産など）から選択可能です。大広間・宴会場など大面積の施工にも、複数名体制で対応します。畳だけでなく、襖・障子の張替えも一緒に承りますので、客室全体のリフレッシュをご依頼いただけます。
                </p>
              </>
            ),
          },
          {
            heading: "旅館・宿泊施設に合わせた施工の特徴",
            content: (
              <div className="space-y-3">
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">客室別分割施工で営業継続</p>
                  <p className="text-xs text-sumi/70">全室一斉ではなく、空き室・閑散期の客室から順に施工します。宿の営業を止めることなく整備を進めることができます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">旅館グレードに合わせた素材選定</p>
                  <p className="text-xs text-sumi/70">熊本産の高品質い草など、旅館の格式感を維持できる素材をご提案します。素材サンプルを持参してご確認いただけます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">繁忙期前の計画施工</p>
                  <p className="text-xs text-sumi/70">GW・お盆・年末年始などの繁忙期前に整備を完了できるよう、閑散期に合わせたスケジュールをご提案します。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">大広間・宴会場にも対応</p>
                  <p className="text-xs text-sumi/70">大面積の畳も複数名体制で施工します。広さに関わらずご相談ください。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">ご相談・ご連絡</span>
                  <p className="mt-1 ml-5 text-sumi/60">施設の規模・客室数・ご希望の施工時期をお知らせください。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">全客室の畳の状態を確認し、施工方法・素材・スケジュールをご提案します。</p>
                </li>
                <li>
                  <span className="font-medium">施工計画の確定</span>
                  <p className="mt-1 ml-5 text-sumi/60">客室ごとの施工順・日程を決定します。繁忙期・閑散期のバランスを考慮して計画します。</p>
                </li>
                <li>
                  <span className="font-medium">分割施工</span>
                  <p className="mt-1 ml-5 text-sumi/60">空き室から順に施工を進めます。稼働客室への影響を最小限にします。</p>
                </li>
                <li>
                  <span className="font-medium">完了確認・引き渡し</span>
                  <p className="mt-1 ml-5 text-sumi/60">仕上がりをご確認いただき、お手入れ方法をご説明して完了です。</p>
                </li>
              </ol>
            ),
          },
        ]}
        price={[
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "標準的な客室整備" },
          { service: "表替え（国産上位グレード）", price: "8,000円〜/枚", note: "熊本産など高品質い草。格式感維持に" },
          { service: "表替え（最高グレード）", price: "12,000円〜/枚", note: "最高級い草。高級旅館向け" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "畳床の劣化が進んでいる場合" },
          { service: "新調（わら床）", price: "20,000円〜/枚", note: "伝統的な旅館の雰囲気を保ちたい場合" },
          { service: "襖・障子（セット）", price: "別途見積もり", note: "客室全体のリフレッシュに" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "法人・施設向けサービス", href: "/business" },
          { label: "内装工事サービス", href: "/interior" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
        ]}
        relatedPages={[
          { label: "寺院・神社向けページ", href: "/area/saitama/for-temple-shrine" },
          { label: "店舗向けページ", href: "/area/saitama/for-store" },
          { label: "料金・費用目安", href: "/price" },
        ]}
        canonicalPath="/area/saitama/for-ryokan"
        serviceTypeName="旅館・宿泊施設向け畳工事"
      />
    </>
  );
}
