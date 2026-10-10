import { EMERGENCY_CASES, EMERGENCY_SUMMARY } from "../utils/constants.js";
import { getLocalSampleData } from "./api.js";

export function getEmergencyCases() {
  return getLocalSampleData(EMERGENCY_CASES);
}

export function getEmergencySummary() {
  return getLocalSampleData(EMERGENCY_SUMMARY);
}
