import { MapPin, Navigation } from "lucide-react";

interface MapPlaceholderProps {
  distanceKm: number;
  driveMinutes: number;
}

export function MapPlaceholder({ distanceKm, driveMinutes }: MapPlaceholderProps) {
  return (
    <button
      type="button"
      className="btn-press group w-full text-left"
      aria-label="Open directions in maps"
    >
      <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-[#8faf5c] to-[#5a7a32] shadow-md">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(#3d5a24 1px, transparent 1px),
              linear-gradient(90deg, #3d5a24 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <MapPin
          className="absolute left-1/2 top-[45%] h-11 w-11 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-lg transition-transform group-active:scale-110"
          fill="white"
          strokeWidth={1}
        />
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-lg">
          <Navigation className="h-3.5 w-3.5 text-[var(--owner)]" />
          {distanceKm} km · {driveMinutes} min
        </span>
      </div>
      <p className="mt-2 flex items-center justify-end gap-1 text-xs text-slate-400">
        Tap for directions
        <span className="text-[var(--owner)]">→</span>
      </p>
    </button>
  );
}
