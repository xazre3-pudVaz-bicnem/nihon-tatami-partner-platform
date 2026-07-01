import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL, SITE_TEL } from "@/lib/site";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: "埼玉の寺院・神社向け畳・襖・障子工事｜日本畳パートナーズ",
  description:
    "埼玉県の寺院・神社の本堂・社務所・書院の畳・襖・障子工事に対応。格式と品位を重んじた素材選定と丁寧な施工で、行事前の整備をサポートします。",
  path: "/area/saitama/for-temple-shrine",
});

const faqItems = [
  {
    category: "material" as const,
    q: "本堂の畳工事はどのような素材が適していますか？",
    a: "本堂には、国産の上位グレードい草（熊本産など）をお勧めしています。香りと色艶が良く、格式感のある空間に仕上がります。従来から使われてきた素材を継続したい場合は、現在の素材を確認したうえでご提案します。",
  },
  {
    category: "timing" as const,
    q: "法要・行事の前に間に合わせてもらえますか？",
    a: "はい、行事の日程をお知らせいただければ、逆算して施工スケジュールを組みます。余裕を持ったご相談をいただければ確実に対応できます。急ぎの場合もご相談ください。",
  },
  {
    category: "general" as const,
    q: "特殊なサイズや形の畳でも対応できますか？",
    a: "はい、寺院・神社では特殊な寸法や形状の畳が使われていることがあります。現地採寸のうえ、ぴったりに仕上げます。",
  },
  {
    category: "btob" as const,
    q: "境内の複数の建物（本堂・社務所・書院等）をまとめて依頼できますか？",
    a: "はい、境内の複数の建物をまとめてご依頼いただくことが可能です。まとめてお受けすることで、スケジュールや費用の面でも効率的に進められます。",
  },
  {
    category: "general" as const,
    q: "古い寺院で、畳のサイズが通常と異なります。",
    a: "はい、京間（6.3尺×3.15尺）など古い寸法体系にも対応しています。現地採寸でどのようなサイズでも対応できます。",
  },
  {
    category: "general" as const,
    q: "畳以外に、襖・障子の張替えも依頼できますか？",
    a: "はい、畳・襖・障子のすべてを承ります。本堂・書院・社務所の内装を一度にまとめて整備することが可能です。",
  },
  {
    category: "general" as const,
    q: "畳の下の床が傷んでいる場合はどうなりますか？",
    a: "現地確認の際に畳床の状態も確認します。床材の補修が必要な場合はその旨もご説明します。",
  },
  {
    category: "btob" as const,
    q: "施工中に建物内で宗教的な活動が続いている場合でも対応できますか？",
    a: "はい、境内での活動・業務への影響を最小限にする施工スケジュールをご提案します。事前に行事・活動スケジュールをお知らせいただければ調整します。",
  },
  {
    category: "price" as const,
    q: "費用の目安を教えてください。",
    a: "表替えは1枚あたり4,500円〜（素材グレードにより変動）、新調は15,000円〜が目安です。格式ある施設では素材グレードを上げることが多く、正確な費用は現地確認後にお伝えします。",
  },
  {
    category: "general" as const,
    q: "埼玉県内のどのエリアまで対応できますか？",
    a: "川越・熊谷・秩父・さいたま・越谷など埼玉県全域の寺院・神社からのご依頼をお受けしています。",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/area/saitama/for-temple-shrine#service`,
  name: "埼玉の寺院・神社向け畳・襖・障子工事",
  description: "埼玉県の寺院・神社の本堂・社務所向け畳・襖・障子工事サービス",
  serviceType: "寺院・神社向け畳・内装工事",
  inLanguage: "ja",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    telephone: SITE_TEL,
    areaServed: { "@type": "State", name: "埼玉県" },
  },
  url: `${SITE_URL}/area/saitama/for-temple-shrine`,
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

export default function ForTempleShrinePageRoute() {
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
        eyebrow="For Temples & Shrines"
        title="埼玉の寺院・神社の畳・襖・障子工事"
        subtitle="本堂・社務所・書院の格式にふさわしい素材選定と丁寧な施工。法要・行事の前に間に合わせる計画施工でご支援します。"
        breadcrumbs={[
          { label: "対応エリア", href: "/area" },
          { label: "埼玉県", href: "/area/saitama" },
          { label: "寺院・神社向け畳・内装工事" },
        ]}
        sections={[
          {
            heading: "このページで分かること",
            content: (
              <ul className="list-disc list-inside space-y-2">
                <li>本堂・社務所・書院に適した素材の選び方</li>
                <li>法要・行事前に間に合わせる計画施工の進め方</li>
                <li>境内の複数建物をまとめて依頼できる対応体制</li>
                <li>特殊サイズ・形状の畳への現地採寸対応</li>
                <li>畳・襖・障子のセット対応で内装を一括整備</li>
              </ul>
            ),
          },
          {
            heading: "サービス概要",
            content: (
              <>
                <p>
                  寺院や神社の本堂・社務所・書院の畳は、一般住宅とは異なる格式と品位が求められます。日本畳パートナーズでは、埼玉県内の寺院・神社からの畳・襖・障子工事のご依頼に対応しています。
                </p>
                <p>
                  素材は格式ある空間にふさわしい国産上位グレードのい草を中心にご提案します。現地を確認したうえで、これまで使われてきた素材の継続や新たな素材への切り替えをご相談しながら決定します。
                </p>
                <p>
                  法要・祭典・行事の前に整備を完了できるよう、スケジュールを逆算して計画します。境内の複数の建物をまとめてご依頼いただくことも可能で、畳・襖・障子のすべてを一括で承ります。
                </p>
              </>
            ),
          },
          {
            heading: "寺院・神社の施工で大切にしていること",
            content: (
              <div className="space-y-3">
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">格式と品位を重んじた素材選定</p>
                  <p className="text-xs text-sumi/70">本堂・書院には国産上位グレードのい草を基本にご提案します。格式感のある空間に仕上がる素材を選びます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">行事・法要スケジュールへの配慮</p>
                  <p className="text-xs text-sumi/70">境内の活動・行事に影響を与えないよう施工スケジュールを調整します。法要・祭典の日程に合わせて逆算して計画します。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">特殊サイズ・形状への対応</p>
                  <p className="text-xs text-sumi/70">古い建物に多い特殊な寸法・形状の畳も、現地採寸でぴったりに仕上げます。</p>
                </div>
                <div className="border-l-4 border-kincya pl-4">
                  <p className="font-medium text-sumi mb-1">畳・襖・障子の一括対応</p>
                  <p className="text-xs text-sumi/70">複数の内装工事をまとめてご依頼いただくことで、施工効率を高めスケジュールの調整もしやすくなります。</p>
                </div>
              </div>
            ),
          },
          {
            heading: "施工の流れ",
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-medium">ご相談・行事日程のお知らせ</span>
                  <p className="mt-1 ml-5 text-sumi/60">対象建物・施工箇所・行事・法要の日程をお知らせください。</p>
                </li>
                <li>
                  <span className="font-medium">現地確認・見積もり</span>
                  <p className="mt-1 ml-5 text-sumi/60">現場の状態・サイズ・必要な工事内容を確認し、お見積もりをご提示します。</p>
                </li>
                <li>
                  <span className="font-medium">素材選定・施工計画の確定</span>
                  <p className="mt-1 ml-5 text-sumi/60">素材サンプルをご確認いただきながら決定。行事前に完了するよう逆算してスケジュールを組みます。</p>
                </li>
                <li>
                  <span className="font-medium">施工</span>
                  <p className="mt-1 ml-5 text-sumi/60">境内の活動への影響を最小限にしながら丁寧に施工します。</p>
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
          { service: "表替え（一般グレード）", price: "4,500円〜/枚", note: "社務所・控室など" },
          { service: "表替え（国産上位グレード）", price: "8,000円〜/枚", note: "本堂・書院など格式ある空間に" },
          { service: "表替え（最高グレード）", price: "12,000円〜/枚", note: "特別な空間・最高品質の素材" },
          { service: "新調（建材床）", price: "15,000円〜/枚", note: "畳床の劣化が進んでいる場合" },
          { service: "新調（わら床）", price: "20,000円〜/枚", note: "伝統的な仕様を継続したい場合" },
          { service: "襖・障子", price: "別途見積もり", note: "畳とセットで和空間全体を整備" },
        ]}
        faqs={faqItems}
        relatedServices={[
          { label: "法人・施設向けサービス", href: "/business" },
          { label: "内装工事サービス", href: "/interior" },
          { label: "埼玉の畳工事TOP", href: "/area/saitama" },
        ]}
        relatedPages={[
          { label: "旅館・宿泊施設向けページ", href: "/area/saitama/for-ryokan" },
          { label: "店舗向けページ", href: "/area/saitama/for-store" },
          { label: "お問い合わせ", href: "/contact" },
        ]}
        canonicalPath="/area/saitama/for-temple-shrine"
        serviceTypeName="寺院・神社向け畳・内装工事"
      />
    </>
  );
}
