"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { BalaghLogo } from "@/components/BalaghLogo";
import { useLanguage } from "@/context/language-context";

export function OwnerEmptyState() {
  const { t } = useLanguage();

  return (
    <div className="card-surface flex flex-col items-center px-6 py-10 text-center animate-fade-up">
      <BalaghLogo size="xs" />
      <h2 className="mt-4 text-lg font-bold text-dark">{t.owner.emptyTitle}</h2>
      <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-muted">
        {t.owner.emptyDesc}
      </p>
      <Link
        href="/officer"
        className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-primary)]"
      >
        <Shield className="h-4 w-4" />
        {t.owner.simulateOfficer}
      </Link>
    </div>
  );
}
