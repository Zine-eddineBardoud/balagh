"use client";

import { useLanguage } from "@/context/language-context";

interface OfficerNotesFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function OfficerNotesField({ value, onChange }: OfficerNotesFieldProps) {
  const { t } = useLanguage();

  return (
    <div className="card-surface animate-fade-up stagger-4 p-4">
      <label
        htmlFor="officer-notes"
        className="text-xs font-bold uppercase tracking-wide text-muted"
      >
        {t.officer.officerNotes}
        <span className="ms-1 font-normal normal-case text-muted">
          ({t.common.optional})
        </span>
      </label>
      <textarea
        id="officer-notes"
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.officer.notesPlaceholder}
        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-light px-3 py-2.5 text-sm text-dark placeholder:text-muted focus:border-primary focus:bg-white"
      />
    </div>
  );
}
