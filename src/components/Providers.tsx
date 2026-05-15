"use client";

import { ImpoundProvider } from "@/context/impound-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ImpoundProvider>{children}</ImpoundProvider>;
}
