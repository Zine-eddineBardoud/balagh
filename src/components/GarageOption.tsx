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
          ? "border-primary bg-primary-muted/60 shadow-sm shadow-primary/10"
          : "border-slate-200 bg-white hover:border-primary/40",
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
          selected ? "bg-primary text-white" : "bg-light text-muted",
        )}
      >
        <MapPin className="h-5 w-5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-muted">{name}</p>
        <p className="mt-0.5 font-bold text-dark">
          {distanceKm} {t.common.km}
          <span className="font-normal text-muted"> · </span>
          <span className={isOpen ? "text-primary" : "text-rose-500"}>
            {isOpen ? t.common.openNow : t.common.closed}
          </span>
        </p>
      </div>
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
          selected ? "border-primary bg-primary" : "border-slate-300 bg-white",
        )}
        aria-hidden
      >
        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
    </button>
  );
}
