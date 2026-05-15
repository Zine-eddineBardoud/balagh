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
import { statusOptions, violationOptions } from "@/data/mock";

export default function NewImpoundPage() {
  const router = useRouter();
  const { draft, updateDraft } = useImpound();

  function handleContinue() {
    router.push("/officer/document-assign");
  }

  return (
    <MobileShell
      gradient="officer"
      backHref="/officer"
      footer={<ContinueButton onClick={handleContinue} label="Continue" />}
    >
      <StepProgress current={2} />
      <PageHeader
        title="New impound"
        subtitle="Verify registry data, then set violation and status."
      />

      <div className="mt-6 flex flex-col gap-5">
        <LicensePlateCard plate={draft.licensePlate} />

        <RegistrySummaryCard draft={draft} />

        <div className="flex gap-3">
          <InfoCard
            label="Violation"
            value={draft.violation}
            readOnly={false}
            options={violationOptions}
            helperText="Select the violation type."
            onChange={(v) => updateDraft({ violation: v })}
          />
          <InfoCard
            label="Status"
            value={draft.status}
            readOnly={false}
            options={statusOptions}
            helperText="Select the current status."
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
