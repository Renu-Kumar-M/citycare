export function formatDate(value, options = { year: "numeric", month: "short", day: "numeric" }) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime())
    ? String(value ?? "")
    : new Intl.DateTimeFormat("en", options).format(date);
}

export function formatNumber(value) {
  return new Intl.NumberFormat("en").format(Number(value) || 0);
}

export function cloneSampleData(value) {
  return Array.isArray(value) ? value.map((item) => Array.isArray(item) ? [...item] : { ...item }) : { ...value };
}
