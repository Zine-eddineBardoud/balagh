"use client";

import { useRouter } from "next/navigation";
import { MobileShell } from "@/components/MobileShell";
import { PageHeader } from "@/components/PageHeader";
import { StepProgress } from "@/components/StepProgress";
import { LicensePlateCard } from "@/components/LicensePlateCard";
import { RegistrySummaryCard } from "@/components/RegistrySummaryCard";
import { InfoCard } from "@/components/InfoCard";
import { OfficerNotesField } from "@/components/OfficerNotesField";
import { ContinueButton } from "@/components/ContinueButton";
import { useImpound } from "@/context/impound-context";
import { useLanguage } from "@/context/language-context";
import { statusOptions, violationOptions } from "@/i18n/translations";

export default function NewImpoundPage() {
  const router = useRouter();
  const { draft, updateDraft } = useImpound();
  const { t } = useLanguage();

  function handleContinue() {
    router.push("/officer/document-assign");
  }

  return (
    <MobileShell
      gradient="officer"
      backHref="/officer"
      footer={
        <ContinueButton
          onClick={handleContinue}
          label={t.common.continue}
        />
      }
    >
      <StepProgress current={2} />
      <PageHeader
        title={t.officer.newImpoundTitle}
        subtitle={t.officer.newImpoundSubtitle}
      />

      <div className="mt-6 flex flex-col gap-5">
        <LicensePlateCard plate={draft.licensePlate} />
        <RegistrySummaryCard draft={draft} />

        <div className="flex gap-3">
          <InfoCard
            label={t.common.violation}
            value={draft.violation}
            readOnly={false}
            options={violationOptions(t)}
            helperText={t.officer.selectViolation}
            onChange={(v) => updateDraft({ violation: v })}
          />
          <InfoCard
            label={t.common.status}
            value={draft.status}
            readOnly={false}
            options={statusOptions(t)}
            helperText={t.officer.selectStatus}
            onChange={(v) => updateDraft({ status: v })}
          />
        </div>

        <OfficerNotesField
          value={draft.officerNotes}
          onChange={(notes) => updateDraft({ officerNotes: notes })}
        />
      </div>
    </MobileShell>
  );
}
