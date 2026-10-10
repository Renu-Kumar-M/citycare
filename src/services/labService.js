import { LAB_REPORT, LAB_TESTS } from "../utils/constants.js";
import { getLocalSampleData } from "./api.js";

export function getLabTests() {
  return getLocalSampleData(LAB_TESTS);
}

export function getLabReport() {
  return getLocalSampleData(LAB_REPORT);
}
