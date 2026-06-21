import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  /** dark = white text (for use on bg-sumi hero sections). Defaults to "dark". */
  variant?: "dark" | "light";
};

export default function Breadcrumb({ items, variant = "dark" }: Props) {
  const base = variant === "dark" ? "text-white/40" : "text-sumi/40";
  const active = variant === "dark" ? "text-white/70" : "text-sumi/70";
  const hover = variant === "dark" ? "hover:text-white" : "hover:text-ai";

  return (
    <nav aria-label="パンくずリスト" className="py-4">
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs ${base}`}>
        <li>
          <Link href="/" className={`${hover} transition-colors duration-200`}>
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className={`${hover} transition-colors duration-200`}>
                {item.label}
              </Link>
            ) : (
              <span className={active}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
