import Link from "next/link";
import Image from "next/image";
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
      { label: "専門コラム", href: "/column" },
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "/privacy" },
    ],
  },
  {
    heading: "埼玉エリア（推奨）",
    links: [
      { label: "埼玉の畳張替え", href: "/area/saitama/tatami" },
      { label: "素材選びガイド", href: "/area/saitama/guide-tatami-buying" },
      { label: "一戸建て・マンション向け", href: "/area/saitama/for-homeowner" },
      { label: "賃貸オーナー向け", href: "/area/saitama/for-rental-owner" },
      { label: "埼玉の畳表替え", href: "/area/saitama/tatami-omotegae" },
      { label: "埼玉の畳新調", href: "/area/saitama/tatami-shinchou" },
      { label: "埼玉の原状回復", href: "/area/saitama/restoration" },
      { label: "さいたま市の畳", href: "/area/saitama/saitama-city" },
    ],
  },
  {
    heading: "東京エリア",
    links: [
      { label: "東京の畳張替え", href: "/area/tokyo/tatami" },
      { label: "世田谷区の畳", href: "/area/tokyo/setagaya/tatami" },
      { label: "新宿区の畳", href: "/area/tokyo/shinjuku/tatami" },
      { label: "八王子市の畳", href: "/area/tokyo/hachioji/tatami" },
      { label: "東京の原状回復", href: "/area/tokyo/restoration" },
    ],
  },
  {
    heading: "神奈川・千葉エリア",
    links: [
      { label: "神奈川の畳張替え", href: "/area/kanagawa/tatami" },
      { label: "横浜市の畳", href: "/area/kanagawa/yokohama/tatami" },
      { label: "千葉の畳張替え", href: "/area/chiba/tatami" },
      { label: "千葉市の畳", href: "/area/chiba/chiba/tatami" },
      { label: "全エリア一覧", href: "/area" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-sumi text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/logo.png"
                  alt="日本畳パートナーズ ロゴ"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block text-sm tracking-[0.12em]" style={{ fontFamily: "var(--font-serif)" }}>
                  {SITE_NAME}
                </span>
                <span className="block text-[9px] text-white/30 tracking-[0.15em]">NIHON TATAMI PARTNERS</span>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed mb-6">
              畳の表替えから内装工事・原状回復まで。住宅・旅館・寺社・店舗・不動産管理物件に対応する畳と空間整備の専門パートナー。
            </p>
            <div className="space-y-2">
              {hasTel && (
                <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="block text-xs text-white/50 hover:text-white transition-colors">
                  {SITE_TEL}
                </a>
              )}
              {hasEmail && (
                <a href={`mailto:${SITE_EMAIL}`} className="block text-xs text-white/50 hover:text-white transition-colors">
                  {SITE_EMAIL}
                </a>
              )}
              <Link href="/contact" className="block text-xs text-kincya/70 hover:text-kincya transition-colors">
                お問い合わせフォーム
              </Link>
            </div>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs text-white/30 mb-4 tracking-[0.2em] uppercase">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-white/50 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p className="text-xs text-white/20">Crafted with care in Japan</p>
        </div>
      </div>
    </footer>
  );
}
