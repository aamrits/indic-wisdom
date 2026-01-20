// WordTiles.jsx
import React from "react";
import "../assets/mobile-layout.css";

type TileWord = {
  label: string;
  slug: string;
};

type Props = {
  words: TileWord[];
  columns: 2;
  onNavigate: (slug: string) => void;
};

const WordTiles = ({ words, columns, onNavigate }: Props) => {
  return (
    <div
      className="word-tiles-grid"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {words.map((word, i) => (
        <button
          key={i}
          className="word-tile"
          onClick={() => onNavigate(word.slug)}
          title={word.label}
        >
          <span className="word-text">{word.label}</span>
        </button>
      ))}
    </div>
  );
};

export default WordTiles;
