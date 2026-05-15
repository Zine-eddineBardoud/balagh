import { fees, totalDue } from "@/data/mock";

export function FeeSummary() {
  const total = totalDue(fees);
  const storage = fees.storageDays * fees.storagePerDay;

  return (
    <div className="card-surface animate-fade-up stagger-4 space-y-3 p-5">
      <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">
        Fee breakdown
      </h3>
      <div className="space-y-2.5 text-sm text-slate-600">
        <div className="flex justify-between">
          <span>Towing fee</span>
          <span className="font-bold text-slate-900">
            {fees.towingFee} {fees.currency}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Storage ({fees.storageDays} day)</span>
          <span className="font-bold text-slate-900">
            {storage} {fees.currency}
          </span>
        </div>
      </div>
      <hr className="border-slate-100" />
      <div className="flex justify-between text-base">
        <span className="font-semibold text-slate-900">Total due</span>
        <span className="font-extrabold text-slate-900">
          {total} {fees.currency}
        </span>
      </div>
    </div>
  );
}
