import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import type { FaqItem } from "@/data/faq";
import ServicePageTemplate from "@/components/ui/ServicePageTemplate";

export const metadata: Metadata = buildMetadata({
  title: `畳のお手入れガイド | 日常・季節別メンテナンス | ${SITE_NAME}`,
  description:
    "畳を長持ちさせるお手入れ方法を解説。日常の掃除、季節別メンテナンス、カビ・ダニ対策、家具跡対策、やってはいけないNG行為、FAQまで。正しい手入れで畳を美しく保つ方法がわかります。",
  path: "/guide/tatami-maintenance",
});

const maintenanceFaqs: FaqItem[] = [
  {
    category: "general",
    q: "畳の掃除はどうすればよいですか？",
    a: "掃除機を畳の目に沿ってゆっくりかけるのが基本です。乾拭きで仕上げ、水拭きは固く絞った布で目に沿って行い、その後しっかり乾燥させます。い草の畳は水分を嫌うため、濡れた状態を残さないことが大切です。",
  },
  {
    category: "general",
    q: "畳に掃除機をかける頻度は？",
    a: "週に1〜2回が目安です。ホコリ・食べこぼし・髪の毛などはダニの餌になるため、こまめに取り除くことが大切です。目に沿ってゆっくりかけると効果的です。",
  },
  {
    category: "general",
    q: "畳の水拭きはしてもよいですか？",
    a: "い草の畳は基本的に乾拭きが推奨です。汚れが気になるときは固く絞った布で目に沿って拭き、その後しっかり乾燥させます。和紙畳・樹脂畳は水拭き可能で、清掃が簡単です。",
  },
  {
    category: "general",
    q: "畳のカビを防ぐには？",
    a: "湿度を60%以下に保ち、こまめに換気することが基本です。家具を畳に密着させず風の通り道を作り、布団・カーペットを敷きっぱなしにしないようにします。梅雨時は除湿機・エアコンの除湿運転が有効です。",
  },
  {
    category: "general",
    q: "畳のダニを防ぐには？",
    a: "掃除機を目に沿ってゆっくりかけ、餌となるホコリ・食べこぼしを残さないこと、湿度を下げること、晴れた日に換気して湿気を逃がすことが有効です。古い畳はダニが増えやすいため、表替えも検討しましょう。",
  },
  {
    category: "general",
    q: "家具のへこみ跡を防ぐ・直す方法は？",
    a: "家具の脚にフェルトや専用マットを敷くと跡が付きにくくなります。付いてしまった跡は、濡れタオルを当ててスチームアイロンを軽く当て、い草を起こすと目立ちにくくなります（当て布をし、長時間当てないよう注意）。",
  },
  {
    category: "general",
    q: "畳の上にカーペットを敷いてもいいですか？",
    a: "通気性が悪くなり、カビ・ダニの原因になるため、敷きっぱなしはおすすめしません。敷く場合は定期的にめくって換気し、湿気をためないようにしてください。",
  },
  {
    category: "general",
    q: "畳に飲み物をこぼしたときの対処は？",
    a: "すぐに乾いた布で水分を吸い取り（こすらず押さえる）、塩や小麦粉で残りの水分を吸わせてから掃除機で吸い取ります。その後、固く絞った布で拭き、しっかり乾燥させます。早い対処が染み・においを防ぎます。",
  },
  {
    category: "timing",
    q: "畳はどのくらいで張り替えるべきですか？",
    a: "裏返しは使用2〜3年、表替えは5〜8年が目安です。日常のお手入れをしていても、い草は経年で色あせ・ささくれが出ます。状態を見て適切な時期に張り替えると、清潔感を長く保てます。",
  },
  {
    category: "general",
    q: "やってはいけないお手入れは？",
    a: "い草の畳に大量の水を使う、濡れたまま放置する、漂白剤を直接使う、目に逆らって強くこする、洗剤を直接かける、などはNGです。い草を傷め、変色・カビの原因になります。",
  },
];

