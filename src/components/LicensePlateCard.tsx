"use client";

import { Car } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";

interface LicensePlateCardProps {
  plate: string;
  variant?: "officer" | "document";
  verified?: boolean;
}

export function LicensePlateCard({
  plate,
  variant = "officer",
  verified = true,
}: LicensePlateCardProps) {
  const { t } = useLanguage();

  return (
    <div
      className={cn(
        "animate-fade-up stagger-2 overflow-hidden rounded-2xl shadow-lg shadow-blue-900/20",
        "gradient-officer p-[1px]",
      )}
    >
      <div className="rounded-[15px] bg-gradient-to-br from-blue-600/90 to-blue-800 px-5 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
            <Car className="h-4 w-4" strokeWidth={2} />
            {t.common.licensePlate}
          </div>
          {verified && (
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              {t.common.matched}
            </span>
          )}
        </div>
        <p
          className={cn(
            "mt-5 text-center font-extrabold tracking-[0.12em] text-white",
            variant === "document" ? "text-3xl" : "text-[2rem] leading-tight",
          )}
        >
          {plate}
        </p>
      </div>
    </div>
  );
}
