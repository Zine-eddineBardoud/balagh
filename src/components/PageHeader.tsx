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
          "font-heading text-[1.65rem] leading-none tracking-wide",
          light ? "text-white" : "text-dark",
        )}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={cn(
            "mt-1 text-sm leading-relaxed",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
