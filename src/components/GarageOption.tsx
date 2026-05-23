"use client";

import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";

interface GarageOptionProps {
  name: string;
  distanceKm: number;
  isOpen: boolean;
  selected: boolean;
  onSelect: () => void;
}

export function GarageOption({
  name,
  distanceKm,
  isOpen,
  selected,
  onSelect,
}: GarageOptionProps) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "btn-press flex w-full items-center gap-3 rounded-2xl border-2 p-4 text-start transition-all",
        selected
          ? "border-blue-500 bg-blue-50/80 shadow-sm shadow-blue-500/10"
          : "border-slate-200 bg-white hover:border-slate-300",
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          selected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500",
        )}
      >
        <MapPin className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-slate-500">{name}</p>
        <p className="mt-0.5 font-bold text-slate-900">
          {distanceKm} {t.common.km}
          <span className="font-normal text-slate-500"> · </span>
          <span className={isOpen ? "text-emerald-600" : "text-rose-500"}>
            {isOpen ? t.common.openNow : t.common.closed}
          </span>
        </p>
      </div>
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
          selected
            ? "border-blue-600 bg-blue-600"
            : "border-slate-300 bg-white",
        )}
        aria-hidden
      >
        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
    </button>
  );
}