export default function TatamiMaintenancePage() {
  return (
    <ServicePageTemplate
      eyebrow="Guide"
      title="畳のお手入れガイド"
      subtitle="正しいお手入れで畳は長持ちします。日常の掃除から季節別メンテナンス、カビ・ダニ・家具跡対策、NG行為まで解説します。"
      breadcrumbs={[
        { label: "ガイド", href: "/guide/how-to-choose-tatami" },
        { label: "畳のお手入れガイド" },
      ]}
      image="/images/nihon-tatami/tatami/tatami-room-minimal-01.png"
      sections={[
        {
          heading: "日常のお手入れ方法",
          content: (
            <>
              <p>
                畳を美しく保つ基本は、こまめな掃除と乾燥です。難しいことは必要ありません。
                次のポイントを習慣にしましょう。
              </p>
              <ul className="space-y-2">
                <li>— 掃除機を畳の目に沿ってゆっくりかける（週1〜2回）</li>
                <li>— 乾拭きで仕上げる</li>
                <li>— 水拭きは固く絞った布で目に沿って行い、すぐ乾燥させる</li>
                <li>— 食べこぼし・ホコリはその都度取り除く（ダニの餌を残さない）</li>
                <li>— 晴れた日に窓を開けて換気する</li>
              </ul>
            </>
          ),
        },
        {
          heading: "季節別メンテナンス",
          content: (
            <ul className="space-y-2">
              <li>— <strong className="text-sumi">春</strong>：花粉・ホコリがたまりやすい。掃除機がけと換気を丁寧に</li>
              <li>— <strong className="text-sumi">梅雨〜夏</strong>：湿度が高くカビ・ダニの最盛期。除湿・換気を徹底し、湿度60%以下を目標に</li>
              <li>— <strong className="text-sumi">秋</strong>：乾燥した晴れの日に換気して湿気を逃がす絶好の時期</li>
              <li>— <strong className="text-sumi">冬</strong>：結露に注意。窓際の畳が湿らないよう換気・除湿を</li>
            </ul>
          ),
        },
        {
          heading: "カビ・ダニ対策",
          content: (
            <>
              <p>
                カビ・ダニは「湿気」と「餌」を断つことで予防できます。
              </p>
              <ul className="space-y-2">
                <li>— 湿度を60%以下に保つ（除湿機・エアコンの除湿運転）</li>
                <li>— こまめに換気し、家具で風の通り道をふさがない</li>
                <li>— 布団・カーペットを敷きっぱなしにしない</li>
                <li>— 食べこぼし・ホコリを残さない</li>
                <li>— 湿気の多い部屋は和紙畳・樹脂畳への変更も検討</li>
              </ul>
            </>
          ),
        },
        {
          heading: "家具跡・へこみ対策",
          content: (
            <p>
              家具の脚にはフェルトや専用マットを敷くと跡が付きにくくなります。
              付いてしまったへこみ跡は、濡れタオルを当ててスチームアイロンを軽く当て、
              つぶれたい草を起こすと目立ちにくくなります。
              ただし当て布をして、同じ場所に長時間当てないよう注意してください。
              定期的に家具の位置を少しずらすことも有効です。
            </p>
          ),
        },
        {
          heading: "やってはいけないNG行為",
          content: (
            <ul className="space-y-2">
              <li>— い草の畳に大量の水を使う</li>
              <li>— 濡れたまま放置する</li>
              <li>— 漂白剤・洗剤を直接かける</li>
              <li>— 畳の目に逆らって強くこする</li>
              <li>— カーペット・布団を敷きっぱなしにする</li>
              <li>— カビの上から掃除機をかけて胞子をまき散らす</li>
            </ul>
          ),
        },
        {
          heading: "お手入れしても改善しないときは",
          content: (
            <p>
              日常のお手入れをしても、色あせ・ささくれ・へたり・カビ臭が気になってきたら、
              張り替えのタイミングです。裏返しは使用2〜3年、表替えは5〜8年が目安です。
              畳床まで傷んでいる場合は新調が必要です。状態を見て最適な方法を無料でご提案します。
            </p>
          ),
        },
      ]}
      faqs={maintenanceFaqs}
      relatedServices={[
        { label: "畳表替え", href: "/services/tatami-omotegae" },
        { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
        { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
      ]}
      relatedPages={[
        { label: "畳のカビ対策", href: "/needs/mold" },
        { label: "畳のダニ対策", href: "/needs/dani" },
        { label: "畳替えのタイミング（コラム）", href: "/column/tatami-timing" },
        { label: "畳の選び方ガイド", href: "/guide/how-to-choose-tatami" },
      ]}
    />
  );
}
