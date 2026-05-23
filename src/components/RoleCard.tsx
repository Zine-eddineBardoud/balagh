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
  steps,
  delay,
}: RoleCardProps) {
  return (
    <Link
      href={href}
      className={cn("btn-press card-surface group block p-5 animate-fade-up", delay)}
    >
      <div className="flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl gradient-primary text-white shadow-[var(--shadow-primary)]">
          <Icon className="h-7 w-7" strokeWidth={2} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-heading text-lg text-dark">{title}</p>
            <ChevronRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
          </div>
          <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {steps.map((step) => (
              <li
                key={step}
                className="rounded-md bg-primary-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary"
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
