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
import { useLanguage } from "@/context/language-context";
import { garages } from "@/data/mock";
import { statusLabel, violationLabel } from "@/i18n/translations";

export default function DocumentAssignPage() {
  const router = useRouter();
  const { draft, updateDraft, confirmImpound } = useImpound();
  const { t } = useLanguage();

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
          label={t.officer.confirmNotify}
        />
      }
    >
      <StepProgress current={3} />
      <PageHeader
        title={t.officer.documentTitle}
        subtitle={t.officer.documentSubtitle}
      />

      <div className="mt-6 flex flex-col gap-6">
        <LicensePlateCard plate={draft.licensePlate} variant="document" />

        <div className="flex gap-3">
          <InfoCard
            label={t.common.violation}
            value={violationLabel(t, draft.violation)}
          />
          <InfoCard
            label={t.common.status}
            value={statusLabel(t, draft.status)}
          />
        </div>

        <RegistrySummaryCard draft={draft} compact />

        <section className="animate-fade-up stagger-3">
          <SectionTitle>{t.officer.violationPhotos}</SectionTitle>
          <PhotoPlaceholder showAdd />
          <p className="mt-2 text-[11px] text-slate-400">{t.officer.gpsAuto}</p>
        </section>

        <section className="animate-fade-up stagger-4">
          <SectionTitle>{t.officer.assignGarage}</SectionTitle>
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
