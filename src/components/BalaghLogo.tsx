import Image from "next/image";
import { cn } from "@/lib/cn";
import { BALAGH_LOGO_PATH } from "@/lib/brand";

const sizeStyles = {
  xs: "h-24 w-24",
  sm: "h-32 w-32",
  md: "h-40 w-40",
  lg: "h-48 w-48",
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
