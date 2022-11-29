import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "./Board";
import styled from "styled-components";
import { updatePossibleCells } from "../store/modules/othello";
import { setCounter } from "../store/modules/counter";

const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`;

const Othello = () => {
  const board = useSelector((state) => state.othello.board);
  const turnColor = useSelector((state) => state.color.turnColor);
  const dispatch = useDispatch();

  // PossibleCellsの配列を更新する（赤いところ)
  useEffect(() => {
    dispatch(
      updatePossibleCells({
        color: turnColor,
      })
    );
    dispatch(
      setCounter({
        board,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, turnColor]);

  return (
    <StyledBoard>
      <Board />
    </StyledBoard>
  );
};

export default Othello;
