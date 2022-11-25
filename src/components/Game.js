import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { useOthello, useOthelloDispatch } from "../context/OthelloContext";
import { usePossibleCells } from "../context/PossibleCellsContext";
import { useSetTurn, useTurn } from "../context/TurnContext";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import Othello from "./Othello";
import PassButton from "./PassButton";

// 1000ms待つ処理
const wait = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
};

const Game = () => {
  const turn = useTurn();
  const setTurn = useSetTurn();
  const othelloDispatch = useOthelloDispatch();
  const othello = useOthello();
  const game = useGame();
  const possibleCells = usePossibleCells();

  const computerClick = async () => {
    if (turn === game.cpu) {
      await wait();
      const newPossibleCells = checkPossibleReturnOthelloArray(
        othello,
        turn === "black"
      );
      const maxIndex = newPossibleCells.length - 1;
      if (maxIndex === -1) {
        return;
      }
      const randomIndex = Math.floor(Math.random() * maxIndex);
      newPossibleCells[randomIndex].map((cell) =>
        othelloDispatch({ type: `othello/update/${turn}`, cell })
      );
      setTurn((prev) => (prev === "black" ? "white" : "black"));
    }
  };

  useEffect(() => {
    computerClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, game]);

  useEffect(() => {
    if (possibleCells.length === 0) {
      console.log("パス");
      setTurn((prev) => (prev === "black" ? "white" : "black"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [possibleCells]);

  return (
    <>
      <Othello />
    </>
  );
};

export default Game;
