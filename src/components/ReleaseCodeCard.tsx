"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";

interface ReleaseCodeCardProps {
  code: string;
}

export function ReleaseCodeCard({ code }: ReleaseCodeCardProps) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="animate-success-pop rounded-2xl border-2 border-emerald-600/30 bg-gradient-to-b from-emerald-50 to-white p-6 text-center shadow-lg shadow-emerald-900/10">
      <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
        <Check className="h-6 w-6" strokeWidth={3} />
      </span>
      <p className="text-sm font-semibold text-emerald-800">
        {t.owner.paymentConfirmed}
      </p>
      <p className="mt-1 text-xs text-slate-500">{t.owner.yourReleaseCode}</p>
      <p className="mt-3 font-mono text-3xl font-extrabold tracking-[0.2em] text-emerald-900">
        {code}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "btn-press mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold",
          copied
            ? "bg-emerald-600 text-white"
            : "bg-emerald-100 text-emerald-800",
        )}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" /> {t.owner.copied}
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" /> {t.owner.copyCode}
          </>
        )}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        {t.owner.showCodeAtGarage}
      </p>
    </div>
  );
}
