import Link from "next/link";
import { PLATFORM_URL } from "@/lib/metadata";

export default function Footer() {
  return (
    <footer className="bg-sumi text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-white/10 tatami-pattern" />
              <span className="text-sm tracking-widest" style={{ fontFamily: "var(--font-serif)" }}>日本畳パートナー</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              埼玉の畳・和室工事業者と、依頼したいお客様をつなぐマーケットプレイス。
            </p>
          </div>
          <div>
            <p className="text-xs text-white/30 mb-3 tracking-widest uppercase">サービス</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li><Link href={PLATFORM_URL} className="hover:text-white transition-colors">プラットフォームを使う</Link></li>
              <li><Link href="/for-providers" className="hover:text-white transition-colors">業者登録（無料）</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">料金プラン</Link></li>
              <li><Link href="/guarantee" className="hover:text-white transition-colors">損害補償制度</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/30 mb-3 tracking-widest uppercase">会社情報</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">会社概要</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">お知らせ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs text-white/30 mb-3 tracking-widest uppercase">規約・ポリシー</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/terms-provider" className="hover:text-white transition-colors">業者向け利用規約</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">&copy; 2025 日本畳パートナー株式会社</p>
          <p className="text-xs text-white/20">Made in Saitama, Japan</p>
        </div>
      </div>
    </footer>
  );
}
