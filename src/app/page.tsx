import { Car, Shield, User } from "lucide-react";
import { RoleCard } from "@/components/RoleCard";

export default function HomePage() {
  return (
    <div className="gradient-page mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-10">
      <header className="animate-fade-up mb-10 text-center">
        <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg shadow-blue-500/15 ring-1 ring-slate-200/80">
          <Car className="h-7 w-7 text-blue-600" strokeWidth={2} />
        </span>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          Car Impound
        </p>
        <h1 className="mt-2 text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900">
          Smart towing,
          <br />
          <span className="text-blue-600">instant clarity</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-slate-500">
          Connect officers and owners in real time — scan, notify, pay, release.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <RoleCard
          href="/officer"
          title="Officer / Agent"
          description="Document violations and assign impound garages on site."
          icon={Shield}
          accent="officer"
          steps={["Scan", "Photos", "Assign"]}
          delay="stagger-1"
        />
        <RoleCard
          href="/owner"
          title="Vehicle Owner"
          description="See proof, locate your car, pay fees, and get your release code."
          icon={User}
          accent="owner"
          steps={["Notify", "Pay", "Retrieve"]}
          delay="stagger-2"
        />
      </div>

      <p className="mt-auto pt-10 text-center text-[11px] font-medium text-slate-400">
        SupMTI · Projet Interdisciplinaire
      </p>
    </div>
  );
}
