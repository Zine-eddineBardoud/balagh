"use client";

import { Camera, Plus } from "lucide-react";
import { cn } from "@/lib/cn";

const PHOTOS = [
  { bg: "from-rose-300 to-rose-400", label: "Front" },
  { bg: "from-sky-300 to-sky-400", label: "Side" },
  { bg: "from-violet-300 to-violet-400", label: "Plate" },
] as const;

interface PhotoPlaceholderProps {
  showAdd?: boolean;
  onAdd?: () => void;
}

export function PhotoPlaceholder({ showAdd = false, onAdd }: PhotoPlaceholderProps) {
  return (
    <div className="flex gap-2.5">
      {PHOTOS.map((photo, i) => (
        <button
          key={photo.label}
          type="button"
          className={cn(
            "btn-press group relative flex aspect-square flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br shadow-sm",
            photo.bg,
            "animate-fade-up",
            i === 0 && "stagger-3",
            i === 1 && "stagger-4",
            i === 2 && "stagger-5",
          )}
          aria-label={`View ${photo.label} photo`}
        >
          <Camera
            className="h-7 w-7 text-white/90 drop-shadow transition-transform group-active:scale-95"
            strokeWidth={1.5}
          />
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/80">
            {photo.label}
          </span>
        </button>
      ))}
      {showAdd && (
        <button
          type="button"
          onClick={onAdd}
          className="btn-press flex aspect-square flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white text-slate-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label="Add photo"
        >
          <Plus className="h-7 w-7" strokeWidth={1.5} />
          <span className="mt-1 text-[9px] font-bold uppercase">Add</span>
        </button>
      )}
    </div>
  );
}
