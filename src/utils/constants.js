export const ROUTES = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
  { label: "Emergency Module", path: "/emergency" },
  { label: "Doctor Dashboard", path: "/doctor-dashboard" },
  { label: "Laboratory", path: "/laboratory" },
  { label: "Pharmacy", path: "/pharmacy" },
  { label: "Reporting", path: "/reporting" },
];

export const SERVICE_CARDS = [
  { title: "Emergency Module", description: "A clear view of triage activity and urgent care.", href: "/emergency" },
  { title: "Doctor Dashboard", description: "Appointments, patient overview, and daily schedule.", href: "/doctor-dashboard" },
  { title: "Laboratory", description: "Follow test progress and review sample results.", href: "/laboratory" },
  { title: "Pharmacy", description: "Medication stock and prescription details.", href: "/pharmacy" },
  { title: "Reporting", description: "Understand service activity with useful insights.", href: "/reporting" },
];

export const STATS = [
  { value: "38+", label: "Years serving Brookside" },
  { value: "120", label: "Care professionals" },
  { value: "24 / 7", label: "Emergency support" },
  { value: "4.8 / 5", label: "Community care rating" },
];

export const DOCTORS = [
  { name: "Dr. Mara Ellison", specialty: "Family medicine", image: "images/doctor-placeholder-1.svg" },
  { name: "Dr. Daniel Cho", specialty: "Cardiology", image: "images/doctor-placeholder-2.svg" },
  { name: "Dr. Amina Patel", specialty: "Pediatrics", image: "images/doctor-placeholder-3.svg" },
  { name: "Dr. Theo Martin", specialty: "Orthopedics", image: "images/doctor-placeholder-4.svg" },
];

export const DOCTOR_SUMMARY = {
  appointments: "12",
  remaining: "3 visits remaining",
  checkedIn: "08",
  waiting: "2 waiting now",
  notes: "03",
  notesAction: "Review after visits",
};

export const PHARMACY_SUMMARY = {
  medicineItems: "248",
  lowStockAlerts: "06",
  readyPrescriptions: "19",
};

export const EMERGENCY_CASES = [
  ["ER-2418", "Avery Morgan", "Chest discomfort", "Immediate", "07 min"],
  ["ER-2417", "Sam Rivera", "Fall — minor injury", "Urgent", "14 min"],
  ["ER-2416", "Taylor Quinn", "Persistent fever", "Standard", "22 min"],
  ["ER-2415", "Jamie Park", "Breathing difficulty", "Urgent", "31 min"],
];

export const EMERGENCY_SUMMARY = {
  casesToday: "18",
  currentlyInCare: "4 currently in care",
  averageTriage: "07 min",
  triageNote: "Within target window",
  careSpaces: "12 / 16",
  careSpacesNote: "4 spaces available",
};

export const PATIENT_OVERVIEW = [
  ["CL-0831", "Rowan Ellis", "Follow-up · Cardiology", "10:30 AM"],
  ["CL-1025", "Casey Bennett", "New visit · Family care", "11:15 AM"],
  ["CL-0198", "Skylar Brooks", "Consult · Dermatology", "1:40 PM"],
];

export const APPOINTMENTS = [
  ["09:00", "Harper Lane", "Annual wellness", "Complete"],
  ["10:30", "Rowan Ellis", "Cardiology follow-up", "In room"],
  ["11:15", "Casey Bennett", "Family care · New visit", "Expected"],
  ["13:40", "Skylar Brooks", "Dermatology consult", "Expected"],
  ["14:30", "Alex Kim", "Review results", "Expected"],
];

export const LAB_TESTS = [
  ["LT-9081", "Complete blood count", "Morgan, A.", "In progress", "09:42"],
  ["LT-9078", "Metabolic panel", "Rivera, S.", "Ready", "09:18"],
  ["LT-9075", "Lipid profile", "Quinn, T.", "Ready", "08:56"],
  ["LT-9071", "Thyroid function", "Park, J.", "In progress", "08:31"],
  ["LT-9068", "Urinalysis", "Brooks, S.", "Collected", "08:05"],
];

export const LAB_REPORT = {
  id: "LT-9078",
  title: "Metabolic panel",
  patient: "Sample patient",
  date: "14 Apr 2025",
  results: [
    ["Glucose", "92 mg/dL", "Normal"],
    ["Sodium", "140 mmol/L", "Normal"],
    ["Potassium", "4.1 mmol/L", "Normal"],
    ["Creatinine", "0.9 mg/dL", "Normal"],
  ],
};

export const PHARMACY_INVENTORY = [
  ["MED-101", "Amoxicillin 500mg", "Capsule", "In stock", "126"],
  ["MED-114", "Lisinopril 10mg", "Tablet", "In stock", "84"],
  ["MED-126", "Albuterol inhaler", "Inhaler", "Low stock", "08"],
  ["MED-138", "Metformin 500mg", "Tablet", "In stock", "61"],
  ["MED-142", "Atorvastatin 20mg", "Tablet", "Low stock", "12"],
];

export const ANALYTICS = {
  visits: [
    ["M", 38],
    ["T", 57],
    ["W", 44],
    ["T", 73],
    ["F", 62],
    ["S", 45],
    ["S", 82],
  ],
  metrics: [
    ["Visits this week", "1,284", "8.4% vs last week"],
    ["Care experience", "4.7 / 5", "Patient feedback"],
    ["Average wait", "18 min", "Across outpatient care"],
  ],
};

export const REPORTS = [
  ["Service volume summary", "12 Apr 2025", "Operations"],
  ["Laboratory turnaround", "11 Apr 2025", "Diagnostics"],
  ["Community care feedback", "10 Apr 2025", "Experience"],
  ["Pharmacy stock review", "08 Apr 2025", "Pharmacy"],
];
