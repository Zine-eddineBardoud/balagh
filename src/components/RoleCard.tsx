import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface RoleCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "officer" | "owner";
  steps: string[];
  delay?: string;
}

export function RoleCard({
  href,
  title,
  description,
  icon: Icon,
  accent,
  steps,
  delay,
}: RoleCardProps) {
  const isOfficer = accent === "officer";

  return (
    <Link
      href={href}
      className={cn(
        "btn-press card-surface group block p-5 animate-fade-up",
        delay,
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg",
            isOfficer
              ? "gradient-officer shadow-blue-600/30"
              : "gradient-owner shadow-emerald-900/25",
          )}
        >
          <Icon className="h-7 w-7" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="text-lg font-bold text-slate-900">{title}</p>
            <ChevronRight
              className={cn(
                "h-5 w-5 shrink-0 transition-transform group-hover:translate-x-0.5",
                isOfficer ? "text-blue-600" : "text-[var(--owner)]",
              )}
            />
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {steps.map((step) => (
              <li
                key={step}
                className={cn(
                  "rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
                  isOfficer
                    ? "bg-blue-50 text-blue-700"
                    : "bg-emerald-50 text-emerald-800",
                )}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
