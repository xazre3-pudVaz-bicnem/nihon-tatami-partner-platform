import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `旅館・宿泊施設の畳工事｜大量施工・繁忙期前対応 | ${SITE_NAME}`,
  description:
    "旅館・ホテル客室の畳表替え・新調を大量施工・繁忙期前の集中スケジューリングで対応。国産い草・和紙畳・格式ある縁で品質を維持。稼働中の段階施工・インバウンド対応・定期メンテナンスもご相談ください。",
  path: "/business/ryokan",
});

const faqs: FaqItem[] = [
  { category: "btob", q: "繁忙期前にまとめて施工してもらえますか？", a: "はい。お盆・年末年始・大型連休・紅葉シーズンなどの繁忙期前は依頼が集中します。スケジュールを早めに共有いただければ、客室を順番に止めながらの段階施工や、休館日・閑散期に合わせた集中施工の計画を立てられます。2〜3か月前のご相談をおすすめします。" },
  { category: "btob", q: "宿泊客がいる中でも施工できますか？", a: "稼働を止めずに、空室となった客室から順番に畳を引き取り・お戻しする段階施工に対応します。畳は工場で加工するため、対象の客室のみ短期間使用できない状態になります。チェックアウトからチェックインまでの間で完結させる調整もご相談ください。" },
  { category: "btob", q: "客室の格式に合わせた素材を選べますか？", a: "はい。一般客室は耐久性とコストのバランスに優れた国産い草・機械すき、特別室・離れには手刈り天日干しの高級い草や上質な紋縁、大広間・宴会場には傷みにくい和紙畳など、客室タイプごとに最適な素材・縁をご提案します。" },
  { category: "btob", q: "客室タイプごとに対応を変えられますか？", a: "はい。一般客室・特別室・大広間・宴会場・廊下では、使用頻度も求められる格式も異なります。それぞれに適した素材・縁・施工方法をご提案し、施設全体の品質と費用のバランスを整えます。" },
  { category: "btob", q: "和紙畳や樹脂畳への変更はできますか？", a: "可能です。和紙畳・樹脂畳は色あせ・ささくれ・カビダニに強く、清掃性に優れるため、稼働率の高い客室や大広間で採用されるケースが増えています。い草の風合いを残したい客室との使い分けもご提案します。" },
  { category: "btob", q: "縁（へり）はどのように選べばよいですか？", a: "縁は空間の格を決める要素です。一般客室には落ち着いた無地縁、格式を重んじる客室には紋縁・麻縁などをご提案します。施設のブランドや客室の雰囲気に合わせて選定します。" },
  { category: "btob", q: "旅館の口コミ・評点に畳の状態は影響しますか？", a: "宿泊予約サイトの口コミでは「清潔感」「部屋の状態」が評価項目に含まれます。色あせ・ささくれた畳はマイナス評価の原因になり得ます。定期的な畳替えは、評点維持・向上のための投資としてご検討ください。" },
  { category: "btob", q: "外国人観光客（インバウンド）向けに配慮できますか？", a: "畳の和の空間は外国人観光客に大きな魅力です。青々とした畳とい草の香りは写真映えし、SNS・口コミでの発信につながります。土足に慣れた利用が多い客室には傷みにくい素材を選ぶなど、利用形態に合わせた提案が可能です。" },
  { category: "timing", q: "旅館の畳はどのくらいの頻度で替えるべきですか？", a: "使用頻度や客室の格により異なりますが、裏返しは2〜3年、表替えは3〜5年が目安です。稼働率の高い人気客室は早めのサイクル、利用頻度の低い客室は状態を見ながらの対応をおすすめします。" },
  { category: "btob", q: "定期メンテナンス契約のような対応は可能ですか？", a: "客室数・客室の格・稼働状況に応じて、年次・複数年での計画的なメンテナンスをご相談いただけます。毎年一定数の客室を順次更新する方式なら、費用の平準化と品質の安定維持が両立できます。" },
  { category: "btob", q: "大広間・宴会場の大判の畳にも対応できますか？", a: "はい。大広間・宴会場の多枚数の畳、続き間の畳も対応可能です。人の出入りが多く傷みやすい空間には、耐久性の高い素材や格式に合った縁をご提案します。" },
  { category: "btob", q: "襖・障子・網戸や壁紙もまとめて頼めますか？", a: "はい。畳と合わせて襖・障子・網戸の張替え、壁紙（クロス）の張替えも一括でご依頼いただけます。客室を一度に整えることで、稼働停止期間を最小化できます。" },
  { category: "btob", q: "施工中の騒音や匂いは大丈夫ですか？", a: "畳は工場でお預かりして加工するため、客室内での作業は最小限です。新しいい草には香りがありますが、これは品質の証でもあります。気になる場合は和紙畳・樹脂畳もご提案できます。搬入経路・作業時間も他の宿泊客に配慮して調整します。" },
  { category: "price", q: "旅館向けの料金はどのくらいですか？", a: "一般客室向けの表替えは1枚あたりの目安をご案内できますが、客室数・素材・縁・スケジュールにより変動します。10室・20室・30室といった単位の大量施工は個別にお見積もりします。まずは客室数と畳数をお知らせください。" },
  { category: "price", q: "請求書払い・法人取引に対応していますか？", a: "請求書払い・お振込での対応をご相談いただけます。法人契約・継続取引の条件についても、案件規模に応じて柔軟にご案内します。" },
  { category: "btob", q: "施工報告書はもらえますか？", a: "はい。施工前後の写真を添えた報告書を発行します。支配人・オーナー様への報告資料としてご活用いただけます。" },
  { category: "btob", q: "複数施設を運営していますが一括対応できますか？", a: "はい。複数施設の施工スケジュールを調整し、継続的なお取引として対応します。施設数・客室数をお知らせください。" },
  { category: "btob", q: "廊下や共用部にも対応できますか？", a: "はい。廊下・ロビー・共用部の畳またはその他床材の整備にも対応します。用途に応じた素材をご提案します。" },
  { category: "btob", q: "見積もりに必要な情報は何ですか？", a: "施設名・客室数・畳の枚数（目安）・現在の状態（写真があれば尚良）・ご希望の時期をお知らせください。スムーズにご案内できます。" },
  { category: "btob", q: "施工後の品質確認はしてもらえますか？", a: "はい。施工後に仕上がりを確認し、問題がないことを確かめてからお引き渡しします。" },
];

