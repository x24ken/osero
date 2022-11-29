import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import Othello from "./Othello";
import { changeBlack, changeWhite } from "../store/modules/othello";
import { setTurnColor } from "../store/modules/info";

// 1000ms待つ処理
const wait = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
};

const Game = () => {
  const { turnColor, cpuColor } = useSelector((state) => state.info);
  const possibleCells = useSelector((state) => {
    return state.possibleCells;
  });
  const board = useSelector((state) => state.othello.board);
  const dispatch = useDispatch();

  const computerClick = async () => {
    if (turnColor === cpuColor) {
      await wait();
      const newPossibleCells = checkPossibleReturnOthelloArray(
        board,
        turnColor === "black"
      );
      const maxIndex = newPossibleCells.length - 1;
      // ここがパスの挙動
      if (maxIndex === -1) {
        turnColor === "black" && dispatch(setTurnColor("white"));
        turnColor === "white" && dispatch(setTurnColor("black"));
      }
      const randomIndex = Math.floor(Math.random() * maxIndex);
      newPossibleCells[randomIndex].map((cell) => {
        if (turnColor === "black") {
          return dispatch(changeBlack(cell));
        } else if (turnColor === "white") {
          return dispatch(changeWhite(cell));
        }
      });
      turnColor === "black" && dispatch(setTurnColor("white"));
      turnColor === "white" && dispatch(setTurnColor("black"));
    }
  };

  useEffect(() => {
    computerClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnColor]);

  useEffect(() => {
    if (turnColor === cpuColor) {
      if (possibleCells === 0) {
        console.log("%cお前の勝ち", "font-size: 24px");
      }
    }
  });

  return (
    <>
      <Othello />
    </>
  );
};

export default Game;
