import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="パンくずリスト" className="py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-sumi/40">
        <li>
          <Link href="/" className="hover:text-ai transition-colors duration-200">
            ホーム
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <span>/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-ai transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className="text-sumi/70">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
