import type { Garage, ImpoundRecord, FeeBreakdown } from "@/types/impound";
import { DEFAULT_VIOLATION } from "@/data/violations";

export const MOCK_PLATE = "12345 - B - 33";
export const MOCK_PLATE_DOCUMENT = "12345 - A - 33";
export const MOCK_VEHICLE = "Dacia Duster";

export interface VehicleRegistry {
  ownerName: string;
  ownerPhone: string;
  vehicleModel: string;
  vehicleColor: string;
}

export const REGISTRY_BY_PLATE: Record<string, VehicleRegistry> = {
  [MOCK_PLATE]: {
    ownerName: "Zine-eddine Bardoud",
    ownerPhone: "+212 6•• •• 08 15",
    vehicleModel: MOCK_VEHICLE,
    vehicleColor: "Grey",
  },
};

export const DEFAULT_SCAN_ADDRESS = "Bd. Mohammed V, Agadir";
export const DEFAULT_SCAN_COORDS = "30.4278° N, 9.5981° W";

export function lookupRegistry(plate: string): VehicleRegistry {
  return (
    REGISTRY_BY_PLATE[plate] ?? {
      ownerName: "Unknown owner",
      ownerPhone: "—",
      vehicleModel: "Unknown vehicle",
      vehicleColor: "—",
    }
  );
}

export const defaultImpound: ImpoundRecord = {
  licensePlate: MOCK_PLATE,
  vehicleModel: MOCK_VEHICLE,
  vehicleColor: "Grey",
  ownerName: "Zine-eddine Bardoud",
  ownerPhone: "+212 6•• •• 08 15",
  violation: DEFAULT_VIOLATION,
  status: "Towed",
  towedAt: "today, 09:34",
  scannedAt: "today, 09:34",
  scanAddress: DEFAULT_SCAN_ADDRESS,
  scanCoordinates: DEFAULT_SCAN_COORDS,
  officerNotes: "",
  garageId: "garage-1",
  photos: ["", "", ""],
};

export const garages: Garage[] = [
  {
    id: "garage-1",
    name: "Agadir garage 01",
    address: "Rue 011 - Agadir",
    distanceKm: 0.8,
    driveMinutes: 4,
    openHours: "from 07:00 to 22:00",
    isOpen: true,
  },
  {
    id: "garage-2",
    name: "Agadir garage 01",
    address: "Rue 024 - Agadir",
    distanceKm: 2.3,
    driveMinutes: 12,
    openHours: "from 07:00 to 22:00",
    isOpen: true,
  },
];

export const fees: FeeBreakdown = {
  towingFee: 300,
  storageDays: 1,
  storagePerDay: 15,
  currency: "MAD",
};

export function totalDue(f: FeeBreakdown): number {
  return f.towingFee + f.storageDays * f.storagePerDay;
}

export const statusOptions = [
  { value: "Towed", label: "Towed" },
  { value: "Pending tow", label: "Pending tow" },
] as const;
