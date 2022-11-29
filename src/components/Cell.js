import { usePossibleCells } from "../context/PossibleCellsContext";
import { useSetTurn, useTurn } from "../context/TurnContext";
import styled from "styled-components";
import { useGame } from "../context/GameContext";
import { useDispatch, useSelector } from "react-redux";
import { changeBlack, changeWhite } from "../store/modules/othelloReducer";
import { useEffect } from "react";

const StyledCellCover = styled.div`
  /* オートレイアウト */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px;
  gap: 10px;

  background: #009436;
  border: 1px solid #000000;
`;

const StyledCell = styled.div`
  width: 40px;
  height: 40px;

  &.black {
    background-color: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100%;
  }

  &.cell.white {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100%;
  }

  &.cell.red {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(255, 0, 0, 0.26) 0%,
      rgba(255, 0, 0, 0.104) 100%
    );
    border-radius: 100%;
    cursor: pointer;
    &:hover {
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(205, 255, 6, 0.26) 0%,
        rgba(143, 201, 20, 0.104) 100%
      );
    }
  }
`;

const Cell = ({ cell, isClick }) => {
  const othello = useSelector((state) => state.othello);
  const othelloDispatch = useDispatch();
  const turn = useTurn();
  const setTurn = useSetTurn();
  const [yIndex, xIndex] = cell;
  const value = othello[yIndex][xIndex];
  const possibleCells = usePossibleCells();
  const game = useGame();

  const clickHander = () => {
    if (!isClick) {
      return;
    }
    if (game.cpu === turn) {
      console.log("相手のターンなのでクリックできない");
      return;
    }
    // Javascriptの配列の比較がすごく難しい；；
    // [[3, 3], [4, 4]], [[2, 2], [2, 3]]の中から[2, 2]が最初に来ている配列を探してる
    // ここ上からindexを渡してあげればもっとシンプルにできるんじゃないの？
    let clickIndex;
    for (const [index, array] of possibleCells.entries()) {
      if (array[0].toString() === cell.toString()) {
        clickIndex = index;
      }
    }
    // ひっくり返す配列がこれ↓
    const cells = possibleCells[clickIndex];
    if (turn === "black") {
      cells.map((cell) => othelloDispatch(changeBlack(cell)));
      setTurn("white");
    }

    if (turn === "white") {
      cells.map((cell) => othelloDispatch(changeWhite(cell)));
      setTurn("black");
    }
  };

  // isClickを使って、trueの時にはonClickを出現させ、falseの時には隠したい
  return (
    <StyledCellCover>
      <StyledCell
        onClick={clickHander}
        className={`cell ${isClick ? "red" : value}`}
      ></StyledCell>
    </StyledCellCover>
  );
};

export default Cell;
