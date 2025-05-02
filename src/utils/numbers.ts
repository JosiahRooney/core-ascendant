const SUFFIXES = [
  "",
  "k",
  "m",
  "b",
  "t",
  "q",
  "Q",
  "sx",
  "sp",
  "oc",
  "no",
  "de",
  "ud",
  "dd",
  "td",
  "qd",
  "Qi",
  "Sx",
  "Sp",
  "Oc",
  "No",
  "Vg",
  "UVg",
  "DVg",
  "TVg",
  "QVg",
  "QiVg",
  "SxVg",
  "SpVg",
  "OcVg",
  "NoVg",
  "Tg",
];

function formatNumber(value: number): string {
  const abs = Math.abs(value);
  if (abs < 1000) return value.toString();

  const tier = Math.floor(Math.log10(abs) / 3);
  const suffix = SUFFIXES[tier] || "";
  const scaled = value / Math.pow(10, tier * 3);

  // Determine decimal precision based on raw value
  let digits = 2;
  if (abs >= 100_000) digits = 0;
  else if (abs >= 10_000) digits = 1;

  const trimmed = Number(scaled.toFixed(digits)).toString();

  // Fallback to scientific if we exceed known suffixes
  if (!suffix)
    return Number(value.toExponential(digits)).toString().replace("+", "");

  return trimmed + suffix;
}

export default formatNumber;
