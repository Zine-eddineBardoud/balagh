import { Car, Clock, MapPin, Phone, User } from "lucide-react";
import type { ImpoundDraft } from "@/context/impound-context";

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
  const rows = [
    {
      icon: User,
      label: "Owner",
      value: draft.ownerName,
      sub: draft.ownerPhone,
    },
    {
      icon: Car,
      label: "Vehicle",
      value: draft.vehicleModel,
      sub: `Color · ${draft.vehicleColor}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: draft.scanAddress,
      sub: draft.scanCoordinates,
    },
    {
      icon: Clock,
      label: "Scanned at",
      value: draft.scannedAt,
      sub: "GPS & timestamp logged",
    },
  ];

  return (
    <div className="card-surface animate-fade-up stagger-3 overflow-hidden">
      <div className="border-b border-slate-100 bg-slate-50/80 px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Auto-filled from registry
        </p>
        <p className="mt-0.5 text-[11px] text-slate-400">
          Verify before continuing
        </p>
      </div>
      <ul className={compact ? "divide-y divide-slate-100" : "space-y-0 divide-y divide-slate-100"}>
        {rows.map((row) => (
          <li key={row.label} className="flex gap-3 px-4 py-3.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <row.icon className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                {row.label}
              </p>
              <p className="mt-0.5 truncate text-sm font-bold text-slate-900">
                {row.value}
              </p>
              {row.sub && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                  {row.label === "Owner" && (
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
