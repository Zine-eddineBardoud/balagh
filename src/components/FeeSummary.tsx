"use client";

import { fees, totalDue } from "@/data/mock";
import { useLanguage } from "@/context/language-context";

export function FeeSummary() {
  const { t } = useLanguage();
  const total = totalDue(fees);
  const storage = fees.storageDays * fees.storagePerDay;

  return (
    <div className="card-surface animate-fade-up stagger-4 space-y-3 p-5">
      <h3 className="text-xs font-bold uppercase tracking-wide text-muted">
        {t.owner.feeBreakdown}
      </h3>
      <div className="space-y-2.5 text-sm text-muted">
        <div className="flex justify-between">
          <span>{t.owner.towingFee}</span>
          <span className="font-bold text-dark">
            {fees.towingFee} {fees.currency}
          </span>
        </div>
        <div className="flex justify-between">
          <span>
            {t.owner.storageDay.replace("{n}", String(fees.storageDays))}
          </span>
          <span className="font-bold text-dark">
            {storage} {fees.currency}
          </span>
        </div>
      </div>
      <hr className="border-slate-100" />
      <div className="flex justify-between text-base">
        <span className="font-semibold text-dark">{t.owner.totalDue}</span>
        <span className="font-extrabold text-dark">
          {total} {fees.currency}
        </span>
      </div>
    </div>
  );
}
