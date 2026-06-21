import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-kiji relative overflow-hidden">
      <div className="absolute inset-0 tatami-bg opacity-30" aria-hidden="true" />
      <div className="relative text-center px-6 max-w-lg mx-auto">
        <p className="text-[80px] sm:text-[120px] text-sumi/10 leading-none select-none" style={{ fontFamily: "var(--font-serif)" }}>
          404
        </p>
        <h1 className="text-2xl sm:text-3xl text-sumi mb-4 -mt-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}>
          ページが見つかりません
        </h1>
        <p className="text-sm text-sumi/60 leading-relaxed mb-10">
          お探しのページは移動・削除された可能性があります。
          以下からご覧になりたいページをお探しください。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {[
            { label: "畳工事", href: "/services/tatami" },
            { label: "内装工事", href: "/interior" },
            { label: "原状回復", href: "/restoration" },
            { label: "料金の目安", href: "/price" },
            { label: "施工対応例", href: "/works" },
            { label: "お問い合わせ", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border border-border text-xs text-sumi py-3 px-2 text-center hover:border-kincya hover:text-kincya transition-colors duration-200"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-block bg-sumi text-white text-sm px-10 py-3.5 tracking-wider hover:bg-sumi/80 transition-colors duration-300"
        >
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
