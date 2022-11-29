import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Othello from "./Othello";
import { changeCell, updatePossibleCells } from "../store/modules/othello";
import { setTurnColor } from "../store/modules/info";
import store from "../store";

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
  const dispatch = useDispatch();
  console.log(store.getState());

  const computerClick = async () => {
    if (turnColor === cpuColor) {
      await wait();

      dispatch(
        updatePossibleCells({
          color: cpuColor,
        })
      );
      const res = store.getState();
      const newPossibleCells = res.othello.possibleCells;
      const maxIndex = newPossibleCells.length - 1;
      // ここがパスの挙動
      if (maxIndex === -1) {
        turnColor === "black" && dispatch(setTurnColor("white"));
        turnColor === "white" && dispatch(setTurnColor("black"));
      }

      const randomIndex = Math.floor(Math.random() * maxIndex);
      const cells = newPossibleCells[randomIndex];

      if (turnColor === "black") {
        cells.forEach((cell) =>
          dispatch(
            changeCell({
              cell,
              color: "black",
            })
          )
        );
        dispatch(setTurnColor("white"));
      }

      if (turnColor === "white") {
        cells.forEach((cell) =>
          dispatch(
            changeCell({
              cell,
              color: "white",
            })
          )
        );
        dispatch(setTurnColor("black"));
      }
    }
  };

  useEffect(() => {
    computerClick();
  }, [turnColor, cpuColor]);

  return (
    <>
      <Othello />
    </>
  );
};

export default Game;
