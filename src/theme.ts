export type ThemeMode = "light" | "dark";

export const wordColors: Record<ThemeMode, string[]> = {
  light: [
    /* ---------- Deep Neutrals ---------- */
    "#111827", // slate-900
    "#1f2937", // slate-800

    /* ---------- Blues ---------- */
    "#1e40af", // blue-800
    "#1d4ed8", // blue-700
    "#2563eb", // blue-600

    /* ---------- Indigo / Violet ---------- */
    "#312e81", // indigo-900
    "#3730a3", // indigo-800
    "#5b21b6", // violet-800
    "#6d28d9", // violet-700
    "#7c3aed", // violet-600

    /* ---------- Teal / Cyan ---------- */
    "#0f766e", // teal-700
    "#0d9488", // teal-600
    "#0891b2", // cyan-600
    "#155e75", // cyan-700

    /* ---------- Greens ---------- */
    "#14532d", // green-900
    "#166534", // green-800
    "#15803d", // green-700
    "#047857", // emerald-700
    "#059669", // emerald-600

    /* ---------- Amber / Gold ---------- */
    "#78350f", // amber-900
    "#92400e", // amber-800
    "#b45309", // amber-700
    "#d97706", // amber-600
    "#ca8a04", // yellow-600 (golden)

    /* ---------- Rose / Red ---------- */
    "#7f1d1d", // red-900
    "#991b1b", // red-800
    "#9f1239", // rose-800
    "#be123c", // rose-700

    /* ---------- Earth / Sanskrit-friendly ---------- */
    "#4a044e", // deep magenta (śakti tone)
    "#3f2d20", // earthy brown (manuscript ink)
    "#2e1065", // deep purple (tapas / jñāna)
  ],

  dark: [
    // Soft Whites / Grays
    "#f9fafb", // gray-50
    "#f3f4f6", // gray-100
    "#e5e7eb", // gray-200
    "#d1d5db", // gray-300

    // Indigo / Blue
    "#c7d2fe", // indigo-300
    "#a5b4fc", // indigo-400
    "#93c5fd", // blue-300
    "#60a5fa", // blue-400

    // Violet / Purple
    "#ddd6fe", // violet-200
    "#c4b5fd", // violet-300
    "#a78bfa", // violet-400

    // Teal / Cyan
    "#5eead4", // teal-300
    "#2dd4bf", // teal-400
    "#67e8f9", // cyan-300

    // Green
    "#6ee7b7", // emerald-300
    "#4ade80", // green-400

    // Amber / Gold
    "#fde68a", // amber-300
    "#facc15", // amber-400
    "#fbbf24", // amber-400 (golden)

    // Rose / Pink
    "#fda4af", // rose-300
    "#fb7185", // rose-400
  ],
};
