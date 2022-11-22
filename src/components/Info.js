import { useEffect, useState } from "react";
import { useOthello } from "../context/OthelloContext";
import { usePossibleCells } from "../context/PossibleCellsContext";
import { useTurn } from "../context/TurnContext";

const counter = (othello, color) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (othello[i][j] === color) {
        count++;
      }
    }
  }
  return count;
};

const Info = () => {
  const othello = useOthello();
  const possibleCells = usePossibleCells();
  const turn = useTurn();
  const [blackCount, setBlackCount] = useState(2);
  const [whiteCount, setWhiteCount] = useState(2);

  useEffect(() => {
    setBlackCount(counter(othello, "black"));
    setWhiteCount(counter(othello, "white"));
  }, [othello]);

  return (
    <div className="game-info">
      <div>{turn}</div>
      <div>{`black: ${blackCount} vs white: ${whiteCount} `}</div>
      <div>{possibleCells.length === 0 ? "終わりです!" : ""}</div>
    </div>
  );
};

export default Info;
