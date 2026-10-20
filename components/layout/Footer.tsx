import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import Marquee from "@/components/ui/motion/Marquee";
import { SITE_NAME, SITE_TEL, SITE_EMAIL } from "@/lib/site";

const hasTel = (SITE_TEL as string).trim() !== "";
const hasEmail = (SITE_EMAIL as string).trim() !== "";

const FOOTER_LINKS = [
  {
    heading: "畳工事",
    links: [
      { label: "畳表替え", href: "/services/tatami-omotegae" },
      { label: "畳裏返し", href: "/services/tatami-uragaeshi" },
      { label: "畳新調", href: "/services/tatami-shinchou" },
      { label: "縁なし畳", href: "/services/herinashi-tatami" },
      { label: "和紙畳・樹脂畳", href: "/services/washi-tatami" },
    ],
  },
  {
    heading: "法人・施設向け",
    links: [
      { label: "不動産会社・管理会社", href: "/business/real-estate" },
      { label: "旅館・宿泊施設", href: "/business/ryokan" },
      { label: "寺院・神社", href: "/business/temple-shrine" },
      { label: "店舗オーナー", href: "/business/store" },
      { label: "空室対策", href: "/business/vacancy-measures" },
    ],
  },
  {
    heading: "内装・原状回復",
    links: [
      { label: "内装工事", href: "/interior" },
      { label: "原状回復", href: "/restoration" },
      { label: "賃貸退去後の原状回復", href: "/restoration/rental" },
      { label: "管理会社向け対応", href: "/restoration/management-company" },
    ],
  },
  {
    heading: "サイト情報",
    links: [
      { label: "会社情報", href: "/about" },
      { label: "施工事例", href: "/works" },
      { label: "料金・見積もり", href: "/price" },
      { label: "ブログ", href: "/blog" },
      { label: "専門コラム", href: "/column" },
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
  {
    heading: "葛飾区エリア",
    links: [
      { label: "葛飾区の畳工事", href: "/area/katsushika" },
      { label: "葛飾区の畳表替え", href: "/area/katsushika/tatami-omotegae" },
      { label: "葛飾区の原状回復", href: "/area/katsushika/restoration" },
      { label: "亀有の畳", href: "/area/katsushika/kameari" },
      { label: "金町の畳", href: "/area/katsushika/kanamachi" },
      { label: "新小岩の畳", href: "/area/katsushika/shinkoiwa" },
      { label: "柴又の畳", href: "/area/katsushika/shibamata" },
      { label: "立石の畳", href: "/area/katsushika/tateishi" },
    ],
  },
  {
    heading: "東京エリア",
    links: [
      { label: "東京の畳張替え", href: "/area/tokyo/tatami" },
      { label: "足立区の畳", href: "/area/tokyo/adachi/tatami" },
      { label: "江戸川区の畳", href: "/area/tokyo/edogawa/tatami" },
      { label: "墨田区の畳", href: "/area/tokyo/sumida/tatami" },
      { label: "東京の原状回復", href: "/area/tokyo/restoration" },
    ],
  },
  {
    heading: "千葉・埼玉・神奈川",
    links: [
      { label: "千葉の畳張替え", href: "/area/chiba/tatami" },
      { label: "松戸市の畳", href: "/area/chiba/matsudo/tatami" },
      { label: "埼玉の畳張替え", href: "/area/saitama/tatami" },
      { label: "神奈川の畳張替え", href: "/area/kanagawa/tatami" },
      { label: "全エリア一覧", href: "/area" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-sumi text-white overflow-hidden pb-14 md:pb-0">
      <div className="absolute inset-0 tatami-dark pointer-events-none" aria-hidden="true" />
      {/* 金色の光 */}
      <div
        className="glow-drift pointer-events-none absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #B88942 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" className="group inline-flex items-center gap-3 mb-5" aria-label={`${SITE_NAME} トップへ`}>
              <div className="w-11 h-11 rounded-full overflow-hidden shrink-0 ring-1 ring-white/10 transition-transform duration-700 group-hover:rotate-[20deg]">
                <Image src="/logo-96.png" alt={`${SITE_NAME} ロゴ`} width={44} height={44} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block text-base tracking-[0.14em]" style={{ fontFamily: "var(--font-serif)" }}>
                  {SITE_NAME}
                </span>
                <span className="block text-[9px] text-white/35 tracking-[0.2em]">KATSUSHIKA TATAMI STORE</span>
              </div>
            </Link>
            <p className="text-xs text-white/45 leading-relaxed mb-6 max-w-sm">
              東京都葛飾区を中心に、畳の表替えから内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナー。
            </p>
            <div className="space-y-2">
              {hasTel && (
                <a
                  href={`tel:${SITE_TEL.replace(/-/g, "")}`}
                  className="block text-lg text-white/85 hover:text-kincya transition-colors tracking-wider"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {SITE_TEL}
                </a>
              )}
              {hasEmail && (
                <a href={`mailto:${SITE_EMAIL}`} className="block text-xs text-white/50 hover:text-white transition-colors">
                  {SITE_EMAIL}
                </a>
              )}
              <Link href="/contact" className="link-draw inline-block text-xs text-kincya hover:text-kincya transition-colors pb-0.5 mt-1">
                お問い合わせフォーム →
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {FOOTER_LINKS.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] text-kincya/70 mb-4 tracking-[0.2em]">{col.heading}</p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="link-draw text-xs text-white/55 hover:text-white transition-colors duration-200 pb-0.5">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 流れる大きな店名（装飾） */}
      <Marquee duration={60} className="relative border-y border-white/[0.06] py-6">
        {["KATSUSHIKA TATAMI STORE", "葛飾畳店", "TATAMI · INTERIOR · RESTORATION", "葛飾区の畳張替え"].map((t) => (
          <span key={t} className="flex items-center">
            <span
              className="text-outline px-8 text-5xl sm:text-7xl whitespace-nowrap"
              style={{ fontFamily: "var(--font-serif)", "--outline-color": "rgba(255,255,255,0.16)" } as CSSProperties}
            >
              {t}
            </span>
            <span className="text-kincya/40 text-2xl">✦</span>
          </span>
        ))}
      </Marquee>

      {/* Bottom */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-white/35">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <div className="flex items-center gap-6 text-xs text-white/35">
          <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <Link href="/terms" className="hover:text-white transition-colors">利用規約</Link>
        </div>
      </div>
    </footer>
  );
}
