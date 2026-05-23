import Image from "next/image";
import { cn } from "@/lib/cn";
import { BALAGH_LOGO_PATH } from "@/lib/brand";

const sizeStyles = {
  xs: "h-7 w-[5.25rem]",
  sm: "h-9 w-[6.75rem]",
  md: "h-11 w-[8.25rem]",
  lg: "h-14 w-[10.5rem]",
} as const;

interface BalaghLogoProps {
  size?: keyof typeof sizeStyles;
  className?: string;
  priority?: boolean;
}

export function BalaghLogo({
  size = "sm",
  className,
  priority,
}: BalaghLogoProps) {
  return (
    <div
      className={cn("relative mx-auto shrink-0", sizeStyles[size], className)}
    >
      <Image
        src={BALAGH_LOGO_PATH}
        alt="Balagh"
        fill
        sizes="(max-width: 448px) 108px, 140px"
        priority={priority}
        className="object-contain object-center"
      />
    </div>
  );
}
