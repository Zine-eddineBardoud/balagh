"use client";

import { useRouter } from "next/navigation";
import { MobileShell } from "@/components/MobileShell";
import { PageHeader } from "@/components/PageHeader";
import { StepProgress } from "@/components/StepProgress";
import { LicensePlateCard } from "@/components/LicensePlateCard";
import { InfoCard } from "@/components/InfoCard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { GarageOption } from "@/components/GarageOption";
import { SectionTitle } from "@/components/SectionTitle";
import { RegistrySummaryCard } from "@/components/RegistrySummaryCard";
import { ContinueButton } from "@/components/ContinueButton";
import { useImpound } from "@/context/impound-context";
import { garages } from "@/data/mock";

export default function DocumentAssignPage() {
  const router = useRouter();
  const { draft, updateDraft, confirmImpound } = useImpound();

  function handleConfirm() {
    confirmImpound();
    router.push("/officer/confirmed");
  }

  return (
    <MobileShell
      gradient="officer"
      backHref="/officer/new-impound"
      footer={
        <ContinueButton
          onClick={handleConfirm}
          label="Confirm & notify owner"
        />
      }
    >
      <StepProgress current={3} />
      <PageHeader
        title="Document & assign"
        subtitle="Add evidence photos and choose the impound garage."
      />

      <div className="mt-6 flex flex-col gap-6">
        <LicensePlateCard plate={draft.licensePlate} variant="document" />

        <div className="flex gap-3">
          <InfoCard label="Violation" value={draft.violation} />
          <InfoCard label="Status" value={draft.status} />
        </div>

        <RegistrySummaryCard draft={draft} compact />

        <section className="animate-fade-up stagger-3">
          <SectionTitle>Violation photos</SectionTitle>
          <PhotoPlaceholder showAdd />
          <p className="mt-2 text-[11px] text-slate-400">
            GPS & timestamp attached automatically
          </p>
        </section>

        <section className="animate-fade-up stagger-4">
          <SectionTitle>Assign garage</SectionTitle>
          <div className="flex flex-col gap-2.5">
            {garages.map((g) => (
              <GarageOption
                key={g.id}
                name={g.name}
                distanceKm={g.distanceKm}
                isOpen={g.isOpen}
                selected={draft.garageId === g.id}
                onSelect={() => updateDraft({ garageId: g.id })}
              />
            ))}
          </div>
        </section>
      </div>
    </MobileShell>
  );
}
