import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { FAQ_ITEMS } from "@/data/faq";
import FaqSection from "@/components/ui/FaqSection";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = buildMetadata({
  title: `よくある質問 | 畳・内装工事・原状回復 FAQ | ${SITE_NAME}`,
  description: "畳の表替え・新調・料金・タイミング・素材の違いから、法人・管理会社向けのご質問まで。よくあるご質問をまとめました。",
  path: "/faq",
});

const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/faq`,
  url: `${SITE_URL}/faq`,
  name: `よくある質問 | ${SITE_NAME}`,
  description: "畳の表替え・新調・料金・タイミングから法人向けまでのFAQ",
  inLanguage: "ja",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".faq-question", "h1", "h2"],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const CATEGORIES = [
  { label: "施工・一般", value: "general" },
  { label: "タイミング", value: "timing" },
  { label: "料金・見積もり", value: "price" },
  { label: "法人・BtoB", value: "btob" },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-sumi py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 tatami-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "よくある質問" }]} />
          <p className="text-xs text-kincya tracking-[0.3em] mb-4 uppercase">FAQ</p>
          <h1 className="text-3xl sm:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}>
            よくある質問
          </h1>
          <p className="text-sm text-white/60 max-w-xl leading-relaxed">
            畳の施工・料金・タイミングから、法人・管理会社のお客様向けのご質問まで、まとめてご回答しています。
          </p>
        </div>
      </section>

      <section className="py-16 bg-shiro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {CATEGORIES.map((cat) => {
            const items = FAQ_ITEMS.filter((item) => item.category === cat.value);
            if (items.length === 0) return null;
            return (
              <div key={cat.value} className="mb-12">
                <h2 className="text-lg text-sumi mb-6 flex items-center gap-4" style={{ fontFamily: "var(--font-serif)" }}>
                  {cat.label}
                  <span className="flex-1 h-px bg-border" />
                </h2>
                <div className="bg-white border border-border px-6 py-2">
                  <FaqSection items={items} />
                </div>
              </div>
            );
          })}

          <div className="mt-8 bg-kiji/40 border border-border p-6 text-center">
            <p className="text-sm text-sumi/70 mb-4">お探しの質問が見つからない場合は、お気軽にお問い合わせください。</p>
            <a href="/contact" className="inline-block bg-sumi text-white text-sm px-8 py-3 tracking-wider hover:bg-sumi-light transition-colors duration-300">
              お問い合わせはこちら
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
