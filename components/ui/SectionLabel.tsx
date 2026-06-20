type Props = {
  en: string;
  light?: boolean;
  className?: string;
};

export default function SectionLabel({ en, light = false, className = "" }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`w-5 h-px ${light ? "bg-white/30" : "bg-kincya/60"}`}
        aria-hidden="true"
      />
      <p
        className={`text-[10px] tracking-[0.4em] uppercase ${light ? "text-white/40" : "text-kincya/80"}`}
      >
        {en}
      </p>
    </div>
  );
}
