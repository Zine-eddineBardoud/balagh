"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Eye, Home, Plus } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { LicensePlateCard } from "@/components/LicensePlateCard";
import { useImpound } from "@/context/impound-context";

export default function OfficerConfirmedPage() {
  const router = useRouter();
  const { activeImpound, selectedGarage, resetSimulation, draft } = useImpound();

  const record = activeImpound ?? draft;

  function handleNewImpound() {
    resetSimulation();
    router.push("/officer");
  }

  return (
    <MobileShell gradient="officer" backHref="/officer/document-assign">
      <div className="flex flex-1 flex-col items-center pt-8 text-center animate-fade-up">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-9 w-9" strokeWidth={2} />
        </span>
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-900">
          Impound confirmed
        </h1>
        <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-slate-500">
          The owner has been notified by push/SMS. They can now see this case in
          their app.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <LicensePlateCard plate={record.licensePlate} variant="document" />

        <div className="card-surface space-y-3 p-4 text-left text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Owner</span>
            <span className="text-right font-bold text-slate-900">
              {record.ownerName}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Violation</span>
            <span className="font-bold text-slate-900">{record.violation}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Location</span>
            <span className="max-w-[58%] text-right text-sm font-bold text-slate-900">
              {record.scanAddress}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Garage</span>
            <span className="font-bold text-slate-900">{selectedGarage.name}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Distance</span>
            <span className="font-bold text-slate-900">
              {selectedGarage.distanceKm} km
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">Status</span>
            <span className="font-bold text-emerald-700">Owner notified</span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-10">
        <Link
          href="/owner"
          className="btn-press gradient-owner flex items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/20"
        >
          <Eye className="h-5 w-5" />
          View owner app
        </Link>
        <button
          type="button"
          onClick={handleNewImpound}
          className="btn-press gradient-officer flex items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25"
        >
          <Plus className="h-5 w-5" />
          New impound
        </button>
        <Link
          href="/"
          className="btn-press flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700"
        >
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </MobileShell>
  );
}
