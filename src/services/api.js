import { cloneSampleData } from "../utils/helpers.js";

export function getLocalSampleData(sample) {
  return cloneSampleData(sample);
}

export function getDemoApiStatus() {
  return {
    mode: "demo",
    source: "local sample data",
    connected: false,
    message: "No network requests are made by this site.",
  };
}
