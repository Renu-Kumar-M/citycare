const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm({ name = "", email = "", message = "" }) {
  const errors = {};
  if (!String(name).trim()) errors.name = "Enter your name.";
  if (!emailPattern.test(String(email).trim())) errors.email = "Enter a valid email address.";
  if (!String(message).trim()) errors.message = "Enter a short message.";
  return errors;
}

export function validateEmergencyForm({ summary = "", priority = "" }) {
  const errors = {};
  if (!String(summary).trim()) errors.summary = "Add a case summary.";
  if (!String(priority).trim()) errors.priority = "Choose a triage priority.";
  return errors;
}

export function validatePrescriptionForm({ patient = "", medicine = "" }) {
  const errors = {};
  if (!String(patient).trim()) errors.patient = "Enter a sample patient name.";
  if (!String(medicine).trim()) errors.medicine = "Enter a medication.";
  return errors;
}
