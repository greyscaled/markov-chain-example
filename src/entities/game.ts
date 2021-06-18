import { MarkovChain } from "@vapurrmaid/markov-chain";

const GAME_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;
export type GameValues = typeof GAME_VALUES[number];

const p0 = 0;
const p3 = 1 / 3;
const p5 = 1 / 5;
const p8 = 1 / 8;

const GAME_PROBABILITIES = [
  [p0, p3, p0, p3, p3, p0, p0, p0, p0], // 0
  [p5, p0, p5, p5, p5, p5, p0, p0, p0], // 1
  [p0, p3, p0, p3, p3, p0, p0, p0, p0], // 2

  [p5, p5, p0, p0, p5, p0, p5, p5, p0], // 3
  [p8, p8, p8, p8, p0, p8, p8, p8, p8], // 4
  [p0, p5, p5, p0, p5, p0, p0, p5, p5], // 5

  [p0, p0, p0, p3, p3, p0, p0, p3, p0], // 6
  [p0, p0, p0, p5, p5, p5, p5, p0, p5], // 7
  [p0, p0, p0, p0, p3, p3, p0, p3, p0], // 8
];

export const Game = new MarkovChain(Array.from(GAME_VALUES), GAME_PROBABILITIES);
