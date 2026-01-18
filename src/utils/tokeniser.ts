const STOP_WORDS = new Set([
  "the", "is", "and", "a", "an", "to", "of", "in", "on", "for",
  "with", "as", "by", "at", "from", "this", "that", "it",
  "are", "was", "were", "be", "been", "has", "have", "had",
]);

export const getWordCloudData = (text: string) => {
  const tokens = text
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\s]/gu, "")
    .split(/\s+/)
    .filter(
      (word) => word.length > 1 && !STOP_WORDS.has(word)
    );

  const counts = tokens.reduce<Record<string, number>>(
    (acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    },
    {}
  );

  return Object.entries(counts).map(([text, value]) => ({
    text,
    value,
  }));
};
