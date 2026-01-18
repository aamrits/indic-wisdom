import { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import WordCloud from "react-d3-cloud";
import { slugify, getWordColor, calculateFontSize, calculateFontWeight } from "../utils";
import { FontScaleConfig, Word } from "../types";

type Props = {
  words: Word[];
  mode: "light" | "dark";
};

const MAX_FONT_SIZE = 200;
const MIN_FONT_SIZE = 50;
const MAX_FONT_WEIGHT = 700;
const MIN_FONT_WEIGHT = 400;
const MAX_WORDS = 150;

export const WordCloudComponent = ({ words, mode }: Props) => {
  const navigate = useNavigate();

  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  // Sort & limit words
  const sortedWords = useMemo(
    () => [...words].sort((a, b) => b.value - a.value).slice(0, MAX_WORDS),
    [words]
  );

  // Find min / max occurrences
  const [minOccurrences, maxOccurrences] = useMemo(() => {
    const values = sortedWords.map((w) => w.value);
    return [Math.min(...values), Math.max(...values)];
  }, [sortedWords]);

  // Font scale configuration
  const fontScaleConfig: FontScaleConfig = useMemo(
    () => ({
      minOccurrences,
      maxOccurrences,
      minSize: MIN_FONT_SIZE,
      maxSize: MAX_FONT_SIZE,
      minWeight: MIN_FONT_WEIGHT,
      maxWeight: MAX_FONT_WEIGHT,
    }),
    [minOccurrences, maxOccurrences]
  );

  // Event handlers
  const handleClick = useCallback(
    (event: PointerEvent, word: any) => {
      if (!word?.text) return;

      navigate(`/${slugify(word.text)}`);
    },
    [navigate]
  );

  const handleMouseOver = useCallback(
    (event: PointerEvent, word: any) => {
      if (!word?.text) return;

      setTooltip({
        text: word.text,
        x: event.clientX,
        y: event.clientY,
      });
    },
    []
  );

  const handleMouseOut = useCallback(() => {
    setTooltip(null);
  }, []);


  return (
    <div style={{ width: "900px", height: "450px" }} className="svg-container">
      <WordCloud
        width={1800}
        height={1000}
        data={sortedWords}
        font="Times"
        rotate={0}
        padding={10}
        random={() => 0.4}
        spiral='archimedean'
        fill={getWordColor(mode)}
        fontSize={(word) => calculateFontSize(word.value, fontScaleConfig)}
        fontWeight={(word) => calculateFontWeight(word.value, fontScaleConfig)}
        onWordClick={handleClick}
        onWordMouseOver={handleMouseOver}
        onWordMouseOut={handleMouseOut}
      />

      {/* Tooltip */}
      {tooltip && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y + 10,
            left: tooltip.x + 10,
            background: "#111",
            color: "#fff",
            padding: "6px 10px",
            borderRadius: "4px",
            fontSize: "14px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 1000,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};
