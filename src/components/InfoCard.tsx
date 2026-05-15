import { cn } from "@/lib/cn";

interface InfoCardProps {
  label: string;
  value: string;
  readOnly?: boolean;
  helperText?: string;
  options?: readonly { value: string; label: string }[];
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
}

export function InfoCard({
  label,
  value,
  readOnly = true,
  helperText,
  options,
  onChange,
  icon,
}: InfoCardProps) {
  return (
    <div className="card-surface flex-1 p-4 transition-shadow hover:shadow-md">
      <div className="flex items-center gap-1.5">
        {icon}
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
      </div>
      {readOnly ? (
        <p className="mt-2.5 text-[15px] font-bold leading-snug text-slate-900">
          {value}
        </p>
      ) : (
        <>
          <select
            className="mt-2.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-800 transition-colors focus:border-blue-400 focus:bg-white"
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
            <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
              {helperText}
            </p>
          )}
        </>
      )}
    </div>
  );
}
