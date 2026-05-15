export function ViewfinderIcon() {
  const corner =
    "absolute h-11 w-11 border-[3px] border-white/95";
  return (
    <div className="scan-pulse relative mx-auto aspect-square w-full max-w-[220px]">
      <div className="absolute inset-0 rounded-3xl bg-white/5 ring-1 ring-white/10" />
      <span
        className={`${corner} left-2 top-2 rounded-tl-2xl border-r-0 border-b-0`}
      />
      <span
        className={`${corner} right-2 top-2 rounded-tr-2xl border-l-0 border-b-0`}
      />
      <span
        className={`${corner} bottom-2 left-2 rounded-bl-2xl border-r-0 border-t-0`}
      />
      <span
        className={`${corner} bottom-2 right-2 rounded-br-2xl border-l-0 border-t-0`}
      />
      <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
      <span className="scan-line" aria-hidden />
    </div>
  );
}
