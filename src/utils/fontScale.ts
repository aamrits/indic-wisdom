import { FontScaleConfig } from "../types";

export const normalizeValue = (
  value: number,
  min: number,
  max: number
) => {
  if (min === max) return 0.5;
  return (value - min) / (max - min);
};

export const calculateFontSize = (
  value: number,
  config: FontScaleConfig
) => {
  const n = normalizeValue(
    value,
    config.minOccurrences,
    config.maxOccurrences
  );

  const adjusted = Math.pow(n, 0.8); // compress top values

  return Math.round(
    config.minSize +
      adjusted * (config.maxSize - config.minSize)
  );
};

export const calculateFontWeight = (
  value: number,
  config: FontScaleConfig
) => {
  const n = normalizeValue(
    value,
    config.minOccurrences,
    config.maxOccurrences
  );

  const adjusted = Math.pow(n, 0.5); // flatter than size

  return Math.round(
    config.minWeight +
      adjusted * (config.maxWeight - config.minWeight)
  );
};
