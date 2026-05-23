"use client";

import { Shield, User } from "lucide-react";
import { BalaghLogo } from "@/components/BalaghLogo";
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

      <header className="animate-fade-up mb-8 text-center">
        <BalaghLogo priority size="sm" className="mb-4 mt-12" />
        <h1 className="font-heading text-[2rem] leading-none tracking-wide text-dark">
          {t.home.tagline}
          <br />
          <span className="text-primary">{t.home.taglineHighlight}</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-muted">
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
          steps={[...t.home.officerSteps]}
          delay="stagger-1"
        />
        <RoleCard
          href="/owner"
          title={t.home.ownerTitle}
          description={t.home.ownerDesc}
          icon={User}
          accent="owner"
          steps={[...t.home.ownerSteps]}
          delay="stagger-2"
        />
      </div>

      <p className="mt-auto pt-10 text-center text-[11px] font-medium text-muted">
        {t.home.footer}
      </p>
    </div>
  );
}
