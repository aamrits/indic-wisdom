import { wordColors } from "../theme";

type Word = { text: string; value: number };

export const getWordColor = (mode: "light" | "dark") => {
    const palette = wordColors[mode];

    return (word: Word) => {
        let hash = 0;
        for (let i = 0; i < word.text.length; i++) {
            hash = word.text.charCodeAt(i) + ((hash << 5) - hash);
        }
        return palette[Math.abs(hash) % palette.length];
    };
};