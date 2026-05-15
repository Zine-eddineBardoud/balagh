interface OfficerNotesFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function OfficerNotesField({ value, onChange }: OfficerNotesFieldProps) {
  return (
    <div className="card-surface animate-fade-up stagger-4 p-4">
      <label htmlFor="officer-notes" className="text-xs font-bold uppercase tracking-wide text-slate-500">
        Officer notes
        <span className="ml-1 font-normal normal-case text-slate-400">(optional)</span>
      </label>
      <textarea
        id="officer-notes"
        rows={3}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Blocking fire lane, hazard lights on…"
        className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white"
      />
    </div>
  );
}