export default function RyokanPage() {
  return (
    <ServicePageTemplate
      canonicalPath="/business/ryokan"
      serviceTypeName="旅館向け畳工事"
      eyebrow="For Ryokan / Hotel"
      title="旅館・宿泊施設向け畳工事"
      subtitle="客室の定期メンテナンス、繁忙期前の集中施工、高品質素材での格式維持。旅館のスケジュールに合わせた施工計画を立てます。"
      breadcrumbs={[{ label: "法人・施設向け", href: "/business" }, { label: "旅館・宿泊施設向け" }]}
      image="/images/nihon-tatami/hero/hero-tatami-ryokan-evening.png"
      sections={[
        {
          heading: "旅館・宿泊施設の畳が果たす役割",
          content: (
            <>
              <p>
                旅館・宿泊施設の客室畳は、宿泊客の満足度に直結する「おもてなしの土台」です。
                チェックイン直後に目に入る畳の状態は、施設全体の印象を左右します。
                ささくれ・色あせ・へたり・しみのある畳は、どれほど料理やサービスが優れていても
                「清潔感に欠ける」「管理が行き届いていない」という評価につながりかねません。
              </p>
              <p>
                逆に、青々とした畳表とい草の香りは、和の空間ならではの安らぎを生み、口コミ・リピートにつながります。
                畳のメンテナンスは単なる修繕ではなく、施設価値を守り高めるための投資です。
                日本畳パートナーズでは、旅館・宿泊施設の運営スケジュールと格式を踏まえた施工計画をご提案します。
              </p>
            </>
          ),
        },
        {
          heading: "旅館の畳工事特有の三つの課題",
          content: (
            <>
              <p>
                旅館の畳工事には、一般住宅とは異なる「繁忙期」「稼働率」「品質維持」という三つの課題が絡み合います。
                これらを同時に満たす計画づくりが、旅館向け施工の要です。
              </p>
              <ul className="space-y-2">
                <li><strong className="text-sumi">繁忙期</strong> — お盆・年末年始・連休前は予約が埋まり、客室を止めにくくなります。閑散期・休館日を活用した先回りの計画が重要です。</li>
                <li><strong className="text-sumi">稼働率</strong> — 売上に直結する稼働を落とさないため、空室の客室から順に施工する段階施工で対応します。</li>
                <li><strong className="text-sumi">品質維持</strong> — 客室の格に応じた素材・縁を選び、施設のブランドを損なわない仕上げを徹底します。</li>
              </ul>
            </>
          ),
        },
        {
          heading: "客室タイプ別の対応詳細",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">一般客室</strong> — 稼働率が高く傷みやすいため、耐久性とコストのバランスに優れた国産い草・機械すき、または和紙畳をご提案します。</li>
              <li><strong className="text-sumi">特別室・離れ・茶室</strong> — 手刈り天日干しの上質な国産い草、上質な縁・本ぐけ仕上げなど、格式にふさわしい素材と仕立てを選びます。</li>
              <li><strong className="text-sumi">大広間・宴会場</strong> — 人の出入りが多く摩耗しやすいため、傷みにくい畳表や格式に合った紋縁・麻縁をご提案します。</li>
              <li><strong className="text-sumi">廊下・共用スペース</strong> — 動線上の畳・置き畳は、耐久性と清掃性を重視して選定します。</li>
            </ul>
          ),
        },
        {
          heading: "国産い草の格式と縁の選び方",
          content: (
            <>
              <p>
                旅館に適した畳表は、客室の格によって選び分けます。香り・色つや・耐久性に優れる手刈り天日干しの国産い草は、
                特別室・茶室など格式を重んじる空間に最適です。一般客室には品質とコストのバランスのよい機械すきの国産い草が広く採用されます。
              </p>
              <ul className="space-y-2">
                <li><strong className="text-sumi">無地縁</strong> — すっきりとした印象で、一般客室や現代的な客室に。</li>
                <li><strong className="text-sumi">紋縁</strong> — 伝統的な格式を表す縁。特別室・大広間など格を重んじる空間に。</li>
                <li><strong className="text-sumi">麻縁・上質縁</strong> — 高級感のある仕立て。施設のブランドを象徴する空間に。</li>
              </ul>
            </>
          ),
        },
        {
          heading: "口コミ・評点とインバウンド需要",
          content: (
            <>
              <p>
                宿泊予約サイトの口コミでは「清潔感」「部屋の状態」が重要な評価項目です。
                色あせ・ささくれた畳は、たとえ小さな点でもマイナス評価の原因になります。
                定期的な畳のメンテナンスは、評点の維持・向上、ひいては予約獲得につながる重要な施策です。
              </p>
              <p>
                また、外国人観光客にとって畳の和の空間は日本ならではの大きな魅力です。
                青々とした畳とい草の香りは写真映えし、SNS・口コミでの発信を通じて新たな集客にもつながります。
                清潔感へのプレッシャーが高まる今、畳の状態を整えることはインバウンド対応の基盤になります。
              </p>
            </>
          ),
        },
        {
          heading: "施工スケジュールの組み方",
          content: (
            <p>
              旅館の畳工事は、稼働への影響を最小化するスケジュール設計が肝心です。
              オフシーズンや休館日を活用した集中施工、稼働中は空室の客室から順に進める段階施工、
              繁忙期前に間に合わせるための逆算計画など、施設の状況に合わせて柔軟に組みます。
              新しい畳のい草の香りや搬入時の物音にも配慮し、他の宿泊客の滞在を妨げないよう調整します。
            </p>
          ),
        },
        {
          heading: "大量施工の費用目安と定期メンテナンス",
          content: (
            <>
              <p>
                10室・20室・30室といった単位の大量施工では、客室数・素材・縁・スケジュールにより費用が変動します。
                まとまった枚数の場合は1枚あたりの単価を抑えやすく、まとめてのお見積もりをご相談ください。
              </p>
              <p>
                すべての畳を一度に更新するのではなく、毎年一定数の客室を順次更新する計画的なメンテナンスもおすすめです。
                費用を平準化でき、客室の品質を常に一定水準に保てます。繁忙期前の点検を組み込むことで、突発的な不具合も未然に防げます。
              </p>
            </>
          ),
        },
        {
          heading: "旅館に適した素材の総合比較",
          content: (
            <ul className="space-y-2">
              <li><strong className="text-sumi">国産い草（手刈り・天日干し）</strong> — 香り・色つや・耐久性に優れ、特別室・茶室など格式を重んじる客室に最適。</li>
              <li><strong className="text-sumi">国産い草（機械すき）</strong> — 品質とコストのバランスがよく、一般客室の標準として広く採用。</li>
              <li><strong className="text-sumi">和紙畳</strong> — 色あせ・ささくれ・カビダニに強く、稼働率の高い客室・大広間に。水拭きもしやすく衛生的。</li>
              <li><strong className="text-sumi">樹脂畳</strong> — 清掃性・耐久性が最も高く、土足利用や飲食を伴う空間に。香り・調湿性はい草に及びません。</li>
            </ul>
          ),
        },
        {
          heading: "施工の進め方",
          content: (
            <ol className="space-y-2">
              <li>1. 客室数・畳数・スケジュールのヒアリング</li>
              <li>2. 現地確認（客室の格・畳の状態・搬入経路の確認）</li>
              <li>3. 素材・縁のご提案と全体お見積もり</li>
              <li>4. 稼働状況に合わせた施工計画の調整</li>
              <li>5. 段階施工・養生・清掃を徹底して施工</li>
              <li>6. 仕上がり確認・引き渡し</li>
            </ol>
          ),
        },
        {
          heading: "旅館畳工事で特に重要な3点",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>稼働を止めない段階施工</h3>
                <p className="text-sumi/80 text-sm">チェックアウト後に引き取り・工場加工・チェックインまでに返却。1棟ずつ・1客室ずつ順番に対応します。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>客室タイプ別素材選定</h3>
                <p className="text-sumi/80 text-sm">一般客室は国産い草・標準グレード、特別室は高品質い草・紋縁、大広間は和紙畳（ささくれに強い）。用途に応じた素材をご提案します。</p>
              </div>
              <div className="bg-kiji/40 rounded-lg p-5">
                <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>繁忙期2〜3か月前のご相談</h3>
                <p className="text-sumi/80 text-sm">お盆・年末年始・大型連休前は依頼が集中します。早めのスケジュール共有で計画しやすくなります。</p>
              </div>
            </div>
          ),
        },
        {
          heading: "客室タイプ別の素材・施工サイクル目安",
          content: (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border">
                <thead>
                  <tr className="bg-kiji/50">
                    <th className="text-left py-2 px-3 text-sumi font-normal border-b border-border" style={{ fontFamily: "var(--font-serif)" }}>客室タイプ</th>
                    <th className="text-left py-2 px-3 text-sumi font-normal border-b border-border" style={{ fontFamily: "var(--font-serif)" }}>推奨素材</th>
                    <th className="text-left py-2 px-3 text-sumi font-normal border-b border-border" style={{ fontFamily: "var(--font-serif)" }}>縁の選び方</th>
                    <th className="text-left py-2 px-3 text-sumi font-normal border-b border-border" style={{ fontFamily: "var(--font-serif)" }}>表替えサイクル目安</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-kiji/20 transition-colors">
                    <td className="py-2 px-3 text-sumi">一般客室</td>
                    <td className="py-2 px-3 text-sumi/80">国産い草（機械すき）</td>
                    <td className="py-2 px-3 text-sumi/80">落ち着いた無地縁</td>
                    <td className="py-2 px-3 text-sumi/80">3〜5年</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors">
                    <td className="py-2 px-3 text-sumi">特別室・離れ</td>
                    <td className="py-2 px-3 text-sumi/80">手刈り高品質い草</td>
                    <td className="py-2 px-3 text-sumi/80">紋縁・麻縁</td>
                    <td className="py-2 px-3 text-sumi/80">状態を見て判断</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors">
                    <td className="py-2 px-3 text-sumi">大広間・宴会場</td>
                    <td className="py-2 px-3 text-sumi/80">和紙畳（耐久性重視）</td>
                    <td className="py-2 px-3 text-sumi/80">格式ある縁</td>
                    <td className="py-2 px-3 text-sumi/80">5年〜（状態により）</td>
                  </tr>
                  <tr className="hover:bg-kiji/20 transition-colors">
                    <td className="py-2 px-3 text-sumi">廊下・共用部</td>
                    <td className="py-2 px-3 text-sumi/80">樹脂畳または耐久素材</td>
                    <td className="py-2 px-3 text-sumi/80">—</td>
                    <td className="py-2 px-3 text-sumi/80">状態により</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-sumi/60 mt-2">※ 素材・枚数・スケジュールにより費用変動。現地確認後に正式お見積もり（税込）。</p>
            </div>
          ),
        },
        {
          heading: "稼働を止めない段階施工の進め方",
          content: (
            <>
              <ol className="space-y-2">
                <li className="text-sumi">1. 閑散期または繁忙期翌日に施工日程を共有</li>
                <li className="text-sumi">2. チェックアウト後、対象客室の畳を引き取り</li>
                <li className="text-sumi">3. 工場で畳表・縁の交換・加工</li>
                <li className="text-sumi">4. チェックインまでに納品・敷き込み</li>
                <li className="text-sumi">5. 複数客室を並行対応することも可能（要相談）</li>
              </ol>
              <p className="text-sm text-sumi/60 mt-3">1泊の空きがあれば1室対応が目安です。まずは状況をご相談ください。</p>
            </>
          ),
        },
        {
          heading: "インバウンド需要と畳の品質管理",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sumi/80">宿泊予約サイトの「清潔感」評価には畳の状態が関係します。青々とした畳表はSNS映えし、外国人ゲストの和の体験を高めます。定期的な表替えはゲスト満足と口コミ向上への投資と考えられています。</p>
              </div>
              <div>
                <p className="text-sumi/80">土足で使われることが多い客室には、傷みにくい和紙畳・樹脂畳をご提案します。い草の香りを楽しんでいただきたい客室と使い分けも可能です。</p>
              </div>
            </div>
          ),
        },
        {
          heading: "旅館の畳メンテナンス計画の考え方",
          content: (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-kiji/40 rounded-lg p-5">
                  <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>毎年一定数を更新する方式</h3>
                  <p className="text-sumi/80 text-sm">費用を平準化しながら客室品質を維持。例：年間20室を3年かけて更新。</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-5">
                  <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>稼働率の高い客室から優先する方式</h3>
                  <p className="text-sumi/80 text-sm">傷みが早い客室を優先整備。費用対効果を意識した進め方。</p>
                </div>
                <div className="bg-kiji/40 rounded-lg p-5">
                  <h3 className="text-sumi font-semibold mb-2" style={{ fontFamily: "var(--font-serif)" }}>繁忙期前に集中整備する方式</h3>
                  <p className="text-sumi/80 text-sm">閑散期にまとめて施工。シーズン前に全体を整えます。</p>
                </div>
              </div>
              <p className="text-sm text-sumi/60 mt-3">※ 客室数・稼働率・ご予算に応じた計画をご相談いただけます。</p>
            </>
          ),
        },
      ]}
      price={[
        { service: "客室畳 表替え（国産い草・機械すき）", price: "5,500円〜/枚", note: "一般客室向け標準" },
        { service: "客室畳 表替え（国産い草・手刈り）", price: "8,000円〜/枚", note: "特別室・茶室向け" },
        { service: "客室畳 新調（建材床・国産い草）", price: "15,000円〜/枚", note: "全面リニューアル" },
        { service: "和紙畳への変更", price: "8,000円〜/枚", note: "稼働率の高い客室向け" },
        { service: "複数客室・継続取引", price: "別途見積もり", note: "客室数・スケジュールにより" },
      ]}
      faqs={faqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳新調", href: "/services/tatami-shinchou" },
        { label: "和紙畳", href: "/services/washi-tatami" },
        { label: "襖・障子・網戸", href: "/services/fusuma-shoji-amido" },
      ]}
      relatedPages={[
        { label: "旅館・宿泊施設の襖張替え", href: "/fusuma/for-ryokan" },
        { label: "旅館・宿泊施設の障子張替え", href: "/shoji/for-ryokan" },
        { label: "寺院・神社向け畳工事", href: "/business/temple-shrine" },
        { label: "コラム：旅館の畳張替えメリット", href: "/column/ryokan-tatami-merit" },
      ]}
    />
  );
}
