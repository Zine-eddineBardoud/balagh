"use client";

import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/language-context";

interface MapPlaceholderProps {
  distanceKm: number;
  driveMinutes: number;
}

export function MapPlaceholder({ distanceKm, driveMinutes }: MapPlaceholderProps) {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className="btn-press group w-full text-start"
      aria-label={t.owner.tapMap}
    >
      <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-muted to-primary/30 shadow-md">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgb(37 99 235 / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgb(37 99 235 / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        <MapPin
          className="absolute left-1/2 top-[45%] h-11 w-11 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-lg transition-transform group-active:scale-110"
          fill="currentColor"
          strokeWidth={1}
        />
        <span className="absolute bottom-3 end-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-dark shadow-lg">
          <Navigation className="h-3.5 w-3.5 text-primary" />
          {distanceKm}
          {t.common.km} · {driveMinutes}
          {t.common.min}
        </span>
      </div>
      <p className="mt-2 flex items-center justify-end gap-1 text-xs text-muted">
        {t.owner.tapMap}
        <span className="text-primary rtl:rotate-180">→</span>
      </p>
    </button>
  );
}
