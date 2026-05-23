/** Stable codes for Moroccan urban parking / towing infractions */
export const VIOLATION_CODES = [
  "no_parking_zone",
  "double_parking",
  "sidewalk_parking",
  "blocking_access",
  "handicap_zone",
  "yellow_line",
  "crosswalk",
  "obstructing_traffic",
  "bus_stop",
] as const;

export type ViolationCode = (typeof VIOLATION_CODES)[number];

export const DEFAULT_VIOLATION: ViolationCode = "no_parking_zone";

/** Legacy display values → code (for old localStorage sessions) */
export const LEGACY_VIOLATION_MAP: Record<string, ViolationCode> = {
  "No parking": "no_parking_zone",
  "No Parking": "no_parking_zone",
  "Expired meter": "no_parking_zone",
  "Blocking driveway": "blocking_access",
};

export function normalizeViolationCode(value: string): ViolationCode {
  if ((VIOLATION_CODES as readonly string[]).includes(value)) {
    return value as ViolationCode;
  }
  return LEGACY_VIOLATION_MAP[value] ?? DEFAULT_VIOLATION;
}
