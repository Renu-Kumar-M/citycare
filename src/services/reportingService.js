import { ANALYTICS, REPORTS } from "../utils/constants.js";
import { getLocalSampleData } from "./api.js";

export function getAnalytics() {
  return getLocalSampleData(ANALYTICS);
}

export function getReports() {
  return getLocalSampleData(REPORTS);
}
