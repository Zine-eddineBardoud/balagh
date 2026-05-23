"use client";

import { Languages } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";
import { localeLabels, type Locale } from "@/i18n/translations";

const locales: Locale[] = ["en", "fr", "ar"];

interface LanguageSwitcherProps {
  variant?: "light" | "dark" | "pill";
  className?: string;
}

export function LanguageSwitcher({
  variant = "pill",
  className,
}: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();

  const isDark = variant === "dark";

  return (
    <div
      className={cn("flex flex-col items-end gap-1", className)}
      role="group"
      aria-label={t.langLabel}
    >
      <div
        className={cn(
          "flex items-center gap-1 rounded-full p-0.5",
          isDark ? "bg-white/10" : "bg-white/90 shadow-sm ring-1 ring-slate-200/80",
          variant === "pill" && !isDark && "bg-light ring-slate-200",
        )}
      >
        <Languages
          className={cn(
            "ms-1.5 h-3.5 w-3.5 shrink-0",
            isDark ? "text-white/60" : "text-muted",
          )}
          aria-hidden
        />
        {locales.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setLocale(loc)}
            className={cn(
              "btn-press min-w-[2.25rem] rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide transition-colors",
              locale === loc
                ? isDark
                  ? "bg-white text-dark"
                  : "bg-primary text-white shadow-sm"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-muted hover:text-dark",
            )}
            aria-pressed={locale === loc}
            aria-label={localeLabels[loc]}
          >
            {localeLabels[loc]}
          </button>
        ))}
      </div>
    </div>
  );
}
