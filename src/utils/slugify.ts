export const slugify = (input: unknown): string => {
    if (typeof input !== "string") return "";

    return input
        .normalize("NFD")                 // split base + diacritics
        .replace(/[\u0300-\u036f]/g, "")  // remove diacritics
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
};