"use client";

import { Car, Clock, MapPin, Phone, User } from "lucide-react";
import type { ImpoundDraft } from "@/context/impound-context";
import { useLanguage } from "@/context/language-context";

interface RegistrySummaryCardProps {
  draft: Pick<
    ImpoundDraft,
    | "ownerName"
    | "ownerPhone"
    | "vehicleModel"
    | "vehicleColor"
    | "scannedAt"
    | "scanAddress"
    | "scanCoordinates"
  >;
  compact?: boolean;
}

export function RegistrySummaryCard({
  draft,
  compact = false,
}: RegistrySummaryCardProps) {
  const { t } = useLanguage();

  const rows = [
    {
      icon: User,
      label: t.common.owner,
      value: draft.ownerName,
      sub: draft.ownerPhone,
      showPhone: true,
    },
    {
      icon: Car,
      label: t.common.vehicle,
      value: draft.vehicleModel,
      sub: `${t.common.color} · ${draft.vehicleColor}`,
      showPhone: false,
    },
    {
      icon: MapPin,
      label: t.common.location,
      value: draft.scanAddress,
      sub: draft.scanCoordinates,
      showPhone: false,
    },
    {
      icon: Clock,
      label: t.common.scannedAt,
      value: draft.scannedAt,
      sub: t.officer.gpsLogged,
      showPhone: false,
    },
  ];

  return (
    <div className="card-surface animate-fade-up stagger-3 overflow-hidden">
      <div className="border-b border-slate-100 bg-light px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">
          {t.officer.registryTitle}
        </p>
        <p className="mt-0.5 text-[11px] text-muted">{t.officer.registryHint}</p>
      </div>
      <ul className={compact ? "divide-y divide-slate-100" : "divide-y divide-slate-100"}>
        {rows.map((row) => (
          <li key={row.label} className="flex gap-3 px-4 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-muted text-primary">
              <row.icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide text-muted">
                {row.label}
              </p>
              <p className="mt-0.5 truncate text-sm font-bold text-dark">
                {row.value}
              </p>
              {row.sub && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  {row.showPhone && (
                    <Phone className="h-3 w-3 shrink-0 opacity-60" />
                  )}
                  {row.sub}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
