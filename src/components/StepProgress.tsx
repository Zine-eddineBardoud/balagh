"use client";

import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";

interface StepProgressProps {
  current: 1 | 2 | 3;
  variant?: "officer" | "owner";
}

export function StepProgress({ current, variant = "officer" }: StepProgressProps) {
  const { t } = useLanguage();
  const labels = [t.steps.scan, t.steps.details, t.steps.assign];

  const activeLine =
    variant === "officer" ? "bg-blue-500" : "bg-[var(--owner)]";
  const activeDot =
    variant === "officer"
      ? "bg-blue-600 text-white ring-blue-100"
      : "bg-[var(--owner)] text-white ring-emerald-100";

  return (
    <nav aria-label="Progress" className="animate-fade-up mb-6">
      <div className="relative flex justify-between">
        <div
          className="absolute start-[16%] end-[16%] top-4 h-0.5 -translate-y-1/2 rounded-full bg-slate-200"
          aria-hidden
        />
        <div
          className={cn(
            "absolute start-[16%] top-4 h-0.5 -translate-y-1/2 rounded-full transition-all duration-500",
            activeLine,
          )}
          style={{ width: current === 1 ? "0%" : current === 2 ? "34%" : "68%" }}
          aria-hidden
        />
        {[1, 2, 3].map((step, i) => {
          const done = step < current;
          const active = step === current;
          return (
            <div key={step} className="relative z-10 flex flex-col items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
                  done || active
                    ? cn(activeDot, active && "ring-4")
                    : "bg-white text-slate-400 shadow-sm ring-1 ring-slate-200",
                )}
              >
                {done ? "✓" : step}
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-wider",
                  active ? "text-slate-800" : "text-slate-400",
                )}
              >
                {labels[i]}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
