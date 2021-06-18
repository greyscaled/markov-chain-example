import React from "react";
import { classes, stylesheet } from "typestyle";
import { Game } from "../entities/game";

interface GameGridProps {
  game: typeof Game;
}

const styles = stylesheet({
  tableCell: {
    border: "1px solid #000",
    padding: 32,
  },
  tableCellSelected: {
    backgroundColor: "purple",
    color: "#fff",
  },
  tableCellContent: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  tableCellContentValue: {
    fontWeight: "bold",
  },
  tableCellContentProbability: {
    marginTop: "8px",
  },
});

const TABLE_DATA = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export const GameGrid: React.FC<GameGridProps> = ({ game }) => {
  const cellClass = (value: number): string | undefined => {
    if (value === game.current) {
      return classes(styles.tableCell, styles.tableCellSelected);
    }
    return styles.tableCell;
  };

  const probabilityString = (val: number): string => {
    const pVector = game.probabilityMatrix[game.current];
    const fixedDecimals = 3;
    return `P=${pVector[val].toFixed(fixedDecimals)}`;
  };

  return (
    <table>
      {TABLE_DATA.map((row, idx) => (
        <tr key={idx}>
          {row.map((val) => (
            <td className={cellClass(val)} key={val}>
              <div className={styles.tableCellContent}>
                <div className={styles.tableCellContentValue}>{val}</div>
                <code className={styles.tableCellContentProbability}>{probabilityString(val)}</code>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
