import type { ViolationCode } from "@/data/violations";

export type ViolationType = ViolationCode;
export type ImpoundStatus = "Towed" | "Pending tow" | "Released";

export interface ImpoundRecord {
  licensePlate: string;
  vehicleModel: string;
  vehicleColor: string;
  ownerName: string;
  ownerPhone: string;
  violation: ViolationType;
  status: ImpoundStatus;
  towedAt: string;
  scannedAt: string;
  scanAddress: string;
  scanCoordinates: string;
  officerNotes: string;
  garageId: string;
  photos: string[];
}

export interface Garage {
  id: string;
  name: string;
  address: string;
  distanceKm: number;
  driveMinutes: number;
  openHours: string;
  isOpen: boolean;
}

export interface FeeBreakdown {
  towingFee: number;
  storageDays: number;
  storagePerDay: number;
  currency: string;
}
