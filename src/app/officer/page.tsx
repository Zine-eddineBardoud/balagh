"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { PageHeader } from "@/components/PageHeader";
import { ViewfinderIcon } from "@/components/ViewfinderIcon";
import { useImpound } from "@/context/impound-context";

export default function OfficerScanPage() {
  const router = useRouter();
  const { scanPlate } = useImpound();

  function handleCapture() {
    scanPlate();
    router.push("/officer/new-impound");
  }

  return (
    <MobileShell dark className="relative !px-0 !pt-0">
      <div className="flex min-h-dvh flex-col bg-[#0a0a0c]">
        <div className="flex items-center justify-between px-5 pt-[max(1rem,env(safe-area-inset-top))]">
          <Link
            href="/"
            className="btn-press rounded-full px-3 py-1.5 text-sm font-semibold text-white/70 hover:text-white"
          >
            ← Home
          </Link>
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80">
            Step 1 of 3
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-8">
          <PageHeader
            title="Scan license plate"
            subtitle="Center the plate inside the frame. We'll match owner records automatically."
            light
            className="mb-10 text-center [&_h1]:text-xl"
          />
          <button
            type="button"
            onClick={handleCapture}
            className="btn-press block w-full max-w-[280px]"
            aria-label="Capture license plate"
          >
            <ViewfinderIcon />
          </button>
          <p className="mt-8 text-center text-sm text-white/45">
            Tap the frame to simulate capture
          </p>
        </div>

        <div className="border-t border-white/10 px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <button
            type="button"
            onClick={handleCapture}
            className="btn-press gradient-officer flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-base font-bold text-white shadow-lg shadow-blue-900/40"
          >
            <Camera className="h-5 w-5" />
            Capture photo
          </button>
        </div>
      </div>
    </MobileShell>
  );
}
