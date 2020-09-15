export default function capitalize(s, isUnown = false) {
  if (isUnown) return s;
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
