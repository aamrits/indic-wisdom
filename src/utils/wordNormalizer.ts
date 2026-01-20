export const normalizeWord = (input: string): string => {
    return input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove diacritics
        .replace(/[^a-z\s]/g, "")       // keep ascii letters
        .trim();
};
