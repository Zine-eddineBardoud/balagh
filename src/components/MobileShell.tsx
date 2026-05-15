import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
  backHref?: string;
  backLabel?: string;
  dark?: boolean;
  gradient?: "officer" | "owner" | false;
  footer?: React.ReactNode;
}

export function MobileShell({
  children,
  className = "",
  backHref,
  backLabel = "Back",
  dark = false,
  gradient = false,
  footer,
}: MobileShellProps) {
  const bg = dark
    ? "bg-[#0a0a0c]"
    : gradient === "officer"
      ? "gradient-page"
      : gradient === "owner"
        ? "gradient-page-owner"
        : "bg-[var(--background)]";

  const withFooter = Boolean(footer);

  return (
    <div
      className={cn(
        bg,
        withFooter ? "flex h-dvh max-h-dvh flex-col overflow-hidden" : "min-h-dvh",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-md flex-1 flex-col overflow-hidden",
          "px-5 pt-[max(1.25rem,env(safe-area-inset-top))]",
          withFooter
            ? "min-h-0 pb-0"
            : "min-h-dvh pb-[max(1.5rem,env(safe-area-inset-bottom))]",
          className,
        )}
      >
        {backHref && (
          <Link
            href={backHref}
            className={cn(
              "btn-press mb-4 inline-flex w-fit shrink-0 items-center gap-0.5 rounded-full py-1.5 pr-3 text-sm font-semibold",
              dark
                ? "text-white/75 hover:text-white"
                : "text-slate-600 hover:text-slate-900",
            )}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
            {backLabel}
          </Link>
        )}
        <main
          className={cn(
            "flex flex-1 flex-col",
            withFooter &&
              "scrollbar-hide min-h-0 overflow-y-auto overscroll-y-contain [-webkit-overflow-scrolling:touch]",
          )}
        >
          <div
            className={cn(
              "flex flex-1 flex-col",
              withFooter && "pb-[calc(6.5rem+env(safe-area-inset-bottom))]",
            )}
          >
            {children}
          </div>
        </main>
      </div>

      {footer && (
        <footer className="shrink-0 border-t border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur-md pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto w-full max-w-md">{footer}</div>
        </footer>
      )}
    </div>
  );
}
