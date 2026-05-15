"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { PageHeader } from "@/components/PageHeader";
import { TowAlertCard } from "@/components/TowAlertCard";
import { InfoCard } from "@/components/InfoCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { SectionTitle } from "@/components/SectionTitle";
import { ContinueButton } from "@/components/ContinueButton";
import { OwnerEmptyState } from "@/components/OwnerEmptyState";
import { useImpound } from "@/context/impound-context";

export default function OwnerHomePage() {
  const { activeImpound, hasActiveImpound, isPaid } = useImpound();

  if (!hasActiveImpound || !activeImpound) {
    return (
      <MobileShell gradient="owner" backHref="/" backLabel="Home">
        <PageHeader
          title="My vehicle"
          subtitle="Your impound details will appear here after an officer confirms a tow."
        />
        <div className="mt-8">
          <OwnerEmptyState />
        </div>
      </MobileShell>
    );
  }

  return (
    <MobileShell
      gradient="owner"
      backHref="/"
      backLabel="Home"
      footer={
        isPaid ? (
          <Link
            href="/owner/pay-retrieve"
            className="btn-press flex w-full items-center justify-center rounded-2xl border-2 border-[var(--owner)] bg-white py-4 text-base font-bold text-[var(--owner)]"
          >
            View release code
          </Link>
        ) : (
          <ContinueButton
            href="/owner/pay-retrieve"
            variant="green"
            label="Pay & retrieve vehicle"
          />
        )
      }
    >
      <div className="mb-4 flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-amber-900 ring-1 ring-amber-200/80 animate-fade-up">
        <Bell className="h-4 w-4 shrink-0 animate-pulse" />
        <p className="text-xs font-semibold">
          New notification · Towed {activeImpound.towedAt}
        </p>
      </div>

      <PageHeader
        title="My vehicle"
        subtitle="Review violation details and evidence before payment."
      />

      <div className="mt-6 flex flex-col gap-5">
        <TowAlertCard
          plate={activeImpound.licensePlate}
          vehicleModel={activeImpound.vehicleModel}
          vehicleColor={activeImpound.vehicleColor}
          scanAddress={activeImpound.scanAddress}
          towedAt={activeImpound.towedAt}
        />

        <div className="flex gap-3 animate-fade-up stagger-3">
          <InfoCard label="Violation" value={activeImpound.violation} />
          <InfoCard label="Status" value={activeImpound.status} />
        </div>

        <section className="animate-fade-up stagger-4">
          <SectionTitle
            action={
              <span className="text-[10px] font-semibold text-slate-400">
                {activeImpound.photos.length} photos
              </span>
            }
          >
            Evidence photos
          </SectionTitle>
          <PhotoPlaceholder />
        </section>
      </div>
    </MobileShell>
  );
}
