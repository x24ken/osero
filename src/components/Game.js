import { useEffect } from "react";
import { useOthelloDispatch } from "../context/OthelloContext";
import { usePossibleCells } from "../context/PossibleCellsContext";
import { useSetTurn, useTurn } from "../context/TurnContext";
import Othello from "./Othello";

const Game = () => {
  const othelloDispatch = useOthelloDispatch();
  const turn = useTurn();
  const setTurn = useSetTurn();
  const possibleCells = usePossibleCells();

  const computerClick = () => {
    if (turn === "white") {
      const maxIndex = possibleCells.length - 1;
      const randomIndex = Math.floor(Math.random() * maxIndex);

      console.log(randomIndex);

      possibleCells[randomIndex].map((cell) =>
        othelloDispatch({ type: "othello/update/white", cell })
      );
      setTurn("black");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      computerClick();
    }, 1000);
  });

  // CPUのところ;
  useEffect(() => {}, [othelloDispatch, possibleCells, setTurn, turn]);
  return <Othello />;
};

export default Game;
