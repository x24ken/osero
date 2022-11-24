import { useEffect } from "react";
import { useGame } from "../context/GameContext";
import { useOthello, useOthelloDispatch } from "../context/OthelloContext";
import { useSetTurn, useTurn } from "../context/TurnContext";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import Othello from "./Othello";

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

  const computerClick = async () => {
    if (turn === game.cpu) {
      await wait();
      const newPossibleCells = checkPossibleReturnOthelloArray(
        othello,
        turn === "black"
      );
      console.log(newPossibleCells.length);
      const maxIndex = newPossibleCells.length - 1;
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

  return (
    <>
      <Othello />
    </>
  );
};

export default Game;
