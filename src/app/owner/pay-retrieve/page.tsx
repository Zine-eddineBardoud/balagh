"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, CreditCard, MapPinned } from "lucide-react";
import { MobileShell } from "@/components/MobileShell";
import { PageHeader } from "@/components/PageHeader";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { FeeSummary } from "@/components/FeeSummary";
import { ReleaseCodeCard } from "@/components/ReleaseCodeCard";
import { OwnerEmptyState } from "@/components/OwnerEmptyState";
import { ContinueButton } from "@/components/ContinueButton";
import { useImpound } from "@/context/impound-context";
import { useLanguage } from "@/context/language-context";

export default function PayRetrievePage() {
  const router = useRouter();
  const {
    hasActiveImpound,
    selectedGarage,
    releaseCode,
    isPaid,
    completePayment,
    resetSimulation,
  } = useImpound();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const paid = isPaid && Boolean(releaseCode);

  function handleDone() {
    resetSimulation();
    router.push("/");
  }

  if (!hasActiveImpound && !paid) {
    return (
      <MobileShell gradient="owner" backHref="/owner">
        <PageHeader title={t.owner.payRetrieve} />
        <div className="mt-8">
          <OwnerEmptyState />
        </div>
      </MobileShell>
    );
  }

  function handlePay() {
    setLoading(true);
    setTimeout(() => {
      completePayment();
      setLoading(false);
    }, 1400);
  }

  return (
    <MobileShell
      gradient="owner"
      backHref={paid ? undefined : "/owner"}
      footer={
        paid ? (
          <ContinueButton
            onClick={handleDone}
            variant="green"
            label={t.common.done}
            showArrow={false}
          />
        ) : undefined
      }
    >
      <PageHeader
        title={t.owner.payRetrieve}
        subtitle={
          paid ? t.owner.payRetrievePaidSubtitle : t.owner.payRetrieveSubtitle
        }
      />

      <div className="mt-6 flex flex-col gap-5">
        {!paid && (
          <>
            <div className="animate-fade-up stagger-2">
              <MapPlaceholder
                distanceKm={selectedGarage.distanceKm}
                driveMinutes={selectedGarage.driveMinutes}
              />
            </div>

            <div className="card-surface animate-fade-up stagger-3 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-muted text-primary">
                  <MapPinned className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-dark">
                    {selectedGarage.name}
                  </p>
                  <p className="mt-0.5 text-sm font-bold text-dark">
                    {selectedGarage.address}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted">
                    <Clock className="h-3.5 w-3.5" />
                    {selectedGarage.openHours}
                  </p>
                </div>
              </div>
            </div>

            <FeeSummary />
          </>
        )}

        {paid ? (
          <ReleaseCodeCard code={releaseCode!} />
        ) : (
          <button
            type="button"
            onClick={handlePay}
            disabled={loading}
            className="btn-press animate-fade-up stagger-5 flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-primary bg-white py-4 font-bold text-primary shadow-sm disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                {t.owner.processing}
              </span>
            ) : (
              <>
                <CreditCard className="h-5 w-5" />
                {t.owner.payGetCode}
              </>
            )}
          </button>
        )}
      </div>
    </MobileShell>
  );
}
