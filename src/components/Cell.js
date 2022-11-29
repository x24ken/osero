import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeCell } from "../store/modules/othello";
import { setTurnColor } from "../store/modules/color";

const StyledCellCover = styled.div`
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
  const { board, possibleCells } = useSelector((state) => state.othello);
  const { turnColor, cpuColor } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const [yIndex, xIndex] = cell;
  const value = board[yIndex][xIndex];

  const clickHander = () => {
    if (!isClick) {
      return;
    }
    if (turnColor === cpuColor) {
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
