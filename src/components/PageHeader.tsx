import { cn } from "@/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function PageHeader({
  title,
  subtitle,
  className,
  light = false,
}: PageHeaderProps) {
  return (
    <header className={cn("animate-fade-up", className)}>
      <h1
        className={cn(
          "text-[1.65rem] font-bold tracking-tight",
          light ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-1 text-sm leading-relaxed",
            light ? "text-white/70" : "text-slate-500",
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
