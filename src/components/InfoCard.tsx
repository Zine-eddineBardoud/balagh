interface InfoCardProps {
  label: string;
  value: string;
  readOnly?: boolean;
  helperText?: string;
  options?: readonly { value: string; label: string }[];
  onChange?: (value: string) => void;
}

export function InfoCard({
  label,
  value,
  readOnly = true,
  helperText,
  options,
  onChange,
}: InfoCardProps) {
  return (
    <div className="card-surface flex-1 p-4 transition-shadow hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </p>
      {readOnly ? (
        <p className="mt-2.5 text-[15px] font-bold leading-snug text-dark">
          {value}
        </p>
      ) : (
        <>
          <select
            className="mt-2.5 w-full rounded-xl border border-slate-200 bg-light px-3 py-2.5 text-sm font-medium text-dark transition-colors focus:border-primary focus:bg-white"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            aria-label={label}
          >
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {helperText && (
            <p className="mt-2 text-[11px] leading-relaxed text-muted">
              {helperText}
            </p>
          )}
        </>
      )}
    </div>
  );
}
