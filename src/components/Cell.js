import { useOthello, useOthelloDispatch } from "../context/OthelloContext";
import { usePossibleCells } from "../context/PossibleCellsContext";
import { useSetTurn, useTurn } from "../context/TurnContext";
import "./Cell.css";

const Cell = ({ cell, isClick }) => {
  const othello = useOthello();
  const othelloDispatch = useOthelloDispatch();
  const turn = useTurn();
  const setTurn = useSetTurn();
  const [yIndex, xIndex] = cell;
  const value = othello[yIndex][xIndex];
  const possibleCells = usePossibleCells();

  const clickHander = () => {
    if (!isClick) {
      return;
    }
    // Javascriptの配列の比較がすごく難しい；；
    let clickIndex;
    for (const [index, array] of possibleCells.entries()) {
      if (array[0].toString() === cell.toString()) {
        clickIndex = index;
      }
    }
    // ひっくり返す配列がこれ↓
    const cells = possibleCells[clickIndex];
    if (turn === "black") {
      cells.map((cell) =>
        othelloDispatch({ type: "othello/update/black", cell })
      );
      setTurn("white");
    }
    if (turn === "white") {
      cells.map((cell) =>
        othelloDispatch({ type: "othello/update/white", cell })
      );
      setTurn("black");
    }
  };

  // isClickを使って、trueの時にはonClickを出現させ、falseの時には隠したい
  return (
    <button
      onClick={clickHander}
      className={`cell ${isClick ? "red" : value}`}
    ></button>
  );
};

export default Cell;
