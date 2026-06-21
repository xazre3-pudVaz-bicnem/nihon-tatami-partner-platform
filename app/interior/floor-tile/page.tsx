import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `フロアタイルの費用・種類・特徴｜店舗・トイレ・玄関・水回りに | ${SITE_NAME}`,
  description:
    "フロアタイル（塩ビタイル）の費用・種類・特徴を解説。石目・木目・大理石調など豊富なデザイン、高い耐久性、土足対応。店舗・オフィス・トイレ・玄関・水回りのグレードアップに。費用目安・施工の流れ・FAQまで。",
  path: "/interior/floor-tile",
});

const faqs: FaqItem[] = [
  { category: "material", q: "フロアタイルとは何ですか？", a: "フロアタイルは塩化ビニール製のタイル状床材です。1枚ずつ施工するため、石目調・木目調・大理石調などリアルな質感を再現でき、高級感のある床面を比較的低コストで実現できます。" },
  { category: "material", q: "クッションフロアとの違いは？", a: "クッションフロアはシート状で柔らかく、フロアタイルは硬く薄いタイル状です。フロアタイルは耐久性・耐傷性が高く、土足や重歩行に強いため、店舗・オフィス・玄関に向いています。クッション性はクッションフロアが上です。" },
  { category: "general", q: "どんな場所に向いていますか？", a: "耐久性が高く土足対応のものも多いため、店舗・オフィス・玄関・トイレ・水回りに向いています。デザインが豊富で、空間の雰囲気に合わせて石目・木目などを選べます。" },
  { category: "general", q: "土足でも大丈夫ですか？", a: "はい。土足対応のフロアタイルは、店舗・オフィスの重歩行にも耐える耐久性があります。摩耗・傷に強く、人の出入りが多い空間に適しています。" },
  { category: "general", q: "部分的な張替えはできますか？", a: "タイル状のため、傷んだ箇所だけを部分的に張り替えやすいのも特徴です。同じ製品が入手できる場合は、傷んだタイルのみ交換して費用を抑えられます。" },
  { category: "general", q: "床暖房に対応していますか？", a: "床暖房対応の製品もあります。床暖房の有無をお知らせいただければ、対応した床材をご提案します。" },
  { category: "btob", q: "店舗・オフィスのグレードアップに使えますか？", a: "はい。大理石調・石目調のフロアタイルは、低コストで高級感のある空間を演出できます。店舗・オフィスのリニューアルや内装のグレードアップに多く採用されています。" },
  { category: "general", q: "下地の補修は必要ですか？", a: "下地が平滑でないとタイルの目地や段差が目立つため、必要に応じて下地調整を行います。既存床の状態を確認のうえご案内します。" },
  { category: "timing", q: "工期はどのくらいですか？", a: "玄関・トイレなどの小スペースは半日〜1日、店舗・オフィスなど広い面積は面積に応じて数日が目安です。下地補修を伴う場合は別途ご案内します。" },
  { category: "price", q: "費用はどのくらいですか？", a: "フロアタイル施工は4,000円〜/m²が目安です。素材のグレード・デザイン、面積、下地補修の有無により変動します。現地確認後に無料でお見積もりします。" },
];

export default function FloorTilePage() {
  return (
    <ServicePageTemplate
      eyebrow="Interior Works"
      title="フロアタイルの費用・種類・特徴"
      subtitle="耐久性が高くデザイン性に優れたフロアタイルの施工に対応。店舗・オフィス・玄関・水回りのグレードアップに活用できます。"
      breadcrumbs={[{ label: "内装工事", href: "/interior" }, { label: "フロアタイル" }]}
      image="/images/nihon-tatami/interior/interior-woodwork-shelving-01.png"
      sections={[
        {
          heading: "フロアタイルとは",
          content: (
            <>
              <p>
                フロアタイルは、塩化ビニール製のタイル状床材です。1枚ずつ施工するため、
                石目調・木目調・大理石調などリアルな質感を再現でき、高級感のある床面を比較的低コストで実現できます。
                耐久性が高く、土足や重歩行にも強いため、店舗・オフィス・玄関・水回りで広く採用されています。
              </p>
              <p>
                傷んだ箇所だけを部分的に張り替えやすいのも特徴です。
                デザインの自由度と耐久性を両立した床材として、住宅から店舗まで幅広い空間のグレードアップに活用できます。
              </p>
            </>
          ),
        },
        {
          heading: "フロアタイルの特徴",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">耐久性が高い</strong> — 摩耗・傷に強く、土足・重歩行にも耐える。</li>
              <li><strong className="text-sumi">デザインが豊富</strong> — 石目・木目・大理石調などリアルな質感。</li>
              <li><strong className="text-sumi">高級感を低コストで</strong> — 本物の石・木より安価に上質な床面を実現。</li>
              <li><strong className="text-sumi">部分張替えしやすい</strong> — タイル状のため傷んだ箇所のみ交換可能。</li>
              <li><strong className="text-sumi">清掃が簡単</strong> — 表面を拭くだけで汚れが取れる。</li>
            </ul>
          ),
        },
        {
          heading: "向いている場所・用途",
          content: (
            <ul className="space-y-2">
              <li>— 店舗・オフィスの床（土足対応）</li>
              <li>— 玄関・廊下</li>
              <li>— トイレ・水回り</li>
              <li>— 賃貸物件のグレードアップ</li>
              <li>— 商業施設・サロンの内装</li>
            </ul>
          ),
        },
        {
          heading: "施工の流れ",
          content: (
            <ol className="space-y-2">
              <li>1. 現地確認・採寸・デザインの選定</li>
              <li>2. 既存床材の撤去または清掃</li>
              <li>3. 下地の補修・調整（必要な場合）</li>
              <li>4. フロアタイルの貼り付け・目地調整</li>
              <li>5. 清掃・仕上がり確認</li>
            </ol>
          ),
        },
      ]}
      price={[
        { service: "フロアタイル施工", price: "4,000円〜/m²", note: "素材・デザインにより変動" },
        { service: "玄関・トイレ（目安）", price: "別途見積もり", note: "小スペース" },
        { service: "下地補修", price: "別途見積もり", note: "傷みがある場合" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "クッションフロア", href: "/interior/cushion-floor" },
        { label: "床工事・フローリング", href: "/interior/floor" },
        { label: "店舗内装工事", href: "/interior/store-interior" },
      ]}
      relatedPages={[
        { label: "店舗オーナー向けサービス", href: "/business/store" },
        { label: "料金の目安", href: "/price" },
        { label: "施工事例", href: "/works" },
      ]}
    />
  );
}
