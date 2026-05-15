"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ImpoundRecord, ImpoundStatus, ViolationType } from "@/types/impound";
import {
  MOCK_PLATE,
  DEFAULT_SCAN_ADDRESS,
  DEFAULT_SCAN_COORDS,
  lookupRegistry,
  garages,
} from "@/data/mock";

const STORAGE_KEY = "car-impound-simulation";

export interface ImpoundDraft {
  licensePlate: string;
  vehicleModel: string;
  vehicleColor: string;
  ownerName: string;
  ownerPhone: string;
  violation: string;
  status: string;
  garageId: string;
  scannedAt: string;
  scanAddress: string;
  scanCoordinates: string;
  officerNotes: string;
}

interface ImpoundState {
  draft: ImpoundDraft;
  activeImpound: ImpoundRecord | null;
  releaseCode: string | null;
  isPaid: boolean;
}

interface ImpoundContextValue extends ImpoundState {
  hasActiveImpound: boolean;
  selectedGarage: (typeof garages)[number];
  updateDraft: (patch: Partial<ImpoundDraft>) => void;
  scanPlate: (plate?: string) => void;
  confirmImpound: () => void;
  completePayment: () => string;
  resetSimulation: () => void;
}

function formatTime(date = new Date()) {
  const h = date.getHours().toString().padStart(2, "0");
  const m = date.getMinutes().toString().padStart(2, "0");
  return `today, ${h}:${m}`;
}

function buildDefaultDraft(): ImpoundDraft {
  const registry = lookupRegistry(MOCK_PLATE);
  return {
    licensePlate: MOCK_PLATE,
    vehicleModel: registry.vehicleModel,
    vehicleColor: registry.vehicleColor,
    ownerName: registry.ownerName,
    ownerPhone: registry.ownerPhone,
    violation: "No parking",
    status: "Towed",
    garageId: garages[0].id,
    scannedAt: formatTime(),
    scanAddress: DEFAULT_SCAN_ADDRESS,
    scanCoordinates: DEFAULT_SCAN_COORDS,
    officerNotes: "",
  };
}

const initialState: ImpoundState = {
  draft: buildDefaultDraft(),
  activeImpound: null,
  releaseCode: null,
  isPaid: false,
};

function normalizeViolation(value: string): ViolationType {
  const lower = value.toLowerCase();
  if (lower.includes("parking")) return "No Parking";
  if (lower.includes("meter")) return "Expired meter";
  if (lower.includes("driveway")) return "Blocking driveway";
  return "No Parking";
}

function normalizeStatus(value: string): ImpoundStatus {
  if (value === "Pending tow") return "Pending tow";
  if (value === "Released") return "Released";
  return "Towed";
}

function buildRecord(draft: ImpoundDraft): ImpoundRecord {
  const towedAt = formatTime();
  return {
    licensePlate: draft.licensePlate,
    vehicleModel: draft.vehicleModel,
    vehicleColor: draft.vehicleColor,
    ownerName: draft.ownerName,
    ownerPhone: draft.ownerPhone,
    violation: normalizeViolation(draft.violation),
    status: normalizeStatus(draft.status),
    towedAt,
    scannedAt: draft.scannedAt,
    scanAddress: draft.scanAddress,
    scanCoordinates: draft.scanCoordinates,
    officerNotes: draft.officerNotes,
    garageId: draft.garageId,
    photos: ["front", "side", "plate"],
  };
}

const ImpoundContext = createContext<ImpoundContextValue | null>(null);

export function ImpoundProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ImpoundState>(initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setState(JSON.parse(raw) as ImpoundState);
    } catch {
      /* ignore corrupt storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota errors */
    }
  }, [state]);

  const updateDraft = useCallback((patch: Partial<ImpoundDraft>) => {
    setState((prev) => ({
      ...prev,
      draft: { ...prev.draft, ...patch },
    }));
  }, []);

  const scanPlate = useCallback((plate = MOCK_PLATE) => {
    const registry = lookupRegistry(plate);
    setState((prev) => ({
      ...prev,
      draft: {
        ...prev.draft,
        licensePlate: plate,
        vehicleModel: registry.vehicleModel,
        vehicleColor: registry.vehicleColor,
        ownerName: registry.ownerName,
        ownerPhone: registry.ownerPhone,
        scannedAt: formatTime(),
        scanAddress: DEFAULT_SCAN_ADDRESS,
        scanCoordinates: DEFAULT_SCAN_COORDS,
      },
    }));
  }, []);

  const confirmImpound = useCallback(() => {
    setState((prev) => {
      const record = buildRecord(prev.draft);
      return {
        ...prev,
        activeImpound: record,
        releaseCode: null,
        isPaid: false,
      };
    });
  }, []);

  const completePayment = useCallback(() => {
    const code =
      "REL-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setState((prev) => ({
      ...prev,
      isPaid: true,
      releaseCode: code,
      activeImpound: prev.activeImpound
        ? { ...prev.activeImpound, status: "Released" }
        : null,
    }));
    return code;
  }, []);

  const resetSimulation = useCallback(() => {
    setState({
      draft: buildDefaultDraft(),
      activeImpound: null,
      releaseCode: null,
      isPaid: false,
    });
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const selectedGarage =
    garages.find(
      (g) =>
        g.id ===
        (state.activeImpound?.garageId ?? state.draft.garageId),
    ) ?? garages[0];

  const value = useMemo<ImpoundContextValue>(
    () => ({
      ...state,
      hasActiveImpound: state.activeImpound !== null,
      selectedGarage,
      updateDraft,
      scanPlate,
      confirmImpound,
      completePayment,
      resetSimulation,
    }),
    [
      state,
      selectedGarage,
      updateDraft,
      scanPlate,
      confirmImpound,
      completePayment,
      resetSimulation,
    ],
  );

  return (
    <ImpoundContext.Provider value={value}>{children}</ImpoundContext.Provider>
  );
}

export function useImpound() {
  const ctx = useContext(ImpoundContext);
  if (!ctx) {
    throw new Error("useImpound must be used within ImpoundProvider");
  }
  return ctx;
}
