export interface Question {
  id: number;
  word: string;
  options: string[];
  answer: string;
}

export interface ExerciseSet {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const exerciseSets: ExerciseSet[] = [
  {
    id: "i-ngan-vs-i-dai",
    title: "/ɪ/ vs /iː/ — Phân biệt nguyên âm ngắn và dài",
    description: "Chọn ký hiệu IPA đúng cho mỗi từ. Cả /ɪ/ và /iː/ đều xuất hiện trong danh sách lựa chọn.",
    questions: [
      { id: 1,  word: "ship",  answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/e/",  "/ʊ/"] },
      { id: 2,  word: "sheep", answer: "/iː/", options: ["/ɪ/", "/iː/", "/e/",  "/ə/"] },
      { id: 3,  word: "bit",   answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/æ/",  "/ə/"] },
      { id: 4,  word: "beat",  answer: "/iː/", options: ["/ɪ/", "/iː/", "/e/",  "/æ/"] },
      { id: 5,  word: "sit",   answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/e/",  "/ʊ/"] },
      { id: 6,  word: "seat",  answer: "/iː/", options: ["/ɪ/", "/iː/", "/ə/",  "/ʊ/"] },
      { id: 7,  word: "live",  answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/e/",  "/æ/"] },
      { id: 8,  word: "leave", answer: "/iː/", options: ["/ɪ/", "/iː/", "/æ/",  "/ə/"] },
      { id: 9,  word: "hit",   answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/ə/",  "/æ/"] },
      { id: 10, word: "heat",  answer: "/iː/", options: ["/ɪ/", "/iː/", "/e/",  "/ʊ/"] },
      { id: 11, word: "dip",   answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/ə/",  "/e/"] },
      { id: 12, word: "deep",  answer: "/iː/", options: ["/ɪ/", "/iː/", "/æ/",  "/ʊ/"] },
      { id: 13, word: "fit",   answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/e/",  "/æ/"] },
      { id: 14, word: "feet",  answer: "/iː/", options: ["/ɪ/", "/iː/", "/e/",  "/ə/"] },
      { id: 15, word: "wick",  answer: "/ɪ/",  options: ["/ɪ/", "/iː/", "/ʊ/",  "/ə/"] },
    ],
  },
];
