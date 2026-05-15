import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

interface ContinueButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  variant?: "blue" | "green" | "outline-green";
  type?: "button" | "submit";
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
}

export function ContinueButton({
  href,
  onClick,
  label = "Continue",
  variant = "blue",
  type = "button",
  loading = false,
  disabled = false,
  className,
  showArrow = true,
}: ContinueButtonProps) {
  const base = cn(
    "btn-press flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-base font-bold shadow-lg",
    "disabled:pointer-events-none disabled:opacity-50",
    className,
  );

  const styles = {
    blue: "gradient-officer text-white shadow-blue-600/25",
    green: "gradient-owner text-white shadow-emerald-900/20",
    "outline-green":
      "border-2 border-[var(--owner)] bg-white text-[var(--owner)] shadow-none",
  }[variant];

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <>
          {label}
          {showArrow && (
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          )}
        </>
      )}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={cn(base, styles)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(base, styles)}
    >
      {content}
    </button>
  );
}
