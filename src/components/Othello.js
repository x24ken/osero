import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkPossibleReturnOthelloArray } from "../helpers/OthelloHelper";
import { possibleCellsUpdate } from "../store/modules/possibleCells";
import Board from "./Board";
import styled from "styled-components";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Othello = () => {
  const board = useSelector((state) => state.othello.board);
  const turnColor = useSelector((state) => state.info.turnColor);
  const dispatch = useDispatch();

  // PossibleCellsの配列を更新する（赤いところ)
  useEffect(() => {
    const newPossibleCells = checkPossibleReturnOthelloArray(
      board,
      turnColor === "black"
    );
    dispatch(possibleCellsUpdate(newPossibleCells));
  }, [board, turnColor, dispatch]);

  return (
    <StyledBoard>
      <Board />
    </StyledBoard>
  );
};

export default Othello;
