import Link from "next/link";
import { SITE_NAME, SITE_TEL, SITE_EMAIL } from "@/lib/site";

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
];

export default function Footer() {
  return (
    <footer className="bg-sumi text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-white/10 tatami-pattern relative">
                <div className="absolute inset-0 bg-white/5" />
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
              <a href={`tel:${SITE_TEL.replace(/-/g, "")}`} className="block text-xs text-white/50 hover:text-white transition-colors">
                {SITE_TEL}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="block text-xs text-white/50 hover:text-white transition-colors">
                {SITE_EMAIL}
              </a>
              <p className="text-xs text-white/30">受付 9:00〜18:00（土日祝定休）</p>
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
