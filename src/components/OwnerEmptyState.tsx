"use client";

import Link from "next/link";
import { Car, Shield } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export function OwnerEmptyState() {
  const { t } = useLanguage();

  return (
    <div className="card-surface flex flex-col items-center px-6 py-10 text-center animate-fade-up">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <Car className="h-7 w-7" />
      </span>
      <h2 className="mt-4 text-lg font-bold text-slate-900">
        {t.owner.emptyTitle}
      </h2>
      <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-slate-500">
        {t.owner.emptyDesc}
      </p>
      <Link
        href="/officer"
        className="btn-press mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"
      >
        <Shield className="h-4 w-4" />
        {t.owner.simulateOfficer}
      </Link>
    </div>
  );
}
