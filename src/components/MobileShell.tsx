"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/language-context";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
  backHref?: string;
  backLabel?: string;
  dark?: boolean;
  gradient?: "officer" | "owner" | false;
  footer?: React.ReactNode;
  hideLang?: boolean;
}

export function MobileShell({
  children,
  className = "",
  backHref,
  backLabel,
  dark = false,
  gradient = false,
  footer,
  hideLang = false,
}: MobileShellProps) {
  const { t } = useLanguage();
  const label = backLabel ?? t.common.back;

  const bg = dark
    ? "bg-dark"
    : gradient
      ? "gradient-page"
      : "bg-light";

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
        {(!hideLang || backHref) && (
          <div className="mb-4 flex shrink-0 items-center justify-between gap-2">
            {backHref ? (
              <Link
                href={backHref}
                className={cn(
                  "btn-press inline-flex w-fit items-center gap-0.5 rounded-full py-1.5 pe-3 text-sm font-semibold",
                  dark
                    ? "text-white/75 hover:text-white"
                    : "text-muted hover:text-dark",
                )}
              >
                <ChevronLeft
                  className="h-5 w-5 rtl:rotate-180"
                  strokeWidth={2.5}
                />
                {label}
              </Link>
            ) : (
              <div />
            )}
            {!hideLang && (
              <LanguageSwitcher variant={dark ? "dark" : "pill"} />
            )}
          </div>
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
