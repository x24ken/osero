import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCell,
  updatePossibleCells,
  updatePrevChangeCells,
} from "../store/modules/othello";
import { setTurnColor } from "../store/modules/color";
import store from "../store";

const Game = ({ children }) => {
  const { turnColor, cpuColor, userColor } = useSelector(
    (state) => state.color
  );
  const dispatch = useDispatch();

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
        dispatch(
          updatePossibleCells({
            color: userColor,
          })
        );
      }
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const cells = newPossibleCells[randomIndex];
      dispatch(updatePrevChangeCells(cells));

      if (turnColor === "black") {
        cells?.forEach((cell) =>
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
        cells?.forEach((cell) =>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnColor, cpuColor]);

  return <>{children}</>;
};

export default Game;

// 1000ms待つ処理
const wait = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
};
