"use client";

import { ImpoundProvider } from "@/context/impound-context";
import { LanguageProvider } from "@/context/language-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ImpoundProvider>{children}</ImpoundProvider>
    </LanguageProvider>
  );
}
