type Props = {
  className?: string;
  light?: boolean;
  width?: string;
};

export default function IgusaLine({ className = "", light = false, width = "w-12" }: Props) {
  return (
    <div
      className={`${width} h-px ${light ? "opacity-30" : "opacity-60"} ${className}`}
      style={{
        background: light
          ? "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(184,137,66,0.8) 40%, rgba(184,137,66,0.8) 60%, rgba(255,255,255,0) 100%)"
          : "linear-gradient(90deg, transparent 0%, #B88942 40%, #B88942 60%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}
