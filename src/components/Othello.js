import { useEffect } from "react";
import { useOthello } from "../context/OthelloContext";
import { useDispatchPossibleCells } from "../context/PossibleCellsContext";
import { useTurn } from "../context/TurnContext";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";

import Board from "./Board";
import Info from "./Info";

const Othello = () => {
  const othello = useOthello();
  const possibleCellsdispatch = useDispatchPossibleCells();
  const turn = useTurn();

  // PossibleCellsの配列を更新する（赤いところ)
  useEffect(() => {
    const newPossibleCells = checkPossibleReturnOthelloArray(
      othello,
      turn === "black"
    );
    possibleCellsdispatch({ type: "possibleCells/update", newPossibleCells });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [othello]);

  return (
    <div className="game">
      <Board />
      <Info />
    </div>
  );
};

export default Othello;
