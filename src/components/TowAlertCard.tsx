import { AlertTriangle, Car } from "lucide-react";
import { cn } from "@/lib/cn";

interface TowAlertCardProps {
  plate: string;
  vehicleModel: string;
  vehicleColor?: string;
  scanAddress?: string;
  towedAt: string;
  className?: string;
}

export function TowAlertCard({
  plate,
  vehicleModel,
  vehicleColor,
  scanAddress,
  towedAt,
  className,
}: TowAlertCardProps) {
  return (
    <article
      className={cn(
        "animate-fade-up stagger-2 relative overflow-hidden rounded-3xl p-6 text-white shadow-xl shadow-emerald-900/25",
        "gradient-owner",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          <AlertTriangle className="h-5 w-5" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-100/90">
            Active impound
          </p>
          <h2 className="mt-0.5 text-xl font-bold leading-tight">
            Your car was towed
          </h2>
        </div>
      </div>
      <div className="mt-5 space-y-1 border-t border-white/15 pt-4">
        <p className="flex items-center gap-2 text-lg font-bold tracking-wide">
          <Car className="h-4 w-4 opacity-80" />
          {plate}
        </p>
        <p className="text-sm font-medium text-emerald-50/95">
          {vehicleModel}
          {vehicleColor ? ` · ${vehicleColor}` : ""}
        </p>
        {scanAddress && (
          <p className="text-xs text-emerald-100/85">Towed from · {scanAddress}</p>
        )}
      </div>
      <time className="mt-4 block text-right text-xs font-medium text-emerald-100/80">
        {towedAt}
      </time>
    </article>
  );
}
