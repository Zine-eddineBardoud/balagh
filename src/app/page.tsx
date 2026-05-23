"use client";

import { Car, Shield, User } from "lucide-react";
import { RoleCard } from "@/components/RoleCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/language-context";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="gradient-page relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-10">
      <div className="absolute end-5 top-[max(1.25rem,env(safe-area-inset-top))]">
        <LanguageSwitcher />
      </div>

      <header className="animate-fade-up mb-10 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-500/15 ring-1 ring-slate-200/80">
          <Car className="h-7 w-7 text-blue-600" strokeWidth={2} />
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {t.home.appName}
        </p>
        <h1 className="mt-2 text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900">
          {t.home.tagline}
          <br />
          <span className="text-blue-600">{t.home.taglineHighlight}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-slate-500">
          {t.home.subtitle}
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <RoleCard
          href="/officer"
          title={t.home.officerTitle}
          description={t.home.officerDesc}
          icon={Shield}
          accent="officer"
          steps={t.home.officerSteps}
          delay="stagger-1"
        />
        <RoleCard
          href="/owner"
          title={t.home.ownerTitle}
          description={t.home.ownerDesc}
          icon={User}
          accent="owner"
          steps={t.home.ownerSteps}
          delay="stagger-2"
        />
      </div>

      <p className="mt-auto pt-10 text-center text-[11px] font-medium text-slate-400">
        {t.home.footer}
      </p>
    </div>
  );
}
