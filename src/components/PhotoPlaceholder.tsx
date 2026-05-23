"use client";

import { Camera, Plus } from "lucide-react";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/context/language-context";

const PHOTO_KEYS = ["front", "side", "platePhoto"] as const;
const PHOTO_BG = [
  "from-rose-300 to-rose-400",
  "from-sky-300 to-sky-400",
  "from-violet-300 to-violet-400",
] as const;

interface PhotoPlaceholderProps {
  showAdd?: boolean;
  onAdd?: () => void;
}

export function PhotoPlaceholder({ showAdd = false, onAdd }: PhotoPlaceholderProps) {
  const { t } = useLanguage();
  const labels = {
    front: t.common.front,
    side: t.common.side,
    platePhoto: t.common.platePhoto,
  };

  return (
    <div className="flex gap-2.5">
      {PHOTO_KEYS.map((key, i) => (
        <button
          key={key}
          type="button"
          className={cn(
            "btn-press group relative flex aspect-square flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br shadow-sm",
            PHOTO_BG[i],
            "animate-fade-up",
            i === 0 && "stagger-3",
            i === 1 && "stagger-4",
            i === 2 && "stagger-5",
          )}
          aria-label={labels[key]}
        >
          <Camera
            className="h-7 w-7 text-white/90 drop-shadow transition-transform group-active:scale-95"
            strokeWidth={1.5}
          />
          <span className="mt-1.5 text-[9px] font-bold uppercase tracking-wider text-white/80">
            {labels[key]}
          </span>
        </button>
      ))}
      {showAdd && (
        <button
          type="button"
          onClick={onAdd}
          className="btn-press flex aspect-square flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white text-slate-400 transition-colors hover:border-blue-300 hover:text-blue-500"
          aria-label={t.common.add}
        >
          <Plus className="h-7 w-7" strokeWidth={1.5} />
          <span className="mt-1 text-[9px] font-bold uppercase">{t.common.add}</span>
        </button>
      )}
    </div>
  );
}
