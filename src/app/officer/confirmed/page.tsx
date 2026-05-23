"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, Eye, Home, Plus } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { LicensePlateCard } from "@/components/LicensePlateCard";
import { useImpound } from "@/context/impound-context";
import { useLanguage } from "@/context/language-context";
import { statusLabel, violationLabel } from "@/i18n/translations";

export default function OfficerConfirmedPage() {
  const router = useRouter();
  const { activeImpound, selectedGarage, resetSimulation, draft } = useImpound();
  const { t } = useLanguage();

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
          {t.officer.confirmedTitle}
        </h1>
        <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-slate-500">
          {t.officer.confirmedSubtitle}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <LicensePlateCard plate={record.licensePlate} variant="document" />

        <div className="card-surface space-y-3 p-4 text-start text-sm">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.owner}</span>
            <span className="text-end font-bold text-slate-900">
              {record.ownerName}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.violation}</span>
            <span className="font-bold text-slate-900">
              {violationLabel(t, record.violation)}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.location}</span>
            <span className="max-w-[58%] text-end text-sm font-bold text-slate-900">
              {record.scanAddress}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.garage}</span>
            <span className="font-bold text-slate-900">{selectedGarage.name}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.distance}</span>
            <span className="font-bold text-slate-900">
              {selectedGarage.distanceKm} {t.common.km}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">{t.common.status}</span>
            <span className="font-bold text-emerald-700">
              {t.common.ownerNotified}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-10">
        <Link
          href="/owner"
          className="btn-press gradient-owner flex items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/20"
        >
          <Eye className="h-5 w-5" />
          {t.officer.viewOwnerApp}
        </Link>
        <button
          type="button"
          onClick={handleNewImpound}
          className="btn-press gradient-officer flex items-center justify-center gap-2 rounded-2xl py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25"
        >
          <Plus className="h-5 w-5" />
          {t.officer.newImpound}
        </button>
        <Link
          href="/"
          className="btn-press flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white py-3.5 text-sm font-semibold text-slate-700"
        >
          <Home className="h-4 w-4" />
          {t.common.home}
        </Link>
        <p className="text-center text-[11px] text-slate-400">
          {t.officer.previewOwner}
        </p>
      </div>
    </MobileShell>
  );
}
